import React from 'react'
import image1 from "../../../assets/image/service.png"
import online from "../../../assets/image/online order.png"
import calender from "../../../assets/image/Calender.png"
import chef from "../../../assets/image/Chef.png"
import support from "../../../assets/image/support.png"
import beach from "../../../assets/image/Beach Dinner.png"
import kitchen from "../../../assets/image/Kitchen.png"

function Services() {
  return (
    <div className='grid grid-cols-2 mt-16'>
        <div>
            <img src= {image1} alt="" />
        </div>

      <div className='mt-20 px-5 '>
         <h1 className='text-4xl font-semibold'> We are <span className='text-primary'> more</span> than <span className='text-secondary'> multiple</span> service</h1>
       <p className='mt-6 text-secondary'>This is a type of resturent which typically serves food and drink, in addition to light refreshments such as baked goods or snacks. The term comes frome the rench word meaning food</p>

      
       <div className='grid grid-cols-2 mt-6 gap-4'>
        <div className='space-y-5'>
        <div className='flex items-center text-xl font-semibold gap-2 '>
            <img src= {online} alt="" />
            <h1>Online Ordering</h1>
        </div>

        <div className='flex items-center text-xl font-semibold gap-2'>
            <img src= {calender} alt="" />
            <h1>Advanced Reservations</h1>
        </div>

        <div className='flex items-center  text-xl font-semibold gap-2'>
            <img src= {chef} alt="" />
            <h1>Top Chefs</h1>
        </div>
        </div>

        {/* 2nd part */}

        <div className='space-y-5'>
        <div className='flex items-center  text-xl font-semibold gap-2'>
            <img src= {support} alt="" />
            <h1>24/7 Availability</h1>
        </div>

        <div className='flex items-center  text-xl font-semibold gap-2'>
            <img src= {beach} alt="" />
            <h1>Curated Dining Spaces</h1>
        </div>

        <div className='flex items-center  text-xl font-semibold gap-2'>
            <img src= {kitchen} alt="" />
            <h1>Immaculate Kitchens</h1>
        </div>
        </div>
      </div>


      </div>


    </div>

    
  )
}

export default Services
