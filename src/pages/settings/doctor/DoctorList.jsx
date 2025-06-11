import React from 'react'
import { TableHeader } from '../../../Component/common/Table/TableHeader'
import { Table } from '../../../Component/common/Table/Table'
import { FormModal } from '../../../Component/modalContents/FormModal'
import { doctorFeeFormField ,doctorTableHeading } from '../../../utils/variable/settings/doctorFee'
import { useModal } from '../../../context/ModalContext'
import {useFetchData} from '../../../hooks/useFetchData'

const DoctorList = () => {

  const {openModal} = useModal()
  const{data,fetchData:refetch} = useFetchData("/get-all-doctor")
  const actionData = [
    {
      name:"editpenblue",
      onClick : (id, item)=>{openModal(FormModal, {title:"", formField:doctorFeeFormField, refetch:refetch, data:item,name:`/update-doctor-fee/${item.userId._id}`,id:item.userId._id, getRoute:`/update-doctor-fee/${item.userId._id}`, isPatch:true})}
      
    }
  ]
  return (
    <section className='px-2 w-[85%]'>
     <TableHeader title={"Doctor List"}/>
     <Table tableHead={doctorTableHeading} tableValue={data} actionData={actionData} isDoc={true}/>
    </section>
  )
}

export default DoctorList



