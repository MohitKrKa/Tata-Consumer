import React from 'react'
import { motion } from "framer-motion";
import Card from "./Card";

const items = [
  {
    icon: "/208.webp",
    text: "Unlock the full potential of Capital Foods, Organic India "
  },
  {
    icon: "/209.webp",
    text: "Build the Food Services and Pharma channels"
  },
  {
    icon: "/210.webp",
    text: "Expand into portfolio adjacencies and enter whitespaces"
  },
  {
    icon: "/211.webp",
    text: "Consider value accretive inorganic opportunities"
  },
];
const Strategy30th_page = () => {
  return (
    <>
      <div className="bg-[#f9f7f4]">
        <div className='marginal'>
          <div className="grid grid-cols-1 md:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-gray-300">
            {items.map((item, index) => (
              <div
                key={index}
                className="flex flex-col items-center text-center px-4 py-6 md:py-0"
              >
                <div className='w-12 h-16 flex items-center  mb-4'>
                  <img src={item.icon} alt={`icon-${index}`} />
                </div>
                <p className="text-lg text-gray-800">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className='marginal text-lg flex flex-row justify-center gap-5 mt-5 mb-5'>
        <div className='md:w-[50%]'>
          <div className='text-2xl font-semibold text-[#1368b4] mb-3'>CAPITAL FOODS - KEY INITIATIVES</div>
          <div className='mb-2'>
            Capital Foods continues to build growth momentum, with targeted innovation,
            market expansion and strategic brand collaborations
          </div>
          <ul className='list-disc ml-4 mb-3'>
            <li className='mb-2  '>Expansion into white spaces to
              grow the addressable market and
              strengthen market reach.
            </li>
            <li className='mb-2'>
              Over 200 Distributor Sales
              Representatives have been trained
              in key markets to improve retail
              execution and strengthen onground presence.
            </li>
            <li className='mb-2'>Development of the Food
              Services channel will contribute
              to a stronger run rate and deeper
              engagement with commercial
              kitchens and institutional buyers.</li>
          </ul>
          <div className="flex flex-col mt-2 w-[200px]">
            <h1 className="text-3xl text-[#4084c1] leading-none">INR 799 Crores</h1>

            <div class="flex items-center my-4">
              <div class="w-4 h-2 bg-blue-500 rounded-full"></div>
              <div class="h-0.5 w-full bg-blue-500"></div>
            </div>
            <div className="text-base leading-tight">
              Capital Foods Revenue
            </div>
          </div>
        </div>
        <div className='md:w-[50%]'>
          <img src="/212.webp" className='md:w-2/3' alt="" />
        </div>
      </div>
    </>
  );
};

{/* <motion.div className='w-[90%] h-auto m-[5%] flex md:flex-row flex-col justify-center md:gap-15 gap-5' variants={parentVariants} initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.2 }}>
        <motion.div className='md:w-[50%] h-auto ' variants={parentVariants}>
<motion.div className='text-xl text-[#3480cc] mb-5' variants={itemVariants}>
CAPITAL FOODS - KEY INITIATIVES
</motion.div>
<motion.div variants={itemVariants} className='mb-5'>Capital Foods continues to build growth momentum, with targeted innovation,
market expansion and strategic brand collaborations.</motion.div>
<motion.div variants={textVariants} class="flex  space-x-2 ">
  <span class="w-[12px] h-[6px] -skew-16 mt-2 rotate-14 bg-blue-500"></span>
  <p class="text-gray-800">Expansion into white spaces to
grow the addressable market and
strengthen market reach.</p>
</motion.div>
<motion.div variants={textVariants} class="flex  space-x-2 mt-2">
  <span class="w-[12px] h-[6px] -skew-16 mt-2 rotate-14 bg-blue-500"></span>
  <p class="text-gray-800">Over 200 Distributor Sales
Representatives have been trained
in key markets to improve retail

execution and strengthen on-
ground presence.</p>
</motion.div>
<motion.div variants={textVariants} class="flex  space-x-2 mt-2">
  <span class="w-[12px] h-[6px] -skew-16 mt-2 rotate-14 bg-blue-500"></span>
  <p class="text-gray-800">Development of the Food
Services channel will contribute
to a stronger run rate and deeper
engagement with commercial
kitchens and institutional buyers.</p>
</motion.div>
<motion.div variants={parentVariants} className="flex flex-col mt-2 w-[200px]">
            <motion.h1 variants={textVariants} className="text-3xl text-[#4084c1] leading-none">86 Cr</motion.h1>

            <div class="flex items-center my-1">
              <div class="w-4 h-2 bg-blue-500 rounded-full"></div>
              <div class="h-0.5 w-full bg-blue-500"></div>
            </div>
            <motion.div variants={textVariants} className=" text-sm leading-tight">
            Capital Foods Revenue
            </motion.div>
          </motion.div>
</motion.div>
<motion.div variants={parentVariants} className='md:w-[50%] h-auto'>
<motion.img variants={imageCommonVariants} className='md:w-90 max-w-[80vw]' src="/212.webp" alt="" />
</motion.div>
    </motion.div>
    <motion.div variants={parentVariants} initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.2 }} className='w-[90%] h-auto m-[5%]'>
        <motion.img variants={imageCommonVariants} src="/224.webp" alt="" />
    </motion.div>
    </>
  )
} */}

export default Strategy30th_page