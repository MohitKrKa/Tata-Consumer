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
const Strategy25th_page = () => {
  return (
    <>
    <div className='w-[90%] mx-[5%] px-3 mb-5'>
<div className='text-xl font-semibold text-[#06aeef] mb-3'>DRIVING GROWTH IN THE USA</div>
<div className='flex flex-row justify-center gap-5'>

  <div className='w-[20%]'>
    <div className='mb-2'>
      <img src="/199.webp" alt="" />
    </div>
    <div>
    In the USA, Eight O’Clock
coffee has maintained
stable market share. 
    </div>
  </div>
  <div className='w-[50%]'>
    <div className='mb-2'>
    Eight O’Clock Coffee’s ‘Have it Black’
campaign engaged consumers with a
humorous take on elaborate over-thetop mix-ins and toppings, with the idea
that when coffee is as good as Eight O’
Clock, they will want to drink it black. 
    </div>
    <div>
      <img src="/198.webp" alt="" />
    </div>
  </div>
  <div className='w-[30%]'>
    <div className=''>
      <div className='mb-2'>
        <img src="/200.webp" alt="" />
      </div>
      <div>
      teapigs recorded exceptional
growth in the US. Within its largest
customer Whole Foods Market,
sales have increased 38.5%*; with
Cold Brew Peach & Mango ranked
among the trends to watch in its
forecasts for 2025.
      </div>
    </div>
  </div>
</div>
<div className='text-xs font-bold'>*Whole Foods Data Cube</div>
    </div>

    
    </>
  )
}

export default Strategy25th_page