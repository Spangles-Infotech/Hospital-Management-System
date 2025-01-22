import React from "react";
import Appointments from "../assests/Appointments.png";
import TotalDoctors from "../assests/TotalDoctors.png";
import NewPaitents from "../assests/NewPaitents.png";
import Nurses from "../assests/Nurses.png";
import Doctors from "../Component/Doctors";
import Appointment from "../Component/Appointment";



const Dashboard = () => {
  return (
    <section className="w-full p-3 ">
      <div className="flex gap-5 items-center justify-end text-center">
        <button className="w-[170px] bg-cyan-500 p-2 text-white rounded-xl hover:bg-cyan-600 transition">
          + New Doctor
        </button>
        <button className="w-[170px] bg-cyan-500 p-2 text-white rounded-xl hover:bg-cyan-600 transition">
          + New Patient
        </button>
        <button className="w-[170px] bg-cyan-500 p-2 text-white rounded-xl hover:bg-cyan-600 transition">
          + Book Appointment
        </button>
      </div>

      <div className="flex -ml-4 gap-6 mt-10">
        <div className="w-[600px] h-[363px] border border-cyan-600 rounded-xl ml-7"></div>

        <div className="flex flex-col gap-1">
          <div className="flex gap-1">
            <div className="w-[290px] h-[180px] border border-cyan-600 rounded-tl-xl p-14 flex items-center gap-7">
              <img src={Appointments} alt="Appointments" className="w-[50px] h-[50px] bg-green-100 rounded-md p-1" />
              <div>
             <p className="text-stone-700 font-normal">Appointments</p>
             <div className="text-3xl text-green-700 font-semibold  w-[50px] h-[50px]">79</div>
             </div>
            </div>
            <div className="w-[290px] h-[180px] border border-cyan-600 rounded-tr-xl p-14 flex items-center gap-7">
              <img src={NewPaitents} alt="New Patients" className="w-[50px] h-[50px] bg-orange-100 rounded-md" />
              <div>
             <p className="text-stone-700 ">New Patients</p>
             <div className="text-3xl text-orange-500 font-semibold w-[50px] h-[50px]">200</div>
             </div>
            </div>
          </div>

          <div className="flex gap-1 ">
            <div className="w-[290px] h-[180px] border border-cyan-600 rounded-bl-xl p-14 flex items-center gap-7">
              <img src={TotalDoctors} alt="Total Doctors" className="w-[50px] h-[50px] bg-blue-100 rounded-md" />
              <div>
             <p className="text-stone-700 ">Total Doctors</p>
             <div className="text-3xl text-cyan-700 font-semibold">120</div>
             </div>
            </div>
            <div className="w-[290px] h-[180px] border border-cyan-600 rounded-br-xl p-14 flex items-center  gap-7 ">
              <img src={Nurses} alt="Nurses" className="w-[50px] h-[50px] bg-purple-100 rounded-md" />
             <div>
             <p className="text-stone-700 ">Nurses</p>
             <div className="text-3xl text-blue-900 font-semibold">300</div>
             </div>
             
            </div>
            
          </div>
        </div>
      </div>
      <div className="flex -ml-5">
        <Doctors/>

      <Appointment className=" -ml-4 gap-6 "/></div>
      
    
     
    </section>
  );
};

export default Dashboard;
