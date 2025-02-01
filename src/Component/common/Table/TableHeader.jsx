import React from "react";
import { Search } from "../../Fields/Search";
import { AddIcon } from "../../../icons/AddIcon";

export const TableHeader = ({title, buttonData, isSearch=true, button, isBlue=false}) => {
  return (
    <div className={`flex flex-wrap items-center justify-between h-[80px] rounded-xl px-5 ${isBlue ? "" : " bg-white "}`}>
      <div className="inline-flex space-x-3">
        <h1 className={`${isBlue ? "text-customBlack font-[500] text-[24px] font-poppins" : " text-primary font-[600] text-[20px] font-roboto"}`}>{title}</h1>
      </div>
      <div className="flex items-center gap-[20px] cursor-pointer">
        { isSearch && <Search isBlue={isBlue} />}
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
