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
const Strategy23rd_page = () => {
  return (
    <>
    <div className='w-[90%] mx-[5%] px-3 mb-5 '>
<div className='text-xl font-semibold text-[#06aeef] mb-3  '>
STRENGTHENING CONSUMER
CONNECT ACROSS THE
PORTFOLIO
</div>
<ul className='list-disc ml-4 mb-3'>
  <li className='mb-2  '>Building Pan-India presence for
  the Tata Gluco+ Cup portfolio
  </li>
  <li className='mb-2'>
  Hyper-local marketing
approach through digital and
local activation, encouraging
consumption through local
associations, communities and
events
  </li>
  <li className='mb-2'>Stepping up digital presence and
  building engaging content</li>
</ul>
<div className='text-xl font-semibold text-[#06aeef] mb-3'>
STRENGTHENING DISTRIBUTION: BEING PRESENT
WHERE THE CONSUMER IS
</div>
<ul className='list-disc ml-4 mb-3'>
<li className='mb-2'>Driving numeric distribution
in general trade by increasing
product availability in both core
and new geographies.</li>
<li className='mb-2'>Enhancing processes and
automation through the
implementation of a new
organisation-wide Distributor
Management System (DMS) to
streamline operations.</li>
<li className='mb-2'>Expanding availability across
channels of the future, including
Quick commerce, e-commerce,
Modern Trade, and pharmacy
outlets.</li>
<li className='mb-2'>Structured programmes in HoReCa
and small-format modern trade
(SAMT) to optimise product range
and accessibility.</li>
</ul>
<div className=''>
  <img src="/192.webp" alt="" />
</div>
    </div>
   </>
  )
}

export default Strategy23rd_page