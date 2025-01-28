import React, { useState } from "react";
import PreviousChart from "./PreviousChart";
import DeleteIcon from "../../assests/Delete.png";
import EditIcon from "../../assests/editpen.png";

export const LabTesting = () => {
  const [tests, setTests] = useState([
 
  ]);

  const [newTest, setNewTest] = useState({ type: "", description: "" });

  const handleAdd = () => {
    if (newTest.type && newTest.description) {
      setTests([
        ...tests,
        { id: tests.length + 1, type: "Test", description: newTest.description },
      ]);
      setNewTest({ type: "", description: "" });
    }
  };

  const handleCancel = () => setNewTest({ type: "", description: "" });

  const handleDelete = (id) => setTests(tests.filter((test) => test.id !== id));

  const handleEdit = (id) => {
    const testToEdit = tests.find((test) => test.id === id);
    setNewTest({ type: "Test", description: testToEdit.description });
    setTests(tests.filter((test) => test.id !== id));
  };

  return (
    <section className="p-3">
      <div className="flex gap-8">
        
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
                  placeholder="Enter test name..."
                  value={newTest.type}
                  onChange={(e) => setNewTest({ ...newTest, type: e.target.value })}
                  className="mb-4 border border-stone-300 outline-none rounded-md p-3 flex-1 text-stone-600"
                />
                <input
                type="text"
                  value={newTest.description}
                  onChange={(e) => setNewTest({ ...newTest, description: e.target.value })}
                  placeholder="Type Something...."
                  className="mb-4 border border-stone-300 outline-none rounded-md p-3 flex-1 text-stone-600"
                />
              </div>
              <div className="flex justify-center gap-3 mt-4">
                <button
                  type="button"
                  onClick={handleAdd}
                  className="text-white bg-primary px-10 py-1 rounded-full hover:bg-primary/90"
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

           
            <div className="overflow-x-auto">
              <table className="w-full mt-8 border-collapse">
                <thead>
                  <tr className="text-black  text-lg">
                    <th className="px-6 py-4 text-left border-b border-gray-300">S.No</th>
                    <th className="px-6 py-4 text-left border-b border-gray-300 w-[200px]">Test Type</th>
                    <th className="px-6 py-4 text-left border-b border-gray-300">Description</th>
                    <th className="px-6 py-4 text-center border-b border-gray-300">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {tests.map((test, index) => (
                    <tr key={test.id} className="text-slate-700">
                      <td className="px-6 py-4 border-b border-gray-300">{index + 1}</td>
                      <td className="px-6 py-4 border-b border-gray-300">{test.type}</td>
                      <td className="px-6 py-4 border-b border-gray-300">{test.description}</td>
                      <td className="px-6 py-4 border-b border-gray-300">
                        <div className="flex justify-center gap-4">
                          <img
                            className="w-6 h-6 cursor-pointer"
                            src={EditIcon}
                            alt="Edit"
                            onClick={() => handleEdit(test.id)}
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
          </div>
        </div>

       
        <PreviousChart />
      </div>
    </section>
  );
};
