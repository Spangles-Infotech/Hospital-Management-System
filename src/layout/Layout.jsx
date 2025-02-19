import React from 'react'
import Header from '../Component/Header'
import { Outlet } from 'react-router-dom'
import { Sidebar } from '../Component/Sidebar'

const Layout = () => {
  return (
    <main className=' overflow-y-hidden h-screen'>
      <Header/>
      <div className='flex'>
        <div className='w-[20%] pt-[120px]'>
          <Sidebar />
        </div>
        <div className='w-[80%] bg-[#D0FAFF33] overflow-y-auto h-[calc(100vh-0.1rem)] pt-[116px] '>
          <Outlet/>
        </div>
      </div>
      </main>
  )
}

export default Layout