import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useFetchData } from './useFetchData'
import { fetch } from '../api/fetch'
import { useForm } from '../context/FormContext'

export const usePrescription = () => {

    const navigate = useNavigate()
    const {formData, setFormData} = useForm()
    const {data, fetchData:refetch, isLoading} = useFetchData("/get-all-prescription")

    const getPrescriptionDetail = async(id)=>{
      try {
        const response = await fetch.get(`/get-prescription/${id}`)
        setFormData((prev)=> ({...prev, ...response.data.data}))
      } catch (error) {
        console.log("errror", error)
      }
    }
    const actionBtn = [
        {
            name:"eye",
            onClick:  ()=>{console.log("clicking")}
        },
        {
            name: "editpen",
            onClick : (id)=>{navigate(`edit-prescription/${id}`)}
        }
    ]
  return {
    getPrescriptionDetail,
    isLoading,
    actionBtn,
    formData,
    data
  }
}
