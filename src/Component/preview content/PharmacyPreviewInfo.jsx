import React from 'react'
import { FormLayout } from '../common/FormLayout'

export const PharmacyPreviewInfo = ({fields, data, isPreviewWithIcon=true, isForm=false}) => {
  return (
    <div className= {`bg-white rounded-[15px] border border-primary p-5 flex ${isForm ? "flex-col" : "flex-wrap" } gap-[15px]`}>
        <div className={`flex justify-between items-center gap-[20px] ${!isForm ? "hidden" : "" }`}>
            <p className='text-[20px] font-[600] text-primary'>New Purchase</p>
            <div>
                <p className='text-[20px] font-[500] text-primary'>New Purchase</p>
                <p className='text-[#EB9034] font-[600] text-[20px]'>OBIL2024015</p>
            </div>
        </div>
        <div className={`flex gap-[15px] flex-wrap items-center w-full ${!isForm ? "hidden" : ""}`}>
            <FormLayout data={fields} />
        </div>
        {
            data && fields.map((field)=>(
                <div className={`flex gap-[15px] items-center w-[30%] ${!data ? "hidden" : ""}`} key={field?.name}>
                    {
                        isPreviewWithIcon ?
                            <>
                                <img src={require(`../../assests/${field?.icon}.png`)} alt={`${field.name}-icon`} className='size-[40px] object-contain' />
                                <div className='flex flex-col gap-1'>
                                    <p className='font-[700] h-[40px]'>{data[field.name]}</p>
                                    <p className='text-[16px] min-h-[40px]'>{field.label === "Supplier ID" ? data["supplierId"] : field.label}</p>
                                </div>
                            </>
                        :
                            <div className='flex flex-row gap-2 items-center'>
                                <p className='text-[18px] text-customBlack font-[700] w-[200px] min-h-[40px] align-middle'>{field?.label}</p>
                                <p className='text-[16px] text-customBlack min-h-[40px]'>{data[field?.name]}</p>
                            </div>
                    }
                </div>
            ))
        }
    </div>
  )
}
