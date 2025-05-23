import React from 'react'
import { Table } from '../../Component/common/Table/Table'
import { TableHeader } from '../../Component/common/Table/TableHeader'
import { patientFields, tableHeading } from '../../utils/variable/patient'
import { useModal } from '../../context/ModalContext'
import { FormModal } from '../../Component/modalContents/FormModal'
import { Pagination } from '../../Component/common/Pagination'
import { useFetchData } from '../../hooks/useFetchData';
import PreviewModal from '../../Component/modalContents/PreviewModal'
import {patientPreviewField} from '../../utils/variable/patient'
import { editFormField } from '../../utils/variable/patient'


const Patient = () => {

  const { data, isLoading, error, fetchData:refetch } = useFetchData("/get-all-patient")
  const { openModal } = useModal()

 
  const btnData = [
    {
      name: "New Patient",
      onClick: () => { openModal(FormModal, { title: "New Patients", formField: patientFields ,refetch:refetch,name:"/add-patient"}) }
    }
  ]


  const actionData = [
    {
      name: "eye",
      onClick: (id) => {
        openModal(PreviewModal, { title: "patients", previewFields: patientPreviewField }, `/get-patient/${id}`);
      },
    },
    {
      name: "editpenblue",
      onClick:(id)=>{openModal(FormModal,{title:"Enter patient ",formField:editFormField, refetch:refetch, isEdit:true, name:`/update-patient`, id:id, getRoute:`/get-patient/${id}`})}
    }
  ]

  
  return (
    <section className='p-4'>
      <TableHeader title={"Patients"} buttonData={btnData} />
      <Table tableHead={tableHeading} tableValue={data} actionData={actionData}/>
      <Pagination />
    </section>
  )
}

export default Patient;

