import React from 'react'
import { Employees } from '../product'

const Home = () => {
  return (
    <div className='p-4'>
      <div className='grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-6'>
      {
         Employees.map((item,i)=>( 
          <div className='shadow border rounded p-4 key={i} '>
            <div className='flex space-x-5'>
            <div className=''>
             <img src={item.image} className='min-w-24 h-28  hover:scale-150 hover:duration-1000 border shadow rounded '/>
            </div>
            <div>
            <p className='italic  font-bold'>{item.name}</p>
             <p>{item.position}</p>
             <p>{item.email}</p>
            </div>
          </div>
          </div>
         ))
      }
      </div>
    
    </div>
  )
}

export default Home
