import React from 'react';
import { RouterProvider } from "react-router-dom";
import { routePaths } from './routes/routePath';
import { ModalProvider } from './context/ModalContext';
import { FormProvider } from './context/FormContext';
import { SidebarModalProvider } from './context/SidebarContext';

function App() {

  return (
    <FormProvider>
      <ModalProvider>
          <SidebarModalProvider>
            <RouterProvider router={routePaths} />
          </SidebarModalProvider>
      </ModalProvider>
    </FormProvider>
  );
}

export default App;
