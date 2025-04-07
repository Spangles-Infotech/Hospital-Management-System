import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useFetchData } from './useFetchData'
import { fetch } from '../api/fetch'
import { useForm } from '../context/FormContext'
import { usePostData } from './usePostData'
import { useUpdateData } from './useUpdateData'

export const usePrescription = () => {

    const navigate = useNavigate()
    const {formData, setFormData, handleReset} = useForm()
    const {postData} = usePostData("/post-prescription")
    const {updateData} = useUpdateData("/discharge-room")
    const {updateData:changeRoom} = useUpdateData("/change-room")
    const {data, fetchData:refetch, isLoading} = useFetchData("/get-all-prescription")

    const getPrescriptionDetail = async(id)=>{
      try {
        const response = await fetch.get(`/get-prescription/${id}`)
        setFormData((prev)=> ({...prev, ...response.data.data}))
      } catch (error) {
        console.log("errror", error)
      }
    }

    const handleBackToPrescription = () => {
      navigate("/admin/pharmacy/Prescriptions");
      handleReset();
    };

    const handleDischarge = (id)=>{
      updateData(id)
      handleBackToPrescription()
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

    const handlePostPrescriptionData = (id, isEdit) => {
      if(isEdit){
        changeRoom(id, formData)
      }else{
        postData(formData);
      }
      handleBackToPrescription()
    };
  return {
    handlePostPrescriptionData,
    handleBackToPrescription,
    getPrescriptionDetail,
    handleDischarge,
    isLoading,
    actionBtn,
    formData,
    data
  }
}
