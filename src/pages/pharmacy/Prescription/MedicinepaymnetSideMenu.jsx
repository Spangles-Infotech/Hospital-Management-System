import { useForm } from "../../../context/FormContext"

const MedicinepaymnetSideMenu = () => {
  const {formData, handleChange, historyData, handleSavePurchase} = useForm()

  return (
    <div className="border-primary ml-2   border rounded-[15px]  mt-1 w-[40%] bg-white" >
    {/* <div className="flex justify-between px-4 py-3">
      <div className="flex gap-3">
        <input type="checkbox" value={formData?.["isRoundOff"]} name="isRoundOff" onChange={handleChange} />
        <p className="text-slate-700 font-medium ">Rounded off</p>
      </div>
      <p className="text-orange-500">-{formData?.["roundOff"]}</p>
    </div> */}
    <div className="flex justify-between mr-2 px-4 py-2">
      <p className="text-stone-600">Gross Amount</p>
      <p className="text-red-600">{formData?.["grossAmount"]}</p>
    </div>
    <div className="flex justify-between px-4 py-2">
      <p className="text-stone-600">Total Discount</p>
      <p className="text-orange-500">{formData?.["totalDiscountAmount"]}</p>
    </div>
    <div className="flex justify-between px-4 py-2">
      <p className="text-stone-600">GST%</p>
      <p className="text-orange-500">{formData?.["totalGstAmount"]}</p>
    </div>
    <div className="flex justify-between px-4 py-2">
      <p className="text-stone-600">Adjustment Value</p>
      <input
        type="number"
        name="adjustmentValue"
        value={formData?.["adjustmentValue"] || 0}
        onChange={handleChange}
        className="text-orange-500 text-right border-none focus:ring-0 focus:outline-none w-24"
      />
    </div>
    <div className="w-full h-[1px] bg-primary mt-4"></div>
    <div className="flex justify-between text-lg px-3 py-3">
      <p className="text-stone-600 font-medium">Net Amount</p>
      <p className="text-green-700 font-medium">{formData?.["netAmount"]}</p>
    </div>
  </div>
  )
}

export default MedicinepaymnetSideMenu