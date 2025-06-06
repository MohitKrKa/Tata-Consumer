import React from 'react'
import {motion} from "framer-motion"
import Card from './Card'
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
const Planet3rd_page = () => {
  return (
       <motion.div className='marginal text-lg variants={parentVariants} initial="hidden" whileInView="visible" viewport={{once:true,amount:0.2}}'>
<div className='mb-5'>
    <img src="/74.webp" alt="" />
</div>
<div className='flex flex-row justify-center gap-5'>
  <div className='w-[50%]'>
<div className='text-2xl font-semibold text-[#1368b4] mb-2'>FOR BETTER PLANET</div>
<div className='mb-2 '>
A meticulously designed framework, guided
by comprehensive policies, is crucial for
steering impactful and sustainable actions
across various domains, including climate
change, environment, energy, biodiversity,
waste and water management. Our
Environment Policy serves as a compass
in these eco-conscious efforts covering all
our strategic priority areas. This includes
striving for Net Zero by improving energy
efficiency and adopting renewable energy
sources, implementing sustainable packaging
solutions, managing waste effectively,
exercising product stewardship, promoting
sustainable sourcing, fostering good
environmental practices across our value
chain. We pledge to relentlessly pursue
more sustainable practices that honour and
preserve our planet’s precious resources.
</div>
  </div>
  <div className='w-[50%]'>
    <img src="/75.webp" alt="" />
  </div>
</div>
       </motion.div>
  )
}

export default Planet3rd_page