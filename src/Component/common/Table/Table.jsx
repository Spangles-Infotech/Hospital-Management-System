import React from 'react'
import { Action } from './Action'
import { Status } from './Status'
import { getTableCellColor } from '../../../utils/functions/function'

export const Table = ({tableHead, tableValue, actionData}) => {  
    
  return (
    <table className={`w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 rounded-b-[15px]`}>
      <thead className="text-[18px] font-[600] text-customBlack bg-white">
        <tr className='bg-white border-b border-[#D1D1D1]'>
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
            className={`bg-white ${i !== tableValue.length - 1 ? "border-b border-[#D1D1D1]" : ""}`}
            key={val.id}
          >
             {tableHead.map((item, index)=>(
                item.name === "Status" ?
                  <Status data={val} item={item} />
                : item.name !== "Action" ?
                  <td
                      key={index}
                      className={`px-6 py-3 font-roboto text-left font-[400]`}
                      style={{color: getTableCellColor(item.name, val[item.path])}}
                  >{val[item.path]}</td>
                :
                  <Action path={item.path} actionData={actionData} />
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  )
}
