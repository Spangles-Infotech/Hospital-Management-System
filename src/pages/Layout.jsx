import React from 'react'
import Header from '../Component/Header'
import { Outlet } from 'react-router-dom'
import { Sidebar } from '../Component/Sidebar'

const Layout = () => {
  return (
    <main>
      <Header/>
      <div className='flex'>
        <div className='w-[20%]'>
          <Sidebar />
        </div>
        <div className='w-[80%]'>
          <Outlet/>
        </div>
      </div>
      </main>
  )
}

export default Layout