import React, { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify'; 

const Register= () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [isSignup, setIsSignup] = useState(true);

  // Handle form submission
  const onSubmitHandler = async (e) => {
    e.preventDefault();
    setLoading(true); // Start loading

    try {
      axios.defaults.withCredentials = true; 

      if (isSignup) {
        
        const { data } = await axios.post(
          `${import.meta.env.VITE_BACKEND_URL}/api/users/register`,
          { name, email, password }
        );

        if (data.success) {
          toast.success('Account created successfully. Please log in.');
          setIsSignup(false);
        } else {
          toast.error(data?.message || 'Something went wrong');
        }
      } else {
     
      

        if (data.success) {
          toast.success('Logged in successfully');
        } else {
          toast.error(data?.message || 'Something went wrong');
        }
      }
    } catch (error) {
      const message = error.response?.data?.message || 'Something went wrong';
      toast.error(message); 
    } finally {
      setLoading(false); 
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center pt-16 bg-gray-100">
      <div className="max-w-md w-full bg-white p-6 shadow-md rounded-md">
        <h2 className="text-2xl font-bold text-center mb-4">{isSignup ? 'Register' : 'Login'}</h2>
        {error && <p className="text-red-500 text-center mb-4">{error}</p>}
        <form onSubmit={onSubmitHandler}>
          {isSignup && (
            <div className="mb-4">
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                Name
              </label>
              <input
                id="name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                required
              />
            </div>
          )}
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>
          <div className="flex justify-center">
            <button
              type="submit"
              className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
              disabled={loading}
            >
              {loading ? 'Processing...' : isSignup ? 'Register' : 'Login'}
            </button>
          </div>
        </form>
        <div className="mt-4 text-center">
          <button
            onClick={() => setIsSignup((prev) => !prev)}
            className="text-blue-600 hover:underline"
          >
            {isSignup ? 'Already have an account? Log in' : 'Don\'t have an account? Register'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Register;
