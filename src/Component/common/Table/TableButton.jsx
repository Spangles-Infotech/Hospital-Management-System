import React from 'react'

export const TableButton = () => {
  return (
    <div className='flex justify-end items-center p-3 gap-5'>
      <div className='flex justify-center items-center w-[200px] h-[50px] border border-solid border-primary rounded-lg transition-all duration-500 cursor-pointer hover:bg-primary hover:text-[#ffffff]'>
        <p>Print</p>
      </div>
      <div
        className='flex justify-center items-center w-[200px] h-[50px] border-solid bg-primary rounded-lg transition-all duration-500 cursor-pointer text-[#ffffff] border hover:bg-[#ffffff] border-primary hover:text-primary'
      >
        <p>Save</p>
      </div>
    </div>
  )
}
