import React from "react";

import NotFound from "../pages/notFound";
import Home from "../pages/home";

import RootPrivatePage from "./RootPrivatePage";
import AuthLayout from "../pages/auth/AuthLayout";
import { Login, Register } from "../pages/auth";
import Rooms from "../pages/room";
import Pool from "../pages/pool";
// import Detail from "../pages/room/detail";
// import Pool from "../pages/pool";
import Header from "../pages/home/Header";
import DetailRoom from "../pages/detail";
import Test from "../test/test";

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
        path: "/",
        element: (<><Home />  </>),
      },
    ],
  },
  {
    path: "/header",
    element: (<><Header /></>),
    children: [
      {
        path: "room",
        element: (<><Rooms /></>)
      },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
  {
    path: "/room",
    element: <Rooms />,
  },
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/pool",
    element: <Pool />,
  },
  {
    path: "/detail",
    element: <DetailRoom />,
  },
  {
    path: '/test', element: <Test />
  }
];
