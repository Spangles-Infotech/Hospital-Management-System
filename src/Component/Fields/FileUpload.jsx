import React, { useState } from "react";
import fileimg from "../../assests/eye.png";

export const FileUpload = ({label, value, onChange, name, errors, title}) => {

    const [file, setFile] = useState(null);
    const handleFileChange = (event) => {
        onChange(event)
        const uploadedFile = event.target.files[0];
        if (uploadedFile) {
        const fileUrl = URL.createObjectURL(uploadedFile);
        setFile(fileUrl);
        }
    };

    const handleRemoveImage = ()=>{
      setFile(null)
    }

  return (
    <div className="flex flex-col gap-[10px] w-full">
      <label className="heading font-roboto font-[500] text-lg text-customBlackColorFont2 mb-3">{label}</label>
      <div className="flex items-center justify-center border-dashed border-2 border-[#1F9CC6] rounded-[15px] size-auto p-3 relative">
        <input
          type="file"
          id="avatar"
          value={value?.[name]}
          name={name}
          accept="image/png, image/jpeg"
          className="absolute inset-0 opacity-0 cursor-pointer"
          onChange={handleFileChange}
          style={{ display: "flex" }}
        />
        {file ? (
          <>
            <img
              src={file}
              className="size-[80px] z-[10]  object-cover"
              alt="upload-image-icon"
            />
            <img src={require("../../assests/cancel.png")} alt="remove-icon" className="absolute top-3 right-3 size-[20px] cursor-pointer" onClick={handleRemoveImage} />
          </>
        ) : (
          <div>
              <p className="text-[#1F9CC6] underline text-[14px] font-[400]">{title}</p>
          </div>
        )}
      </div>
      {
        errors && errors[name] &&
        <p className="text-red-500 text-[14px]">{errors[name]}</p>
      }
    </div>
  );
};

