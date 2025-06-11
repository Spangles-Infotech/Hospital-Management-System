import React from "react";
import { Action } from "./Action";
import { Status } from "./Status";
import {
  getDateFromISO,
  getTableCellColor,
} from "../../../utils/functions/function";
import { TableSkeleton } from "../../skeletons/TableSkeleton";

export const Table = ({
  tableHead,
  tableValue,
  actionData,
  isLoading = false,
  isBlue = false,
  isDoc = false,
  isPat = false,
  isRoom  = false
}) => {
  console.log("tableValue", tableValue);
  return (
    <table
      className={`w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 rounded-b-[15px]`}
    >
      <thead className="text-[18px] font-[600] text-customBlack bg-white">
        <tr
          className={` h-[50px] ${
            isBlue
              ? "bg-[#DEFCFF] rounded-t-[15px]"
              : "bg-white border-b border-[#D1D1D1]"
          }`}
        >
          {tableHead?.map((item, index) => (
            <th scope="col" className={`px-6 py-3 text-left`} key={index}>
              {item.name}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {isLoading ? (
          <tr>
            <td colSpan={tableHead.length} className="w-full">
              <TableSkeleton />
            </td>
          </tr>
        ) : !tableValue?.length > 0 ? (
          <tr>
            <td colSpan={tableHead.length} className="w-full h-[50px]">
              <p className="text-center align-middle font-[600]">
                No Data Found
              </p>
            </td>
          </tr>
        ) : (
          tableValue?.map((val, i) => (
            console.log("val", val),
            <tr
              key={val._id}
              className={`h-[50px] ${
                i !== tableValue.length - 1 && !isBlue
                  ? "border-b border-[#D1D1D1] font-roboto"
                  : ""
              } ${isBlue && "font-poppins"} ${
                isBlue && (i + 1) % 2 === 0 ? "bg-[#F6FBFF]" : "bg-white"
              } `}
            >
              {tableHead.map((item, index) =>
                item.name === "Status" ? (
                  <Status key={index} data={val} item={item} />
                ) : item?.path === "si.no." ? (
                  <td
                    key={index}
                    className="px-6 py-3 font-roboto text-left font-[400]"
                  >
                    {i + 1}
                  </td>
                ) : item.name !== "Action" ? (
                  <td
                    key={index}
                    className="px-6 py-3 font-roboto text-left font-[400]"
                    style={{
                      color: getTableCellColor(item.name, val[item.path]),
                    }}
                  >
                    {(item.date
                      ? getDateFromISO(val?.[item.path])
                      : item?.isDoubleNested 
                      ?  val?.[item.path1]?.[item?.path2]?.[item?.path3]
                      : item.isNested
                      ? val?.[item.path1]?.[item?.path2]
                      : val?.[item.path]) || "-"}
                  </td>
                ) : (
                  <Action
                    key={index}
                    path={item.path}
                    // id={ isRoom? val?.section  : isDoc ?  val?.userId?._id : isPat ? { id: val?._id, patientId: val?.patientId?._id }  : val?._id}
                    id={
                      isRoom
                        ? val?.section || "-"
                        : isDoc
                        ? typeof val?.userId === "object"
                          ? val.userId?._id || "-"
                          : val.userId || "-"
                        : isPat
                        ? { id: val?._id || "-", patientId: val?.patientId?._id || "-" }
                        : val?._id || "-"
                    }
                    
                    actionData={actionData}
                    item={val}
                  />
                )
              )}
            </tr>
          ))
        )}
      </tbody>
    </table>
  );
};
