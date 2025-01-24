import React from 'react'
import { TableHeader } from '../Component/common/Table/TableHeader'
import { Table } from '../Component/common/Table/Table'
import { staffTableHeading, staffTableValue, staffFields } from '../utils/variable/staff'
import { Pagination } from '../Component/common/Pagination'
import { useModal } from '../context/ModalContext'
import { FormModal } from '../Component/modalContents/FormModal'

const Staff = () => {

    const {openModal} = useModal()
    
    const btnData = [
        {
            name:"New Staff",
            onClick : ()=>{ openModal(FormModal, {title:"New Staff", formField:staffFields})}
        }
    ]

  return (
    <section className='p-4'>
        <TableHeader title={"Staff"} buttonData={btnData} />
        <Table tableHead={staffTableHeading} tableValue={staffTableValue} />
        <Pagination />
    </section>
  )
}

export default Staff