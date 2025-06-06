import React from 'react'
import { motion } from "framer-motion"

const imageCommonVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.6, ease: "easeOut" },
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
const Strategy11th_page = () => {
  return (
    <motion.div className='marginal bg-gradient-to-l from-gray-100 to-transparent mb-5' variants={parentVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}>
      <div className=''>
        <motion.img variants={imageCommonVariants}
          transition={{ delay: 0.5 }} src="/154.webp" alt="" />
      </div>
    </motion.div>
  )
}

export default Strategy11th_page