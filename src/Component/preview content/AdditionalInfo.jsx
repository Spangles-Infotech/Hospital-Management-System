import React from "react";

export const AdditionalInfo = ({previewField, data}) => {
  return (
    <div className={`p-4 ${! previewField.additionalData ? "hidden" : ""}`}>
      <p className="text-slate-700 font-medium text-xl mb-4">Additional Info</p>
      {previewField.additionalInfo && previewField.additionalInfo.map((info, index) => (
        <div key={index} className="flex items-center gap-3 py-2">
          <p className="text-slate-700 font-medium text-lg w-[150px]">
            {info.label}
          </p>
          {info.note && <p className={`${info.noteColor}`}>{info.note}</p>}
          <p className={`${info.textColor} text-lg font-medium`}>
            {info.value}
          </p>
        </div>
      ))}
    </div>
  );
};
