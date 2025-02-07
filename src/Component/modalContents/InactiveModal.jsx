import React from 'react'
import { useForm } from '../../context/FormContext'
import { useModal } from '../../context/ModalContext'
import { IconCard } from '../common/IconCard'
import { RoomCount } from '../inactiveContent/RoomCount'

export const InactiveModal = ({title="doctor", field, data, btnTitle="doctor" ,isDoc}) => {

    const {handleReset} = useForm()
    const {closeModal}  = useModal()

    const handleDiscard = ()=>{
        handleReset()
        closeModal()
      }
  return (
    <div className='flex flex-col gap-[20px] items-center justify-center'>
        <p className='text-[26px] font-[700]'>Inactivate {title}</p>
        {
          isDoc && <IconCard />
        }
        {
          field && data && <RoomCount field={field} data={data} />
        }
        <div className="w-full h-[1px] bg-[#DCFFFF]"></div>
        <p className=''>Are you sure you want to inactivate the {title}?</p>
        <div className="flex items-center justify-center gap-4">
          <p onClick={handleDiscard} className="text-red-600 cursor-pointer text-lg"> Discard </p>
          <button className=" bg-primary p-2 text-white rounded-lg hover:bg-primary transition text-lg" > Inactive {btnTitle} </button>
        </div>
    </div>
  )
}
