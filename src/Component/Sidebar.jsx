// import React, { useState } from "react"; 
// import { ReportIcon } from "../icons/ReportIcon";
// import { DashboardIcon } from "../icons/DashboardIcon";
// import { RegisteredOpIcon } from "../icons/RegisteredOpIcon";
// import { PatientIcon } from "../icons/PatientIcon";
// import { DoctorIcon } from "../icons/DoctorIcon";
// import { StaffIcon } from "../icons/StaffIcon";
// import { PharmacyIcon } from "../icons/PharmacyIcon";
// import { ExpenseIcon } from "../icons/ExpenseIcon";
// import { InventoryIcon } from "../icons/InventoryIcon";
// import { InPatientIcon } from "../icons/InPatientIcon";
// import { LabIcon } from "../icons/LabIcon";
// import { SettingsIcon } from "../icons/SettingsIcon";
// import { useCommon } from "../hooks/useCommon";
// import { adminSidebarData } from "../utils/variable/sidebar";
// import { useNavigate } from "react-router-dom";
// import { IoClose } from "react-icons/io5";
// import { HiOutlineMenuAlt1 } from "react-icons/hi";
// import { Link } from "react-router-dom";
// import { FaAngleUp, FaAngleDown } from "react-icons/fa6";

// export const Sidebar = () => {

//   const {currentLocation, isCurrentLocation} = useCommon
//   const [isOpen, setIsOpen] = useState(false);
//   const [activeDropdown, setActiveDropdown] = useState(null);

//   // const navigate = useNavigate();

//   const sidebarIcons = {
//     dashboard: <DashboardIcon />,
//     registeredOpNurse: <RegisteredOpIcon />,
//     registeredOpDoctor: <RegisteredOpIcon />,
//     patients: <PatientIcon />,
//     doctors: <DoctorIcon />,
//     staff: <StaffIcon />,
//     pharmacy: <PharmacyIcon />,
//     expense: <ExpenseIcon />,
//     inventory: <InventoryIcon />,
//     "in-patients": <InPatientIcon />,
//     labs: <LabIcon />,
//     settings: <SettingsIcon />,
//     reports: <ReportIcon />,
//   };

//   return (
//     <aside
//       className={`bg-white h-screen  p-4 ${
//         isOpen ? "w-64" : "w-16"
//       }`}
//     >
//       {/* Toggle Sidebar Button */}
//       <button
//         className="p-2 rounded-md hover:bg-gray-200 transition flex items-center justify-center"
//         onClick={() => setIsOpen(!isOpen)}
//       >
//         <span className="w-6 h-6 flex items-center justify-center">
//           {isOpen ? <IoClose size={24} /> : <HiOutlineMenuAlt1 size={24} />}
//         </span>
//       </button>

//       {/* Sidebar Navigation */}
//       <nav className="mt-4">
//         <ul className="space-y-4">
//           {adminSidebarData.map((item, index) => (
//             <li key={item.path}>
//               <button
//                 onClick={() =>
//                   setActiveDropdown(activeDropdown === index ? null : index)
//                 }
//                 className="flex items-center gap-3 p-2 hover:bg-gray-200 rounded-md w-full text-left"
//               >
//                 {/* Fixed Size Icon Wrapper */}
//                 <span className="w-6 h-6 flex items-center justify-center">
//                   {sidebarIcons[item.icon]}
//                 </span>

//                 {/* Sidebar Text & Dropdown Icon */}
//                 {isOpen && (
//                   <span className="flex items-center justify-between w-full">
//                     {item.name}
//                     {activeDropdown === index ? <FaAngleUp /> : <FaAngleDown />}
//                   </span>
//                 )}
//               </button>

//               {/* Dropdown List */}
//               {activeDropdown === index && isOpen && item.children && (
//                 <ul className="flex flex-col gap-3 pl-10 mt-2 text-[18px] font-[400]">
//                   {item.children.map((subItem) => (
//                     <li key={subItem.path}>
//                       <Link to={subItem.path} className="hover:text-gray-700 flex items-center gap-2">
//                         <span className="w-6 h-6 flex items-center justify-center">
//                           {sidebarIcons[subItem.icon]}
//                         </span>
//                         {subItem.name}
//                       </Link>
//                     </li>
//                   ))}
//                 </ul>
//               )}
//             </li>
//           ))}
//         </ul>

