import React from 'react'
import banner from "../../assets/image/Logo.png"
import Input from '../../components/shared/Input'
import { Link } from 'react-router-dom'
import Button from '../../components/shared/Button'

export default function Login() {
  return (
    <div>
     <img src={banner} className='mx-auto w-[300px]' alt="" />
     <h2 className="text-2xl text-center mb-3">Great to have you back !</h2>
     <from className ="space-y-5" >
     <Input
     label="User Name or Email"
     className="py-3 pl-4"
     type="email"
     />

     <Input
     label="Password"
     className="py-3 pl-4"
     type="password"
     />

    <Button type = "submit">Sign In </Button>
    </from>
    <div className='flex items-center gap-2 pt-6 justify-center '>
      <h1>New here?</h1>
      <Link to={"/auth/signup"} className='text-primary font-semibold text-lg ' >Create a your account !!</Link>

    </div>

    </div>
  )
}
