import React, { useState, useEffect, useRef } from "react";
import logo from "../../assets/logo.jpg";
import { BiWorld, BiUser } from "react-icons/bi";
import { FiSearch } from "react-icons/fi";
import tokenService from "../../services/token.service";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const user = tokenService.getToken();
  const handleLogout = () => {
    setTimeout(() => {
      tokenService.removeToken();
      navigate("/");
    }, 1000);
  };
  // Bộ loc
  const [showFilter, setShowFilter] = useState(false);
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [roomPrice, setRoomPrice] = useState(0);
  const [services, setServices] = useState([]);
  const [categories, setCategories] = useState([]);

  const filterRef = useRef(null);
  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };
  const handleOptionChange = (event) => {
    setSelectedOptions(event.target.value);
  };
  const handlePriceChange = async (value) => {
    setRoomPrice(value);
  };
  const handleIconClick = () => {
    setShowFilter(!showFilter);
  };

  // Thay đổi khai báo state
  const [selectedServices, setSelectedServices] = useState([]);

  // Thay đổi hàm handleChange
  const handleServiceChange = (event) => {
    const serviceId = event.target.value;
    setSelectedServices((prevServices) => {
      if (prevServices.includes(serviceId)) {
        return prevServices.filter((id) => id !== serviceId);
      } else {
        return [...prevServices, serviceId];
      }
    });
  };

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (filterRef.current && !filterRef.current.contains(event.target)) {
        setShowFilter(false);
      }
    };

    const handleScroll = () => {
      if (filterRef.current) {
        const filterRect = filterRef.current.getBoundingClientRect();
        if (filterRect.bottom <= 0) {
          setShowFilter(false);
        }
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);
    window.addEventListener("scroll", handleScroll);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const response = await fetch("http://127.0.0.1:8000/api/services/");
        const servicesData = await response.json();
        setServices(servicesData);
      } catch (error) {
        console.error("Error fetching data from API:", error);
      }
    };

    const fetchCategories = async () => {
      try {
        const response = await fetch("http://127.0.0.1:8000/api/categories");
        const categoriesData = await response.json();
        setCategories(categoriesData);
      } catch (error) {
        console.error("Error fetching data from API:", error);
      }
    };

    fetchServices();
    fetchCategories();
  }, []);
  const checkboxListStyle = {
    maxHeight: "70px", // Kích thước tối đa của danh sách
    overflowY: "auto", // Hiển thị thanh cuộn dọc khi nội dung vượt quá kích thước
  };
  const SelectOptionStyle = {
    maxHeight: "70px", // Kích thước tối đa của danh sách
    overflowY: "auto", // Hiển thị thanh cuộn dọc khi nội dung vượt quá kích thước
  };

  return (
    <div className="border-b sticky top-0 z-50 bg-white/[95%]">
      <div className="flex justify-between items-center sm:mx-6 md:mx-10 lg:mx-12 ">
        {/* Left */}
        <div className="h-20 flex">
          <img src={logo} className=" object-cover  my-10" alt="Logo" />
        </div>
        {/* Middle */}
        <button
          style={{
            position: "relative",
            left: 100,
            borderColor: "#ff5a60", // Màu đường viền
            borderWidth: "2px", // Độ dày đường viền
            borderStyle: "solid", // Kiểu đường viền
          }}
          className="hidden lg:flex justify-center items-center relative  rounded-full"
          onClick={handleIconClick}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              width: "100%",
            }}
          >
            <div className="flex justify-between relative w-full font-semibold text-gray-600">
              <span style={{ marginRight: "9rem" }}>Room type</span>
              <span style={{ marginRight: "9rem" }}>Service</span>
              <span style={{ marginRight: "1rem" }}>Room price</span>
            </div>
            <div className="bg-[#ff5a60] p-2 rounded-full">
              <FiSearch className="text-white w-full" />
            </div>
          </div>
        </button>

        {showFilter && (
          <div
            ref={filterRef}
            style={{
              left: 0,
              right: 0,
              width: 600,
              height: 100,
              top: 70,
              marginLeft: "auto",
              marginRight: "auto",
              display: "flex", // Added display property
              justifyContent: "space-between", // Added justifyContent property
              alignItems: "center", // Added alignItems property
            }}
            className="absolute bg-white mt-2 w-[30rem] border border-gray-200 rounded-lg shadow-lg"
          >
            <label style={{ marginBottom: "10px", SelectOptionStyle }}>
              <select
                style={{ padding: 10 }}
                value={selectedOptions}
                onChange={handleOptionChange}
              >
                <option value="">All</option>
                {categories.map((category) => (
                  <option key={category.id} value={category.id}>
                    <span style={{ wordBreak: "break-word" }}>
                      {category.name}
                    </span>
                  </option>
                ))}
              </select>
            </label>
            <label>
              <div style={checkboxListStyle}>
                {services.map((service) => (
                  <div
                    key={service.id}
                    className="flex items-center"
                    style={{ padding: 10 }}
                  >
                    <input
                      type="checkbox"
                      value={service.id.toString()} // Convert to string
                      checked={selectedServices.includes(service.id.toString())} // Convert to string
                      onChange={handleServiceChange}
                    />

                    <span>{service.name}</span>
                  </div>
                ))}
              </div>
            </label>
            <label>
              <div style={{ padding: 10 }}>
              <input
                  type="range"
                  min="0"
                  max="1000"
                  value={roomPrice}
                  onChange={(e) => handlePriceChange(e.target.value)}
                />
                <div className="flex justify-between text-xs">
                  <span>$0</span>
                  <span>${roomPrice}</span>
                  <span>$1000</span>
                </div>
              </div>
            </label>
            {/* Thêm các phần tử checkbox và các thành phần lọc khác tại đây */}
          </div>
        )}
        {/* Right */}
        <div
          className="flex items-center pr-3  font-semibold text-gray-600"
          onClick={handleLogout}
        >
          <div className="flex items-center mx-8 gap-1">
            <BiWorld className="" />
            <div className="">EN</div>
          </div>
          <div className="flex items-center border px-3 py-2 rounded-full cursor-pointer gap-2 bg-[#ff5a60] text-white font-bold shadow-lg shadow-gray-300 hover:bg-[#f9787c] duration-100 ease-out">
            <p>{user ? user.username : "Sign in"}</p>
            <BiUser className="text-[22px]" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
