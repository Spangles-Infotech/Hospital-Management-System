import React from "react";

export const AdditionalInfo = ({previewField, data}) => {
  console.log("Data", data,previewField)
  return (
    <div className={`p-4 flex flex-col gap-[10px] ${!data?.additionalInfo ? "hidden" : ""}`}>
      <p className="text-slate-700 font-medium text-[18px]">Additional Info</p>
      <div className="flex flex-col gap-2">
        {previewField.additionalInfo && previewField.additionalInfo.map((info, index) => (
          <div key={index} className="flex items-center gap-3 ">
            <p className="text-slate-700 font-medium text-[16px] w-[150px]">{info.label}</p>
            <p className={`text-secondaryBlue text-[16px] font-medium`}>{data.additionalInfo[info.name]}</p>
          </div>
        ))}
      </div>
    </div>
  ); 
};
