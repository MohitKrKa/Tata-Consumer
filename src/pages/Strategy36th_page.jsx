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
const Strategy36th_page = () => {
  return (
    <>
   <div className='w-[90%] mx-[5%] px-3 mb-5'>
<div className='text-xl font-semibold text-[#06aeef] mb-2'>EXPANDING WELLNESS OFFERINGS INTERNATIONALLY</div>
<div className='mb-2'>
Organic India has strengthened its presence with e-commerce activations in the USA and through expansion into
direct-to-consumer (D2C) channels. The portfolio of regenerative organic-certified SKUs—products produced
according to rigorous standards that prioritise soil health, animal welfare, and social fairness—continues to grow,
supporting sustainable sourcing.
</div>
<div className='mb-3'>
  <img src="/226.webp" alt="" />
</div>
<div className='text-2xl font-semibold text-[#1368b4] mb-2'>
INCUBATING CHANNELS OF THE FUTURE
</div>
<div className='mb-2'>
As consumer preferences evolve and new retail landscapes emerge, we are building future-ready channels to drive longterm growth. We are incubating two key channels—Pharma and Food Service—leveraging our diverse portfolio and tailored
distribution strategies.
</div>
<div className='flex flex-row justify-center gap-5'>
  <div className='w-[50%]'>
    <div className='text-xl font-semibold text-[#06aeef] mb-3'>PHARMACY CHANNEL</div>
    <div className='mb-2'>The pharmaceutical retail sector presents a significant
growth opportunity for Tata Consumer Products’
wellness-oriented product portfolio. Organic India is
expanding into pharmacies with a strong focus on
nutraceuticals and herbal infusions to meet the growing
demand from health-conscious consumers. This provides
a gateway for other brands from Tata Consumer
Products’ portfolio to also leverage the pharma channel,
where relevant. </div>
<ul className='list-disc ml-6'>
<li className='mb-2'>After a successful pilot across ten cities, a structured
rollout is underway across 40 markets.</li>
<li className='mb-2'>Presence established in key pharmacy chains, such
as Medplus, Wellness Forever, and Noble Plus.</li>
</ul>
  </div>
  <div className='w-[50%]'>
  <div className='text-xl font-semibold text-[#06aeef] mb-3'>FOOD SERVICE CHANNEL</div>
    <div className='mb-2'>The Food Service channel, catering to HoReCa (Hotels,
Restaurants, and Cafés), corporate canteens and B2B
partners, is a key focus area for expansion of the Capital
Foods portfolio. </div>
<ul className='list-disc ml-6'>
<li className='mb-2'>Initial pilot successfully executed in Mumbai and
Ahmedabad.</li>
<li className='mb-2'>Encouraging results leading to a phased expansion
across 16 cities.</li>
<li className='mb-2'>Customised HoReCa product formats, such as bulk
packs of mayonnaise, ketchup and ginger garlic paste
developed to cater to industry-specific needs.</li>
<li className='mb-2'>Engagement is underway with key institutional
buyers to scale partnerships and drive sustained
growth.</li>
</ul>
  </div>
</div>
<div className=''>
  <img src="/235.webp" alt="" />
</div>
   </div>
    </>
  )
}

export default Strategy36th_page