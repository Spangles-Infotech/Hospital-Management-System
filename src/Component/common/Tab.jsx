import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useForm } from "../../context/FormContext";

export const Tab = ({ data, path }) => {

  const {setFormData} = useForm()
  const location = useLocation();
  const navigate = useNavigate();
  const query = new URLSearchParams(location.search);
  const tab = query.get("tab");

  const handleClickTab = (item)=>{
    setFormData((prev)=>({...prev, role:item}))
    navigate(`${path}?tab=${item.toLowerCase()}`)
  }
  return (
    <div className="flex w-full border-b border-[#E6F5F6]">
      {data.map((item) => (
        <div
          key={item}
          onClick={() => handleClickTab(item)}
          className={`tab-item relative min-w-[160px] flex items-center justify-center h-[70px] cursor-pointer text-center before:absolute before:bottom-0 before:left-1/2 before:h-[2px] before:w-0 before:bg-primary before:transition-all before:duration-500 before:ease-in-out before:transform before:-translate-x-1/2 ${
            tab === item.toLowerCase()
              ? "font-[600] text-primary before:w-full before:left-[-0px] before:translate-x-0"
              : "text-customBlack font-[400]"
          }`}
        >
          {item}
        </div>
      ))}
    </div>
  );
};
