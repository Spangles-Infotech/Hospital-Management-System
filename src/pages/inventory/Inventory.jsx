import React from 'react'
import { TableHeader } from '../../Component/common/Table/TableHeader'
import { Table } from '../../Component/common/Table/Table'
import { Pagination } from '../../Component/common/Pagination'
import { useModal } from '../../context/ModalContext'
import { FormModal } from '../../Component/modalContents/FormModal'
import { inventoryFormField, inventoryTableHeading, inventoryTableValue } from '../../utils/variable/inventory'

const Inventory = () => {

    const {openModal} = useModal()
    const btnData = [
        {
            name:"New Stock",
            onClick: ()=>{openModal(FormModal, {title:"New Stock", formField:inventoryFormField })}

        }
    ]
    const actionData = [
        {
            name:"editpenblue",
            onClick : ()=>{}
        },
        {
            name:"tabledelete",
            onClick : ()=>{}
        },
    ]
    
    
  return (
    <section className='p-4'>
        <TableHeader title={"Inventory"} isBlue={true} buttonData={btnData}  />
        <Table tableHead={inventoryTableHeading} tableValue={inventoryTableValue}  actionData={actionData} isBlue={true}/>
        <Pagination />
    </section>
  )
}

export default Inventory