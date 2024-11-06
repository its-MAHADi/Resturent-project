import React from 'react'
import image from "../../../assets/image/Coffee shop-amico 1.png"
import { Search } from 'lucide-react'

export default function HeroSection() {
  return (
    <div className=' grid grid-cols-2 gap-14 items-center justify-between '>
      <div className='space-y-4'>
         <h2 className='text-5xl font-semibold'>Good <span className='text-primary'> booking </span>, great <br /> memories</h2>
         <p className='text-3xl'> Enable diners to customize their booking by requesting a specific table location or view.</p>

         <div className='border border-black p-1 flex items-center w-2/3 rounded-full'>
        <input type="text" className=' outline-none px-2 w-full py-2 bg-transparent ' name='' id='' placeholder='Search Food' />
        <button className='bg-primary text-white w-12 h-10 flex items-center justify-center rounded-full'> <Search /> </button>
      </div>

      </div>
      <div className='-mt-20'>
        <img src= {image} alt="" />
      </div>
    </div>
  )
}
