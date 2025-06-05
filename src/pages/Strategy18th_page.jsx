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
const Strategy18th_page = () => {
  return (
    <div className='w-[90%] mx-[5%] px-3 mb-5 flex flex-row justify-center  gap-5'>
      <div className='w-[30%] '>
<div className='text-2xl font-semibold text-[#1368b4] mb-3'>
DEMOCRATISING
MILLETS WITH TATA
SOULFULL
</div>
<div className=''>
Tata Soulfull is redefining the way
consumers engage with millets,
integrating them into contemporary
food formats, while staying true
to its ‘Desh Ke Millets’ vision. By
expanding into new categories,
strengthening distribution networks,
and leading innovation, Tata Soulfull
is bringing tasty, convenient, and
accessible millet-based products to
households across India. The brand
is strengthening its portfolio across
breakfast and snacking categories,
with distinct consumer segments for
kids and adults.
</div>
</div>
<div className='w-[20%] '>
<div className="flex flex-col mt-2 w-[200px]">
              <h1 className="text-3xl text-[#4084c1] leading-none">5X</h1>

              <div class="flex items-center my-1">
                <div class="w-4 h-2 bg-blue-500 rounded-full"></div>
                <div class="h-0.5 w-full bg-blue-500"></div>
              </div>
              <div className=" text-sm leading-tight">
              Revenues since
              acquisition in 2021
              </div>
            </div>
            <div className="flex flex-col mt-2 w-[200px]">
              <h1 className="text-3xl text-[#4084c1] leading-none">600k</h1>

              <div class="flex items-center my-1">
                <div class="w-4 h-2 bg-blue-500 rounded-full"></div>
                <div class="h-0.5 w-full bg-blue-500"></div>
              </div>
              <div className=" text-sm leading-tight">
              Outlets reach
              </div>
            </div>
    </div>
    <div className='w-[50%] '>
      <img src="/176.webp" alt="" />
    </div>
    </div>
/* <motion.div className='md:w-1/3 h-auto' variants={textVariants}>
    <div className='flex flex-col justify-center  gap-5'>
<div className='flex flex-col justify-center '>
    <h1 className='text-3xl text-[#4a87c4]'>4X</h1>
   
    <div class="flex items-center space-x-2">
  <div class="w-3 h-5 bg-blue-500 rounded-full"></div>
  <div class="h-0.5 w-32 bg-blue-500"></div>
</div>
    <div>Revenues since
    acquisition in 2021</div>
</div>
<div className=''>
    <h1 className='text-3xl text-[#4a87c4]'>15%</h1>
   
    <div class="flex items-center space-x-2">
  <div class="w-3 h-5 bg-blue-500 rounded-full"></div>
  <div class="h-0.5 w-32 bg-blue-500"></div>
</div>
    <div>Innovation to
    Sales contribution</div>
</div>
<div>
    <h1 className='text-3xl text-[#4a87c4]'>600k</h1>
   
    <div class="flex items-center space-x-2">
  <div class="w-3 h-5 bg-blue-500 rounded-full"></div>
  <div class="h-0.5 w-32 bg-blue-500"></div>
</div>
    <div>Outlets reach</div>
</div>
</div>
</motion.div> */

  )
}

export default Strategy18th_page