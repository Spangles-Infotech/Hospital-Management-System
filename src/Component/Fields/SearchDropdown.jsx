import React, { useState } from "react";

export const SearchDropdown = ({value, name, label, options, errors, onChange }) => {
  const [showDropdown, setShowDropdown] = useState(false);

  const filterByQuery = () => {
    if (!value[name]) return options;
    return options.filter((item) =>
      item.toLowerCase().includes(value[name].toLowerCase())
    );
  };

  return (
    <div className='flex flex-col gap-[10px] w-full'>
        <label className="heading font-roboto font-[500] text-lg text-customBlackColorFont2 mb-3">
          {label}
        </label>
        <input
            type="text"
            placeholder="Search category..."
            name={name}
            value={value[name]}
            onChange={onChange}
            onFocus={() => setShowDropdown(true)}
            onBlur={() => setTimeout(() => setShowDropdown(false), 200)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 h-[50px]"
        />
        {showDropdown && (
            <ul className="absolute w-full mt-1 bg-white border border-gray-200 rounded-lg shadow-lg max-h-48 overflow-y-auto">
            {filterByQuery().length > 0 ? (
                filterByQuery().map((item, index) => (
                <li
                    key={index}
                    className="px-4 py-2 cursor-pointer hover:bg-gray-100"
                    onMouseDown={(e) => {
                    e.preventDefault();
                    onChange({target:{name:name, value:item}});
                    setShowDropdown(false);
                    }}
                >
                    {item}
                </li>
                ))
            ) : (
                <li className="px-4 py-2 text-gray-500">No results found</li>
            )}
            </ul>
        )}
        {
            errors && errors[name] &&
            <p className="text-red-500 text-[14px]">{errors[name]}</p>
        }
    </div>
  );
};
