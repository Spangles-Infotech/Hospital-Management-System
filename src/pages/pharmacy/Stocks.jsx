import React from 'react'
import { TableHeader } from '../../Component/common/Table/TableHeader'
import { Table } from '../../Component/common/Table/Table'
import { stockFormField, stockTableHeading,stockTableValue } from '../../utils/variable/stock'
import { useSidebarModal } from '../../context/SidebarContext'
import { useFetchData } from '../../hooks/useFetchData'



const Stocks = () => {

  const {openSidebarModal} = useSidebarModal()
  const {data, isLoading, error} = useFetchData("/get-all-stock")

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
  console.log("data", data)
  return (
  <section className='m-4 bg-white rounded-[15px]'>
   <TableHeader title={"Stock"} buttonData={buttonData} />
   <Table tableHead={stockTableHeading} tableValue={data} actionData={actionData} isLoading={isLoading} error={error} />  
  </section>
  )
}

export default Stocks