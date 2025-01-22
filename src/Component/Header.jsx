

import React from "react";
import { IoIosSearch } from "react-icons/io";
import notificationIcon from "../assests/notification.png";
import profileIcon from "../assests/profile.png";

const Header = () => {
  return (
    <header className="p-5 ">
      <div className="flex items-center  gap-20 px-10">

        <div className="p-4">
          <h1 className="text-3xl font-medium text-cyan-600 -ml-10">Healthlink</h1>
          <p className="text-cyan-600 text-sm -ml-10">Product by Spangles Infotech</p>
        </div>

       
        <div className="flex items-center gap-5 relative">
          <div className="w-[480px] p-2.5 outline outline-1 outline-cyan-600 rounded-xl text-gray-500 flex items-center gap-4 text-lg bg-cyan-50">
            <IoIosSearch className="text-gray-600 text-2xl" />
            <input 
              type="text" 
              placeholder="Search..." 
              className="w-full bg-transparent outline-none text-gray-600 placeholder-gray-400" 
            />
          </div>
        </div>

        <div className="flex gap-10 items-center ml-[300px]">
       
          <div className="w-[50px] h-[50px] flex items-center justify-center rounded-full border border-stone-300">
            <img src={notificationIcon } alt="Notification" className="w-6 h-6" />
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
