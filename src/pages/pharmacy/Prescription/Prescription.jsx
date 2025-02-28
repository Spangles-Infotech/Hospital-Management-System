import React from 'react'
import { TableHeader } from '../../../Component/common/Table/TableHeader'
import { Table } from '../../../Component/common/Table/Table'
import { tableHeading, tableValue } from '../../../utils/variable/prescriptions'
import { Pagination } from '../../../Component/common/Pagination'
import { useNavigate } from 'react-router-dom'
import { useFetchData } from '../../../hooks/useFetchData'


const Prescription = () => {

  // const {data, isLoading, setErrors} = useFetchData("/get")

  const navigate = useNavigate()
  const actionBtn = [
    {
      name:"eye",
      onClick : ()=>{navigate("preview")}
    },
    {
      name: "editpen",
      onClick: () =>  ()=>{("clicking")}
    }
  ]
  return (
   <section className='p-4'>
    <TableHeader title={"Prescriptions"} />
    <Table tableHead={tableHeading} tableValue={tableValue} actionData={actionBtn} />
    <Pagination/>
   </section>
  )
}

export default Prescription