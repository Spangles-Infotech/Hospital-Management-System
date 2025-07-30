import React from "react";
import PaymentType from "../../../Component/PaymentInfo/PaymentType";
import DiscountDiv from "../../../Component/PaymentInfo/DiscountDiv";
import Total from "../../../Component/PaymentInfo/Total";

const PaymentPrescription = ({ visibleComponents = ["PaymentType", "DiscountDiv", "Total"] }) => {
  const visibleElements = [
    visibleComponents.includes("PaymentType") && <PaymentType key="PaymentType" />,
    visibleComponents.includes("DiscountDiv") && <DiscountDiv key="DiscountDiv" />,
    visibleComponents.includes("Total") && <Total key="Total" />,
  ].filter(Boolean); // Remove falsy values (undefined, false)

  // Determine styles based on the number of visible components
  const containerStyle =
    visibleElements.length === 3
      ? "flex justify-between gap-4"
      : visibleElements.length === 2
      ? "flex justify-end gap-4"
      : "flex justify-center";

  return (
    <div className="mt-5">
      <div className={containerStyle}>{visibleElements}</div>
      <div className="flex gap-7 items-center justify-end p-5 mt-10">
        <p className="text-red-600 cursor-pointer text-lg">Discard</p>
        <button
          type="submit"
          className="w-[20%] bg-[#1F9CC6] p-2 text-white rounded-lg hover:bg-[#1F9CC6] transition text-lg"
        >
          Save & Print
        </button>
      </div>
    </div>
  );
};

export default PaymentPrescription;
