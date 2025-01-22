import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Dashboard from "../assests/Dashboard.png";
import RegisterOp from "../assests/RegisterOP.png";
import Patients from "../assests/Patient.png";
import Doctors from "../assests/Doctors.png";
import Staff from "../assests/Staff.png";
import Pharmacy from "../assests/Pharmacy.png";
import Expense from "../assests/Expense.png";
import Reports from "../assests/Reports.png";
import Settings from "../assests/Settings.png";
import InPatient from "../assests/InPatient.png";
import LogOut from "../assests/LogOut.png";
import Inventory from "../assests/Inventory.png";

const Slidebar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const isActive = (path) => location.pathname === path ? "bg-cyan-500 text-white" : "text-stone-600";

  return (
    <div className="w-[292px] h-full p-2 flex flex-col gap-5">
      <div
      onClick={() => navigate('/')}
      className={`flex gap-5 p-3 items-center rounded-e-xl ${isActive('/')}`}>
        <img className="w-[30px] h-[30px]" src={Dashboard} alt="Dashboard" />
        Dashboard
      </div>

      <div
        onClick={() => navigate('/registered-op_1')}
        className={`flex gap-5 p-3 font-semibold text-lg items-center rounded-e-xl ${isActive('/registered-op')}`}
      >
        <img className="w-[30px] h-[30px]" src={RegisterOp} alt="Register OP" />
        Register OP
      </div>

      <div
        onClick={() => navigate('/registered-op_2')}
        className={`flex gap-5 p-3 font-semibold text-lg items-center rounded-e-xl ${isActive('/patients')}`}
      >
        <img className="w-[30px] h-[30px]" src={Patients} alt="Patients" />
        Patients
      </div>

      <div
        onClick={() => navigate('/doctors')}
        className={`flex gap-5 p-3 font-semibold text-lg items-center rounded-e-xl ${isActive('/doctors')}`}
      >
        <img className="w-[30px] h-[30px]" src={Doctors} alt="Doctors" />
        Doctors
      </div>

      <div
        onClick={() => navigate('/staff')}
        className={`flex gap-5 p-3 font-semibold text-lg items-center rounded-e-xl ${isActive('/staff')}`}
      >
        <img className="w-[30px] h-[30px]" src={Staff} alt="Staff" />
        Staff
      </div>

      <div
        onClick={() => navigate('/pharmacy')}
        className={`flex gap-5 p-3 font-semibold text-lg items-center rounded-e-xl ${isActive('/pharmacy')}`}
      >
        <img className="w-[30px] h-[30px]" src={Pharmacy} alt="Pharmacy" />
        Pharmacy
      </div>

      <div
        onClick={() => navigate('/expense')}
        className={`flex gap-5 p-3 font-semibold text-lg items-center rounded-e-xl ${isActive('/expense')}`}
      >
        <img className="w-[30px] h-[30px]" src={Expense} alt="Expense" />
        Expense
      </div>

      <div
        onClick={() => navigate('/inventory')}
        className={`flex gap-5 p-3 font-semibold text-lg items-center rounded-e-xl ${isActive('/inventory')}`}
      >
        <img className="w-[30px] h-[30px]" src={Inventory} alt="Inventory" />
        Inventory
      </div>

      <div
        onClick={() => navigate('/inpatient')}
        className={`flex gap-5 p-3 font-semibold text-lg items-center rounded-e-xl ${isActive('/inpatient')}`}
      >
        <img className="w-[30px] h-[30px]" src={InPatient} alt="In-Patient" />
        In-Patient
      </div>

      <div
        onClick={() => navigate('/settings')}
        className={`flex gap-5 p-3 font-semibold text-lg items-center rounded-e-xl ${isActive('/settings')}`}
      >
        <img className="w-[30px] h-[30px]" src={Settings} alt="Settings" />
        Settings
      </div>

      <div
        onClick={() => navigate('/reports')}
        className={`flex gap-5 p-3 font-semibold text-lg items-center rounded-e-xl ${isActive('/reports')}`}
      >
        <img className="w-[30px] h-[30px]" src={Reports} alt="Reports" />
        Reports
      </div>

      <div
        onClick={() => navigate('/logout')}
        className={`flex gap-5 p-3 font-semibold text-lg items-center rounded-e-xl ${isActive('/logout')}`}
      >
        <img className="w-[30px] h-[30px]" src={LogOut} alt="Log Out" />
        Log Out
      </div>
    </div>
  );
};

export default Slidebar;
