import React from 'react'
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
import { Link } from 'react-router-dom';

export const Sidebar = () => {

    const {currentLocation, isCurrentLocation} = useCommon();

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
    <aside className='flex flex-col gap-[10px]'>
        {
           adminSidebarData.map((item)=>(
                <Link to={item.path} className={`linkss mr-3 rounded-r-[10px] flex gap-[15px] p-3 pl-6 pr-0 items-center transition-all duration-500 ease-in-out hover:text-white hover:bg-primary ${isCurrentLocation(item.path) ? "text-white bg-primary fill-white active"  : "text-[#505050] fill-custom-black"} `} key={item.name}>
                    {sidebarIcons[item.icon]}
                    <p className='font-[400] text-[18px]'>{item.name}</p>
                </Link>
           )) 
        }
    </aside>
  )
}
