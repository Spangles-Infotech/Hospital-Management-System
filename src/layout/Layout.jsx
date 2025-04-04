import React, { useState, useRef } from 'react';
import Header from '../Component/Header';
import { Outlet } from 'react-router-dom';
import { Sidebar } from '../Component/Sidebar';

const Layout = () => {
  const [sidebarWidth, setSidebarWidth] = useState(300);
  const [isMenuOpen, setMenuOpen] = useState("")



  return (
    <main className='overflow-y-hidden h-screen'>
      <Header />
      <div className='flex'>
        {/* Sidebar */}
        <div className='pt-[135px] '>
          <Sidebar sidebarWidth={sidebarWidth} setSidebarWidth={setSidebarWidth} isMenuOpen={isMenuOpen} setMenuOpen={setMenuOpen} />
          <div
            className='absolute top-0 right-0 h-full w-2 bg-gray-400 cursor-ew-resize'
          ></div>
        </div>
        
        <div className='flex-1 bg-[#D0FAFF33] overflow-y-auto h-[calc(100vh-0.1rem)] pt-[116px]'>
          <Outlet />
        </div>
      </div>
    </main>
  );
};

export default Layout;
