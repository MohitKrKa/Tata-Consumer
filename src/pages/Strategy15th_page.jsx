import React from "react";
import { motion } from "framer-motion";
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
      delayChildren: 0.2,
    },
  },
};

const imageCommonVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const Strategy15th_page = () => {
  return (
    <motion.div
      className="marginal bg-[#f3f1eb] !p-4 mb-5"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <motion.div >
        <motion.img
          variants={imageCommonVariants}
          src="/169.webp"
          alt=""
        />
      </motion.div>
    </motion.div>
  );
};

export default Strategy15th_page;
