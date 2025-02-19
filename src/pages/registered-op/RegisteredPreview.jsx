import React, { useState } from "react";
import { FaArrowLeftLong } from "react-icons/fa6";
import PatientDetail from "../pharmacy/Prescription/PatientDetail";
import { Outlet, useNavigate } from "react-router-dom";
import { RxDoubleArrowLeft, RxDoubleArrowRight } from "react-icons/rx";
import { LabTesting } from "../../Component/registeredOP/LabTesting";
import { Prescription } from "../../Component/registeredOP/Prescription";
import { Diagnosis } from "../../Component/registeredOP/Diagnosis";
import { OtherReports } from "../../Component/registeredOP/OtherReports";
import { OtherSevices } from "../../Component/registeredOP/OtherSevices";
import PreviousChart from "../../Component/registeredOP/PreviousChart";

const RegisteredOpPreview = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("Diagnosis");

  const patientDetails = [
    { label: "Weight", value: "10Kg", subLabel: "(When born)" },
    { label: "Birth Time", value: "11:30 AM" },
    { label: "Birth Place", value: "Padma Hospital, Thiruvattar" },
  ];

  const tabs = [
    { name: "Diagnosis", path: "", element: <Diagnosis /> },
    { name: "Lab Testing", path: "lab-testing", element: <LabTesting /> },
    { name: "Prescription", path: "prescription", element: <Prescription /> },
    { name: "Other Reports", path: "other-reports", element: <OtherReports /> },
    { name: "Other Services", path: "other-services", element: <OtherSevices /> },
  ];

  const handleTabClick = (tab) => {
    setActiveTab(tab.name);
    navigate(tab.path);
  };

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

  return (
    <section className="p-5 font-poppins w-full max-w-6xl mx-auto">
      <p className="text-2xl text-stone-700 font-medium mb-4">Registered OP</p>
      <div className="flex items-center gap-6 text-center">
        <FaArrowLeftLong
          onClick={handleBackClick}
          className="text-2xl text-stone-600 cursor-pointer"
        />
        <p className="font-bold text-red-800 text-xl">Token Number:</p>
        <p className="font-bold text-red-800 text-xl">10</p>
        <div className="border border-primary px-3 rounded-2xl flex items-center gap-3 py-1">
          <div className="bg-primary w-6 h-6 rounded-full"></div>
          <p className="text-primary font-medium">IP</p>
        </div>
        <div className="border-primary border px-4 py-2 rounded-lg w-full max-w-sm">
          {patientDetails.map((detail, index) => (
            <div className="flex justify-between mb-2" key={index}>
              <div className="flex items-baseline">
                <p className="text-slate-700 font-medium text-lg">{detail.label}</p>
                {detail.subLabel && (
                  <p className="text-slate-700 text-sm ml-2">{detail.subLabel}</p>
                )}
              </div>
              <p className="text-primary font-medium">{detail.value}</p>
            </div>
          ))}
        </div>
        <div className="flex gap-8 ml-28 mt-20">
          <div
            className={`flex items-center text-primary text-xl font-medium cursor-pointer ${
              tabs.findIndex((tab) => tab.name === activeTab) === 0 && "opacity-50 pointer-events-none"
            }`}
            onClick={() => handleArrowClick("previous")}
          >
            <RxDoubleArrowLeft />
            <p>Previous</p>
          </div>
          <div
            className={`flex items-center text-primary text-xl font-medium cursor-pointer ${
              tabs.findIndex((tab) => tab.name === activeTab) === tabs.length - 1 && "opacity-50 pointer-events-none"
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
                  ? "bg-primary text-white"
                  : "hover:bg-primary hover:text-white"
              }`}
            >
              {tab.name}
            </p>
          ))}
        </div>
        <div className="flex gap-6">
          <button className="text-white bg-primary px-6 py-2 rounded-full hover:bg-primary-dark">
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
