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
const Strategy34th_page = () => {
  return (
    <>
  <div className='w-[90%] mx-[5%] px-3 mb-5'>
<div className='text-xl font-semibold text-[#06aeef] mb-3'>
A REFRESHED GLOBAL
BRAND ARCHITECTURE
</div>
<div className='flex flex-row justify-center gap-5'>
<div className=''>
  <img src="/228.webp" alt="" />
</div>
<div>
  <ul className='list-disc ml-5'>
    <li className='mb-2'>A new unified visual identity for all
geographies is being rolled out with refreshed
packaging that brings alive the brand’s core
essence rooted in nature’s purity.</li>
    <li className='mb-2'>The TATA Masterbrand endorsement is being
incorporated into the logo to strengthen
equity and trust.</li>
    <li className='mb-2'>The new design architecture is aimed
at driving functionality, authenticity and
credibility across categories. The new tea
and infusions packaging, which features real
stories of farmers, celebrates the partnership
with farmers that is central to the brand’s
legacy and ecosystem.</li>
  </ul>
</div>
</div>
  </div>
    </>
  )
}

export default Strategy34th_page