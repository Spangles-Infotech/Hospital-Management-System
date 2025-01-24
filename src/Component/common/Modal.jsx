import React from 'react'

export const Modal = ({ isOpen, onClose, content: Content, contentProps }) => {
  return (
    <div className={`fixed top-[128px]  left-[20%] inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 transition-all duration-500 ease-in-out ${isOpen ? "opacity-100 visible" : "opacity-0 invisible"}`}>
        <div className={`relative bg-white rounded-lg p-6 w-[70%] h-[700px] transition-all duration-500 ease-in-out border border-[#089BAB] overflow-hidden ${isOpen ? "scale-1" : "scale-0"}`}>
            <button
                className="absolute top-2 right-2 text-gray-500 hover:text-gray-800 cursor-pointer"
                onClick={onClose}
            >
                <img src={require("../../assests/cancel.png")} alt="close-icon" className='object-contain size-[25px] cursor-pointer' />
            </button>
            {Content ? <Content {...contentProps} /> : <p>No content provided</p>}
        </div>
    </div>
  )
}
