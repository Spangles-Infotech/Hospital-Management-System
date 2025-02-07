import React from 'react'

export const RoomCount = ({field, data}) => {
  return  (
    <div className='flex gap-[5px]'>
        {
            field.map((item, index)=>(
                <>
                    <div key={item.name} className="p-2 flex flex-col items-center gap-[5px]">
                        <p className='font-[400] text-[24px]'>{data[item?.name]}</p>
                        <p className='font-[700] text-[26px]'>{item.label}</p>
                    </div>
                </>
            ))
        }
    </div>
  )
}
