import React from 'react'
import {motion} from "framer-motion"
import Card from './Card';
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
      transition: { type: "spring", stiffness: 300, damping: 25, delay: 0.4},
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
const Strategy12th_page = () => {
  return (
    <div className='w-[90%] h-auto mx-[5%] px-3 mb-5 '>
        <div className='text-xl  font-semibold text-[#06aeef] mb-3'>
        STRENGTHENING BRAND EQUITY
        </div>
        <div className='mb-3'>Brand health indicators, including top-of-mind awareness and consideration, are at an all time high. A focused marketing
        approach has deepened consumer connect.</div>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center mb-3'>
  {/* Card 1 */}
  <div className='w-full max-w-sm p-4  rounded '>
    <img src="/155.webp" alt="" className="mb-2" />
    <p>
    The ‘Namak Ho Tata ka,
Tata Namak’ campaign,
launched during IPL
2024, featured 11 films
reviving the iconic jingle,
celebrating Tata Salt’s
longstanding heritage.
    </p>
  </div>

  {/* Repeat the structure below for each of your cards */}
  <div className='w-full max-w-sm p-4  rounded '>
    <img src="/158.webp" alt="" className="mb-2" />
    <p>
    The Tata Salt Crystal
campaign in Tamil Nadu
showcased superior quality,
setting it apart from local
brands in a key market.
    </p>
  </div>
  <div className='w-full max-w-sm p-4  rounded '>
    <img src="/159.webp" alt="" className="mb-2" />
    <p>
    The Tata Salt Himalayan
Rock Salt campaign
with Kajol established it
as ‘Desh ka No.1 Rock
Salt’, driving a significant
increase in awareness.
    </p>
  </div>
</div>
<div className='mb-3'>
<div className='text-xl font-semibold text-[#06aeef]'>
EXPANDING VALUE-ADDED OFFERINGS
</div>
<div className='flex flex-row gap-10'>
<div className="flex flex-col mt-2 w-[200px]">
              <h1 className="text-3xl text-[#4084c1] leading-none">31%</h1>

              <div class="flex items-center my-1">
                <div class="w-4 h-2 bg-blue-500 rounded-full"></div>
                <div class="h-0.5 w-full bg-blue-500"></div>
              </div>
              <div className=" text-sm leading-tight">Revenue growth in value-added salts</div>
            </div>
            <div className="flex flex-col mt-2 w-[200px]">
              <h1 className="text-3xl text-[#4084c1] leading-none">57%</h1>

              <div class="flex items-center my-1">
                <div class="w-4 h-2 bg-blue-500 rounded-full"></div>
                <div class="h-0.5 w-full bg-blue-500"></div>
              </div>
              <div className=" text-sm leading-tight">Volume growth in rock salt</div>
            </div>
            </div>
</div>
<div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center mb-3'>
  {/* Card 1 */}


  {/* Repeat the structure below for each of your cards */}
  <div className='w-full max-w-sm p-4  rounded '>
    <img src="/161.webp" alt="" className="mb-2" />
    <p>
    Tata Salt Iron Health, double
fortified with Iron and Iodine,
relaunched at an accessible price
point to help tackle widespread
Iron deficiency in India.
    </p>
  </div>
  <div className='w-full max-w-sm p-4  rounded '>
    <img src="/164.webp" alt="" className="mb-2" />
    <p>
    Tata Salt Sendha+
reintroduced in the masspremium range, ensuring
accessibility and trusted
quality for everyday use.
    </p>
  </div>
</div>
    </div>
  )
}

export default Strategy12th_page