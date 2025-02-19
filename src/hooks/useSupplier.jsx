import { useNavigate } from 'react-router-dom'
import { useForm } from '../context/FormContext'
import { usePostData } from './usePostData'
import { supplierFormField } from '../utils/variable/supplier'

export const useSupplier = () => {
    const navigate = useNavigate()
    const {handleReset, handleSubmit, formData} = useForm()
    const {message, isLoading, error, postData} = usePostData("/add-supplier")

    const handlePostSupplierData = ()=>{
        postData(formData)
        navigate("/admin/pharmacy/suppliers")
    }

    const handleClickSave = (e)=>{
      if(!isLoading){
        e.preventDefault()
        handleSubmit(e, supplierFormField, ()=>handlePostSupplierData())
      }
    }

    const handleBackToSupplier = ()=>{
        navigate("/admin/pharmacy/suppliers")
        handleReset()
    }
    
  return {
    handleBackToSupplier,
    handleClickSave,
    isLoading,
  }
}
