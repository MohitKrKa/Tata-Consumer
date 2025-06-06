import React from 'react';
import { motion } from 'framer-motion';

const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: 'spring', stiffness: 100, damping: 20 },
  },
};

const imageVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.8, ease: 'easeOut' },
  },
};

const Strategy7th_page = () => {
  const slides = [
    {
      title: 'HYPER-LOCALISATION',
      image: '/146.webp',
    },
    {
      title: 'CELEBRATING INDIA AND ITS DIVERSE CULTURE',
      image: '/147.webp',
    },
    {
      title:"LEADING WITH AI",
      image:'/148.webp'
    },{
      title:"SPREADING AWARENESS, SPARKING SOCIAL CHANGE",
      image:'/149.webp'
    }
  ];

  return (
    <div className="marginal ">
      {slides.map((slide, idx) => (
        <motion.section
          key={idx}
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="flex flex-col mb-5 "
        >
          <motion.h2
            variants={sectionVariants}
            className="text-xl  font-semibold text-[#06aeef] mb-3 "
          >
            {slide.title}
          </motion.h2>
          <div className=''>
          <img
            variants={imageVariants}
            src={slide.image}
            alt={slide.title}
            className=" "
          />
          </div>
        </motion.section>
      ))}
    </div>
  );
};

export default Strategy7th_page;
