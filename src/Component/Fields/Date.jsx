import React, { useState } from 'react'
import { toCamelCase, updateDate } from '../../utils/tableVariable'
import { useEventContext } from '../../context/EventContext'

export const Date = ({title, value, startDate="", onChange}) => {

    const {currentLocation} = useEventContext()
    const needTohide = currentLocation === "entry-fee-list" || currentLocation === "game-list" || currentLocation === "department"
  return (
    <div className={`flex items-center w-[auto] cursor-pointer h-[35px] border border-[#CECECE] rounded-md p-2 pr-1 space-x-2 gap-0 ${needTohide ? "hidden":""}`}>
        <p className="text-customBlackColorFont2 text-[14px] font-medium">{title}:</p>
        <input
            type="date"
            name={toCamelCase(title)}
            className={`text-customBlackColorFont2 transition-all duration-500 text-[14px] ${ value !== undefined ? "w-[105px]" : "w-[125px]"} font-medium text-md focus:outline-none focus:ring-0 focus:border-none border-none py-1 px-0 `}
            onChange={onChange}
            value={value}
            min={updateDate(startDate)}
            />
    </div>
  )
}
