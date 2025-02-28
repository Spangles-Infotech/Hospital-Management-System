import React, { useState, useRef } from 'react';
import Header from '../Component/Header';
import { Outlet } from 'react-router-dom';
import { Sidebar } from '../Component/Sidebar';

const Layout = () => {
  const [sidebarWidth, setSidebarWidth] = useState(300); // Default sidebar width
  const isResizing = useRef(false);

  const handleMouseDown = () => {
    isResizing.current = true;
  };

  const handleMouseMove = (event) => {
    if (!isResizing.current) return;
    const newWidth = event.clientX;
    if (newWidth > 200 && newWidth < 500) {
      setSidebarWidth(newWidth);
    }
  };

  const handleMouseUp = () => {
    isResizing.current = false;
  };

  return (
    <main className='overflow-y-hidden h-screen' onMouseMove={handleMouseMove} onMouseUp={handleMouseUp}>
      <Header />
      <div className='flex'>
        {/* Sidebar */}
        <div className='pt-[135px] relative' style={{ width: `${sidebarWidth}px` }}>
          <Sidebar />
          <div
            className='absolute top-0 right-0 h-full w-2 bg-gray-400 cursor-ew-resize'
            onMouseDown={handleMouseDown}
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
