import React from 'react'

export const PharmacyPreviewInfo = ({fields, data, isPreviewWithIcon=true}) => {
  return (
    <div className='bg-white rounded-[15px] border-2 border-primary p-4 flex flex-wrap gap-[15px] items-center'>
        {
            fields.map((field)=>(
                <div className='flex gap-[15px] items-center w-[30%]' key={field?.name}>
                    {
                        isPreviewWithIcon ?
                            <>
                                <img src={require(`../../assests/${field?.icon}.png`)} alt={`${field.name}-icon`} className='size-[40px] object-contain' />
                                <div className='flex flex-col gap-1'>
                                    <p className='font-[700]'>{data[field.name]}</p>
                                    <p className='text-[16px]'>{field.label === "Supplier ID" ? data["supplierId"] : field.label}</p>
                                </div>
                            </>
                        :
                            <div className='flex flex-row gap-2 items-center'>
                                <p className='text-[18px] text-customBlack font-[700] w-[200px]'>{field?.label}</p>
                                <p className='text-[16px] text-customBlac'>{data[field?.name]}</p>
                            </div>
                    }
                </div>
            ))
        }
    </div>
  )
}
