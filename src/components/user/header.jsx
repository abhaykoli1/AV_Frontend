import React from "react";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/image/av.png";

const Header = ({ sidebar, toggleSidebar }) => {
  function goTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }
  const navigate = useNavigate();
  return (
    <nav className="flex justify-between items-center py-3 px-7 bg-[rgba(0,0,0,0.93)] shadow-md">
      <div className="font-bold text-white">
        <img src={logo} alt="logo" className="h-16" />
      </div>
      <ul className="hidden md:flex gap-6 text-white  uppercase text-md">
        <a
          onClick={() => {
            goTop();
            navigate("/");
          }}
          className="hover:text-purple-600 cursor-pointer"
        >
          Home
        </a>
        <a href="#Services" className="hover:text-purple-600 cursor-pointer">
          Services
        </a>

        <a href="#About" className="hover:text-purple-600 cursor-pointer">
          About
        </a>

        <a href="#Team" className="hover:text-purple-600 cursor-pointer">
          Team
        </a>

        <a href="#products" className="hover:text-purple-600 cursor-pointer">
          Products
        </a>

        <a href="#Contact" className="hover:text-purple-600 cursor-pointer">
          Contact
        </a>
      </ul>
      <div className="md:hidden mr-1 fixed top-6 right-7 z-50  hover:border-none focus:outline-none bg-transparent focus:border-none">
        <button
          onClick={toggleSidebar}
          className="relative h-8  text-black focus:outline-none hover:border-none bg-transparent focus:border-none"
        >
          <div
            className={`absolute left-0 bg-white  h-[5px] w-8  rounded  transform transition-transform duration-300 ${
              sidebar
                ? "rotate-45 translate-y-0 top-1/2"
                : "-translate-y-2 top-3"
            }`}
          />
          <div
            className={`absolute top-1/2 left-0 w-8 h-[5px] bg-white rounded  transform transition-opacity duration-300 ${
              sidebar ? "opacity-0 " : "opacity-100"
            }`}
          />
          <div
            className={`absolute  left-0 w-8 h-[5px] bg-white rounded  transform transition-transform duration-300 ${
              sidebar
                ? "-rotate-45 translate-y-0 top-1/2"
                : "translate-y-2 top-[18px]"
            }`}
          />
        </button>
      </div>
    </nav>
  );
};

export default Header;
