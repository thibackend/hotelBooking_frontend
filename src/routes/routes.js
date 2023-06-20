import React from "react";
import NotFound from "../pages/notFound";
import Home from "../pages/home";
import RootPrivatePage from "./RootPrivatePage";
import AuthLayout from "../pages/auth/AuthLayout";
import { Login, Register } from "../pages/auth";
import Rooms from "../pages/room";
import FormBooking from "../pages/checkout/FormBooking";
import ConfirmationPage from "../pages/checkout/comfitBooking";
import Checkout from "../pages/checkout";

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
    path: "/checkout",
    element: <Checkout />,
    children: [
      { path: "", element: <FormBooking /> },
      { path: "confirm", element: <ConfirmationPage /> },
      { path: "register", element: <Register /> },
    ],
  },
  {
    path: "/",
    element: <RootPrivatePage />,
    children: [
      {path: "",element: <Home /> },
      {path: "room",element: <Rooms /> },
      {path: "detailHotel/:id",element: <DetailHotel />},

    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
  
];
