import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

const FinancialChart = ({ data, showPercent, percentValue }) => {
  const chartRef = useRef(null);
  const [maxBarHeight, setMaxBarHeight] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      if (chartRef.current) {
        setMaxBarHeight(chartRef.current.offsetHeight * 0.8);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const maxValue = Math.max(...data.map((item) => item.value));

  return (
    <div className="bg-[#d9ecfb] w-screen flex justify-center items-center h-[80vh]">
      <div
        ref={chartRef}
        className="flex flex-col h-[60vh] items-center bg-white border-2 border-[#36a2eb] w-3xl max-w-full relative"
      >
        {/* YoY% Label */}
        {showPercent && percentValue !== 0 && (
          <div className="absolute -top-15 text-center">
            <p
              className={`text-2xl font-bold ${
                percentValue > 0 ? "text-green-600" : "text-red-500"
              }`}
            >
              {percentValue > 0 ? "+" : ""}
              {percentValue}%
            </p>
            <p className="text-sm text-gray-500">YoY%</p>
          </div>
        )}

        {/* Chart Bars */}
        <div className="relative w-full flex items-end justify-center max-w-6xl h-full">
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
                  {/* Value */}
                  <p className="mb-2 text-sm font-bold text-gray-800">
                    {item.value}
                  </p>

                  {/* Bar */}
                  <motion.div
                    initial={{ height: 0 }}
                    whileInView={{ height: `${scaledHeight}px` }}
                    transition={{ duration: 1, ease: "easeInOut" }}
                    viewport={{ once: true }}
                    className="relative w-full flex items-end"
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

                  {/* Year */}
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
