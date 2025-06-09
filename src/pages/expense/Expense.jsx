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
console.log(globalStr,"globalStr")


    
    
    // const {data,isLoading,error, fetchData:refetch} = useFetchData("/get-all-expense")
  const { data, isLoading, error, fetchData:refetch } = useFetchData(`/get-all-expense${globalStr ? `?search=${globalStr}` : ""}`)
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
