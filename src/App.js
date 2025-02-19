import React from 'react';
import { RouterProvider } from "react-router-dom";
import { routePaths } from './routes/routePath';
import { ModalProvider } from './context/ModalContext';
import { FormProvider } from './context/FormContext';
import { SidebarModalProvider } from './context/SidebarContext';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';


function App() {

  return (
    <FormProvider>
      <ModalProvider>
          <SidebarModalProvider>
          <SkeletonTheme baseColor="#202020" highlightColor="#444">

            <RouterProvider router={routePaths} />
            </SkeletonTheme>

          </SidebarModalProvider>
      </ModalProvider>
    </FormProvider>
  );
}

export default App;
