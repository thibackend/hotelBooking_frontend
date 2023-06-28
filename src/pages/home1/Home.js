import React, { memo } from 'react';
import Navbar from './Navbar';
import Filters from './Filters';
import Rentals from './Rentals';
import tokenService from '../../services/token.service';
import { Navigate, Outlet } from 'react-router-dom';

function Home() {
  const isAuth = tokenService.getToken() || undefined
  if (!isAuth) {
    return <Navigate to="/auth" />;
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
