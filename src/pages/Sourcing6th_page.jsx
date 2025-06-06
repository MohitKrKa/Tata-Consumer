import React from 'react'
import {motion } from "framer-motion"
import { div } from 'framer-motion/client';
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
const Sourcing6th_page = () => {
  return (
    <>
   <div className='marginal text-lg'>
    <div className='flex flex-row justify-center gap-5'>
<div className='mb-2 w-[40%]'>
Supplier desk assessments are
conducted with a systematic approach
to verifying evidence, ensuring
compliance and upholding due
diligence. On-site evaluations, referred
to as second-party assessments, are
carried out by either our internal teams
or external consultants to gain firsthand
insight into supplier operations. We
also facilitate Good Manufacturing
Practice (GMP) audits to ensure our
vendors adhere to quality standards
and regulatory requirements, providing
support through procedural guidance,
compliance training and corrective
action planning. Both desk and on-site
supplier assessments follow standards
and methodologies from established
industry or multi-stakeholder initiatives,
including ISO and BRC, too ensure
consistency and  uphold high-quality
benchmarks.
</div>
<div className='w-[60%] bg-gray-100 p-5 '>
  <img className='w-[80%]' src="/54.webp" alt="" />
</div>
</div>
   </div>
   </>
  )
}

export default Sourcing6th_page