import React, { useEffect, useState } from "react";
import MedicinePrescription from "../pharmacy/Prescription/MedicinePrescription";
import PatientDetail from "../pharmacy/Prescription/PatientDetail";
import Payment_Prescription from "../pharmacy/Prescription/Payment_Prescription";
import { useParams } from "react-router-dom";
import { useInPatient } from "../../hooks/useInPatient";
import { useForm } from "../../context/FormContext";


const IpBillingForm = () => {

  const {id} = useParams()
  const  {setFormData} = useForm()
  const {getInPatientBillingById, handleCreateBill, handleBackToIpBilling} = useInPatient()

  useEffect(()=>{
    getInPatientBillingById(id)
    setFormData({appointmentId:id})
  },[id])

  const tableHeader = ["SI. No", "Fee Name", "AMOUNT"];
  const fields = [
    { label: "", name: "sino", type: "text" },
    { label: "", name: "feeName", type: "text" },
    { label: "", name: "amount", type: "number" },
  ];

  return (
    <section>
      <PatientDetail isRoom={true} />
      <MedicinePrescription
        tableHeader={tableHeader}
        fields={fields}
        title={"bills"}
      />
      <Payment_Prescription id={"id"} handleClick={handleCreateBill}  handleDiscard={handleBackToIpBilling} isDiscount={true}/>
    </section>
  );
};

export default IpBillingForm;
