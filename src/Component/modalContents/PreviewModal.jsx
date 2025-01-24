import React, { Fragment } from "react";
import PatientDetailIcon from "../../assests/PatientDetailIcon.png";
import barcodeIcon from "../../assests/Barcode.png";
import { PrintIcon } from "../../icons/PrintIcon";

const PreviewModal = ({ title, previewFields, data }) => {
  const additionalInfo = [
    {
      label: "Birth Place",
      value: "Padma Hospital, Thiruvatta",
      textColor: "text-primary",
    },
    { label: "Birth Time", value: "10:30 AM", textColor: "text-primary" },
    {
      label: "Weight",
      value: "10kg",
      textColor: "text-primary",
      note: "(When born)",
      noteColor: "text-slate-700 text-sm",
    },
  ];

  return (
    <div className="w-full">
      {previewFields?.map((previewField, index) => (
        <Fragment key={index}>
          <div className="flex items-center justify-between p-4 pt-8  border-primary">
            <div className="flex items-center gap-3">
              <img
                src={PatientDetailIcon}
                alt="Patient Detail"
                className="w-8 h-8"
              />
              <p className="text-slate-700 text-xl font-medium">{title}</p>
            </div>
            {previewField?.head.map((item) => (
              <div className="flex items-center gap-3">
                <p className="text-slate-700 text-lg font-medium">
                  {item.title}:
                </p>
                <p className="text-green-500 text-lg font-medium">
                  {data[item.name]}
                </p>
              </div>
            ))}
          </div>
          <div className="w-full h-[1px] bg-primary"></div>
          <div className="flex flex-wrap gap-[10px] p-4">
              {
                previewField.fields.map((field)=>(
                  <div key={field.label} className="flex items-center gap-3">
                    <p className="text-slate-700 font-medium text-lg w-[150px]">
                      {field.label}
                    </p>
                    <p className={`${field.name === "bloodgroup" ? "text-[#00BE5F]" : "text-primary"} text-lg font-medium`}>
                      {data[field.name]}
                    </p>
                  </div>
                ))
              }
          </div>

          {/* <div className="flex justify-center -mt-7">
            <img src={barcodeIcon} alt="Barcode" className="w-[350px]" />
          </div>
          <div className="flex justify-center ">
            <button className="flex items-center gap-2 px-4 py-2 border border-primary text-primary rounded-lg hover:bg-primary hover:text-white transition-all duration-500">
              <PrintIcon />
              <p className="font-medium">Print</p>
            </button>
          </div> */}

          <div className="w-full h-[1px] bg-primary mt-4"></div>

          <div className="p-6">
            <p className="text-slate-700 font-medium text-xl mb-4">
              Additional Info
            </p>
            {additionalInfo.map((info, index) => (
              <div key={index} className="flex items-center gap-3 py-2">
                <p className="text-slate-700 font-medium text-lg w-[150px]">
                  {info.label}
                </p>
                {info.note && (
                  <p className={`${info.noteColor}`}>{info.note}</p>
                )}
                <p className={`${info.textColor} text-lg font-medium`}>
                  {info.value}
                </p>
              </div>
            ))}
          </div>
        </Fragment>
      ))}
    </div>
  );
};

export default PreviewModal;
