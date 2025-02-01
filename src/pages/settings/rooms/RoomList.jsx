import React from 'react'
import { TableHeader } from '../../../Component/common/Table/TableHeader'
import { Table } from '../../../Component/common/Table/Table'
import { roomlistTableHeading, roomlistTableValue } from '../../../utils/variable/settings'
import { Navigate, useNavigate } from 'react-router-dom'

const RoomList = () => {
  const navigate = useNavigate()
  const btnData=[
    {
      name:" New Section",
      onClick : ()=>{navigate("/admin/settings/room-new-section")}
     
    }
  ]

  const actionData = [
    {
      name:"tripledot",
      data:[
        {
          name:"List",
          title:"List"
        },
         {
           name:"inactive",
           title:"Inactive",
                        }
      ]
    }
  ]
  return (
   <section className='p-4 w-[80%]'>

    <TableHeader className=" " title={"Rooms"}  buttonData={btnData}/>
    <Table tableHead={roomlistTableHeading} tableValue={roomlistTableValue} actionData={actionData}/>

   </section>
  )
}

export default RoomList