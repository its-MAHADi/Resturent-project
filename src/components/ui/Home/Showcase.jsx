import React from 'react'
import google from "../../../assets/image/Google play.png"
import app from "../../../assets/image/Mobile app store.png"
import frame from "../../../assets/image/frame.png"

function Showcase() {
  return (
    <div className='grid grid-cols-2 items-center justify-between my-14  '>
        <div className=' space-y-5 p-2'>
          <h1 className='text-4xl font-semibold'>It’s Now More Easy to <span className='text-primary'>Booking</span> by Our Mobile App</h1>
          <p>All you need to do is downlode one of the best delivery apps, make a and most companies are opting for mobile app devlopment for food delivery</p>
          <div className='flex gap-5'>
            <img className='w-[130px]' src={google} alt="" />
            <img className='w-[130px]' src={app} alt="" />
          </div>
        </div>


        <div className='px-5 mt-20'>
          <img className='w-[90%]' src={frame} alt="" />
        </div>
    </div>
  )
}

export default Showcase
