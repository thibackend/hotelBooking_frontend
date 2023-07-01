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
import AddRoom from "../pages/admin/room_management/addRoom";
import Admin from "../pages/admin/index";
import EditRoom from "../pages/admin/room_management/updateRoom";
import AdminIndex from "../pages/admin/room_management/adminIndex";
import AdminPage from "../pages/admin/room_management/adminPage";
import User_manag from "../pages/admin/User_management/user_manag"
import Booking_mang from "../pages/admin/booking_management/booking_ma";
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
      //{ path: "", element: <Rentals /> },
      // { path: "room", element: <Rooms /> },
      //{ path: "detail", element: <Detail /> },
      // { path: "confirm", element: <ConfirmCheckout /> },
      // { path: "search", element: <Search /> },
    ],
  },
  {
    path: "/admin",
    element: <Admin/>,
    children: [
      { path: "", element: <Home /> },
      { path: "room", element: <Rooms /> },
      { path: "detailHotel/:id", element: <HotelDetail /> },
      { path: "confirm", element: <ConfirmCheckout /> },
      { path: "search", element: <Search /> },
      { path: "", element: <AdminIndex/>,
      children:[
        {path:"",element:<AdminPage/>},
        {path:"create",element:<AddRoom/>}
       
      ]},
      { path:"room_manag/",
        element:<AdminIndex/>,
        children:[
          {path:"",element:<AdminPage/>},
          {path:"create",element:<AddRoom/>},
          {path:"edit", element: <EditRoom/>}
        ]
      },
      {path:"user_manag",element:<User_manag/>},
      {path:"booking_manag",element:<Booking_mang/>},
      { path: "edit", element: <EditRoom/>},
      
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },

];
