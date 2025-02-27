import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import aboutImage from "../../assets/image/1.webp";

const About = () => {
  const { ref, inView } = useInView({
    triggerOnce: false, // Allow animations on every scroll
    threshold: 0.2, // Trigger when 20% of the element is visible
  });

  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.2,
        when: "beforeChildren",
        staggerChildren: 0.1,
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
    <motion.div
      id="About"
      className="text-white font-sans py-32"
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={sectionVariants}
    >
      <main className="px-8 text-center">
        {/* Heading */}
        <motion.h2
          className="lg:text-6xl md:text-6xl text-4xl max-w-[800px] mx-auto w-full font-bold"
          variants={childVariants}
        >
          Delivering Digital Excellence Since 2020
        </motion.h2>

        {/* Main Section */}
        <motion.div
          className="mt-20 grid md:grid-cols-2 gap-8 items-center"
          variants={sectionVariants}
        >
          {/* Left Section */}
          <motion.div className="space-y-6" variants={childVariants}>
            <motion.h3
              className="text-5xl font-extrabold leading-tight"
              variants={childVariants}
            >
              CREATE AND INVEST <br />
              <span className="text-purple-700">Create your own STARTUP</span>
            </motion.h3>
            <motion.p
              className="text-white font-bold text-xl"
              variants={childVariants}
            >
              We are 100% committed to taking your startup from zero to step
              hundred.
            </motion.p>
            <motion.div
              className="flex flex-col  space-y-10"
              variants={childVariants}
            >
              <div>
                <h4 className="text-3xl text-purple-700 font-bold max-w-80 mx-auto">
                  1.5+
                </h4>
                <p className="text-white max-w-80 mx-auto">
                  Experience More Than 1.5 years.
                </p>
              </div>
              <div>
                <h4 className="text-3xl text-purple-700 font-bold max-w-80 mx-auto">
                  2.5x
                </h4>
                <p className="text-white max-w-80 mx-auto">
                  We claim that we are 2.5 times faster, more effective, and
                  perform better than others.
                </p>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Section */}
          <motion.div
            className="relative flex justify-center "
            variants={childVariants}
          >
            <motion.img
              src={aboutImage}
              alt="Illustration"
              className=""
              initial="hidden"
              animate={inView ? "visible" : "hidden"} // Re-trigger on scroll
              variants={childVariants}
            />
          </motion.div>
        </motion.div>
      </main>
    </motion.div>
  );
};

export default About;
