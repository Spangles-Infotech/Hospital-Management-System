// import React from 'react'
// import { Table } from '../../Component/common/Table/Table'
// import { TableHeader } from '../../Component/common/Table/TableHeader'
// import { patientFields, tableHeading, tableValue } from '../../utils/variable/patient'
// import { useModal } from '../../context/ModalContext'
// import { FormModal } from '../../Component/modalContents/FormModal'
// import { Pagination } from '../../Component/common/Pagination'
// import { useFetchData } from '../../hooks/useFetchData';

// const Patient = () => {

//   const { data, isLoading, error } = useFetchData("/get-all-patient")

//   const actionData = [
//     {
//       name: "eye",
//     },
//     {
//       name: "editpenblue"
//     }
//   ]

//   const { openModal } = useModal()

//   const btnData = [
//     {
//       name: "New Button",
//       onClick: () => { openModal(FormModal, { title: "New Patients", formField: patientFields }) }
//     }
//   ]

//   return (
//     <section className='p-4'>
//       <TableHeader title={"Patients"} buttonData={btnData} />
//       <Table tableHead={tableHeading} tableValue={data} actionData={actionData}/>
//       <Pagination />
//     </section>
//   )
// }

// export default Patient;


import React from 'react'
import { Table } from '../../Component/common/Table/Table'
import { TableHeader } from '../../Component/common/Table/TableHeader'
import { patientFields, tableHeading, tableValue } from '../../utils/variable/patient'
import { useModal } from '../../context/ModalContext'
import { FormModal } from '../../Component/modalContents/FormModal'
import { Pagination } from '../../Component/common/Pagination'
import { useFetchData } from '../../hooks/useFetchData';
import PreviewModal from '../../Component/modalContents/PreviewModal'
import {patientPreviewField} from '../../utils/variable/patient'


const Patient = () => {

  const { data, isLoading, error,fetchData:refetch } = useFetchData("/get-all-patient")

  const { openModal } = useModal()


  const actionData = [
    {
      name: "eye",
      onClick: (id) => {
        console.log("Patient ID:", id); // Debugging
        openModal(PreviewModal, { title: "patients", previewFields: patientPreviewField }, `/get-patient/${id}`);
      },
    },
    {
      name: "editpenblue"
    }
  ]


  const btnData = [
    {
      name: "New Button",
      onClick: () => { openModal(FormModal, { title: "New Patients", formField: patientFields }) }
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
