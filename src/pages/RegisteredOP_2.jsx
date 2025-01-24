import React, { useState, useEffect } from 'react';
import { IoIosSearch } from "react-icons/io";
import axios from 'axios'; 
import Action3 from '../assests/Action3.png';
import { Pagination } from '../Component/common/Pagination';

const RegisteredOP_2 = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [patients, setPatients] = useState([]); 

  useEffect(() => {
    
    axios.get('http://localhost:3500/patients')
      .then(response => {
        setPatients(response.data); 
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  const filteredPatients = patients.filter(
    (patient) =>
      patient.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      patient.id.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <section className="w-full p-7">
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

      <table className="w-full mt-3 table-auto">
        <thead className="bg-HeadlineBlue text-stone-700 text-lg">
          <tr>
            <th className="w-[8%] p-3">Token</th>
            <th className="w-[10%] p-3">Patient ID</th>
            <th className="w-[15%] p-3">Patient Name</th>
            <th className="w-[7%] p-3">Age</th>
            <th className="w-[10%] p-3">Gender</th>
            <th className="w-[15%] p-3">Blood Group</th>
            <th className="w-[20%] p-3">Phone Number</th>
            <th className="w-[10%] p-3">Status</th>
            <th className="w-[5%] p-3">Action</th>
          </tr>
        </thead>
        <tbody>
          {filteredPatients.map((patient, index) => (
            <tr
              key={patient.id}
              className={`text-stone-600 ${index % 2 === 1 ? 'bg-customBlue' : ''}`}
            >
              <td className="p-3">{patient.Token}</td>
              <td className="p-3">{patient.id}</td>
              <td className="p-3">{patient.name}</td>
              <td className="p-3">{patient.Age}</td>
              <td className="p-3">{patient.Gender}</td>
              <td className={`p-3 ${patient.BloodGroup === 'O +ive' ? 'text-green-500' : ''} ${patient.BloodGroup === 'AB +ive' ? 'text-red-500' : ''}  ${patient.BloodGroup === 'O -ive' ? 'text-green-500' : ''} ${patient.BloodGroup === 'B +ive' ? 'text-orange-500' : ''} 
          ${patient.BloodGroup === 'A +ive' ? 'text-green-500' : ''} ${patient.BloodGroup === 'AB -ive' ? 'text-red-500' : ''} ${patient.BloodGroup === 'B -ive' ? 'text-red-500' : ''}`}>{patient.BloodGroup}</td>
              <td className="p-3">{patient.Phone_No}</td>
              <td className="p-3">
                {patient.After_Status === "Active" ? (
                  <span className="text-blue-600 bg-blue-100 px-10 py-2 rounded-lg">Active</span>
                ) : (
                  <span className="text-green-600 bg-green-100 px-7 py-2  rounded-lg">Consulted</span>
                )}
              </td>
              <td className="p-3">
                <img
                  src={Action3}
                  alt="Action 3"
                  className="bg-purple-100 rounded-md w-[40px] h-[40px] p-1"
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Pagination />
    </section>
  );
};

export default RegisteredOP_2;
