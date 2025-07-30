import React from 'react'
import { Outlet } from 'react-router-dom'

const PageLayout = () => {
  return (
    <section className='p-4'>
        <Outlet />
    </section>
  )
}

export default PageLayout