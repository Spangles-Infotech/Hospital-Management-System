import React from 'react'

export const Modal = ({ isOpen, onClose, content: Content, contentProps }) => {
  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div 
      onClick={handleOverlayClick} 
      className={`fixed top-[128px] right-0 inset-0 z-50 flex items-center justify-center bg-white bg-opacity-50 transition-all duration-500 ease-in-out ${isOpen ? "opacity-100 visible" : "opacity-0 invisible"}`}
    >
        <div className={`relative bg-white  rounded-lg p-6 max-h-[80vh] transition-all duration-500 ease-in-out border border-[#089BAB] overflow-y-scroll ${isOpen ? "translate-x-0" : "translate-x-full"} ${isOpen ? "scale-1 " : "scale-0 w-[50%] h-[50%]"}`}>
            <button
                className="absolute top-6 right-6 text-gray-500 hover:text-gray-800 cursor-pointer"
                onClick={onClose}
            >
                <img src={require("../../assests/cancel.png")} alt="close-icon" className='object-contain size-[25px] cursor-pointer' />
            </button>
            {Content ? <Content {...contentProps} /> : <p>No content provided</p>}
        </div>
    </div>
  )
}
