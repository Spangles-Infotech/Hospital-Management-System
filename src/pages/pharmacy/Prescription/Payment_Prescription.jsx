import React from "react";
import { useForm } from "../../../context/FormContext";
import { Dropdown } from "../../../Component/Fields/Dropdown";
import { Table } from "../../../Component/common/Table/Table";
import { historyTableHeading, historyValue } from "../../../utils/variable/purchase";

const Payment_Prescription = ({handleClick, handleDiscard, isEdit, id, isHistory=false, isDiscount=false}) => {
  
  const {formData, handleChange, historyData, handleSavePurchase} = useForm()
  const paymentOptions = ["Cash", "Credit/Debit Card", "UPI", "Net Banking"]

  return (
    <div className="mt-5">
      <div className="flex  flex-col    ">
        <div>
        {
          isHistory ?
            <div className="  p-2 bg-white rounded-lg">
              <Table tableHead={historyTableHeading} tableValue={historyData} isLoading={false}/>
              
            </div>
          :
          <div className="border-primary border rounded-[15px] mt-5 w-[400px]  h-[150px] p-6 bg-white">
            <Dropdown value={formData} options={paymentOptions} onChange={handleChange} label={"Payment Type"} name={"paymentType"} isBorder={true} />
          </div>
        } 
        </div>
        <div className={`${!isDiscount ? "hidden": ""}`}>
          <div className="border-primary border rounded-[15px] mt-5 w-[350px]   p-6 h-[170px] bg-white">
            <p className="text-lg text-stone-600 font-medium">Discount</p>
            <div className="flex flex-col">
              <select
                value={formData?.discount}
                onChange={handleChange}
                name="discount"
                className="w-full  border border-stone-400 ouline-none  rounded-lg mt-3  text-stone-600 px-4 py-2"
              >
                <option value="discount">Discount</option>
                <option value="10">10%</option>
                <option value="25">25%</option>
                <option value="15">15%</option>
              </select>
            </div>
          </div>
        </div>
        <div className="border-primary  ml-[60%]  border rounded-[15px]  mt-5 w-[40%] bg-white" >
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
      </div>
      <div className="flex gap-7 items-center justify-end p-5 mt-10">
        {/* <p 
          className="text-red-600 cursor-pointer text-lg" 
          onClick={handleDiscard}
        >
          Discard
        </p> */}
        <button
          type="submit"
          className="w-[20%] bg-primary p-2 text-white rounded-lg hover:bg-primary transition text-lg"
          onClick={(e)=>handleClick(e, id, isEdit)}
        >
          {isEdit ? "Edit " : "Save "}
        </button>
        <button
          type="submit"
          className="w-[20%] bg-primary p-2 text-white rounded-lg hover:bg-primary transition text-lg"
          onClick={(e)=>handleClick(e, id, isEdit)}
        >
         print
        </button>
      </div>
    </div>
  );
};

export default Payment_Prescription;
