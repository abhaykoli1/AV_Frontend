import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

// Assets for team members
import argha from "../../assets/image/argha.png";
import vishal from "../../assets/image/vishal.jpg";
import abhay from "../../assets/image/abhay.jpeg";
import { useNavigate } from "react-router-dom";
import config from "../../api/config";
import axios from "axios";

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
        className="text-4xl font-bold mb-8"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        Meet Our Precious Members
      </motion.h2>
      {loading || members.length === 0 ? (
        <div className="grid">
          {[...Array(6)].map((_, index) => (
            <div key={index} className="skeleton"></div>
          ))}
        </div>
      ) : (
        <div className="grid sm:grid-cols-2 md:grid-cols-2 gap-5">
          {members.map((member, index) => (
            <motion.div
              key={index}
              className="bg-gray-800/50 rounded-lg shadow hover:shadow-lg transition-shadow duration-300"
              custom={index}
              variants={fadeUpVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.2 }}
            >
              <div className="h-[300px] w-full overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="object-cover h-[300px] w-full rounded-t-lg shadow-lg"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-semibold">{member.name}</h3>
                <p className="text-purple-500 font-semibold">
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
