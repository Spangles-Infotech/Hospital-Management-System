import React from 'react'
import { DotIcon } from '../../icons/DotIcon';


export const StatusTag = ({status, bgColor, color}) => {

  return (
    <div className='flex items-center justify-center w-full'>
      <div className='flex gap-2 p-2 items-center justify-center h-[30px]' style={{backgroundColor:bgColor, color:color, borderRadius:"5px", width:"100px"}}>
          <DotIcon style={{width:"15px", height:"15px",paddingTop:"2px"}} />
          <p className='m-0' style={{fontSize:"14px", textAlign:"center", fontWeight:"600"}} >{status}</p>
      </div>
    </div>
  )
}
