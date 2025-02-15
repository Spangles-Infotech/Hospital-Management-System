import React from "react";
import { IoIosSearch } from "react-icons/io";
import notificationIcon from "../assests/notification.png";
import profileIcon from "../assests/profile.png";

const Header = () => {
  return (
    <header className="py-5 w-full bg-white ">
      <div className="flex items-center justify-between px-10 w-full">

        <div className="py-4">
          <h1 className="text-3xl font-medium text-primary font-roboto">Gunam Hospital</h1>
          {/* <p className="text-primary text-sm">Product by Spangles Infotech</p> */}
        </div>

        <div className="flex items-center gap-5 w-[480px] mr-[260px]">
          <div className="w-full p-2.5 outline outline-1 outline-primary rounded-xl text-gray-500 flex items-center gap-4 text-lg bg-cyan-50">
            <IoIosSearch className="text-gray-600 text-2xl" />
            <input 
              type="text" 
              placeholder="Search..." 
              className="w-full bg-transparent outline-none text-gray-600 placeholder-gray-400" 
            />
          </div>
        </div>

        <div className="flex gap-10 items-center mr-[50px]">
          <div className="w-[50px] h-[50px] flex items-center justify-center rounded-full border border-stone-300">
            <img src={notificationIcon} alt="Notification" className="w-6 h-6" />
          </div>

          <div className="flex gap-4 items-center">
            <img src={profileIcon} alt="Profile" className="w-12 h-12 rounded-full" />
            <div>
              <p className="text-xl text-stone-700 font-semibold">Pharms</p>
              <p className="text-gray-500">Admin</p>
            </div>
          </div>
        </div>
        
      </div>
    </header>
  );
};

export default Header;
