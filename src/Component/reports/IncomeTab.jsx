import React from 'react'
import { useNavigate } from 'react-router-dom'
import { ReportIncome } from '../../icons/ReportInome'
import { useCommon } from '../../hooks/useCommon'
export const IncomeTab = ({isIncome}) => {

    const {tab} = useCommon()
    const navigate = useNavigate()

    const incomeTab = [
        {
            name:"Doctor Fee",
            path:"doctor-fee"
        },
        {
            name:"laboratory",
            path:"laboratory"
        },
        {
            name:"Pharmacy",
            path:"pharmacy"
        },
        {
            name:"Out Patients",
            path:"out-patients"
        },
        {
            name:"In Patients",
            path:"in-patients"
        }
    ]
  return (
    <div className={`flex gap-[15px] ${!isIncome ? "hidden" : ""}`}>
        {
            incomeTab.map((item, index) => (
                <div 
                    key={item.name}
                    onClick={()=>navigate(`/admin/reports/income?tab=${item.path}`)}
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
