import React, { useEffect } from "react";
import { FaArrowLeftLong } from "react-icons/fa6";
import PatientDetail from "../pharmacy/Prescription/PatientDetail";
import { Outlet, useParams } from "react-router-dom";
import { RxDoubleArrowLeft, RxDoubleArrowRight } from "react-icons/rx";
import { useRegisteredOp } from "../../hooks/useRegisteredOp";
import { useForm } from "../../context/FormContext";
import { PatientTypeToggle } from "../../Component/common/PatientTypeToggle";

const RegisteredOpPreview = () => {

  const {id} = useParams()
  const {formData, handleChange} = useForm()
  const {tabs, activeTab, handleBackClick, handleArrowClick, handleTabClick, getMedicalData, handleSaveReports} = useRegisteredOp()
  const patientDetails = [
    { label: "Weight", value: "10Kg", subLabel: "(When born)" },
    { label: "Birth Time", value: "11:30 AM" },
    { label: "Birth Place", value: "Padma Hospital, Thiruvattar" },
  ];

  useEffect(()=>{
    if(id){
      getMedicalData(id)
    }
  },[id])

  return (
    <section className="font-poppins w-full p-10">
      <p className="text-2xl text-stone-700 font-medium mb-4">Registered OP</p>
      <div className="flex items-center justify-between text-center">
        <div className="flex gap-[25px] items-center">
          <FaArrowLeftLong
            onClick={handleBackClick}
            className="text-2xl text-stone-600 cursor-pointer"
          />
         <div className="flex gap-[20px] items-center">
          <p className="font-bold text-red-800 text-xl">
            Token Number: {formData?.tokenNumber || "1"}
          </p>
          <PatientTypeToggle />
        </div>
        </div>
        {/* <div className="border-[#1F9CC6] border px-4 py-2 rounded-lg w-full max-w-sm">
          {patientDetails.map((detail, index) => (
            <div className="flex justify-between mb-2" key={index}>
              <div className="flex items-baseline">
                <p className="text-slate-700 font-medium text-lg">
                  {detail.label}
                </p>
                {detail.subLabel && (
                  <p className="text-slate-700 text-sm ml-2">
                    {detail.subLabel}
                  </p>
                )}
              </div>
              <p className="text-[#1F9CC6] font-medium">{detail.value}</p>
            </div>
          ))}
        </div> */}
        <div className="flex gap-8 ml-28 mt-20">
          <div
            className={`flex items-center text-[#1F9CC6] text-xl font-medium cursor-pointer ${
              tabs.findIndex((tab) => tab.name === activeTab) === 0 &&
              "opacity-50 pointer-events-none"
            }`}
            onClick={() => handleArrowClick("previous")}
          >
            <RxDoubleArrowLeft />
            <p>Previous</p>
          </div>
          <div
            className={`flex items-center text-[#1F9CC6] text-xl font-medium cursor-pointer ${
              tabs.findIndex((tab) => tab.name === activeTab) ===
                tabs.length - 1 && "opacity-50 pointer-events-none"
            }`}
            onClick={() => handleArrowClick("next")}
          >
            <p>Next</p>
            <RxDoubleArrowRight />
          </div>
        </div>
      </div>
      <PatientDetail />
      <div className="flex justify-between py-5 items-center text-lg font-roboto text-stone-400">
        <div className="flex gap-4">
          {tabs.map((tab) => (
            <p
              key={tab.name}
              onClick={() => handleTabClick(tab)}
              className={`cursor-pointer px-5 py-2 rounded-full ${
                activeTab === tab.name
                  ? "bg-[#1F9CC6] text-white"
                  : "hover:bg-[#1F9CC6] hover:text-white"
              }`}
            >
              {tab.name}
            </p>
          ))}
        </div>
        <div className="flex gap-6">
          <button onClick={handleSaveReports} className="text-white bg-[#1F9CC6] px-6 py-2 rounded-full hover:bg-[#1F9CC6]-dark">
            Save
          </button>
          <button className="text-red-500 border border-red-400 px-6 py-2 rounded-full hover:bg-red-100">
            Cancel
          </button>
        </div>
      </div>
      <Outlet />
    </section>
  );
};

export default RegisteredOpPreview;
