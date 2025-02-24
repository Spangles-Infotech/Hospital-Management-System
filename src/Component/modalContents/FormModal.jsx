import React from 'react'
import { FormLayout } from '../common/FormLayout'
import { useForm } from '../../context/FormContext'
import { useModal } from '../../context/ModalContext'
import { IconCard } from '../common/IconCard'

export const FormModal = ({title, formField, data, postData,reFetch}) => {

    const {handleReset,formData} = useForm()
    const {closeModal} = useModal()



    const handleSubmitForm = async (e) => {
      e.preventDefault(); 
      if (!formData) return;
  
      let response = await postData(formData);  
      if (response === 200 || response === 201) {
        reFetch();
        closeModal();  
        handleReset();
      }
    };

    const handleDiscard = ()=>{
      handleReset()
      closeModal()
    }
  return (
    <div className='flex flex-col gap-[20px]  min-w-[600px]'>
        <p className='text-[20px] font-[500]'>{title}</p>
        {data && <IconCard />}
        <div className='flex flex-col gap-[10px]'>
            <FormLayout data={formField} />
        </div>
        <div className="flex gap-7 items-center justify-end p-5">
          <p onClick={handleDiscard} className="text-red-600 cursor-pointer text-lg w-[150px]"> Discard </p>
          <button onClick={(e)=>handleSubmitForm(e, formField)} className="w-[150px] bg-primary p-2 text-white rounded-lg hover:bg-primary transition text-lg" > Save </button>
        </div>
    </div>
  )
}
