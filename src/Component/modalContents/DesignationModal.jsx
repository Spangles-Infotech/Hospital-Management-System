import React from 'react'
import { Input } from '../Fields/Input'
import { useForm } from '../../context/FormContext'
import { useOthers } from '../../hooks/useOthers'

const DesignationModal = () => {
  const {formData, handleChange, errors} = useForm()
  const { handlePostDesignation, data, handleDeleteDesignation} = useOthers()

  return (
    <div className='flex flex-col gap-6 p-4 w-[400px] h-[300px] overflow-y-auto'>
      <div className='flex gap-4 items-end'>
        <div className='flex-1'>
          <Input 
            label="New Designation" 
            isBorder={true} 
            value={formData} 
            name="title" 
            onChange={handleChange} 
            errors={errors}
          />
        </div>
        <button 
          onClick={handlePostDesignation} 
          className="h-[50px] px-6 bg-[#1F9CC6] border text-white rounded-lg hover:bg-white hover:border-[#1F9CC6] hover:text-[#1F9CC6] transition-all duration-300 ease-in-out text-lg font-poppins"
        >
          Add
        </button>
      </div>

      <div className='flex flex-wrap gap-3 mt-2'>
        {data?.map((item) => (
          <div key={item._id} className='h-[40px] rounded-full border-none bg-[#E6F5F6] text-[#1F9CC6] flex px-4 gap-2 items-center'>
            <p className='text-[16px] font-[400]'>{item.title}</p>
            <button
              onClick={() => handleDeleteDesignation(item._id)}
              className='flex items-center justify-center w-6 h-6'
            >
              <img 
                src={require("../../assests/cancel.png")} 
                alt="cancel-icon" 
                className='object-contain size-[25px] cursor-pointer' 
              />
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default DesignationModal