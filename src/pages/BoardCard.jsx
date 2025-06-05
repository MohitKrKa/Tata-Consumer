import React from "react";
import { motion } from "framer-motion";

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
      staggerChildren: 0.3,
    },
  },
};

const BoardCard = ({ obj }) => {
  return (
    <motion.div
      className="w-full max-w-6xl mx-auto my-10 bg-[#1461a5] rounded-2xl overflow-visible shadow-lg flex flex-col md:flex-row items-stretch relative justify-start"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={parentVariants}
    >
      <div className="md:w-1/3 w-full bg-[#125397] ">
      <motion.div
        className="
          w-full 
          p-6 
          flex 
          justify-center 
          items-start
          md:sticky 
          md:top-8 
          md:self-start
          h-fit
        "
        variants={imageVariants}
      >
        <img
          src={obj.img}
          alt={obj.name}
          className=" w-full h-auto object-contain rounded-xl shadow-md"
        />
      </motion.div>
      </div>
      {/* Image Section */}
      

      {/* Text Section */}
      <motion.div
        className="md:w-2/3 w-full p-6 flex flex-col justify-center text-white"
        variants={textVariants}
      >
        <h2 className="text-2xl md:text-3xl font-bold mb-1">{obj.name}</h2>
        <h3 className="text-lg md:text-xl font-medium text-[#d3e9ff] mb-4">{obj.designation}</h3>
        <p className="text-base md:text-lg leading-relaxed">{obj.text}</p>
      </motion.div>
    </motion.div>
  );
};

export default BoardCard;
