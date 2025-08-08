import React, { useEffect, useRef, useState } from "react";
import profileIcon from "../assests/profile.png";
import { useNavigate } from "react-router-dom";
import { FaUser, FaBell, FaCog } from "react-icons/fa";
import { FiLogOut } from "react-icons/fi";

const ProfileDropdown = () => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef(null);

  const handleLogout = () => {
    localStorage.clear();
    sessionStorage.clear();
    navigate("/");
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      <div
        className="flex gap-3 items-center cursor-pointer"
        onClick={() => setOpen(!open)}
      >
        <img src={profileIcon} alt="Profile" className="w-10 h-10 rounded-full" />
        <div>
          <p className="font-semibold text-stone-700">Pharms</p>
          <p className="text-sm text-gray-500">Admin</p>
        </div>
      </div>

      {open && (
        <div className="absolute right-0 mt-2 w-64 bg-white border border-gray-200 rounded shadow-lg z-50 transition-all duration-200 ease-out">
          {/* Header */}
          <div className="flex items-center gap-3 p-4 border-b">
            <img src={profileIcon} alt="User" className="w-10 h-10 rounded-full" />
            <div>
              <p className="font-semibold">Pharms</p>
              <p className="text-sm text-gray-500">pharmsadmin@example.com</p>
            </div>
          </div>

          {/* Options */}
          <div className="p-2">
            <DropdownItem icon={<FaUser />} label="My Profile" />
            <DropdownItem icon={<FaBell />} label="Notification Settings" />
            <DropdownItem icon={<FaCog />} label="General Settings" />
          </div>

          {/* Logout */}
          <div className="border-t">
            <button
              onClick={handleLogout}
              className="flex items-center gap-2 w-full px-4 py-2 text-sm text-red-600 hover:bg-red-50"
            >
              <FiLogOut className="text-red-600" />
              Logout
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

const DropdownItem = ({ icon, label }) => (
  <div className="flex items-center gap-2 p-2 rounded hover:bg-gray-100 cursor-pointer text-sm text-gray-700">
    {icon}
    <span>{label}</span>
  </div>
);

export default ProfileDropdown;
