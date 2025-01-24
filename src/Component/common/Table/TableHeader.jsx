import React from "react";
import { Search } from "../../Fields/Search";
import { AddIcon } from "../../../icons/AddIcon";

export const TableHeader = ({title, buttonData, isSearch=true}) => {
  return (
    <div className="flex flex-wrap items-center justify-between h-[80px] rounded-xl bg-white px-5">
      <div className="inline-flex space-x-3">
        <h1 className="font-semibold text-lg text-primary">{title}</h1>
      </div>
      <div className="flex items-center space-x-5 cursor-pointer">
        { isSearch && <Search />}
        <div className="flex gap-[15px]">
          {
              buttonData?.map((item)=>(
                  <div
                      key={item.name}
                      onClick={()=>item.onClick()}
                      role="button" 
                      className="flex flex-row gap-1 items-center px-3 py-1 h-[30px] 2xl:h-[35px] border border-primary text-white transition-all duration-500 bg-primary rounded text-sm space-x-2 hover:bg-white hover:text-primary fill-white focus:ring-4 focus:ring-teal-200 cursor-pointer hover:fill-primary"
                  >
                      <AddIcon />
                      <span>{item.name}</span>
                  </div>
              ))
          }
        </div>
      </div>
    </div>
  );
};