//       </nav>
//     </aside>

//   );
// };



import React, { useState } from 'react';
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
import { IoClose } from "react-icons/io5";
import { HiOutlineMenuAlt1 } from "react-icons/hi";



export const Sidebar = ({ sidebarWidth, setSidebarWidth, setMenuOpen, isMenuOpen }) => {
  const { currentLocation, isCurrentLocation } = useCommon();
  const [isOpen, setIsOpen] = useState(true);
  const { handleReset } = useForm();
  const navigate = useNavigate();

  const handleOpenMenu = (name) => {
    if (name === isMenuOpen) {
      setSidebarWidth(300);
    } else {
      setMenuOpen(name);
    }
  };

  const handleSelectMenu = (path) => {
    handleReset();
    navigate(path);
  };

  const sidebarIcons = {
    "dashboard": <DashboardIcon />,
    "registeredOpNurse": <RegisteredOpIcon />,
    "registeredOpDoctor": <RegisteredOpIcon />,
    "patients": <PatientIcon />,
    doctors: <DoctorIcon />,
    staff: <StaffIcon />,
    pharmacy: <PharmacyIcon />,
    expense: <ExpenseIcon />,
    inventory: <InventoryIcon />,
    "in-patients": <InPatientIcon />,
    labs: <LabIcon />,
    settings: <SettingsIcon />,
    reports: <ReportIcon />,
  };

  return (
    <aside className={`bg-white h-screen px-4   ${isOpen ? "w-72" : ""}`}>
      {/* Sidebar Toggle Button */}
      <button
        className="p-2 rounded-md hover:bg-gray-200 transition flex items-center justify-center"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="w-6 h-6 flex items-center justify-center">
        <HiOutlineMenuAlt1 size={24}/>
        </span>
      </button>

      {/* Sidebar Menu Items */}
      {adminSidebarData.map((item) => (
        <div className={`mr-3 mt-2 rounded-r-[10px] flex flex-col ${isMenuOpen === item.name ? "gap-3" : "gap-0"}`} key={item.name}>
          <div 
            className={`flex justify-between p-3  items-center pr-[10px] transition-all duration-500 ease-in-out 
              hover:text-white hover:bg-primary rounded-r-[10px] 
              ${isCurrentLocation(item.path) ? "text-white bg-primary fill-white active" : "text-[#505050] fill-custom-black font-roboto"} `}
            onClick={() => handleSelectMenu(item.name === "Pharmacy" ? "/admin/pharmacy/stocks" : item.path)}
          >
            <div className='flex gap-[15px]'>
              {sidebarIcons[item.icon]}
              {isOpen && (
                <p className="font-[400] text-[18px] transition-all duration-500 ease-in-out">{item.name}</p>
              )}
            </div>
            {item.components && (
              <div 
                onClick={() => handleOpenMenu(item.name)} 
                className={`flex items-center justify-center size-[25px] object-contain transition-all duration-500 ease-in-out 
                  ${isOpen ? "visible" : "hidden"} 
                  ${isMenuOpen === item.name ? "rotate-[-180deg]" : "rotate-y-0"}`}
              >
                <ArrowIcon />
              </div>
            )}
          </div>

          {/* Submenu */}
          {item.components && (
            <div className={`flex flex-col pl-[30px] gap-4 transition-all duration-500 ease-in-out ${isMenuOpen === item.name ? "max-h-[240px]" : "max-h-0"}   ${isOpen ? "" : "hidden"}`}>
              {item?.components.map((it) => (
                <div
                  onClick={() => handleSelectMenu(it.path)}
                  className={`flex items-center gap-4 transition-all duration-500 ease-in-out ${isMenuOpen === item.name ? "visible opacity-100" : "invisible opacity-0"}`}
                  key={it.tab_path}
                >
                  <p className={`size-2 rounded-full transition-all duration-300 ease-in-out ${isCurrentLocation(it.tab_path) ? "bg-primary" : "bg-[#C8C8C8]"}`}></p>
                  <p className={`text-[16px] font-[400] transition-all duration-300 ease-in-out ${isCurrentLocation(it.tab_path) ? "text-primary" : "text-[#505050]"}`}>{it.tab_name}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
    </aside>
  );
};
