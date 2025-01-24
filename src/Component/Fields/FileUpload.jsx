import React, { useState } from "react";
import fileimg from "../../assests/eye.png";

export const FileUpload = ({label, value, onChange, name, errors}) => {

    const [file, setFile] = useState(null);
    const handleFileChange = (event) => {
        onChange(event)
        const uploadedFile = event.target.files[0];
        if (uploadedFile) {
        const fileUrl = URL.createObjectURL(uploadedFile);
        setFile(fileUrl);
        }
    };

  return (
    <div className="flex flex-col md:flex-row gap-[20px]">
      <div className="flex items-center justify-center border-dashed border-2 border-[#C3C3C3] rounded-[15px] size-auto p-3 relative">
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
          <img
            src={file}
            className="size-[80px] z-[10]  object-cover"
            alt="upload-image-icon"
          />
        ) : (
          <img
            src={fileimg}
            className="size-[80px] md:size-[40px]  object-contain transition-all duration-500 ease-in-out"
            alt="upload-image-icon"
          />
        )}
      </div>
      <div className="flex flex-col gap-2">
        <div className="flex gap-2">
            <button className="rounded-lg border-2 border-[#C3C3C3] w-[80px] h-[40px] text-[#505050] hover:text-white font-[500] hover:bg-[#C3C3C3] transition-all duration-500">Upload</button>
            <button className="rounded-lg border-2 border-[#148CF0] bg-[#148CF0] w-[80px] h-[40px] text-[#FFFFFF] font-[500] hover:bg-white hover:text-[#148CF0] transition-all duration-500">Remove</button>
        </div>
        <div>
            <p className="m-0 text-[14px] font-[400]">Upload OR code image size 4MB, Format JPG, PNG, SVG</p>
        </div>
      </div>
      {
        errors && errors[name] &&
        <p className="text-red-500 text-[14px]">{errors[name]}</p>
      }
    </div>
  );
};

