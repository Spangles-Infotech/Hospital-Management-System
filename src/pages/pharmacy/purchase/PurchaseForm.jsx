import React from 'react'
import MedicinePrescription from '../Prescription/MedicinePrescription'
import Payment_Prescription from '../Prescription/Payment_Prescription'
import { PharmacyPreviewInfo } from '../../../Component/preview content/PharmacyPreviewInfo'
import { NewPurchaseField } from '../../../utils/variable/purchase'

const PurchaseForm = () => {

  const tableHeader =["MEDICINE CATEGORY", "MEDICINE NAME", "HSN", "BATCH NO.", "EXP DATE", "QTY|AVA.QTY", "PRICE", "GST", "AMOUNT" ]
  const fields=[
    {label:"", name:"medicineCategory", "type":"text", "options":["Tablet","Medicine","Syrup"] },
    { label:"", name:"medicineName", "type":"text"},
    { label:"", name:"hsn", "type":"text"},
    { label: "", name:"batchNumber", "type": "text"},
    { label: "", name:"expiredDate", "type": "text"},
    {label:"", name:"qunatity", "type":"text"},
    {label:"", name:"price", "type":"text"},
    {label:"", name:"gst", "type":"select", "options":["12%","10%","15%"]},
    {labe:"", name:"amount","type":"text"}

  ]
  const data = [
    { medicineCategory: "Tablet", medicineName: "Aspirin", batchNumber: "1234", expiredDate: "2025-12-31", quantity: "10", availableQuantity: "5", salesPrice: "50", discount: "10%", gst: "5%", amount: "45" },
    { medicineCategory: "Syrup", medicineName: "Cough Syrup", batchNumber: "5678", expiredDate: "2026-03-20", quantity: "20", availableQuantity: "15", salesPrice: "30", discount: "5%", gst: "10%", amount: "25" },
  ];

  



  return (
    <section className='p-6'>
    

  <PharmacyPreviewInfo fields={NewPurchaseField} isForm={true}/>
        

         
       

      <MedicinePrescription tableHeader={tableHeader} fields={fields} data={data} isEdit={true} />
      <Payment_Prescription/>

    </section>
  )
}

export default PurchaseForm