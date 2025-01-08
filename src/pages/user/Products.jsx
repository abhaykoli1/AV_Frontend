import React from "react";

import Bms from "../../assets/bms.jpg";
import jarvis from "../../assets/jarvis.webp";
import school from "../../assets/school.jpg";
import { useNavigate } from "react-router-dom";

const Products = () => {
  const teamMembers = [
    {
      name: "Business Management System",
      role: "Website",
      image: Bms,
    },
    {
      name: "Student Management System",
      role: "Website & Application",
      image: school,
    },
    // {
    //   name: "Simran Gill",
    //   role: "Sr. Manager",
    //   image: "https://picsum.photos/400/400/?blur",
    // },
    {
      name: "Student Helper",
      role: "Application",
      image: jarvis,
    },
  ];

  const navigate = useNavigate();

  return (
    <div id="products" className="text-white px-   py-32">
      <h2 className="text-4xl font-bold mb-8">Our Products</h2>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-20">
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className="bg-gray-800/50  rounded-lg shadow hover:shadow-lg transition-shadow duration-300"
          >
            <div className="h-[300px] w-full overflow-hidden">
              <img
                src={member.image}
                alt="Startup concept"
                className=" object-cover h-[300px] w-full rounded-t-lg shadow-lg"
              />
            </div>
            <div className="flex items-start justify-between px-6 py-6 gap-4">
              <div className=" flex flex-col justify-start">
                <h3 className="text-2xl font-semibold">{member.name}</h3>
                <p className="text-purple-500 font-semibold">{member.role}</p>
              </div>
              <button
                onClick={() => navigate("/contact-Us")}
                className="bg-indigo-600 text-white"
              >
                Inquery
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
