import React from 'react'
import { TableHeader } from '../../../Component/common/Table/TableHeader'
import { Table } from '../../../Component/common/Table/Table'
import { tableHeading, tableValue } from '../../../utils/variable/prescriptions'

import { Pagination } from '../../../Component/common/Pagination'

const Prescription = () => {
  return (
   <section>
    <TableHeader title={"Prescriptions"}/>
    <Table tableHead={tableHeading} tableValue={tableValue}/>
    <Pagination/>
   </section>
  )
}

export default Prescription