import React from 'react'
import { ReportIncome } from '../../icons/ReportInome'
import { useCommon } from '../../hooks/useCommon'
import { useReports } from '../../hooks/useReports'
export const IncomeTab = ({isIncome, data}) => {

    const {tab} = useCommon()
    const  {handleClickTab} = useReports()
    
  return (
    <div className={`flex gap-[15px] ${!isIncome ? "hidden" : ""}`}>
        {
            data.map((item, index) => (
                <div 
                    key={item.name}
                    onClick={()=>handleClickTab(item.path)}
                    className={`flex gap-[10px] items-center cursor-pointer p-2 px-4 border border-[#1F9CC6] rounded-lg transition-all duration-500 ease-in-out ${tab === item.path ? "bg-[#1F9CC6] text-white" : " hover:bg-[#1F9CC6] text-[#1F9CC6] hover:text-white"}`}
                >
                    <ReportIncome />
                    <p className='font-[400] text-[18px]'>{item.name}</p>
                </div>
            ))
        }
    </div>
  )
}
