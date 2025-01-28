import React from "react";

export const Dropdown = ({ value, onChange, label, options, isIndexIsValue=false, errors, name}) => {
    const undefinedValue = value?.[name] === undefined || value?.[name] === ""
  return (
    <div className="flex flex-col gap-2 w-full">
      {
        label &&
        <label className="font-roboto font-medium text-lg text-customBlack mb-3">
          {label}
        </label>
      }
      <select
        value={ !undefinedValue ? value?.[name] : "select"}
        name={name}
        onChange={onChange}
        className={`h-[50px] border rounded-md border-[##DDDDDD] focus:ring-primary focus:border-primary px-3`}
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
