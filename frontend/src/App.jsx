import React from 'react'
import {BrowserRouter, Route, Routes} from "react-router-dom"
import {Provider} from "react-redux";
import Register from './pages/register'
import Login from './pages/Login'
import UserLayout from './components/layout/UserLayout'
import store from './redux/store';
import Home from './pages/Home';
import ViewTask from './pages/ViewTask';



const App = () => {
  return (
 <>

 <div>

<Provider store={store}>
<BrowserRouter>
  <Routes>
  <Route path='/' element={<UserLayout/>}>
  <Route index element={<Home/>}/>
  <Route path='/register' element={<Register/>}/>
  <Route path='/login' element={<Login/>}/>
  <Route path='/view-task' element={<ViewTask/>}/>
  


  </Route>
  </Routes>
</BrowserRouter>
</Provider>
</div>
 
 </>
  )
}

export default App
