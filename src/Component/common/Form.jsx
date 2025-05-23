import React from 'react'
import { RadioButton } from '../Fields/RadioButton'
import { InputDropdown } from '../Fields/InputDropdown'
import { TextArea } from '../Fields/TextArea'
import { Dropdown } from '../Fields/Dropdown'
import { FileUpload } from '../Fields/FileUpload'
import { Input } from '../Fields/Input'
import { DynamicForm } from './DynamicForm'
import { Search } from '../Fields/Search'
import { useForm } from '../../context/FormContext'
import { SearchDropdown } from '../Fields/SearchDropdown'
import { useDesignations } from '../../hooks/useDesignations'

export const Form = ({item, formData, handleChange, errors, isBorder}) => {
    const {handleInputDropDownChange} = useForm()
    const { designations } = useDesignations()
    console.log("designations", designations)

  return (
    <>
        {
            item.type?.toLowerCase() === "inputdropdown" ? (
                <InputDropdown label={item?.label} value={formData} name={item?.name} errors={errors} type={item?.inputType || "text"} onChange={(e)=>handleInputDropDownChange(e, item?.name)} inputName={item?.inputName} dropdownName={item?.dropdownName} options={item.options} align={item?.align} />
            ) 
            : item.type?.toLowerCase() === "searchdropdown" ? (
                <SearchDropdown label={item?.label} value={formData} name={item.name} errors={errors} onChange={handleChange} options={item?.options}  />
            )
            : item.type?.toLowerCase() === "textarea" ?
                <TextArea label={item?.label} value={formData} onChange={handleChange}  name={item?.name} errors={errors} isBorder={isBorder} />
            : item?.type === "select" ? (
                <Dropdown label={item?.label} value={formData} options={item?.useHook === "useDesignations" ? designations : item?.options} onChange={handleChange} name={item?.name} errors={errors} isBorder={isBorder} isAdd={item?.isAdd} title={item?.title} fields={item?.fields} route={item?.route} refetch={item.refetch} />
            ) : item?.type === "radio" ? (
                <RadioButton label={item?.label} value={formData} onChange={handleChange} name={item?.name} errors={errors} options={item?.options} isBorder={isBorder} />
            ) : item?.type === "" ?
                <p className='w-[100%]'></p>
            : item?.type === "file" ?
                <FileUpload label={item?.label} value={formData} onChange={handleChange} name={item?.name} errors={errors} title={item?.title} isBorder={isBorder} />
            : item?.type === "dynamic" ?
                <DynamicForm field={item.field} title={item.label} name={item.name} isBorder={isBorder} />
            : item.type === "search"?
                <Search  value={formData["search"]} onChange={handleChange} isForm={true}  />
            :
                <Input label={item?.label} type={item.type} options={item.options} value={formData} onChange={handleChange} name={item?.name} errors={errors} isBorder={isBorder} />
        }
    </>
  )
}
