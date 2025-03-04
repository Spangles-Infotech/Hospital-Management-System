import React from "react";

export const Input = ({ label, type = "text", value, onChange, errors, name, isBorder, isSingle=false }) => {

  const color = value?.["availableQuantity"] <= 100 ? "text-[#E50000]" : "text-[#009206]"
  return (
    <div className="flex flex-col gap-2 w-full">
      {
        label &&
        <label className="heading font-roboto font-[500] text-lg text-customBlackColorFont2 mb-3">
          {label}
        </label>
      }
      <input
        type={type}
        name={name}
        value={ name && isSingle ? value?.[name] || "" : name === "productCode" ?  value?.[name] :   value?.[name] || "" }
        onChange={onChange}
        className={`h-[50px]  ${type === "time" ? "appearance-none bg-time bg-no-repeat bg-bottom-4 bg-[length:20px_20px]" : ""} ${name === "availableQuantity" ? color : "text-customBlack"} ${isBorder ? "rounded-md border border-[#DDDDDD] focus:ring-primary focus:outline-primary px-[10px]" : "focus:outline-none px-[5px]" }`}
      />
      {
        errors && errors[name] &&
        <p className="text-red-500 text-[14px]">{errors[name]}</p>
      }
    </div>
  );
};
