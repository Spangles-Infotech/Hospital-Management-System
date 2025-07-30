import React from 'react'
import { TableHeader } from '../../../Component/common/Table/TableHeader'
import { Table } from '../../../Component/common/Table/Table'
import { roomlistTableHeading } from '../../../utils/variable/settings'
import { useOthers } from '../../../hooks/useOthers'

const RoomList = () => {
  const {roomData, blockActionData, blockBtnData} = useOthers()
  return (
   <section className='px-2 w-[85%]'>
    <TableHeader title={"Rooms"}  buttonData={blockBtnData}/>
    <Table tableHead={roomlistTableHeading} tableValue={roomData} actionData={blockActionData} isRoom={true}/>
   </section>
  )
}

export default RoomList