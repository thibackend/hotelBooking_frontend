import React from "react";
import NotFound from "../pages/notFound";
import Home from "../pages/home1/Home";
import AuthLayout from "../pages/auth/AuthLayout";
import { Login, Register } from "../pages/auth";
import Admin from '../pages/admin';
import AdminPage from '../pages/admin/room_management/adminPage';
import Rentalsnews from '../pages/home1/Rentalsnews';
import User_manag from '../pages/admin/User_management/user_manag';
import Booking_mang from '../pages/admin/booking_management/booking_ma';
import About from '../pages/about/about';
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
      { path: "", element: <Rentalsnews /> },
      { path: "about", element: <About/> },
      // { path: "room", element: <Rooms /> },
      // { path: "detailHotel/:id", element: <HotelDetail /> },
      // { path: "confirm", element: <ConfirmCheckout /> },
      // { path: "search", element: <Search /> },

    ],
  },
  {
    path: "/admin",
    element: <Admin />,
    children: [
      { path: "room_manag/", element: <AdminPage /> },
      { path: "user_manag", element: <User_manag /> },
      { path: "booking_manag", element: <Booking_mang /> }
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },

];
