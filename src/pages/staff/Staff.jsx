import React from 'react'
import { TableHeader } from '../../Component/common/Table/TableHeader'
import { Table } from '../../Component/common/Table/Table'
import { staffTableHeading, staffTableValue, staffFields , staffPreviewField} from '../../utils/variable/staff'
import { Pagination } from '../../Component/common/Pagination'
import { useModal } from '../../context/ModalContext'
import { FormModal } from '../../Component/modalContents/FormModal'
import PreviewModal from '../../Component/modalContents/PreviewModal'
import { useFetchData } from '../../hooks/useFetchData'

const Staff = () => {

    const {openModal} = useModal()
    const {data,isLoading,error,fetchData:refetch} = useFetchData("/get-all-staff")
    
    const btnData = [
        {
            name:"New Staff",
            onClick : ()=>{ openModal(FormModal, {title:"New Staff", formField:staffFields,fetchData:refetch,name:"/add-staff"})}
        }
    ]

    const actionData = [
      {
        name:"eye",
        onClick : (id)=>{ openModal(PreviewModal, {title:"Staff Details", previewFields:staffPreviewField,data:data}, `/get-staff/${id}`)}
      },
      {
        name: "editpen",
        onClick: () =>  ()=>{ openModal(FormModal, {title:"New Staff", formField:staffFields})}
      }
    ]

  return (
    <section className='p-4'>
        <TableHeader title={"Staff"} buttonData={btnData} />
        <Table tableHead={staffTableHeading} tableValue={data} actionData={actionData} isDoc={true} />
        <Pagination />
    </section>
  )
}

export default Staff