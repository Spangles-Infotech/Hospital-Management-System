import React, { useState } from "react";
import cancel from "../assests/cancel.png";
import { IoIosSearch } from "react-icons/io";


const New_Appointment = ({closeModal}) => {
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
    <div>
      <div className="w-[1100px] h-[550px] outline outline-cyan-600 rounded-xl bg-white place-self-center ml-52 p-3">
        <div className="flex items-center justify-between p-7 ml-3">
          <p className="text-stone-700 text-lg font-medium">New Appointment</p>
          <img
            onClick={closeModal}
            className="w-6 h-6 cursor-pointer"
            src={cancel}
            alt="Cancel"
          />
        </div>

        <form onSubmit={handleSubmit}>
          <div className="flex items-center gap-5 relative justify-between p-4">
            <div className="w-[800px] outline outline-1 outline-cyan-500 rounded-xl text-gray-500 flex items-center gap-4 text-lg bg-cyan-50 ml-7">
              <input
                type="text"
                placeholder="Enter Patient Phone no or Patient ID..."
                className="w-full bg-transparent outline-none text-gray-600 placeholder-gray-400 p-2"
              />
              <div className="bg-cyan-600 w-20 h-[44px] rounded-tr-lg rounded-br-lg p-2">
                <IoIosSearch className="text-2xl ml-2 text-white" />
              </div>
            </div>
            <button className="w-[200px] bg-cyan-600 p-2 text-white rounded-lg hover:bg-cyan-600 transition mr-3 text-lg">
              + New Patient
            </button>
          </div>

          {error && <p className="text-red-600 text-center mt-3">{error}</p>}

          <div className="flex p-2">
            <div className="flex flex-col p-2">
              <label className="text-stone-600 text-lg font-medium ml-7">
                Doctor
              </label>
              <select
                value={doctor}
                onChange={handleDoctorChange}
                className="w-[478px] h-[50px] outline-none border border-stone-500 rounded-lg ml-7 mt-2 p-2 text-stone-600"
              >
                <option value="">Select a Doctor</option>
                <option>Dr. David</option>
                <option>Dr. Praveen</option>
                <option>Dr. Shaji</option>
                <option>Dr. Varun</option>
              </select>
            </div>

            <div className="flex flex-col p-2">
              <label className="text-stone-600 text-lg font-medium ml-7">
                Doctor Fee
              </label>
              <input
                type="text"
                value={doctorFee}
                readOnly
                className="w-[478px] h-[50px] outline-none border border-stone-500 bg-stone-100 rounded-lg ml-7 mt-2 p-2 text-stone-600"
              />
            </div>
          </div>

          <div className="flex mt-5 p-2">
            <div className="flex flex-col p-2">
              <label className="text-stone-600 text-lg font-medium ml-7">
                Appointment Date
              </label>
              <input
                type="date"
                value={appointmentDate}
                onChange={handleAppointmentDateChange}
                className="w-[478px] h-[50px] outline-none border border-stone-500 rounded-lg ml-7 mt-2 p-2 text-stone-600"
              />
            </div>
            <div className="flex flex-col p-2">
              <label className="text-stone-600 text-lg font-medium ml-7">
                Payment Method
              </label>
              <select
                value={paymentMethod}
                onChange={handlePaymentMethodChange}
                className="w-[478px] h-[50px] outline-none border border-stone-500 rounded-lg ml-7 mt-2 p-2 text-stone-600"
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
              className="w-[150px] bg-cyan-600 p-2 text-white rounded-lg hover:bg-cyan-600 transition mr-5 text-lg"
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
