import React, { useEffect } from "react";
import MedicinePrescription from "./MedicinePrescription";
import PatientDetail from "./PatientDetail";
import { Print } from "../../../Component/common/Print";
import { Table } from "../../../Component/common/Table/Table";
import { PrescriptionTableHeading, medicineDetailTableHeading } from "../../../utils/variable/prescriptions";
import Payment_Prescription from "./Payment_Prescription";
import { useParams } from "react-router-dom";
import { usePrescription } from "../../../hooks/usePrescription";
import { useStock } from "../../../hooks/useStock";
import { useFetchData } from "../../../hooks/useFetchData";
import { useForm } from "../../../context/FormContext";

const PrescriptionPreview = ({ visibleComponents = ["PaymentType",  "Total"] }) => {

  const {id} = useParams()
  const {currentMedicalIndex, medicineQuery, setFormData} = useForm()
  const {formData, getPrescriptionDetail, handlePostPrescriptionData, handleBackToPrescription} = usePrescription()
  const {categoryData, medicineNameData, medicineNamerefetch, } = useStock()
  const {data:medicineData, isLoading} = useFetchData("/get-all-stock", `search=${medicineQuery[currentMedicalIndex]?.medicineName || ""}`)
  useEffect(()=>{
    if(id){
      getPrescriptionDetail(id)
      setFormData({appointmentId:id})
    }
  },[id])

  const tableHeader = ["MEDICINE NAME", "MEDICINE CATEGORY", "BATCH NO", "EXP DATE", "QTY", "AVA QTY", "SALE PRICE", "DISCOUNT", "GST", "AMOUNT"]
  const fields = [
    { label:"", name:"medicineName", "type":"select", options:medicineNameData},
    { label:"", name:"medicineCategory", "type":"select", "options":categoryData},
    { label: "", name:"batchNumber", "type": "text"},
    { label: "", name:"expiryDate", "type": "date"},
    { label: "", name:"quantity", "type": "number"},
    { label: "", name:"totalQuantity", "type": "number"},
    { label: "", name:"salePrice", "type": "number"},
    { label: "", name:"discount", "type": "number"},
    { label: "", name:"gst", "type": "number"},
    { label: "", name:"amount", "type": "number"},
  ]

  const data = [
    { medicineCategory: "Tablet", medicineName: "Aspirin", batchNumber: "1234", expiredDate: "2025-12-31", quantity: "10", availableQuantity: "5", salesPrice: "50", discount: "10%", gst: "5%", amount: "45" },
    { medicineCategory: "Syrup", medicineName: "Cough Syrup", batchNumber: "5678", expiredDate: "2026-03-20", quantity: "20", availableQuantity: "15", salesPrice: "30", discount: "5%", gst: "10%", amount: "25" },
  ];

  const tableHeader1=["SI. No", "Fee Name", "Amount"]
  const fields1 =[
    {label:"", name:"sino","type":"text"},
    {label:"",name:"feeName","type":"text"},
    {label:"",name:"amount","type":"number"},
  ]

  const data1 = [
    {sino:"01", feeName:"Doctor fee", amount:"300.00"},
    {sino:"02", feeName:"Lab fee", amount:"200.00"}
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
      <div className=" border border-primary mt-10 rounded-lg p-0.5"><Table tableHead={PrescriptionTableHeading} tableValue={formData?.["prescriptions"]}/></div>
      <MedicinePrescription tableHeader={tableHeader} fields={fields} data={data} isPres={true} title={"medicines"} />
      {
        medicineQuery[currentMedicalIndex]?.medicineName && medicineData?.length > 0 &&
        <div className="mt-[50px]">
          <Table tableHead={medicineDetailTableHeading} tableValue={medicineData} />
        </div>
      }
      <MedicinePrescription tableHeader={tableHeader1} fields={fields1} data={data1} title={"bills"}/>
      <Payment_Prescription id={id} handleClick={handlePostPrescriptionData}  handleDiscard={handleBackToPrescription}/>
    </section>
  );
};

export default PrescriptionPreview;

