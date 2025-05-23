import React from "react";
import { FormModal } from "../modalContents/FormModal";
import { useModal } from "../../context/ModalContext";

export const Dropdown = ({ value, onChange, label, options, isIndexIsValue=false, errors, name, isBorder, isOption=false, isAdd=false, title, fields, route, refetch }) => {

    const undefinedValue = value?.[name] === undefined || value?.[name] === ""
    const {openModal , closeModal} = useModal()
    
  return (
    <div className="flex flex-col gap-2 w-full">
      {
        label &&
        <div className="flex justify-between">
          <label className={`font-roboto font-medium text-lg text-customBlack mb-3 `}>
            {label}
          </label>
          {
            isAdd &&
            <p onClick={()=>{openModal(FormModal, {title:title, formField:fields, name:route, refetch:refetch, label:name})}} className="text-primary cursor-pointer">{` + ${label}`}</p>
          }
        </div>
      }
      <select
        value={ !undefinedValue ? value?.[name] : "select"}
        name={name}
        onChange={onChange}
        className={`h-[50px] ${isBorder ? "border rounded-md border-[##DDDDDD] focus:ring-primary focus:border-primary px-3" : "focus:outline-none"}`}
      >
        {undefinedValue && <option>select</option>}
        {Array.isArray(options) && (options || [])?.map((option, index) => (
          <option key={option} value={isIndexIsValue ? index  : option?._id}>{option?.category || option}</option>
        ))}
      </select>
      {
        errors && errors[name] &&
        <p className="text-red-500 text-[14px]">{errors[name]}</p>
      }
    </div>
  );
};
