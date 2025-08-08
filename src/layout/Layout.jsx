import React, { useState, useRef, useLayoutEffect } from 'react';
import Header from '../Component/Header';
import { Outlet, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { Sidebar } from '../Component/Sidebar';
// import { useState, useRef, useEffect, useLayoutEffect } from 'react';

const Layout = () => {
  const [sidebarWidth, setSidebarWidth] = useState(300);
  const [isMenuOpen, setMenuOpen] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const isResizing = useRef(false);

  const handleMouseDown = () => {
    isResizing.current = true;
  };

  const handleMouseMove = (event) => {
    if (!isResizing.current) return;
    const newWidth = event.clientX;
    if (newWidth > 70 && newWidth < 500) {
      setSidebarWidth(newWidth);
    }
  };
  
  // const handleMouseUp = () => {
  //   setMenuOpen("")
  //   isResizing.current = false;
  // };

  const handleMouseUp = () => {
  if (isResizing.current) {
    isResizing.current = false;
  }
  // Remove setMenuOpen("") here
};


  const location = useLocation();

  useLayoutEffect(() => {
    setIsLoading(true);
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 200); // Adjust this duration as needed
    return () => clearTimeout(timer);
  }, [location.pathname]);

  return (
    <main className='overflow-y-hidden h-screen' onMouseMove={handleMouseMove} onMouseUp={handleMouseUp}>
      <Header />
      <div className='flex '>
        {/* Sidebar */}
        <div className='pt-[80px] bg-re relative transition-all duration-500 ease-in-out' style={{ width: `${sidebarWidth}px` }}>
          <Sidebar sidebarWidth={sidebarWidth} setSidebarWidth={setSidebarWidth} isMenuOpen={isMenuOpen} setMenuOpen={setMenuOpen} setIsLoading={setIsLoading} />
          <div
            className='absolute top-0 right-0  w-2 bg-gray-400 cursor-ew-resize'
            onMouseDown={handleMouseDown}
          ></div> 
        </div>
        
        <div className='flex-1 bg-[#FDFDFD] overflow-y-auto h-[calc(100vh-0.1rem)] pt-[80px]'>
          <AnimatePresence mode='wait'>
            {isLoading ? (
              <motion.div
                key="loader"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="flex items-center justify-center h-full w-full bg-white"
              >
                <div className="loader ease-linear rounded-full border-8 border-t-8 border-gray-200 h-32 w-32"></div>
              </motion.div>
            ) : (
              <motion.div
                key={location.key}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className='h-full w-full'
              >
                <Outlet />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </main>
  );
};

// Basic loader CSS (add this to your index.css or App.css)
// .loader {
//   border-top-color: #3498db;
//   -webkit-animation: spinner 1.5s linear infinite;
//   animation: spinner 1.5s linear infinite;
// }

// @-webkit-keyframes spinner {
//   0% { -webkit-transform: rotate(0deg); }
//   100% { -webkit-transform: rotate(360deg); }
// }

// @keyframes spinner {
//   0% { transform: rotate(0deg); }
//   100% { transform: rotate(360deg); }
// }

export default Layout;
