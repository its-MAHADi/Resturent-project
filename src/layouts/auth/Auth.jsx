import React from 'react'
import { Outlet } from 'react-router-dom'
import banner from "../../assets/image/auth.png.png"

export default function Auth() {
  return (
    <div className='grid grid-cols-2 items-center container h-screen gap-24 border'>
      <div>
        <img src= {banner} alt="" />
      </div>
       <div>
         <Outlet />
       </div>
    </div>
  )
}
