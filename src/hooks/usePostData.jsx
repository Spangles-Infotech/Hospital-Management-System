import { useEffect, useState } from 'react'
import { fetch } from '../api/fetch'
import { useForm } from '../context/FormContext'

export const usePostData = (url, options={}) => {
  const [isLoading, setIsLoading] = useState(false)
  const [message, setMessage] = useState("")
  const [error, setError] = useState(null)
  const {handleReset} = useForm()

  const postData = async(body)=>{
    setIsLoading(true)
    try {
      const response = await fetch.post(url, body)
      setMessage(response.data.message)
      if(response.status === 201){
        handleReset()
      }
      return response.status
    } catch (error) {
      setError(error.message)
    }finally{
      setIsLoading(false)
    }
  }



  return {
    isLoading, message, error, postData
  }
}
