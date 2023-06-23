import { Link, Navigate, Outlet } from "react-router-dom";
import tokenService from '../../services/token.service';


const AuthLayout = () => {
  const isAuth = tokenService.getToken() || undefined

  //if (isAuth) {
  //  return <Navigate to="/" />;
  //}
  return (
    <div >
      <div className="d-flex justify-content-center ">
        <Link className="my-5 mx-5" to={'register'}>Register</Link>
        <Link className="my-5 mx-5" to={'login'}>Login</Link>
      </div>
      <Outlet />
    </div>
  );
};
export default AuthLayout;
