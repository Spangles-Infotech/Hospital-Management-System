import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Appointment = () => {

  const [appointments, setAppointments] = useState([]);


  useEffect(() => {
    const fetchAppointments = async () => {
      try {
        const response = await axios.get("http://localhost:3500/appointments"); 
        setAppointments(response.data);
      } catch (error) {
        console.error("Error fetching appointments data:", error);
      }
    };

    fetchAppointments();
  }, []);

  return (
    <>
      <div className="w-[820px] h-[363px] border border-cyan-500 rounded-xl ml-7 gap-3 mt-10">
        <div className="flex items-center">
          <p className="text-lg p-4 font-semibold text-cyan-600">Appointments</p>
          <div className="border border-cyan-600 text-cyan-600 p-1 cursor-pointer rounded-md w-20 text-center font-medium ml-[570px]">View All</div>
        </div>

        <div className="flex justify-between text-stone-600 font-semibold text-lg p-3">
          <p>Patient ID</p>
          <p>Patient Name</p>
          <p>Doctor Name</p>
          <p>Time & Date</p>
        </div>

        <div className="w-full h-[1px] bg-stone-400"></div>

        {appointments.map((appointment, index) => (
          <div key={index}>
            <div className="flex gap-8 text-stone-500 p-3 justify-between">
              <p>{appointment.id}</p>
              <p>{appointment.name}</p>
              <p>{appointment.doctor}</p>
              <p className="text-green-600 font-normal">{appointment.TimeAndDate}</p>
            </div>

            {index < appointments.length - 1 && (
              <div className="w-full h-[1px] bg-stone-400"></div>
            )}
          </div>
        ))}
      </div>
    </>
  );
};

export default Appointment;
