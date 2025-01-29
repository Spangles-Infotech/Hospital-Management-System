import React, { Fragment } from "react";
import { Timing } from "../preview content/Timing";
import { AdditionalInfo } from "../preview content/AdditionalInfo";
import { StaffInfo } from "../preview content/StaffInfo";
import { BarcodePreview } from "../preview content/BarcodePreview";

const PreviewModal = ({ title, previewFields, data }) => {

  return (
    <div className="w-full">
      {previewFields?.map((previewField, index) => (
        <Fragment key={index}>
          <div className="flex items-center justify-between py-4 pt-8  border-[#DCFFFF]">
            <div className="flex items-center gap-3">
              {/* <img
                src={require(`../../assests/${previewField?.icon}.png`)}
                alt="Patient Detail"
                className="w-8 h-8"
              /> */}
              <p className="text-slate-700 text-xl font-medium">{title}</p>
            </div>
            {previewField?.head && previewField?.head.map((item) => (
              <div className="flex items-center gap-3">
                <p className="text-slate-700 text-[18px] font-[600]">
                  {item.title}:
                </p>
                <p className={` text-[18px] font-[600] ${item.title === "Designation" ? "text-[#740058]" : "text-green-500"}`}>
                  {data?.[item?.name]}
                </p>
              </div>
            ))}
          </div>
          <div className="w-full h-[1px] bg-[#DCFFFF]"></div>
          <div className={`flex flex-wrap gap-[10px] py-4 w-[700px] ${previewField.isSingle ? "hidden" : ""}`}>
              {
                previewField.fields.map((field)=>(
                  <div key={field.label} className="flex items-center gap-3 w-[49%]">
                    <p className="text-customBlack font-[600]  text-[16px] w-[50%]">
                      {field.label}
                    </p>
                    <p className={`w-[50%] ${field.name === "bloodgroup" ? "text-[#00BE5F]" : "text-secondaryBlue"} text-[16px] font-[600] `}>
                      {data[field.name]}
                    </p>
                  </div>
                ))
              }
          </div>
          <div className="w-[500px] flex flex-wrap gap-[10px] py-4 ">
            {
              previewField.isSingle && previewField.fields.map((field)=>(
                <div key={field.label} className="flex items-center gap-3 w-full">
                  <p className="text-customBlack font-[600]  text-[16px] w-[50%]">
                    {field.label}
                  </p>
                  <p className={`w-[50%] ${field.name === "bloodgroup" ? "text-[#00BE5F]" : "text-secondaryBlue"} text-[16px] font-[600] `}>
                    {data[field.name]}
                  </p>
                </div>
              ))
            }
          </div>
          <BarcodePreview data={data} previewField={previewField} />
          <div className="w-full h-[1px] bg-[#DCFFFF]"></div>
          <Timing data={data} previewField={previewField} />
          <StaffInfo data={data} previewField={previewField} />
          <AdditionalInfo data={data} previewField={previewField} />
        </Fragment>
      ))}
    </div>
  );
};

export default PreviewModal;
