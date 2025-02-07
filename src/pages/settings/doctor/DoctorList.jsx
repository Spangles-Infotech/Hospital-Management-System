import React from 'react'
import { TableHeader } from '../../../Component/common/Table/TableHeader'
import { Table } from '../../../Component/common/Table/Table'
import { FormModal } from '../../../Component/modalContents/FormModal'
import { doctorFeeFormField ,doctorTableHeading, doctorTableValue } from '../../../utils/variable/settings/doctorFee'
import { useModal } from '../../../context/ModalContext'

const DoctorList = () => {

  const {openModal} = useModal()

  const data = {
    doctorName:"Mathews",
    doctorId:"DOB0015678",
    designation:"Dermatologist",
    image:"https://static.vecteezy.com/system/resources/thumbnails/026/375/249/small_2x/ai-generative-portrait-of-confident-male-doctor-in-white-coat-and-stethoscope-standing-with-arms-crossed-and-looking-at-camera-photo.jpg"
  }

  const actionData = [
    {
      name:"editpenblue",
      onClick : ()=>{openModal(FormModal, {title:"", formField:doctorFeeFormField, data:data})}
  }
  ]
  return (
    <section className='px-2 w-[85%]'>
     <TableHeader title={"Doctor List"}/>
     <Table tableHead={doctorTableHeading} tableValue={doctorTableValue} actionData={actionData}/>
    </section>
  )
}

export default DoctorList