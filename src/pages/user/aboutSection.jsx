import React from "react";
import { FaFacebook } from "react-icons/fa";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
const AboutSection = () => {
  const [text, setText] = useState("");
  const fullText = "I'm a Software Engineer.";
  const [inView, setInView] = useState(false);

  useEffect(() => {
    if (!inView) return;
    let index = 0;
    const interval = setInterval(() => {
      setText((prev) => prev + fullText[index]);
      index++;
      if (index === fullText.length) clearInterval(interval);
    }, 100); // speed of typing (100ms per letter)

    return () => clearInterval(interval);
  }, [inView]);
  return (
    <section className="bg-[#0f041e] text-white px-10 !-my-20 ">
      {/* <h2 className="text-4xl md:text-5xl font-bold mb-4 typing">
        I'm a Software Engineer.<span className="animate-pulse">|</span>
      </h2>{" "} */}
      <motion.h2
        className="text-4xl md:text-5xl font-bold mb-4"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        onViewportEnter={() => setInView(true)}
      >
        <span>{text}</span>
        <span className="animate-pulse">|</span>
      </motion.h2>
      <p className="text-lg mb-6">
        Currently, I'm a Software Engineer at{" "}
        <a
          href="https://facebook.com"
          className="text-blue-400 hover:underline inline-flex items-center"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaFacebook className="mr-1" /> Facebook
        </a>
      </p>
      <p className="text-lg text-gray-300 max-w-3xl">
        A self-taught Flutter Developer, building cross-platform mobile apps for
        3+ years now. I craft fast, beautiful, and functional applications that
        strike the perfect balance between seamless user experiences and solid
        business logic.
      </p>
    </section>
  );
};

export default AboutSection;
