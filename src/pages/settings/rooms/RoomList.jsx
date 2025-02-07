import React from 'react'
import { TableHeader } from '../../../Component/common/Table/TableHeader'
import { Table } from '../../../Component/common/Table/Table'
import { roomlistTableHeading, roomlistTableValue } from '../../../utils/variable/settings'
import { useNavigate } from 'react-router-dom'

const RoomList = () => {
  const navigate = useNavigate()
  const btnData=[
    {
      name:" New Section",
      onClick : ()=>{navigate("/admin/settings/rooms/add-room")}
     
    }
  ]

  const actionData = [
    {
      name:"tripledot",
      data:[
        {
          name:"List",
          title:"List",
          onClick: ()=>{navigate("/admin/settings/rooms/room")}
        },
        {
          name:"inactive",
          title:"Inactive",
          onClick: ()=>{}
        } 
      ]
    }
  ]
  return (
   <section className='px-2 w-[85%]'>
    <TableHeader className=" " title={"Rooms"}  buttonData={btnData}/>
    <Table tableHead={roomlistTableHeading} tableValue={roomlistTableValue} actionData={actionData}/>

   </section>
  )
}

export default RoomList