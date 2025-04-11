import React from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import { useCommon } from '../hooks/useCommon'

export const TabLayout = ({isSettings=true}) => {

    const { isCurrentLocation } = useCommon()

    const navigate = useNavigate()
    const settingsTab = [
        {
            name:"Designation",
            path:"/admin/settings/designation",
            tempPath:"/admin/settings/designation"
        },
        {
            name:"User management",
            path:"/admin/settings/user-management?tab=admin",
            tempPath:"/admin/settings/user-management",
        },
        {
            name:"Doctor's fee",
            path:"/admin/settings/doctors-fee",
            tempPath:"/admin/settings/doctors-fee"
        },
        {
            name:"Rooms",
            path:"/admin/settings/rooms",
            tempPath:"/admin/settings/rooms"
        }
    ]

    const reportsTab = [
        {
            name:"Income",
            path:"/admin/reports/income?tab=doctor-fee",
            tempPath:"/admin/reports/income",
        },
        {
            name:"Out patient",
            path:"/admin/reports/out-patient",
            tempPath:"/admin/reports/out-patient",
        },
        {
            name:"In Patient",
            path:"/admin/reports/in-patient",
            tempPath:"/admin/reports/in-patient",
        },
        {
            name:"Pharmacy",
            path:"/admin/reports/pharmacy?tab=expiry-date",
            tempPath:"/admin/reports/pharmacy",
        }
    ]

    const handleNavigate = (path)=>{
        navigate(path)
    }

    const tab = isSettings ? settingsTab : reportsTab

  return (
    <section className='m-4 flex gap-[20px]'>
        <aside  className='w-[15%]'>
            {
                tab.map((item) => (
                    <div 
                        key={item.name}
                        onClick={()=>handleNavigate(item.path)}
                        className={`flex items-center justify-center border-b border-[#ECECEC] cursor-pointer transition-all duration-500 ease-in-out ${ isCurrentLocation(item.tempPath) ? "bg-[#E6F5F6] text-[#089BAB] font-[600]" : "bg-white text-customBlack font-[400] hover:text-[#089BAB] " }`}
                    >
                        <p className='p-5'>{item.name}</p>
                    </div>
                ))
            }
        </aside>
        <Outlet />
    </section>
  )
}

