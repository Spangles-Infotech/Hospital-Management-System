import React, { useState } from "react";
import PreviousChart from "./PreviousChart";
import DeleteIcon from "../../assests/Delete.png";
import EditIcon from "../../assests/editpen.png";
import { useForm } from "../../context/FormContext";



export const Diagnosis = () => {
  const {handleRegisterOpChange, registerOp, handleRegiterOpCancel, formData, handleAddToFormData, handleEditRegisterOP, handleDeleteRegisterOp} = useForm()

  return (
    <section className="p-5 font-poppins">
      <div className="flex gap-8">
        
        <div className="flex flex-col gap-7 w-3/4">
          <div className="border border-[#1F9CC6] p-5 rounded-lg shadow-lg">
            <p className="text-DarkTeal font-medium text-lg mb-4 ">Diagnosis</p>
            <div className="flex gap-6">
              <div className="w-[530px]">
                <input
                  type="text"
                  placeholder="Diagnosis Type"
                  name="type"
                  value={registerOp?.diagnosis?.type || ""}
                  onChange={(e) =>handleRegisterOpChange(e, "diagnosis")}
                  className="mb-4 border border-stone-300 outline-none rounded-md py-3 px-3 w-full text-stone-600"
                />
                <textarea
                  name="description"
                  value={registerOp?.diagnosis?.description || ""}
                  onChange={(e) =>handleRegisterOpChange(e, "diagnosis")}
                  placeholder="Type Something...."
                  className="border border-stone-300 outline-none rounded-md py-3 px-3 w-full text-stone-600"
                />
              </div>
              <div className="mt-24 flex gap-5 font-roboto">
                <button
                  type="button"
                  className="text-white bg-[#1F9CC6]  px-10 rounded-full hover:bg-[#1F9CC6]/90"
                  onClick={()=>handleAddToFormData("diagnosis")}
                >
                  Add
                </button>
                <button
                  type="button"
                  onClick={handleRegiterOpCancel}
                  className="text-red-500 border border-stone-400  px-10 rounded-full hover:bg-stone-100"
                >
                  Cancel
                </button>
              </div>
            </div>

         
            <div className="overflow-x-auto">
              <table className="w-full mt-8 border-collapse">
                <thead>
                  <tr className="  text-lg text-slate-700   ">
                    <th className="px-6 py-4 text-left border-b border-gray-300">S.No</th>
                    <th className="px-6 py-4 text-left border-b border-gray-300 w-[200px]">Diagnosis Type</th>
                    <th className="px-6 py-4 text-left border-b border-gray-300">Description</th>
                    <th className="px-6 py-4 text-center border-b border-gray-300">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {formData?.diagnosis?.map((diag, index) => (
                    <tr key={index} className="text-stone-400 ">
                      <td className="px-6 py-4 border-b border-gray-300">{index + 1}</td>
                      <td className="px-6 py-4 border-b border-gray-300">{diag.type}</td>
                      <td className="px-6 py-4 border-b border-gray-300">{diag.description}</td>
                      <td className="px-6 py-4 border-b border-gray-300">
                        <div className="flex justify-center gap-4">
                          <img
                            className="w-6 h-6 cursor-pointer"
                            src={EditIcon}
                            alt="Edit"
                            onClick={()=>handleEditRegisterOP("diagnosis", index)}
                          />
                          <img
                            className="w-6 h-6 cursor-pointer"
                            src={DeleteIcon}
                            alt="Delete"
                            onClick={()=>handleDeleteRegisterOp("diagnosis", index)}
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
