import React from 'react'
import { SearchIcon } from '../../icons/SearchIcon'
export const Search = ({isBlue, value, onChange}) => {

  return (
    <div className={`h-[35px]`}>
        <div className="relative h-full">
            <div className={`absolute inset-y-0 start-0 flex items-center ps-2 pointer-events-none ${isBlue ? "text-primary" : "text-customBlack" }`}>
              <SearchIcon />
            </div>
            <input
                type="search"
                name="search"
                id="default-search"
                className={`block w-40 h-[35px] py-1 ps-10 text-sm border-2 rounded-md transition-all duration-500 ease-in-out  ${isBlue ? "border-primary bg-[#EAFFFE] text-primary focus:outline-none" : "ring-[#CECECE] border-[#CECECE] bg-gray-50 focus:ring-primary focus:outline-primary text-gray-900  "} `}
                placeholder="Search..."
                onChange={onChange}
                value={value}
            />
        </div>
    </div>
  )
}
