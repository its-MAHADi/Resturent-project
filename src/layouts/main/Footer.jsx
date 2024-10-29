import React from 'react'
import footer from "../../assets/image/footer.png.png"
import { Facebook, Github, Instagram, Twitter } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function Footer() {

  const socialitem = [
    {
      path : "https://www.instagram.com/__m_a_h_a_d_i___/" ,
      icon : <Instagram />
    },

    {
      path : "https://www.facebook.com/profile.php?id=100015932926046" ,
      icon : <Facebook />
    },

    {
      path : "" ,
      icon : <Twitter />
    }
  ]
  return (
    <div className='bg-black text-white  px-16 pt-16'>
    <div className='flex items-center justify-between'>
      <img className='w-64' src= {footer} alt="" />
      <div className='flex items-center gap-10'>
        <div>
        <h2 className='text-xl mb-2'>Follow us</h2>
        <div className='flex items-center gap-2'>

         {
          socialitem.map ((item,index) =>   <a key={index} href= {item.path} className='bg-white text-gray-700 rounded-full p-2 hover:bg-primary duration-200 hover:text-white'>
          {item.icon}
        </a> )
         }

        </div>
        </div>

        <div>
        <h2 className='text-xl mb-2'>Call us</h2>
        <p className='text-lg'>01874-935657</p>
        </div>
         </div>

        </div>

        <div className='my-3'>
          <p className='w-2/4'>The Food we had enjoyed at the time of dinner. It was really delicious taste with great quality, everything had unique taste which we had ordered, nice arrangement and services from the staff while eating, we found nothing bad about this hotel.</p>
        </div>

        <div className='flex items-center justify-between border-t py-8'>
           <div>
            <p>Design & Developed by Sparktech Agency</p>
           </div>
           <div className='flex items-center gap-10'>
            <Link to= "#">About us</Link>
            <Link to= "#">privacy Policy</Link>
            <Link to= "#">Terms of use</Link>
           </div>
        </div>

      </div>

  )
}






{/* <a href='https://www.instagram.com/__m_a_h_a_d_i___/' className='bg-white text-gray-700 rounded-full p-2 hover:bg-primary duration-200 hover:text-white'>
<Instagram />
</a>
<a href='https://www.facebook.com/profile.php?id=100015932926046' className='bg-white text-gray-700 rounded-full p-2 hover:bg-primary duration-200 hover:text-white'>
<Facebook />
</a>
<a href='' className='bg-white text-gray-700 rounded-full p-2 hover:bg-primary duration-200 hover:text-white'>
<Twitter />
 </a> */}