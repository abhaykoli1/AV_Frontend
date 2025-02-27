import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import Robo from "../../assets/home.avif";
import { Instagram } from "lucide-react";

const Hero = () => {
  const controls = useAnimation();

  // Detect scroll and trigger animation
  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById("Home");
      const rect = section.getBoundingClientRect();
      const isInView = rect.top < window.innerHeight && rect.bottom >= 0;

      if (isInView) {
        controls.start("visible");
      } else {
        controls.start("hidden");
      }
    };

    // Trigger animation on scroll
    window.addEventListener("scroll", handleScroll);

    // Trigger animation on page load
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [controls]);

  // Animation Variants
  const fadeVariant = {
    hidden: { opacity: 0, y: 100 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const scaleVariant = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <div
      id="Home"
      className="relative text-white flex-col items-center text-center p-5"
    >
      <div className="grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1">
        {/* Text Section */}
        <motion.div
          className="text-start z-10 flex flex-col justify-center px-2"
          variants={fadeVariant}
          initial="hidden"
          animate={controls}
        >
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
            Supercharge your <span className="text-pink-600">STARTUP</span>{" "}
            Adventure
          </h1>
          <p className="text-lg md:text-xl text-gray-200 mb-8">
            Let's Start & Grow Your Startup To The Next Level.
          </p>

          <motion.a
            href="https://www.instagram.com/avbigbuddy"
            target="_blank"
            className="bg-pink-600 w-72 hover:text-white hover:scale-105 transition-all duration-500 flex items-center gap-2 text-white px-6 py-3 rounded-full text-lg shadow-lg hover:bg-pink-700"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <Instagram />
            View on Instagram
          </motion.a>
        </motion.div>

        {/* Image Section */}
        <motion.div
          className="mt-10 z-10 flex gap-8 items-center justify-center"
          variants={scaleVariant}
          initial="hidden"
          animate={controls}
        >
          <img
            src={Robo}
            alt="Startup concept"
            className="w-auto h-[40] object-cover rounded-lg shadow-lg"
          />
        </motion.div>
      </div>

      {/* Decorative Elements */}
      <motion.div
        className="absolute z-0 left-5 top-0 bg-pink-300 rounded-full w-32 h-32"
        variants={fadeVariant}
        initial="hidden"
        animate={controls}
      ></motion.div>
      <motion.div
        className="absolute z-0 right-10 bottom-16 bg-yellow-400 rounded-full w-40 h-40"
        variants={fadeVariant}
        initial="hidden"
        animate={controls}
      ></motion.div>
    </div>
  );
};

export default Hero;
