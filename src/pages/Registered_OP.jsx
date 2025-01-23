import React, { useState } from "react";
import { IoIosSearch } from "react-icons/io";
import Patient_detail from "../Component/RegisteredOP_1";
import PageNo from "../Component/PageNo";
import New_Appointment from "../Component/New_Appointment";

const Registered_OP = () => {
  
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <section className="w-full ml-10 ">
      <div className="flex items-center gap-8">
        <div className="text-lg p-4 font-semibold text-cyan-600 ">
          Registered OP
        </div>

        <div className="flex gap-4 items-center ml-80">
          <div className="relative">
            <input
              type="date"
              className="outline outline-1 outline-stone-400 text-stone-700 p-2 w-44 rounded-lg"
            />

          </div>
        </div>

        <div
          className="flex items-center gap-4 p-2.5 outline outline-1 rounded-lg text-gray-400 w-72"
        >
          <IoIosSearch className="text-stone-700 text-2xl" />
          <input
            type="text"
            placeholder="Search..."
            className="w-full outline-none text-stone-700 placeholder-stone-700"
          />
        </div>

        <button
          onClick={openModal}
          className="w-[170px] bg-cyan-500 p-2 text-white rounded-lg hover:bg-cyan-600 transition"
        >
          + New Appointment
        </button>
      </div>

      <Patient_detail />
      <PageNo />

      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
         
         <New_Appointment closeModal={closeModal} />
          </div>
        
      )}
    </section>
  );
};

export default Registered_OP;
