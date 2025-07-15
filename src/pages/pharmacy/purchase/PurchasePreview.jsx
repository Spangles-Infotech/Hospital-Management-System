import React from "react";
import { PharmacyPreviewInfo } from "../../../Component/preview content/PharmacyPreviewInfo";
import { supplierPurchasePreviewField } from "../../../utils/variable/supplier";
import { useNavigate, useParams } from "react-router-dom";
import { useFetchData } from "../../../hooks/useFetchData";
import { useCommon } from "../../../hooks/useCommon";
import { getDateFromISO } from "../../../utils/functions/function";
const PurchasePreview = () => {

  const { id } = useParams();
  const navigate = useNavigate();
  const {location} = useCommon()
  const { data, isLoading, error } = useFetchData(id ? `/get-purchase/${id}`: null);
  const tableHeader =[ "MEDICINE NAME", "HSN", "MEDICINE CATEGORY", "BATCH NO.", "EXP DATE", "QTY","FREE", "UNIT","T.QTY", "P.RATE", "MRP", "DIS%", "GST%", "AMOUNT"]


  const handleClickBack = ()=>{
    if(location.pathname.startsWith("/admin/pharmacy/supplier")){
      navigate("/admin/pharmacy/suppliers")
    }else{
      navigate("/admin/pharmacy/purchaseTable")
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
                <th key={index} className="px-4 py-4 border border-primary">
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data?.medicines?.map((medicine, index) => (
              <tr
                key={index}
                className="border rounded-[15px] border-primary text-center"
              >
                <td className="px-4 py-3 border border-primary ">
                  {medicine?.medicineName}
                </td>
                <td className="px-4 py-3 border border-primary">
                  {medicine?.hsnCode}
                </td>
                <td className="px-4 py-3 border border-primary">
                  {medicine?.medicineCategory || "-"}
                </td>
                <td className="px-4 py-3 border border-primary">
                  {medicine?.batchNo}
                </td>
                <td className="px-4 py-3 border border-primary">
                  {getDateFromISO(medicine?.expDate)}
                </td>
                <td className="px-4 py-3 border border-primary">
                  {medicine?.quantity}
                </td>
                <td className="px-4 py-3 border border-primary">
                  {medicine?.free}
                </td>
                <td className="px-4 py-3 border border-primary">
                  {medicine?.unit}
                </td>
                <td className="px-4 py-3 border border-primary">
                  {medicine?.availableQuantity}
                </td>
                <td className="px-4 py-3 border border-primary">
                  {medicine?.purchaseRate?.toFixed(2)}
                </td>
                <td className="px-4 py-3 border border-primary">
                  {medicine?.mrp?.toFixed(2)}
                </td>
                <td className="px-4 py-3 border border-primary">
                  {medicine?.discount}%
                </td>
                <td className="px-4 py-3 border border-primary">
                  {medicine?.gst}%
                </td>
                <td className="px-4 py-2 border border-primary">
                  {medicine?.amount?.toFixed(2)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="border-primary border  rounded-[15px]  mt-5 w-[40%] bg-white place-self-end">
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

        <div className="w-full h-[1px] bg-primary mt-4"></div>
        <div className="flex justify-between text-lg py-3 px-3">
          <p className="text-stone-600 font-medium">New Amount</p>
          <p className="text-green-700 font-medium">{data?.netAmount}</p>
        </div>
      </div>
    </section>
  );
};

export default PurchasePreview;
