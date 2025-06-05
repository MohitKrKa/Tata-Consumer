import React from 'react'
import { motion } from "framer-motion";
import Card from "./Card";
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

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
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
  hidden: { opacity: 0, y: 100 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 300, damping: 25, duration:1 },
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
const Strategy19th_page = () => {
  return (
    <div>
    <motion.div className='w-[90%] h-auto mx-[5%] px-3 mb-5 ' variants={parentVariants}  initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.2 }} >
        <motion.div className='text-xl font-semibold text-[#06aeef] mb-2' variants={textVariants}>STRENGTHENING PRESENCE IN EIGHT CATEGORIES, AFTER ENTERING THREE NEW CATEGORIES IN FY25</motion.div>
        <motion.div className='' variants={textVariants}>
        Tata Soulfull's entire portfolio spanning a range of core products and new innovations, is built on millets.
        </motion.div>
        <motion.div variants={textVariants}>
        <div class="flex items-center space-x-2">
  <div class="w-3 h-3 bg-[#04adef] rounded-full"></div>
  <span class="">Core Portfolio</span>
</div>
<div class="flex items-center space-x-2 mb-2">
  <div class="w-3 h-3 bg-[#1267b3] rounded-full"></div>
  <span class="">New Launches(made with millets)</span>
</div>

        </motion.div>
        <div className='mb-2'>
        <span className='text-[#528cc5]'>Kids</span> : No junk snacking portfolio. Building consumer connect
        and awareness through brand mascot ‘Cruncha Muncha’
        </div>
        <div className='mb-2'>
        <span className='text-[#528cc5]'>Adults</span> : Cutting edge innovation to
address need gaps
        </div>
        <motion.div className='' variants={parentVariants} >
           <motion.img variants={imageCommonVariants} src="/177.webp" alt="" /> 
        </motion.div>
    </motion.div>
    </div>
  )
}


export default Strategy19th_page