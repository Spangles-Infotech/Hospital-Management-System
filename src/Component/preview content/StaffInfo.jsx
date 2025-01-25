import React from 'react'

export const StaffInfo = ({previewField, data}) => {
  return (
    <div className={`py-4 flex gap-[10px] ${!previewField?.isStaff ? "hidden" : ""}`}>
        <div className="w-[50%] flex items-center justify-center">
            <img
            src={data[previewField?.image?.name]}
            alt="Doctor"
            className="rounded-lg size-[175px] object-cover"
            />
        </div>
        <div className='w-[50%] flex flex-col gap-[10px]'>
            {
                previewField?.staffInfo && (
                    previewField.staffInfo.map((field, index) => (
                        <div key={field.title} className="flex items-center gap-3 w-full">
                            <p className="text-customBlack font-[600]  text-[16px] w-[50%]">
                            {field.title}
                            </p>
                            <p className={`w-[50%] ${field.name === "bloodgroup" ? "text-[#00BE5F]" : "text-secondaryBlue"} text-[16px] font-[600] `}>
                            {data[field.name]}
                            </p>
                        </div>
                    ))
                )
            }
        </div>
    </div>
  )
}
