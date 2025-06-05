import React from 'react'
import Page from '../Page'
import { motion } from 'framer-motion'
import Planet3rd_page from '../../pages/Planet3rd_page'
import Planet4th_page from '../../pages/Planet4th_page'
import Planet5th_page from '../../pages/Planet5th_page'
import Planet6th_page from '../../pages/Planet6th_page'
import Planet7th_page from '../../pages/Planet7th_page'
import Planet8th_page from '../../pages/Planet8th_page'
import Planet9th_page from '../../pages/Planet9th_page'
import Planet10th_page from '../../pages/Planet10th_page'
import Planet11th_page from '../../pages/Planet11th_page'
import Planet12th_page from '../../pages/Planet12th_page'
import Planet13th_page from '../../pages/Planet13th_page'
import Planet14th_page from '../../pages/Planet14th_page'
import Planet15th_page from '../../pages/Planet15th_page'
import Planet16th_page from '../../pages/Planet16th_page'
import Planet17th_page from '../../pages/Planet17th_page'
import Planet18th_page from '../../pages/Planet18th_page'
import Planet19th_page from '../../pages/Planet19th_page'
import Planet20th_page from '../../pages/Planet20th_page'
import Planet21th_page from '../../pages/Planet21th_page'
import Planet22th_page from '../../pages/Planet22th_page'
const para =
 "The ‘For Better Planet’ pillar embodies our dedication to responsible operations, striving to minimise our environmental footprint while ambitiously working towards a positive ecological impact.";

const img1 = "/Planet1.webp";
    const img2 = "/Planet2.webp";
    const img3 = "/Planet3.webp";
const FBC4 = "/Planet4.webp";
const FBC5 = "/Planet5.webp";
const FBC6 = "/Planet6.webp";

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
const ForBetterPlanet = () => {
  return (
    <>
    <div className="mx-10">
     {/* <Planet1st_page/>
     <Planet2nd_page/> */}
     
    <div>
        <div className='flex flex-col gap-10'>
    <Page
    text="Planet"
    head1="Environmental Stewardship"
    text2={para}
    img1={img1}
    img2={img2}
    img3={img3}
  />
</div>
  {/* Page 1 */}

  <div
    className="mt-5 flex flex-col sm:flex-row gap-5">
    {/* Images Section */}
<div className='w-[50%]'>
      <div>
      <img
        src={FBC4}
        alt=""
        className=""
        
      />
      </div>
      <div>
      <img src={FBC6} alt="" className="" />
      </div>
      </div>
      
      <div
        className="flex flex-col gap-5 w-[50%]"
      >
        <div>
          <h1 className=" text-[#176ab4] text-2xl sm:text-3xl font-[500]">
            VISION
          </h1>
          <p className="bg-gradient-to-r from-[#0db14e] to-[#10b0ef] bg-clip-text text-transparent font-[400] mt-5 text-xl sm:text-3xl">
          Sustainable value
chains from farm
to shelf.
          </p>
        </div>
<div>
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
     <Planet3rd_page/>
     <Planet4th_page/>
     <Planet5th_page/>
     <Planet6th_page/>
     <Planet7th_page/>
     <Planet8th_page/>
     <Planet9th_page/>
     <Planet10th_page/>
     <Planet11th_page/>
     <Planet12th_page/>
     <Planet13th_page/>
     <Planet14th_page/>
     <Planet15th_page/>
     <Planet16th_page/>
     <Planet17th_page/>
     <Planet18th_page/>
     <Planet19th_page/>
     <Planet20th_page/>
     <Planet21th_page/>
     <Planet22th_page/>
     </>
  )
}

export default ForBetterPlanet