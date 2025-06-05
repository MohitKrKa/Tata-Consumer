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
const Strategy37th_page = () => {
  return (
    <>
  <div className='w-[90%] mx-[5%] px-3 mb-5'>
<div className='text-2xl font-semibold text-[#1368b4] mb-3'>TAPPING INTO NEW GROWTH AVENUES WITH VENDING</div>
<div className='mb-3'>The Coffee and Tea Vending business was incubated in 2024 and has grown exponentially since its inception, rapidly
becoming a preferred choice among customers in the corporate and HoReCa segments. It provides premium, café-like
beverages at workplaces and leisure spaces through bean-to-cup and filter coffee machines. This vending business
continues to scale swiftly, supported by the Company’s extensive expertise in tea and coffee.</div>
 
  <div className='flex flex-row justify-center gap-5'>
    <div className='w-[70%]'>
      <img src="/233.webp" alt="" />
    </div>
    <div className='w-[30%]'>
<div className='text-xl font-semibold text-[#06aeef] mb-3'>CONSUMER-FIRST THINKING</div>
<div className='mb-2'>Building on bean-to-cup machines,
the newly introduced Filter/Chai
machines are tailored to regional
tastes to cater to the diverse tastes
and preferences of consumers. This
offering also solves for the consumer
problem of getting a ‘boiled chai-like
taste’ from the vending machine. </div>
<div className="flex flex-col w-[200px]">
            <h1 className="text-3xl text-[#4084c1] leading-none">7X</h1>

            <div class="flex items-center my-1">
              <div class="w-4 h-2 bg-blue-500 rounded-full"></div>
              <div class="h-0.5 w-full bg-blue-500"></div>
            </div>
            <div className=" text-sm leading-tight">
            YoY growth
            </div>
          </div>
          <div className="flex flex-col w-[200px]">
            <h1 className="text-3xl text-[#4084c1] leading-none">5%+</h1>

            <div class="flex items-center my-1">
              <div class="w-4 h-2 bg-blue-500 rounded-full"></div>
              <div class="h-0.5 w-full bg-blue-500"></div>
            </div>
            <div className=" text-sm leading-tight">
            Estimated Market share in
Bean to Cup space
            </div>
          </div>
    </div>
  </div>
  <div className=''>
    <img src="/236.webp" alt="" />
  </div>
  </div>
    </>
  )
}

export default Strategy37th_page