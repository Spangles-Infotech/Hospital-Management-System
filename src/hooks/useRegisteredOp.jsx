import { useEffect, useState } from 'react'
import { useFetchData } from './useFetchData'
import { useForm } from '../context/FormContext'
import { usePostData } from './usePostData'
import { useModal } from '../context/ModalContext'
import { Diagnosis } from '../Component/registeredOP/Diagnosis'
import { LabTesting } from '../Component/registeredOP/LabTesting'
import { Prescription } from '../Component/registeredOP/Prescription'
import { OtherReports } from '../Component/registeredOP/OtherReports'
import { OtherSevices } from '../Component/registeredOP/OtherSevices'
import { useNavigate } from 'react-router-dom'
import { fetch } from '../api/fetch'

export const useRegisteredOp = () => {

    const navigate = useNavigate()
    const {closeModal} = useModal()
    const [search, setSearch] = useState("")
    const [activeTab, setActiveTab] = useState("Diagnosis");
    const {postData} = usePostData("/register-appointment")
    const [selectedPatient, setSelectedPatient] = useState({})
    const {data:doctorName} = useFetchData("/get-all-doctor?isName=true")
    const { formData, setFormData, handleReset, handleChange } = useForm()
    const {postData:medicialReportPost} = usePostData("/add-medical-reports")
    const {data:patientData} = useFetchData( "/get-patient-info", `search=${search}`)
    const {data, fetchData:refetch, isLoading} = useFetchData("/get-all-registered-appointments")
    const {data:doctorFee} = useFetchData(formData?.doctorName ? `/get-doctor-fee/${formData?.doctorName}` : null)

    const getMedicalData = async(id)=>{
        try {
            const response = await fetch.get(`/get-registered-appointment/${id}`)
            setFormData((prev)=>({...prev, ...response.data.data}))
        } catch (error) {
            console.log("error", error.response.data.message)
        }
    }

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

    const handleSaveReports = async()=>{
        const response = await medicialReportPost(formData);
        if (response === 200){
            navigate("/admin/registered-op-doctor")
            handleReset()
        }
    }

    const handleTabClick = (tab) => {
        setActiveTab(tab.name);
        navigate(tab.path);
    }

    const handleBackClick = () => {
        navigate("/admin/registered-op-doctor");
      };

    const handleArrowClick = (direction) => {
        const currentIndex = tabs.findIndex((tab) => tab.name === activeTab);
        if (direction === "next" && currentIndex < tabs.length - 1) {
            const nextTab = tabs[currentIndex + 1];
            setActiveTab(nextTab.name);
            navigate(nextTab.path);
        } else if (direction === "previous" && currentIndex > 0) {
            const previousTab = tabs[currentIndex - 1];
            setActiveTab(previousTab.name);
            navigate(previousTab.path);
        }
    };

    const tabs = [
        { name: "Diagnosis", path: "", element: <Diagnosis /> },
        { name: "Lab Testing", path: "lab-testing", element: <LabTesting /> },
        { name: "Prescription", path: "prescription", element: <Prescription /> },
        { name: "Other Reports", path: "other-reports", element: <OtherReports /> },
        {
          name: "Other Services",
          path: "other-services",
          element: <OtherSevices />,
        },
      ];


  return {
        appointmentFormFields,
        handleClickPatient,
        handleSaveReports,
        handleArrowClick,
        handleSubmitForm,
        handleSetSearch,
        handleBackClick,
        selectedPatient,
        getMedicalData,
        handleTabClick,
        handleDiscard,
        handleChange,
        patientData,
        setSearch,
        isLoading,
        activeTab,
        refetch,
        search,
        data,
        tabs
    }
}
