import React from 'react'
import { Form } from './Form'
import { useForm } from '../../context/FormContext'

export const FormLayout = ({data, isBorder=true, isWrap=false}) => {

  const {formData, handleChange, errors, selectedUnit} = useForm();

  return (
    data?.map((item, index) =>
      Array.isArray(item) ? (
        <div key={index} className={`flex gap-[20px] w-full ${isWrap ? "flex-wrap w-[200px]" : ""}`}>
          {item.map((it, i) => (
            Array.isArray(it) ?
              <div key={i} className={`flex gap-[20px] w-full ${isWrap ? "flex-wrap w-[200px]" : ""}`}>
                {
                  it.map((ar, id)=>(
                    <Form key={ar.label} item={ar} formData={formData} handleChange={handleChange} errors={errors} isBorder={isBorder} />
                  ))
                }
              </div>
            : 
            <Form key={it.label} item={it} formData={formData} handleChange={handleChange} errors={errors} isBorder={isBorder}  />
          ))}
        </div>
      ) : (
        <Form key={item.label} item={item} formData={formData} handleChange={handleChange} errors={errors} isBorder={isBorder}  />
      )
    )
  )
}
