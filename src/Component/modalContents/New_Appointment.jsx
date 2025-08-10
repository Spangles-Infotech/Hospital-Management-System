import React, { Fragment, useState } from "react";
import { IoIosSearch } from "react-icons/io";
import { FormLayout } from "../common/FormLayout";
import { useFetchData } from "../../hooks/useFetchData";
import { useForm } from "../../context/FormContext";
import { usePostData } from "../../hooks/usePostData";
import { useModal } from "../../context/ModalContext";

const New_Appointment = ({refetch}) => {

  const {closeModal} = useModal()
  const [search, setSearch] = useState("")
  const {setFormData, formData, handleReset} = useForm()
  const {postData} = usePostData("/register-appointment")
  const [selectedPatient, setSelectedPatient] = useState({})
  const {data:patientData} = useFetchData( "/get-patient-info", `search=${search}`)
  const {data:doctorName} = useFetchData("/get-all-doctor?isName=true")
   
  const handleSetSearch = (e)=>{
    if(selectedPatient){
        setSelectedPatient({})
    }
    setSearch(e)
  }

  const handleClickPatient = (patient)=>{
    setFormData((prev)=>({...prev, patientId:patient._id}))
    setSelectedPatient(patient)
    setSearch("")
  }

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
            type:"text",
            readOnly:true
        },
    ],
    [
        {
            label:"Appointment Date",
            name:"appointmentDate",
            type:"date",
            readOnly: true,


            // readOnly:true
        },
        {
            label:"Payment Method",
            name:"paymentMethod",
            type:"select",
            options:["Cash", "UPI", "Credit/Debit Cards"]
        }
    ]
  ]

  const handleDiscard = ()=>{
    handleReset()
    closeModal()
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

  return (
    <div className="flex items-center justify-center overflow-hidden w-[700px]">
      <div className="w-full h-full  bg-white flex flex-col gap-[20px]">
        <div className="flex items-center justify-between">
          <p className="text-stone-700 text-lg font-medium">New Appointmentss</p>
        </div>
        <div className="flex flex-col gap-[20px]">
          <div className="flex items-center gap-5 justify-between p-4">
            <div className="flex-grow outline outline-1 outline-[#1F9CC6] rounded-xl text-gray-500 flex items-center bg-cyan-50 ">
              <input
                type="text"
                value={search}
                onChange={(e)=>handleSetSearch(e.target.value)}
                placeholder="Enter Patient Phone no or Patient ID..."
                className="w-full bg-transparent outline-none text-gray-600 placeholder-gray-400 p-2"
              />
              <div className="bg-[#1F9CC6] w-[12%] h-[40px] rounded-tr-lg rounded-br-lg flex items-center justify-center">
                <IoIosSearch className="text-2xl text-white" />
              </div>
            </div>
            {/* <button className="w-[20%] bg-[#1F9CC6] p-2 text-white rounded-lg hover:bg-[#1F9CC6] transition text-lg">
              + New Patient
            </button> */}
          </div>
          <div className={`flex flex-col gap-[10px] ${ !patientData.length > 0 ? "hidden" : ""}`}>
                {
                  Object.entries(selectedPatient).length > 0 &&
                    <>
                      <div className={`flex justify-between items-center cursor-pointer`}>
                        <div className="text-slate-700 text-lg font-medium flex gap-2">
                          Patient ID:
                          <p className="text-green-500">{selectedPatient?.patientId}</p>
                        </div>
                        <div className="text-slate-700 text-lg font-medium flex gap-2">
                          {selectedPatient?.patientName?.title}
                          <p className="text-[#1F9CC6]">{selectedPatient?.patientName?.name}</p>
                        </div>
                        <div className="text-slate-700 text-lg font-medium flex gap-2">
                          Phone Number:
                          <p className="text-[#1F9CC6]">{selectedPatient?.mobileNumber?.code} {selectedPatient?.mobileNumber?.number}</p>
                        </div>
                      </div>
                      <div className="w-full h-[1px] bg-stone-300 "></div>
                    </>
                }
                {
                  Object.entries(selectedPatient).length === 0 && patientData?.map((item,index)=>(
                    <Fragment key={index}>
                      <div className={`flex justify-between items-center cursor-pointer`} onClick={()=>handleClickPatient(item)}>
                        <div className="text-slate-700 text-lg font-medium flex gap-2">
                          Patient ID:
                          <p className="text-green-500">{item.patientId}</p>
                        </div>
                        <div className="text-slate-700 text-lg font-medium flex gap-2">
                          {item?.patientName?.title}
                          <p className="text-[#1F9CC6]">{item.patientName.name}</p>
                        </div>
                        <div className="text-slate-700 text-lg font-medium flex gap-2">
                          Phone Number:
                          <p className="text-[#1F9CC6]">{item?.mobileNumber.code} {item.mobileNumber.number}</p>
                        </div>
                      </div>
                      <div className="w-full h-[1px] bg-stone-300 "></div>
                    </Fragment>
                  ))
                }
          </div>
           <FormLayout data={appointmentFormFields} />
          <div className="flex mt-7 gap-7 items-center justify-end">
            <p className="text-red-600 cursor-pointer text-lg" onClick={handleDiscard}>
              Discard
            </p>
            <button
              type="submit"
              onClick={handleSubmitForm}
              className="w-[15%] bg-[#1F9CC6] p-2 text-white rounded-lg hover:bg-[#1F9CC6] transition text-lg"
            >
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default New_Appointment;


