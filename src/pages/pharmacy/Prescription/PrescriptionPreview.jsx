import React from "react";
import { FaArrowLeftLong } from "react-icons/fa6";
import MedicinePrescription from "./MedicinePrescription";
import Payment_Prescription from "./Payment_Prescription";
import PatientDetail from "./PatientDetail";
import { Print } from "../../../Component/common/Print";


const PrescriptionPreview = () => {


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
      <MedicinePrescription/>
      <Payment_Prescription/>
    </section>
  );
};

export default PrescriptionPreview;
