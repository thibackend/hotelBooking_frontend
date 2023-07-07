import "./admin.css";
import Sidebar from "./sidebar/Sidebar";
import Navbar from "./navbar/Navbar";
import Widget from "./widget/Widget";
import { Navigate, Outlet} from "react-router-dom";
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
      <Sidebar />
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
