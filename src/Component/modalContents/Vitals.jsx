import React, { useState } from 'react';
import { FiPlus } from "react-icons/fi";

const vitalsField = [
  [{ label: "Temperature", name: "temperature",unit: ["°F","C","K"],inputName:"value",dropdownName:"type" }],
  [{ label: "Pulse Rate", name: "pulseRate", type: "number", unit: "bpm" }],
  [{ label: "Blood Pressure", name: "bloodPressure", type: "text", unit: "mmHg" }],
  [
    { label: "Height", name: "height",unit: ["cm","m","in","ft"],inputName:"value",dropdownName:"type"},
    { label: "Weight", name: "weight",unit: ["kg","g","lb"],inputName:"value",dropdownName:"type" }
  ],
  [{ label: "Symptoms", name: "symptoms", type: "text" }]
];

const otherReportFields = [
  [
    { label: "Test Name", name: "testName", type: "text" },
    { label: "Consulted Doctor", name: "consultedDoctor", type: "text" },
    { label: "Upload Document", name: "file", type: "file" }
  ]
];

const Vitals = () => {
  const [formData, setFormData] = useState({});

  const handleChange = (e) => {
    const { name, type, value, files } = e.target;
    const newValue = type === "file" ? files[0] : value;
    setFormData((prev) => ({ ...prev, [name]: newValue }));

    console.log(`Updated Field: ${name} ->`, newValue); // Logs updated input data
  };

  const handleSubmit = async () => {
    console.log("Submitting Data:", formData);

    try {
      const response = await fetch("/post-vitals", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData)
      });

      if (!response.ok) {
        throw new Error(`Failed to post data: ${response.status}`);
      }

      const result = await response.json();
      console.log("Post Response:", result);
    } catch (error) {
      console.error("Error posting vitals data:", error);
    }
  };

  const handleDiscard = () => {
    console.log("Form discarded");
    setFormData({});
  };

  return (
    <section className='w-full h-[900px]'>
      <div className="bg-white rounded-lg">
        <div className="flex justify-between items-center p-5">
          <p className="text-lg text-stone-700 font-semibold">Vitals</p>
        </div>
        
        <div className="flex flex-col gap-4 mt-5 px-5">
          {vitalsField.map((row, rowIndex) => (
            <div key={rowIndex} className="flex flex-wrap gap-4">
              {row.map(({ label, name, type, unit }) => (
                <div key={name} className="flex-1 min-w-[200px]">
                  <label className="text-stone-600 font-medium">{label}</label>
                  <div className="relative flex items-center mt-2">
                    <input
                      type={type}
                      name={name}
                      value={formData[name] || ""}
                      onChange={handleChange}
                      className="w-full h-[50px] outline-none border border-stone-300 rounded-lg px-2 text-stone-600 pr-12"
                    />
                    {unit && (
                      <p className="absolute flex text-stone-600 font-medium bg-stone-300 h-full w-[80px] justify-center text-center right-0 rounded-lg">
                        <span className='mt-3'>{unit}</span>
                      </p>
                    )}
                  </div>
                  
                </div>
              ))}
            </div>
          ))}
        </div>
        <div className="w-full h-[1px] bg-[#1F9CC6] mt-10"></div>
        <p className="text-lg text-stone-700 font-semibold mt-6 px-4 py-2">Other Report</p>
        <div className="flex flex-col gap-4 mt-3 p-4">
          {otherReportFields.map((row, rowIndex) => (
            <div key={rowIndex} className="flex flex-wrap gap-4">
              {row.map(({ label, name, type }) => (
                <div key={name} className="flex-1 min-w-[200px]">
                  <label className="text-stone-600 font-medium">{label}</label>
                  <div className="relative flex items-center mt-2">
                    <input
                      type={type}
                      name={name}
                      value={formData[name] || ""}
                      onChange={handleChange}
                      className="w-full h-[50px] outline-none border border-stone-300 rounded-lg text-stone-600 p-2"
                    />
                    {type === "file" && (
                      <div className='border border-stone-300 text-[#1F9CC6] text-2xl rounded-md cursor-pointer p-3 ml-3'>
                        <FiPlus />
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>

        <div className="flex gap-7 items-center justify-end p-5">
          <p onClick={handleDiscard} className="text-red-600 cursor-pointer text-lg">Discard</p>
          <button onClick={handleSubmit} className="w-[30%] bg-[#1F9CC6] p-2 text-white rounded-lg hover:bg-[#1F9CC6] transition text-lg">
            Save
          </button>
        </div>
      </div>
    </section>
  );
};

export default Vitals;
