import React from "react";
import PaymentType from "../../../Component/PaymentInfo/PaymentType";
import DiscountDiv from "../../../Component/PaymentInfo/DiscountDiv";
import Total from "../../../Component/PaymentInfo/Total";

const PaymentPrescription = ({ visibleComponents = ["PaymentType", "DiscountDiv", "Total"] }) => {
  return (
    <div className="mt-5">
      <div className="flex justify-between gap-4">
        {visibleComponents.includes("PaymentType") && <PaymentType />}
        {visibleComponents.includes("DiscountDiv") && <DiscountDiv />}
        {visibleComponents.includes("Total") && <Total />}
      </div>
      <div className="flex gap-7 items-center justify-end p-5 mt-10">
        <p className="text-red-600 cursor-pointer text-lg">Discard</p>
        <button
          type="submit"
          className="w-[20%] bg-primary p-2 text-white rounded-lg hover:bg-primary transition text-lg"
        >
          Save & Print
        </button>
      </div>
    </div>
  );
};

export default PaymentPrescription;
