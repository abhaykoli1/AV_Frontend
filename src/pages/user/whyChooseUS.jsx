import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import web from "../../assets/icons/web.png";
import branding from "../../assets/icons/branding.png";
import crm from "../../assets/icons/crm.png";
import digital from "../../assets/icons/digital.png";
import mobile from "../../assets/icons/mobile.png";
import saas from "../../assets/icons/saas.png";
import config from "../../api/config";

// const features = [
//   {
//     title: "Web Application",
//     description:
//       "A web application is a software application that runs on a web server and is accessed via a web browser, rather than being installed locally on a user's device.",
//     icon: web,
//   },
//   {
//     title: "SAAS Application",
//     description:
//       "A SaaS (Software as a Service) application is a cloud-based software solution that users access via the internet, rather than installing and maintaining software locally on their own devices. ",
//     icon: saas,
//   },
//   {
//     title: "Mobile Application",
//     description:
//       "A mobile application (or mobile app) is a software application designed to run on mobile devices like smartphones and tablets. ",
//     icon: mobile,
//   },
//   {
//     title: "CRM Services",
//     description:
//       "CRM (Customer Relationship Management) services are tools and software solutions designed to help businesses manage interactions with current and potential customers.",
//     icon: crm,
//   },
//   {
//     title: "Digital Marketing",
//     description:
//       "Digital marketing refers to the use of digital channels, tools, and platforms to promote products, services, or brands to a targeted audience.",
//     icon: digital,
//   },
//   {
//     title: "Branding",
//     description:
//       "Branding is the process of creating a unique identity for a company, product, or service that distinguishes it from competitors and resonates with the target audience.",
//     icon: branding,
//   },
// ];

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
    <div id="Services" className="py-16 px-5 text-white">
      <motion.div
        className="text-center mb-12"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <h2 className="text-5xl font-extrabold text-white my-20">
          Tailored Solutions for Your Needs
        </h2>
      </motion.div>

      {loading || services.length === 0 ? (
        <div className="grid">
          {[...Array(6)].map((_, index) => (
            <div key={index} className="skeleton"></div>
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((feature, index) => (
            <motion.div
              key={index}
              className="flex items-center p-8 bg-white shadow-lg rounded-2xl hover:shadow-2xl hover:scale-105 transition-transform duration-500"
              custom={index}
              variants={scaleUpVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.2 }}
            >
              <div className="flex flex-col justify- h-full">
                <img
                  src={feature.image}
                  alt={feature.title}
                  className="w-16 h-16"
                />
                <div className="mt-10">
                  <h3 className="text-3xl font-bold text-gray-800">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 mt-2 text-xl">
                    {feature.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      )}
    </div>
  );
};

export default WhyChooseUs;
