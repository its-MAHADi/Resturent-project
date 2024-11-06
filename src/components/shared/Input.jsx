import React from 'react'

function Input({label , type ,className , onBlur }) {
  return (
    <div>
      <label htmlFor="" className='text-xl'> {label} </label> {""}
      <br />
      <input
       type= {type} 
       onBlur={onblur}
       required
       className= {`${className} border border-black w-full py-2 rounded`}
       />
    </div>
  )
}

export default Input
