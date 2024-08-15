import React, { useState } from 'react'
import TypeData from './TypeData'

const Rigstration  = () => {
  
 const [FirstName, SetFirstName]= useState('');
 const [LastName, setLastName] = useState('')
 const [Age, setAge] = useState(18)
 const [Sex, setSex] = useState("Male")
 const [Adress, setAdress] = useState('')

  const handleChange = (event) => {
    setSex(event.target.value);
    console.log(event.target.value)
  };

   const Save=()=>{

     var studentRegister ={
      First_Name:FirstName,
      Last_Name:LastName,
      Age:Age,
      Gender:Sex,
      Adress:Adress
     }
     console.log(studentRegister)
   }
  return (
    <div className='px-5'>
      <div className='lg:flex gap-4'>
      <div className='w-full border rounded-lg p-3 '>
        <p className='italic font-extrabold font-serif'>DRAESS MARKET RIGSTRATION FORM</p>
        <TypeData lable="Frst NAME"type="Text" value={FirstName}  onChange={(e)=>SetFirstName(e.target.value)}   />
        <TypeData lable="Laste NAME" type="Text" value={LastName}  onChange={(e)=>setLastName(e.target.value)}/>
        <TypeData lable="Age" type="Number" value={Age}  onChange={(e)=>setAge(e.target.value)}/>        
         
       <div className='w-full mt-3'>

       <select id="gender" value={Sex} onChange={handleChange} className='bg-slate-100 py-2 w-full '>
        <option value="" disabled>
          -- Select Gender --
        </option>
        <option value="male">Male</option>
        <option value="female">Female</option>
        <option value="other">Other</option>
      </select>
       </div>
       
        <TypeData lable="Adress" type="Text" value={Adress}  onChange={(e)=>setAdress(e.target.value)}/> 
        <div className='py-8'>
     <button onClick={Save}>Save</button>
      </div>     
      </div>
      
      <div >
         
      </div>
        <div className='w-full border rounded-lg p-2'>
        </div>
      </div>
    </div>
  )
}

export default Rigstration