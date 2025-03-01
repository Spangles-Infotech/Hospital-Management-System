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
import { useFetchData } from '../../hooks/useFetchData'

const Expense = () => {


    const {data,isLoading,error, fetchData:refetch} = useFetchData("/get-all-expense")

    const {openModal} = useModal()

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
        <TableButton />
        <Pagination />
    </section>
  )
}

export default Expense
