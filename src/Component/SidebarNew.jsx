import React, { useState } from 'react';
import { RxDashboard } from "react-icons/rx";
import { GiReceiveMoney, GiExpense, GiCash } from "react-icons/gi";
import { FaBars } from "react-icons/fa6";
import { NavLink, Outlet, useLocation } from 'react-router-dom';
import { BiMoneyWithdraw, BiLogOut } from "react-icons/bi";
import { GrUserWorker, GrNotes } from "react-icons/gr";
import { MdOutlineTouchApp } from "react-icons/md";
import { FaFileCircleCheck, FaBell } from "react-icons/fa6";
import { FaRegCircleUser } from "react-icons/fa6";
import { useNavigate } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';

export const Sidebar = () => {

      const location = useLocation();
  const navigate = useNavigate();



  const [isOpen, setIsopen] = useState(false);
  const [showLogoutModal, setShowLogoutModal] = useState(false);

  const toggle = () => setIsopen(!isOpen);

  const menuItem = [
    { path: "dashboard", name: "Dashboard", icon: <RxDashboard /> },
    { path: "registered-op-nurse", name: "Registered OP (Nurse)", icon: <GiReceiveMoney /> },
    { path: "registered-op-doctor", name: "Registered OP (Doctor)", icon: <GiExpense /> },
    { path: "patients", name: "Patients", icon: <GrUserWorker /> },
    { path: "doctors", name: "Doctors", icon: <BiMoneyWithdraw /> },
    { path: "staff", name: "Staff", icon: <GiCash /> },
    { path: "pharmacy", name: "Pharmacy", icon: <GrNotes /> },
    { path: "expense", name: "Expense", icon: <FaFileCircleCheck /> },
    { path: "inventory", name: "Inventory", icon: <FaFileCircleCheck /> },
    { path: "inventory", name: "In Patients", icon: <FaFileCircleCheck /> },
  ];

  const handleLogout = () => {
    setShowLogoutModal(true);
  };

  const confirmLogout = () => {
    sessionStorage.removeItem('isAuthenticated');
    window.location.href = "/";
  };

  const cancelLogout = () => {
    setShowLogoutModal(false);
  };

  return (
    <>
      

      <div className="container-fluid contain">
        <div style={{ width: isOpen ? "200px" : "50px" }} className="sidebar">
          <div className="top_section">
            <div style={{ marginLeft: isOpen ? "150px" : "0px" }} className="bars">
              <FaBars onClick={toggle} />
            </div>
          </div>

          {menuItem.map((item, index) => (
            <NavLink
              to={item.path}
              key={index}
              className={({ isActive }) => (isActive ? 'link active' : 'link')}
            >
              <div className="icon">{item.icon}</div>
              <div style={{ display: isOpen ? "block" : "none" }} className="link_text">{item.name}</div>
            </NavLink>
          ))}

          <div className="link" onClick={handleLogout} style={{ cursor: 'pointer' }}>
            <div className="icon"><BiLogOut /></div>
            <div style={{ display: isOpen ? "block" : "none" }} className="link_text">Log Out</div>
          </div>
        </div>

        <main>
          
          <Outlet />
        </main>
      </div>

      {showLogoutModal && (
        <div className="modal-overlay">
          <div className="modal-box">
            <h5>Do you want to logout?</h5>
            <div className="modal-buttons">
              <button className="btn btn-warning me-2" onClick={confirmLogout}>Yes</button>
              <button className="btn btn-secondary" onClick={cancelLogout}>No</button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
