import React, { useState } from 'react';
import { IoIosSearch } from "react-icons/io";
import Action3 from '../assests/Action3.png';

const RegisteredOP_2 = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const patients = [

    { id: 'SB202024001', Token: "01", name: 'Vijay', Phone_No: '+91 9075625436', BloodGroup: "B +ive", Gender: 'Male', Before_Status: "Yet to Consult", After_Status: "Active", Age: 25 },
    { id: 'SB202024002', Token: "02", name: 'Swasthya', Phone_No: '+91 9075625436', BloodGroup: "AB +ive", Gender: 'Female', Before_Status: "Yet to Consult", After_Status: "Active", Age: 10 },
    { id: 'SB202024003', Token: "03", name: 'Rojgar', Phone_No: '+91 9075625436', BloodGroup: "O +ive", Gender: 'Male', Before_Status: "Yet to Consult", After_Status: "Active", Age: 35 },
    { id: 'SB202024004', Token: "04", name: 'Jivan', Phone_No: '+91 9075625436', BloodGroup: "O -ive", Gender: 'Male', Before_Status: "Yet to Consult", After_Status: "Active", Age: 45 },
    { id: 'SB202024005', Token: "05", name: 'Sarvangin', Phone_No: '+91 9075625436', BloodGroup: "B -ive", Gender: 'Male', Before_Status: "Yet to Consult", After_Status: "Consulted", Age: 21 },
    { id: 'SB202024006', Token: "06", name: 'Vijay', Phone_No: '+91 9075625436', BloodGroup: "A +ive", Gender: 'Male', Before_Status: "Consulted", After_Status: "Active", Age: 30 },
    { id: 'SB202024007', Token: "07", name: 'Swasthya', Phone_No: '+91 9075625436', BloodGroup: "B +ive", Gender: 'Female', Before_Status: "Consulted", After_Status: "Active", Age: 40 },
    { id: 'SB202024008', Token: "08", name: 'Rojgar', Phone_No: '+91 9075625436', BloodGroup: "A +ive", Gender: 'Male', Before_Status: "Consulted", After_Status: "Consulted", Age: 50 },
    { id: 'SB202024009', Token: "09", name: 'Jivan', Phone_No: '+91 9075625436', BloodGroup: "AB -ive", Gender: 'Male', Before_Status: "Consulted", After_Status: "Consulted", Age: 60 },
    { id: 'SB202024010', Token: "10", name: 'Sarvangin', Phone_No: '+91 9075625436', BloodGroup: "A +ive", Gender: 'Male', Before_Status: "Consulted", After_Status: "Active", Age: 26 },
    
  ];

  const filteredPatients = patients.filter(
    (patient) =>
      patient.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      patient.id.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <section className="w-[1200px] p-1">
      
      <div className="flex items-center gap-8 justify-between">
        <div className="text-lg p-4 font-semibold text-cyan-600">Registered OP</div>
        <div className="flex items-center gap-4 p-2.5 outline outline-1 rounded-lg text-gray-400 w-80">
          <IoIosSearch className="text-stone-700 text-2xl" />
          <input
            type="text"
            placeholder="Search by Name or ID..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full outline-none text-stone-700 placeholder-stone-700"
          />
        </div>
      </div>

    
      <div className="flex text-stone-700 font-medium text-lg p-3 bg-HeadlineBlue mt-3">
        <p className="w-[8%]">Token</p>
        <p className="w-[11%]">Patient ID</p>
        <p className="w-[14%]">Patient Name</p>
        <p className="w-[7%]">Age</p>
        <p className="w-[10%]">Gender</p>
        <p className="w-[14%]">Blood Group</p>
        <p className="w-[17%]">Phone Number</p>
        <p className="w-[13%]">Status</p>
        <p className="w-[5%]">Action</p>
      </div>

      
      {filteredPatients.map((patient, index) => (
        <div
          key={patient.id}
          className={`flex text-stone-600 p-3  place-items-center ${index % 2 === 1 ? 'bg-customBlue' : ''}  `}
        >
          <p className="w-[7%] ml-3 ">{patient.Token}</p>
          <p className="w-[12%]">{patient.id}</p>
          <p className="w-[13%]">{patient.name}</p>
          <p className="w-[8%]">{patient.Age}</p>
          <p className="w-[10%]">{patient.Gender}</p>
          <p className={`w-[130px] ${patient.BloodGroup === 'O +ive' ? 'text-green-500' : ''} ${patient.BloodGroup === 'AB +ive' ? 'text-red-500' : ''}  ${patient.BloodGroup === 'O -ive' ? 'text-green-500' : ''} ${patient.BloodGroup === 'B +ive' ? 'text-orange-500' : ''} 
          ${patient.BloodGroup === 'A +ive' ? 'text-green-500' : ''} ${patient.BloodGroup === 'AB -ive' ? 'text-red-500' : ''} ${patient.BloodGroup === 'B -ive' ? 'text-red-500' : ''}`}>{patient.BloodGroup}</p>
          <p className="w-[17%]">{patient.Phone_No}</p>
          <p className='w-[11%]' >
            {patient.After_Status === "Active" ? (
              <span className="text-blue-600 bg-blue-100 px-10 py-2 rounded-lg">Active</span>
            ) : (
              <span className="text-green-600 bg-green-100 px-7 py-2  rounded-lg">Consulted</span>
            )}
          </p>
          <img
            src={Action3}
            alt="Action 3"
            className="bg-purple-100 rounded-md w-[40px] h-[40px] ml-12 p-1"
          />
        </div>
      ))}
    </section>
  );
};

export default RegisteredOP_2;
// bg-blue-100 text-blue-600






