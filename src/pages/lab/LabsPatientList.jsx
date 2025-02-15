import React from 'react'
import { TableHeader } from '../../Component/common/Table/TableHeader'
import { Table } from '../../Component/common/Table/Table'
import { LabTableHeadiing, LabTableValue } from '../../utils/variable/lab'
import { Pagination } from '../../Component/common/Pagination'
import { useNavigate } from 'react-router-dom'

const LabsPatientList = () => {


  const navigate = useNavigate()

  const actionData = [
    {
      name:"listlab",
      onClick: ()=>{"lab-print"}
    },
    {
      name:"cash",
      onClick: ()=>{navigate("lab-print")}
    }
  ]

  return (
    <>
        <TableHeader title={"Lab"} isBlue={true} isSearch={false}/>
          <Table tableHead={LabTableHeadiing} tableValue={LabTableValue} isBlue={true} actionData={actionData}  />
          <Pagination />  
    </>

  )
}

export default LabsPatientList