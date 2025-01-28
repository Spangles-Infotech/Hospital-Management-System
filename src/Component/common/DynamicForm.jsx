import React, { useState } from 'react'
import { Form } from './Form'
import { useForm } from '../../context/FormContext'

export const DynamicForm = ({field, title, name}) => {

    
    const [fields, setFields] = useState([field])

    const { formData, errors, handleTimingChange} = useForm()

    const handleAddfields = ()=>{
        setFields([...fields, field])
    }

  return (
    <div className='flex flex-col gap-[10px]'>
        <label className="heading font-roboto font-[500] text-lg text-customBlackColorFont2">{title}</label>
        {
            fields?.map((field, index)=>(
                <div className='flex gap-[15px]' key={index}>
                    {
                        fields && field?.map((item)=>(
                            <Form key={item.label} item={item} handleChange={(e)=>handleTimingChange(e, name, index)} errors={errors} formData={formData?.[name]?.[index]} />
                        ))
                    }
                    <div className='w-[50px] h-[100px] flex items-end' >
                        <div className='rounded-[5px] w-[50px] h-[50px] p-2 border border-[#DDDDDD] flex items-center justify-center mb-1 cursor-pointer' onClick={handleAddfields}>
                            <img src={require("../../assests/plus.png")} alt="plus-icon" className='size-[25px] object-contain' />
                        </div>
                    </div>
                </div>
            ))
        }
    </div>
  )
}
