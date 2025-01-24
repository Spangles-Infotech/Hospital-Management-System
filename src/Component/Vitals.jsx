import React, { useState } from 'react';
import cancel from '../assests/cancel.png'
import { FiPlus } from "react-icons/fi";

const Vitals = ({ closeVitals }) => {

  const [temperature, setTemperature] = useState("");
  const [pulseRate, setPulseRate] = useState("");
  const [bloodPressure, setBloodPressure] = useState("");
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [symptoms, setSymptoms] = useState("");
  const [testName, setTestName] = useState("");
  const [consultedDoctor, setConsultedDoctor] = useState("");
  const [file, setFile] = useState(null);

  const handleDiscard = () => {
    setTemperature("");
    setPulseRate("");
    setBloodPressure("");
    setHeight("");
    setWeight("");
    setSymptoms("");
    setTestName("");
    setConsultedDoctor("");
    setFile(null);
  };

  return (
    <section onContextMenu={(e) => e.preventDefault()}
    className='w-[50%] h-[600px] justify-center items-center p-5 overflow-hidden z-50'>
      <div className="   outline outline-primary rounded-xl bg-white overflow-y-scroll">
        <div className="flex justify-between items-center p-4">
          <p className="text-lg text-stone-700 font-semibold ">Vitals</p>
          <img
            src={cancel}
            className="w-6 h-6 cursor-pointer"
            onClick={closeVitals}
            alt="Cancel"
          />
        </div>

        <div className="flex flex-col p-5">
          <label className="text-stone-600 font-medium">Temperature</label>
          <div className="relative flex items-center gap-2 mt-2">
            <input
              type="number"
              value={temperature}
              onChange={(e) => setTemperature(e.target.value)}
              placeholder="90"
              className="w-full h-[50px] outline-none border border-stone-300 rounded-lg p-2 text-stone-600 pr-12"
            />
            <p className="absolute right-0 text-stone-600 font-medium bg-stone-300 w-[14%] h-full rounded-lg flex items-center justify-center">°F</p>
          </div>

          <label className="text-stone-600 font-medium mt-4">Pulse Rate</label>
          <div className="relative flex items-center gap-2 mt-2">
            <input
              type="number"
              value={pulseRate}
              onChange={(e) => setPulseRate(e.target.value)}
              placeholder="72"
              className="w-full h-[50px] outline-none border border-stone-300 rounded-lg p-2 text-stone-600 pr-12"
            />
            <p className="absolute right-0 text-stone-600 font-medium bg-stone-300 w-[14%] h-full rounded-lg flex items-center justify-center">bpm</p>
          </div>

          <label className="text-stone-600 font-medium mt-4">Blood Pressure</label>
          <div className="relative flex items-center gap-2 mt-2">
            <input
              type="text"
              value={bloodPressure}
              onChange={(e) => setBloodPressure(e.target.value)}
              placeholder="90"
              className="w-full h-[50px] outline-none border border-stone-300 rounded-lg p-2 text-stone-600 pr-12"
            />
            <p className="absolute right-0 text-stone-600 font-medium bg-stone-300 w-[14%] h-full rounded-lg flex items-center justify-center">mmHg</p>
          </div>

          <div className="flex  mt-4  justify-between ">
            <div>
              <label className="text-stone-600 font-medium w-">Height</label>
              <div className="relative flex items-center gap-2 mt-2">
                <input
                  type="number"
                  value={height}
                  onChange={(e) => setHeight(e.target.value)}
                  placeholder="170"
                  className="w-full h-[50px] outline-none border border-stone-300 rounded-lg p-2 text-stone-600 pr-12"
                />
                <p className="absolute right-0 text-stone-600 text-lg font-medium bg-stone-300 w-[25%] h-full rounded-lg flex items-center justify-center">cm</p>
              </div>
            </div>
            <div>
              <label className="text-stone-600 font-medium">Weight</label>
              <div className="relative flex items-center gap-2 mt-2">
                <input
                  type="number"
                  value={weight}
                  onChange={(e) => setWeight(e.target.value)}
                  placeholder="70"
                  className="w-full h-[50px] outline-none border border-stone-300 rounded-lg p-2 text-stone-600 pr-12"
                />
                <p className="absolute right-0 text-stone-600 text-lg font-medium bg-stone-300 w-[25%] h-full rounded-lg flex items-center justify-center">kg</p>
              </div>
            </div>
          </div>

          <label className="text-stone-600 font-medium mt-4">Symptoms</label>
          <div className="flex items-center gap-2 mt-2">
            <input
              type="text"
              value={symptoms}
              onChange={(e) => setSymptoms(e.target.value)}
              placeholder="Fever, Cough"
              className="w-full h-[50px] outline-none border border-stone-300 rounded-lg p-2 text-stone-600"
            />
          </div>
        </div>

        <div className="w-full h-[1px] bg-primary"></div>
        <p className="text-stone-700 p-3 font-medium">Other Reports</p>
        <div className="flex gap-4 justify-between">
          <div className="p-4">
            <label className="text-stone-600 font-medium">Test Name</label>
            <div className="relative flex items-center gap-2 mt-2">
              <input
                type="text"
                value={testName}
                onChange={(e) => setTestName(e.target.value)}
                placeholder="Blood"
                className="w-full h-[50px] outline-none border border-stone-300 rounded-lg p-2 text-stone-600 pr-12"
              />
            </div>
          </div>
          <div className="p-3">
            <label className="text-stone-600 font-medium">Consulted Doctor</label>
            <div className="relative flex items-center gap-2 mt-2">
              <input
                type="text"
                value={consultedDoctor}
                onChange={(e) => setConsultedDoctor(e.target.value)}
                placeholder="Dr. Joseph"
                className="w-full h-[50px] outline-none border border-stone-300 rounded-lg p-2 text-stone-600 pr-12"
              />
            </div>
          </div>
          <div className="p-3">
            <label className="text-stone-600 font-medium">Upload Document</label>
            <div className="relative flex items-center gap-2 mt-2">
              <input
                type="file"
                onChange={(e) => setFile(e.target.files[0])}
                className="w-full h-[50px] outline-none border border-stone-300 rounded-lg p-2 text-stone-600"
              />
              <div className='outline-none border border-stone-300 text-primary text-2xl rounded-md text-center p-2.5'><FiPlus /> </div>
            </div>
          </div>
        </div>

        <div className="flex gap-7 items-center justify-end p-5">
          <p
            onClick={handleDiscard}
            className="text-red-600 cursor-pointer text-lg"
          >
            Discard
          </p>
          <button
            type="submit"
            className="w-[30%] bg-primary p-2 text-white rounded-lg hover:bg-primary transition text-lg"
          >
            Save
          </button>
        </div>
      </div>
    </section>
  );
};

export default Vitals;
