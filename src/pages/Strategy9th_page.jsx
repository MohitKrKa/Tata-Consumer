// import React from 'react'
// import {motion} from "framer-motion"
// const containerVariants = {
//     hidden: { opacity: 0 },
//   visible: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.3,
//         delayChildren: 0.2,
//       },
//     },
//   };
  
//   const imageCommonVariants = {
//     hidden: { opacity: 0, scale: 0.8 },
//     visible: {
//       opacity: 1,
//       scale: 1,
//       transition: { duration: 0.6, ease: "easeOut" },
//     },
//   };
  
//   const itemVariants = {
//     hidden: { opacity: 0, y: 30 },
//     visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
//   };
  
//   const imageVariants = {
//     hidden: { opacity: 0, y: 50 },
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: { type: "spring", stiffness: 300, damping: 25 },
//     },
//   };
  
//   const textVariants = {
//     hidden: { opacity: 0, y: 50 },
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: { type: "spring", stiffness: 300, damping: 25, delay: 0.4},
//     },
//   };
  
//   const parentVariants = {
//     hidden: {},
//     visible: {
//       transition: {
//         staggerChildren: 0.3, // auto one-by-one
//       },
//     },
//   };
// const Strategy9th_page = () => {
//   return (
//     <motion.div className='w-[90%] h-auto m-[5%] bg-[#f4f1ec] md:p-5 p-2' variants={parentVariants} initial="hidden"
//     whileInView="visible"
//     viewport={{ once: true, amount: 0.2 }} >
// <motion.div className='text-xl text-[#51c3ed] mb-5' variants={textVariants}>
// EXPANDING THE
// COFFEE FOOTPRINT
// </motion.div>
// <div className='flex md:flex-row flex-col justify-center items-center gap-5 '>
// <motion.div className='md:w-[50%] h-auto' variants={imageCommonVariants}>
// <img src="/150.webp" alt="" />
// </motion.div>
// <motion.div className='md:w-[50%] h-auto' variants={parentVariants}>
// <motion.div className='text-[#58595b] mb-5' variants={itemVariants}>Tata Coffee rapidly expanded its
// footprint across geographies, fueled by
// newer formats and flavours, crossing
// the INR 100 Crores in Gross Revenue
// milestone in FY 25.
// Tata Coffee has progressively
// diversified its product portfolio to cater
// to multiple consumption occasions
// and regional preferences. While its
// mass instant coffee offering - Tata
// Coffee Grand continued to strengthen
// its standing across channels, it
// accelerated the premium freeze-dried
// offering - Tata Coffee Gold, launching
// exciting new flavours of Hazelnut
// and Vanilla to tap into the growing
// premium coffee segment.
// Innovative and convenient format
// launches, like Filter Coffee Decoction,

// offering unique blends in three region-
// specific flavours, helped cater to the

// evolving consumer preferences.</motion.div>
// <div>
//     <motion.img className="w-[90%]" src="/151.webp" alt="" variants={imageCommonVariants}/>
// </div>
// </motion.div>
// </div>
// <motion.div className='flex md:flex-row flex-col justify-center items-center mt-10' variants={parentVariants}>
// <div className='md:w-[50%] h-auto'>
// <motion.img variants={imageCommonVariants} className="md:w-[80%]" src="/152.webp" alt="" />
// </div>
// <motion.div variants={itemVariants} className='md:w-[50%] h-auto text-xl text-[#7c7d7e]'>
// Tata Coffee launched a new mega
// Coffee Anthem in Tamil Nadu,
// celebrating the state's culture and
// enduring love affair with its morning
// cup of coffee, composed by famous
// Indian film composer and musician  
// <motion.span className='bg-gradient-to-r from-violet-500 to-green-500 bg-clip-text text-transparent' variants={itemVariants}>Santhosh Narayanan.</motion.span>
// </motion.div>
// </motion.div>
//     </motion.div>
//   )
// }

// export default Strategy9th_page
import React from 'react'

const Strategy9th_page = () => {
  return (
    <div className='w-[90%] mx-[5%] px-3 mb-5'>
<div>
  <div className='text-[#1368b4] text-2xl font-semibold mb-2'>
  EXPANDING THE
COFFEE FOOTPRINT
  </div>
  <div className=''>
  Tata Coffee rapidly expanded its
footprint across geographies, fueled by
newer formats and flavours, crossing
the INR 100 Crores in Gross Revenue
milestone in FY 2024-25.
Tata Coffee has progressively
diversified its product portfolio to cater
to multiple consumption occasions
and regional preferences. While its
mass instant coffee offering - Tata
Coffee Grand continued to strengthen
its standing across channels, it
accelerated the premium freeze-dried
offering - Tata Coffee Gold, launching
exciting new flavours of Hazelnut
and Vanilla to tap into the growing
premium coffee segment.
Innovative and convenient format
launches, like Filter Coffee Decoction,
offering unique blends in three regionspecific flavours, helped cater to the
evolving consumer preferences.
  </div>
  <div className=' mb-4'>
    <img className='' src="/151.webp" alt="" />
  </div>
  <div className='flex flex-row justify-center'>
    <div>
      <div className='text-xl font-semibold text-[#06aeef] mb-2'>BREWING IT RIGHT</div>
      <div className='mb-5'><span className='font-bold'> Tata Coffee Grand </span>
partnered with Times of
India to roll out aromainfused newspapers
on International Coffee
Day. Consumers woke
up to their morning
paper smelling of
delicious coffee - a true
sensory delight.</div>
<div className='mb-2'>
  <img src="/152.webp" alt="" />
</div>
<div className='mb-4'>
Tata Coffee launched a new mega
Coffee Anthem in Tamil Nadu,
celebrating the state’s culture and
enduring love affair with its morning
cup of coffee, composed by famous
Indian film composer and musician
<span className='font-bold'> Santhosh Narayanan. </span>
</div>
    </div>
    <div>
      <img src="/coffee.jpg" alt="" />
    </div>
    <div>

    </div>
  </div>
</div>

    </div>
  )
}

export default Strategy9th_page