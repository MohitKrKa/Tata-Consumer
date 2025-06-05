import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

const FinancialChart = ({ data }) => {
  const chartRef = useRef(null);
  const [maxBarHeight, setMaxBarHeight] = useState(0);

  // Calculate the max bar height based on the container's height
  useEffect(() => {
    const handleResize = () => {
      if (chartRef.current) {
        setMaxBarHeight(chartRef.current.offsetHeight * 0.8); // 60% of container height
      }
    };

    // Set initial maxBarHeight
    handleResize();

    // Add resize event listener to adjust maxBarHeight on window resize
    window.addEventListener("resize", handleResize);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const maxValue = Math.max(...data.map((item) => item.value));

  return (
    <div className="bg-[#d9ecfb] w-screen flex justify-center items-center h-[80vh]">
      <div
        ref={chartRef}
        className="marginal   flex flex-col h-[60vh] items-center bg-white border-2 border-[#36a2eb] w-3xl max-w-full"
      >
        <div className="relative w-full flex items-end justify-center max-w-6xl h-full">
          {/* Horizontal lines */}
          {/* {Array.from({ length: 11 }, (_, i) => (
            <div
              key={`h-${i}`}
              className="absolute left-0 w-full border-t border-gray-300"
              style={{ bottom: `${(i / 9) * maxBarHeight}px` }}
            />
          ))} */}

          {/* Vertical lines */}
          {/* {Array.from({ length: 7 }, (_, i) => (
            <div
              key={`v-${i}`}
              className="absolute border-l border-gray-200"
              style={{
                left: `${(i / 7) * 100}%`,
                transform: "translateX(-50%)",
                height: "100%",
              }}
            />
          ))} */}

          {/* Bar chart */}
          <div className="gap-8 flex items-end justify-center w-full">
            {data.map((item, index) => {
              const scaledHeight = (item.value / maxValue) * maxBarHeight;
              return (
                <motion.div
                  key={index}
                  className="flex flex-col bottom-5 items-center relative group w-1/6 sm:w-1/5 md:w-1/6 lg:w-1/8"
                  transition={{
                    duration: 1.2,
                    ease: "linear",
                    delay: index * 0.2,
                  }}
                  viewport={{ once: true }}
                >
                  {/* Value above the bar */}
                  <p className="mb-2 text-sm font-bold text-gray-800">
                    {item.value}
                  </p>

                  {/* Animated bar */}
                  <motion.div
                    initial={{ height: 0 }}
                    whileInView={{ height: `${scaledHeight}px` }}
                    transition={{ duration: 1, ease: "easeInOut" }}
                    viewport={{ once: true }}
                    className="relative  w-full flex items-end"
                  >
                    <div
                      className="w-full rounded-t-xl bg-gradient-to-t from-[#01aeef] to-[#0db152] transition-opacity duration-300 group-hover:opacity-0"
                      style={{ height: "100%" }}
                    />
                    <div
                      className="w-full rounded-t-xl bg-[#009ed7] opacity-0 transition-opacity duration-300 group-hover:opacity-100 absolute bottom-0 left-0 right-0"
                      style={{ height: "100%" }}
                    />
                  </motion.div>

                  {/* Year below the bar */}
                  <p className="mt-3 text-sm font-medium text-gray-700">
                    {item.year}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FinancialChart;
