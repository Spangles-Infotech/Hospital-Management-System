import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import PatientDetail from "../pharmacy/Prescription/PatientDetail";
import PaymentPrescription from "../pharmacy/Prescription/PaymentPrescription";

const LabPrint = () => {
  const navigate = useNavigate();

  const data = [
    {
      id: "01",
      testName: "Blood Test",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      amount: 300.0,
    },
    {
      id: "02",
      testName: "Xray",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      amount: 4020.0,
    },
    {
      id: "03",
      testName: "Urine Test",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      amount: 550.0,
    },
    {
      id: "04",
      testName: "Xray",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      amount: 370.0,
    },
  ];

  const totalAmount = data.reduce((sum, item) => sum + item.amount, 0);
  

  return (
    <div>
      <div>
        <img
          src={require("../../assests/left-arrow.png")}
          className="size-[25px] object-contain"
          alt="arrow-icon"
          onClick={() => navigate("/admin/labs")}
        />
        <PatientDetail />
        <div className="mt-6 ">
          <thead>
            <tr className=" bg-white font-[600] text-[13px] text-[#505050]">
              <th className="border  border-[#089BAB] rounded-tl-lg px-10 py-2 w-1/4 ">
                Sl. No.
              </th>
              <th className="border border-[#089BAB]  w-1/4">Test Name</th>
              <th className="border border-[#089BAB]  w-1/4">Description</th>
              <th className="border border-[#089BAB] rounded-tr-lg w-1/4">
                Amount
              </th>
            </tr>
          </thead>
          <tbody className="text-center bg-white">
            {data.map((item) => (
              <tr
                key={item.id}
                className="border border-[#089BAB] rounded-bl-lg font-[400] text-[12px] text-[#505050]"
              >
                <td className="border border-[#089BAB]  px-6 py-3 ">{item.id}</td>
                <td className="border border-[#089BAB] px-6 py-3">{item.testName}</td>
                <td className="border border-[#089BAB] px-6 py-3 ">{item.description}</td>
                <td className="border border-[#089BAB] px-6 py-3">
                  {item.amount.toFixed(2)}
                </td>
              </tr>
            ))}
            <tr className="font-[600] text-[14px] text-[#505050]  mr-8">
              <td
                colSpan="3"
                className="border border-[#089BAB] text-right pr-10 py-3 rounded-bl-lg "
              >
                TOTAL
              </td>
              <td className="border border-[#089BAB] text-center rounded-br-lg">
                {totalAmount.toFixed(2)}
              </td>
            </tr>
          </tbody>
        </div>
   
        <div>
          <PaymentPrescription/>
        </div>
      </div>
    </div>
  );
};

export default LabPrint;
