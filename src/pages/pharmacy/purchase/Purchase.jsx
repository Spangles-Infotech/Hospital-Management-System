import React from 'react'
import { TableHeader } from '../../../Component/common/Table/TableHeader'
import { Table } from '../../../Component/common/Table/Table'
import { purchaseTableHeading } from '../../../utils/variable/purchase'
import { useNavigate } from 'react-router-dom'
import { useFetchData } from '../../../hooks/useFetchData'
import { Pagination } from '../../../Component/common/Pagination'
import { useForm } from '../../../context/FormContext'
import { ITEMS_PER_PAGE } from '../../../utils/variable/dashboard'
import { useModal } from '../../../context/ModalContext'
import { AddIcon } from '../../../icons/AddIcon'

const Purchase = () => {

  const navigate =useNavigate()
  const {activePage, handleReset, tableForm} = useForm()
  const {data, isLoading, error, total} = useFetchData("/get-all-purchase",`page=${activePage}&search=${tableForm?.search || ""}&from=${tableForm?.from || ""}&to=${tableForm?.to || ""}`)
  const btnData = [
    {
      name:"New Purchase",
      onClick: ()=>{ 
        navigate("add-form")
        handleReset()
      }
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
            {
              btnData?.map((item)=>(
                  <div
                      key={item.name}
                      onClick={() => item.onClick && item.onClick()}
                      role="button" 
                      className="flex flex-row gap-1 items-center px-3 py-1 h-[30px] 2xl:h-[35px] border border-primary text-white transition-all duration-500 bg-primary rounded text-sm space-x-2 hover:bg-white hover:text-primary fill-white focus:ring-4 focus:ring-teal-200 cursor-pointer hover:fill-primary"
                  >
                      {item.icon ? <item.icon />  : <AddIcon /> }
                      <span>{item.name}</span>
                  </div>
              ))
          }
    <TableHeader title={"Purchase"} buttonData={btnData}/>
    <Table tableHead={purchaseTableHeading} tableValue={data} isLoading={isLoading} actionData={actionData}/>
    {
      data?.length > 0 &&
      <Pagination total={total} />
    }
  </section>
  )
}

export default Purchase