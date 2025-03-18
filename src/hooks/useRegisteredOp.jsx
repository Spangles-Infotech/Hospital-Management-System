import { useEffect, useState } from 'react'
import { useFetchData } from './useFetchData'
import { useForm } from '../context/FormContext'
import { usePostData } from './usePostData'
import { Diagnosis } from '../Component/registeredOP/Diagnosis'
import { LabTesting } from '../Component/registeredOP/LabTesting'
import { Prescription } from '../Component/registeredOP/Prescription'
import { OtherReports } from '../Component/registeredOP/OtherReports'
import { OtherSevices } from '../Component/registeredOP/OtherSevices'
import { useNavigate } from 'react-router-dom'
import { fetch } from '../api/fetch'

export const useRegisteredOp = () => {

    const navigate = useNavigate()
    const [activeTab, setActiveTab] = useState("Diagnosis");
    const { formData, setFormData, handleReset, handleChange } = useForm()
    const {postData:medicialReportPost} = usePostData("/add-medical-reports")
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

    const handleSaveReports = async()=>{
        console.log("clicking")
        const response = await medicialReportPost(formData);
        console.log("response",response)
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
        handleSaveReports,
        handleArrowClick,
        handleBackClick,
        getMedicalData,
        handleTabClick,
        handleChange,
        isLoading,
        activeTab,
        refetch,
        data,
        tabs
    }
}
