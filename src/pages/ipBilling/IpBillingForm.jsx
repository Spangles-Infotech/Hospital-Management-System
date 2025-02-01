import React, { useState } from 'react';
import PatientDetailIcon from "../../assests/PatientDetailIcon.png";
import Delete from "../../assests/Delete.png";
import MedicinePrescription from '../pharmacy/Prescription/MedicinePrescription';

const InfoRow = ({ label, value, valueClass = "" }) => (
  <div className="flex gap-3 font-medium p-2">
    <p className="text-slate-800 w-[120px]">{label}</p>
    <p className={`${valueClass}`}>{value}</p>
  </div>
);

const IpBillingForm = () => {


  const [paymentType, setPaymentType] = useState("cash");
  const [amountPaid, setAmountPaid] = useState(0);
  const [discount, setDiscount] = useState(0);
  const [billingItems, setBillingItems] = useState([
    { id: 1, name: "Doctor Fee", amount: 300.0 },
    { id: 2, name: "Lab Fee", amount: 300.0 },
    { id: 3, name: "Room Rent", amount: 300.0 },
  ]);

  const calculateTotal = () => {
    return billingItems.reduce((total, item) => total + Number(item.amount), 0);
  };

  const netAmount = calculateTotal() - (calculateTotal() * discount) / 100;




  const patientDetails = [
    { label: "Patient Name", value: "Mathews", valueClass: "text-primary" },
    { label: "Age", value: "10", valueClass: "text-primary" },
    { label: "Gender", value: "Male", valueClass: "text-primary" },
    { label: "Blood Group", value: "O +ive", valueClass: "text-green-600" },
  ];

  const additionalInfo = [
    { label: "Address", value: "10 Main st, Las Vegas, Nagercoil", valueClass: "text-primary" },
    { label: "Phone Number", value: "+91 80698735376", valueClass: "text-primary" },
  ];

  const patientStayInfo = [
    { label: "Admitted On", value: "07-01-2025", valueClass: "text-primary" },
    { label: "Discharge On", value: "10-01-2025", valueClass: "text-primary" },
    { label: "Total no. of Days", value: "2 days", valueClass: "text-primary" },
    { label: "Room No.", value: "02", valueClass: "text-primary" },
    { label: "Symptoms", value: "Fever", valueClass: "text-red-500 bg-red-100 px-4 py-1 rounded-lg" },
  ];

  const tableHeader = ["SI. No,", "Fee Name", "AMOUNT"]
  const fields=[
    { label:"", name:"sino", "type":"text" },
    {label:"", name:"feeName", "type":"text"},
    {label:"",name:"amount","type":"text"},
  ]

  const data =[
    {sino:"01", feeName:"Doctoe Fee", amount:"250"}
  ]


  return (
    <section>
      <div className="border-primary border rounded-[15px] mt-10 bg-white">
        <div>
          <div className="flex justify-between items-center ">
            <div className="flex gap-28 px-5 py-3">
              <div className="flex gap-3 items-center">
                <img className="w-8 h-8" src={PatientDetailIcon} alt="Patient Details" />
                <p className="text-slate-800 font-medium text-xl">Patient Detail</p>
              </div>

              <div className="flex items-center gap-3">
                <p className="text-slate-800 font-medium text-xl">Patient ID:</p>
                <p className="text-green-500 font-medium text-xl">D0B003234</p>
              </div>
            </div>

            <div className="border-l-2 border-cyan-100 absolute ml-[700px] mt-[200px] pl-6">
              {patientStayInfo.map((info, index) => (
                <InfoRow
                  key={index}
                  label={info.label}
                  value={info.value}
                  valueClass={info.valueClass}
                />
              ))}
            </div>
          </div>
        </div>

        <div className="w-[59%] h-[1px] bg-cyan-100 mt-4"></div>

        <div className="flex gap-14 p-5">
          <div>
            {patientDetails.map((detail, index) => (
              <InfoRow
                key={index}
                label={detail.label}
                value={detail.value}
                valueClass={detail.valueClass}
              />
            ))}
          </div>

          <div>
            {additionalInfo.map((info, index) => (
              <InfoRow
                key={index}
                label={info.label}
                value={info.value}
                valueClass={info.valueClass}
              />
            ))}
          </div>
        </div>
      </div>

      <MedicinePrescription tableHeader={tableHeader} fields={fields} data={data}/>

 <div className='flex justify-between mt-5'>
   
<div>
          <div className="border-primary border rounded-[15px] mt-5 w-[350px]   p-6 bg-white">
            <p className="text-lg text-stone-600 font-medium">Payment Type</p>
            <div className="flex flex-col">
              <select 
               value={paymentType}
               onChange={(e) => setPaymentType(e.target.value)}
               className="w-full  border border-stone-400 ouline-none  rounded-lg mt-3  text-stone-600 px-4 py-2">
               <option value="cash">Cash</option>
                <option value="card">Credit/Debit Card</option>
                <option value="upi">UPI</option>
                <option value="net-banking">Net Banking</option>
              </select>

<div className='mt-4 '>
  <p className="text-lg text-stone-600 font-medium">Amount Paid</p>
              <input 
              className='bw-full  border border-stone-400 ouline-none  rounded- mt-3  text-stone-600 px-4 py-2 placeholder:text-stone-400 rounded-md w-[300px]'
              placeholder ='Rs. 00'
              type='text'/>
              </div>
              
            </div>
            
          </div>
        </div>


         
      <div>
          <div className="border-primary border rounded-[15px] mt-5 w-[350px]   p-6 h-[170px] bg-white">
            <p className="text-lg text-stone-600 font-medium">Discount</p>
            <div className="flex flex-col">
              <select 
               value={discount}
               onChange={(e) => setDiscount(Number(e.target.value))}
               className="w-full  border border-stone-400 ouline-none  rounded-lg mt-3  text-stone-600 px-4 py-2">
               <option value="discount">Discount</option>
                <option value="10">10%</option>
                <option value="25">25%</option>
                <option value="15">15%</option>
              </select>


              
            </div>
            
          </div>
        </div>


        <div className="border-primary border rounded-[15px]  mt-3 w-[35%] bg-white" >
          <div className="flex justify-between px-4 py-3">
            <div className="flex gap-3">
              <input type="checkbox" />
              <p className="text-slate-700 font-medium ">Rounded off</p>
            </div>
            <p className="text-orange-500">-0.40</p>
          </div>
          <div className="flex justify-between px-4 py-2">
            <p className="text-stone-600">GST%</p>
            <p className="text-orange-500">Rs. {calculateTotal().toFixed(2)}</p>
          </div>
          <div className="w-full h-[1px] bg-primary mt-4"></div>
          <div className="flex justify-between px-4 py-2">
            <p className="text-stone-600">Discount</p>
            <p className="text-red-600">-Rs. {((calculateTotal() * discount) / 100).toFixed(2)}</p>
          </div>
          <div className="w-full h-[1px] bg-primary mt-4"></div>
          <div className="flex justify-between text-lg px-3 py-3">
            <p className="text-stone-600 font-medium">Net Amount</p>
            <p className="text-green-700 font-medium">{netAmount.toFixed(2)}</p>
          </div>
        </div>
</div> 



      
   
     
    </section>
  );
};

export default IpBillingForm;
