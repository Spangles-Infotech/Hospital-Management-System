import React,{useState} from 'react'

const PaymentType = () => {
    const options = ["Select Payment Method", "Cash", "Credit/Debit Card", "UPI","Net Banking"];
    const [selectedOption, setSelectedOption] = useState("");
  return (
    <div className="flex flex-col border border-[#089BAB] rounded-[10px] w-1/3 p-6 gap-y-4 h-[246px] bg-white">
    <p className="font-[500] text-[20px] text-[#505050]">Payment Type</p>
    <div className="relative w-full">
      <select
        value={selectedOption}
        onChange={(e) => setSelectedOption(e.target.value)}
        className="border border-[#898989] rounded-lg px-4 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#898989] focus:border-[#898989] appearance-none w-full pr-10" 
      >
        {options.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>
      {/* Image placed absolutely inside the select wrapper */}
      <img
        src={require("../../assests/arrow.png")}
        alt="Arrow"
        className="absolute right-3 top-1/2 transform -translate-y-1/2 size-[25px] pointer-events-none object-contain"
      />
    </div>

    <p className="font-[500] text-[20px] text-[#505050]">Amount Paid</p>
    <input
      type="text"
      placeholder="Rs. 00"
      class="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#898989] focus:border-[#898989] "
    />
  </div>
  )
}

export default PaymentType