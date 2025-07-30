import React from 'react'

export const TableButton = ({print, download}) => {
  return (
    <div className='flex justify-end items-center p-3 gap-5'>
      <div className='flex justify-center items-center w-[200px] h-[50px] border border-solid border-[#1F9CC6] rounded-lg transition-all duration-500 cursor-pointer hover:bg-[#1F9CC6] hover:text-[#ffffff]'>
        <p onClick={print} >Print</p>
      </div>
      <div
        className='flex justify-center items-center w-[200px] h-[50px] border-solid bg-[#1F9CC6] rounded-lg transition-all duration-500 cursor-pointer text-[#ffffff] border hover:bg-[#ffffff] border-[#1F9CC6] hover:text-[#1F9CC6]'
      >
        <p onClick={download}>Download</p>
      </div>
    </div>
  )
}
