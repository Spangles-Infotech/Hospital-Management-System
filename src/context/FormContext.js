import { createContext, useContext, useState } from "react";

const FormContext = createContext()

export const FormProvider = ({children})=>{
    const [formData,setFormData] = useState({})
    const [errors,setErrors] = useState({})

    const handleChange = (e)=>{
        const {name, value} = e.target
        setFormData({...formData,[name]:value})
        setErrors((prevErr)=>{
            const newErrors = {...prevErr}
            delete newErrors[name]
            return newErrors
        })
    }

    const validateErrors = (fields) => {
        let errors = {};
      
        fields.forEach((item) => {
          if (Array.isArray(item)) {
            item.forEach((ite) => {
              if (Array.isArray(ite)){
                ite.map((it)=>{
                    if (!formData[it.name  || it.inputName]) {
                        errors[it.name || it.inputName] = `${it.label} is Required`;
                      }
                })
              }
              else if(!formData[ite.name  || ite.inputName]) {
                errors[ite.name || ite.inputName] = `${ite.label} is Required`;
              }
            });
          } else {
            if (!formData[item.name]) {
              errors[item.name || item.inputName] = `${item.label} is Required`;
            }
          }
        });
      
        return errors;
      };

    const handleReset = ()=>{
        setFormData({})
        setErrors({}); 
    }

    const handleTimingChange = (e, label, index)=>{
      const {name, value} = e.target
      setFormData((prevFormData) => {
        const updatedFormData = { ...prevFormData }

        if (!updatedFormData[label]) {
            updatedFormData[label] = []
        }
        if (!updatedFormData[label][index]) {
            updatedFormData[label][index] = {}
        }
        updatedFormData[label][index][name] = value

        return updatedFormData
      })
    }
    
    const handleSubmit = (e, fields)=>{
        e.preventDefault()
        const errors = validateErrors(fields)
        if(Object.entries(errors).length === 0){
            console.log("formData", formData)
        }else{
            setErrors(errors)
            console.log("errors", errors)
        }
    }

    return (
        <FormContext.Provider value={{formData, errors,setFormData, handleChange, handleSubmit, handleReset, handleTimingChange}}>
            {children}
        </FormContext.Provider>
    )
}

export const useForm = () => useContext(FormContext)