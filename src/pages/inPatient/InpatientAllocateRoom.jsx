import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import PatientDetail from '../pharmacy/Prescription/PatientDetail'
import { roomAllotmentData } from '../../utils/variable/inPatients'

const InpatientAllocateRoom = () => {
  
  const navigate = useNavigate()
  const tabs = ["General Ward", "Private Ward"]

  const [activeTab, setActiveTab] = useState(tabs[0])

  const handleTabClick = (tab)=>{
    setActiveTab(tab)
  }

  const items = ["Available", "Filled Rooms"]

  return (
    <div className='flex flex-col gap-[20px]'>
       <div className='flex gap-[40px] items-center'>
          <img src={require("../../assests/left-arrow.png")} className='size-[25px] object-contain' alt='arrow-icon' onClick={()=>navigate("/admin/in-patients")} />
          <p className='font-[600] text-[20px] font-poppins text-customBlack'>Allocate Room</p>
       </div> 
       <PatientDetail />
       <div className='flex flex-col gap-[20px]'>
          <p className='font-[600] text-[20px] font-poppins text-customBlack'>Room Availability</p>
          <div className='flex gap-[30px] items-center'>
            {tabs.map((tab) => (
              <p
                key={tab}
                onClick={() => handleTabClick(tab)}
                className={`cursor-pointer px-5 py-2 rounded-full transition-all duration-500 ease-in-out ${
                  activeTab === tab
                    ? "bg-primary text-white"
                    : "hover:bg-primary hover:text-white text-[#969696]"
                }`}
              >
                {tab}
              </p>
            ))}
          </div>
          <div className='flex gap-[20px] w-full'>
            <div className='flex flex-col gap-[20px] w-[70%] border-2 border-primary p-5 rounded-[15px] '>
              <div className=' flex flex-wrap gap-[20px] rounded-[15px] '>
                  {
                    roomAllotmentData.map((item)=>(
                        <div className={`h-[50px] w-[120px] flex items-center justify-center border rounded-[15px]  ${item.occupied ?  "text-[#FF1111] border-[#FF1111]" : "text-[#00BE5F] border-[#00BE5F] cursor-pointer"}`} key={item.room}>
                          <p className={`font-[600] font-poppins text-[20px]`}>Room {item.room}</p>
                        </div>
                    ))
                  }
              </div>
              <div className="flex gap-7 items-center justify-end p-5">
                <button  className="text-red-600 cursor-pointer text-lg h-[50px] border border-[#D9D9D9] rounded-full w-[150px] transition-all duration-500 ease-in-out hover:bg-red-600 hover:border-red-600 hover:text-[#D9D9D9] "> Discard </button>
                <button className="w-[150px] border border-primary bg-white p-2 text-primary rounded-full transition-all duration-500 ease-in-out hover:bg-primary hover:text-white text-lg" > Discharge </button>
                <button className="w-[150px] bg-primary p-2 text-white rounded-full hover:bg-primary transition text-lg" > Book Room </button>
              </div>
            </div>
            <div className='w-[30%] flex flex-col gap-[20px]'>
                {
                  items.map((item)=>(
                    <div className='flex gap-[10px] items-center '>
                      <p className={`border rounded-[10px] h-[24px] w-[68px] ${item === "Available" ? "border-[#00BE5F]" : "border-[#FF1111]"}`}></p>
                      <p className={`font-[600] text-[20px] font-[poppins] text-customBlack `}>{item}</p>
                    </div>
                  ))
                }
            </div>
          </div>
       </div>
    </div>
  )
}

export default InpatientAllocateRoom