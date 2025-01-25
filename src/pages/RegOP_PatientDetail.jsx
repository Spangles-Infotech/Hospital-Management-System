import React from 'react';
import { FaArrowLeftLong } from "react-icons/fa6";
import PatientDetail from './pharmacy/Prescription/PatientDetail';


const RegOP_PatientDetail = () => {
  const patientDetails = [
    { label: "Weight", value: "10Kg", subLabel: "(When born)" },
    { label: "Birth Time", value: "11:30 AM" },
    { label: "Birth Place", value: "Padma Hospital, Thiruvattar" },
  ];

  return (
    <section className="p-7">
      <p className="text-2xl text-stone-700 font-medium">Registered OP</p>

      <div className="flex mt-16 gap-6 text-center items-center">
    
        <FaArrowLeftLong className="text-2xl text-stone-600" />

       
        <p className="font-bold text-red-800 text-xl">Token Number:</p>
        <p className="font-bold text-red-800 text-xl">10</p>

       
        <div className="border border-primary px-3 rounded-2xl flex items-center gap-3 py-1">
          <div className="bg-primary w-6 h-6 rounded-full"></div>
          <p className="text-primary font-medium">IP</p>
        </div>

       
        <div className="border-primary border px-3 py-1 rounded-lg -mt-24">
          {patientDetails.map((detail, index) => (
            <div className="flex  mb-3" key={index}>
              <div className='flex  place-items-baseline w-[150px]'>
                <p className="text-slate-700 font-medium text-lg ">{detail.label}</p>
                {detail.subLabel && (
                  <p className="text-slate-700 text-sm">{detail.subLabel}</p>
                )}
              </div>
              <p className="text-primary font-medium">{detail.value}</p>
            </div>
          ))}
        </div>
      </div>
      <PatientDetail/>
      <div className='flex text-stone-400 justify-between py-5 items-center text-lg'>
<p>Diagnosis</p>
<p>Lab Testing</p>
<p>Prescription</p>
<p>Other Reports</p>
<p>Other Services</p>
<div className='flex gap-10'>
<p className='text-white bg-primary px-7 py-2 rounded-full'>Save</p>
<p className='text-red-500 border border-stone-400  px-7 py-2 rounded-full'>cancel</p>
</div>


      </div>
    
    </section>
  );
};

export default RegOP_PatientDetail;
