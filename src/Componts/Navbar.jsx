import React from 'react'
import logo from '../assets/logo.png'
const NavBar = () => {
  return (
    <div className=' flex w-full h-14 shadow items-center border rounded  justify-between px-2'>
        <div className='flex items-center space-x-1 '>
         <img className=' border shadow rounded size-[16%] hover:scale-150 hover:duration-1000 ' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgTKU0u0YIoAoo63MAopV5WaiUmThDtru9dQ&s"/>' 
         <p className=' flex font-extrabold uppercase  font-serif font- italic'>Semernaha Fashion</p>
        </div>   
      <div>
      
      </div>
      <div className='flex space-x-4'>
      <div>Login</div>
      <div>Rister</div>
    </div>
    </div>
  )
}

export default NavBar
