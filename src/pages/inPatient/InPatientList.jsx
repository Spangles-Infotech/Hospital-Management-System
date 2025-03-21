import React from 'react'
import { TableHeader } from '../../Component/common/Table/TableHeader'
import { Table } from '../../Component/common/Table/Table'
import { Pagination } from '../../Component/common/Pagination'
import { inPatientTableHeadiing, inPatientTableValue } from '../../utils/variable/inPatients'
import { useNavigate } from 'react-router-dom'
import { useFetchData } from '../../hooks/useFetchData'

const InPatientList = () => {

  const {data,isLoading}= useFetchData("/get-all-ip-patient")

  const navigate = useNavigate()

  const actionData = [
    {
      name:"tablevital",
      onClick: ()=>{}
    },
    {
      name:"bed",
      onClick: ()=>{navigate("allocate-room")}
    }
  ]
  
  return (
    <>
      <TableHeader title={"In-Patient"} isBlue={true} isSearch={false} />
      <Table tableHead={inPatientTableHeadiing} tableValue={data} isBlue={true} actionData={actionData} />
      <Pagination />  
    </>
  )
}

export default InPatientList