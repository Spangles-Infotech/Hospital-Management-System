import React from 'react'

export const Total = ({data}) => {
  const items = [
    {
      "id":"3",
      "title":"Total Amount",
      "callTitle":"totalAmount",
      "color":"#1D9719"
    },
    {
      "id":"2",
      "title":"Unpaid Amount",
      "callTitle":"unPaidAmount",
      "color":"#D7242A"
    },
    {
      "id":"1",
      "title":"Paid Amount",
      "callTitle":"paidAmount",
      "color":"#FE842B"
    },
  ]
  return (
    <div className='h-[80px] flex flex-row-reverse justify-between items-center py-5 px-[50px] bg-[#ffffff] gap-2 font-roboto font-medium text-[20px] rounded-[15px]'>
        {
          items.map((item)=>(
            data[item?.callTitle] &&          
            <div key={item.id} className='flex flex-row gap-2 items-center'>
              <p className='text-[22px]'>{item.title}</p>
              <p>:</p>
              <p style={{color:item.color}} className={`text-[22px]`}>₹{data[item?.callTitle]} </p>
            </div>
          ))
        }
        
    </div>
  )
}