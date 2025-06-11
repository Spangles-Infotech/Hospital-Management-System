import React from 'react'
import { ToolTip } from '../ToolTip'

export const Action = ({actionData, id, item}) => {
  console.log(id,"id")
  return (
    <td className='flex gap-[15px] items-center h-full px-6 py-3'>
        {
            actionData?.map((actionItem)=>( // Renamed to actionItem to avoid confusion
               <ToolTip name={actionItem.name} data={actionItem.data} key={actionItem.name} id={id}>
                  <img 
                    key={actionItem.name} 
                    src={require(`../../../assests/${actionItem.name}.png`)} alt="eye-icon" className={`size-[30px] object-contain cursor-pointer rounded-[15%]`} 
                    onClick={actionItem.name !== "tripledot" ? ()=>actionItem.onClick(id, item) : undefined} // Pass the 'item' prop (val from Table.jsx)
                  />
               </ToolTip>
            ))
        }
    </td>
  )
}
