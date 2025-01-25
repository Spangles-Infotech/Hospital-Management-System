import React, { useEffect, useState } from 'react';
import axios from "axios";

const Doctors = () => {

  const [doctors, setDoctors] = useState([]);
  
  
  useEffect(() => {
    const fetchDoctors = async () => {
      try {
        const response = await axios.get("http://localhost:3500/doctors");
        setDoctors(response.data); 
      } catch (error) {
        console.error("Error fetching doctors data:", error);
      }
    };
    
    fetchDoctors();
  }, []);


  return (
    <>
      <div className='flex gap-3 mt-10'>
        <div className="w-[360px] h-[363px] border border-cyan-500 rounded-xl ml-7">
          <p className='text-cyan-600 font-semibold p-4 text-lg'>Doctors</p>
          <div className='flex gap-5 text-stone-600 font-semibold text-lg p-3'>
            <p>Doctor ID</p>
            <p>Doctor Name</p>
            <p>Department</p>
          </div>
          <div className='w-[359px] h-[1px] bg-stone-400'></div>

          {doctors.map((doctor, index) => (
            <div key={doctor.id}>
              <div className='flex gap-8 text-stone-500 p-3'>
                <p>{doctor.id}</p>
                <p>{doctor.name}</p>
                <p>{doctor.department}</p>
              </div>
           
              {index < doctors.length - 1 && (
                <div className='w-[359px] h-[1px] bg-stone-400'></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Doctors;
