import React, { useState } from 'react';
import { IoIosSearch } from "react-icons/io";
import Action3 from '../assests/Action3.png';

const RegisteredOP_2 = () => {

  const [searchTerm, setSearchTerm] = useState('');

  const patients = [
    { id: 'SB202024001', Token: "01", name: 'Vijay', Phone_No: '+91 9075625436', BloodGroup: "A+", Gender: 'Male', Before_Status: "Yet to Consult", After_Status:"Active" },
    { id: 'SB202024002', Token: "02", name: 'Swasthya', Phone_No: '+91 9075625436', BloodGroup: "B+", Gender: 'Female', Before_Status: "Yet to Consult", After_Status:"Active" },
    { id: 'SB202024003', Token: "03", name: 'Rojgar', Phone_No: '+91 9075625436', BloodGroup: "O+", Gender: 'Male', Before_Status: "Yet to Consult", After_Status:"Active" },
    { id: 'SB202024004', Token: "04", name: 'Jivan', Phone_No: '+91 9075625436', BloodGroup: "AB+", Gender: 'Male', Before_Status: "Yet to Consult", After_Status:"Active" },
    { id: 'SB202024005', Token: "05", name: 'Sarvangin', Phone_No: '+91 9075625436', BloodGroup: "A+", Gender: 'Male', Before_Status: "Yet to Consult", After_Status:"Consulted" },
    { id: 'SB202024006', Token: "06", name: 'Vijay', Phone_No: '+91 9075625436', BloodGroup: "A+", Gender: 'Male', Before_Status: "Consulted", After_Status:"Active" },
    { id: 'SB202024007', Token: "07", name: 'Swasthya', Phone_No: '+91 9075625436', BloodGroup: "B+", Gender: 'Female', Before_Status: "Consulted", After_Status:"Active" },
    { id: 'SB202024008', Token: "08", name: 'Rojgar', Phone_No: '+91 9075625436', BloodGroup: "O+", Gender: 'Male', Before_Status: "Consulted", After_Status:"Consulted" },
    { id: 'SB202024009', Token: "09", name: 'Jivan', Phone_No: '+91 9075625436', BloodGroup: "AB+", Gender: 'Male', Before_Status: "Consulted", After_Status:"Consulted" },
    { id: 'SB202024010', Token: "10", name: 'Sarvangin', Phone_No: '+91 9075625436', BloodGroup: "A+", Gender: 'Male', Before_Status: "Consulted", After_Status:"Active" },
  ];

  const filteredPatients = patients.filter(patient =>
    patient.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    patient.id.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <section className="w-[1200px] p-1">
      <div className="flex items-center gap-8 justify-between">
        <div className="text-lg p-4 font-semibold text-cyan-600">
          Registered OP
        </div>
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

      <div className="flex text-stone-700 font-medium text-lg p-3 bg-cyan-100 mt-3">
        <p className="w-20">Token</p>
        <p className="w-32 ml-5">Patient ID</p>
        <p className="w-32">Patient Name</p>
        <p className="w-18  ml-5">Age</p>
        <p className="w-28 ml-9">Gender</p>
        <p className="w-40">Blood Group</p>
        <p className="w-40">Phone Number</p>
        <p className="w-32 ml-10">Status</p>
        <p className="w-24 text-center ml-3">Action</p>
      </div>



      {filteredPatients.map((patient, index) => (
        <div key={patient.id} className={`flex text-stone-600   ${index % 2 === 1 ? 'bg-cyan-50' : ''} p-2 mt-1`}>
          <p className='w-[90px] ml-3'>{patient.Token}</p>
          <p className='w-[150px]'>{patient.id}</p>
          <p className='w-[135px]'>{patient.name}</p>
          <p className='w-[80px]'>25</p>
          <p className='w-[120px]'>{patient.Gender}</p>
          <p className={`w-[130px] ${patient.BloodGroup === 'A+' ? 'text-green-500' : ''} ${patient.BloodGroup === 'O+' ? 'text-red-500' : ''}`}>{patient.BloodGroup}</p>
          <p className='w-[120px]'>{patient.Phone_No}</p>
          <p className='ml-20 bg-blue-100 text-blue-600 p-2 text-center rounded-lg w-[120px]'>{patient.After_Status}</p>
          <img src={Action3} alt="Action3" className="bg-purple-100 rounded-md w-[40px] h-[40px] ml-12 p-1" />
        </div>
      ))}
    </section>
  );
};

export default RegisteredOP_2;
