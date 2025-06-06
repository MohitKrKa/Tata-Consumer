import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import Target1 from "/Sustainability/Target1.webp";
import Target2 from "/Sustainability/Target2.webp";
import highlight1 from "/Sustainability/highlight1.webp";
import highlight2 from "/Sustainability/highlight2.webp";
import highlight3 from "/Sustainability/highlight3.webp";

// Animation settings
const parentVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const childVariants = {
  hidden: { opacity: 0, y: 100 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 20,
      duration: 1,
    },
  },
};

const fadeVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
  exit: { opacity: 0, y: -20, transition: { duration: 0.4 } },
};

const Esg = () => {
  const [activeTab, setActiveTab] = useState("target"); // "target" or "highlight"

  return (
    <div className=" m-auto pt-10 max-w-[1300px] min-h-[100vh]">
      {/* Tabs */}
      <div className="flex gap-4 mb-10">
        <button
          onClick={() => setActiveTab("target")}
          className={`px-5 py-2 rounded-full font-medium cursor-pointer border-2 ${
            activeTab === "target"
              ? " border-blue-500 text-white"
              : "border-blue-100 text-gray-700"
          }`}
        >
          <div className="text-xl md:text-2xl lg:text-4xl">
                <span className="bg-gradient-to-r font-semibold from-[#20b588] to-[#30b9f1] bg-clip-text text-transparent">
                  TARGET{" "}
                </span>
                <span className="bg-gradient-to-r from-[#20b588] to-[#30b9f1] text-white px-2 py-1 rounded-full text-sm md:text-base">
                  FY 2025-26
                </span>
              </div>
        </button>
        <button
          onClick={() => setActiveTab("highlight")}
          className={`px-5 py-2 rounded-full font-medium cursor-pointer border-2  ${
            activeTab === "highlight"
                 ? " border-blue-500 text-white"
              : "border-blue-100 text-gray-700"
          }`}
        >
          <div className="text-xl mb-6 md:text-2xl lg:text-4xl">
              <span className="bg-gradient-to-r font-semibold from-[#20b588] to-[#30b9f1] bg-clip-text text-transparent">
                HIGHLIGHT{" "}
              </span>
              <span className="bg-gradient-to-r from-[#20b588] to-[#30b9f1] text-white px-2 py-1 rounded-full text-sm md:text-base">
                FY 2024-25
              </span>
            </div>
        </button>
      </div>

      {/* Animated Section */}
      <AnimatePresence mode="wait">
        {activeTab === "target" && (
          <motion.div
            key="target"
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={fadeVariants}
            className="flex flex-col lg:flex-row gap-6 lg:gap-10"
          >
            <motion.div
              className="w-full lg:w-1/2 flex flex-col gap-6 lg:gap-8"
              variants={parentVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.6 }}
            >
             
             <div className="flex gap-10">
             <motion.img
                src={Target1}
                alt="Target 1"
                className="w-auto h-auto rounded-md"
                variants={childVariants}
              />
              <motion.img
                src={Target2}
                alt="Target 2"
                className="w-auto h-auto  rounded-md"
                variants={childVariants}
              />
             </div>
              
            </motion.div>
          </motion.div>
        )}

        {activeTab === "highlight" && (
          <motion.div
            key="highlight"
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={fadeVariants}
            className="w-full"
          >
           

            <div className="flex gap-4 ">
              <motion.img
                src={highlight1}
                alt="Highlight 1"
                className="w-1/3   rounded-md"
                variants={childVariants}
              />
              <motion.img
                src={highlight2}
                alt="Highlight 2"
                className="w-1/3   rounded-md"
                variants={childVariants}
              />
              <motion.img
                src={highlight3}
                alt="Highlight 3"
                className="w-1/3   rounded-md"
                variants={childVariants}
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Esg;
