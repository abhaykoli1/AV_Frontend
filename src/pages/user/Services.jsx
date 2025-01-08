import React from "react";
import { motion } from "framer-motion";

function Services() {
  const services = [
    {
      title: "Android Development",
      description:
        "Create powerful, user-friendly Android applications with a focus on performance, scalability, and stunning design. Our team specializes in building apps that meet business goals and enhance user engagement.",
    },
    {
      title: "Website Designing",
      description:
        "Design responsive, visually appealing, and highly functional websites tailored to showcase your brand. We bring creativity and technical expertise together for an exceptional user experience.",
    },
    {
      title: "Digital Marketing",
      description:
        "Boost your online presence with targeted digital marketing strategies, including SEO, social media management, and content marketing to help your business reach its ideal audience.",
    },
    {
      title: "UX/UI Designing",
      description:
        "We design intuitive, user-friendly interfaces that ensure your users enjoy a seamless experience. Our UX/UI solutions are crafted to engage and retain customers while aligning with your business objectives.",
    },
  ];

  // Define animation variants based on index
  const getAnimationVariants = (index) => {
    switch (index) {
      case 0:
        return {
          hidden: { opacity: 0, x: -50 }, // Animate from the left
          visible: {
            opacity: 1,
            x: 0,
            transition: { duration: 0.6, ease: "easeOut" },
          },
        };
      case 1:
        return {
          hidden: { opacity: 0, x: 50 }, // Animate from the right
          visible: {
            opacity: 1,
            x: 0,
            transition: { duration: 0.6, ease: "easeOut" },
          },
        };
      case 2:
        return {
          hidden: { opacity: 0, y: -50 }, // Animate from the top
          visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, ease: "easeOut" },
          },
        };
      case 3:
        return {
          hidden: { opacity: 0, y: 50 }, // Animate from the bottom
          visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, ease: "easeOut" },
          },
        };
      default:
        return {
          hidden: { opacity: 0, y: 50 },
          visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
        };
    }
  };

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-6 text-center text-pink-500">
        Services we provide
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2">
        {services.map((service, index) => (
          <motion.div
            key={index}
            className={`p-6 ${
              index === 1 || index === 3
                ? "border-l-[0.5px] border-slate-500"
                : ""
            }  ${
              index === 1 || index === 0
                ? "border-b-[0.5px] border-slate-500"
                : ""
            } text-center flex flex-col justify-center items-center h-72 w-full`}
            variants={getAnimationVariants(index)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <h2 className="text-xl font-bold mb-4 text-indigo-400">
              {service.title}
            </h2>
            <p className="text-gray-300">{service.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default Services;
