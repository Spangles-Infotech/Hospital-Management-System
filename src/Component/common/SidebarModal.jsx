import React, { useEffect } from 'react'
import { FormLayout } from './FormLayout'
import { useForm } from '../../context/FormContext'
import { usePostData } from '../../hooks/usePostData'
import { useUpdateData } from '../../hooks/useUpdateData'
import { useFetchData } from '../../hooks/useFetchData'
import { useStock } from '../../hooks/useStock'

export const SidebarModal = ({isOpen, onClose, formField, isEdit,id, refetch, isAdd=false}) => {
    
    const {postData} = usePostData("/add-stocks")
    const {stockFormField, stockEditFormField, getProductCode} = useStock()
    const {data} = useFetchData( id ? `/get-stock/${id}`: null)
    const title = isEdit ? "Edit Stock" : "Add Stock"
    const {updateData} = useUpdateData("/update-stocks")
    const {handleReset, formData, setFormData} = useForm()

    useEffect(()=>{
        if(isEdit){
            setFormData(data) 
        }
    },[data, isEdit])

    const handleSaveForm = async(e)=>{
        let response = 0
        if(isEdit){
            response = await updateData(id, formData)
        }else{
            response = await postData(formData)
        }
        if(response === 200 || response === 201){
            if(refetch)refetch()
            onClose()
            handleReset()
            setFormData(() => ({}));
            window.location.reload();
        }
    }

    useEffect(()=>{
        if(!isEdit){
            const getCode = async()=>{
              const productCode = await getProductCode()
              setFormData((prev)=>({...prev, productCode:productCode}))
            }
            getCode()
        }
    },[isOpen])
    
  return (
    <>
         {isOpen && (
            <div
            className="fixed left-[20%] top-[10vh] inset-0 bg-black opacity-20"
            onClick={onClose}
            ></div>
        )}
        <div
        onContextMenu={(e) => e.stopPropagation()}
        className={`fixed flex top-[14vh] flex-col gap-[20px] right-0 h-[85vh] overflow-y-scroll w-full border border-[#1F9CC6] rounded-l-[15px] md:w-1/2  p-6 bg-white transform transition-transform duration-700 ease-in-out ${
            isOpen ? "translate-x-0 z-[10]" : "translate-x-full"
        }`}>
            <div className='flex justify-between items-center'>
                <p className='text-[#1F9CC6] font-[600] text-[20px]'>{title}</p>
                <img src={require("../../assests/cancel.png")} alt="close-icon" className='object-contain size-[25px] cursor-pointer' onClick={onClose} />
            </div>
            <div className='flex flex-col gap-[10px]'>
                <FormLayout data={!isEdit && !isAdd ? stockFormField : !isEdit && isAdd ? stockEditFormField : stockEditFormField} />
            </div>
            <div className='flex justify-end items-end'>
                <button onClick={(e)=>handleSaveForm(e)} className="w-[30%] bg-[#1F9CC6] p-2 rounded-lg hover:bg-[#1F9CC6] transition text-lg" >{title}</button>
            </div>
        </div>
    </>
  )
}
