import React from 'react'
import { motion } from "framer-motion"
import Heading from '../components/Heading';
import SoftCover from '../components/dos/SoftCover';

const Strategy2nd_page = () => {
  const softData = {
    bgColor: "#36bfec",
    image: "/dos/how-we-win.webp",
    heading1: "How \n we will \n win",
    text: "Our strategic pillars have been updated to sharpen our focus and better reflect the Company's priorities. The 6 strategic pillars form the framework which guides Tata Consumer Products' growth roadmap.",
    // highlight1 : "we will",
    // highlight2 : "win",
    subheading: "",
    footerText: "",
  }
  return (
    <>
      <div>
        <SoftCover props={softData} />
      </div>
      <div className='marginal'>
        <div className={`flex justify-start py-10 `}>
          <Heading color="black" title={"6 Pillars of our strategy"} linecolor={"#1168b3"} />
        </div>
        <div className='px-3 flex flex-col justify-center gap-5 mb-5'>
          <div className='md:flex flex-row justify-center gap-6'>
            <div className='md:w-1/3 w-full my-2'>
              <img src="/138.webp" alt="" />
            </div>
            <div className='md:w-1/3 w-full my-2'>
              <img src="/139.webp" alt="" />
            </div>
            <div className='md:w-1/3 w-full my-2'>
              <img src="/140.webp" alt="" />
            </div>
          </div>
          <div className='md:flex flex-row justify-center gap-6 '>
            <div className='md:w-1/3 w-full my-2'>
              <img src="/141.webp" alt="" />
            </div>
            <div className='md:w-1/3 w-full my-2'>
              <img src="/142.webp" alt="" />
            </div>
            <div className='md:w-1/3 w-full my-2'>
              <img src="/143.webp" alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Strategy2nd_page