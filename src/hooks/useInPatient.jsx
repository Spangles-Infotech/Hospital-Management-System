import React, { useState } from 'react'
import { fetch } from '../api/fetch'
import { useForm } from '../context/FormContext'
import { usePostData } from './usePostData'
import { useNavigate } from 'react-router-dom'

export const useInPatient = () => {

  const {setFormData, formData, handleReset} = useForm()
  const navigate = useNavigate()
  const [rooms, setRooms] = useState([])
  const {postData} = usePostData("/allocate-room")

  const getInPatientById = async(id)=>{
    try {
      const response = await fetch.get(`/get-ip-patient/${id}`)
      setFormData((prev)=> ({...prev, ...response.data.data}))

    } catch (error) {
      console.log("error", error.message)
    }
  }

  const handleBackToInPatient = ()=>{
    navigate("/admin/in-patients")
    handleReset()
  }
  
  const getRoomInfo = async(blockName)=>{
    try {
      const response = await fetch.get(`/get-all-room/${blockName}`)
      setRooms(response.data.data)
    } catch (error) {
      console.log("error", error.message)
    }
  }


  const handleAllocateRoom = ()=>{
    postData(formData)
    handleBackToInPatient()
  }

  return {
    handleBackToInPatient,
    handleAllocateRoom,
    getInPatientById,
    getRoomInfo,
    rooms,
  }
}
