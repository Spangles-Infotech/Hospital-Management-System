import React from "react";
import { getDateFromISO } from "../../utils/functions/function";

export const Input = ({ label, type = "text", value, onChange, errors, name, isBorder, isSingle=false, readOnly, isDoctorIdReadOnly, isPatientId, isStaffId }) => {

  const handleChange = (e) => {
    const inputValue = e.target.value;
    console.log("Input change - name:", name, "value:", inputValue);
    if (name === "expiryDate" || name === "stockedDate") {
      // For native <input type="date"> — accept value directly
      if (inputValue === "" || /^\d{4}-\d{2}-\d{2}$/.test(inputValue)) {
        onChange(e);
      }
    } else {
      onChange(e);
    }
  };
  
  
  // console.log("Input component - name:", name, "value:", value, "isPatientId:", isPatientId);
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
        // inputMode={type === "date" || name === "expiryDate" ? "numeric" : undefined}

        value={isPatientId ? value?.[name] || "" : (name && isSingle ? value?.[name] || "" : name === "productCode" ? name === "expiryDate" ? getDateFromISO(value?.[name]) :  value?.[name] :   value?.[name] || "")}
        onChange={handleChange}
        readOnly={readOnly}
        onKeyDown={(e) => { if (readOnly && type === "date") e.preventDefault(); }}
        maxLength={type === "text" && name === "appointmentDate" ? 10 : undefined}
        className={`h-[50px]  ${type === "time" ? "appearance-none bg-time bg-no-repeat bg-bottom-4 bg-[length:20px_20px]" : ""} ${name === "availableQuantity" ? color : "text-customBlack"} ${isBorder ? "rounded-md border border-[#DDDDDD] focus:ring-primary focus:outline-primary px-[10px]" : "focus:outline-none px-[5px]" } ${isDoctorIdReadOnly ? "text-red-500 font-bold" : ""} ${isPatientId ? "text-red-500 font-bold" : ""} ${isStaffId ? "text-red-500 font-bold" : ""}`}
      />
      {
        errors && errors[name] &&
        <p className="text-red-500 text-[14px]">{errors[name]}</p>
      }
    </div>
  );
};
