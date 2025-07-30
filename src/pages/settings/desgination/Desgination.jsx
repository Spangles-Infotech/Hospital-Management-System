import React from 'react'
import { Input } from '../../../Component/Fields/Input'
import { useOthers } from '../../../hooks/useOthers'
import { useForm } from '../../../context/FormContext'

const Desgination = () => {
  const {formData, handleChange, errors} = useForm()
  const { handlePostDesignation, data, handleDeleteDesignation} = useOthers()
  return (
    <section className='flex flex-col gap-[50px] w-[80%]'>
      <p className='font-[700] text-[18px] text-customBlack font-roboto'>Add Designations</p>
      <div className='flex flex-col gap-[25px] '>
        <div className='flex gap-[20px] items-center'>
          <div className='w-[450px] '>
            <Input label={"New Designation"} isBorder={true} value={formData} name={"title"} onChange={handleChange} errors={errors}/>
          </div>
          <div className={`h-[98px] flex justify-end items-end ${errors?.title ? "pb-[14px]" : "" }`}>
            <button onClick={handlePostDesignation} className="w-[150px] bg-[#1F9CC6] border p-2 text-white rounded-lg hover:bg-white hover:border-[#1F9CC6] hover:text-[#1F9CC6] transition-all duration-300 ease-in-out text-lg h-[50px] font-poppins" > Add </button>
          </div>
        </div>
        <div className='flex gap-[10px] flex-wrap'>
          {
            data?.map((item)=>(
              <div className='h-[40px] rounded-full border-none bg-[#E6F5F6] text-[#1F9CC6] flex px-4 gap-2 items-center'>
                <p className='text-[16px] font-[400]'>{item.title}</p>
                <img src={require("../../../assests/cancel.png")} alt="cancel-icon" className='object-contain size-[25px] cursor-pointer' onClick={()=>handleDeleteDesignation(item?._id)} />
              </div>
            ))
          }
        </div>
      </div>
    </section>
  )
}

export default Desgination