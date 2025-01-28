import React from 'react'
import { useForm } from '../../context/FormContext'
import { useModal } from '../../context/ModalContext'

export const InactiveModal = () => {

    const {handleReset} = useForm()
    const {closeModal}  = useModal()

    const handleDiscard = ()=>{
        handleReset()
        closeModal()
      }
  return (
    <div className='flex flex-col gap-[20px] items-center justify-center'>
        <p className='text-[26px] font-[700]'>Inactivate Doctor</p>
        <div className='flex gap-[20px]'>
            <img src="https://gratisography.com/wp-content/uploads/2024/11/gratisography-augmented-reality-800x525.jpg" alt="user-image" className='size-[100px] rounded-[15px]' />
            <div className='flex flex-col gap-2 items-center justify-center'>
                <p className='text-secondaryBlue'>Mathews</p>
                <p className='text-[#148CF0 ]'>DOB0015678</p>
                <p className='text-secondayGray'>Mathews</p>
            </div>
        </div>
        <div className="w-full h-[1px] bg-[#DCFFFF]"></div>
        <p className=''>Are you sure you want to inactivate the Doctor?</p>
        <div className="flex items-center justify-center gap-4">
          <p onClick={handleDiscard} className="text-red-600 cursor-pointer text-lg"> Discard </p>
          <button className=" bg-primary p-2 text-white rounded-lg hover:bg-primary transition text-lg" > Inactive Doctor </button>
        </div>
    </div>
  )
}
