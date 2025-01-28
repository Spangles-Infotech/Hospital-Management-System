import React, { useState } from "react";
import PreviousChart from "./PreviousChart";
import DeleteIcon from "../../assests/Delete.png";
import EditIcon from "../../assests/editpen.png";

export const Prescription = () => {
  const [tests, setTests] = useState([]);
  const [selectedType, setSelectedType] = useState("");
  const [newTest, setNewTest] = useState({
    type: "Test",
    description: "",
    dose: "",
    routine: "",
    timing: "",
    days: "",
  });

  const handleAddOrEdit = () => {
    const pricePerTablet = "Rs 10";

    if (Object.values(newTest).every((field) => field)) {
      setTests((prev) => [
        ...prev.filter((test) => test.id !== newTest.id),
        { ...newTest, id: newTest.id || prev.length + 1, PricePerTablet: pricePerTablet },
      ]);
      setNewTest({ type: "Test", description: "", dose: "", routine: "", timing: "", days: "" });
    }
  };

  const handleDelete = (id) => setTests((prev) => prev.filter((test) => test.id !== id));

  return (
    <section className="p-3">
      <div className="flex gap-8 ">
        <div className="w-3/4 border border-primary p-7 rounded-lg shadow-lg ">
          <div className="flex justify-between font-medium mb-6 ">
            {["TABLET", "SYRUP", "INJECTION"].map((type) => (
              <p
                key={type}
                onClick={() => setSelectedType(type)}
                className={`relative cursor-pointer text-stone-400 pb-2 ${
                  selectedType === type
                    ? "text-primary border-b-2 border-primary "
                    : "hover:text-primary "
                }`}
              >
                {type}
              </p>
            ))}
          </div>

          <div className="flex gap-5 mb-4 text-sm py-3">
            {[
              { label: "Medicine Name", value: newTest.description, key: "description", type: "text" },
              selectedType === "SYRUP" || selectedType === "INJECTION"
                ? { label: "Dose(ml)", value: newTest.dose, key: "dose", options: ["01", "02", "03"] }
                : { label: "Dose", value: newTest.dose, key: "dose", options: ["01", "02", "03"] },
              selectedType !== "INJECTION" && { label: "Routine", value: newTest.routine, key: "routine", options: ["Orally", "Injection", "Topical"] },
              selectedType !== "INJECTION" && { label: "Timing", value: newTest.timing, key: "timing", options: ["TDS", "BDS", "Once"] },
              selectedType !== "INJECTION" && { label: "Days", value: newTest.days, key: "days", type: "text" },
            ].map(
              ({ label, value, key, options, type = "text" }) =>
                label && (
                  <div key={key} className="flex flex-col w-1/5">
                    <label className="text-stone-600 text-lg font-medium mb-5">{label}</label>
                    {options ? (
                      <select
                        value={value}
                        onChange={(e) => setNewTest((prev) => ({ ...prev, [key]: e.target.value }))}
                        className="border border-stone-300 outline-none rounded-md p-2 text-stone-600"
                      >
                        <option value="">Select {label}</option>
                        {options.map((option) => (
                          <option key={option} value={option}>
                            {option}
                          </option>
                        ))}
                      </select>
                    ) : (
                      <input
                        type={type}
                        value={value}
                        onChange={(e) => setNewTest((prev) => ({ ...prev, [key]: e.target.value }))}
                        placeholder={`Enter ${label}`}
                        className="border border-stone-300 outline-none rounded-md p-2 text-stone-600"
                      />
                    )}
                  </div>
                )
            )}
          </div>

          <div className="flex text-red-500 gap-3">
            <p>Available Qty: </p>
            <p>200</p>
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
              onClick={() => setNewTest({ type: "Test", description: "", dose: "", routine: "", timing: "", days: "" })}
              className="text-red-500 border border-stone-400 py-1 px-10 rounded-full hover:bg-stone-100"
            >
              Cancel
            </button>
          </div>

          <table className="w-full mt-8 border-collapse">
            <thead>
              <tr className="text-black font-medium text-lg">
                {["S.No", "Medicine Name", "Dose", "Action"].map((header) => (
                  <th key={header} className="px-4 py-4 text-left border-b border-gray-300">
                    {header}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {tests.map((test, index) => (
                <tr key={test.id} className="text-stone-600 border-t border-gray-300">
                  {[index + 1, test.description, test.dose].map((data, idx) => (
                    <td key={idx} className="px-6 py-4 border-b border-gray-300">
                      {data}
                    </td>
                  ))}
                  <td className="px-6 py-4 border-b border-gray-300">
                    <div className="flex justify-center gap-4">
                      <img
                        className="w-6 h-6 cursor-pointer"
                        src={EditIcon}
                        alt="Edit"
                        onClick={() => setNewTest(test)}
                      />
                      <img
                        className="w-6 h-6 cursor-pointer"
                        src={DeleteIcon}
                        alt="Delete"
                        onClick={() => handleDelete(test.id)}
                      />
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <PreviousChart />
      </div>
    </section>
  );
};
