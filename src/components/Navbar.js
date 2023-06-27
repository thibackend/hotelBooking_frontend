import React, { useState, useEffect, useRef } from "react";
import logo from "../assets/logo.jpg";
import { BiWorld, BiUser } from "react-icons/bi";
import { FiSearch } from "react-icons/fi";

const Navbar = () => {
  const [showFilter, setShowFilter] = useState(false);
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");

  const filterRef = useRef(null);
  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };
  const handleOptionChange = (event) => {
    setSelectedOptions(event.target.value);
  };

  const handleIconClick = () => {
    setShowFilter(!showFilter);
  };

  const handleCheckboxChange = (option) => {
    if (selectedOptions.includes(option)) {
      setSelectedOptions(selectedOptions.filter((item) => item !== option));
    } else {
      setSelectedOptions([...selectedOptions, option]);
    }
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

  return (
    <div className="border-b sticky top-0 z-50 bg-white/[95%]">
      <div className="flex justify-between items-center sm:mx-6 md:mx-10 lg:mx-12 ">
        {/* Left */}
        <div className="h-20 flex">
          <img src={logo} className=" object-cover  my-10" />
        </div>
        {/* Middle */}
        <button
          className="hidden lg:flex justify-center items-center relative shadow-sm shadow-gray-400 border rounded-full"
          onClick={handleIconClick}
        >
          <input
            type="search"
            placeholder=""
            className="py-2.5 w-[20rem] rounded-full outline-0"
          />
          <div className="flex justify-between absolute w-full pr-16 pl-6 font-semibold text-gray-600">
            <span>Room type</span>
            <span>Service</span>
            <span>Room price</span>
          </div>
          <div className="bg-[#ff5a60] p-2 rounded-full mr-2">
            <FiSearch className="text-white w-full" />
          </div>
        </button>
        {showFilter && (
          <div
            ref={filterRef}
            style={{
              left: 0,
              right: 0,
              width:600,
              top:70,
              marginLeft: 'auto',
              marginRight: 'auto',
            }}
            className="absolute bg-white mt-2 w-[20rem] border border-gray-200 rounded-lg shadow-lg"
          >
          <label style={{ marginBottom: '10px' }} >
            <select
             style={{ margin:10 }}
              value={selectedOptions}
              onChange={handleOptionChange}
            >
              <option value="">All</option>
              <option value="option1">Option 1</option>
              <option value="option2">Option 2</option>
              <option value="option3">Option 3</option>
            </select>
          </label>
            <label >
            <select
            style={{ margin:10 }}
             value={selectedCategory} 
             onChange={handleCategoryChange}>
              <option value="">All</option>
              <option value="category1">Category 1</option>
              <option value="category2">Category 2</option>
              <option value="category3">Category 3</option>
            </select>
          </label>
            {/* Thêm các phần tử checkbox và các thành phần lọc khác tại đây */}
          </div>
        )}
        {/* Right */}
        <div className="flex items-center pr-3  font-semibold text-gray-600">
          <div className="flex items-center mx-8 gap-1">
            <BiWorld className="" />
            <div className="">EN</div>
          </div>
          <div className="flex items-center border px-3 py-2 rounded-full cursor-pointer gap-2 bg-[#ff5a60] text-white font-bold shadow-lg shadow-gray-300 hover:bg-[#f9787c] duration-100 ease-out">
            <p>Sign in</p>
            <BiUser className="text-[22px]" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
