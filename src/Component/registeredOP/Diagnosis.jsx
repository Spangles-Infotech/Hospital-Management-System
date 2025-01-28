import React, { useState } from "react";
import PreviousChart from "./PreviousChart";
import DeleteIcon from "../../assests/Delete.png";
import EditIcon from "../../assests/editpen.png";



export const Diagnosis = () => {
  const [diagnoses, setDiagnoses] = useState([

  ]);

  const [newDiagnosis, setNewDiagnosis] = useState({ type: "", description: "" });

  const handleAdd = () => {
    if (newDiagnosis.type && newDiagnosis.description) {
      setDiagnoses([
        ...diagnoses,
        { id: diagnoses.length + 1, type: newDiagnosis.type, description: newDiagnosis.description },
      ]);
      setNewDiagnosis({ type: "", description: "" });
    }
  };

  const handleCancel = () => setNewDiagnosis({ type: "", description: "" });

  const handleDelete = (id) => setDiagnoses(diagnoses.filter((diag) => diag.id !== id));

  const handleEdit = (id) => {
    const diagnosisToEdit = diagnoses.find((diag) => diag.id === id);
    setNewDiagnosis({ type: diagnosisToEdit.type, description: diagnosisToEdit.description });
    setDiagnoses(diagnoses.filter((diag) => diag.id !== id));
  };

  return (
    <section className="p-5">
      <div className="flex gap-8">
        
        <div className="flex flex-col gap-7 w-3/4">
          <div className="border border-primary p-5 rounded-lg shadow-lg">
            <p className="text-DarkTeal font-medium text-lg mb-4">Diagnosis</p>
            <div className="flex gap-6">
              <div className="w-[530px]">
                <input
                  type="text"
                  placeholder="Diagnosis Type"
                  value={newDiagnosis.type}
                  onChange={(e) => setNewDiagnosis({ ...newDiagnosis, type: e.target.value })}
                  className="mb-4 border border-stone-300 outline-none rounded-md py-3 px-3 w-full text-stone-600"
                />
                <textarea
                  value={newDiagnosis.description}
                  onChange={(e) => setNewDiagnosis({ ...newDiagnosis, description: e.target.value })}
                  placeholder="Type Something...."
                  className="border border-stone-300 outline-none rounded-md py-3 px-3 w-full text-stone-600"
                />
              </div>
              <div className="mt-24 flex gap-5">
                <button
                  type="button"
                  onClick={handleAdd}
                  className="text-white bg-primary  px-10 rounded-full hover:bg-primary/90"
                >
                  Add
                </button>
                <button
                  type="button"
                  onClick={handleCancel}
                  className="text-red-500 border border-stone-400  px-10 rounded-full hover:bg-stone-100"
                >
                  Cancel
                </button>
              </div>
            </div>

         
            <div className="overflow-x-auto">
              <table className="w-full mt-8 border-collapse">
                <thead>
                  <tr className="  text-lg  ">
                    <th className="px-6 py-4 text-left border-b border-gray-300">S.No</th>
                    <th className="px-6 py-4 text-left border-b border-gray-300 w-[200px]">Diagnosis Type</th>
                    <th className="px-6 py-4 text-left border-b border-gray-300">Description</th>
                    <th className="px-6 py-4 text-center border-b border-gray-300">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {diagnoses.map((diag, index) => (
                    <tr key={diag.id} className="text-stone-400 ">
                      <td className="px-6 py-4 border-b border-gray-300">{index + 1}</td>
                      <td className="px-6 py-4 border-b border-gray-300">{diag.type}</td>
                      <td className="px-6 py-4 border-b border-gray-300">{diag.description}</td>
                      <td className="px-6 py-4 border-b border-gray-300">
                        <div className="flex justify-center gap-4">
                          <img
                            className="w-6 h-6 cursor-pointer"
                            src={EditIcon}
                            alt="Edit"
                            onClick={() => handleEdit(diag.id)}
                          />
                          <img
                            className="w-6 h-6 cursor-pointer"
                            src={DeleteIcon}
                            alt="Delete"
                            onClick={() => handleDelete(diag.id)}
                          />
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <PreviousChart />
      </div>
    </section>
  );
};
