import React from 'react'
import { TableHeader } from '../Component/common/Table/TableHeader'
import { Table } from '../Component/common/Table/Table'
import { staffTableHeading, staffTableValue, staffFields } from '../utils/variable/staff'
import { Pagination } from '../Component/common/Pagination'
import { useModal } from '../context/ModalContext'
import { FormModal } from '../Component/modalContents/FormModal'
import PreviewModal from '../Component/modalContents/PreviewModal'

const Staff = () => {

    const {openModal} = useModal()
    
    const btnData = [
        {
            name:"New Staff",
            onClick : ()=>{ openModal(FormModal, {title:"New Staff", formField:staffFields})}
        }
    ]
    
    const actionData = [
      {
        name:"eye",
        onClick : ()=>{ openModal(PreviewModal, {title:"Staff Details"})}
      },
      {
        name: "editpen",
        onClick: () =>  ()=>{ openModal(FormModal, {title:"New Staff", formField:staffFields})}
      }
    ]

    const staffPreviewField = [
      {
        head:[
          {
            title:"DoctorId",
            name:"doctorId"
          },
          {
            title: "Designation",
            name:"designation"
          }
        ],
        fields:[
          {
            label:"Doctor Name",
            name:"doctorName"
          },
          {
            label:"Address",
            name:"address"
          },
          {
            label:"Age",
            name:"age"
          },
          {
            label:"Phone Number",
            name:"phoneNumber"
          },
          {
            label:"Gender",
            name:"gender"
          },
          {
            label:"Alternate Mobile Number",
            name:"alternateMobileNumber"
          },
          {
            label:"Blood Group",
            name:"bloodGroup"
          }
        ],
        timings:[
          {
            label:"Monday",
            from:"09:30AM",
            to:"05:00PM"
          },
          {
            label:"Monday",
            from:"09:30AM",
            to:"05:00PM"
          },
          {
            label:"Monday",
            from:"09:30AM",
            to:"05:00PM"
          }
        ]
      }
      
    ]

  return (
    <section className='p-4'>
        <TableHeader title={"Staff"} buttonData={btnData} />
        <Table tableHead={staffTableHeading} tableValue={staffTableValue} actionData={actionData} />
        <Pagination />
    </section>
  )
}

export default Staff