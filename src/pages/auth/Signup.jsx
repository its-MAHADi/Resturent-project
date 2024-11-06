import React from 'react'
import signup from "../../assets/image/Logo.png"
import Input from '../../components/shared/Input'
import { Link } from 'react-router-dom'
import Button from '../../components/shared/Button'

export default function Signup() {
  return (
    <div>
     <img src= {signup} className='mx-auto w-[300px]' alt="" />
     <h2 className="text-2xl text-center mb-3">Great to have you back !</h2>
     <from className="space-y-4">
    
     <Input
     label="Name"
     className="py-3 pl-4"
     type="text"
     />

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
      <Button type ="submit"> Create Account</Button>
      </from>
      <div className='flex items-center gap-2 pt-6 justify-center'>
      <h1>Already Have an Account? </h1>
      <Link to={"/auth/login"} className='text-primary font-semibold text-lg'> Login Here !!</Link>

      </div>

    </div>
  )
}
