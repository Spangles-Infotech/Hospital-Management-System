import React from 'react';

export const InputDropdown = ({ label, options, inputName, dropdownName, onChange, errors, value}) => {

    const undefinedValue = value[dropdownName] === undefined || value[dropdownName] === ""

    return (
        <div className="flex flex-col gap-3 w-full font-roboto ">
            <label className="text-[#345261] font-[500] text-[20px] mb-1">{label}</label>
            <div className="flex gap-[5px] flex-row h-[50px] rounded-md w-[100%] border-[#DDDDDD] border">
                <select className="focus:outline-none rounded-l-md px-[10px]" onChange={onChange} name={dropdownName} value={value?.[dropdownName] || "select"}>
                    {undefinedValue && <option>select</option>} 
                    {options.map((item, index) => (
                        <option value={item} key={index}>
                            {item}
                        </option>
                    ))}
                </select>
                <div className=" h-full w-[1px] flex justify-center items-center bg-[#DDDDDD]"><span></span></div>
                <input
                    type="text"
                    className="w-[80%] border-none rounded-md px-2 py-1 focus:outline-none"
                    name={inputName}
                    onChange={onChange}
                    value={value?.[inputName]  || ""}
                />
            </div>
            {
                errors && errors[inputName] &&
                <p className="text-red-500 text-[14px]">{errors[inputName]}</p>
            }
        </div>
    );
};
