import React from 'react'
import Page from '../Page'
import { motion } from 'framer-motion'
import Sourcing3rd_page from '../../pages/Sourcing3rd_page'
import Sourcing4th_page from '../../pages/Sourcing4th_page'
import Sourcing5th_page from '../../pages/Sourcing5th_page'
import Sourcing6th_page from '../../pages/Sourcing6th_page'
import Sourcing7th_page from '../../pages/Sourcing7th_page'
import Sourcing8th_page from '../../pages/Sourcing8th_page'
import Sourcing9th_page from '../../pages/Sourcing9th_page'
import Sourcing10th_page from '../../pages/Sourcing10th_page'
import Sourcing11th_page from '../../pages/Sourcing11th_page'
import Sourcing12th_page from '../../pages/Sourcing12th_page'
import Sourcing13th_page from '../../pages/Sourcing13th_page'
import Sourcing14th_page from '../../pages/Sourcing14th_page'
import Sourcing15th_page from '../../pages/Sourcing15th_page'
import Sourcing16th_page from '../../pages/Sourcing16th_page'

const para =
  "Our ‘Better Sourcing’ pillar emphasises our dedication to promoting economic, environmental and social development across our operations, resulting in sustainable practices throughout our value chain.";

const img1 = "/Sourcing1.webp";
    const img2 = "/Sourcing2.webp";
    const img3 = "/Sourcing3.webp";
const FBC4 = "/Sourcing4.webp";
const FBC5 = "/Sourcing5.webp";
const FBC6 = "/Sourcing6.webp";

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


const ForBetterSourcing = () => {
  return (
    <>
    <div className="mx-10">
        <div className='flex flex-col gap-10'>
    <Page
    text="Sourcing"
    head1="Ensuring Sustainability at Every Step"
    text2={para}
    img1={img1}
    img2={img2}
    img3={img3}
  />
  </div>

  {/* Page 1 */}

  <div
    className="marginal mt-5 flex   flex-col sm:flex-row gap-10"
  >
    {/* Images Section */}
    <div
      className="mt-5  flex flex-col sm:flex-row gap-15"
    >
      <div className='flex flex-col gap-3 w-[50%]'>
      <div className=''>
      <img
        src={FBC4}
        alt=""
        className=""/>
      </div>
      <h1 className=" text-[#176ab4] text-2xl sm:text-3xl font-[500] mt-5">
          PERFORMANCE HIGHLIGHTS
          </h1>
       <div className='w-[50%] mt-2'>  
        <img src={FBC6} alt="" className="" />
       </div>
       </div>
      <div
        className="flex flex-col gap-5 w-[50%] "
      >
        <div>
          <h1 className=" text-[#176ab4] text-2xl sm:text-3xl font-[500]">
            VISION
          </h1>
          <p className="bg-gradient-to-r from-[#0db14e] to-[#10b0ef] bg-clip-text text-transparent font-[400] mt-2 text-xl sm:text-3xl">
          Sustainable value
chains from farm
to shelf.
          </p>
        </div>
<div className='w-[70%]'>
        <img
        src={FBC5}
        alt=""
        className=""
      />
      </div>
      </div>
      
    </div>

    {/* Text Section */}
  </div>
  </div>
  <Sourcing3rd_page/>
  <Sourcing4th_page/>
  <Sourcing5th_page/>
  <Sourcing6th_page/>
  <Sourcing7th_page/>
  <Sourcing8th_page/>
  <Sourcing9th_page/>
  <Sourcing10th_page/>
  <Sourcing11th_page/>
  <Sourcing12th_page/>
  <Sourcing13th_page/>
  <Sourcing14th_page/>
  <Sourcing15th_page/>
  <Sourcing16th_page/>
  
  
  </>
  )
}

export default ForBetterSourcing