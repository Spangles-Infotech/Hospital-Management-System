import React, { useState } from "react";
import PreviousChart from "./PreviousChart";
import DeleteIcon from "../../assests/Delete.png";
import EditIcon from "../../assests/editpen.png";

export const Prescription = () => {
  const [tests, setTests] = useState([]);
  const [selectedType, setSelectedType] = useState("TABLET");

  const [newTest, setNewTest] = useState({
    id: null,
    description: "",
    dose: "",
    routine: "",
    timing: "",
    days: "",
    date: "",
  });

  const handleAddOrEdit = () => {
    if (!newTest.description.trim()) return;

    if (newTest.id !== null) {
      
      setTests((prev) =>
        prev.map((test) => (test.id === newTest.id ? newTest : test))
      );
    } else {
   
      const newId = tests.length > 0 ? tests[tests.length - 1].id + 1 : 1;
      setTests([...tests, { ...newTest, id: newId }]);
    }

    
    setNewTest({
      id: null,
      description: "",
      dose: "",
      routine: "",
      timing: "",
      days: "",
      date: "",
    });
  };

  const handleDelete = (id) => {
    setTests(tests.filter((test) => test.id !== id));
  };

  const handleEdit = (test) => {
    setNewTest(test);
  };

  return (
    <section className="p-3 font-poppins">
      <div className="flex gap-8">
        <div className="w-3/4 border border-primary p-7 rounded-lg shadow-lg">
          <div className="flex justify-between font-medium mb-6">
            {["TABLET", "SYRUP", "INJECTION"].map((type) => (
              <p
                key={type}
                onClick={() => setSelectedType(type)}
                className={`relative cursor-pointer text-stone-400 pb-2 ${
                  selectedType === type ? "text-primary border-b-2 border-primary" : "hover:text-primary"
                }`}
              >
                {type}
              </p>
            ))}
          </div>

          
          <div className="flex gap-5 mb-4 text-sm py-3">
            {[
              {
                label: "Medicine Name",
                value: newTest.description,
                key: "description",
              },
              {
                label: selectedType === "SYRUP" || selectedType === "INJECTION" ? "Dose (ml)" : "Dose",
                value: newTest.dose,
                key: "dose",
              },
              selectedType !== "INJECTION" && {
                label: "Routine",
                value: newTest.routine,
                key: "routine",
              },
              selectedType !== "INJECTION" && {
                label: "Timing",
                value: newTest.timing,
                key: "timing",
              },
              selectedType !== "INJECTION" && {
                label: "Days",
                value: newTest.days,
                key: "days",
              },
            ]
              .filter(Boolean)
              .map(({ label, value, key }) => (
                <div key={key} className="flex flex-col w-[130px] ">
                  <label className="text-stone-600  font-medium mb-2 text-base ">{label}</label>
                  <input
                    type="text"
                    value={value}
                    onChange={(e) => setNewTest({ ...newTest, [key]: e.target.value })}
                    placeholder={`Enter ${label}`}
                    className="border border-stone-300 outline-none rounded-md p-2 text-stone-600"
                  />
                </div>
              ))}
          </div>

          
          <div className="flex justify-center gap-3 mt-4">
            <button
              type="button"
              onClick={handleAddOrEdit}
              className="text-white bg-primary px-10 py-2 rounded-full hover:bg-primary/90"
            >
              {newTest.id ? "Update" : "Add"}
            </button>
            <button
              type="button"
              onClick={() =>
                setNewTest({
                  id: null,
                  description: "",
                  dose: "",
                  routine: "",
                  timing: "",
                  days: "",
                  date: "",
                })
              }
              className="text-red-500 border border-stone-400 py-1 px-10 rounded-full"
            >
              Cancel
            </button>
          </div>

          
          <table className="w-full mt-8 border-collapse">
            <thead>
              <tr className="text-slate-700 font-medium">
                <th className="px-3 py-4 text-left border-b border-gray-300">S.No</th>
                <th className="px-3 py-4 text-left border-b border-gray-300">Medicine Name</th>
                <th className="px-3 py-4 text-left border-b border-gray-300">Dose</th>
                {selectedType !== "INJECTION" && (
                  <>
                    <th className="px-3 py-4 text-left border-b border-gray-300">Routine</th>
                    <th className="px-3 py-4 text-left border-b border-gray-300">Timing</th>
                    <th className="px-3 py-4 text-left border-b border-gray-300">Days</th>
                  </>
                )}
                <th className="px-3 py-4 text-left border-b border-gray-300">Action</th>
              </tr>
            </thead>
            <tbody>
              {tests.length > 0 ? (
                tests.map((test, index) => (
                  <tr key={test.id} className="text-stone-600 border-t border-gray-300 ">
                    <td className="px-6 py-4 border-b border-gray-300">{index + 1}</td>
                    <td className="px-6 py-4 border-b border-gray-300">{test.description}</td>
                    <td className="px-6 py-4 border-b border-gray-300">{test.dose}</td>
                    {selectedType !== "INJECTION" && (
                      <>
                        <td className="px-6 py-4 border-b border-gray-300">{test.routine}</td>
                        <td className="px-6 py-4 border-b border-gray-300">{test.timing}</td>
                        <td className="px-6 py-4 border-b border-gray-300">{test.days}</td>
                      </>
                    )}
                    <td className="px-6 py-4 border-b border-gray-300">
                      <div className="flex justify-center gap-4">
                        <img className="w-6 h-6 cursor-pointer" src={EditIcon} alt="Edit" onClick={() => handleEdit(test)} />
                        <img className="w-6 h-6 cursor-pointer" src={DeleteIcon} alt="Delete" onClick={() => handleDelete(test.id)} />
                      </div>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                 
                </tr>
              )}
            </tbody>
          </table>
        </div>

        <PreviousChart />
      </div>
    </section>
  );
};
