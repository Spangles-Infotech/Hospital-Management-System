
import React,{ useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom';
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
import {IpBillingIcon} from '../icons/IpBillingIcon'
import { useModal } from '../context/ModalContext';

export const Sidebar = ({sidebarWidth, setSidebarWidth, setMenuOpen, isMenuOpen, setIsLoading}) => {

    const {currentLocation, isCurrentLocation} = useCommon();
    const {openModal , closeModal} = useModal()

    const {handleReset} = useForm()
    const [isCollapsed, setIsCollapsed] = useState(false)
    const location = useLocation();
    
    const navigate = useNavigate()

    useEffect(() => {
      adminSidebarData.forEach(item => {
        if (item.components) {
          item.components.forEach(subItem => {
            if (location.pathname.startsWith(subItem.tab_path)) {
              setMenuOpen(item.name);
            }
          });
        }
      });
    }, [location.pathname, setMenuOpen]);
    
    const handleOpenMenu = (name)=>{
      if(name === isMenuOpen){
        // setMenuOpen("")
        // setSidebarWidth(300)
        setMenuOpen("")

      }else{
        setMenuOpen(name)
      }
    }

    const handleDelay = (ms) => new Promise(resolve => setTimeout(resolve, ms));
    
    const handleSelectMenu =async (path, isDropdown = false)=>{
      setIsLoading(true); // Activate loader immediately
      handleReset()
      closeModal()
      if (!isDropdown) {
        await handleDelay(500);
      }
      navigate(path)
      // The useEffect hook will now handle setting isMenuOpen based on the path
    }

    const toggleSidebar = ()=>{
      setIsCollapsed(!isCollapsed)
      setSidebarWidth(isCollapsed? 300 : 80)
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
        ipbilling:<IpBillingIcon/>,

    }

  return (
    <div className="relative">
      <div className='absolute right-0 border-white border-2 -top-5 bg-primary text-white rounded-full p-1 cursor-pointer' style={{ zIndex: 101100 }} onClick={toggleSidebar}>
        {isCollapsed? <svg xmlns="http://www.w3.org/2000/svg" height="18px" viewBox="0 -960 960 960" width="18px" fill="white"><path d="M504-480 320-664l56-56 240 240-240 240-56-56 184-184Z"/></svg> : <svg xmlns="http://www.w3.org/2000/svg" height="18px" viewBox="0 -960 960 960" width="2418pxpx" fill="white"><path d="M560-240 320-480l240-240 56 56-184 184 184 184-56 56Z"/></svg>}
      </div>
      <aside className='flex flex-col absolute  my-element  border-r-4 gap-[10px] cursor-pointer font-roboto fixed overflow-y-auto h-[calc(90vh-4rem)] relative' style={{width:"inherit"}}> 
      {/* <div className='relative -right-2 top-1 bg-primary text-white rounded-full  p-2 cursor-pointer   ' style={{zIndex:101100}} onClick={toggleSidebar}>
        {isCollapsed? <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="white"><path d="M504-480 320-664l56-56 240 240-240 240-56-56 184-184Z"/></svg> : <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="white"><path d="M560-240 320-480l240-240 56 56-184 184 184 184-56 56Z"/></svg>}
        </div>      */}
        {/* The original div is commented out and moved above */}
        {
        adminSidebarData.map((item)=>(
          <div className={`mr-3 rounded-r-[10px]   flex flex-col ${isMenuOpen === item.name ? "gap-3":"gap-0"} `} key={item.name}>
              <div onClick={()=> item.components ? handleOpenMenu(item.name) : handleSelectMenu(item.path, false)} className={`linkss  flex justify-between p-3 pl-6 items-center pr-[10px] transition-all duration-500 ease-in-out  hover:text-white hover:bg-primary rounded-r-[10px] ${isCurrentLocation(item.path) ? "text-white bg-primary fill-white active"  : "text-[#505050] fill-custom-black font-roboto"}`}>
                <div className='flex items-center   gap-[15px]' z-5  >
                  {/* <div className='rounded border border-2'> */}
                  <div className='rounded-xl border border-2 w-[35px] h-[35px] p-2 flex items-center justify-center'>
                  {sidebarIcons[item.icon]}

                  </div>
                {!isCollapsed &&
                  
                (

                  <p  className={`font-[400] w-[200px]  text-[16px] transition-all duration-500 ease-in-out ${sidebarWidth < 100 ? "opacity-0" : "opacity-100"}`}>{item.name}</p>
                ) 
                } 
                </div>
                <div onClick={()=>handleOpenMenu(item.name)} className={`flex items-center justify-center size-[12px] object-contain transition-all duration-500 ease-in-out  ${!item.components ? "hidden" :""} ${isMenuOpen === item.name ? "rotate-[-180deg]":"rotate-y-0"} `}>
                  <ArrowIcon />
                </div>
              </div>
              {
                item.components &&
                <div className={` flex flex-col pl-[30px] gap-4 transition-all duration-500 ease-in-out  ${isMenuOpen === item.name ? "max-h-[240px]":"max-h-0 "} `}>
                  {item?.components.map((it)=>( 
                    <div onClick={()=>handleSelectMenu(it.path, true)} className={`flex w-[190px]  items-center gap-4 transition-all duration-500 ease-in-out  ${isMenuOpen === item.name ? "visible opacity-100":"invisible opacity-0"}`} key={it.tab_path}>
                      <p className={`size-2 rounded-full transition-all duration-300 ease-in-out ${isCurrentLocation(it.tab_path) ? "bg-primary " : "bg-[#C8C8C8]"}`}></p>
                      <p className={` text-[16px]  font-[400] transition-all duration-300 ease-in-out ${isCurrentLocation(it.tab_path) ? "text-primary font-[600]" : "text-[#505050]"} `}>{it.tab_name}</p>
                    </div>
                  ))}
                </div>
              }
          </div>
        )) 
      }
    </aside>
    </div>
  )
}
