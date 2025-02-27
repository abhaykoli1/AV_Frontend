import React, { useState } from "react";
import { motion } from "framer-motion";
import config from "../../api/config";
import axios from "axios";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    countryCode: "+91",
    phone: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await axios.post(
        `${config.API_BASE_URL}/add-AvContact-query`,
        {
          name: formData.name,
          phone: formData.phone,
          country_code: formData.countryCode,
          email: formData.email,
          message: formData.message,
        }
      );
      alert("Your Contact Query Added");
      setFormData({
        name: "",
        countryCode: "+91",
        phone: "",
        email: "",
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

  //
  return (
    <div id="Contact" className="container mx-auto py-8 text-white">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <motion.div
          className="px-5 py-3 rounded shadow-lg text-gray-300"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          variants={fadeIn}
        >
          <h2 className="text-3xl font-bold text-pink-600 mb-4">
            Book a <span className="text-gray-400">coffee</span> for Us
          </h2>
          <p className="text-lg mb-6">
            Reach out to our team for any queries or assistance with our IT
            services.
          </p>
          <p className="mb-2">
            <strong>Office Address:</strong> Manbagh Jaisinghpura Khor, Jaipur,
            Rajasthan 302027
          </p>
          <p className="mb-2">
            <strong>Email:</strong> info@avbigbuddy.site
          </p>
          <p className="mb-2">
            <strong>Phone:</strong> +91 9509961818
          </p>
        </motion.div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          variants={fadeIn}
        >
          <form
            onSubmit={handleSubmit}
            className="border-[.5px] border-gray-500 p-5 mx-5 rounded-md shadow-lg text-white"
          >
            <input
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Name"
              type="text"
              className="w-full p-2 mb-2 rounded outline-none bg-transparent border-b-[.5px] border-gray-500"
              required
            />
            <div className="flex items-center mb-4">
              <select
                name="countryCode"
                value={formData.countryCode}
                onChange={handleChange}
                className="p-2 mr-2 rounded outline-none bg-transparent border-b-[.5px] border-gray-500"
              >
                <option value="+91">+91 (India)</option>
                <option value="+1">+1 (US)</option>
                <option value="+44">+44 (UK)</option>
                <option value="+61">+61 (Australia)</option>
              </select>
              <input
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                type="text"
                placeholder="Phone Number"
                className="w-full p-2 rounded outline-none bg-transparent border-b-[.5px] border-gray-500"
                required
              />
            </div>
            <input
              name="email"
              value={formData.email}
              onChange={handleChange}
              type="email"
              placeholder="Email"
              className="w-full p-2 mb-2 rounded outline-none bg-transparent border-b-[.5px] border-gray-500"
              required
            />
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Message"
              className="w-full p-2 mb-4 rounded text-white outline-none bg-transparent border-b-[.5px] border-gray-500"
              required
            ></textarea>
            <motion.button
              type="submit"
              className="w-full border-none rounded bg-pink-600 hover:bg-pink-700 text-white font-semibold py-2"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              Submit
            </motion.button>
          </form>
        </motion.div>
      </div>
    </div>
  );
}

export default Contact;
