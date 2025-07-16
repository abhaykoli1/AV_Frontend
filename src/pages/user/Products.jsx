import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
// import axios from "axios";

// Assets
import Bms from "../../assets/bms.jpg";
import jarvis from "../../assets/jarvis.webp";
import school from "../../assets/school.jpg";
import config from "../../api/config";
import axios from "axios";

const Products = () => {
  // const products = [
  //   {
  //     name: "Business Management System",
  //     role: "Website",
  //     image: Bms,
  //   },
  //   {
  //     name: "Student Management System",
  //     role: "Website & Application",
  //     image: school,
  //   },
  //   {
  //     name: "Student Helper",
  //     role: "Application",
  //     image: jarvis,
  //   },
  // ];

  const navigate = useNavigate();

  const fadeInVariant = {
    hidden: { opacity: 0, y: 50 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delay: i * 0.2,
        ease: "easeOut",
      },
    }),
  };

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  console.log(products);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await axios.get(`${config.API_BASE_URL}/AvProductList`);
      setProducts(response.data.data);
    } catch (error) {
      console.error("Error fetching products:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div id="products" className="text-white px- py-32 ">
      {/* Section Title */}
      <motion.h2
        className="text-4xl font-bold mb-8 px-5 flex items-center justify-center gap-2 "
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <span className="text-white">Our</span>
        <span
          className="relative text-purple-500  px-6 py-2 rounded-full inline-flex items-center justify-center"
          style={{ width: "160px", height: "50px", borderRadius: "999px" }}
        >
          Products
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

      {/* Products Grid */}

      {loading || products.length === 0 ? (
        <div className="grid">
          {[...Array(6)].map((_, index) => (
            <div key={index} className="skeleton"></div>
          ))}
        </div>
      ) : (
        <div className="grid sm:grid-cols-2 md:grid-cols-2 gap-5 px-5">
          {products.map((product, index) => (
            <motion.div
              key={index}
              className="bg-[#1B022B] rounded-3xl overflow-hidden shadow-xl relative flex flex-col"
              custom={index}
              variants={fadeInVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.2 }}
            >
              {/* Upper Content */}
              <div className="relative flex flex-col md:flex-row items-center p-6 md:p-10 gap-8">
                {/* Text Section */}
                <div className="flex-1 text-left">
                  <h2 className="text-3xl md:text-4xl font-extrabold leading-snug text-white mb-4">
                    Best <br />
                    All-In-One <br />
                    <span className="text-cyan-400">
                      Business Management
                    </span>{" "}
                    <br />
                    <span className="text-cyan-400">Software</span>
                  </h2>
                </div>

                {/* Image Section */}
                <div className="flex-1">
                  <div className="relative w-full h-[250px] md:h-[300px]">
                    <img
                      src={product.image}
                      alt={product.title}
                      className="rounded-xl shadow-lg w-full h-full object-cover transform rotate-3 hover:rotate-0 transition-transform duration-500"
                    />
                  </div>
                </div>
              </div>

              {/* Bottom Bar */}
              <div className="bg-[#29054A] px-6 py-4 flex items-center justify-between">
                <div className="flex flex-col">
                  <h3 className="text-xl md:text-2xl font-semibold text-white">
                    {product.title}
                  </h3>
                  <p className="text-purple-400 text-sm">{product.type}</p>
                </div>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => navigate("/contact-Us")}
                  className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white px-5 py-2 rounded-full text-sm font-semibold"
                >
                  inquire
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Products;
