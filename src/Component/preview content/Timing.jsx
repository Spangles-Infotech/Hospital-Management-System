import React, { Fragment } from "react";

export const Timing = ({ data, previewField }) => {
  return (
    <div className={`py-4 flex gap-[10px] ${!data.timing ? "hidden" : ""}`}>
      <div className="w-[70%]">
        <h2 className="text-xl font-semibold text-gray-700 mb-4">Timings</h2>
        <div className="grid grid-cols-3 gap-4 text-gray-600">
          {data?.timing &&
            data.timing.map((timing, index) => (
              <Fragment key={index}>
                <div className="font-medium">{timing.day}</div>
                <div>{timing.startTime}</div>
                <div>{timing.endTime}</div>
              </Fragment>
            ))}
        </div>
      </div>
      <div className="w-[30%] flex items-center justify-center">
        <img
          src={previewField.image.isNested ? data[previewField?.image?.name1]?.[previewField?.image?.name2] :  data[previewField?.image?.name]}
          alt="Doctor"
          className="rounded-lg size-[175px] object-cover"
        />
      </div>
    </div>
  );
};
