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
        delay: i * 0.2, // Staggered animation
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
    <div id="products" className="text-white px- py-32">
      {/* Section Title */}
      <motion.h2
        className="text-4xl font-bold mb-8 px-5"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        Our Products
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
              className="bg-gray-800/50 rounded-lg shadow hover:shadow-lg transition-shadow duration-300"
              custom={index}
              variants={fadeInVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.2 }}
            >
              {/* Product Image */}
              <div className="h-[300px] w-full overflow-hidden">
                <img
                  src={product.image}
                  alt={product.title}
                  className="object-cover h-[300px] w-full rounded-t-lg shadow-lg hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Product Info */}
              <div className="flex items-start justify-between px-6 py-6 gap-4">
                <div className="flex flex-col justify-start">
                  <h3 className="text-2xl font-semibold">{product.title}</h3>
                  <p className="text-purple-500 font-semibold">
                    {product.type}
                  </p>
                </div>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => navigate("/contact-Us")}
                  className="bg-indigo-600 text-white px-4 py-2 rounded-md"
                >
                  Inquire
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
