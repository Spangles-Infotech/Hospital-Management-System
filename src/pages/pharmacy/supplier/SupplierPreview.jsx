import React from 'react'
import { useNavigate } from 'react-router-dom'
import { PharmacyPreviewInfo } from '../../../Component/preview content/PharmacyPreviewInfo'
import { supplierPreviewData, supplierPreviewField, supplierPurchaseHeading, supplierPurchaseValue } from '../../../utils/variable/supplier'
import { TableHeader } from '../../../Component/common/Table/TableHeader'
import { Table } from '../../../Component/common/Table/Table'

const SupplierPreview = () => {

  const navigate = useNavigate()

  const actionData = [
    {
      name:"eye",
      onClick:()=>{ navigate("/admin/pharmacy/suppliers/purchase-preview")}
    }
  ]

  return (
    <section className='p-4 flex flex-col gap-[20px]'>
      <img src={require("../../../assests/left-arrow.png")} className='size-[25px] object-contain' alt='arrow-icon' onClick={()=>navigate("/admin/pharmacy/suppliers")} />
      <PharmacyPreviewInfo fields={supplierPreviewField} data={supplierPreviewData} />
      <div className='flex flex-col'>
        <TableHeader title={"Purchase History"} isSearch={false} />
        <Table tableHead={supplierPurchaseHeading} tableValue={supplierPurchaseValue} actionData={actionData} />
      </div>
    </section>
  )
}

export default SupplierPreview ;