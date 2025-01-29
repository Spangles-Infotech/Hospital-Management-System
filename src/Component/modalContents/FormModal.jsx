import React from 'react'
import { FormLayout } from '../common/FormLayout'
import { useForm } from '../../context/FormContext'
import { useModal } from '../../context/ModalContext'

export const FormModal = ({title, formField}) => {

    const {handleReset, handleSubmit} = useForm()
    const {closeModal} = useModal()

    const handleDiscard = ()=>{
      handleReset()
      closeModal()
    }
  return (
    <div className='flex flex-col gap-[20px] overflow-y-scroll'>
        <p className='text-[20px] font-[500]'>{title}</p>
        <div className='flex flex-col gap-[10px]'>
            <FormLayout data={formField} />
        </div>
        <div className="flex gap-7 items-center justify-end p-5">
          <p onClick={handleDiscard} className="text-red-600 cursor-pointer text-lg w-[150px]"> Discard </p>
          <button onClick={(e)=>handleSubmit(e, formField)} className="w-[150px] bg-primary p-2 text-white rounded-lg hover:bg-primary transition text-lg" > Save </button>
        </div>
    </div>
  )
}
