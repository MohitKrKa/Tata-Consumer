import React from 'react'
import { motion } from "framer-motion";
import Card from "./Card";
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
  hidden: { opacity: 0, y: 100 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 300, damping: 25, duration:1 },
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
const Strategy35th_page = () => {
  return (
    <>
  <div className='w-[90%] mx-[5%] px-3 mb-5'>
<div className='text-xl font-semibold text-[#06aeef] mb-3'>UNLOCKING POTENTIAL IN ORGANIC FOODS</div>
<div className='mb-2'>India’s organic food market is growing due to rising consumer
preference for natural and chemical-free products, creating a
significant growth opportunity for Organic India.</div>
<div className='text-[#02adbd] mb-3'>
How is Organic India capitalising on opportunities?
</div>
<div className='flex flex-row gap-5 justify-center mb-5'>
<div className='w-[50%]'>
With a diverse portfolio including
ghee, chyavanprash, jaggery,
quinoa, apple cider vinegar,
staples and spices, Organic India
is well-positioned to meet the
increasing demand for high-quality
organic foods. With expanded
retail presence, enhanced brand
visibility and consumer awareness
campaigns, the business is
poised to capitalise on the growth
opportunities.
</div>
<div className='w-[50%] '>
  <img src="/221.webp" alt="" />
</div>
</div>
<div className='mb-5'>
  <div className='text-xl font-semibold text-[#06aeef] mb-3'>
  RESEARCH-DRIVEN WELLNESS PORTFOLIO EXPANSION
  </div>
  <div className='flex flex-row justify-center gap-5'>
  <div className='w-[50%]'>
    <ul className='list-disc ml-6'>
<li className='mb-2'>To sustain long-term growth, a structured innovation
funnel was established, focused on strengthening the
current core and expanding the portfolio of organic
solutions. This is aimed at unlocking key growth
opportunities using both product and format led
innovations. In line with the new innovation agenda,
Khandsari Sugar and Gokshura were launched in
India while the US market saw the launch of two
new formats, Gummies and Lattes, as experiential
alternatives to capsules.

  <ul className='list-disc ml-6 mt-1'>
    <li className='mb-1'>Khandsari Sugar is an unrefined sugar made
from certified organic sugarcane, offering a
natural alternative to processed sweeteners.</li>
<li className='mb-1'>Gokshura Capsules are formulated from certified
organic 100% whole herbs, catering to men’s
wellness through natural supplementation.</li>
  </ul>
  </li>
    </ul>
  </div>
  <div className='w-[50%]'>
  <ul className='list-disc ml-6'>
    <li className='mb-2'>Multiple R&D initiatives are underway to advance
    expertise in organic and herbal product categories.</li>
<li className='mb-2'>An MoU was signed with the University of TransDisciplinary Health Sciences and Technology (TDU)
in Bengaluru, focused on research in traditional
health sciences and technology</li>
  </ul>
  <div>
    <img src="/222.webp" alt="" />
  </div>
  </div>
</div>
</div>

  <div className='text-xl font-semibold text-[#06aeef] mb-3'>
  STRENGTHENING BRAND EQUITY AND CONSUMER CONNECT
  </div>
  <div>
  <div className='flex flex-row justify-center gap-5'>
  <div className='w-[50%]'>
    <div className='mb-2'>Organic India has invested in brand equity-building
    campaigns across digital and on-ground platforms.</div>
 
    <ul className='list-disc ml-6'>
      <li className='mb-2'>Seasonal campaigns were executed to address
category-specific consumer needs, such as winter
immunity-focused initiatives.</li>
      <li className='mb-2'>Continuous instore and direct to consumer sampling
      in key markets undertaken to drive trials.</li>
      <li className='mb-2'>Collaborations with health and wellness influencers
helped enhance product awareness and
engagement.</li>
      <li className='mb-2'>Targeted digital activations on social media
educated and attracted consumers towards relevant
product categories.</li>
    </ul>
    <div className='bg-[#f9f7f4] p-3 border rounded-4xl'>
  A brand film for Kisan Diwas, a day celebrated
to honour the contributions of farmers to India’s
economy and society, was launched on digital
media and amplified through press coverage in
leading publications.
  </div>
  </div>
  

<div className='w-[50%]'>
  <img src="/223.webp" alt="" />
</div>
</div>
</div>
  </div>
    </>

  )
}

export default Strategy35th_page