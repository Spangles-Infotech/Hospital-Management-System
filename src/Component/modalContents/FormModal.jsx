import React from 'react'
import { FormLayout } from '../common/FormLayout'
import { useForm } from '../../context/FormContext'
import { useModal } from '../../context/ModalContext'
import { IconCard } from '../common/IconCard'
import { usePostData } from '../../hooks/usePostData'
import { useUpdateData } from '../../hooks/useUpdateData'
// import { usePatch } from '../../hooks/usePatch'

export const FormModal = ({title, formField, data, isEdit, name, refetch, label,isPatch}) => {
  const {closeModal} = useModal()
  const {postData} = usePostData(name)
  // const {patchData} = usePatch(name)
  const {updateData} = useUpdateData(name)
  const {handleReset, formData, handleSubmit, setFormData} = useForm()
  const notToReset = ["Add Category", "Add unit", "Add GST %", "Add Strength"]

  const handleSubmitForm = async () => {
    if (!formData) return;
    const response = isEdit ? await updateData(formData) : await postData(formData);
    // const patchData 
    if ([200, 201].includes(response)) {
      if(refetch)refetch();
      closeModal();
      if (!notToReset.includes(title)){ 
        handleReset()
      }else{
        setFormData((prev)=>({...prev, [formField[0]?.name]:""}))
      }
    }
  };

  return (
    <div className='flex flex-col gap-[20px]  min-w-[600px]'>
        <p className='text-[20px] font-[500]'>{title}</p>
        {data.length > 0 && <IconCard />}
        <div className='flex flex-col gap-[10px]'>
            <FormLayout data={formField} />
        </div>
        <div className="flex gap-7 items-center justify-end p-5">
          <p onClick={() => { handleReset(); closeModal(); }}  className="text-red-600 cursor-pointer text-lg w-[150px]"> Discard </p>
          <button onClick={(e)=>handleSubmit(e, formField, handleSubmitForm)} className="w-[150px] bg-primary p-2 text-white rounded-lg hover:bg-primary transition text-lg" > Save </button>
        </div>
    </div>
  )
}
