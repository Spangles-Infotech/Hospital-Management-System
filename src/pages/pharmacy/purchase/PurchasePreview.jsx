import React from 'react'
import { PharmacyPreviewInfo } from '../../../Component/preview content/PharmacyPreviewInfo'
import { supplierPurchasePreviewData, supplierPurchasePreviewField } from '../../../utils/variable/supplier'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
const PurchasePreview = () => {
  const navigate = useNavigate()

  const [medicines, setMedicines] = useState([
    {
      category: "TABLET",
      name: "OXYWIN 100MG",
      hsn: "345627937",
      batchNo: "123PK906",
      expDate: "12/26",
      quantity: 10,
      unit: "Tab",
      price: 12345.0,
      gst: "12%",
      total: 3546.0,
    },
    {
      category: "SYRUP",
      name: "COUGH SYRUP",
      hsn: "875627234",
      batchNo: "456TY908",
      expDate: "11/25",
      quantity: 5,
      unit: "Bottle",
      price: 950.0,
      gst: "15%",
      total: 142.5,
    },
  ]);

  return (
    <section className='p-4'>
          <img 
          onClick={()=>navigate("/admin/pharmacy/purchase")}
          src={require("../../../assests/left-arrow.png")} alt="left-arrow" className="size-[25px] object-contain mb-6" />
      <PharmacyPreviewInfo fields={supplierPurchasePreviewField} data={supplierPurchasePreviewData} isPreviewWithIcon={false}/>
      
      <div className="  bg-white text-stone-600 w-full  mt-8 py-4 ">
      <table className="w-full border-collapse  ">
      
        <thead >
          <tr className="text-left">
            {[
              "MEDICINE CATEGORY",
              "MEDICINE NAME",
              "HSN",
              "BATCH No.",
              "EXP DATE",
              "QTY",
              "AVA. QTY",
              "PRICE",
              "GST",
              "AMOUNT",
            ].map((header, index) => (
              <th key={index} className="px-4 py-4 border border-primary">{header}</th>
            ))}
          </tr>
        </thead>

        
        <tbody>
          {medicines.map((medicine, index) => (
            <tr key={index} className="border border-primary text-center">
              <td className="px-4 py-3 border border-primary ">
                <select
                  value={medicine.category}
                  className="outline-none px-2 py-2"
                >
                  <option>TABLET</option>
                  <option>SYRUP</option>
                </select>
              </td>
              <td className="px-4 py-3 border border-primary">{medicine.name}</td>
              <td className="px-4 py-3 border border-primary">{medicine.hsn}</td>
              <td className="px-4 py-3 border border-primary">{medicine.batchNo}</td>
              <td className="px-4 py-3 border border-primary">{medicine.expDate}</td>
              <td className="px-4 py-3 border border-primary">{medicine.quantity}</td>
              <td className="px-4 py-3 border border-primary">
                <select value={medicine.unit} className=" outline-none px-2 py-1">
                  <option>Tab</option>
                  <option>Pieces</option>
                  <option>Bottle</option>
                </select>
              </td>
              <td className="px-4 py-3 border border-primary">{medicine.price.toFixed(2)}</td>
              <td className="px-4 py-3 border border-primary">
                <select value={medicine.gst} className="outline-none px-2 py-1">
                  <option>12%</option>
                  <option>15%</option>
                  <option>20%</option>
                </select>
              </td>
              <td className="px-4 py-2 border border-primary">{medicine.total.toFixed(2)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  


<div className="border-primary border  rounded-[15px]  mt-5 w-[40%] bg-white place-self-end" >
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