import React from 'react'

const TypeData = ({lable, type,onChange, value}) => {
  return (
       <div>
         <p className='italic font-serif  underline py-2'>{lable}</p>
          <input type={type} className='w-full border rounded bg-slate-100 p-1 r ring-blue-200' onChange={onChange} value={value}/>
         </div>

  )
}

export default TypeData
