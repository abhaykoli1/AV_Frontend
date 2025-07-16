import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import Robo from "../../assets/home.avif";
import { Instagram } from "lucide-react";
import avtar from "../../assets/avtar.png";
import Gradient from "../../assets/Gradient.png";
import Arrow from "../../assets/Arrow.png";
import Ellipse from "../../assets/Ellipse.png";

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
    <div id="Home" className="relative text-white flex-col  p-5 -mt-40">
      <div className="grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1">
        <motion.div
          className="text-start z-10 flex flex-col justify-center px-2"
          variants={fadeVariant}
          initial="hidden"
          animate={controls}
        >
          <div className="min-h-screen  text-white flex flex-col items-cente justify-center px-4 text-center relative">
            <div className="relative justify-start flex">
              <div className="flex justify-center relative h-72">
                <img src={Gradient} alt="Developer Avatar" className="" />
                <img
                  src={avtar}
                  alt="Developer Avatar"
                  className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                />{" "}
              </div>
              <div className="absolute  left-1/2 -top- text-sm text-white">
                <div className="text-white relative">
                  <span className="mr-1">Hello! I am</span>
                  <span className="text-purple-500 font-semibold">
                    Argha Das
                  </span>
                  <img
                    src={Arrow}
                    alt="Developer Avatar"
                    className="absolute -left-28 -top-6"
                  />
                </div>
              </div>
            </div>

            {/* Text Content */}
            <div className="mt-6 space-y-4 text-start">
              <p className="text-lg -mb-5">A Developer who</p>
              <h1 className="text-4xl md:text-5xl font-bold leading-snug">
                Supercharge your{" "}
                <span className="relative inline-block">
                  <span className="text-purple-500 z-10 relative px-1">
                    STARTUP
                  </span>
                  <img
                    src={Ellipse}
                    alt="Ellipse"
                    className="absolute -left-2 -top-2"
                  />
                  {/* <svg
                    className="absolute left-0 bottom-0 w-full h-full"
                    viewBox="0 0 200 40"
                    xmlns="http://www.w3.org/2000/svg"
                    preserveAspectRatio="none"
                  >
                    <ellipse
                      cx="100"
                      cy="20"
                      rx="95"
                      ry="15"
                      stroke="#a855f7"
                      strokeWidth="2"
                      fill="none"
                    />
                  </svg> */}
                </span>
                Adventure...
              </h1>
              <p className="text-sm text-gray-300">
                Let’s Start & Grow Your Startup To The Next Level.
              </p>
            </div>
          </div>

          {/* <motion.a
            href="https://www.instagram.com/avbigbuddy"
            target="_blank"
            className="bg-pink-600 w-72 hover:text-white hover:scale-105 transition-all duration-500 flex items-center gap-2 text-white px-6 py-3 rounded-full text-lg shadow-lg hover:bg-pink-700"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <Instagram />
            View on Instagram
          </motion.a> */}
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
      {/* <motion.div
        className="absolute z-0 left-5 top-0 bg-pink-300 rounded-full w-32 h-32"
        variants={fadeVariant}
        initial="hidden"
        animate={controls}
      ></motion.div> */}
      {/* <motion.div
        className="absolute z-0 right-10 bottom-16 bg-yellow-400 rounded-full w-40 h-40"
        variants={fadeVariant}
        initial="hidden"
        animate={controls}
      ></motion.div> */}
    </div>
  );
};

export default Hero;
