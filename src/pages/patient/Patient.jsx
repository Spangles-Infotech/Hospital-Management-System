import React from 'react'
import { Table } from '../../Component/common/Table/Table'
import { TableHeader } from '../../Component/common/Table/TableHeader'
import { patientFields, tableHeading, tableValue } from '../../utils/variable/patient'
import { useModal } from '../../context/ModalContext'
import { FormModal } from '../../Component/modalContents/FormModal'
import { Pagination } from '../../Component/common/Pagination'

const Patient = () => {

  const {openModal} = useModal()

  const btnData = [
    {
      name:"New Button",
      onClick: ()=>{ openModal( FormModal, {title:"New Patients", formField:patientFields })}
    }
]

  return (
    <section className='p-4'>
        <TableHeader title={"Patients"} buttonData={btnData}  />
        <Table tableHead={tableHeading} tableValue={tableValue} />
        <Pagination />
    </section>
  )
}

export default Patient;


