import React from "react";
import NotFound from "../pages/notFound";
import Home from "../pages/home1/Home";
import RootPrivatePage from "./RootPrivatePage";
import AuthLayout from "../pages/auth/AuthLayout";
import { Login, Register } from "../pages/auth";
import Rooms from "../pages/room";
import HotelDetail from "../pages/detail/hotelDetail";
import ConfirmCheckout from "../pages/checkout/ConfirmCheckout";
import Search from "../pages/search";
import Admin from "../pages/Admin";
import Room_management from "../pages/Admin/room_management/room_manag";
import Booking_mang from "../pages/Admin/booking_management/booking_ma";
import User_manag from "../pages/Admin/User_management/user_manag";
import Rentals from "../pages/home1/Rentals";
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
    element: <Home />,
    children: [
      { path: "", element: <Rentals /> },
      // { path: "room", element: <Rooms /> },
      { path: "detail/:id", element: <HotelDetail /> },
      // { path: "confirm", element: <ConfirmCheckout /> },
      // { path: "search", element: <Search /> },
    ],
  },
  {
    path: "/admin",
    element: <Admin/>,
    children: [
      { path: "", element: <Room_management/> },
      { path: "user_manag", element: <User_manag/> },
      { path: "room_manag", element: <Room_management/> },
      { path: "booking_manag", element: <Booking_mang/> },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },

];
