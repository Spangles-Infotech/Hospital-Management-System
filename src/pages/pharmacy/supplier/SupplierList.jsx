import React from 'react'
import { TableHeader } from '../../../Component/common/Table/TableHeader'
import { Table } from '../../../Component/common/Table/Table'
import { Pagination } from '../../../Component/common/Pagination'
import { supplierTableHeading } from '../../../utils/variable/supplier'
import { useNavigate } from 'react-router-dom'
import { useFetchData } from '../../../hooks/useFetchData'
import { useForm } from '../../../context/FormContext'
import { ITEMS_PER_PAGE } from '../../../utils/variable/dashboard'

const SupplierList = () => {
  const navigate = useNavigate()
  const {activePage} = useForm()
  const {data, isLoading, error, total} = useFetchData("/get-all-supplier", `page=${activePage}&limit=${ITEMS_PER_PAGE}`)

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
        <Pagination total={total} />
      }
    </section>
  )
}

export default SupplierList