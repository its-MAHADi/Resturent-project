import React, { useState } from 'react'
import logo from "../../assets/image/footer.png.png"
import { Link } from 'react-router-dom'
import { Menu, X } from 'lucide-react';

export default function Navbar() {

const [open , setOpen] = useState (false) ;

  const itemList = [
    {
     title : "Home",
     path : "/home"
    },
    {
      title : "Foods",
      path : "/foods"
     },
     {
      title : "Dashboard",
      path : "/dashboard"
     },
    //  {
    //   title : "Login",
    //   path : "/auth/login"
    //  },
    //  {
    //   title : "Sign up",
    //   path : "/auth/signup"
    //  },
  ]
//  console.log(open)
  return (
   <nav className='container lg:flex items-center justify-between lg:-mt-6 '>
    {/* <button onClick={()=> setOpen( !open)}> open </button> */}
      <div className=' flex items-center justify-between '>
     <div>
     <img className='w-[200px]' src={logo} alt="" />
     </div>
      <div className='lg:hidden' onClick={() => setOpen(!open)}>
         {!open ? <Menu /> : <X/>} 
        {/* { ! open ? <X /> : <Menu /> } */}
      </div>
      </div>

      {/* <ul className={`lg:flex spacey-y-5 items-center bg-primary lg:bg-transparent gap-10 text-xl absolute lg:static  h-auto  ${open ? "top-0 w-full top-[60px]," : "-top-96"}`}> */}

      <ul className= {` lg:flex items-center bg-primary lg:bg-transparent gap-10 text-xl absoulate lg:mt-20 transform transition-transform duration-500 h-full ${open ? " top-0 w-full translate-y-0" :" -top-96 -translate-y-full -mt-14 "}`}>

      {
        itemList.map((item,index) => <li className='  hover:text-primary duration-200 font-semibold px-6 '> <Link to={item.path}> {item.title} </Link></li> )
      }

         <div className='flex items-center gap-5 font-semibold'>
        <button className='bg-primary rounded-md text-white px-5 py-2 hover:bg-yellow-500'> <Link to= "/auth/login">Log in</Link> </button>
        <button className='bg-primary rounded-md text-white px-5 py-2 hover:bg-secondary'> <Link to= "/auth/signup">Sign up </Link> </button>
      </div> 
      </ul>
   </nav>
  )
}



 {/* <li className='text-secondary hover:text-primary duration-200'>Home</li>
        <li>Foods</li>
        <li>About us</li>
        <li> <Link to= "/dashboard"> Dashboard </Link> </li> */}
