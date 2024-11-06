import React, { useEffect, useState } from 'react'
import FoodCard from '../../components/shared/FoodCard';
import ExploreHeading from '../../components/shared/ExploreHeading';
import { Search } from 'lucide-react';

export default function Foods() {

  const [food,setfood] = useState ([])

  useEffect(() =>{
  const getfood = async () =>{
   const res = await fetch ("./fack.json") ;
   const data = await res.json ();
   setfood (data.foods)
  }
   getfood () ;
  },[])

  return (
    <div className='my-10'>
      <div className='flex items-center justify-between'>
        <ExploreHeading />






        <div className='border border-black p-1 flex items-center w-1/3 rounded-full'>
        <input type="text" className=' outline-none px-2 w-full py-2 bg-transparent ' name='' id='' placeholder='Search Food' />
        <button className='bg-primary text-white w-12 h-10 flex items-center justify-center rounded-full'> <Search /> </button>
      </div>

      </div>
      <div className='grid grid-cols-4 gap-5 mt-10'>
        {
          food.map((item,index) => <FoodCard key={item.id} item ={item} />  )
        }
      </div> 
    </div>
  )
}
