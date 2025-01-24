import React from 'react'

export const TextArea = ({label, value, onchange, name, errors}) => {
  return (
    <div className='flex flex-col gap-[10px] w-full'>
        <label>{label}</label>
        <textarea 
            className='border border-[#CCCCCC] rounded-[8px] p-2'
            name={name} 
            cols="30" 
            rows="4" 
            value={value?.[name]} 
            onChange={onchange}
            placeholder='type something....'
        ></textarea>
        {
        errors && errors[name] &&
        <p className="text-red-500 text-[14px]">{errors[name]}</p>
      }
    </div>
  )
}
