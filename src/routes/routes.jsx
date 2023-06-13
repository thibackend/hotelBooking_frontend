import React from 'react';

import NotFound from "../pages/notFound";
import Home from "../pages/home";

import RootPrivatePage from "./RootPrivatePage";
import AuthLayout from '../pages/auth/AuthLayout';
import { Login, Register } from '../pages/auth';
import ConfirmationPage from '../pages/checkout/comfitBooking';
import FormBooking from '../pages/checkout/FormBooking';

export const routes = () => [
  {
    path: "/auth",
    element: <AuthLayout />,
    children: [
      { path: "", element: <Login /> },
      { path: "login", element: <Login /> },
      { path: "register", element: <Register /> },
    ],
  },
  {
    path: "/",
    element: <RootPrivatePage />,
    children: [
      {
        path: "",
        element: (
          <Home />
        ),
      },
    ]
  } ,
  {
    path: "/checkout",
    element: <ConfirmationPage />,
    children: [
      {
        path: "",
        element: (
          <Home />
        ),
      },
    ]
  } ,
  {
    path: "/xacnhan",
    element: <FormBooking />,
    children: [
      {
        path: "",
        element: (
          <Home />
        ),
      },
    ]
  } ,
  {
    path: "*",
    element: <NotFound />,
  },
];
