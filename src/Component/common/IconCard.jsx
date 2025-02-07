import React from 'react'

export const IconCard = ({data}) => {
  return (
    <div className='flex gap-[20px]'>
        <img src="https://gratisography.com/wp-content/uploads/2024/11/gratisography-augmented-reality-800x525.jpg" alt="user-image" className='size-[100px] rounded-[15px]' />
        <div className='flex flex-col gap-2 items-start justify-center'>
            <p className='text-secondaryBlue font-[600] text-[20px]'>Mathews</p>
            <p className='text-[#148CF0] font-[500]'>DOB0015678</p>
            <p className='text-secondayGray font-[500]'>Mathews</p>
        </div>
    </div>
  )
}
