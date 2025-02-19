import React, { useEffect } from 'react'
import { FormLayout } from '../../../Component/common/FormLayout'
import { supplierFormField } from '../../../utils/variable/supplier'
import { Button } from '../../../Component/button/Button'
import { useSupplier } from '../../../hooks/useSupplier'
import { useParams } from 'react-router-dom'
import { useFetchData } from '../../../hooks/useFetchData'
import { useForm } from '../../../context/FormContext'

const SupplierForm = ({isEdit}) => {
  
  const {id} = useParams()
  const {setFormData} = useForm()
  const {handleBackToSupplier, handleClickSave, isLoading} = useSupplier()
  const { data } = useFetchData(`/get-supplier/${id}`);

  useEffect(()=>{
    if(isEdit && id){
      setFormData(data)
    }
  },[id, data])
  const btnTitle = isEdit ? "Edit" : "Save"

  return (
    <section className='m-4 bg-white rounded-[15px] p-4 flex flex-col gap-[20px]'>
      <p className='text-primary text-[20px] font-[600]'>{isEdit ? "Edit Supplier" : "New Supplier" }</p>
      <div className='flex flex-col gap-[10px]'>
        <FormLayout data={supplierFormField}  />
      </div>
      <div className="flex gap-7 items-center justify-end p-5">
          <p onClick={handleBackToSupplier} className="text-red-600 cursor-pointer text-lg"> Discard </p>
          <Button handleClick={handleClickSave} title={btnTitle} style={{width:"20%"}} isLoading={isLoading} />
      </div>
    </section>
  )
}

export default SupplierForm