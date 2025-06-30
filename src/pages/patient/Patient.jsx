import React, { useEffect, useState } from 'react'
import { Table } from '../../Component/common/Table/Table'
import { TableHeader } from '../../Component/common/Table/TableHeader'
import { patientFields, tableHeading } from '../../utils/variable/patient'
import { useModal } from '../../context/ModalContext'
import { FormModal } from '../../Component/modalContents/FormModal'
import { Pagination } from '../../Component/common/Pagination'
import { useFetchData } from '../../hooks/useFetchData'
import PreviewModal from '../../Component/modalContents/PreviewModal'
import { patientPreviewField } from '../../utils/variable/patient'
import { editFormField } from '../../utils/variable/patient'
import { useForm } from '../../context/FormContext'
import { useSelector } from 'react-redux'


const Patient = () => {
  const [searchQuery, setSearchQuery] = useState("")
const globalStr  = useSelector((state) => state.globalString.value);

  const { data, isLoading, error, fetchData:refetch } = useFetchData(`/get-all-patient${globalStr ? `?search=${globalStr}` : ""}`)
  const { openModal } = useModal()
  const { tableForm, handleTableFormChange } = useForm()

  const handleSearch = (value) => {
    console.log(value,"valueee")
    setSearchQuery(value)

    refetch()
  }
  console.log(searchQuery,"searchQuery")

console.log("Global redux string:", globalStr);


  // useEffect(() => {
  //   if (tableForm?.search !== undefined) {
  //     handleSearch(tableForm.search)
  //     console.log(tableForm.search)
  //   }
  // }, [tableForm?.search])
  

  const btnData = [
    {
      name: "New Patient",
      onClick: () => { 
        openModal(FormModal, { title: "New Patients", formField: patientFields, refetch:refetch, name:"/add-patient"});
      }
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
      onClick:(id)=>{openModal(FormModal,{title:"Enter patient ",formField:editFormField, refetch:refetch, isEdit:true, name:`/update-patient/${id}`, getRoute:`/get-patient/${id}`})}
    }
  ]

  
  return (
    <section className='p-4'>
      <TableHeader title={"Patients"} buttonData={btnData} searchValue={globalStr || ""} onSearchChange={handleTableFormChange} />
      <Table tableHead={tableHeading} tableValue={data} actionData={actionData}/>
      <Pagination />
    </section>
  )
}

export default Patient;

