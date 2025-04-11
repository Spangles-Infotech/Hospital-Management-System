import React, { useState } from 'react'
import { fetch } from '../api/fetch'
import { useForm } from '../context/FormContext'
import { usePostData } from './usePostData'
import { useNavigate } from 'react-router-dom'
import { useUpdateData } from './useUpdateData'

export const useInPatient = () => {

  const {setFormData, formData, handleReset} = useForm()
  const navigate = useNavigate()
  const [rooms, setRooms] = useState([])
  const {postData} = usePostData("/allocate-room")
  const {postData:createBill} = usePostData("/create-ip-bill")
  const {updateData} = useUpdateData("/discharge-room")
  const {updateData:changeRoom} = useUpdateData("/change-room")


  const getInPatientBillingById = async(id)=>{
    try {
      const response = await fetch.get(`/get-ip-patient-billing/${id}`)
      setFormData((prev)=> ({...prev, ...response.data.data}))
    } catch (error) {
      console.log("error", error.message)
    }
  }

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
  
  const handleBackToIpBilling = ()=>{
    navigate("/admin/ip-billing")
    handleReset()
  }

  const handleDischarge = (id)=>{
    updateData(id, formData)
    handleBackToInPatient()
  }

  const handleCreateBill = ()=>{
    createBill(formData)
    handleBackToIpBilling()
  }
  
  const getRoomInfo = async(blockName)=>{
    try {
      const response = await fetch.get(`/get-all-room/${blockName}`)
      setRooms(response.data.data)
    } catch (error) {
      console.log("error", error.message)
    }
  }


  const handleAllocateRoom = (id, isEdit)=>{
    if(isEdit){
      changeRoom(id, formData)
    }else{
      postData(formData)
    }
    handleBackToInPatient()
  }

  return {
    getInPatientBillingById,
    handleBackToIpBilling,
    handleBackToInPatient,
    handleAllocateRoom,
    handleCreateBill,
    getInPatientById,
    handleDischarge,
    getRoomInfo,
    rooms,
  }
}
