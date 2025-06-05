import React from 'react'
import {motion} from "framer-motion"
import Heading from '../components/Heading';
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
const Strategy2nd_page = (
  {
    bgColor = "#36bfec",
    image = "/win.png",
    heading1 = "How",
    highlight1 = "we will",
    heading2 = "",
    highlight2 = "win",
    subheading = "",
    footerText = "",}
) => {
  return (
    <>
    <div
      className="relative w-full h-[90vh] text-white "
      style={{ backgroundColor: bgColor }}
    >
      {/* Container for mobile and desktop layout */}
      <div className="flex flex-col md:flex-row h-full gap-">
        {/* Image Section */}
        <div className="md:w-[2/3]">
          <img src={image} alt="Hero Visual" className="h-full mx-auto" />
        </div>

        {/* Text Content */}
        <div className="w-full md:w-1/2 flex items-center justify-start md:py-0">
          <div className="leading-none [&_h1]:m-0">
            <div className="text-[2rem] md:text-[3rem] font-medium">
              <h1>{heading1}</h1>
            </div>
            <div className="leading-none [&_h1]:m-0">
              <h1 className="text-[2rem] md:text-[3rem] font-medium">{highlight1}</h1>
            </div>
        
            <div className="text-[5rem] md:text-[8rem] font-extrabold mb-3">
              <h1 className="m-0">{highlight2}</h1>
            </div>
            <div className="text-[2rem] md:text-[3rem] font-medium">
              <h1 className="m-0">{subheading}</h1>
            </div>
            <p>Our strategic pillars have
been updated to sharpen
our focus and better reflect
the Company's priorities.
The 6 strategic pillars form
the framework which guides
Tata Consumer Products'
growth roadmap</p>
          </div>
        </div>
      </div>

      {/* Diagonal Lines (always top-right) */}
      <div className="absolute top-0 right-0 z-20 hidden md:block">
        <svg width="300" height="150">
          <line
            x1="0"
            y1="0"
            x2="300"
            y2="100"
            stroke="#b6e34e"
            strokeWidth="2"
          />
          <line
            x1="0"
            y1="20"
            x2="300"
            y2="120"
            stroke="#b6e34e"
            strokeWidth="2"
          />
        </svg>
      </div>

      {/* Footer */}
    </div>
    <div className={`flex justify-center py-10 `}>
      <Heading color="black" title={"6 Pillars of our strategy"} linecolor={"#1168b3"} />
      </div>
      <div className='w-[90%] mx-[5%] px-3 flex flex-col justify-center gap-5 mb-5'>
        <div className='flex flex-row justify-center gap-5'>
          <div className='w-1/3'>
            <img src="/138.webp" alt="" />
          </div>
          <div className='w-1/3'>
            <img src="/139.webp" alt="" />
          </div>
          <div className='w-1/3'>
            <img src="/140.webp" alt="" />
          </div>
        </div>
        <div className='flex flex-row justify-center gap-5'>
          <div>
            <img src="/141.webp" alt="" />
          </div>
          <div>
            <img src="/142.webp" alt="" />
          </div>
          <div>
            <img src="/143.webp" alt="" />
          </div>
        </div>
      </div>
      </>
  )
}

export default Strategy2nd_page