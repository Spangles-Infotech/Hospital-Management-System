import { createContext, useContext, useState } from "react";

const FormContext = createContext()

export const FormProvider = ({children})=>{
    const [formData,setFormData] = useState({})
    const [errors,setErrors] = useState({})

    const handleChange = (e)=>{
        const {name, value} = e.target
        setFormData({...formData,[name]:value})
    }

    const validateErrors = (fields)=>{
        let errors = {}
        fields.forEach((item)=>{
            if (!formData[item.name]){
                errors[item.name] = `${item.label} is Required` 
            }
        })
        return errors
    }

    const handleSubmit = (e, fields)=>{
        e.preventDefault()
        const errors = validateErrors(fields)
        if(Object.entries(errors).length === 0){
            console.log("formData", formData)
        }else{
            setErrors(errors)
        }
    }
    return (
        <FormContext.Provider value={{formData, errors, handleChange, handleSubmit}}>
            {children}
        </FormContext.Provider>
    )
}

export const useForm = () => useContext(FormContext)