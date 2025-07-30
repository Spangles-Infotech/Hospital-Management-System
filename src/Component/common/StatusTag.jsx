import React from 'react'
import { DotIcon } from '../../icons/DotIcon';


export const StatusTag = ({status, bgColor, color, isBlue=false}) => {

  return (
    <div className='flex w-full'>
      <div className={`flex gap-2 p-2 items-center justify-center h-[30px] ${ isBlue ? "rounded-[15px]" : "rounded-[5px]"}`} style={{backgroundColor:bgColor, color:color, width:"100px"}}>
          { !isBlue  &&  <DotIcon style={{width:"15px", height:"15px",paddingTop:"2px"}} /> }
          <p className='m-0' style={{fontSize:"14px", textAlign:"center", fontWeight:"600"}} >{status}</p>
      </div>
    </div>
  )
}
