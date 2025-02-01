import React from 'react'
import { TableHeader } from '../../Component/common/Table/TableHeader'
import { Table } from '../../Component/common/Table/Table'
import { ipbillingTableHeading, ipbillingTableValue } from '../../utils/variable/ipbilling'
import { Navigate, useNavigate } from 'react-router-dom'

const IpBillingList = () => {
const navigate =useNavigate()

  const actionData = [
    {
        name:"ipbilling",
        onClick : ()=>{navigate("/admin/ip-billing/form")}
    },
]

  return (
   <section>

    <TableHeader title={"IP Billing"} isSearch={false}/>
    <Table tableHead={ipbillingTableHeading} tableValue={ipbillingTableValue} actionData={actionData} isBlue={true} />

   </section>
  )
}

export default IpBillingList