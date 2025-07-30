import React from 'react'
import { Outlet } from 'react-router-dom'

const IpBillingLayout = () => {
  return (
    <section className='p-4'>
        <Outlet />
    </section>
  )
}

export default IpBillingLayout