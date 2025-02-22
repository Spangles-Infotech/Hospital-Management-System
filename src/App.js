import { RouterProvider } from "react-router-dom";
import { routePaths } from "./routes/routePath";
import { ModalProvider } from "./context/ModalContext";
import { FormProvider } from "./context/FormContext";
import { SidebarModalProvider } from "./context/SidebarContext";
import { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

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
