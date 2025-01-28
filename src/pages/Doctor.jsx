import React from 'react'
import { TableHeader } from '../Component/common/Table/TableHeader'
import { Table } from '../Component/common/Table/Table'
import { Pagination } from '../Component/common/Pagination'
import { doctorFields, doctorPreviewField, doctorTableHeading, doctorTableValue, previewData } from '../utils/variable/doctor'
import { useModal } from '../context/ModalContext'
import { FormModal } from '../Component/modalContents/FormModal'
import PreviewModal from '../Component/modalContents/PreviewModal'
import { InactiveModal } from '../Component/modalContents/InactiveModal'

const Doctor = () => {
    const {openModal} = useModal()
    
    const btnData = [
        {
            name:"New Doctor",
            onClick : ()=>{ openModal(FormModal, {title:"New Doctor", formField:doctorFields})}
        }
    ]
    const actionData = [
        {
            name:"tripledot",
            data:[
                {
                    name:"eye",
                    title:"View Doctor",
                    onClick:()=>{ openModal(PreviewModal, {title:"Doctor Details", previewFields:doctorPreviewField , data:previewData})}
                },
                {
                    name:"edit",
                    title:"Edit",
                    onClick:()=>{console.log("edit clicked")}
                },
                {
                    name:"inactive",
                    title:"Inactive",
                    onClick:()=>{openModal(InactiveModal, {title:""})}
                }
            ]
        }
    ]


  return (
    <section className='p-4'>
        <TableHeader title={"Doctor"} buttonData={btnData} />
        <Table tableHead={doctorTableHeading} tableValue={doctorTableValue} actionData={actionData} />
        <Pagination />
    </section>
  )
}

export default Doctor