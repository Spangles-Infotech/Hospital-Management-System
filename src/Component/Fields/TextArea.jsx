import React from 'react'

export const TextArea = ({label, value, onChange, name, errors}) => {


  return (
    <div className='flex flex-col gap-[10px] w-full'>
        <label>{label}</label>
        <textarea 
            className='border border-[#DDDDDD] rounded-[8px] p-2 focus:ring-primary focus:outline-primary'
            name={name} 
            cols="30" 
            rows="4" 
            value={value?.[name]  || ""} 
            onChange={onChange}
            placeholder='type something....'
        ></textarea>
        {
        errors && errors[name] &&
        <p className="text-red-500 text-[14px]">{errors[name]}</p>
      }
    </div>
  )
}
