import React from 'react'
import { TableHeader } from '../../Component/common/Table/TableHeader'
import { Table } from '../../Component/common/Table/Table'
import { useModal } from '../../context/ModalContext'
import { FormModal } from '../../Component/modalContents/FormModal'
import { editFormField, expenseData, expenseFormFields, expensePreviewField, expensePreviewValue, expenseTableHeading, expenseTableValue } from '../../utils/variable/expense'
import { Total } from '../../Component/common/Table/Total'
import { TableButton } from '../../Component/common/Table/TableButton'
import { Pagination } from '../../Component/common/Pagination'
import PreviewModal from '../../Component/modalContents/PreviewModal'

const Expense = () => {

    const {openModal} = useModal()

    const btnData = [
        {
            name:"Add Expense",
            onClick:()=>{openModal(FormModal, {title:"Add Expense", formField:expenseFormFields})}
        }
    ]                 

    const actionData = [
        {
            name:'eye',
            onClick:()=>{openModal(PreviewModal, {title:"Expense", previewFields:expensePreviewField ,data:expensePreviewValue})}
        },
        {
            name:'editpen',
            onClick:()=>{openModal(FormModal, {title:"Enter Amount", formField:editFormField})}
        },
    ]
  return (
    <section className='m-4 p-4 flex flex-col gap-[20px]'>
        <div className='flex flex-col bg-white'>
            <TableHeader title={"Expense"} buttonData={btnData} />
            <Table tableHead={expenseTableHeading} tableValue={expenseTableValue}  actionData={actionData}/>
        </div>
        <Total data={expenseData} />
        <TableButton />
        <Pagination />
    </section>
  )
}

export default Expense