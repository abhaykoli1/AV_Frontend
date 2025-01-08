import React from "react";

import image1 from "../../assets/image/abou.jpg";
import argha from "../../assets/image/argha.png";
import vishal from "../../assets/image/vishal.jpg";
import abhay from "../../assets/image/abhay.jpeg";

const MeetTheTeam = () => {
  const teamMembers = [
    {
      name: "Argha Das",
      role: "Founder & CEO",
      image: argha,
    },
    {
      name: "Vishal Goswami",
      role: "Co-founder & CTO",
      image: vishal,
    },

    // {
    //   name: "Simran Gill",
    //   role: "Sr. Manager",
    //   image: "https://picsum.photos/400/400/?blur",
    // },
    {
      name: "Abhay Koli",
      role: "Full Stack Developer",
      image: abhay,
    },
  ];

  return (
    <div id="Team" className="text-white px-8  text-center py-32">
      <h2 className="text-4xl font-bold mb-8">Meet Our Precisous Members</h2>
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
            <div className="p-6">
              <h3 className="text-2xl font-semibold">{member.name}</h3>
              <p className="text-purple-500 font-semibold">{member.role}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MeetTheTeam;
