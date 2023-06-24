import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faTimes,faBars,faBolt,faSearch,} from "@fortawesome/free-solid-svg-icons";
import "./Header.css";
import tokenService from "../../services/token.service";

function Header() {
  const navigate = useNavigate();
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  const handleSearch = (e) => {
    e.preventDefault();
    // Xử lý tìm kiếm ở đây
    console.log("Đang tìm kiếm:", searchQuery);
  };

  window.addEventListener("resize", showButton);

  const handleLogout = () => {
    tokenService.removeToken();
    if (tokenService.getToken()) navigate('/');
  }

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
            Nokola-Tesla <FontAwesomeIcon icon={faBolt} />
          </Link>
          <div className="menu-icon" onClick={handleClick}>
            <FontAwesomeIcon icon={click ? faTimes : faBars} />
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/services"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Services
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/products"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Products
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/auth"
                className="nav-links-mobile"
                onClick={handleLogout}
              >
                Logout
              </Link>
            </li>
          </ul>
          {button && <Link to={"/"}><button onClick={handleLogout}>Logout</button></Link>}
        </div>
      </nav>
    </>
  );
}

export default Header;
