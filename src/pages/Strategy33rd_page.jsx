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
const Strategy33rd_page = () => {
  return (
    <>
<div className='w-[90%] mx-[5%] px-3 mb-5  '> 
  <div className='text-2xl font-semibold text-[#1368b4] mb-3'>ORGANIC INDIA – STRENGTHENING AND SCALING THE BRAND</div>
  <div className='flex flex-row justify-center gap-5'>
  <div className='w-1/3'>
    <p>With growing consumer demand for organic and
wellness products, Organic India is positioned
well to deliver on opportunities across India and
key international markets.
</p>
<p>The brand scale up will pivot on three key pillars:</p>
<ul className='list-disc ml-4'>
  <li className='mb-2'>Leveraging Tata Consumer Products’ global
distribution and opening new channels, like
pharmacy.</li>
  <li className='mb-2'>Building an authentic global organic brand.</li>
  <li className='mb-2'>Future-proofing the portfolio through
  innovations.</li>
</ul>
<div className="flex flex-col w-[200px]">
            <h1 className="text-3xl text-[#4084c1] leading-none">INR 374 Crores</h1>

            <div class="flex items-center my-1">
              <div class="w-4 h-2 bg-blue-500 rounded-full"></div>
              <div class="h-0.5 w-full bg-blue-500"></div>
            </div>
            <div className=" text-sm leading-tight">
            Organic India Revenue
            </div>
          </div>
  </div>
  <div className='w-1/3'>
    <div className='text-xl font-semibold text-[#06aeef] mb-3'>GROWING THE PHARMA CHANNEL</div>
    <div>
      <ul className='list-disc ml-4'>
        <li className='mb-2'>The brand’s supplements category
is well-suited for the pharmacy
channel. The ongoing build-up of
the pharmacy channel enables
deeper market penetration.</li>
        <li className='mb-2'>Expansion in pharmaceutical retail
        is supported by:
        <ul className='list-disc ml-4'>
<li className='mb-1'>Development of expert
marketing content, based on
product science to enhance
chemist advocacy.</li>
<li className='mb-1'>In-store investments to
strengthen product visibility.</li>
        </ul>
        </li>
      </ul>
    </div>
  </div>
  <div className='w-1/3'>
    <img src="/220.webp" alt="" />
  </div>
  </div>
</div>
    </>
  )
}

export default Strategy33rd_page