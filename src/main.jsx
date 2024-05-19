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
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HelmetProvider>
      <AuthProvider>
        <div className="max-w-screen-xl mx-auto">
          <RouterProvider router={router} />
        </div>
      </AuthProvider>
    </HelmetProvider>
  </React.StrictMode>
);
