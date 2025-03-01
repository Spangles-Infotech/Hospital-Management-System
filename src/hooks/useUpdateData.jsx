import React, { useState } from 'react'
import { useForm } from '../context/FormContext'
import { fetch } from '../api/fetch'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

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
            toast.success(response.data.message||"Data post successfully")
            handleReset()
        }
        return response.status
    } catch (error) {
        setError(error.messasge)
        toast.error(error.messasge||"failed to update data")
    } finally {
        setIsLoading(false)
    }
  }
  return {
    isLoading, message, error, updateData
  }
}
