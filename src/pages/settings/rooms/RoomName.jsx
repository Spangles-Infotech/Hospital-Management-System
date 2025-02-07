import React from 'react'
import { TableHeader } from '../../../Component/common/Table/TableHeader'
import { Table } from '../../../Component/common/Table/Table'
import { roomFormField, roomTableHeading, roomTableValue } from '../../../utils/variable/settings/room'
import { useModal } from '../../../context/ModalContext'
import { FormModal } from '../../../Component/modalContents/FormModal'
import { InactiveModal } from '../../../Component/modalContents/InactiveModal'

const RoomName = () => {

    const {openModal} = useModal()
    const field = [
        {
            label:"Section",
            name:"section",
        },
        {
            label:"No. of Rooms",
            name:"noOfRooms",
        }
    ]
    const data = {
        section: "Floor no. 01",
        noOfRooms: 10,
    }
    const actionData = [
        {
          name:"tripledot",
          data:[
            {
              name:"edit",
              title:"Edit Rent",
              onClick: ()=>{}
            },
            {
              name:"inactive",
              title:"Inactive",
              onClick: ()=>{openModal(InactiveModal, {title:"Floor no. 01", btnTitle:"Room",field: field, data:data})}
            } 
          ]
        }
      ]
      
    const handleAddRoom = ()=>{
        openModal(FormModal, {title:"New Room", formField:roomFormField})
    }
  return (
    <section className=' w-[85%] flex flex-col gap-[15px]'>
        <div className='px-2 bg-white'>
            <TableHeader title={"Floor no. 01"}  />
            <Table tableHead={roomTableHeading} tableValue={roomTableValue} actionData={actionData}  />
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