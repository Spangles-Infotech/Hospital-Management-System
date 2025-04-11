import React, { useEffect } from 'react'
import { TableHeader } from '../../../Component/common/Table/TableHeader'
import { Table } from '../../../Component/common/Table/Table'
import { roomTableHeading } from '../../../utils/variable/settings/room'
import { useParams } from 'react-router-dom'
import { useOthers } from '../../../hooks/useOthers'

const RoomName = () => {

    const {name} = useParams()
    const {getFloorBySection, rooms, roomActionData, handleAddRoom} = useOthers()

    useEffect(()=>{
      getFloorBySection(name)
    },[name])
      
  return (
    <section className=' w-[85%] flex flex-col gap-[15px]'>
        <div className='px-2 bg-white'>
            <TableHeader title={name}  />
            <Table tableHead={roomTableHeading} tableValue={rooms} actionData={roomActionData}  />
        </div>
        <button 
            onClick={handleAddRoom}
            className="px-6 py-2 border-2 border-primary text-primary rounded-md w-[200px] hover:bg-primary hover:text-white transition-all duration-300 ease-in-out"
        >
            Add New Room
        </button>
    </section>
  )
}

export default RoomName