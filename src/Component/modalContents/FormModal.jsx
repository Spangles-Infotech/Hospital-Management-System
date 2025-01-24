import React from 'react'
import { FormLayout } from '../common/FormLayout'

export const FormModal = ({title, formField}) => {
  return (
    <div className='flex flex-col gap-[20px] overflow-y-scroll'>
        <p className='text-[20px] font-[500]'>{title}</p>
        <div className='flex flex-col gap-[10px]'>
            <FormLayout data={formField} />
        </div>
    </div>
  )
}
