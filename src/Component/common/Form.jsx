import React from 'react'
import { RadioButton } from '../Fields/RadioButton'
import { InputDropdown } from '../Fields/InputDropdown'
import { TextArea } from '../Fields/TextArea'
import { Dropdown } from '../Fields/Dropdown'
import { FileUpload } from '../Fields/FileUpload'
import { Input } from '../Fields/Input'
import { useForm } from '../../context/FormContext'

export const Form = ({item}) => {

    const { formData, handleChange, errors } = useForm()
    console.log("item", item)

  return (
    <>
        {
            item.type.toLowerCase() === "inputdropdown" ? (
                <InputDropdown label={item?.label} value={item?.value} errors={errors} onChange={handleChange} inputName={item?.inputName} dropdownName={item?.dropdownName} options={item.options} />
            ) : item.type.toLowerCase() === "textarea" ?
                <TextArea label={item?.label} value={formData} onChange={handleChange}  name={item?.name} errors={errors} />
            : item.type === "select" ? (
                <Dropdown label={item?.label} value={formData} options={item?.options} onChange={handleChange} name={item?.name} errors={errors} />
            ) : item.type === "radio" ? (
                <RadioButton label={item?.label} value={formData} onChange={handleChange} name={item?.name} errors={errors} />
            ) : item.type === "" ?
                <p className='w-[100%]'></p>
            : item.type === "file" ?
                <FileUpload label={item?.label} value={formData} onChange={handleChange} name={item?.name} errors={errors} />
            : 
                <Input label={item?.label} type={item.type} options={item.options} value={formData} onChange={handleChange} name={item?.name} errors={errors} />
        }
    </>
  )
}
