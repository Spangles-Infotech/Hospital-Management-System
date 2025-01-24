import React from 'react'
export const Search = ({value, onChange}) => {

  return (
    <div className={`h-[35px]`}>
        <div className="relative h-full">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                <img src={require("../../assests/serach.png")} alt="search-icon" className='size-[15px] object-contain' />
            </div>
            <input
                type="search"
                name="search"
                id="default-search"
                className="block w-40 h-[35px] py-1 ps-8 text-sm text-gray-900 rounded-md ring-[#CECECE] border-[#CECECE] bg-gray-50 focus:ring-teal-800 focus:outline-primary  "
                placeholder="Search..."
                onChange={onChange}
                value={value}
            />
        </div>
    </div>
  )
}
