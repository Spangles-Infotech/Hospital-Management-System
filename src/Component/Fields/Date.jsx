import React, { useState } from 'react'
import { updateDate } from '../../utils/functions/function'

export const Date = ({title, value,name, startDate="", onChange}) => {
  
  return (
    <div className={`flex items-center w-[auto] cursor-pointer h-[35px] border border-[#CECECE] rounded-md p-2 pr-1 space-x-2 gap-0 `}>
        <p className="text-customBlackColorFont2 text-[14px] font-medium">{title}:</p>
        <input
            type="date"
            name={name}
            className={`text-customBlackColorFont2 transition-all duration-500 text-[14px]`}
            onChange={onChange}
            value={value[name]}
            min={updateDate(startDate)}
            />
    </div>
  )
}
