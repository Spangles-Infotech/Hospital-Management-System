import React from 'react'
import { PrintIcon } from '../../icons/PrintIcon'

export const Print = () => {
  return (
    // <div className="flex justify-center ">
      <button className="flex items-center gap-2 px-4 py-2 border border-[#1F9CC6] text-[#1F9CC6] rounded-lg hover:bg-[#1F9CC6] hover:text-white transition-all duration-500">
          <PrintIcon />
          <p className="font-medium">Print</p>
      </button>
    // </div>
  )
}
