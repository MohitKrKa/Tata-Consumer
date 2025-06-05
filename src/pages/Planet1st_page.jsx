import React from "react";
import {motion } from "framer-motion"
const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
      delayChildren: 0.2,
    },
  },
};

const imageCommonVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  show: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const imageVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 300, damping: 25 },
  },
};

const textVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 300, damping: 25, delay: 0.4 },
  },
};

const parentVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.3, // auto one-by-one
    },
  },
};
const Planet1st_page = ({obje:{ text, head1, text2, img1, img2, img3 }}) => {
  return (
    <>
      <motion.div variants={containerVariants} className="bg-[#f4f2ee] min-h-[80vh] flex md:flex-row flex-col relative">
        {/* Left section */}
        <div className="md:w-1/2 w-full flex flex-col relative items-center md:items-start">
          {img1 && (
            <img
              src={img1}
              alt=""
              className="w-3/4 md:w-[40vh] md:-ml-30 mt-6 md:mt-0"
            />
          )}
          <span className="ml-8 md:ml-8 text-center md:text-left">
            <span className="text-[#58595b] font-[500] text-3xl md:text-4xl">
              For Better
            </span>
            <br />
            <span className="text-6xl md:text-8xl font-[600] bg-gradient-to-r from-[#91c08e] to-[#009add] bg-clip-text text-transparent ">
              {text}
            </span>
          </span>
          <img
            src={img2}
            alt=""
            className="h-[30vh] md:h-[50vh] w-full mt-6 md:mt-0 object-contain"
          />
        </div>

        {/* Right Section */}
        <div className="md:w-1/2  w-full flex justify-center md:absolute md:top-50 flex-col gap-4 md:right-0 mt-8 md:mt-0 items-center md:items-start">
          <img
            src={img3}
            alt=""
            className="h-[8vh] md:h-[10vh] w-3/4 md:w-[40vh] self-center md:self-auto "
          />
          <h1 className="text-[#1267b3] text-3xl md:text-[4vh] font-[500] text-center md:text-left">
            {head1}
          </h1>
          <p className="text-[#aeafb0] font-[400] text-xl md:text-[3vh] text-center md:text-left">
            {text2}
          </p>
        </div>
      </motion.div>
    </>
  );
};

export default Planet1st_page;