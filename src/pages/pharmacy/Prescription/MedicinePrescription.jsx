import React from "react";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import Delete from "../../../assests/Delete.png";

const MedicinePrescription = () => {
  const prescriptions = [
    { category: "TABLE", name: "OXYWIN 100MG", batchNo: "123PK0973", expDate: "10", qty: "10", avaQty: "100", salePrice: "5390.00", discount: "04%", gst: "12%", amount: "368" },
    { category: "TABLE", name: "OXYWIN 100MG", batchNo: "123PK0973", expDate: "10", qty: "10", avaQty: "100", salePrice: "5390.00", discount: "04%", gst: "12%", amount: "368" },
    { category: "TABLE", name: "OXYWIN 100MG", batchNo: "123PK0973", expDate: "10", qty: "10", avaQty: "100", salePrice: "5390.00", discount: "04%", gst: "12%", amount: "368" },
    { category: "TABLE", name: "OXYWIN 100MG", batchNo: "123PK0973", expDate: "10", qty: "10", avaQty: "100", salePrice: "5390.00", discount: "04%", gst: "12%", amount: "368" },
    { category: "TABLE", name: "OXYWIN 100MG", batchNo: "123PK0973", expDate: "10", qty: "10", avaQty: "100", salePrice: "5390.00", discount: "04%", gst: "12%", amount: "368" },
  ];

  return (
    <section className="mt-10">
      <div className="border-2 border-primary rounded-[15px] overflow-hidden text-stone-500 bg-white">
        <table className="w-full border-collapse">
          <thead>
            <tr>
              <th className="p-4 text-left border-b-2 border-r-2 border-primary">MEDICINE CATEGORY</th>
              <th className="p-4 text-left border-b-2 border-r-2 border-primary">MEDICINE NAME</th>
              <th className="p-4 text-left border-b-2 border-r-2 border-primary">BATCH NO</th>
              <th className="p-4 text-left border-b-2 border-r-2 border-primary">EXP DATE</th>
              <th className="p-4 text-left border-b-2 border-r-2 border-primary">QTY | AVA QTY</th>
              <th className="p-4 text-left border-b-2 border-r-2 border-primary">SALE PRICE</th>
              <th className="p-4 text-left border-b-2 border-r-2 border-primary">DISCOUNT</th>
              <th className="p-4 text-left border-b-2 border-r-2 border-primary">GST</th>
              <th className="p-4 text-left border-b-2 border-r-0 border-primary">AMOUNT</th>
            </tr>
          </thead>

          <tbody>
            {prescriptions.map((prescription, index) => (
              <tr key={index} className="border-t border-b border-primary text-stone-600">
                <td className="p-3 flex items-center gap-5 border-r border-primary ml-10">
                  {prescription.category} <MdOutlineKeyboardArrowDown />
                </td>
                <td className="p-3 border-r border-primary text-center">{prescription.name}</td>
                <td className="p-3 border-r border-primary text-center">{prescription.batchNo}</td>
                <td className="p-3 border-r border-primary text-center">{prescription.expDate}</td>
                <td className="p-3 flex gap-3 border-r border-primary ml-7">
                  <span>{prescription.qty}</span> | <span>{prescription.avaQty}</span>
                </td>
                <td className="p-3 border-r border-primary text-center">{prescription.salePrice}</td>
                <td className="p-3 border-b border-r border-primary text-center">
                  <div className="flex items-center gap-3 ml-5">
                    {prescription.discount} <MdOutlineKeyboardArrowDown />
                  </div>
                </td>
                <td className="p-3 border-b border-r border-primary text-center">
                  <div className="flex items-center gap-3 text-center">
                    {prescription.gst} <MdOutlineKeyboardArrowDown />
                  </div>
                </td>
                <td className="p-3 border-r-0 border-primary">
                  <div className="flex items-center gap-3 ml-3">
                    <span>{prescription.amount}</span>
                    <img className="w-6 h-6 cursor-pointer" src={Delete} alt="Delete" />
                  </div>
                </td>
              </tr>
            ))}



<tr className="flex justify-between items-center">
 
  <td className="text-center p-4">
    <button className="px-6 py-2 border-2 border-primary text-primary rounded-md ml-10">
      Add Row
    </button>
  </td>

 
</tr>

           
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default MedicinePrescription;
