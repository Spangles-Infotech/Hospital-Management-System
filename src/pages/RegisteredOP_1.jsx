import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Action1 from '../assests/Action1.png';
import Action2 from '../assests/Action2.png';
import { IoIosSearch } from "react-icons/io";
import Consulted from '../assests/Consulted.png';
import { FiPlus } from "react-icons/fi";
import New_Appointment from "../Component/New_Appointment";
import Vitals from '../Component/Vitals';
import { Pagination } from '../Component/common/Pagination';


const RegisteredOP_1 = () => {
  const [patients, setPatients] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [Date, setDate] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isVitalsOpen, setIsVitalsOpen] = useState(false); 

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

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setIsVitalsOpen(false); 
  };

  const handleDateChange = (e) => setDate(e.target.value);

  const openVitals = () => {
    setIsVitalsOpen(true); 
  };

  const closeVitals = () => {
    setIsVitalsOpen(false); 
  };

  return (
    <section className="w-full p-7 ">
      <div className="flex flex-wrap items-center mb-5 gap-4">
        <div className="flex-1 min-w-[200px]">
          <div className="text-lg p-4 font-semibold text-primary">
            Registered OP
          </div>
        </div>

        <div className="flex gap-4 items-center flex-1 min-w-[200px]">
          <div className="flex-1 min-w-[150px]">
            <input
              type="date"
              value={Date}
              placeholder='Date: '
              onChange={handleDateChange}
              className="w-full outline-none border border-stone-400 rounded-lg p-1.5 text-stone-600"
            />
          </div>

          <div className="flex flex-1 items-center gap-3 p-2 border border-stone-400 rounded-lg min-w-[200px]">
            <IoIosSearch className="text-stone-600 text-2xl" />
            <input
              type="text"
              placeholder="Search..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full outline-none text-stone-600 placeholder-stone-400"
            />
          </div>
        </div>

        <div className="flex-none">
          <button
            onClick={openModal}
            className="bg-primary p-2 text-white rounded-lg hover:bg-primary transition flex items-center gap-2">
            <FiPlus /> New Appointment
          </button>
        </div>
      </div>

      <table className="w-full table-auto border-collapse">
        <thead>
          <tr className="text-stone-700 font-medium text-lg border-b">
            <th className="p-3 w-[8%] text-left">Token</th>
            <th className="p-3 w-[12%] text-left">Patient ID</th>
            <th className="p-3 w-[14%] text-left">Patient Name</th>
            <th className="p-3 w-[14%] text-left">Phone No.</th>
            <th className="p-3 w-[14%] text-left">Blood Group</th>
            <th className="p-3 w-[10%] text-left">Gender</th>
            <th className="p-3 w-[15%] text-left">Doctor Name</th>
            <th className="p-3 w-[12%] text-left">Status</th>
            <th className="p-3 w-[10%] text-center">Action</th>
          </tr>
        </thead>
        <tbody>
          {patients.map((patient, index) => (
            <tr key={index} className="text-stone-600 border-b">
              <td className="p-3">{patient.Token}</td>
              <td className="p-3">{patient.id}</td>
              <td className="p-3">{patient.name}</td>
              <td className="p-3">{patient.Phone_No}</td>
              <td className="p-3">{patient.BloodGroup}</td>
              <td className="p-3">{patient.Gender}</td>
              <td className="p-3">{patient.Doctor_Name}</td>
              <td className={`p-3 ${patient.Before_Status === "Consulted" ? "text-green-600" : "text-red-600"}`}>
                {patient.Before_Status}
              </td>
              <td className="p-3 text-center flex justify-center gap-3">
                {patient.Before_Status === "Consulted" ? (
                  <img
                    className="bg-green-100 rounded-md w-[30px] h-[30px] p-1"
                    src={Consulted}
                    alt="Consulted"
                  />
                ) : (
                  <img
                    onClick={openVitals} 
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
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <New_Appointment closeModal={closeModal} />
        </div>
      )}

      {isVitalsOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <Vitals 
          closeVitals={closeVitals} />
        </div>
      )}
      <Pagination />
    </section>
  );
};

export default RegisteredOP_1;
