import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTimes,
  faBars,
  faBolt,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";
import "./Header.css";
import tokenService from "../../services/token.service";
import axios from "axios";

function Header() {
  const navigate = useNavigate();
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  const [searchKeyword, setSearchKeyword] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [data, setData] = useState([]);

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
    if (tokenService.getToken()) navigate("/");
  };
  //TÌM KIẾM
  async function fetchData() {
    try {
      const response = await axios.get(
        "http://127.0.0.1:8000/api/hotel_and_images"
      );
      setData(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  const handleSearchs = (keyword) => {
    if (keyword.trim() === "") {
      return;
    }
    sessionStorage.setItem("searchKeyword", keyword);
    navigate("/search");
    setSearchKeyword("");
    setSuggestions([]);
  };

  const handleChange = (e) => {
    const keyword = e.target.value;
    setSearchKeyword(keyword);
    const suggestions = getSuggestions(keyword);
    setSuggestions(suggestions);
  };

  const handleSuggestionClick = (suggestion) => {
    setSearchKeyword(suggestion);
    setSuggestions([]);
    handleSearchs(suggestion);
  };

  const getSuggestions = (keyword) => {
    if (keyword.trim() === "") {
      return [];
    }
    return data
      .filter((item) => item.name.toLowerCase().includes(keyword.toLowerCase()))
      .map((item) => item.name);
  };

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo">
            Nokola-Tesla <FontAwesomeIcon icon={faBolt} />
          </Link>
          <div className="menu-icon" onClick={handleClick}>
            <FontAwesomeIcon icon={click ? faTimes : faBars} />
          </div>
          <div className="searchbar">
            <form className="search-form" onSubmit={(e) => e.handleChange}>
              <div className="search-container">
                <input
                  type="text"
                  className="search-input"
                  placeholder="Search..."
                  value={searchKeyword}
                  onChange={handleChange}
                />
                <button
                  type="submit"
                  className="search-button"
                  onClick={() => handleSearchs(searchKeyword)}
                >
                  <FontAwesomeIcon icon={faSearch} />
                </button>
              </div>
              {suggestions.length > 0 && (
                <ul className="suggestions-list">
                  {suggestions.map((suggestion) => (
                    <li
                      key={suggestion}
                      className="suggestion-item"
                      onClick={() => handleSuggestionClick(suggestion)}
                    >
                      <Link>{suggestion}</Link>
                    </li>
                  ))}
                </ul>
              )}
            </form>
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
          {button && (
            <Link to={"/"}>
              <button onClick={handleLogout}>Logout</button>
            </Link>
          )}
        </div>
      </nav>
    </>
  );
}

export default Header;
