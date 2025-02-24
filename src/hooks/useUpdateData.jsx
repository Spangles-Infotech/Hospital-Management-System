import React, { useState } from 'react'
import { useForm } from '../context/FormContext'
import { fetch } from '../api/fetch'

export const useUpdateData = (url) => {
  const [isLoading, setIsLoading] = useState(false)
  const [message, setMessage] = useState("")
  const [error, setError] = useState(null)
  const {handleReset} = useForm()

  const updateData = async(id, body)=>{
    setIsLoading(true)
    try {
        const response = await fetch.put(`${url}/${id}`, body)
        setMessage(response.data.message)
        if(response.status === 200){
            setIsLoading(false)
            handleReset()
        }
        return response.status
    } catch (error) {
        setError(error.messasge)
        console.log("error at api", error.message)
    } finally {
        setIsLoading(false)
    }
  }
  return {
    isLoading, message, error, updateData
  }
}
