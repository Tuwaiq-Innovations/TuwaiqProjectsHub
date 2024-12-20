import * as React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from '../pages/Home';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  }
]);

function Router() {
  return <RouterProvider router={router} />;
}

export default Router;
