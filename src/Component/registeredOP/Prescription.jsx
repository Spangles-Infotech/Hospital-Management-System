import React, { useEffect, useState } from "react";
import PreviousChart from "./PreviousChart";
import DeleteIcon from "../../assests/Delete.png";
import EditIcon from "../../assests/editpen.png";
import { useForm } from "../../context/FormContext";

export const Prescription = () => {

  const {formData, setRegisterOp, handleRegisterOpChange, registerOp, handleAddToFormData, handleRegiterOpCancel, handleEditRegisterOP, handleDeleteRegisterOp} = useForm()
  const [selectedType, setSelectedType] = useState("TABLET");

  // useEffect(()=>{
  //   console.log("rendering")
  //   setRegisterOp((prev)=>({...prev, "prescription": {medicineType:"TABLET"}}))
  // },[setRegisterOp])

  const handleCategoryChange = (item)=>{
    setSelectedType(item)
    handleRegisterOpChange({target:{name:"medicineType", value:item}}, "prescription")
    console.log("registerOp", registerOp)
  }

  const fields = [
    {
      label: "Medicine Name",
      name: "medicineName",
      key: "description",
    },
    {
      label: selectedType === "SYRUP" || selectedType === "INJECTION" ? "Dose (ml)" : "Dose",
      name: "dose",
      key: "dose",
    },
    selectedType !== "INJECTION" && {
      label: "Routine",
      name: "routine",
      key: "routine",
    },
    selectedType !== "INJECTION" && {
      label: "Timing",
      name: "timing",
      key: "timing",
    },
    selectedType !== "INJECTION" && {
      label: "Days",
      name: "days",
      key: "days",
    },
  ]

  const medicineType = ["TABLET", "SYRUP", "INJECTION"]

  return (
    <section className="p-3 font-poppins">
      <div className="flex gap-8">
        <div className="w-3/4 border border-primary p-7 rounded-lg shadow-lg">
          <div className="flex justify-between font-medium mb-6">
            {medicineType.map((type) => (
              <p
                key={type}
                onClick={()=>handleCategoryChange(type)}
                className={`relative cursor-pointer text-stone-400 pb-2 ${
                  selectedType === type ? "text-primary border-b-2 border-primary" : "hover:text-primary"
                }`}
              >
                {type}
              </p>
            ))}
          </div>
          <div className="flex gap-5 mb-4 text-sm py-3">
            {
              fields.filter(Boolean).map((field, index) => (
                <div key={index} className="flex flex-col w-[130px] ">
                  <label className="text-stone-600  font-medium mb-2 text-base ">{field?.label}</label>
                  <input
                    type="text"
                    name={field?.name}
                    value={registerOp?.prescription?.[field.name] || ""}
                    onChange={(e)=>handleRegisterOpChange(e, "prescription")}
                    placeholder={`Enter ${field.label}`}
                    className="border border-stone-300 outline-none rounded-md p-2 text-stone-600"
                  />
                </div>
              ))}
          </div>
          <div className="flex justify-center gap-3 mt-4">
            <button
              type="button"
              onClick={()=>handleAddToFormData("prescription")}
              className="text-white bg-primary px-10 py-2 rounded-full hover:bg-primary/90"
            >
              Add
            </button>
            <button
              type="button"
              onClick={handleRegiterOpCancel}
              className="text-red-500 border border-stone-400 py-1 px-10 rounded-full"
            >
              Cancel
            </button>
          </div>
          <table className="w-full mt-8 border-collapse">
            <thead>
              <tr className="text-slate-700 font-medium">
                <th className="px-3 py-4 text-left border-b border-gray-300">S.No</th>
                <th className="px-3 py-4 text-left border-b border-gray-300">Medicine Category</th>
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
              {formData?.prescription?.length > 0 ? (
                formData.prescription.map((test, index) => (
                  <tr key={index} className="text-stone-600 border-t border-gray-300 ">
                    <td className="px-6 py-4 border-b border-gray-300">{index + 1}</td>
                    <td className="px-6 py-4 border-b border-gray-300">{test.medicineType || "-"}</td>
                    <td className="px-6 py-4 border-b border-gray-300">{test.medicineName  || "-"}</td>
                    <td className="px-6 py-4 border-b border-gray-300">{test.dose || "-"}</td>
                    <td className="px-6 py-4 border-b border-gray-300">{test.routine || "-"}</td>
                    <td className="px-6 py-4 border-b border-gray-300">{test.timing || "-"}</td>
                    <td className="px-6 py-4 border-b border-gray-300">{test.days || "-"}</td>
                    <td className="px-6 py-4 border-b border-gray-300">
                      <div className="flex justify-center gap-4">
                        <img className="w-6 h-6 cursor-pointer" src={EditIcon} alt="Edit" onClick={() => handleEditRegisterOP("prescription", index)} />
                        <img className="w-6 h-6 cursor-pointer" src={DeleteIcon} alt="Delete" onClick={() => handleDeleteRegisterOp("prescription", index)} />
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
