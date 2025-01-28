import React from 'react'
import { TableHeader } from '../../Component/common/Table/TableHeader'
import { Table } from '../../Component/common/Table/Table'
import { stockFormField, stockTableHeading,stockTableValue } from '../../utils/variable/stock'
import { useSidebarModal } from '../../context/SidebarContext'



const Stocks = () => {

  const {openSidebarModal} = useSidebarModal()

  const buttonData = [
    {
      name:"New Stock",
      onClick: ()=>{openSidebarModal(stockFormField)}
    }
  ]

  const actionData = [
    {
      name:"eye",
      onClick : ()=>{ }
    },
    {
      name: "editpen",
      onClick: () =>  ()=>{}
    }
  ]
  return (
  <section>
   <TableHeader title={"Stock"} buttonData={buttonData} />
   <Table tableHead={stockTableHeading} tableValue={stockTableValue} actionData={actionData} />  
  </section>
  )
}

export default Stocks