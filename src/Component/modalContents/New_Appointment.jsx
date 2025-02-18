import React, { useState } from "react";
import { IoIosSearch } from "react-icons/io";

const New_Appointment = ({ closeModal }) => {
  const [doctor, setDoctor] = useState("");
  const [appointmentDate, setAppointmentDate] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("Cash");
  const [doctorFee, setDoctorFee] = useState("");
  const [error, setError] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(true);

  const handleDiscard = () => {
    setDoctor("");
    setAppointmentDate("");
    setPaymentMethod("Cash");
    setDoctorFee("");
    setError("");
  };

  const handleDoctorChange = (e) => {
    const selectedDoctor = e.target.value;
    setDoctor(selectedDoctor);

    if (selectedDoctor === "Dr. David") {
      setDoctorFee("Rs. 200");
    } else if (selectedDoctor === "Dr. Praveen") {
      setDoctorFee("Rs. 300");
    } else if (selectedDoctor === "Dr. Shaji") {
      setDoctorFee("Rs. 250");
    } else {
      setDoctorFee("Rs. 350");
    }
  };

  const handleAppointmentDateChange = (e) => setAppointmentDate(e.target.value);
  const handlePaymentMethodChange = (e) => setPaymentMethod(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();

    const errors = [];

    if (!doctor) errors.push("Please select a doctor.");
    if (!appointmentDate) {
      errors.push("Appointment date is required.");
    } else if (new Date(appointmentDate) < new Date()) {
      errors.push("Appointment date cannot be in the past.");
    }
    if (!paymentMethod) errors.push("Please select a payment method.");

    if (errors.length > 0) {
      setError(errors.join(" "));
      return;
    }

    setError("");
    alert("Appointment saved successfully!");
  };

  if (!isModalOpen) {
    return null;
  }

  return (
    <div className="flex items-center justify-center overflow-hidden">

      <div className="w-full h-full  bg-white p-5">
        <div className="flex items-center justify-between p-5">
          <p className="text-stone-700 text-lg font-medium">New Appointment</p>
     
        </div>

        <form onSubmit={handleSubmit}>
         
          <div className="flex items-center gap-5 justify-between p-4">
            <div className="flex-grow outline outline-1 outline-primary rounded-xl text-gray-500 flex items-center bg-cyan-50 ">
              <input
                type="text"
                placeholder="Enter Patient Phone no or Patient ID..."
                className="w-full bg-transparent outline-none text-gray-600 placeholder-gray-400 p-2"
              />
              <div className="bg-primary w-[12%] h-[40px] rounded-tr-lg rounded-br-lg flex items-center justify-center">
                <IoIosSearch className="text-2xl text-white" />
              </div>
            </div>
            <button className="w-[20%] bg-primary p-2 text-white rounded-lg hover:bg-primary transition text-lg">
              + New Patient
            </button>
          </div>

          
          <div className="p-4">
            <div className="w-full h-[1px] bg-stone-300 mb-4"></div>
            <div className="flex justify-between">
              <div className="text-slate-700 text-lg font-medium flex gap-2">
                Patient ID:
                <p className="text-green-500">DOB003234</p>
              </div>
              <div className="text-slate-700 text-lg font-medium flex gap-2">
                Patient Name:
                <p className="text-primary">Ramesh</p>
              </div>
              <div className="text-slate-700 text-lg font-medium flex gap-2">
                Phone Number:
                <p className="text-primary">+ 91 9087654321</p>
              </div>
            </div>
            <div className="w-full h-[1px] bg-stone-300 mt-4"></div>
          </div>

   
          {error && <p className="text-red-600 text-center mt-3">{error}</p>}

     
          <div className="flex flex-wrap gap-5 p-2">
        
            <div className="flex flex-col w-[48%]">
              <label className="text-stone-600 text-lg font-medium">Doctor</label>
              <select
                value={doctor}
                onChange={handleDoctorChange}
                className="w-full h-[50px] outline-none border border-stone-300 rounded-lg mt-2 p-2 text-stone-600"
              >
                <option value="">Select a Doctor</option>
                <option>Dr. David</option>
                <option>Dr. Praveen</option>
                <option>Dr. Shaji</option>
                <option>Dr. Varun</option>
              </select>
            </div>

            <div className="flex flex-col w-[48%]">
              <label className="text-stone-600 text-lg font-medium">Doctor Fee</label>
              <input
                type="text"
                value={doctorFee}
                readOnly
                className="w-full h-[50px] outline-none border border-stone-300 bg-stone-100 rounded-lg mt-2 p-2 text-stone-600"
              />
            </div>

          
            <div className="flex flex-col w-[48%]">
              <label className="text-stone-600 text-lg font-medium">
                Appointment Date
              </label>
              <input
                type="date"
                value={appointmentDate}
                onChange={handleAppointmentDateChange}
                className="w-full h-[50px] outline-none border border-stone-300 rounded-lg mt-2 p-2 text-stone-600"
              />
            </div>

            
            <div className="flex flex-col w-[48%]">
              <label className="text-stone-600 text-lg font-medium">
                Payment Method
              </label>
              <select
                value={paymentMethod}
                onChange={handlePaymentMethodChange}
                className="w-full h-[50px] outline-none border border-stone-300 rounded-lg mt-2 p-2 text-stone-600"
              >
                <option value="">Select Payment Method</option>
                <option>Cash</option>
                <option>Credit/Debit Card</option>
                <option>UPI</option>
                <option>Net Banking</option>
              </select>
            </div>
          </div>

          
          <div className="flex mt-7 gap-7 items-center justify-end">
            <p className="text-red-600 cursor-pointer text-lg" onClick={handleDiscard}>
              Discard
            </p>
            <button
              type="submit"
              className="w-[15%] bg-primary p-2 text-white rounded-lg hover:bg-primary transition text-lg"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default New_Appointment;
