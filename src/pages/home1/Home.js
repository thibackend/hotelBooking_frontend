import React, { memo } from "react";
import Navbar from "./Navbar";
import Filters from "./Filters";
import Rentals from "./Rentals";
import tokenService from "../../services/token.service";
import { Navigate, Outlet, useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();
  const isAuth = tokenService.getToken() || undefined;
  if (!isAuth) {
    return <Navigate to="/auth" />;
  }
  if (isAuth.username === "admin") {
    return <Navigate to="/admin" />;
  }
  return (
    <div className="">
      <Navbar />
      <div className=" sm:mx-6 md:mx-10 lg:mx-12 px-3">
        <Filters />
        <Outlet />
      </div>
    </div>
  );
}
export default Home;
