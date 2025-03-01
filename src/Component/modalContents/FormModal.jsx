import React from 'react'
import { FormLayout } from '../common/FormLayout'
import { useForm } from '../../context/FormContext'
import { useModal } from '../../context/ModalContext'
import { IconCard } from '../common/IconCard'
import { usePostData } from '../../hooks/usePostData'
import { useUpdateData } from '../../hooks/useUpdateData'

export const FormModal = ({title, formField, data, isEdit, name, refetch}) => {

  const {closeModal} = useModal()
  const {postData} = usePostData(name)
  const {updateData} = useUpdateData(name)
  const {handleReset,formData, handleSubmit} = useForm()

    const handleSubmitForm = async() => {
      if (!formData) return;
      let response = 0
      if(isEdit){
        response = await updateData(formData)
        if (response === 200) {
          if (refetch) refetch();
          closeModal();  
          handleReset();
        }
      }else{
        response = await postData(formData); 
        if (response === 200 || response === 201) {
          console.log("first")
          if (refetch) refetch();
          closeModal();  
          handleReset();
        }
      }
    };

    const handleDiscard = ()=>{
      handleReset()
      closeModal()
    }
  return (
    <div className='flex flex-col gap-[20px]  min-w-[600px]'>
        <p className='text-[20px] font-[500]'>{title}</p>
        {data.length > 0 && <IconCard />}
        <div className='flex flex-col gap-[10px]'>
            <FormLayout data={formField} />
        </div>
        <div className="flex gap-7 items-center justify-end p-5">
          <p onClick={handleDiscard} className="text-red-600 cursor-pointer text-lg w-[150px]"> Discard </p>
          <button onClick={(e)=>handleSubmit(e, formField, handleSubmitForm)} className="w-[150px] bg-primary p-2 text-white rounded-lg hover:bg-primary transition text-lg" > Save </button>
        </div>
    </div>
  )
}
