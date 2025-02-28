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

  const postData = async (body) => {
    setIsLoading(true)
    try {
      const response = await fetch.post(url, body)
      setMessage(response.data.message)

      if (response.status === 201) {
        toast.success(response.data.message || "Data posted successfully!") // Success toast
        handleReset()
      }
      return response.status
    } catch (error) {
      setError(error.message)
      toast.error(error.message || "Failed to post data!") // Error toast
    } finally {
      setIsLoading(false)
    }
  }

  return {
    isLoading, message, error, postData
  }
}
