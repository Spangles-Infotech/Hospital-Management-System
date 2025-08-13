import React from "react";
import { Action } from "./Action";
import { Checkbox } from "./Checkbox";
import { Status } from "./Status";
import {
  getDateFromISO,
  getTableCellColor,
} from "../../../utils/functions/function";
import { TableSkeleton } from "../../skeletons/TableSkeleton";
import { usePurchase } from "../../../hooks/usePurchase";
import { toast } from "react-toastify";

export const Table = ({
  tableHead,
  tableValue,
  actionData,
  isLoading = false,
  isBlue = false,
  isDoc = false,
  isPat = false,
  isRoom  = false,
  refreshTable
}) => {
  const { updatePurchasePaymentStatus } = usePurchase();

  const handlePaymentStatusChange = async (id, currentStatus) => {
    console.log(currentStatus,"currentStatus")
    const newStatus = currentStatus === "paid" ? "not paid" : "paid";
    try {
      await updatePurchasePaymentStatus(id, newStatus);
      toast.success(`Payment status updated to ${newStatus}`);
      refreshTable();
    } catch (error) {
      toast.error(`Failed to update payment status: ${error.message}`);
    }
  };

  console.log("tableValue", tableValue);
  return (
    <table
      className={`w-full  text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 rounded-b-[15px]`}
    >
      <thead className="text-[18px] font-[600] text-customBlack bg-white">
        <tr
          className={` h-[50px] ${
            isBlue
              ? "bg-[#DEFCFF] rounded-t-[10px]"
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
                item.id === "si.no." ? (
                  <td
                    key={index}
                    className="px-6 py-3 font-roboto text-left font-[400]"
                  >
                    {i + 1}
                  </td>
                ) : item.id === "status" ? (
                  <Status key={index} data={val} item={item} />
                ) : item.id === "paidStatus" ? (
                  <td
                    key={index}
                    className="px-6 py-3 font-roboto text-left font-[400]"
                  >
                    <Checkbox
                      id={val?._id}
                      checked={val?.paymentStatus === "paid"}
                      onChange={() => handlePaymentStatusChange(val?._id, val?.paymentStatus)}
                    />
                  </td>
                ) : item.id !== "action" ? (
                  <td
                    key={index}
                    className="px-6 py-3 font-roboto text-left font-[400]"
                    style={{
                      color: getTableCellColor(item.label, item.format ? item.format(null, val) : (item.id && item.id.includes('.') ? item.id.split('.').reduce((o, i) => o?.[i], val) : val?.[item.id]))
                  }}> 
                    {(() => {
                      if (item.render) {
                        return item.render(val);
                      }
                      if (!item.id) {
                        console.error("item.id is undefined for item:", item);
                        return "-";
                      }
                      const resolvedValue = item.format
                        ? item.format(null, val)
                        : item.date
                        ? (typeof (item.id.includes('.') ? item.id.split('.').reduce((o, i) => o?.[i], val) : val?.[item.id]) === 'string' ? getDateFromISO(item.id.includes('.') ? item.id.split('.').reduce((o, i) => o?.[i], val) : val?.[item.id]) : '-')
                        : (item.id.includes('.') ? item.id.split('.').reduce((o, i) => o?.[i], val) : val?.[item.id]);

                      if (item.id.includes('.')) {
                        console.log(`Nested path: ${item.id}, Resolved value:`, resolvedValue);
                      }
                      return resolvedValue || "-";
                    })()}
                  </td>
                ) : (
                  <Action
                    key={index}
                    path={item.path}
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
                    rowData={val}
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