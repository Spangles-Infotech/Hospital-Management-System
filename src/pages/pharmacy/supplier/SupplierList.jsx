import React from 'react'
import { TableHeader } from '../../../Component/common/Table/TableHeader'
import { Table } from '../../../Component/common/Table/Table'
import { Pagination } from '../../../Component/common/Pagination'
import { supplierData, supplierTableHeading } from '../../../utils/variable/supplier'
import { useNavigate } from 'react-router-dom'

const SupplierList = () => {

  const navigate = useNavigate()

  const btnData = [
    {
      name:"New Supplier",
      onClick: ()=>{navigate("add-supplier")}
    }
  ]

  const actionData = [
    {
      name:"eye",
      onClick : ()=>{navigate("preview-supplier")}
    },
    {
      name: "editpen",
      onClick: () =>  ()=>{console.log("clicking")}
    }
  ]
  
  
  return (
    <section className='p-4'> 
      <TableHeader title={"Suppliers List"} buttonData={btnData} />
      <Table tableHead={supplierTableHeading} tableValue={supplierData} actionData={actionData} />
      <Pagination />
    </section>
  )
}

export default SupplierList