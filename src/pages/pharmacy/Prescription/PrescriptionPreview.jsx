import React from "react";
import MedicinePrescription from "./MedicinePrescription";
import PatientDetail from "./PatientDetail";
import { Print } from "../../../Component/common/Print";
import PaymentPrescription from "./PaymentPrescription";


const PrescriptionPreview = ({ visibleComponents = ["PaymentType",  "Total"] }) => {

  const tableHeader = ["MEDICINE CATEGORY", "MEDICINE NAME", "BATCH NO", "EXP DATE", "QTY | AVA QTY", "SALE PRICE", "DISCOUNT", "GST", "AMOUNT"]
  const fields = [
    { label:"", name:"medicineCategory", "type":"select", "options":["Tablet", "Medicine", "Syrup"]},
    { label:"", name:"medicineName", "type":"text"},
    { label: "", name:"batchNumber", "type": "text"},
    { label: "", name:"expiredDate", "type": "text"},
    { label: "", name:"quantity", "type": "text"},
    { label: "", name:"salesPrice", "type": "text"},
    { label: "", name:"discount", "type": "select", "options": ["5%", "10%", "15%", "20%"]},
    { label: "", name:"gst", "type": "select", "options": ["5%", "10%", "15%", "20%"]},
    { label: "", name:"amount", "type": "text"},
  ]

  const data = [
    { medicineCategory: "Tablet", medicineName: "Aspirin", batchNumber: "1234", expiredDate: "2025-12-31", quantity: "10", availableQuantity: "5", salesPrice: "50", discount: "10%", gst: "5%", amount: "45" },
    { medicineCategory: "Syrup", medicineName: "Cough Syrup", batchNumber: "5678", expiredDate: "2026-03-20", quantity: "20", availableQuantity: "15", salesPrice: "30", discount: "5%", gst: "10%", amount: "25" },
  ];

  return (
    <section className="p-7">
      <div className="flex flex-col gap-[20px]">
        <p className="text-2xl text-stone-700 font-medium">Prescriptions</p>
        <div className="flex justify-between ">
          <img src={require("../../../assests/left-arrow.png")} alt="left-arrow" className="size-[25px] object-contain" />
          <Print />
        </div>
      </div>
      <PatientDetail/>
      <MedicinePrescription tableHeader={tableHeader} fields={fields} data={data} />
      <PaymentPrescription   visibleComponents={["PaymentType", "Total"]}/>
    </section>
  );
};

export default PrescriptionPreview;
