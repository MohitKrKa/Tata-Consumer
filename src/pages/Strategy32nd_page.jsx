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
const Strategy32nd_page = () => {
  return (
    <>
   <div className='w-[90%] mx-[5%] px-3 mb-5 '>
<div className='text-xl font-semibold text-[#06aeef] mb-3'>
SMITH & JONES – INNOVATING TO BRING INTERNATIONAL FLAVOURS TO INDIAN CONSUMERS
IN A CONVENIENT FORMAT
</div>
<div className='flex flex-row justify-center gap-5'>
  <div className='w-[30%]'>Smith & Jones continues to expand its
footprint, bringing convenience and
global flavours to Indian households.
With a commitment to innovation,
the brand simplifies home cooking
while enabling consumers to recreate
aspirational, restaurant-style dishes
with ease. With strong potential for
expansion into international cuisine,
Smith & Jones aims to make global
flavours more accessible, helping
consumers explore a world of flavours
from the comfort of their kitchens</div>
<div className='w-[30%]'>
  <div className='font-bold text-[#02adbd] mb-2'>Expanding Brand PortfolioLaunch of Pizza and Pasta sauce</div>
  <div>
  A tangy, aromatic, ready-to-use
sauce for effortless home preparation
of pasta, pizzas, and sandwiches.
Infused with vegetables, oregano,
and chilli flakes, it adds rich flavour to
everyday meals.
  </div>
</div>
<div className='w-[40%] '>
  <img src="/219.webp" alt="" />
</div>
</div>
   </div>
    </>
  )
}

export default Strategy32nd_page