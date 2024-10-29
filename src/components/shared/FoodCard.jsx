import React from 'react'

function FoodCard({item}) {
  return (
    
    <div className='bg-indigo-50 p-2 rounded-lg'>
            <img src= {item.image} alt="" />
           <div className='space-y-2 mt-2'>
           <h2 className='text-2xl font-semibold'> {item.name} </h2>
            <p className='text-xl text-secondary'> {item.description} </p>
            <h2 className='text-2xl font-semibold '> {item.price} </h2>
            <button className='bg-secondary rounded-full text-white px-8 py-2 hover:bg-primary hover:text-black'> Order Now </button>
           </div>
          </div>

  )
}

export default FoodCard
