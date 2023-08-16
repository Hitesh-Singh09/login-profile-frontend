import React from 'react'
import { useState } from "react";
import axios from "axios";
import { useNavigate } from 'react-router-dom';

const Login = ({setLoginUser}) => {
  const navigate = useNavigate(); 
  const [user,setUser] =useState({
    email:"",
    password:""   
      });
    
       const handleChange=(e)=>{
    const {name,value} =e.target;
    setUser({...user,[name]:value})
       }

       
const login=()=>{
  console.log("logged in")
  axios.post("/login",user)
  .then(res=>{
    alert(res.data.message)
    setLoginUser(res.data.user)
    navigate('/');
  })
}


  return (
    <>
   
    <div className=' register flex flex-col items-center justify-center  '>

   <div className='w-full h-48  flex items-top justify-between rounded-lg p-4 bg-[#1E2875] relative'>
   <div>
   <h1 className='text-white ml-6'>Welcome Back</h1>
   <p className='text-white font-extralight ml-6'>Start managing your profile faster and better.</p>
   </div>
   
   <div className='w-84 mt-4 mr-8 '>
   <button className='bg-white p-2 w-32 text-[#1E2875] rounded-lg hover:bg-slate-200 hover:text-blue-800' onClick={()=>navigate("/register")}>Signup</button>
   </div>

   </div>


   <div className='w-[90rem] h-5/6 bg-[#f3f5ff] flex items-center justify-center  drop-shadow-lg  p-4 rounded-lg absolute top-[7rem] overflow-auto'>
   
   <div>
   <h1 className='text-left m-1'>Email</h1>
   <input type="email" placeholder='Enter Your Email Here' name='email' value={user.email}  onChange={handleChange} className='p-2 m-1 w-[35rem] rounded-lg'/>
   <h1 className='text-left mt-2'>Password</h1>
   <input type="password" placeholder='Enter Your password Here' name='password'  value={user.password}  onChange={handleChange} className='p-2 m-1 w-[35rem] rounded-lg'/>
   <h4 className='text-right m-2 text-blue-800'>Forgot password ?</h4>
   <button className='bg-[#1E2875] p-3 mt-4 w-full text-white rounded-lg hover:bg-sky-700 '  onClick={login}>Login</button>
  
   <h4 className='text-center m-4 cursor-pointer '  onClick={()=>navigate("/register")} >Don't have an account ? <span className="text-blue-800" >Sign up</span></h4>
 
   </div>
    
   
   </div>
   
   
   </div>
      
      
    </>
  )
}

export default Login
