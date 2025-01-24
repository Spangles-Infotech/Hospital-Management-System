import React from "react";

export const Input = ({ label, type = "text", value, onChange, errors, name }) => {
  return (
    <div className="flex flex-col gap-2 w-full">
      <label className="heading font-roboto font-[500] text-lg text-customBlackColorFont2 mb-3">
        {label}
      </label>
      <input
        type={type}
        name={name}
        value={value?.[name]   || ""}
        onChange={onChange}
        className={`h-[50px] px-[10px] rounded-md border border-[#DDDDDD] focus:ring-primary focus:outline-primary ${type === "time" ? "appearance-none bg-time bg-no-repeat bg-bottom-4 bg-[length:20px_20px]" : ""}`}
      />
      {
        errors && errors[name] &&
        <p className="text-red-500 text-[14px]">{errors[name]}</p>
      }
    </div>
  );
};
