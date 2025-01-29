import React from 'react'
import { useNavigate } from 'react-router-dom'
import { PharmacyPreviewInfo } from '../../../Component/preview content/PharmacyPreviewInfo'
import MedicinePrescription from '../Prescription/MedicinePrescription'
import { supplierPurchasePreviewData, supplierPurchasePreviewField } from '../../../utils/variable/supplier'
import Payment_Prescription from '../Prescription/Payment_Prescription'

export const SupplierPurchase = () => {
    
    const navigate = useNavigate()

  return (
    <section className='p-4 flex flex-col gap-[20px]'>
      <img src={require("../../../assests/left-arrow.png")} className='size-[25px] object-contain' alt='arrow-icon' onClick={()=>navigate("/admin/pharmacy/suppliers")} />
      <PharmacyPreviewInfo fields={supplierPurchasePreviewField} data={supplierPurchasePreviewData} isPreviewWithIcon={false} />
      <MedicinePrescription />
      <Payment_Prescription />
    </section>
  )
}
