import React from 'react'
import { StatusTag } from '../StatusTag'
import { getStatusStyles } from '../../../utils/functions/function'

export const Status = ({item, data}) => {

    const {bgColor, color} = getStatusStyles(data[item.path])
    const isNormal = item.type === "normal"
  return (
    <td className={`px-6 py-3 font-roboto text-left font-[400`} style={{color: isNormal ? color : ""}}>
        {
            item.type === "tag" ? 
                <StatusTag status={data[item.path]} bgColor={bgColor} color={color} />
            :
            item.type === "blueTag" ?
                <StatusTag status={data[item.path]} bgColor={bgColor} color={color} isBlue={true} />

             :   item.type === "activeTag" ?
                <StatusTag status={data[item.path]} bgColor={bgColor} color={color} isBlue={true} />
             :    data[item.path]
        }
    </td>
  )
}
