import React from 'react'
import { Spin } from '../animation/Spin'

export const Button = ({title, isLoading, handleClick, style}) => {
  return (
    <button disabled={isLoading} onClick={(e)=>handleClick(e)} className={`${isLoading && "flex items-center justify-center"} bg-primary p-2 text-white rounded-lg hover:bg-primary transition text-lg`} style={{...style}} >{ isLoading ? <Spin /> : title}</button>
  )
}
