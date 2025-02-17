import React from 'react'
import { Action } from './Action'
import { Status } from './Status'
import { getDateFromISO, getTableCellColor } from '../../../utils/functions/function'

export const Table = ({tableHead, tableValue, actionData, isLoading=false, isBlue=false}) => {  
    
  return (
    <table className={`w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 rounded-b-[15px]`}>
      <thead className="text-[18px] font-[600] text-customBlack bg-white">
        <tr className={` h-[50px] ${isBlue ? "bg-[#DEFCFF] rounded-t-[15px]" : "bg-white border-b border-[#D1D1D1]"}`}>
          {tableHead?.map((item, index) => (
            <th scope="col" className={`px-6 py-3 text-left`} key={index}>
              {item.name}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {tableValue.map((val, i) => (
          <tr
            className={`h-[50px] ${i !== tableValue.length - 1 && !isBlue ? "border-b border-[#D1D1D1] font-roboto" : ""} ${isBlue && "font-poppins"} ${ isBlue && (i + 1) % 2 === 0  ?  "bg-[#F6FBFF]" : "bg-white"} `}
            key={val.id}
          >
            {tableHead.map((item, index)=>(
                item.name === "Status" ?
                  <Status data={val} item={item} />
                : item?.path === "si.no." ?
                  <td className='px-6 py-3 font-roboto text-left font-[400]'>{ i +1 }</td>
                : item.name !== "Action" ?
                  <td
                      key={index}
                      className={`px-6 py-3 font-roboto text-left font-[400]`}
                      style={{color: getTableCellColor(item.name, val[item.path])}}
                  >{ item.date ? getDateFromISO(val[item.path]) : val[item.path] || "-"}</td>
                :   
                <Action path={item.path} actionData={actionData} />
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  )
}
