import React from 'react'
import { TableHeader } from '../../../Component/common/Table/TableHeader'
import { Table } from '../../../Component/common/Table/Table'
import { purchaseTableHeading, purchaseTableValue } from '../../../utils/variable/purchase'
import { useNavigate } from 'react-router-dom'

const Purchase = () => {

  const navigate =useNavigate()

  const btnData = [
    {
      name:"New Purchase",
      onClick: ()=> navigate("add-form")
    }
  ]


  const actionData = [

    {
      name:"eye",
      onClick : ()=>navigate("preview")
    },
    

    {
      name: "editpen",
      onClick: () =>  ()=>{}
    }
  ]
  return (
<section className='p-4'>
<TableHeader title={"Purchase"} buttonData={btnData}/>
<Table tableHead={purchaseTableHeading} tableValue={purchaseTableValue} actionData={actionData}/>

      </section>
  )
}

export default Purchase