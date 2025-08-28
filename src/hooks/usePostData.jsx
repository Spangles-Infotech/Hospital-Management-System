import { useEffect, useState } from 'react'
import { fetch } from '../api/fetch'
import { useForm } from '../context/FormContext'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

export const usePostData = (url, options = {}) => {
  const [isLoading, setIsLoading] = useState(false)
  const [message, setMessage] = useState("")
  const [error, setError] = useState(null)
  const { handleReset } = useForm()

  const postData = async (body, postRoute = url) => {
    setIsLoading(true)
    try {
      const response = await fetch.post(postRoute, body)
      setMessage(response.data.message)

      if (response.status === 201) {
        toast.success(response.data.message || "Data posted successfully!") 
        handleReset()
      }
      return response.status
    } catch (error) {
      setError(error.message)
      console.log("error", error)
      toast.error( error.response.data.message ||error.message || "Failed to post data!")
    } finally {
      setIsLoading(false)
    }
  }

  return {
    isLoading, message, error, postData
  }
}
