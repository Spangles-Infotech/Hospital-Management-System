import React from 'react'
import { SearchIcon } from '../../icons/SearchIcon'
export const Search = ({isBlue, value, onChange, isForm=false, isSearch}) => {

  return (
    
    <div className={`${!isSearch ? "hidden" :isForm ? "h-[98px]": "h-[35px] "}`}>
        <div className={`relative h-full ${isForm ? "flex justify-end items-end" : ""}`}>
            <div className={`absolute flex items-center ps-2 pointer-events-none ${isBlue ? "text-primary inset-y-0 start-0" : isForm ? "text-white bottom-[17%] left-[5%] " : "text-customBlack  inset-y-0 start-0" }`}>
              <SearchIcon />
            </div>
            <input
                type="search"
                name="search"
                id="default-search"
                className={`block w-40 h-[35px] py-1 ps-10 text-sm border-2 transition-all duration-500 ease-in-out  ${isBlue ? "border-primary bg-[#EAFFFE] text-primary focus:outline-none rounded-md " : isForm ? "h-[50px] ps-15 rounded-full bg-primary text-white placeholder:text-white border-primary focus:ring-none focus:outline-none" : "ring-[#CECECE] border-[#CECECE] bg-gray-50 focus:ring-primary focus:outline-primary text-gray-900  rounded-md "} `}
                placeholder="Search..."
                onChange={onChange}
                value={value}
            />
        </div>
    </div>
  )
}
