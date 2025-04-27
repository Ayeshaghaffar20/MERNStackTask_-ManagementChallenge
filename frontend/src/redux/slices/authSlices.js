import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// // Register Thunk
// export const registerUser = createAsyncThunk(
//     'auth/registerUser',
//     async (formData, { rejectWithValue }) => {
//       try {
//         const response = await axios.post(
//           `${import.meta.env.VITE_BACKEND_URL}/api/users/register`,
//           formData,
//           { withCredentials: true }
//         );
//         console.log('✅ Registration Successful:', response.data);
//         return response.data.user
//       } catch (error) {
//         console.log('❌ Registration fail:', error.response?.data || error.message);
//         return rejectWithValue(error.response?.data?.message || "Registration Failed");
//       }
//     }
//   );
  

// // Login Thunk
// export const loginUser = createAsyncThunk(
//   'auth/loginUser',
//   async (formData, { rejectWithValue }) => {
//     try {
//       const response = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/api/users/login`, formData, {
//         withCredentials: true,
//       });
//       return response.data;
//     } catch (error) {
//       return rejectWithValue(error.response.data.message || "Login Failed");
//     }
//   }
// );

// const initialState = {
//   user: null,
//   token: null,
//   loading: false,
//   error: null,
// };

// const authSlice = createSlice({
//   name: 'auth',
//   initialState,
//   reducers: {
//     logout(state) {
//       state.user = null;
//       state.token = null;
//       state.error = null;
//       // Optional: You can also remove cookies if you handle it manually on client
//     },
//   },
//   extraReducers: (builder) => {
//     // Register User
//     builder
//       .addCase(registerUser.pending, (state) => {
//         state.loading = true;
//         state.error = null;
//       })
//       .addCase(registerUser.fulfilled, (state, action) => {
//         state.loading = false;
//         state.user = action.payload.user;
//         state.token = action.payload.token; 
//         state.error = null;
//       })
//       .addCase(registerUser.rejected, (state, action) => {
//         state.loading = false;
//         state.error = action.payload;
//       })

//       // Login User
//       .addCase(loginUser.pending, (state) => {
//         state.loading = true;
//         state.error = null;
//       })
//       .addCase(loginUser.fulfilled, (state, action) => {
//         state.loading = false;
//         state.user = action.payload.user;
//         state.token = action.payload.token;
//         state.error = null;
//       })
//       .addCase(loginUser.rejected, (state, action) => {
//         state.loading = false;
//         state.error = action.payload;
//       });
//   },
// });

// export const { logout } = authSlice.actions;

// export default authSlice.reducer;


export const loginUser = createAsyncThunk(
    "auth/loginUser",
    async (userData, {rejectWithValue}) =>{
        try {
            const response = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/api/users/login`,userData)
            localStorage.setItem("userInfo",JSON.stringify(response.data.user))
            localStorage.setItem("userToken", response.data.token)

            return response.data.user
        } catch (error) {
            return rejectWithValue(error.response.data);
        }
    }
)

// REGISTER USER

export const registerUser = createAsyncThunk(
    "auth/registerUser",
    async (userData, {rejectWithValue}) =>{
        try {
            const response = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/api/users/register`,userData)
            localStorage.setItem("userInfo",JSON.stringify(response.data.user))
            localStorage.setItem("userToken", response.data.token)

            return response.data.user
        } catch (error) {
            // return rejectWithValue(error.response.data);
            
              // Log the error to inspect the structure
      console.error("Error during registration:", error);

      if (error.response && error.response.data) {
        return rejectWithValue(error.response.data);
      }else{
          // Provide a fallback error message if no response is found
          return rejectWithValue({
            message: "Registration failed. Please try again."
          });
      }

            
        }
    }
)

const initialState = {
      user: null,
      token: null,
      loading: false,
      error: null,
    };

const authSlice = createSlice({
    name:"auth",
    initialState,
    reducers:{
        logout:(state) =>{
            state.user = null ;
            state.guestId = `guest_${new Date().getTime()}`
            localStorage.removeItem("userInfo")
            localStorage.removeItem("usertoken")
            localStorage.setItem("guestId",state.guestId)
            
        },

        generateNewGuestID:(state)=>{
            state.guestId = `guest_${new Date().getTime()}`
            localStorage.setItem("guestId",state.guestId)

        },

        clearSuccess: (state) => {
            state.success = false; 
          },
    },

    extraReducers: (builder) => {
        builder
          .addCase(loginUser.pending, (state) => {
            state.loading = true;
            state.error = null;
          })
          .addCase(loginUser.fulfilled, (state, action) => {
            state.loading = false;
            state.user = action.payload;
            state.error = null; // ✅ Clear previous error if login succeeds
            state.success = true; 
          })
          .addCase(loginUser.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload?.message || "Login failed. Please try again."; // ✅ Safe fallback
          })
      
          .addCase(registerUser.pending, (state) => {
            state.loading = true;
            state.error = null;
          })
          .addCase(registerUser.fulfilled, (state, action) => {
            state.loading = false;
            state.user = action.payload;
            state.error = null; 
            state.success = true; 
          })
          .addCase(registerUser.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload?.message || "Registration failed. Please try again."; // ✅ Safe fallback
          });
      }
      


    });
    
    
export const {logout,generateNewGuestID,clearSuccess} = authSlice.actions 
export default authSlice.reducer


