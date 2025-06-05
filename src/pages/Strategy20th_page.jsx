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
const Strategy20th_page = () => {
  return (
    <>
    <div className='w-[90%] mx-[5%] px-3 mb-5'>
{/* <div className='text-xl font-semibold text-[#06aeef]'>
DELIGHTING CONSUMERS WITH INNOVATION
</div> */}
<div className='mb-3'>
  <img src="/181.webp" alt="" />
</div>
{/* <div className='text-xl font-semibold text-[#06aeef]'>
EXPANDING BEYOND THE BREAKFAST PORTFOLIO- MILLET-BASED SNACKING
</div> */}
<div className='mb-3'>
  <img src="/182.webp" alt="" />
</div>
<div className='flex flex-row justify-center gap-5'>
  <div className='w-[30%]' >
  <div className='text-xl font-semibold text-[#06aeef] mb-3'>
  MAKING MILLETS
  MAINSTREAM
  </div>
  <div className='mb-3'>
  Tata Soulfull has strengthened its
market presence by leveraging
Tata Consumer Products’ extensive
distribution network, ensuring wider
availability. Additionally, it is focusing
on making millets more mainstream
through strategic retail partnerships,
driving accessibility and consumer
engagement initiatives.
  </div>
  <div>
    <img src="/186.webp" alt="" />
    <div className='font-bold'>
    Strategic partnership with <span className='text-[#11b14b]'> Reliance Retail </span>
    for enhanced brand visibility.
    </div>
  </div>
  </div>
  <div className='w-[70%]'>
    <img src="/185.webp" alt="" />
  </div>
</div>
    </div>
   </>
  )
}

export default Strategy20th_page