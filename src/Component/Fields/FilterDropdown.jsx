import React from 'react'

export const FilterDropdown = ({label, options}) => {
  return (
    <div className='flex items-center font-roboto border border-solid border-[#CECECE] gap-2 rounded-md p-1 h-[35px]'>
        <p className='font-[400] text-[14px] text-customBlackColorFont2'>{label} :</p>
        <select className='border-none focus:outline-none focus:ring-0 appearance-none text-[14px] text-customBlackColorFont2 font-[600] p-0'>
            {
                options.map((option, index) => (
                    <option key={index} value={option.toLowerCase() === "all" ? "" : option}>{option}</option>
                ))
            }
        </select>
    </div>
  )
}
