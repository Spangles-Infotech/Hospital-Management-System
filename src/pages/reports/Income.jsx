import React from 'react'
import { Table } from '../../Component/common/Table/Table'
import { useCommon } from '../../hooks/useCommon'
import { incomeFilterFields, incomeNames, incomeTableHead, incomeTableValue } from '../../utils/variable/reports/income'
import { Pagination } from '../../Component/common/Pagination'
import { Total } from '../../Component/common/Table/Total'
import { FormLayout } from '../../Component/common/FormLayout'
import { useFetchData } from '../../hooks/useFetchData'
import { IncomeTab } from '../../Component/reports/IncomeTab'

const Income = () => {
    const {tab} = useCommon()
    const {data, isLoading} = useFetchData(incomeNames[tab])
    const amount = {
        totalAmount :"18000"
    }
    const incomeTab = [
        {
            name:"Doctor Fee",
            path:"doctor-fee"
        },
        {
            name:"Pharmacy",
            path:"pharmacy"
        },
        {
            name:"Out Patients",
            path:"out-patients"
        },
        {
            name:"In Patients",
            path:"in-patients"
        }
    ]
    console.log("incomeFilterFields[tab]", incomeFilterFields[tab])
  return (
    <section className='flex flex-col gap-[50px] w-full'>
        <IncomeTab data={incomeTab} isIncome={true}/>
        <div className='flex items-center gap-[15px] flex-wrap bg-white rounded-[15px] p-4 py-8'>
            <FormLayout data={incomeFilterFields[tab]} />
        </div>
        <div className='flex flex-col gap-[10px] bg-white p-2 rounded-xl'>
            <div className='flex gap-[20px] w-full justify-end items-center pr-10'>
                <img src={require("../../assests/download.png")} alt="download-icon" className='size-[35px] object-contain cursor-pointer' />
                <img src={require("../../assests/printBg.png")} alt="print-icon" className='size-[35px] object-contain cursor-pointer' />
            </div>
            <Table tableHead={incomeTableHead[tab]} tableValue={data} isLoading={isLoading} /> 
        </div>
        <Pagination />
        <Total data={amount} />
    </section>
  )
}

export default Income