import React from "react";
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
const Strategy13th_page = () => {
  return (
   <div className="w-[90%] h-auto mx-[5%] px-3 mb-5">
<div className="text-2xl font-semibold text-[#1368b4] mb-3">
ELEVATING EVERYDAY
NUTRITION WITH
TATA SAMPANN
</div>
<div className="mb-2">
India’s packaged foods market
remains underpenetrated and
fragmented, offering significant growth
opportunities. With a significant total
addressable market, the Branded
Staples category is poised to witness
long term structural growth driven
by evolving consumer lifestyles and
increasing urbanisation. The expansion
of modern retail, digital penetration,
and greater disposable incomes
are further accelerating adoption.
Tata Sampann is building itself as
a preferred brand in this evolving
landscape by focusing on quality,
authenticity, and convenience.
The brand is making strategic
investments in product availability,
category expansion and consumer
engagement to strengthen its presence.
Alongside premium
offerings in pantry staples, Tata
Sampann has strengthened its dry
fruits and nuts portfolio to meet the
demand for high quality snacking
options. Tata Simply Better Cold
Pressed oils has expanded its portfolio
with new launches to cater to the
demand for healthier cooking oils.Tata Consumer Products’ India Foods
business has sustained double-digit
growth for the 5th consecutive year,
with Tata Sampann being a critical
contributor.
</div>
<div className="flex flex-col mt-2 w-[200px]">
              <h1 className="text-3xl text-[#4084c1] leading-none">29%</h1>

              <div class="flex items-center my-1">
                <div class="w-4 h-2 bg-blue-500 rounded-full"></div>
                <div class="h-0.5 w-full bg-blue-500"></div>
              </div>
              <div className=" text-sm leading-tight">
              Tata Sampann
              revenue growth
              </div>
            </div>
   </div>
  );
};

export default Strategy13th_page;
