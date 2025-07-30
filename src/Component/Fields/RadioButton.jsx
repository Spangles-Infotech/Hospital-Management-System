import React from 'react'

export const RadioButton = ({ label = "Status", value,  onChange, options=["Paid", "Unpaid"], errors, name }) => {

  const isGreenStatus = (item)=>{ return item === "paid" || item === "active" || item === "approved" || item === "completed"};
  return (
    <div className="flex flex-col justify-center gap-[10px] w-full">
      <label className="block text-sm font-medium">{label}</label>
      <div className="flex  items-center mt-1 font-roboto font-medium">
      {options.map((option, index) => (
        <label className="inline-flex items-center ml-10 mr-10" key={index}>
          <input
            type="radio"
            name={name}
            value={option}
            checked={value?.[name] === option}
            onChange={onChange}
            className={`form-radio ${isGreenStatus(option.toLowerCase()) ? "text-green-600 focus:ring-green-600" : "text-red-600 focus:ring-red-600"}`}
          />
          <span className={`ml-2 ${isGreenStatus(option.toLowerCase()) ? "text-green-600 " : "text-red-600"}`}>{option}</span>
        </label>
      ))}
      </div>
      { errors &&
        errors[name] &&
        <p className="text-red-600 text-sm">{errors[name]}</p>
      }
    </div>
  )
}
