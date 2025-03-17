import { useEffect, useState } from 'react'
import { useFetchData } from './useFetchData'
import { useForm } from '../context/FormContext'
import { usePostData } from './usePostData'
import { useModal } from '../context/ModalContext'

export const useRegisteredOp = () => {

    const {closeModal} = useModal()
    const [search, setSearch] = useState("")
    const [selectedPatient, setSelectedPatient] = useState({})
    const {postData} = usePostData("/register-appointment")
    const { formData, setFormData, handleReset } = useForm()
    const {data:doctorName} = useFetchData("/get-all-doctor?isName=true")
    const {data, fetchData:refetch, isLoading} = useFetchData("/get-all-registered-appointments")
    const {data:patientData, fetchData} = useFetchData( "/get-patient-info", `search=${search}`)
    const {data:doctorFee} = useFetchData(formData?.doctorName ? `/get-doctor-fee/${formData?.doctorName}` : null)

    useEffect(()=>{
        setFormData((prev)=>({...prev, doctorFee:doctorFee[0]}))
    },[doctorFee])

    const appointmentFormFields = [
        [
            {
                label:"Doctor",
                name:"doctorName",
                type:"select",
                options:doctorName
            },
            {
                label:"Doctor Fee",
                name:"doctorFee",
                type:"number"
            },
        ],
        [
            {
                label:"Appointment Date",
                name:"appointmentDate",
                type:"date"
            },
            {
                label:"Payment Method",
                name:"paymentMethod",
                type:"select",
                options:["Cash", "UPI", "Credit/Debit Cards"]
            }
        ]
    ]

    const handleClickPatient = (patient)=>{
        setFormData((prev)=>({...prev, patientId:patient._id}))
        setSelectedPatient(patient)
        setSearch("")
    }

    const handleSetSearch = (e)=>{
        if(selectedPatient){
            setSelectedPatient({})
        }
        setSearch(e)
    }

    const handleSubmitForm = async()=>{
        if(!formData) return;
        const respone = await postData(formData)
        console.log("response", respone)
        if(respone === 201){
            closeModal()
            handleReset()
            refetch()
        }
    }

    const handleDiscard = ()=>{
        handleReset()
        closeModal()
    }

  return {
        appointmentFormFields,
        handleClickPatient,
        handleSubmitForm,
        handleSetSearch,
        selectedPatient,
        handleDiscard,
        patientData,
        setSearch,
        isLoading,
        refetch,
        search,
        data
    }
}
