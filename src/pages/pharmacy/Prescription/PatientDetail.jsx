import React from 'react';
import PatientDetailIcon from "../../../assests/PatientDetailIcon.png";
import Vitals from "../../../assests/Vitals.png";
import { useForm } from '../../../context/FormContext';
import { getDateFromISO } from '../../../utils/functions/function';

const InfoRow = ({ label, value, valueClass = "", formData, isDate=false}) => (
  
  <div className="flex  font-medium  py-2">
    <p className="text-slate-800 w-[140px]">{label}</p>
    <p className={`${valueClass}`}>{ isDate ? getDateFromISO(formData?.[value]) : formData?.[value] || "-"}</p>
  </div>
);

const PatientDetail = ({isRoom}) => {

  const {formData} = useForm();
  const patientDetails = [
    { label: "Patient Name", value: "patientName", valueClass: "text-[#1F9CC6]" },
    { label: "Age", value: "age", valueClass: "text-[#1F9CC6]" },
    { label: "Gender", value: "gender", valueClass: "text-[#1F9CC6]" },
    { label: "Blood Group", value: "bloodGroup", valueClass: "text-green-600" },
  ];

  const additionalInfo = [
    { label: "Address", value: "address", valueClass: "text-[#1F9CC6]" },
    { label: "Phone Number", value: "phoneNumber", valueClass: "text-[#1F9CC6]" },
  ];

  const vitals = [
    { label: "Temperature", value: "temperature", valueClass: "text-red-600 bg-red-100 rounded-md px-1 " },
    { label: "Weight", value: "weight", valueClass: "text-[#1F9CC6]" },
    { label: "Height", value: "height", valueClass: "text-[#1F9CC6]" },
    { label: "Pulse Rate", value: "pulse", valueClass: "text-[#1F9CC6]" },
    { label: "Blood Pressure", value: "bloodPressure", valueClass: "text-[#1F9CC6]" },
    { label: "Symptom", value: "symptoms", valueClass: "text-red-600 bg-red-100 rounded-md px-1" },
  ];

  const rooms1 = [
    { label: "Section", value: "section", valueClass: "text-[#1F9CC6]" },
    { label: "Room no.", value: "roomNumber", valueClass: "text-[#1F9CC6]" },
    { label: "No. of Days", value: "noOfDays", valueClass: "text-[#1F9CC6]" },
  ]
  const rooms2 = [
    { label: "From Date", value: "from", valueClass: "text-[#1F9CC6]", isDate:true },
    { label: "To Date", value: "to", valueClass: "text-[#1F9CC6]", isDate:true },
  ]

  return (
    <div className="border-[#1F9CC6] border-2 rounded-[15px] mt-10 bg-white font-poppins w-full mx-auto">
      <div className="flex justify-between items-center p-4 h-[80px]">
        <div className="flex gap-16 w-full">
          <div className="flex gap-3 items-center w-[30%]">
            <img className="w-8 h-8" src={PatientDetailIcon} alt="Patient Details" />
            <p className="text-slate-800 font-medium text-xl">Patient Detail</p>
          </div>
          <div className="flex items-center gap-3 w-[40%]">
            <p className="text-slate-800 font-medium text-xl">Patient ID:</p>
            <p className="text-green-500 font-medium text-xl">{formData?.patientId}</p>
          </div>
          <div className="flex gap-3 items-center">
            <img className="w-8 h-8 ml-4" src={Vitals} alt="Vitals" />
            <p className="text-slate-800 font-medium text-xl">Vitals</p>
          </div>
          <div className={`flex items-center gap-3 w-[40%] ${!isRoom ? "hidden" : ""}`}>
            <p className="text-slate-800 font-medium text-xl">Bill Number:</p>
            <p className="text-green-500 font-medium text-xl">{formData?.billNumber}</p>
          </div>
        </div>
        <div className="text-green-500 font-medium text-lg">Today</div>
      </div>
      <div className="w-full h-[1px] bg-cyan-200"></div>
      <div className="flex justify-between gap-5 p-4 px-[30px]">
        <div>
          {patientDetails.map((detail, index) => (
            <InfoRow key={index} label={detail.label} value={detail.value} valueClass={detail.valueClass} formData={formData}/>
          ))}
        </div>
        <div>
          {additionalInfo.map((info, index) => (
            <InfoRow key={index} label={info.label} value={info.value} valueClass={info.valueClass} formData={formData}/>
          ))}
        </div>
        {
          !isRoom && 
          <>
            <div>
              {vitals.slice(0, 3).map((vital, index) => (
                <InfoRow key={index} label={vital.label} value={vital.value} valueClass={vital.valueClass} formData={formData}/>
              ))}
            </div>
            <div>
              {vitals.slice(3).map((vital, index) => (
                <InfoRow key={index} label={vital.label} value={vital.value} valueClass={vital.valueClass} formData={formData}/>
              ))}
            </div>
          </>
        }
        {
          isRoom &&
          <>
            <div>
              {rooms1.slice(0, 3).map((vital, index) => (
                <InfoRow key={index} label={vital.label} value={vital.value} valueClass={vital.valueClass} formData={formData}/>
              ))}
            </div>
            <div>
              {rooms2.slice(0,2).map((vital, index) => (
                <InfoRow key={index} label={vital.label} value={vital.value} valueClass={vital.valueClass} formData={formData} isDate={vital.isDate}/>
              ))}
            </div>
          </>
        }
      </div>
    </div>
  );
};

export default PatientDetail;
