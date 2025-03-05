import React from 'react'
import { TableHeader } from '../../Component/common/Table/TableHeader'
import { Table } from '../../Component/common/Table/Table'
import { Pagination } from '../../Component/common/Pagination'
import { doctorFields, doctorPreviewField, doctorTableHeading, doctorTableValue, previewData,editDocterPreview } from '../../utils/variable/doctor'
import { useModal } from '../../context/ModalContext'
import { FormModal } from '../../Component/modalContents/FormModal'
import PreviewModal from '../../Component/modalContents/PreviewModal'
import { InactiveModal } from '../../Component/modalContents/InactiveModal'
import { useFetchData } from '../../hooks/useFetchData'

const Doctor = () => {


    const{data,isLoading, fetchData:refetch} = useFetchData("/get-all-doctor")
    const {openModal} = useModal()
    
    const btnData = [
        {
            name:"New Doctor",
            onClick : ()=>{ openModal(FormModal, {title:"New Doctor", formField:doctorFields, refetch:refetch, name:"/add-doctor"})}
        }
    ]

    const actionData = [
        {
            name:"tripledot",
            data:[
                
                {
                    name:"eye",
                    title:"View Doctor",
                    onClick: (id)=>{ 
                        console.log("edit docter id",id)
                        openModal(PreviewModal, {title:"Doctor Details", previewFields:doctorPreviewField},`/get-doctor/${id}`)
                    }
                },
                {
                    name:"edit",
                    title:"Edit",
                    onClick:(id)=>{
                        console.log("edit docter id",id)
                        openModal(FormModal,{title:"enter docter",formField:editDocterPreview,refetch:refetch,isEdit:true,name:`/update-doctor/${id}`,id:id,getRoute:`/get-doctor/${id}`})}
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
        <Table tableHead={doctorTableHeading} tableValue={data} actionData={actionData} isLoading={isLoading} isDoc={true} />
        <Pagination />
    </section>
  )
}

export default Doctor