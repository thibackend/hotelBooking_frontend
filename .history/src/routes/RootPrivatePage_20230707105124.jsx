import { Box } from "@chakra-ui/react";
import { Navigate, Outlet } from "react-router-dom";
import tokenService from "../services/token.service";
const RootPrivatePage = () => {
  const isAuth = tokenService.getToken() || undefined
<<<<<<< HEAD
  
  // if (!isAuth) {
  //   return <Navigate to="/auth" />;
  // }


=======
  if (!isAuth) {
    return <Navigate to="/auth" />;
  }
>>>>>>> c153178a60c72961e394b1657cb2fb7e7c854a82
  return (
    <Box>
      <Outlet />
    </Box>
  );
};

export default RootPrivatePage;
