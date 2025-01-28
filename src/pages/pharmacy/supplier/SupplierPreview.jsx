import React from 'react'
import { useNavigate } from 'react-router-dom'

const SupplierPreview = () => {

  const navigate = useNavigate()

  return (
    <section className='p-4 flex flex-col gap-[20px]'>
      <img src={require("../../../assests/left-arrow.png")} className='size-[25px] object-contain' alt='arrow-icon' onClick={()=>navigate("/admin/pharmacy/suppliers")} />
    </section>
  )
}

export default SupplierPreview