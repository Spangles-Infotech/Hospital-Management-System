import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Action1 from '../assests/Action1.png';
import Action2 from '../assests/Action2.png';
import Consulted from '../assests/Consulted.png';

const RegisteredOP_1 = () => {
  
  const [patients, setPatients] = useState([]);


  useEffect(() => {
    const fetchPatients = async () => {
      try {
        const response = await axios.get("http://localhost:3500/patients");
        setPatients(response.data); 
      } catch (error) {
        console.error("Error fetching patient data:", error);
      }
    };
    
    fetchPatients();
  }, []);

  return (
    <section className="w-full p-1">
      <div className="flex text-stone-700 font-medium text-lg p-3 ">
        <p className="w-[8%] ">Token</p>
        <p className="w-[12%] ">Patient ID</p>
        <p className="w-[14%]">Patient Name</p>
        <p className="w-[14%]">Phone No.</p>
        <p className="w-[14%]">Blood Group</p>
        <p className="w-[10%]">Gender</p>
        <p className="w-[15%]">Doctor Name</p>
        <p className="w-[12%]">Status</p>
        <p className="w-[10%] text-center ">Action</p>
      </div>
      <div className="w-full h-[1px] bg-stone-400 mb-3"></div>

      {patients.map((patient, index) => (
        <div key={index} className="flex items-center text-stone-600 p-3 border-b">
          <p className="w-[7.5%]">{patient.Token}</p>
          <p className="w-[11%]">{patient.id}</p>
          <p className="w-[12%]">{patient.name}</p>
          <p className="w-[17%]">{patient.Phone_No}</p>
          <p className="w-[10%]">{patient.BloodGroup}</p>
          <p className="w-[9%]">{patient.Gender}</p>
          <p className="w-[14%]">{patient.Doctor_Name}</p>
          <p
            className={`w-[9%] ${
              patient.After_Status === "Consulted" ? "text-green-600" : "text-red-600"
            }`}
          >
            {patient.After_Status}
          </p>
          <div className="w-[11%] flex justify-center gap-3">
            {patient.After_Status === "Consulted" ? (
              <img
                className="bg-green-100 rounded-md w-[30px] h-[30px] p-1"
                src={Consulted}
                alt="Consulted"
              />
            ) : (
              <img
                className="bg-orange-100 rounded-md w-[30px] h-[30px] p-1"
                src={Action1}
                alt="Action 1"
              />
            )}
            <img
              className="bg-blue-100 rounded-md w-[30px] h-[30px] p-1"
              src={Action2}
              alt="Action 2"
            />
          </div>
        </div>
      ))}
    </section>
  );
};

export default RegisteredOP_1;
