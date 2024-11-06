import React from 'react'

function Button({children,className,onClick}) {
  return (
    <button 
    onClick={onClick}
    className= {`${className} bg-secondary py-3 uppercase text-white rounded w-full hover:bg-primary duration-200`} >
    {children}
    </button>
  )
}

export default Button
