import React from "react";
import { useNavigate } from "react-router-dom";
import notificationIcon from "../assests/notification.png";
import logoIcon from "../assests/Gunam.png";
import ProfileDropdown from "./ProfileDropdown"; // Make sure this path is correct

const Header = () => {
  return (
    <header className="p-2 w-full bg-white fixed z-50">
      <div className="flex items-center justify-between px-5 w-full">
        {/* Logo Section    */}
        <div className="flex gap-4">
          <img src={logoIcon} alt="Logo" className="w-12 h-12" />
          <h1 className="text-3xl flex justify-center items-center font-medium text-[#1F9CC6] font-roboto">
            Gunam
          </h1>
        </div>

        {/* Notification & Profile */}
        <div className="flex gap-10 items-center mr-[40px]">
          <div className="w-[30px] h-[30px] flex items-center justify-center rounded-full border border-stone-300">
            <img src={notificationIcon} alt="Notification" className="w-4 h-4" />
          </div>

          {/* 🔽 Profile Dropdown */}
          <ProfileDropdown />
        </div>
      </div>
    </header>
  );
};

export default Header;
