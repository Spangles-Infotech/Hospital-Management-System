import React from 'react'
import { Input } from '../../../Component/Fields/Input'
import { useDesignation } from '../../../hooks/useDesignation'

const Desgination = () => {
  const { value, designation, errors,  handleChange, handleAddDesignation, handleRemoveDesignation } = useDesignation()
  return (
    <section className='flex flex-col gap-[50px] w-[80%]'>
      <p className='font-[700] text-[18px] text-customBlack font-roboto'>Add Designations</p>
      <div className='flex flex-col gap-[25px] '>
        <div className='flex gap-[20px] items-center'>
          <div className='w-[450px] '>
            <Input label={"New Designation"} isBorder={true} value={value}  errors={errors} onChange={(e)=>handleChange(e)} isSingle={true} />
          </div>
          <div className={`h-[98px] flex justify-end items-end ${errors.designation ? "pb-[14px]" : "" }`}>
            <button onClick={handleAddDesignation} className="w-[150px] bg-primary border p-2 text-white rounded-lg hover:bg-white hover:border-primary hover:text-primary transition-all duration-300 ease-in-out text-lg h-[50px] font-poppins" > Add </button>
          </div>
        </div>
        <div className='flex gap-[10px] flex-wrap'>
          {
            designation.map((item)=>(
              <div className='h-[40px] rounded-full border-none bg-[#E6F5F6] text-primary flex px-4 gap-2 items-center'>
                <p className='text-[16px] font-[400]'>{item}</p>
                <img src={require("../../../assests/cancel.png")} alt="cancel-icon" className='object-contain size-[25px] cursor-pointer' onClick={()=>handleRemoveDesignation(item)} />
              </div>
            ))
          }
        </div>
      </div>
    </section>
  )
}

export default Desgination