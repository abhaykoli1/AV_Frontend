import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import axios from "axios";
import config from "../../api/config";

const Counter = () => {
  const [counters, setCounters] = useState([]);

  const { ref, inView } = useInView({
    triggerOnce: false, // Trigger on every scroll
    threshold: 0.3, // Start animation when 30% of the element is visible
  });

  useEffect(() => {
    fetchCounters();
  }, []);
  const fetchCounters = async () => {
    try {
      const response = await axios.get(
        `${config.API_BASE_URL}/get-all-avcounters`
      );
      console.log(response.data.data[0]);
      setCounters(response.data.data);
    } catch (error) {
      console.error("Error fetching counters:", error);
    }
  };

  console.log("counters", counters);

  return (
    <div className="px-8 text-center py-20 pt-32">
      <motion.div
        ref={ref}
        className="grid grid-cols-1 md:grid-cols-3 gap-8"
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={{
          hidden: { opacity: 0, y: 20 },
          visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.5, staggerChildren: 0.2 },
          },
        }}
      >
        {counters.map((counter, index) => (
          <motion.div
            key={index}
            className="flex flex-col items-center"
            variants={{
              hidden: { opacity: 0, scale: 0.8 },
              visible: {
                opacity: 1,
                scale: 1,
                transition: { duration: 0.5 },
              },
            }}
          >
            <h3 className="text-8xl font-bold text-purple-600">
              {inView ? (
                <CountUp
                  start={0}
                  end={counter.build}
                  duration={2} // Duration of the counting animation
                  decimals={counter.build % 1 !== 0 ? 1 : 0} // Add decimal if value is not an integer
                  suffix={counter.suffix || ""}
                />
              ) : (
                "0"
              )}
            </h3>
            <p className="mt-2 text-xl font-bold text-white">Website Build</p>
          </motion.div>
        ))}
        {counters.map((counter, index) => (
          <motion.div
            key={index}
            className="flex flex-col items-center"
            variants={{
              hidden: { opacity: 0, scale: 0.8 },
              visible: {
                opacity: 1,
                scale: 1,
                transition: { duration: 0.5 },
              },
            }}
          >
            <h3 className="text-8xl font-bold text-purple-600">
              {inView ? (
                <CountUp
                  start={0}
                  end={counter.identity}
                  duration={2} // Duration of the counting animation
                  decimals={counter.identity % 1 !== 0 ? 1 : 0} // Add decimal if value is not an integer
                  suffix={counter.suffix || ""}
                />
              ) : (
                "0"
              )}
            </h3>
            <p className="mt-2 text-xl font-bold text-white">
              Build Brand Identity
            </p>
          </motion.div>
        ))}
        {counters.map((counter, index) => (
          <motion.div
            key={index}
            className="flex flex-col items-center"
            variants={{
              hidden: { opacity: 0, scale: 0.8 },
              visible: {
                opacity: 1,
                scale: 1,
                transition: { duration: 0.5 },
              },
            }}
          >
            <h3 className="text-8xl font-bold text-purple-600">
              {inView ? (
                <div>
                  <CountUp
                    start={0}
                    end={counter.growth}
                    duration={2}
                    decimals={counter.growth % 1 !== 0 ? 1 : 0}
                    suffix={counter.suffix || ""}
                  />
                  x
                </div>
              ) : (
                "0"
              )}
            </h3>
            <p className="mt-2 text-xl font-bold text-white">
              Your Startup Growth
            </p>
          </motion.div>
        ))}
      </motion.div>

      {/* Decorative Divider */}
      <div className="flex justify-center mt-8">
        <div className="w-16 h-1 bg-gradient-to-r from-purple-400 to-pink-500"></div>
      </div>
    </div>
  );
};

export default Counter;
