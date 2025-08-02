import React from 'react'
import { Spin } from '../animation/Spin'

export const Button = ({title, isLoading, handleClick, style}) => {
  return (
    <button disabled={isLoading} onClick={(e)=>handleClick(e)} className={`${isLoading && "flex items-center justify-center"} bg-[#1F9CC6] p-2  rounded-lg hover:bg-[#1F9CC6] transition text-lg`} style={{...style}} >{ isLoading ? <Spin /> : title}</button>
  )
}
