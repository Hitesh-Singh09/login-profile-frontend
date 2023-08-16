import React from 'react'
import { NavLink } from "react-router-dom";
// import { useNavigate } from 'react-router-dom';

const Dashboard = ({setLoginUser}) => {
  // const navigate = useNavigate(); 

  return (
    <>
    
    
    <div className="left w-1/6  p-6 ">

<div className='w-52  m-auto mt-2 '>
 <h1 className='border-solid border-2 hover:border-slate-300 border-round rounded-xl p-1 text-center' >Dashboard</h1>
</div>

<div className='flex mt-10 ml-2 '  >
 <i className="fa-solid fa-chevron-right mt-3 mr-5"></i>
 
<NavLink to="/">
 <h2 className=' border-solid border-2 rounded-xl p-1 cursor-pointer hover:border-slate-400 border-round '>My Profile</h2>
 </NavLink>
 </div>

 <div className='flex  m-2 mt-5'  style={{color:"#413B89"}}>
 <i className="fa-solid fa-chevron-right mt-3 mr-3  "></i>

<NavLink to="/connections">
<h2 className='border-solid border-2 rounded-xl p-1 cursor-pointer hover:border-slate-400 border-round'>My Connections</h2>
 </NavLink>
 </div>

 <div className=' w-52 h-72 flex items-center justify-end flex-col '>
 <h3 className='border-solid border-2 hover:border-slate-300 border-round rounded-xl p-1 text-center cursor-pointer ' onClick={()=>setLoginUser({})}>Logout</h3>
 </div>


</div>

  
      
    </>
  )
}

export default Dashboard
