import React from 'react'
import { TableHeader } from '../../../Component/common/Table/TableHeader'
import { Table } from '../../../Component/common/Table/Table'
import { FormModal } from '../../../Component/modalContents/FormModal'
import { doctorFeeFormField ,doctorTableHeading, doctorTableValue } from '../../../utils/variable/settings/doctorFee'
import { useModal } from '../../../context/ModalContext'
import {useFetchData} from '../../../hooks/useFetchData'
import { usePatch } from '../../../hooks/usePatch'

const DoctorList = () => {

    const{data,refetch:refetch} = useFetchData("/get-all-doctor")

  const {openModal} = useModal()


  const actionData = [
    {
      name:"editpenblue",
      onClick : (id)=>{openModal(FormModal, {title:"", formField:doctorFeeFormField,refetch:refetch, data:data,name:`/update-doctor-fee/${id}`,id:id,getRoute:`/update-doctor-fee/${id}`})}
      
  }
  ]
  return (
    <section className='px-2 w-[85%]'>
     <TableHeader title={"Doctor List"}/>
     <Table tableHead={doctorTableHeading} tableValue={data} actionData={actionData}/>
    </section>
  )
}

export default DoctorList



// import React from 'react'
// import { TableHeader } from '../../../Component/common/Table/TableHeader'
// import { Table } from '../../../Component/common/Table/Table'
// import { FormModal } from '../../../Component/modalContents/FormModal'
// import { doctorFeeFormField ,doctorTableHeading, doctorTableValue } from '../../../utils/variable/settings/doctorFee'
// import { useModal } from '../../../context/ModalContext'
// import {useFetchData} from '../../../hooks/useFetchData'

// const DoctorList = () => {

//     const{data,refetch:refetch} = useFetchData("/get-all-doctor")

//   const {openModal} = useModal()

//   const actionData = [
//     {
//       name:"editpenblue",
//       onClick: (id) => {
//         const data = doctorTableValue.find((item) => item?.userId?.id === id); // or item.id === id depending on your structure
      
//         openModal(FormModal, {
//           title: (
//             <div className="flex items-center gap-3">
//               <div>
//                 <img
//                   src={data?.userId?.profile || "/default-avatar.png"}
//                   alt="Doctor"
//                   className="w-12 h-12 rounded-full object-cover"
//                 />
//               </div>
//               <div className="flex flex-col">
//                 <p className="font-semibold">{data?.userId?.name}</p>
//                 <p className="text-sm text-gray-600">ID: {data?.userId?.id}</p>
//                 <p className="text-sm text-gray-600">{data?.userId?.designation}</p>
//               </div>
//             </div>
//           ),
//           formField: doctorFeeFormField,
//           refetch: refetch,
//           data: data,
//           isEdit: true,
//           name: `/update-doctor/${id}`,
//           id: id,
//           getRoute: `/get-doctor/${id}`,
//         });
//       }
      
      
//   }
//   ]
//   return (
//     <section className='px-2 w-[85%]'>
//      <TableHeader title={"Doctor List"}/>
//      <Table tableHead={doctorTableHeading} tableValue={data} actionData={actionData}/>
//     </section>
//   )
// }

// export default DoctorList

