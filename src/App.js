
import React from 'react';
import Layout from './pages/Layout';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Registered_OP from './pages/Registered_OP';
import Patient from './pages/Patient';

function App() {

  

  return (
   <>

   <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />} >
        <Route index element={<Dashboard/>} />
        <Route path="registered-op_1" element={<Registered_OP/>} />
        <Route path="registered-op_2" element={<Patient/>} />

      
      
      </Route>
      <Route path="*" element={<h1>Not Found</h1>} />
  

    </Routes>
  </BrowserRouter>
  
 
  
   </>
  );
}

export default App;
