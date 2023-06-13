import { Navigate, Outlet } from "react-router-dom";
import tokenService from '../../services/token.service';


const AuthLayout = () => {
 const isAuth = tokenService.getToken() || undefined

  if (isAuth) {
    return <Navigate to="/" />;
  }
  return (
    <div>
      <Outlet />
    </div>
  );
};

export default AuthLayout;
