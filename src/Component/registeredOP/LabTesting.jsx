import React from "react";
import PreviousChart from "./PreviousChart";
import DeleteIcon from "../../assests/Delete.png";
import EditIcon from "../../assests/editpen.png";
import { useForm } from "../../context/FormContext";


export const LabTesting = () => {
  const {
    handleChange,
    registerOp,
    handleRegiterOpCancel,
    formData,
    handleAddToFormData,
    handleEditRegisterOP,
    handleDeleteRegisterOp
  } = useForm();

  return (
    <section className="p-3">
      <div className="flex gap-8 font-poppins">
        
        <div className="w-[75%]">
          <div className="border border-primary p-5 rounded-lg shadow-lg">
            <div className="flex">
              <p className="text-DarkTeal font-medium text-lg mb-4 w-[36%]">Test Name</p>
              <p className="text-DarkTeal font-medium text-lg mb-4">Description</p>
            </div>

            <div className="flex gap-6">
              <div className="flex gap-5 w-full">
                <input
                  type="text"
                  name="testName"
                  placeholder="Enter test name..."
                  value={registerOp?.labTests?.testName || ""}
                  onChange={(e) => handleChange(e, "labTests")}
                  className="mb-4 border border-stone-300 outline-none rounded-md p-3 flex-1 text-stone-600"
                />
                <input
                  type="text"
                  name="description"
                  value={registerOp?.labTests?.description || ""}
                  onChange={(e) => handleChange(e, "labTests")}
                  placeholder="Type Something..."
                  className="mb-4 border border-stone-300 outline-none rounded-md p-3 flex-1 text-stone-600"
                />
              </div>
              <div className="flex justify-center gap-3 mt-4">
                <button
                  type="button"
                  onClick={() => handleAddToFormData("labTests")}
                  className="text-white bg-primary px-10 py-1 rounded-full hover:bg-primary/90"
                >
                  Add
                </button>
                <button
                  type="button"
                  onClick={handleRegiterOpCancel}
                  className="text-red-500 border border-stone-400 py-1 px-10 rounded-full hover:bg-stone-100"
                >
                  Cancel
                </button>
              </div>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full mt-8 border-collapse">
                <thead>
                  <tr className="text-slate-700 text-lg">
                    <th className="px-6 py-4 text-left border-b border-gray-300">S.No</th>
                    <th className="px-6 py-4 text-left border-b border-gray-300 w-[200px]">Test Type</th>
                    <th className="px-6 py-4 text-left border-b border-gray-300">Description</th>
                    <th className="px-6 py-4 text-center border-b border-gray-300">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {formData?.labTests?.length > 0 ? (
                    formData.labTests.map((test, index) => (
                      <tr key={test.id || index} className="text-slate-700">
                        <td className="px-6 py-4 border-b border-gray-300">{index + 1}</td>
                        <td className="px-6 py-4 border-b border-gray-300">{test.testName}</td>
                        <td className="px-6 py-4 border-b border-gray-300">{test.description}</td>
                        <td className="px-6 py-4 border-b border-gray-300">
                          <div className="flex justify-center gap-4">
                            <img
                              className="w-6 h-6 cursor-pointer"
                              src={EditIcon}
                              alt="Edit"
                              onClick={() => handleEditRegisterOP("labTests", index)}
                            />
                            <img
                              className="w-6 h-6 cursor-pointer"
                              src={DeleteIcon}
                              alt="Delete"
                              onClick={() => handleDeleteRegisterOp("labTests", index)}
                            />
                          </div>
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan="4" className="text-center py-4 text-gray-500">
                        No tests added yet.
                      </td>
                    </tr>
                  )}
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
