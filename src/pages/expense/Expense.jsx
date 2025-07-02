import React from 'react'
import { TableHeader } from '../../Component/common/Table/TableHeader'
import { Table } from '../../Component/common/Table/Table'
import { useModal } from '../../context/ModalContext'
import { FormModal } from '../../Component/modalContents/FormModal'
import { editFormField, expenseData, expenseFormFields, expensePreviewField, expenseTableHeading, expenseTableHeadingPrint } from '../../utils/variable/expense'
import { Total } from '../../Component/common/Table/Total'
import { TableButton } from '../../Component/common/Table/TableButton'
import { Pagination } from '../../Component/common/Pagination'
import PreviewModal from '../../Component/modalContents/PreviewModal'
import { useFetchData } from '../../hooks/useFetchData'
import PrintPreviewModal from '../../Component/PrintPreviewModal'
import jsPDF from 'jspdf'
import { applyPlugin } from 'jspdf-autotable'
import { useSelector } from 'react-redux'
import { useState } from 'react'



const Expense = () => {

    const print = () => {
        openModal(PrintPreviewModal, {
            tableHead: expenseTableHeadingPrint,
            data,
            title: "Print Expense Table",
            onClose: closeModal // Modal context handles closing
        });
    }

    const downloadPdf = () => {
        const doc = new jsPDF();
        applyPlugin(doc);
        doc.autoTable({
            head: [expenseTableHeading.map(head => head.name)],
            body: data.map(row => expenseTableHeading.map(head => row[head.field])),
        });
        doc.save('expense-table.pdf');
    };

    const globalStr  = useSelector((state) => state.globalString.value);
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [status, setStatus] = useState('');

    const queryParams = new URLSearchParams();
    if (globalStr) queryParams.append('search', globalStr);
    if (startDate) queryParams.append('startDate', startDate);
    if (endDate) queryParams.append('endDate', endDate);
    if (status) queryParams.append('status', status);

    const queryString = queryParams.toString();
    
    // const {data,isLoading,error, fetchData:refetch} = useFetchData("/get-all-expense")
  const { data, isLoading, error, fetchData:refetch } = useFetchData(`/get-all-expense${queryString ? `?${queryString}` : ""}`)
    // const {data,isLoading,error, fetchData:refetch} = useFetchData("/get-all-expense")

    const {openModal ,closeModal } = useModal()
    // const print = () => {
    //     openModal(PrintPreviewModal, {
    //         tableHead: expenseTableHeadingPrint,
    //         title: "Print Expense Table",
    //         onClose:closeModal // Modal context handles closing
    //     });
    // }

    console.log(data,"expenseData")

    const btnData = [
        {
            name:"Add Expense",
            onClick:()=>{openModal(FormModal, {title:"Add Expense", formField:expenseFormFields, refetch:refetch, name:"/add-expense"})}
        }
    ]                 

    const actionData = [
        {
            name:"eye",
            onClick : (id)=>{openModal(PreviewModal, {title:"Stock", previewFields:expensePreviewField},`/get-expense/${id}`)}
        },
        {
            name:'editpen',
            onClick:(id)=>{openModal(FormModal, {title:"Enter Amount", formField:editFormField, refetch:refetch, isEdit:true, name:`/update-expense/${id}`})}
        },
    ]
  return (
    <section className='m-4 p-4 flex flex-col gap-[20px]'>
        <h1 className=' text-primary font-[600] text-[20px] font-roboto'>Expense Filter</h1>
        <div className='flex gap-4 mb-4'>
            <label className='flex justify-center items-center '>StartDate</label>
            <input
                type='date'
                value={startDate}
                onChange={(e) => setStartDate(e.target.value)}
                className='p-2 border border-gray-300 rounded'
                onKeyDown={(e) => {
                    e.preventDefault();
                }}
            />
            <label className='flex justify-center items-center ' >EndDate</label>

            <input
                type='date'
                value={endDate}
                onChange={(e) => setEndDate(e.target.value)}
                className='p-2 border border-gray-300 rounded'
                onKeyDown={(e) => {
                    e.preventDefault();
                }}
            />
            <label className='flex justify-center items-center ' >Status</label>

            <select
                value={status}
                onChange={(e) => setStatus(e.target.value)}
                className='p-2 border border-gray-300 rounded'
            >
                <option value="">All Status</option>
                <option value="Paid">Paid</option>
                <option value="Unpaid">Unpaid</option>
            </select>
            {/* <button
                onClick={refetch}
                className='px-4 py-2 bg-blue-500 text-white rounded'
            >
                Apply Filters
            </button> */}
        </div>
        <div className='flex flex-col bg-white'>
            <TableHeader title={"Expense"} buttonData={btnData} />
            <Table tableHead={expenseTableHeading} tableValue={data}  actionData={actionData} isLoading={isLoading} />
        </div>
        <Total data={expenseData} />
        <TableButton print={print} download={downloadPdf} />
        <Pagination />
    </section>
  )
}

export default Expense
