import React from 'react'

const Header = ({user}) => {
  return (
    <>
<div className=" w-full bg-[#FFFFFF] ">

<div className=' h-20 flex items-center  justify-end border-b-2 border-gray-300  bg-sky-'>
<i className="fa-regular fa-bell fa-xl mt-1 mr-6 ml-4"></i>
<div className='flex mr-12 p-1 border-solid border-2 border-black-300 border-round rounded-xl bg-white'>
<i className="fa-solid fa-image fa-xl m-6"></i>
<div>
<h6 className='text-left'>Welcome back</h6>
<h3 >{user.name}</h3>
</div>
<i className="fa-solid fa-chevron-down fa-xl m-6"></i>
</div>
</div>
</div>
    


    </>
  )
}

export default Header
