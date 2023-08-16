import React from 'react'
import Dashboard from './components/Dashboard'
import Connections from './components/Connections'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Profile from './components/Profile'
import Register from './components/Register'
import Login from './components/Login'
import { useState } from "react";


const App = () => {
const[user,setLoginUser] =useState({})

  return (
    <div>
     <BrowserRouter>
     <Routes>
     <Route  path="/"  index element={
       user && user._id ?<Profile setLoginUser ={setLoginUser} user={user}/> : <Login setLoginUser ={setLoginUser}/>
     } />
     <Route path='/connections' element={
      user && user._id ?<Connections setLoginUser ={setLoginUser} user={user}/> : <Login setLoginUser ={setLoginUser}/>}/>  
     <Route path='/login' element={<Login setLoginUser={setLoginUser}/>} />
     <Route path='/register' element={<Register/>} />  

     </Routes>
     </BrowserRouter>
    </div>
  )
}

export default App
