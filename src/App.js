import React from 'react';
import { RouterProvider } from "react-router-dom";
import { routePaths } from './routes/routePath';
import { Modal } from './Component/common/Modal';
import { ModalProvider } from './context/ModalContext';
import { FormProvider } from './context/FormContext';


function App() {

  return (
    <FormProvider>
      <ModalProvider>
          <RouterProvider router={routePaths} />
      </ModalProvider>
    </FormProvider>
  );
}

export default App;
