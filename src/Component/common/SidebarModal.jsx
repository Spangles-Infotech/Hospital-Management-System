import React from 'react'
import { FormLayout } from './FormLayout'
import { useForm } from '../../context/FormContext'

export const SidebarModal = ({onClose, formField}) => {
    
    const {handleSubmit} = useForm()
    
  return (
    <div className='flex flex-col gap-[20px]'>
        <div className='flex justify-between items-center'>
            <p className='text-primary font-[600] text-[20px]'>Add Stock</p>
            <img src={require("../../assests/cancel.png")} alt="close-icon" className='object-contain size-[25px] cursor-pointer' onClick={onClose} />
        </div>
        <div className='flex flex-col gap-[10px]'>
            <FormLayout data={formField} />
        </div>
        <div className='flex justify-end items-end'>
            <button onClick={(e)=>handleSubmit(e, formField)} className="w-[30%] bg-primary p-2 text-white rounded-lg hover:bg-primary transition text-lg" > Add Stock </button>
        </div>
    </div>
  )
}
