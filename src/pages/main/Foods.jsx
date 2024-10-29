import React, { useEffect, useState } from 'react'
import FoodCard from '../../components/shared/FoodCard';

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
    <div>
      <div className='grid grid-cols-4 gap-5 mt-10'>
        {
          food.map((item,index) => <FoodCard key={item.id} item ={item} />  )
        }
      </div> 
    </div>
  )
}
