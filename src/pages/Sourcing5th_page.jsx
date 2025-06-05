import React from 'react'
import Card from './Card'
import {motion } from "framer-motion"
import { div } from 'framer-motion/client';
const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };
  
  const imageCommonVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    show: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
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
const Sourcing5th_page = () => {
  return (
    <>
    <div className='w-[90%] px-3 mx-[5%] mb-5'>
<div className='text-xl font-semibold text-[#06aeef] '>
Strategy:
</div>
<span className=' text-xl inline text-black font-light '>
Supply Chain
Governance
</span>
    </div>
    <div>
<motion.div className='md:w-[90%]  h-auto m-[5%]  bg-[#f4f1ec] p-5' initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.2 }} // 60% in view triggers
    variants={parentVariants} >
   <Card obj={{name:"Screening:Supplier Classification and Assessment",text:"Starbucks advances gender inclusivity with women-focused stores, designed to improve the experiences of customers and partners. These locations prioritise safety, mentorship programmes, and professional development for women within the organisation. In recognition of these efforts, Tata Starbucks was named one of India’s best workplaces for women by Great Place To Work®, strengthening its efforts in diversity and empowerment.",img:"/53.webp"}}/>
<motion.div className='  bg-white p-5 ' variants={textVariants}>
    <div className=' bg-white flex flex-col justify-center gap-2'>
        <div>At TCP, we have established
a stringent set of criteria for
selecting suppliers, including:
</div>
<div>
    <div className='flex items-center space-x-2'>
<div className="w-[10px] h-[10px] bg-blue-500 rounded-2xl"></div>
<span>Relevant product-specific
manufacturing licenses (e.g.
Tea Marketing Control Order
(TMCO) for tea commodity)
</span>
</div>
</div>
<div>
    <div className='flex items-center space-x-2'>
<div className="w-[10px] h-[10px] bg-blue-500 rounded-2xl"></div>
<span>Sustainability certifications,
such as Trustea or Rainforest
Alliance
</span>
</div>
</div>
<div>
    <div className='flex items-center space-x-2'>
<div className="w-[10px] h-[10px] bg-blue-500 rounded-2xl"></div>
<span>Certification of compliance by
Food Safety and Standards
Authority of India (FSSAI)
regulations
</span>
</div>
</div>
<div>
Additionally, suppliers must
meet all applicable statutory and
regulatory requirements.</div>
</div>
</motion.div>
    </motion.div>
    </div>
    </>
  )
}

export default Sourcing5th_page