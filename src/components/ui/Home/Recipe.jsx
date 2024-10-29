
import { ChevronRight } from 'lucide-react'
import React, { useEffect, useState } from 'react'
import FoodCard from '../../shared/FoodCard'
import { useNavigate } from 'react-router-dom'
// import { Link } from 'react-router-dom'

function Recipe() {

 const [food,setfood] = useState ([])
 const navigate = useNavigate ()

 useEffect(() =>{
 const getfood = async () =>{
  const res = await fetch ("./fack.json") ;
  const data = await res.json ();
  setfood (data.foods)
 }
  getfood () ;
 },[])

//  fetch ("./fack.json")
//    .then(res => res.json())
//    .then (data => console.log(data))

  return (
    <div className='my-10'>
      <div className='flex items-center justify-between'>
        <h2 className='text-4xl font-semibold'>Explore <span className='text-primary'>Yummy Recipe</span> </h2>
       <button onClick={() => navigate("/foods") } className='flex items-center text-primary hover:text-secondary duration-200'>
       See all <ChevronRight /> 
       </button>
      </div>

       <div className='grid grid-cols-4 gap-5 mt-10'>
        {
          food.slice(0,4) .map((item,index) => <FoodCard key={item.id} item ={item} />  )
        }
      </div> 

    </div>
  )
}

export default Recipe
