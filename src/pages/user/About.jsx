import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import aboutImage from "../../assets/image/1.webp"; // face image
import robot from "../../assets/robot.png"; // robot image
const About = () => {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.2,
  });

  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        when: "beforeChildren",
        staggerChildren: 0.2,
      },
    },
  };

  const childVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <motion.section
      id="About"
      className="relative bg-[#0C011F] text-white  py-32 overflow-hidden"
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={sectionVariants}
    >
      <main className="px-6 md:px-16 text-center">
        <motion.h2
          className="text-4xl font-bold mb-8 px-5 flex items-center justify-center gap-2 "
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <span className="text-white"> Delivering</span>

          <span
            className="relative text-purple-500  py-2 rounded-full inline-flex items-center justify-center"
            style={{ width: "310px", height: "50px", borderRadius: "999px" }}
          >
            Digital Excellence
            <svg
              className="absolute -left-4 -top-[24px] rotate-1.5 w-full h-full z-0 overflow-visible"
              viewBox="0 0 180 21"
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
          <span className="text-white"> Since 2020</span>
        </motion.h2>
        <motion.div
          className="mt-20 grid md:grid-cols-2 gap-12 items-center"
          variants={sectionVariants}
        >
          {/* <div className="relative rounded-3xl bg-gradient-to-br from-[#2B0155] to-[#17002F] p-10 md:p-16 shadow-2xl backdrop-blur-md">
            <div className="absolute top-0 right-0 h-full w-[6px] bg-gradient-to-b from-white/30 via-white/10 to-transparent rounded-full"></div>

            <motion.div variants={childVariants}>
            </motion.div>
          </div> */}

          <motion.div
            className="bg-gradient-to-br from-[#2B0155] border-b-8 border-r-8 border-r-gray-300/30 shadow-[0_0_20px_rgba(156,39,176,0.6)] to-[#17002F] bg-opacity-50 rounded-[30px] p-10 md:p-16 shadow-2xl backdrop-blur-lg text-center font-[Comic_Neue]"
            variants={childVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.h3
              className="text-4xl md:text-5xl font-bold leading-tight mb-2 text-white"
              variants={childVariants}
            >
              CREATE AND <br /> INVEST
            </motion.h3>

            <motion.h4
              className="text-purple-400 text-2xl md:text-3xl font-semibold mb-3"
              variants={childVariants}
            >
              Create your own <br /> STARTUP
            </motion.h4>

            <motion.p
              className="text-gray-300 text-lg mb-3 max-w-xl mx-auto"
              variants={childVariants}
            >
              We are <span className="text-purple-400 font-bold">100%</span>{" "}
              committed to taking your startup from zero to step hundred.
            </motion.p>

            <motion.div className="space-y-2" variants={childVariants}>
              <div>
                <h4 className="text-5xl text-purple-300 font-extrabold mb-2 drop-shadow-lg">
                  1.5+
                </h4>
                <p className="text-gray-300 text-lg">
                  Experience More Than 1.5 years.
                </p>
              </div>

              <div>
                <h4 className="text-5xl text-purple-300 font-extrabold mb-2 drop-shadow-lg">
                  2.5x
                </h4>
                <p className="text-gray-300 text-lg">
                  We claim that we are 2.5 times faster, more effective, and
                  perform better than others.
                </p>
              </div>
            </motion.div>
          </motion.div>
          {/* Right Side Image */}
          <motion.div
            className="relative flex justify-center items-center"
            variants={childVariants}
          >
            <motion.img
              src={robot}
              alt="Digital Face"
              className="w-full max-w-[600px] object-contain"
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              variants={childVariants}
            />
            {/* Purple glow behind image */}
            <div className="absolute bottom-0 w-60 h-60 bg-purple-700 opacity-30 blur-3xl rounded-full"></div>
          </motion.div>
        </motion.div>
      </main>
    </motion.section>
  );
};

export default About;
