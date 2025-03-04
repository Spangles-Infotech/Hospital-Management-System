
import React,{ useState } from 'react'
import { ReportIcon } from '../icons/ReportIcon';
import { DashboardIcon } from '../icons/DashboardIcon';
import { RegisteredOpIcon } from '../icons/RegisteredOpIcon';
import { PatientIcon } from '../icons/PatientIcon';
import { DoctorIcon } from '../icons/DoctorIcon';
import { StaffIcon } from '../icons/StaffIcon';
import { PharmacyIcon } from '../icons/PharmacyIcon';
import { ExpenseIcon } from '../icons/ExpenseIcon';
import { InventoryIcon } from '../icons/InventoryIcon';
import { InPatientIcon } from '../icons/InPatientIcon';
import { LabIcon } from '../icons/LabIcon';
import { SettingsIcon } from '../icons/SettingsIcon';
import { useCommon } from '../hooks/useCommon';
import { adminSidebarData } from '../utils/variable/sidebar';
import { useNavigate } from 'react-router-dom';
import { ArrowIcon } from '../icons/ArrowIcon';
import { useForm } from '../context/FormContext';

export const Sidebar = ({sidebarWidth, setSidebarWidth, setMenuOpen, isMenuOpen}) => {

    const {currentLocation, isCurrentLocation} = useCommon();
    const {handleReset} = useForm()
    
    const navigate = useNavigate()
    
    const handleOpenMenu = (name)=>{
      if(name === isMenuOpen){
        // setMenuOpen("")
        setSidebarWidth(300)
      }else{
        setMenuOpen(name)
      }
    }
    
    const handleSelectMenu = (path)=>{
      handleReset()
      navigate(path)
    }

    const sidebarIcons = {
        "dashboard" : <DashboardIcon  />,
        "registeredOpNurse": <RegisteredOpIcon />,
        "registeredOpDoctor": <RegisteredOpIcon />,
        "patients": <PatientIcon  />,
        doctors: <DoctorIcon  />,
        staff: <StaffIcon />,
        pharmacy: <PharmacyIcon />,
        expense: <ExpenseIcon />,
        inventory: <InventoryIcon />,
        "in-patients": <InPatientIcon  />,
        labs:<LabIcon />,
        settings:<SettingsIcon />,
        reports: <ReportIcon />,
    }

  return (
    <aside className='flex flex-col gap-[10px] cursor-pointer font-roboto fixed overflow-y-auto h-[calc(90vh-4rem)]' style={{width:"inherit"}}>      {
        adminSidebarData.map((item)=>(
          <div className={`mr-3 rounded-r-[10px] flex flex-col ${isMenuOpen === item.name ? "gap-3":"gap-0"} `} key={item.name}>
              <div className={`linkss  flex justify-between p-3 pl-6 items-center pr-[10px] transition-all duration-500 ease-in-out hover:text-white hover:bg-primary rounded-r-[10px] ${isCurrentLocation(item.path) ? "text-white bg-primary fill-white active"  : "text-[#505050] fill-custom-black font-roboto"}`}>
                <div className='flex gap-[15px]' onClick={()=>handleSelectMenu( item.name === "Pharmacy" ? "/admin/pharmacy/stocks" : item.path)} >
                  {sidebarIcons[item.icon]}
                  <p className={`font-[400] text-[18px] transition-all duration-500 ease-in-out ${sidebarWidth < 100 ? "opacity-0" : "opacity-100"}`}>{item.name}</p>
                </div>
                <div onClick={()=>handleOpenMenu(item.name)} className={`flex items-center justify-center size-[25px] object-contain transition-all duration-500 ease-in-out  ${!item.components ? "hidden" :""} ${isMenuOpen === item.name ? "rotate-[-180deg]":"rotate-y-0"} `}>
                  <ArrowIcon />
                </div>
              </div>
              {
                item.components &&
                <div className={` flex flex-col pl-[30px] gap-4 transition-all duration-500 ease-in-out  ${isMenuOpen === item.name ? "max-h-[240px]":"max-h-0 "} `}>
                  {item?.components.map((it)=>(
                    <div onClick={()=>handleSelectMenu(it.path)} className={`flex items-center gap-4 transition-all duration-500 ease-in-out  ${isMenuOpen === item.name ? "visible opacity-100":"invisible opacity-0"}`} key={it.tab_path}>
                      <p className={`size-2 rounded-full transition-all duration-300 ease-in-out ${isCurrentLocation(it.tab_path) ? "bg-primary" : "bg-[#C8C8C8]"}`}></p>
                      <p className={` text-[16px] font-[400] transition-all duration-300 ease-in-out ${isCurrentLocation(it.tab_path) ? "text-primary" : "text-[#505050]"} `}>{it.tab_name}</p>
                    </div>
                  ))}
                </div>
              }
          </div>
        )) 
      }
    </aside>
  )
}
