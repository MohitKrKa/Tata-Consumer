import React from 'react'
import Card from './Card';
import { motion } from "framer-motion";
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
const Strategy39th_page = () => {
    const center=[{
        name:"Metro Station Store",
        text:"Metro Station Store in Mumbai,offering quick service for commuters.",
        img:"/239.webp"
    },
{
    name:"Pet-Friendly Store",
    text:"Pet-Friendly Store in Jaipur,providing a welcoming space for pet owners.",
    img:"/240.webp"  
},
{
    name:"Greener Store",
    text:"Greener Store in Ludhiana,incorporating sustainable elements like EV charging and rainwater harvesting.",
    img:"/241.webp" 
},{
    name:"Coffee Experiential Stores",
    text:"Coffee Experiential Stores in New Delhi and Mumbai, showcasing regional flavours and specialty brews.",
    img:"/242.webp"
}
]
    const product=[{
name:"Cold Brew and Refreshers",
text:"Introduced as summer offerings, featuring new flavours such as Kiwi Calamansi and Lychee Raspberry Refreshers®, with green coffee extract and natural citrus notes that offer a refreshing and energising experience with flavours familiar to Indian consumers.",
img:"/243.webp",
    },
{
    name:"Diwali Festive Treats",
    text:"Developed in collaboration with Bombay Sweet Shop, offering reimagined Indian sweets with a contemporary Starbucks twist, paired with saffron and pistachio-infused beverages.",
    img:"/244.webp"

},
{
    name:"Classics Menu",
    text:"Launched as part of Starbucks’ 12-year milestone in India, blending signature brews with regional coffee influences and complementing the offerings, with a delectable and mouthwatering food menu. This includes classic sandwiches, inspired by Indian flavours such as spiced paneer and masala chicken.",
    img:"/245.webp",
}];
const feed=[{
    name:"Brewed to a 100",
text:"Celebrating the brand’s 100th store in Mumbai, this initiative paid tribute to the city’s vibrant culture and street food legacy through a partnership with Imagine Foods and designer Anamika Khanna, offering exclusive food collaborations and merchandise.",
img:"/246.webp"
},
{
    name:"Diwali 360",
    text:"The #MeriSpecialJagah initiative positioned Starbucks as a festive hub, blending Indian traditions with a premium café experience through exclusive hampers, beverages, and decor.",
    img:"/247.webp"
},
{
    name:"Classics Menu",
    text:"The campaign brought a playful approach to coffee experiences with the tagline “Classic Fix for Your Pakao Situation”, engaging consumers with relatable everyday moments.",
    img:"/248.webp"
}]
  return (
    <div className='w-[90%] mx-[5%] px-3 mb-5'>
<div className='text-xl font-semibold text-[#06aeef] mb-3'>
REACHING NEW MARKETS WITH INNOVATIVE FORMATS
</div>
<div className='flex flex-row justify-center gap-5 mb-5'>
  <div className='w-1/3'>
    <div className='md:mb-7 mb-2'>
    <span className='font-bold'> Metro Station </span> Store in Mumbai,
offering quick service for commuters
    </div>
    <div className=''>
      <img src="/239.webp" alt="" />
    </div>
  </div>
  <div className='w-1/3'>
  <div className='mb-2 md:mb-7'>
    <span className='font-bold'> Pet-Friendly Store </span>in Jaipur,
providing a welcoming space
for pet owners.
    </div>
    <div className=''>
      <img src="/240.webp" alt="" />
    </div>
  </div>
  <div className='w-1/3'>
  <div className='mb-2'>
    <span className='font-bold'> Greener Store </span> in Ludhiana,
incorporating sustainable elements like
EV charging and rainwater harvesting.
    </div>
    <div className=''>
      <img src="/241.webp" alt="" />
    </div>
  </div>
</div>
<div className='flex flex-row justify-center gap-5'>
<div className='w-[35%]'>
<div className='mb-2'><span className='font-bold'> Coffee Experiential Stores </span> in New
Delhi and Mumbai, showcasing
regional flavours and specialty brews.</div>
<div>
  <img src="/242.webp" alt="" />
</div>
</div>
<div className='w-[65%] flex flex-col items-center justify-center'> 
  <img src="/237_starbucks2.webp" alt="" />
</div>
</div>
    </div>
  )
}

export default Strategy39th_page