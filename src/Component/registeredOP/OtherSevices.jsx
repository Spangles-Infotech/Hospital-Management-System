import React, { useState, useEffect } from "react"; 
import PreviousChart from "./PreviousChart";
import DeleteIcon from "../../assests/Delete.png";
import EditIcon from "../../assests/editpen.png";
import { useForm } from "../../context/FormContext";

export const OtherSevices = () => {
  const { handleChange, registerOp, handleRegiterOpCancel, formData, handleAddToFormData, handleEditRegisterOP, handleDeleteRegisterOp } = useForm();
  const otherServices = formData.otherServices || []; // Ensure it's always an array

  const [totalAmount, setTotalAmount] = useState(0);

  useEffect(() => {
    const total = otherServices.reduce((acc, s) => acc + Number(s.fee || 0), 0);
    setTotalAmount(total);
  }, [otherServices]); // Recalculate when `otherServices` updates

  return (
    <section className="p-3 font-poppins">
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
                  name="serviceName"
                  placeholder="Service Name"
                  value={registerOp?.otherServices?.serviceName || ""}
                  onChange={(e) =>
                    handleChange(e, "otherServices")
                  }
                  className="mb-4 border border-stone-300 outline-none rounded-md p-2 flex-1 text-stone-600"
                />
                <input
                  type="number"
                  name="fee"
                  placeholder="Fee (e.g., 200)"
                  value={registerOp?.otherServices?.fee || ""}
                  onChange={(e) =>
                    handleChange(e, "otherServices")
                  }
                  className="mb-4 border border-stone-300 outline-none rounded-md p-3 flex-1 text-stone-600"
                />
              </div>

              <div className="py-3">
                <div className="flex justify-center gap-3">
                  <button
                    type="button"
                    onClick={() => {
                      if (registerOp?.otherServices?.id) {
                        handleEditRegisterOP("otherServices", registerOp?.otherServices?.id);
                      } else {
                        handleAddToFormData("otherServices");
                      }
                    }}
                    className="text-white bg-primary px-10 py-2 rounded-full hover:bg-primary/90"
                  >
                    {registerOp?.otherServices?.id ? "Update" : "Add"}
                  </button>
                  <button
                    type="button"
                    onClick={handleRegiterOpCancel}
                    className="text-red-500 border border-stone-400 py-1 px-10 rounded-full"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full mt-8 border-collapse">
                <thead>
                  <tr className="text-slate-700 text-lg">
                    <th className="px-6 py-4 text-left border-b border-gray-300 w-[100px]">S.No</th>
                    <th className="px-6 py-4 text-left border-b border-gray-300">Service Name</th>
                    <th className="px-6 py-4 text-center border-b border-gray-300">Price</th>
                    <th className="px-6 py-4 text-center border-b border-gray-300">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {otherServices.map((service, index) => (
                    <tr key={service.id} className="text-stone-600">
                      <td className="px-6 py-4 border-b border-gray-300">{index + 1}</td>
                      <td className="px-6 py-4 border-b border-gray-300">{service.serviceName}</td>
                      <td className="px-6 py-4 border-b border-gray-300 text-center">
                        Rs. {service.fee}
                      </td>
                      <td className="px-6 py-4 border-b border-gray-300 text-center">
                        <div className="flex justify-center gap-4">
                          <img
                            className="w-6 h-6 cursor-pointer"
                            src={EditIcon}
                            alt="Edit"
                            onClick={() => handleEditRegisterOP("otherServices", index)}
                          />
                          <img
                            className="w-6 h-6 cursor-pointer"
                            src={DeleteIcon}
                            alt="Delete"
                            onClick={() => handleDeleteRegisterOp("otherServices", index)}
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

      <div className="flex items-center gap-2 p-3 ml-[53%]">
        <p className="text-xl text-stone-700 font-medium">Total Amount:</p>
        <p className="text-green-600 font-medium text-xl">Rs. {totalAmount}</p>
      </div>
    </section>
  );
};
