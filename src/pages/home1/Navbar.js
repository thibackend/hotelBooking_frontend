import React, { useState, useEffect } from "react";
import logo from '../../assets/logo.jpg';
import { BiWorld, BiUser } from "react-icons/bi";
import { FiSearch } from "react-icons/fi";
import tokenService from "../../services/token.service";
import { useNavigate } from 'react-router-dom';
import { Modal, Button } from 'react-bootstrap';
import Filters from "./Filters";
import axios from "axios";
import "./profile.css";

const Navbar = () => {

  const user = tokenService.getToken();
  const navigate = useNavigate();

  const handleLogout= () =>{
    setTimeout(
      ()=>{
        tokenService.removeToken();
        navigate('/');
      }
      ,1000
    )
  }

  const [userData, setUserData] = useState(null);
  const [showProfile, setShowProfile] = useState(false);
  const [editData, setEditData] = useState(null);
  const [editingMode, setEditingMode] = useState(false);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get("http://127.0.0.1:8000/api/users");
        const data = response.data;
        const userItem = data.find(item => item.email === user.email);
        setUserData(userItem);
        console.log(userItem.email);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchUserData();
  }, [user]);

  const handleProfileOpen = () => {
    setShowProfile(true);
  };

  const handleProfileClose = () => {
    setShowProfile(false);
  };

  const handleEditOpen = () => {
    setEditingMode(true);
    setShowProfile(true);
  };


  return (
    <div
      style={{ backgroundImage: "url('https://digital.ihg.com/is/image/ihg/ihgor-member-rate-web-offers-1440x720')" }}
      className="border-b sticky top-0 z-50 bg-white/[100%]">
      <div className="flex justify-between items-center sm:mx-6 md:mx-10 lg:mx-12 ">
        <div className="h-20 flex">
          <img src={logo} className=" object-cover  my-10" alt="Logo" />
        </div>
        <div className="hidden lg:flex ml-25  items-center relative shadow-sm shadow-gray-400 border rounded-full">
          <input
            type="search"
            placeholder=""
            className="py-2.5 w-[20rem] rounded-full outline-0"
          />
          <div className="flex justify-between absolute w-full pr-16 pl-6 font-semibold text-gray-600">
            <button className="w-full">Place</button>
            <button className="border-l border-x px-6">Time</button>
            <button className="w-full text-gray-600/60 pl-2">Group Size</button>
          </div>
          <div className="bg-[#ff5a60] p-2 rounded-full mr-2">
            <FiSearch className="text-white w-full" />
          </div>
        </div>
        <Filters />
        <div
          className="flex items-center pr-3  font-semibold text-gray-600"
        >
          <div className="flex items-center mx-8 gap-1">
            <BiWorld className="" />
            <div className="language">
              <select className="border px-2 py-1">
                <option>English</option>
                <option>Tiếng Việt</option>
              </select>
            </div>
          </div>
          {userData ? (
            <div onClick={handleProfileOpen} className="flex items-center border px-1 py-1 rounded-full cursor-pointer gap-2 bg-[#ff5a60] 
            text-white font-bold shadow-lg shadow-gray-300 hover:bg-[#f9787c] duration-100 ease-out">
              <img src={userData.image} alt="Avatar" className="w-12 h-12 rounded-full" />
            </div>
          ) : (
            <div className="flex items-center border px-3 py-2 rounded-full cursor-pointer gap-2 bg-[#ff5a60] text-white font-bold shadow-lg shadow-gray-300 hover:bg-[#f9787c] duration-100 ease-out">
              <p>{user ? user.username : "Sign in"}</p>
              <BiUser className="text-[22px]" />
            </div>
          )}
        </div>
        <Modal show={showProfile} onHide={handleProfileClose} className="right-aligned-modal">
          <Modal.Header closeButton>
            <Modal.Title className="title-profile">Trang cá nhân của bạn</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div>
              {userData && (
                <>
                  <img className="image-profile" src={userData.image} alt="User Avatar" />
                  <h4>{userData.name}</h4>
                  <p>Email: {userData.email}</p>
                  <p>Địa chỉ: {userData.address}</p>
                  <p>Số điện thoại: {userData.phone}</p>
                </>
              )}
            </div>
          </Modal.Body>
          <Modal.Footer>
          <Button variant="secondary" onClick={handleEditOpen}>
              Edit
            </Button>
            <Button variant="secondary" onClick={handleProfileClose}>
              Close
            </Button>
            <Button variant="danger" onClick={handleLogout}>
              Logout
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </div>
  );
};

export default Navbar;
