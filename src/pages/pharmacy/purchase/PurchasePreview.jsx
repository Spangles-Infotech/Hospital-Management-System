import React from "react";
import { PharmacyPreviewInfo } from "../../../Component/preview content/PharmacyPreviewInfo";
import { supplierPurchasePreviewField } from "../../../utils/variable/supplier";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useFetchData } from "../../../hooks/useFetchData";
import { useCommon } from "../../../hooks/useCommon";
import { getDateFromISO } from "../../../utils/functions/function";
import axios from "axios";
import { fetch } from '../../../api/fetch';
const PurchasePreview = () => {
  const [allBatchNumbers, setAllBatchNumbers] = useState({});

  const { id } = useParams();
  const navigate = useNavigate();
  // const {location} = useCommon()
  const location = useLocation(); 
  const { data, isLoading, error } = useFetchData(id ? `/get-purchase/${id}`: null);

useEffect(() => {
  if (data?.medicines) {
    data.medicines.forEach((medicine) => {
      if (!medicine || !medicine.medicineName) {
        return; // Skip if medicineName is missing
      }

      const fetchBatchNumbers = async () => {
        try {
          // Use the configured fetch instance with the correct API endpoint
          const response = await fetch.get(`get-all-batch-numbers/${medicine.medicineName}`);

          if (response.data.length != 0) {
            setAllBatchNumbers((prev) => {
              const newState = {
                ...prev,
                [medicine.medicineName]: response.data.data,
              };
              console.log(`Updated allBatchNumbers for ${medicine.medicineName}:`, newState[medicine.medicineName]);
              return newState;
            });
          }
        } catch (err) {
          console.error(`Failed to fetch batch numbers for ${medicine.medicineName}:`, err);
        }
      };

      fetchBatchNumbers(); // Call the async function
    });
  }
}, [data]);

  const tableHeader =[ "MEDICINE NAME", "HSN", "MEDICINE CATEGORY", "BATCH NO.", "SIMILAR BATCH NO.", "EXP DATE", "QTY","FREE", "UNIT","T.QTY", "P.RATE", "MRP", "DIS%", "GST%", "AMOUNT"]


  const handleClickBack = ()=>{
    if(location.pathname.startsWith("/admin/pharmacy/supplier")){
      navigate("/admin/pharmacy/suppliers")
    }else{
      navigate("/admin/pharmacy/reportspurchase")
    }
  }

  return (
    <section className="p-4">
      <img
        onClick={handleClickBack}
        src={require("../../../assests/left-arrow.png")}
        alt="left-arrow"
        className="size-[25px] object-contain mb-6"
      />
      <PharmacyPreviewInfo
        fields={supplierPurchasePreviewField}
        data={data}
        isPreviewWithIcon={false}
      />

      <div className="  bg-white text-stone-600 w-full  mt-8 py-4 ">
        <table className="w-full border-collapse  ">
          <thead>
            <tr className="text-left">
              {tableHeader.map((header, index) => (
                <th key={index} className="px-4 py-4 border border-[#1F9CC6]">
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data?.medicines?.map((medicine, index) => (
              <tr
                key={index}
                className="border rounded-[15px] border-[#1F9CC6] text-center"
              >
                <td className="px-4 py-3 border border-[#1F9CC6] ">
                  {medicine?.medicineName}
                </td>
                <td className="px-4 py-3 border border-[#1F9CC6]">
                  {medicine?.hsnCode}
                </td>
                <td className="px-4 py-3 border border-[#1F9CC6]">
                  {medicine?.medicineCategory || "-"}
                </td>
                <td className="px-4 py-3 border border-[#1F9CC6]">
                  {medicine?.batchNo}
                </td>
                <td className="px-4 py-3 border border-[#1F9CC6]">
                  {allBatchNumbers[medicine?.medicineName]?.filter(batch => batch !== medicine?.batchNo).join(', ') || '-'}
                </td>
                <td className="px-4 py-3 border border-[#1F9CC6]">
                  {getDateFromISO(medicine?.expDate)}
                </td>
                <td className="px-4 py-3 border border-[#1F9CC6]">
                  {medicine?.quantity}
                </td>
                <td className="px-4 py-3 border border-[#1F9CC6]">
                  {medicine?.free}
                </td>
                <td className="px-4 py-3 border border-[#1F9CC6]">
                  {medicine?.unit}
                </td>
                <td className="px-4 py-3 border border-[#1F9CC6]">
                  {medicine?.availableQuantity}
                </td>
                <td className="px-4 py-3 border border-[#1F9CC6]">
                  {medicine?.purchaseRate?.toFixed(2)}
                </td>
                <td className="px-4 py-3 border border-[#1F9CC6]">
                  {medicine?.mrp?.toFixed(2)}
                </td>
                <td className="px-4 py-3 border border-[#1F9CC6]">
                  {medicine?.discount}%
                </td>
                <td className="px-4 py-3 border border-[#1F9CC6]">
                  {medicine?.gst}%
                </td>
                <td className="px-4 py-2 border border-[#1F9CC6]">
                  {medicine?.amount?.toFixed(2)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="border-[#1F9CC6] border  rounded-[15px]  mt-5 w-[40%] bg-white place-self-end">
        <div className="flex justify-between  px-4 py-4">
          <div className="flex gap-3">
            {/* <input type="checkbox" checked={data?.isRoundOff || false} /> */}
            <p className="text-slate-700 font-medium ">Rounded off</p>
          </div>
          <p className="text-orange-500">{data?.roundOff || 0}</p>
        </div>
        <div className="flex justify-between mt-3 px-4">
          <p className="text-stone-600">Gross Amount</p>
          <p className="text-orange-500">{data?.grossAmount}</p>
        </div>
        <div className="flex justify-between mt-3 px-4">
          <p className="text-stone-600">Total Discount </p>
          <p className="text-orange-500">{data?.totalDiscountAmount || "-"}</p>
        </div>
        <div className="flex justify-between mt-3 px-4">
          <p className="text-stone-600">GST </p>
          <p className="text-orange-500">{data?.totalGstAmount}</p>
        </div>

        <div className="w-full h-[1px] bg-[#1F9CC6] mt-4"></div>
        <div className="flex justify-between text-lg py-3 px-3">
          <p className="text-stone-600 font-medium">New Amount</p>
          <p className="text-green-700 font-medium">{data?.netAmount}</p>
        </div>
      </div>
    </section>
  );
};

export default PurchasePreview;
