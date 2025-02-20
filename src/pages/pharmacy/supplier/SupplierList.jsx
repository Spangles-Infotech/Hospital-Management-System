import React from 'react'
import { TableHeader } from '../../../Component/common/Table/TableHeader'
import { Table } from '../../../Component/common/Table/Table'
import { Pagination } from '../../../Component/common/Pagination'
import { supplierTableHeading } from '../../../utils/variable/supplier'
import { useNavigate } from 'react-router-dom'
import { useFetchData } from '../../../hooks/useFetchData'

const SupplierList = () => {

  const {data, isLoading, error} = useFetchData("/get-all-supplier")

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
      onClick : (id)=>{navigate(`preview-supplier/${id}`)}
    },
    {
      name: "editpen",
      onClick: (id)=>{navigate(`edit-supplier-form/${id}`)}
    }
  ]
  
  
  return (
    <section className='p-4'> 
      <TableHeader title={"Suppliers List"} buttonData={btnData} />
      <Table tableHead={supplierTableHeading} tableValue={data} actionData={actionData} isLoading={isLoading} />
      {
        data?.length > 0 &&
        <Pagination />
      }
    </section>
  )
}

export default SupplierList