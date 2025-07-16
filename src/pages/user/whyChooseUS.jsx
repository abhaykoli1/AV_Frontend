import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import web from "../../assets/icons/web.png";
import branding from "../../assets/icons/branding.png";
import crm from "../../assets/icons/crm.png";
import digital from "../../assets/icons/digital.png";
import mobile from "../../assets/icons/mobile.png";
import saas from "../../assets/icons/saas.png";
import config from "../../api/config";

import Gradientbg from "../../assets/Gradientbg.png";
const WhyChooseUs = () => {
  const scaleUpVariant = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: (i) => ({
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.25,
        delay: i * 0,
        ease: [0, 0, 0, 1],
      },
    }),
  };

  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  console.log(services);
  useEffect(() => {
    const fetchServices = async () => {
      try {
        const response = await fetch(`${config.API_BASE_URL}/AvServiceList`);
        const result = await response.json();

        if (result.status) {
          setServices(result.data);
        } else {
          setError("No services found");
        }
      } catch (error) {
        setError("Failed to fetch data");
      } finally {
        setLoading(false);
      }
    };

    fetchServices();
  }, []);

  return (
    <div id="Services" className="py-16 mt-32 px-5 text-white">
      <motion.h2
        className="text-4xl font-bold mb-8 px-5 flex items-center justify-center gap-2 "
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <span className="text-white">Tailored Solutions for Your</span>
        <span
          className="relative text-purple-500  px-6 py-2 rounded-full inline-flex items-center justify-center"
          style={{ width: "160px", height: "50px", borderRadius: "999px" }}
        >
          Needs
          <svg
            className="absolute -left-3 -top-1 rotate-3 w-full h-full z-0 overflow-visible"
            viewBox="0 0 170 30"
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
      </motion.h2>

      {loading || services.length === 0 ? (
        <div className="grid">
          {[...Array(6)].map((_, index) => (
            <div key={index} className="skeleton"></div>
          ))}
        </div>
      ) : (
        <div className="grid relative grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-5">
          {services.map((feature, index) => (
            <motion.div
              key={index}
              className="flex flex-col md:flex-row items-center justify-between p-8 bg-gradient-to-br from-[#2C003E] to-[#120024] rounded-2xl shadow-lg hover:shadow-2xl transition-transform duration-500 hover:scale-105"
              custom={index}
              variants={scaleUpVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.2 }}
            >
              <div className="flex-shrink-0">
                <img
                  src={feature.image}
                  alt={feature.title}
                  className="w-24 h-24 md:w-32 md:h-32 object-contain"
                />
              </div>

              <div className="mt-6 md:mt-0 md:ml-10 text-center md:text-left max-w-lg">
                <h3 className="text-3xl md:text-4xl font-bold text-white">
                  {feature.title}
                </h3>
                <p className="text-gray-300 mt-4 text-lg md:text-xl leading-relaxed">
                  {feature.description}
                </p>

                <button className="mt-6 px-6 py-2 border-2 border-purple-500 text-purple-400 rounded-full hover:bg-purple-500 hover:text-white transition-all duration-300">
                  LEARN MORE
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      )}
    </div>
  );
};

export default WhyChooseUs;
