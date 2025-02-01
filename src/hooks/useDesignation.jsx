import React, { useState } from 'react'

export const useDesignation = () => {
    const [designation, setDesignation] = useState([])
    const [value, setValue] = useState("")
    const [errors, setErrors] = useState({
        designation:""
    })

    const handleChange = (e)=>{
        setValue(e.target.value)
    }

    const handleAddDesignation = ()=>{
        console.log("value",)
        if(value === ""){
            setErrors({
                designation:"Desgination is required"
            })
        }else{
            setDesignation([...designation, value])
            setValue("")
        }
    }
    const handleRemoveDesignation = (item)=>{
        const updatedDesignation = designation.filter(deg => deg !== item)
        setDesignation(updatedDesignation)
    }

  return {
    designation, value, errors, handleChange, handleAddDesignation, handleRemoveDesignation
  }
}
