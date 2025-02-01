import React from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import { useCommon } from '../hooks/useCommon'

export const TabLayout = () => {

    const { isCurrent } = useCommon()

    const navigate = useNavigate()
    const tab = [
        {
            name:"Designation",
            path:"/admin/settings"
        },
        {
            name:"User management",
            path:"/admin/settings/user-management?tab=admin"
        },
        {
            name:"Doctor's fee",
            path:"/admin/settings/doctors-fee"
        },
        {
            name:"Rooms",
            path:"/admin/settings/rooms"
        }
    ]

    const handleNavigate = (path)=>{
        navigate(path)
    }
  return (
    <section className='m-4 flex gap-[20px]'>
        <aside  className='w-[15%]'>
            {
                tab.map((item, index) => (
                    <div 
                        key={item.name}
                        onClick={()=>handleNavigate(item.path)}
                        className={`flex items-center justify-center border-b border-[#ECECEC] cursor-pointer transition-all duration-500 ease-in-out ${ isCurrent(item.path) ? "bg-[#E6F5F6] text-[#089BAB] font-[600]" : "bg-white text-customBlack font-[400] hover:text-[#089BAB] " }`}
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

