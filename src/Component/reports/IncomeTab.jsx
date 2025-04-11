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
                    className={`flex gap-[10px] items-center cursor-pointer p-2 px-4 border border-primary rounded-lg transition-all duration-500 ease-in-out ${tab === item.path ? "bg-primary text-white" : " hover:bg-primary text-primary hover:text-white"}`}
                >
                    <ReportIncome />
                    <p className='font-[400] text-[18px]'>{item.name}</p>
                </div>
            ))
        }
    </div>
  )
}
