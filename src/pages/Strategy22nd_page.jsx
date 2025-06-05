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
const Strategy22nd_page = () => {
  return (
    <>
    <div className='w-[90%] h-auto mx-[5%] px-3 mb-5'>
<div className='text-2xl font-semibold text-[#1368b4] mb-2'>BUILDING A RESILIENT
AND SCALABLE READYTO-DRINK BUSINESS</div>

<div className='mb-3'>The Ready-To-Drink (RTD) business
has established a strong foundation
for long-term sustainable and
profitable growth, enabled by a
fundamentally strong business model,
differentiated products and a strong
innovation pipeline.</div>
<div className='text-xl font-semibold text-[#06aeef] mb-2'>
STRENGTHENING
HYDRATION PLAY
</div>
<div className='mb-3'>
Tata Copper+ continues to strengthen
its play in the hydration segment,
gaining traction through its unique
positioning. The brand taps into the
long-standing Indian tradition of storing
water in copper vessels, resonating
with consumers seeking functional
benefits in everyday hydration. During
this fiscal, the brand continued its
strong growth trajectory, growing 18%,
delivering an annualised growth of 72%
over the last 5 years. Strengthening
its institutional partnerships, Tata
Copper+ became the hydration partner
of choice for the Air India Group, further
enhancing its visibility.
The premium portfolio, led by
Himalayan, has also demonstrated
robust growth, contributing 11% of
the RTD business in FY25, up from
10% in FY24. A dedicated frontline
sales team has improved targeting
and deepened relationships within
the HoReCa segment, reinforcing
the brand’s premium positioning.
With a widening consumer base, the
business is well-placed to explore
further opportunities within India’s
hydration market.
</div>
<div className='mb-3'>
<div className=' font-semibold text-[#02adbd]  mb-2'>Portfolio catering to various Consumer Cohorts</div>
<div className='w-[70%]'>
  <img src="/190.webp" alt="" />
</div>
</div>
<div className='text-xl font-semibold text-[#06aeef] mb-2'>
INNOVATION ACROSS MULTIPLE FORMATS
</div>
<div className=''>
<img src="/191.webp" alt="" />
</div>
</div>
</>
  )
}

export default Strategy22nd_page