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
const Strategy14th_page = () => {
  return (
    <div className='w-[90%] h-auto mx-[5%] px-3 ' >
      <div className='flex flex-row gap-5 justify-center mb-5'>
   <div className='w-[25%]'>
    <img src="/165.webp" alt="" />
    </div>    
   <div className='w-[25%]'>
    <div className='text-xl font-semibold text-[#06aeef] mb-3 '>E-commerce leadership</div>
    <div className=''>Tata Sampann has strategically
prioritised digital-first consumers,
resulting in considerable market
share gains in e-commerce. </div>
   </div>
   <div className='w-[25%]'>
    <div className='text-xl font-semibold text-[#06aeef] mb-3 '>Consistent Growth</div>
    <div className=''>Tata Sampann’s premium offerings
in pantry staples continued to
attract discerning consumers,
leading to a sustained 31%
five-year CAGR for the brand. </div>
   </div>
   <div className='w-[25%]'>
    <img src="/166.webp" alt="" />
    </div> 
    </div>

<div className='flex md:flex-row flex-col  items-center  '>
  <div className='w-[]'>
    <img src="/167.webp" alt="" className=''/>
    </div>
    <div>
    <img src="/168.webp" alt="" className=''/>
    </div>
</div>
    
    </div>
  )
}

export default Strategy14th_page