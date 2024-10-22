import React from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from './Sidebar'

export default function Dashboard() {
  return (
    <div className='grid grid-cols-12 gap-5 p-5'>
        <Sidebar />
      <div className='col-span-10 bg-primary'>
        <Outlet />
      </div>
    </div>
  )
}
