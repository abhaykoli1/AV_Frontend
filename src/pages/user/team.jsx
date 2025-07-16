import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

// Assets for team members
import argha from "../../assets/image/argha.png";
import vishal from "../../assets/image/vishal.jpg";
import abhay from "../../assets/image/abhay.jpeg";
import { useNavigate } from "react-router-dom";
import config from "../../api/config";
import axios from "axios";
import { Facebook, Instagram, Twitter, Share2 } from "lucide-react";

const MeetTheTeam = () => {
  // const teamMembers = [
  //   {
  //     name: "Argha Das",
  //     role: "Founder & CEO",
  //     image: argha,
  //   },
  //   {
  //     name: "Vishal Goswami",
  //     role: "Co-founder & CTO",
  //     image: vishal,
  //   },
  //   {
  //     name: "Abhay Koli",
  //     role: "Full Stack Developer",
  //     image: abhay,
  //   },
  // ];
  const [members, setMembers] = useState([]);
  console.log(members);

  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    fetchMembers();
  }, []);

  const fetchMembers = async () => {
    try {
      const response = await axios.get(`${config.API_BASE_URL}/AvMembersList`);
      setMembers(response.data.data);
    } catch (error) {
      console.error("Error fetching members:", error);
    } finally {
      setLoading(false);
    }
  };
  const fadeUpVariant = {
    hidden: { opacity: 0, y: 50 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delay: i * 0.2, // Stagger effect for team cards
        ease: "easeOut",
      },
    }),
  };

  return (
    <div id="Team" className="text-white px-5 text-center py-32">
      <motion.h2
        className="text-4xl font-bold mb-8 px-5 flex items-center justify-center gap-2 "
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <span
          className="relative text-purple-500  py-2 rounded-full inline-flex items-center justify-center"
          style={{ width: "90px", height: "50px", borderRadius: "999px" }}
        >
          Meet
          <svg
            className="absolute -left-2 -top-[2px] rotate-3 w-full h-full z-0 overflow-visible"
            viewBox="0 0 170 35"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
          >
            <ellipse
              cx="100"
              cy="20"
              rx="95"
              ry="15"
              stroke="#ffff"
              strokeWidth=".5"
              fill="none"
            />
          </svg>
        </span>
        <span className="text-white"> Our Precious Members</span>
      </motion.h2>
      {loading || members.length === 0 ? (
        <div className="grid">
          {[...Array(6)].map((_, index) => (
            <div key={index} className="skeleton"></div>
          ))}
        </div>
      ) : (
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-5">
          {members.map((member, index) => (
            <motion.div
              key={index}
              className="bg-[#1B022B] rounded-lg shadow-md hover:shadow-lg transition-all duration-300 relative overflow-hidden"
              custom={index}
              variants={fadeUpVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.2 }}
            >
              {/* Image + gradient overlay */}
              <div className="relative h-[300px] w-full overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="object-cover h-full w-full rounded-t-lg"
                />
                {/* Gradient overlay */}
                {/* <div className="absolute inset-0 bg-gradient-to-t from-purple-800/50 to-transparent rounded-t-lg" /> */}

                {/* Social Icons */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-3 bg-purple-700 px-4 py-2 rounded-lg shadow-md">
                  <a
                    href="#"
                    className="bg-white text-black p-1 rounded-full hover:scale-110 transition"
                  >
                    <Facebook size={18} />
                  </a>
                  <a
                    href="#"
                    className="bg-white text-black p-1 rounded-full hover:scale-110 transition"
                  >
                    <Twitter size={18} />
                  </a>
                  <a
                    href="#"
                    className="bg-white text-black p-1 rounded-full hover:scale-110 transition"
                  >
                    <Instagram size={18} />
                  </a>
                  <button className="bg-white text-black p-1 rounded-full hover:scale-110 transition">
                    <Share2 size={18} />
                  </button>
                </div>
              </div>

              {/* Text area */}
              <div className="p-6 text-center">
                <h3 className="text-2xl font-semibold">{member.name}</h3>
                <p className="text-purple-500 font-medium">
                  {member.designation}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MeetTheTeam;
