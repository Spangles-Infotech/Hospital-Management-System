import React from 'react';
import { RouterProvider } from "react-router-dom";
import { routePaths } from './routes/routePath';
import { ModalProvider } from './context/ModalContext';
import { FormProvider } from './context/FormContext';
import { SidebarModalProvider } from './context/SidebarContext';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import "react-loading-skeleton/dist/skeleton.css";
import { ToastContainer } from 'react-toastify';
import { Provider } from 'react-redux';
import { store } from './store/store';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import  './App.css';



function App() {

  return (
    <Provider store={store}>
    <FormProvider>
      <ModalProvider>
          <SidebarModalProvider>
          <SkeletonTheme baseColor="#202020" highlightColor="#444">
            <RouterProvider router={routePaths} />
            </SkeletonTheme>
            <ToastContainer />
          </SidebarModalProvider>
      </ModalProvider>
    </FormProvider>
    </Provider>
  ); 
}

export default App;
