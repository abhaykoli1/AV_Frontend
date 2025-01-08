import React from "react";
import { useNavigate } from "react-router-dom";

const Header = () => {
  function goTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }
  const navigate = useNavigate();
  return (
    <nav className="flex justify-between items-center p-6 bg-[rgba(0,0,0,0.93)] shadow-md">
      <div className="text-2xl font-bold text-white">
        <span className="text-purple-600">AV</span> BigBuddy
      </div>
      <ul className="hidden md:flex gap-6 text-white  uppercase text-lg">
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
      <a
        href="https://api.whatsapp.com/send/?phone=919509961818"
        className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg shadow hover:!text-white "
      >
        WhatsApp
      </a>
    </nav>
  );
};

export default Header;
