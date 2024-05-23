import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import MainLayout from './layout/MainLayout.jsx';
import Home from './Pages/Home/Home/Home.jsx';
import OurMenu from './Pages/Menu/OurMenu/OurMenu.jsx';
import { HelmetProvider } from 'react-helmet-async';
import FoodOrders from './Pages/FoodOrder/FoodOrder/FoodOrders.jsx';
import Login from './Compment/FormReleted/Login/Login.jsx';

import SingUp from './Compment/FormReleted/Login/SingUp.jsx';

import MainForms from './Compment/FormReleted/MainForms.jsx';
import AuthProvider from './AuthProvider/AuthProvider.jsx';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Dashborads from './Dashbords/Dashborads.jsx';
import MyCarts from './Dashbords/MyCart/MyCarts.jsx';
import PrivtedRoute from './PrivtedRoute/PrivtedRoute.jsx';
import AllUser from './Dashbords/AllUser/AllUser.jsx';

const queryClient = new QueryClient();

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
      },
      {
        path: '/menu',
        element: <OurMenu></OurMenu>,
      },
      {
        path: '/order/:category',
        element: <FoodOrders></FoodOrders>,
      },
    ],
  },
  {
    path: '/',
    element: <MainForms></MainForms>,
    children: [
      {
        path: '/login',
        element: <Login></Login>,
      },
      {
        path: '/singUp',
        element: <SingUp></SingUp>,
      },
    ],
  },
  {
    path: 'dashborad',
    element: (
      <PrivtedRoute>
        {' '}
        <Dashborads></Dashborads>
      </PrivtedRoute>
    ),
    children: [
      {
        path: 'myCarts',
        element: <MyCarts></MyCarts>,
      },
      {
        path: 'allUsers',
        element: <AllUser></AllUser>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HelmetProvider>
      <AuthProvider>
        <QueryClientProvider client={queryClient}>
          <div className="max-w-screen-xl mx-auto">
            <RouterProvider router={router} />
          </div>
        </QueryClientProvider>
      </AuthProvider>
    </HelmetProvider>
  </React.StrictMode>
);
