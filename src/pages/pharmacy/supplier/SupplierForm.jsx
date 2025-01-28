import React from 'react'
import { FormLayout } from '../../../Component/common/FormLayout'
import { supplierFormField } from '../../../utils/variable/supplier'
import { useForm } from '../../../context/FormContext'

const SupplierForm = () => {
  const {handleReset, handleSubmit} = useForm()
  return (
    <section className='m-4 bg-white rounded-[15px] p-4 flex flex-col gap-[20px]'>
      <p className='text-primary text-[20px] font-[600]'>New Supplier</p>
      <div className='flex flex-col gap-[10px]'>
        <FormLayout data={supplierFormField}  />
      </div>
      <div className="flex gap-7 items-center justify-end p-5">
          <p onClick={handleReset} className="text-red-600 cursor-pointer text-lg"> Discard </p>
          <button onClick={(e)=>handleSubmit(e, supplierFormField)} className="w-[30%] bg-primary p-2 text-white rounded-lg hover:bg-primary transition text-lg" > Save </button>
      </div>
    </section>
  )
}

export default SupplierForm