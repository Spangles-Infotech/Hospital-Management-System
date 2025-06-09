import React, { useState, useEffect } from 'react'
import { SearchIcon } from '../../icons/SearchIcon'
import { useForm } from '../../context/FormContext'
import { useDispatch, useSelector } from 'react-redux'
import { setString } from '../../store/globalStringSlice'
export const Search = ({isBlue, value, onChange, isForm=false, isSearch}) => {
  const [inputValue, setInputValue] = useState("")

  const state = useSelector((state) => state);
  const globalStr = useSelector((state) => state.globalString.value);
  const dispatch = useDispatch();
  
  const { tableForm, setTableForm } = useForm();
  
  useEffect(() => {
    if (typeof value === 'string') {
      dispatch(setString(value));
    } else {
      console.warn("❌ Invalid value passed to Search component. Expected a string.");
    }
  }, [value, dispatch]);

  const handleChange = (e) => {
    const newValue = e.target.value;
    setInputValue(newValue);
    dispatch(setString(newValue));
  }

  const handleSubmit = () => {
    // Only trigger search if globalStr has more than 3 letters
    if (globalStr && globalStr.length >= 3) {
      if (onChange) {
        onChange({
          target: {
            name: 'search',
            value: globalStr
          }
        })
      }
    } else if (globalStr.length === 0) {
      // If search is empty, also trigger to reset results
      if (onChange) {
        onChange({
          target: {
            name: 'search',
            value: ''
          }
        })
      }
    } else {
      console.log("Search query must be at least 3 characters long");
    }
  }

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault(); // Prevent form submission
      handleSubmit();
    }
  }

  return (
    <div className={`${!isSearch ? "hidden" :isForm ? "h-[98px]": "h-[35px] "}`}>
        <div className={`relative h-full ${isForm ? "flex justify-end items-end" : ""}`}>
            <div 
              className={`absolute flex items-center ps-2 cursor-pointer ${isBlue ? "text-primary inset-y-0 start-0" : isForm ? "text-white bottom-[17%] left-[5%] " : "text-customBlack inset-y-0 start-0" }`}
              onClick={handleSubmit}
            >
              <SearchIcon />
            </div>
            <input
                type="text"
                name="search"
                id="default-search"
                className={`block w-40 h-[35px] py-1 ps-10 text-sm border-2 transition-all duration-500 ease-in-out  ${isBlue ? "border-primary bg-[#EAFFFE] text-primary focus:outline-none rounded-md " : isForm ? "h-[50px] ps-15 rounded-full bg-primary text-white placeholder:text-white border-primary focus:ring-none focus:outline-none" : "ring-[#CECECE] border-[#CECECE] bg-gray-50 focus:ring-primary focus:outline-primary text-gray-900  rounded-md "} `}
                placeholder="Search..."
                onChange={handleChange}
                onKeyPress={handleKeyPress}
                value={globalStr}
                autoComplete="off"
            />
            {/* <button 
                type="button" 
                onClick={handleSubmit}
                className="text-white absolute end-0 bottom-0.5 bg-primary hover:bg-primary-focus focus:ring-4 focus:outline-none focus:ring-primary font-medium rounded-lg text-sm px-4 py-2"
            >
                Search
            </button> */}
        </div>
    </div>
  )
}
