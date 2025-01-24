import React from "react";

export const Dropdown = ({ value, onChange, label, options, isIndexIsValue=false, errors, name}) => {
    const undefinedValue = value === undefined || value === ""
  return (
    <div className="flex flex-col gap-2 w-full">
      {
        label &&
        <label className="font-roboto font-medium text-lg text-customBlackColorFont2 mb-3">
          {label}
        </label>
      }
      <select
        value={ !undefinedValue ? value?.[name] : "select"}
        name={name}
        onChange={onChange}
        className={`h-[50px] border rounded-md border-[#898989] focus:ring-primary focus:border-primary p-0 pl-3`}
      >
        {undefinedValue && <option>select</option>}
        {options.map((option, index) => (
          <option key={option} value={isIndexIsValue ? index : option._id}>{option.category || option}</option>
        ))}
      </select>
      {
        errors && errors[name] &&
        <p className="text-red-500 text-[14px]">{errors[name]}</p>
      }
    </div>
  );
};
