import React, { useState } from "react";
import { motion } from "framer-motion";
import config from "../../api/config";
import axios from "axios";

function Contact() {
  const [formData, setFormData] = useState({
    lastName: "",
    firstName: "",
    email: "",
    phone: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await axios.post(
        `${config.API_BASE_URL}/add-AvContact-query`,
        {
          name: `${formData.firstName} ${formData.lastName}`,
          phone: formData.phone,
          email: formData.email,
          message: formData.message,
        }
      );
      alert("Your Contact Query Added!");
      setFormData({
        lastName: "",
        firstName: "",
        email: "",
        phone: "",
        message: "",
      });
    } catch (error) {
      console.error("Error submitting contact query:", error);
    } finally {
      setLoading(false);
    }
  };

  const fadeIn = {
    hidden: { opacity: 0, y: 70 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <div
      id="Contact"
      className="pb-10 pt-4 text-white flex items-center justify-center"
    >
      <div className="container mx-auto px-5">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Left Side */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="flex flex-col justify-center"
          >
            <h2 className="text-4xl font-bold mb-4">
              Book a <span className="text-purple-400">coffee</span> for Us
            </h2>
            <p className="text-lg mb-6">
              Reach out to our team for any queries or assistance with our IT
              services.
            </p>
            <div className="space-y-3 text-gray-300 text-base">
              <p>
                <strong className="text-white">Office Address:</strong> Manbagh
                Jaisinghpura Khor, Jaipur, Rajasthan 302027
              </p>
              <p>
                <strong className="text-white">Email:</strong>{" "}
                info@avbigbuddy.site
              </p>
              <p>
                <strong className="text-white">Phone:</strong> +91 9509961818
              </p>
            </div>
          </motion.div>

          {/* Right Side */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <h2 className="text-3xl font-bold mb-2">
              Let's connect constellations
            </h2>
            <p className="text-gray-400 mb-6">
              Let's align our constellations! Reach out and let the magic of
              collaboration illuminate our skies.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="flex gap-4">
                <input
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  placeholder="First Name"
                  type="text"
                  className="flex-1 p-3 rounded-full bg-transparent border border-gray-600 placeholder-gray-400 outline-none"
                  required
                />
                <input
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  placeholder="Last Name"
                  type="text"
                  className="flex-1 p-3 rounded-full bg-transparent border border-gray-600 placeholder-gray-400 outline-none"
                  required
                />
              </div>
              <input
                name="email"
                value={formData.email}
                onChange={handleChange}
                type="email"
                placeholder="Email"
                className="w-full p-3 rounded-full bg-transparent border border-gray-600 placeholder-gray-400 outline-none"
                required
              />
              <input
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                type="text"
                placeholder="Phone Number"
                className="w-full p-3 rounded-full bg-transparent border border-gray-600 placeholder-gray-400 outline-none"
                required
              />
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Message"
                className="w-full p-3 h-32 rounded-[30px] bg-transparent border border-gray-600 placeholder-gray-400 outline-none resize-none"
                required
              ></textarea>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                disabled={loading}
                className="w-full py-3 rounded-full bg-gradient-to-r from-indigo-500 to-purple-600 text-white hover:opacity-90 transition-all font-semibold"
              >
                {loading ? (
                  "Submitting..."
                ) : (
                  <div className="flex items-center justify-center gap-2">
                    Submit <span>🚀</span>
                  </div>
                )}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
