import React from 'react'
import { reportInPatientTableHead, reportOutPatientFilterFields } from '../../utils/variable/reports/outpatient'
import { useFetchData } from '../../hooks/useFetchData'
import { Form } from '../../Component/common/Form'
import { Table } from '../../Component/common/Table/Table'
import { Pagination } from '../../Component/common/Pagination'
import { useForm } from '../../context/FormContext'

const InPatitents = () => {

    const {formData, handleChange, errors} = useForm()
    const  {data, isLoading, refetch} = useFetchData("/get-all-ip-patient", `from=${formData?.from}&to=${formData?.to}&doctorName=${formData?.doctorName}&gender=${formData?.gender}&bloodGroup=${formData?.bloodGroup}`)

  return (
    <section className='flex flex-col gap-[50px]'>
         <div className='flex items-center gap-[15px] flex-wrap bg-white rounded-[15px] p-4 py-8'>
            {
                reportOutPatientFilterFields?.map((item)=>(
                    <div key={item.name} className="w-[30%]">
                        <Form item={item} formData={formData} handleChange={handleChange} errors={errors} isBorder={true} />
                    </div>
                ))
            }
        </div>
        <div className='flex flex-col gap-[10px] bg-white p-2 rounded-xl'>
            <div className='flex gap-[20px] w-full justify-end items-center pr-10'>
                <img src={require("../../assests/download.png")} alt="download-icon" className='size-[35px] object-contain cursor-pointer' />
                <img src={require("../../assests/printBg.png")} alt="print-icon" className='size-[35px] object-contain cursor-pointer' />
            </div>
            <Table tableHead={reportInPatientTableHead} tableValue={data} isLoading={isLoading} />
        </div>
        <Pagination />
    </section>
  )
}

export default InPatitents