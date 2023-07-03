import { Box } from "@chakra-ui/react";
import { Navigate, Outlet } from "react-router-dom";
import tokenService from "../services/token.service";
const RootPrivatePage = () => {
  const isAuth = tokenService.getToken() || undefined
  if (!isAuth) {
    return <Navigate to="/auth" />;
  }
  return (
    <Box>
      <Outlet />
    </Box>
  );
};

export default RootPrivatePage;
