import React from 'react'
import Header from '../Component/Header'
import Slidebar from '../Component/Slidebar'
import { Outlet } from 'react-router-dom'

const layout = () => {
  return (
    <main>
      <Header/>
      <div className='flex  cursor-pointer'>
        <Slidebar/>
        <Outlet/>
      </div>
      </main>
  )
}

export default layout