import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { PharmacyPreviewInfo } from '../../../Component/preview content/PharmacyPreviewInfo'
import { supplierPreviewField, supplierPurchaseHeading } from '../../../utils/variable/supplier'
import { TableHeader } from '../../../Component/common/Table/TableHeader'
import { Table } from '../../../Component/common/Table/Table'
import { useFetchData } from '../../../hooks/useFetchData'
import { purchaseTableHeading } from '../../../utils/variable/purchase'

const SupplierPreview = () => {

  const navigate = useNavigate()
  
  const {id} = useParams()

  const {data, isLoading, error} = useFetchData(`/get-supplier/${id}`)


  const actionData = [
    {
      name:"eye",
      onClick:(id)=>{ navigate(`/admin/pharmacy/suppliers/purchase-preview/${id}`)}
    }
  ]

  return (
    <section className='p-4 flex flex-col gap-[20px]'>
      <img src={require("../../../assests/left-arrow.png")} className='size-[25px] object-contain' alt='arrow-icon' onClick={()=>navigate("/admin/pharmacy/suppliers")} />
      <PharmacyPreviewInfo fields={supplierPreviewField} data={data} />
      <div className='flex flex-col'>
        <TableHeader title={"Purchase History"} isSearch={false} />
        <Table tableHead={purchaseTableHeading} tableValue={data["purchaseHistory"]} actionData={actionData} />
      </div>
    </section>
  )
}

export default SupplierPreview ;