import React from "react";
import { Link, NavLink } from "react-router-dom";

const Sidebar = ({ sidebar, setSidebar }) => {
  const links = [
    { path: "", label: "Home" },
    { path: "#Services", label: "Services" },
    { path: "#About", label: "About" },
    { path: "#Team", label: "Team" },
    { path: "#products", label: "Products" },
    { path: "#Contact", label: "Contact" },
  ];

  return (
    <div
      className={`fixed top-20 right-0 z-50 bg-[#111] text-white transition-transform duration-300 w-60 h-full ${
        sidebar ? "transform translate-x-0" : "transform translate-x-full"
      }`}
    >
      {/* <div className="flex justify-between items-center p-4 border-b border-gray-600">
        <img src="/path/to/logo.png" alt="Logo" className="h-12" />
        <FaTimes
          size={30}
          className="cursor-pointer text-white"
          onClick={() => setSidebar(false)} // Close sidebar when clicked
        />
      </div> */}
      <nav className="flex flex-col gap-4 px-4 py-6">
        {links.map((link, index) => (
          <a
            key={index}
            href={link.path}
            className={({ isActive }) =>
              `hover:underline font-bold text-white ${
                isActive ? "text-pink-500" : ""
              }`
            }
            onClick={() => setSidebar(false)} // Close sidebar on link click
          >
            {link.label}
          </a>
        ))}
      </nav>
    </div>
  );
};

export default Sidebar;
