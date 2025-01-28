import React from 'react'
import { ToolTip } from '../ToolTip'

export const Action = ({actionData}) => {
  return (
    <td className='flex gap-[15px] items-center h-full px-6 py-3'>
        {
            actionData.map((item)=>(
               <ToolTip name={item.name} data={item.data}>
                  <img 
                    key={item.name} 
                    src={require(`../../../assests/${item.name}.png`)} alt="eye-icon" className={`size-[25px] object-contain cursor-pointer`} 
                    onClick={item.name !== "tripledot" ? ()=>item.onClick() : undefined}
                  />
               </ToolTip>
            ))
        }
    </td>
  )
}
