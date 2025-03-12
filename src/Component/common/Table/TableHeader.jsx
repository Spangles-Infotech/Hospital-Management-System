import React from "react";
import { Search } from "../../Fields/Search";
import { AddIcon } from "../../../icons/AddIcon";
import { Date } from "../../Fields/Date";
import { useForm } from "../../../context/FormContext";

export const TableHeader = ({title, buttonData, isSearch=true, button, isBlue=false, isDate=true}) => {
  
  const {tableForm, handleTableFormChange} = useForm();

  return (
    <div className={`flex flex-wrap items-center justify-between h-[80px] rounded-xl px-5 ${isBlue ? "" : " bg-white "}`}>
      <div className="inline-flex space-x-3">
        <h1 className={`${isBlue ? "text-customBlack font-[500] text-[24px] font-poppins" : " text-primary font-[600] text-[20px] font-roboto"}`}>{title}</h1>
      </div>
      <div className="flex items-center gap-[20px] cursor-pointer">
        <div className={`flex gap-[10px] ${!isDate ? "hidden" : ""}`}>
          <Date title={"From"} value={tableForm} onChange={handleTableFormChange} name={"from"}  />
          <Date title={"To"} value={tableForm} onChange={handleTableFormChange} name={"to"} startDate={tableForm["from"]} />
        </div>
        <Search isBlue={isBlue} isSearch={isSearch} value={tableForm["search"]} onChange={handleTableFormChange}  />
        <div className="flex gap-[15px]">
          {
              buttonData?.map((item)=>(
                  <div
                      key={item.name}
                      onClick={()=>item.onClick()}
                      role="button" 
                      className="flex flex-row gap-1 items-center px-3 py-1 h-[30px] 2xl:h-[35px] border border-primary text-white transition-all duration-500 bg-primary rounded text-sm space-x-2 hover:bg-white hover:text-primary fill-white focus:ring-4 focus:ring-teal-200 cursor-pointer hover:fill-primary"
                  >
                      {item.icon ? <item.icon />  : <AddIcon /> }
                      <span>{item.name}</span>
                  </div>
              ))
          }
         {button && (
            <div className="border border-primary text-primary p-1 cursor-pointer rounded-md w-20 text-center font-medium">
              View All
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
