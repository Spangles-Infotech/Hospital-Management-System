import React from 'react'
import { IncomeTab } from '../../Component/reports/IncomeTab'
import { FormLayout } from '../../Component/common/FormLayout'
import { Table } from '../../Component/common/Table/Table'
import { Pagination } from '../../Component/common/Pagination'
import { Total } from '../../Component/common/Table/Total'
import { useCommon } from '../../hooks/useCommon'
import { Form } from '../../Component/common/Form'
import { useForm } from '../../context/FormContext'

const Reports = ({tableHead, tableValue, filterFields, isIncome=false}) => {

    const {tab} = useCommon()
    const {formData, handleChange, errors} = useForm()

    const data = [
        [
            {
                label:"Doctor's Name",
                name:"doctorName",
                type:"select",
                options:["Mathews", "Georgie", "Mandy"]
            },
            {
                label:"Date From",
                name:"From",
                type:"date"
            },
            {
                label:"Date To",
                name:"To",
                type:"date"
            },
            {
                name:"search",
                type:"search"
            }
        ]
    ]

    const amount = {
        totalAmount :"18000"
    }

    const head = isIncome ? tableHead?.[tab] : tableHead
    const value = isIncome ? tableValue?.[tab] : tableValue
    const formFields = isIncome ? filterFields?.[tab] : filterFields

  return (
    <section className='mx-4 w-[85%] h-full px-4 flex flex-col gap-[20px]'>
        <IncomeTab isIncome={isIncome} />
        <div className='flex items-center gap-[15px] flex-wrap bg-white rounded-[15px] p-4 py-8'>
            {/* <FormLayout data={formFields} isWrap={true} /> */}
            {
                formFields.map((item)=>(
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
            <Table tableHead={head} tableValue={value} />
        </div>
        <Pagination />
        {
            isIncome &&
            <Total data={amount} />
        }
    </section>
  )
}

export default Reports