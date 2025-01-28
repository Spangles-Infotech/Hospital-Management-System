import React from "react";

const Payment_Prescription = () => {
  return (
    <div className="mt-5">
      <div className="flex justify-between">
        <div>
          <div className="border-primary border-2 rounded-[15px] mt-5 w-[400px]  h-[150px] p-6 bg-white">
            <p className="text-lg text-stone-600">Payment Type</p>
            <div className="flex flex-col">
              <select className="w-full h-[50px] border border-stone-300 ouline-none  rounded-lg mt-3  text-stone-600">
                <option value="">Select Payment Method</option>
                <option value="cash">Cash</option>
                <option value="card">Credit/Debit Card</option>
                <option value="upi">UPI</option>
                <option value="net-banking">Net Banking</option>
              </select>
            </div>
          </div>
        </div>

        <div className="border-primary border-2 rounded-[15px] p-5 mt-5 w-[40%] bg-white" >
          <div className="flex justify-between p-2 -ml-3">
            <div className="flex gap-3">
              <input type="checkbox" />
              <p className="text-slate-700 font-medium">Rounded off</p>
            </div>
            <p className="text-orange-500">-0.40</p>
          </div>
          <div className="flex justify-between mt-3">
            <p className="text-stone-600">GST%</p>
            <p className="text-orange-500">1376.40</p>
          </div>
          <div className="flex justify-between mt-3">
            <p className="text-stone-600">Discount</p>
            <p className="text-red-600">-300</p>
          </div>
          <div className="w-full h-[1px] bg-primary mt-4"></div>
          <div className="flex justify-between text-lg p-2">
            <p className="text-stone-600 font-medium">New Amount</p>
            <p className="text-green-700 font-medium">9497.00</p>
          </div>
        </div>
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

export default Payment_Prescription;
