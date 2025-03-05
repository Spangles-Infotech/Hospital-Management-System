import React, { useState } from 'react';
export const ToolTip = ({ data, children, isGap=false, name, id}) => {

    const [showTooltip, setShowTooltip] = useState(false);

    const isTripleDot = name === "tripledot"

    return (
        <div
            className={`relative inline-block ${data ? "cursor-pointer" : ""}`}
            onMouseEnter={() => setShowTooltip(true)}
            onMouseLeave={() => setShowTooltip(false)}
        >
            {children}
            <div
                className={`absolute flex flex-col gap-[10px] left-[-110px] p-2 ${isGap ? "mt-2" : "mb-2"} w-[150px]  text-sm bg-white rounded-lg shadow-[0px_4px_10px_0px_#00000040] transition-all duration-500 
                ${showTooltip && isTripleDot ? `visible z-50 opacity-100 before:content-[""] before:absolute before:-top-[8px] before:right-[12px] before:transform before:-translate-x-1/2 before:border-b-[8px] before:border-b-white before:border-l-[8px] before:border-l-transparent before:border-r-[8px] before:border-r-transparent` : `invisible -z-10 opacity-0`}`}
            >
                {
                    data?.map((item, index)=>(
                        <>
                            <div className='flex gap-[15px]' onClick={()=> item.onClick(id)}>
                                <img src={require(`../../assests/${item.name}.png`)} alt={`${item.name}Icon`} className='size-[20px] object-contain'/>
                                <p className={`${item.name === "inactive" ? "text-[#E72546]" : "text-[#505050]"} font-[400] text-[16px]`}>{item.title}</p>
                            </div>
                            <div className={`w-full h-[2px] bg-[#DBDBDB] ${index === data.length - 1 ? "hidden" : "" }`}></div>
                        </>
                    ))
                }
            </div>
        </div>
    );
};

