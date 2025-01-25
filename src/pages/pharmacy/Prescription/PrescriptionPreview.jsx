import React from "react";
import { FaArrowLeftLong } from "react-icons/fa6";

import print from "../../../assests/Print.png";
import MedicinePrescription from "./MedicinePrescription";
import Payment_Prescription from "./Payment_Prescription";
import PatientDetail from "./PatientDetail";


const PrescriptionPreview = () => {


  return (
    <section className="p-7">
      <p className="text-2xl text-stone-700 font-medium">Prescription</p>

      <div className="flex justify-between">
        <FaArrowLeftLong className="text-2xl text-stone-600 mt-10 " />
        <div className="flex border-dotted border border-primary text-primary place-self-center p-1 gap-2 rounded-lg mt-4 w-[100px]">
          <img className="w-8 h-8" src={print} alt="Print" />
          <p>Print</p>
        </div>
      </div>

    
      <PatientDetail/>
<MedicinePrescription/>
<Payment_Prescription/>

    </section>
  );
};

export default PrescriptionPreview;
