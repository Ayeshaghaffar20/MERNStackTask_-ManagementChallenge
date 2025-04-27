import React from 'react'
import {BrowserRouter, Route, Routes} from "react-router-dom"

import Register from './pages/register'
import Login from './pages/Login'
import UserLayout from './components/layout/UserLayout'



const App = () => {
  return (
    <div>
     
      <BrowserRouter>
        <Routes>
        <Route path='/' element={<UserLayout/>}>
        <Route path='register' element={<Register/>}/>
        <Route path='login' element={<Login/>}/>

        </Route>
        </Routes>
      </BrowserRouter>
    
    </div>
  )
}

export default App
