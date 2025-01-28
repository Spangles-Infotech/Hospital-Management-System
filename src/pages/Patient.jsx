import React from 'react'
import { Table } from '../Component/common/Table/Table'
import { TableHeader } from '../Component/common/Table/TableHeader'
import { patientFields, patientPreviewData, patientPreviewField, tableHeading, tableValue } from '../utils/variable/patient'
import { useModal } from '../context/ModalContext'
import { FormModal } from '../Component/modalContents/FormModal'
import { Pagination } from '../Component/common/Pagination'
import PreviewModal from '../Component/modalContents/PreviewModal'

const Patient = () => {

  const {openModal} = useModal()
  const btnData = [
    {
      name:"New Button",
      onClick: ()=>{ openModal( FormModal, {title:"New Patients", formField:patientFields })}
    }
  ]

  const actionData = [
    {
      name:"eye",
      onClick : ()=>{ openModal(PreviewModal, {title:"Patient Details", previewFields:patientPreviewField, data:patientPreviewData})}
    },
    {
      name: "editpen",
      onClick: () =>  ()=>{ openModal(FormModal, {title:"Edit Patient", formField:patientFields})}
    }
  ]


  return (
    <section className='p-4'>
        <TableHeader title={"Patients"} buttonData={btnData}  />
        <Table tableHead={tableHeading} tableValue={tableValue} actionData={actionData} />
        <Pagination />
    </section>
  )
}

export default Patient