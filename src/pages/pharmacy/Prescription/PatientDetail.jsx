import React from 'react';
import PatientDetailIcon from "../../../assests/PatientDetailIcon.png";
import Vitals from "../../../assests/Vitals.png";

const InfoRow = ({ label, value, valueClass = "" }) => (
  <div className="flex  font-medium  py-2">
    <p className="text-slate-800 w-[140px]">{label}</p>
    <p className={`${valueClass}`}>{value}</p>
  </div>
);

const PatientDetail = () => {
  const patientDetails = [
    { label: "Patient Name", value: "Mathews", valueClass: "text-primary" },
    { label: "Age", value: "10", valueClass: "text-primary" },
    { label: "Gender", value: "Male", valueClass: "text-primary" },
    { label: "Blood Group", value: "O +ive", valueClass: "text-green-600" },
  ];

  const additionalInfo = [
    { label: "Address", value: "10 Main st, Las Vegas, Nagercoil", valueClass: "text-primary" },
    { label: "Phone Number", value: "+91 80698735376", valueClass: "text-primary" },
  ];

  const vitals = [
    { label: "Temperature", value: "101.0°F", valueClass: "text-red-600 bg-red-100 rounded-md px-1 " },
    { label: "Weight", value: "60 Kgs", valueClass: "text-primary" },
    { label: "Height", value: "181 cms", valueClass: "text-primary" },
    { label: "Pulse Rate", value: "60/min", valueClass: "text-primary" },
    { label: "Blood Pressure", value: "90/60mmHg", valueClass: "text-primary" },
    { label: "Symptom", value: "Fever", valueClass: "text-red-600 bg-red-100 rounded-md px-1" },
  ];

  return (
    <div className="border-primary border-2 rounded-[15px] mt-10 bg-white font-poppins w-full mx-auto">
      <div className="flex justify-between items-center p-4 h-[80px]">
        <div className="flex gap-16 w-full">
          <div className="flex gap-3 items-center w-[30%]">
            <img className="w-8 h-8" src={PatientDetailIcon} alt="Patient Details" />
            <p className="text-slate-800 font-medium text-xl">Patient Detail</p>
          </div>

          <div className="flex items-center gap-3 w-[40%]">
            <p className="text-slate-800 font-medium text-xl">Patient ID:</p>
            <p className="text-green-500 font-medium text-xl">D0B003234</p>
          </div>

          <div className="flex gap-3 items-center">
            <img className="w-8 h-8 ml-4" src={Vitals} alt="Vitals" />
            <p className="text-slate-800 font-medium text-xl">Vitals</p>
          </div>
        </div>
        <div className="text-green-500 font-medium text-lg">Today</div>
      </div>
      <div className="w-full h-[1px] bg-cyan-200"></div>
      <div className="flex flex-cols-4 gap-5 p-4">
        <div>
          {patientDetails.map((detail, index) => (
            <InfoRow key={index} label={detail.label} value={detail.value} valueClass={detail.valueClass} />
          ))}
        </div>

        <div>
          {additionalInfo.map((info, index) => (
            <InfoRow key={index} label={info.label} value={info.value} valueClass={info.valueClass} />
          ))}
        </div>

        <div>
          {vitals.slice(0, 3).map((vital, index) => (
            <InfoRow key={index} label={vital.label} value={vital.value} valueClass={vital.valueClass} />
          ))}
        </div>

        <div>
          {vitals.slice(3).map((vital, index) => (
            <InfoRow key={index} label={vital.label} value={vital.value} valueClass={vital.valueClass} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PatientDetail;
