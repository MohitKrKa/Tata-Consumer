import React from "react";
import { motion } from "framer-motion";

import Target1 from "/Sustainability/Target1.png";
import Target2 from "/Sustainability/Target2.png";
import highlight1 from "/Sustainability/highlight1.png";
import highlight2 from "/Sustainability/highlight2.png";
import highlight3 from "/Sustainability/highlight3.png";

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

const Esg = () => {
  return (
    <div className="m-6 md:m-10 lg:m-20 flex flex-col lg:flex-row gap-6 lg:gap-10">
      {/* Left content */}
      <motion.div
        className="w-full lg:w-1/2 flex flex-col gap-6 lg:gap-8"
        variants={parentVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.6 }}
      >
        <div className="text-xl md:text-2xl lg:text-4xl">
          <span className="bg-gradient-to-r font-semibold from-[#20b588] to-[#30b9f1] bg-clip-text text-transparent">
            TARGET{" "}
          </span>
          <span className="bg-gradient-to-r from-[#20b588] to-[#30b9f1] text-white px-2 py-1 rounded-full text-sm md:text-base">
            FY 2025-26
          </span>
        </div>

        <motion.img
          src={Target1}
          alt="Target 1"
          className="w-full h-auto rounded-md "
          variants={childVariants}
        />

        <motion.img
          src={Target2}
          alt="Target 2"
          className="w-full h-auto rounded-md "
          variants={childVariants}
        />
      </motion.div>

      {/* Right content */}
      <motion.div
        className="w-full lg:w-1/2 "
        variants={parentVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.6 }}
      >
        <div className="text-xl mb-6 md:text-2xl lg:text-4xl ">
          <span className="bg-gradient-to-r font-semibold from-[#20b588] to-[#30b9f1] bg-clip-text text-transparent">
            HIGHLIGHT{" "}
          </span>
          <span className="bg-gradient-to-r from-[#20b588] to-[#30b9f1] text-white px-2 py-1 rounded-full text-sm md:text-base">
            FY 2024-25
          </span>
        </div>

        <div className="flex gap-4">
          <motion.img
            src={highlight1}
            alt="Highlight 1"
            className="w-1/3 max-w-32 sm:max-w-36 md:max-w-44 lg:max-w-3xs rounded-md "
            variants={childVariants}
          />

          <motion.img
            src={highlight2}
            alt="Highlight 2"
            className="w-1/3 max-w-32 sm:max-w-36 md:max-w-44 lg:max-w-3xs rounded-md "
            variants={childVariants}
          />

          <motion.img
            src={highlight3}
            alt="Highlight 3"
            className="w-1/3 max-w-32 sm:max-w-36 md:max-w-44 lg:max-w-3xs rounded-md "
            variants={childVariants}
          />
        </div>
      </motion.div>
    </div>
  );
};

export default Esg;