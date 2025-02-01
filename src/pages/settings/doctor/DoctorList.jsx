import React from 'react'
import { TableHeader } from '../../../Component/common/Table/TableHeader'
import { Table } from '../../../Component/common/Table/Table'
import { doctorTableHeading, doctorTableValue } from '../../../utils/variable/settings'

const DoctorList = () => {

  const actionData = [
    {
      name:"editpenblue",
      onClick : ()=>{}
  }
  ]
  return (
    <section className='p-4'>

     <TableHeader title={"Doctor List"}/>
     <Table tableHead={doctorTableHeading} tableValue={doctorTableValue} actionData={actionData}/>

    </section>
  )
}

export default DoctorList