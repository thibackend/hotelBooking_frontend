import React from "react";
import NotFound from "../pages/notFound";
import Home from "../pages/home";
import RootPrivatePage from "./RootPrivatePage";
import AuthLayout from "../pages/auth/AuthLayout";
import { Login, Register } from "../pages/auth";
import Rooms from "../pages/room";
import HotelDetail from "../pages/detail/hotelDetail";
import ConfirmCheckout from "../pages/checkout/ConfirmCheckout";
import Search from "../pages/search";
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
      { path: "", element: <Home /> },
      { path: "room", element: <Rooms /> },
      { path: "detailHotel/:id", element: <HotelDetail /> },
      { path: "confirm", element: <ConfirmCheckout /> },
      { path: "search", element: <Search /> },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },

];
