import * as React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from '../pages/Home';
import Admin from '../pages/Admin';
import Member from '../pages/Member';
import Login from '../pages/Login';
import SignUp from '../pages/SignUp';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/Admin/:id',
    element: <Admin />,
  },
  {
    path: '/Member/:id',
    element: <Member />,
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/signup',
    element: <SignUp />,
  },
]);

function Router() {
  return <RouterProvider router={router} />;
}

export default Router;
