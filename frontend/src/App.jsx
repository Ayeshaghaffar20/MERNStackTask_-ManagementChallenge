import React from 'react'
import {BrowserRouter, Route, Routes} from "react-router-dom"
import {Provider} from "react-redux";
import Register from './pages/register'
import Login from './pages/Login'
import UserLayout from './components/layout/UserLayout'
import Home from './pages/Home';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import store from './redux/store';



const App = () => {
  return (
 <>

 <div>

   <ToastContainer position="top-center" />
<Provider store={store}>
<BrowserRouter>
  <Routes>
  <Route path='/' element={<UserLayout/>}>
  <Route index element={<Home/>}/>
  <Route path='/register' element={<Register/>}/>
  <Route path='/login' element={<Login/>}/>

  


  </Route>
  </Routes>
</BrowserRouter>
</Provider>
</div>
 
 </>
  )
}

export default App
