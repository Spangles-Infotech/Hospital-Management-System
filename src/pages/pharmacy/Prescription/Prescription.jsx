import React from 'react'
import { TableHeader } from '../../../Component/common/Table/TableHeader'
import { Table } from '../../../Component/common/Table/Table'
import { tableHeading } from '../../../utils/variable/prescriptions'
import { Pagination } from '../../../Component/common/Pagination'
import { usePrescription } from '../../../hooks/usePrescription'

const Prescription = () => {

  const {data, isLoading, actionBtn} = usePrescription()
  
  return (
    <section className='p-4'>
      <TableHeader title={"Prescriptions"} />
      <Table tableHead={tableHeading} tableValue={data} actionData={actionBtn} isLoading={isLoading}/>
      <Pagination/>
    </section>
  )
}

export default Prescription