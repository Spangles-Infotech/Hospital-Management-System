import React from 'react';
import PatientDetailIcon from '../../assests/PatientDetailIcon.png';
import barcodeIcon from '../../assests/Barcode.png';
import Print from '../../assests/Print.png';

const PreviewModal = () => {
  
  const patientInfo = [
    { label: 'Patient Name', value: 'Mathews', textColor: 'text-primary' },
    { label: 'Age', value: '10', textColor: 'text-primary' },
    { label: 'Gender', value: 'Male', textColor: 'text-primary' },
    { label: 'Blood Group', value: 'O +ive', textColor: 'text-green-500' },
  ];

  const PatientcontactInfo = [
    { label: 'Address', value: '10 Main st, Las Vegas, Nagercoil', textColor: 'text-primary', isWide: true },
    { label: 'Phone Number', value: '+91 9087654321', textColor: 'text-primary' },
    { label: 'Baby of', value: 'Sunitha', textColor: 'text-primary' },
  ];

  const additionalInfo = [
    { label: 'Birth Place', value: 'Padma Hospital, Thiruvatta', textColor: 'text-primary' },
    { label: 'Birth Time', value: '10:30 AM', textColor: 'text-primary' },
    { label: 'Weight', value: '10kg', textColor: 'text-primary', note: '(When born)', noteColor: 'text-slate-700 text-sm' },
  ];

  return (
    <div className="outline outline-primary w-[55%] mx-auto bg-white rounded-lg ">
    
      <div className="flex items-center justify-between p-6  border-primary">
        <div className="flex items-center gap-3">
          <img src={PatientDetailIcon} alt="Patient Detail" className="w-8 h-8" />
          <p className="text-slate-700 text-xl font-medium">Patient Details</p>
        </div>
        <div className="flex items-center gap-3">
          <p className="text-slate-700 text-lg font-medium">Patient ID:</p>
          <p className="text-green-500 text-lg font-medium">DOB003234</p>
        </div>
      </div>

     
      <div className="w-full h-[1px] bg-primary"></div>

      
      <div className="flex justify-between p-4">
        <div>
          {patientInfo.map((info, index) => (
            <div key={index} className="flex items-center gap-3 py-2">
              <p className="text-slate-700 font-medium text-lg w-[150px]">{info.label}</p>
              <p className={`${info.textColor} text-lg font-medium`}>{info.value}</p>
            </div>
          ))}
        </div>

        <div>
          {PatientcontactInfo.map((info, index) => (
            <div key={index} className={`flex items-center gap-3 py-2 ${info.isWide ? 'gap-6' : ''}`}>
              <p className="text-slate-700 font-medium text-lg w-[130px]">{info.label}</p>
              <p className={`${info.textColor} text-lg font-medium ${info.isWide ? 'w-[200px]' : ''}`}>{info.value}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-center -mt-7">
        <img src={barcodeIcon} alt="Barcode" className="w-[350px]" />
      </div>

    
      <div className="flex justify-center ">
        <button className="flex items-center gap-2 px-4 py-2 border border-primary text-primary rounded-lg hover:bg-primary hover:text-white transition">
          <img src={Print} alt="Print" className="w-6 h-6" />
          <p className="font-medium">Print</p>
        </button>
      </div>

    
      <div className="w-full h-[1px] bg-primary mt-4"></div>

     
      <div className="p-6">
        <p className="text-slate-700 font-medium text-xl mb-4">Additional Info</p>
        {additionalInfo.map((info, index) => (
          <div key={index} className="flex items-center gap-3 py-2">
            <p className="text-slate-700 font-medium text-lg w-[150px]">{info.label}</p>
            {info.note && <p className={`${info.noteColor}`}>{info.note}</p>}
            <p className={`${info.textColor} text-lg font-medium`}>{info.value}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PreviewModal;
