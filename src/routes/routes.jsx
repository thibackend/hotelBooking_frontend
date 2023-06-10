import React from "react";

import NotFound from "../pages/notFound";
import Home from "../pages/home";

import RootPrivatePage from "./RootPrivatePage";
import AuthLayout from "../pages/auth/AuthLayout";
import { Login, Register } from "../pages/auth";

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
        element: (
          <>
            <Home />
          </>
        ),
      },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
];
