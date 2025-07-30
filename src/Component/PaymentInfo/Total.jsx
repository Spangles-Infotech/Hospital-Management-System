import React from 'react'

const Total = () => {
  return (
    <div className="border-[#1F9CC6] border rounded-[15px] w-[40%] bg-white" >
    <div className="flex justify-between px-4 py-3">
      <div className="flex gap-3">
        <input type="checkbox" />
        <p className="text-slate-700 font-medium ">Rounded off</p>
      </div>
      <p className="text-orange-500">-0.40</p>
    </div>
    <div className="flex justify-between px-4 py-2">
      <p className="text-stone-600">GST%</p>
      <p className="text-orange-500">1376.40</p>
    </div>
    <div className="flex justify-between px-4 py-2">
      <p className="text-stone-600">Discount</p>
      <p className="text-red-600">-300</p>
    </div>
    <div className="w-full h-[1px] bg-[#1F9CC6] mt-4"></div>
    <div className="flex justify-between text-lg px-3 py-3">
      <p className="text-stone-600 font-medium">New Amount</p>
      <p className="text-green-700 font-medium">9497.00</p>
    </div>
  </div>
  )
}

export default Total