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
  const [activeTab, setActiveTab] = useState("target");

  return (
    <div className="marginal text-lg pt-10 max-w-[1300px] min-h-[100vh] mx-auto">
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
          className={`px-5 py-2 rounded-full font-medium cursor-pointer border-2 ${
            activeTab === "highlight"
              ? " border-blue-500 text-white"
              : "border-blue-100 text-gray-700"
          }`}
        >
          <div className="text-xl  md:text-2xl lg:text-4xl">
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
    className="flex flex-col lg:flex-row items-stretch justify-center gap-6"
  >
    {[Target1, Target2].map((img, idx) => (
      <motion.div
        key={idx}
        className="w-full max-w-[500px] aspect-[4/3] flex items-center justify-center bg-white rounded-lg shadow-md border border-gray-200 overflow-hidden"
        variants={childVariants}
      >
        <img
          src={img}
          alt={`Target ${idx + 1}`}
          className="object-contain w-full h-full"
        />
      </motion.div>
    ))}
  </motion.div>
)}



{activeTab === "highlight" && (
  <motion.div
    key="highlight"
    initial="hidden"
    animate="visible"
    exit="exit"
    variants={fadeVariants}
    className="flex flex-row justify-center items-center gap-6 overflow-x-auto"
  >
    <motion.img
      src={highlight1}
      alt="Highlight 1"
      className="w-full max-w-[300px] h-auto rounded-md"
      variants={childVariants}
    />
    <motion.img
      src={highlight2}
      alt="Highlight 2"
      className="w-full max-w-[300px] h-auto rounded-md"
      variants={childVariants}
    />
    <motion.img
      src={highlight3}
      alt="Highlight 3"
      className="w-full max-w-[300px] h-auto rounded-md"
      variants={childVariants}
    />
  </motion.div>
)}

</AnimatePresence>

    </div>
  );
};

export default Esg;
