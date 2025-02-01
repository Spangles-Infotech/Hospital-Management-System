import React from 'react'
import MedicinePrescription from '../Prescription/MedicinePrescription'
import { PharmacyPreviewInfo } from '../../../Component/preview content/PharmacyPreviewInfo'
import { supplierPurchasePreviewData, supplierPurchasePreviewField } from '../../../utils/variable/supplier'
import { useNavigate } from 'react-router-dom'
const PurchasePreview = () => {
  const navigate = useNavigate()

  return (
    <section className='p-4'>
          <img 
          onClick={()=>navigate("/admin/pharmacy/purchase")}
          src={require("../../../assests/left-arrow.png")} alt="left-arrow" className="size-[25px] object-contain mb-6" />
      <PharmacyPreviewInfo fields={supplierPurchasePreviewField} data={supplierPurchasePreviewData} isPreviewWithIcon={false}/>
{/* <MedicinePrescription/> */}

<div className="border-primary border rounded-[15px]  mt-5 w-[40%] bg-white place-self-end" >
          <div className="flex justify-between  px-4 py-4">
            <div className="flex gap-3">
              <input type="checkbox" />
              <p className="text-slate-700 font-medium ">Rounded off</p>
            </div>
            <p className="text-orange-500">-0.40</p>
          </div>
          <div className="flex justify-between mt-3 px-4">
            <p className="text-stone-600">GST%</p>
            <p className="text-orange-500">1376.40</p>
          </div>
          
          <div className="w-full h-[1px] bg-primary mt-4"></div>
          <div className="flex justify-between text-lg py-3 px-3">
            <p className="text-stone-600 font-medium">New Amount</p>
            <p className="text-green-700 font-medium">9497.00</p>
          </div>
        </div>

    </section>
  )
}

export default PurchasePreview