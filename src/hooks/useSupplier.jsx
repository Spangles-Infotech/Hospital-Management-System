import { useNavigate } from 'react-router-dom'
import { useForm } from '../context/FormContext'
import { usePostData } from './usePostData'
import { supplierFormField } from '../utils/variable/supplier'
import { useUpdateData } from './useUpdateData'
import { fetch } from '../api/fetch'

export const useSupplier = () => {
    const navigate = useNavigate()
    const {handleReset, handleSubmit, formData} = useForm()
    const {message, isLoading, error, postData} = usePostData("/add-supplier")
    const {updateData} = useUpdateData("/update-supplier")

    const handlePostSupplierData = (id, isEdit)=>{
        if(isEdit){
          updateData(id, formData)
        }else{
          postData(formData)
        }
        handleBackToSupplier()
    }

    const handleClickSave = (e, id, isEdit)=>{
      if(!isLoading){
        e.preventDefault()
        handleSubmit(e, supplierFormField, ()=>handlePostSupplierData(id, isEdit))
      }
    }

    const getSupplierId = async()=>{
      const response = await fetch.get("/get-supplier-id")
      return response.data.supplierId
    }

    const handleBackToSupplier = ()=>{
        navigate("/admin/pharmacy/suppliers")
        handleReset()
    }
    
  return {
    handleBackToSupplier,
    handleClickSave,
    getSupplierId,
    isLoading,
  }
}
