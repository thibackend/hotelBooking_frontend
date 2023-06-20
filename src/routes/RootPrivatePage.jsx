import { Box } from "@chakra-ui/react";
import { Navigate, Outlet } from "react-router-dom";
import tokenService from "../services/token.service";
import Header from "../pages/home/Header";
import Hero from "../pages/home/Hero";

const RootPrivatePage = () => {
  const isAuth = tokenService.getToken() || undefined;

  // if (!isAuth) {
  //   return <Navigate to="/auth" />;
  // }

  return (
    <Box>
      <Header />
      <Hero />
      <Outlet />
    </Box>
  );
};

export default RootPrivatePage;
