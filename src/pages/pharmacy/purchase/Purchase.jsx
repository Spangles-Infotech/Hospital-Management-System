import React from 'react'
import { TableHeader } from '../../../Component/common/Table/TableHeader'
import { Table } from '../../../Component/common/Table/Table'
import { purchaseTableHeading } from '../../../utils/variable/purchase'
import { useNavigate } from 'react-router-dom'
import { useFetchData } from '../../../hooks/useFetchData'
import { Pagination } from '../../../Component/common/Pagination'

const Purchase = () => {

  const navigate =useNavigate()
  const {data, isLoading, error} = useFetchData("/get-all-purchase")

  const btnData = [
    {
      name:"New Purchase",
      onClick: ()=> navigate("add-form")
    }
  ]


  const actionData = [

    {
      name:"eye",
      onClick : (id)=>navigate(`preview/${id}`)
    },
    

    {
      name: "editpen",
      onClick: (id) =>{navigate(`edit-form/${id}`)}
    }
  ]
  return (
  <section className='p-4'>
    <TableHeader title={"Purchase"} buttonData={btnData}/>
    <Table tableHead={purchaseTableHeading} tableValue={data} actionData={actionData}/>
    <Pagination />
  </section>
  )
}

export default Purchase