import React, { useState } from "react";
import PreviousChart from "./PreviousChart";


export const OtherSevices = () => {
  const [tests, setTests] = useState([
    { id: 1, ServiceName: "Physiotherapy", Price: "Rs. 200" },
    { id: 2, ServiceName: "Xray", Price: "Rs. 200" },
    { id: 3, ServiceName: "Blood Test", Price: "Rs. 200" },
  ]);

  const [newTest, setNewTest] = useState({ ServiceName: "", Price: "" });

  const handleAdd = () => {
    if (newTest.ServiceName && newTest.Price) {
      setTests([
        ...tests,
        { id: tests.length + 1, ServiceName: newTest.ServiceName, Price: newTest.Price },
      ]);
      setNewTest({ ServiceName: "", Price: "" });
    }
  };

  const handleCancel = () => setNewTest({ ServiceName: "", Price: "" });

  return (
    <section className="p-3">
      <div className="flex gap-8">
        <div className="w-[75%]">
          <div className="border border-primary p-5 rounded-lg shadow-lg">
            <div className="flex">
              <p className="text-slate-700 font-medium text-lg mb-4 w-[36%]">Service Name</p>
              <p className="text-slate-700 font-medium text-lg mb-4">Fee</p>
            </div>

            <div className="flex gap-6">
              <div className="flex gap-5 w-full">
                <input
                  type="text"
                  placeholder="Service Name"
                  value={newTest.ServiceName}
                  onChange={(e) => setNewTest({ ...newTest, ServiceName: e.target.value })}
                  className="mb-4 border border-stone-300 outline-none rounded-md p-3 flex-1 text-stone-600"
                />
                <input
                  type="text"
                  placeholder="Fee (e.g., Rs. 200)"
                  value={newTest.Price}
                  onChange={(e) => setNewTest({ ...newTest, Price: e.target.value })}
                  className="mb-4 border border-stone-300 outline-none rounded-md p-3 flex-1 text-stone-600"
                />
              </div>
              <div className="px-4 py-3">
              <div className="flex justify-center gap-3 ">
                <button
                  type="button"
                  onClick={handleAdd}
                  className="text-white bg-primary px-10 py-2 rounded-full hover:bg-primary/90"
                >
                  Add
                </button>
                <button
                  type="button"
                  onClick={handleCancel}
                  className="text-red-500 border border-stone-400 py-1 px-10 rounded-full hover:bg-stone-100"
                >
                  Cancel
                </button>
              </div>
              </div>
              
            </div>

            <div className="overflow-x-auto">
              <table className="w-full mt-8 border-collapse">
                <thead>
                  <tr className="text-black text-lg">
                    <th className="px-6 py-4 text-left border-b border-gray-300 w-[300px]">S.No</th>
                    <th className="px-6 py-4 text-left border-b border-gray-300 w-[300px]">
                      Service Name
                    </th>
                    <th className="px-6 py-4 text-center border-b border-gray-300">Price</th>
                  </tr>
                </thead>
                <tbody>
                  {tests.map((test, index) => (
                    <tr key={test.id} className="text-stone-600">
                      <td className="px-6 py-4 border-b border-gray-300">{index + 1}</td>
                      <td className="px-6 py-4 border-b border-gray-300">{test.ServiceName}</td>
                      <td className="px-6 py-4 border-b border-gray-300 text-center">{test.Price}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <PreviousChart />
      </div>
      <div className="flex items-center gap-2 p-3 ml-[53%]">
        <p className="text-xl text-stone-700 font-medium">Total Amount:</p>
        <p className="text-green-600 font-medium text-xl">Rs. 750</p>
      </div>
    </section>
  );
};
