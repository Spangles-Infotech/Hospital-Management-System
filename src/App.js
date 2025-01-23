import React from 'react';
import { RouterProvider } from "react-router-dom";
import { routePaths } from './routes/routePath';


function App() {

  return (
      <RouterProvider router={routePaths} />
  );
}

export default App;
