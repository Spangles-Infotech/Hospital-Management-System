import React from 'react'
import { Print } from '../common/Print'

export const BarcodePreview = ({previewField, data}) => {
  return (
      previewField?.image?.name && previewField?.isBarcode &&
      <div className='flex flex-col gap-[10px] justify-center items-center p-4'>
          <div className="flex justify-center -mt-7">
          <img src={require(`../../assests/${previewField.image.name}.png`)} alt="Barcode" className="w-[350px]" />
          </div>
          <Print />
      </div>
  )
}
