import React from 'react'
import { TableHeader } from '../../Component/common/Table/TableHeader'
import { Table } from '../../Component/common/Table/Table'
import { ipbillingTableHeading, ipbillingTableValue } from '../../utils/variable/ipbilling'
import { useNavigate } from 'react-router-dom'
import { useFetchData } from '../../hooks/useFetchData'

const IpBillingList = () => {

  const navigate =useNavigate()
  const {data, isLoading} = useFetchData("get-all-ip-billing")

  const actionData = [
    {
        name:"ipbilling",
        onClick : (id)=>{navigate(`/admin/ip-billing/form/${id}`)}
    },
  ]

  return (
   <section>
    <TableHeader title={"IP Billing"} isSearch={false}/>
    <Table tableHead={ipbillingTableHeading} tableValue={data} actionData={actionData} isLoading={isLoading} isBlue={true} />
   </section>
  )
}

export default IpBillingList