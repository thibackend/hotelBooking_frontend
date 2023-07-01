import React from "react";
import logo from '../../assets/logo.jpg';
import { BiWorld, BiUser } from "react-icons/bi";
import { FiSearch } from "react-icons/fi";
import tokenService from "../../services/token.service";
import { useNavigate } from "react-router-dom";
import Filters from "./Filters";

const Navbar = () => {
  const navigate = useNavigate();
  const user = tokenService.getToken();
  const handleLogout= () =>{
    setTimeout(
      ()=>{
        tokenService.removeToken();
        navigate('/');
      }
      ,1000
    )
  }
  return (
    <div 
    style={{backgroundImage: "url('https://digital.ihg.com/is/image/ihg/ihgor-member-rate-web-offers-1440x720')"}}
    className="border-b sticky top-0 z-50 bg-white/[95%]">
      <div className="flex justify-between items-center sm:mx-6 md:mx-10 lg:mx-12 ">
        {/* Left */}
        <div className="h-20 flex">
          <img src={logo} className=" object-cover  my-10" />
        </div>
        {/* Middle */}
        <Filters/>
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
            <p>{user ? user.username : 'Sign in'}</p>
            <BiUser className="text-[22px]" />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Navbar;
