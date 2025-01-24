import React from 'react'
import { imageData } from '../../../utils/variable/action'

export const Action = ({path}) => {
  return (
    <div className='flex gap-[15px] items-center h-full px-6 py-3'>
        {
            imageData.map((item)=>(
                <img src={require(`../../../assests/${item.name}.png`)} alt="eye-icon" className={`size-[25px] object-contain ${item.path !== path ? "hidden" : ""}`} key={item.name} />
            ))
        }
    </div>
  )
}
