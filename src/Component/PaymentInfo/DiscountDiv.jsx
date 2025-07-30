import React, { useState } from "react";
import arrowIcon from "../../assests/arrow.png"; // Import image properly

const discountFields = [
  {
    label: "Discount",
    inputName: "number",
    dropdownName: "discountType",
    type: "inputdropdown",
    options: ["%", "₹"], // Options to select from
  },
];

const DiscountDiv = ({ label, inputName, dropdownName, type, options }) => {
  const [inputValue, setInputValue] = useState(""); // Store input value
  const [selectedOption, setSelectedOption] = useState(options?.[0] || ""); // Default to first option if available

  // Handle input value change based on selected option
  const handleDropdownChange = (e) => {
    const newValue = e.target.value;
    setSelectedOption(newValue);

    // Update the input value when an option is selected
    if (newValue === "%") {
      setInputValue(""); // Reset the input value if "%" is selected
    } else {
      setInputValue(newValue); // Set the input value based on the selected option
    }
  };

  return (
    <div className="flex flex-col border border-[#089BAB] rounded-[10px] p-6 gap-y-4 bg-white h-[143px]">
      <p className="font-[500] text-[20px] text-[#505050]">{label}</p>
      <div className="relative w-full flex items-center border rounded-[10px] border-[#898989] focus:outline-none focus:ring-2 focus:ring-[#898989] focus:border-[#898989]">
        <input
          name={inputName}
          type="number"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)} // Handle input change
          className="rounded-[10px] px-4 py-2 appearance-none text-gray-700 focus:outline-none border-none"
          placeholder="00"
          inputMode="numeric" // Specify numeric input mode

        />

        <div className="relative w-full border-l-2 border-[#898989]">
          <select
            name={dropdownName}
            value={selectedOption}
            onChange={handleDropdownChange} // Handle dropdown change
            className="px-4 py-2 text-gray-700 focus:outline-none rounded-[10px] appearance-none w-full pr-10"
          >
            {options?.map((option, index) => (
              <option key={index} value={option}>
                {option} {/* Display the option text inside the select */}
              </option>
            ))}
          </select>

          {/* Conditionally render <p> tag with selected option */}
          <p className="absolute bottom-3 text-[#505050] ml-1 font-[400] text-[14px] object-contain">
            {selectedOption}
          </p>

          {/* Image placed absolutely inside the select wrapper */}
          <img
            src={arrowIcon}
            alt="Arrow"
            className="absolute right-3 top-1/2 transform -translate-y-1/2 w-[25px] h-[25px] pointer-events-none object-contain"
          />
        </div>
      </div>
    </div>
  );
};

const DiscountSection = () => {
  return (
    <div className="flex flex-wrap gap-4">
      {discountFields.map((field, index) => (
        <DiscountDiv key={index} {...field} />
      ))}
    </div>
  );
};

export default DiscountSection;
