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
//       transition: { type: "spring", stiffness: 300, damping: 25, delay: 0.4 },
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
// const Strategy8th_page = () => {
//   return (
//     <div>
// <motion.div className='w-[90%] h-auto m-[5%] flex md:flex-row flex-col justify-center  gap-5' variants={parentVariants} initial="hidden"
//     whileInView="visible"
//     viewport={{ once: true, amount: 0.2 }}>
// <motion.div className='md:w-[50%] h-auto' variants={parentVariants}>
// <div className='flex flex-col  justify-center items-center gap-5'>
//     <motion.div className='text-xl text-[#51c3ed]' variants={textVariants}>LEADING WITH AI</motion.div>
//     <motion.img variants={imageCommonVariants} src="/148.webp" alt="" />
// </div>
// </motion.div>
// <motion.div className='md:w-[50%] h-auto'>
// <motion.div className='flex flex-col justify-center items-center gap-5' variants={parentVariants}>
//     <motion.div className='text-xl text-[#51c3ed]' variants={textVariants}>SPREADING AWARENESS, SPARKING SOCIAL CHANGE</motion.div>
//     <motion.img src="/149.webp" alt="" variants={imageCommonVariants} />
// </motion.div>
// </motion.div>
// </motion.div>
//     </div>
//   )
// }

// export default Strategy8th_page
import React from 'react';
import { motion } from 'framer-motion';

const sectionVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: 'spring', stiffness: 120, damping: 22 },
  },
};

const imageVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
};

const Strategy8th_page = () => {
  const slides = [
    {
      title: 'LEADING WITH AI',
      image: '/148.webp',
    },
    {
      title: 'SPREADING AWARENESS, SPARKING SOCIAL CHANGE',
      image: '/149.webp',
    },
  ];

  return (
    <></>
  );
};

export default Strategy8th_page;
