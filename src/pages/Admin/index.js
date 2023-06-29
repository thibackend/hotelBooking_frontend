import "./admin.css";
import Slidebar from "../Admin/sidebar/Sidebar";
import Navbar from "../Admin/navbar/Navbar";
import Widget from "../Admin/widget/Widget";
import { Navigate, Outlet, useNavigate } from "react-router-dom";
import tokenService from "../../services/token.service";

const Admin = () => {
  const isAuth = tokenService.getToken() || undefined;
  if (!isAuth) {
    return <Navigate to="/auth" />;
  }
  if (isAuth.username != "admin") {
    return <Navigate to={'/'} />;
  }
  return (
    <div className="admin">
      <Slidebar />
      <div className="homeContainer">
        <Navbar />
        <div className="widgets">
          <Widget type="users" />
          <Widget type="orders" />
          <Widget type="earnings" />
          <Widget type="balance" />
        </div>
        <div className="charts">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Admin;