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
    
    const del = {
      doctorId:"234234",
      designation:"cardiologist",
      doctorName:"pandi poser pandi",
      address:"10 main st, las vegas, nagercoil.",
      age:25,
      phoneNumber:"2342342342",
      gender:"male",
      alternateMobileNumber:"2342342342",
      bloodGroup:"A+",
      doctorImage:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAe9NZZk7nUE_anJir2Scf7tsqMHRdEpCbJg&s",
      joiningDate:"10/10/2020",
      relivingDate:"11/11/2024"
    }

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
        <Table tableHead={staffTableHeading} tableValue={data} actionData={actionData} />
        <Pagination />
    </section>
  )
}

export default Staff