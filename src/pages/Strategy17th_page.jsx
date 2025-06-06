import React from 'react'
import { motion } from "framer-motion";

const textVariants = {
  hidden: { opacity: 0, y: 100 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 300, damping: 25, duration: 1 },
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
const Strategy17th_page = () => {
  return (
    <motion.div className='marginal font-bold text-lg mb-5' variants={parentVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}>
      <motion.div className='flex md:flex-row flex-col justify-center md:gap-10 gap-5' variants={parentVariants}>
        <motion.div className='md:w-1/3 flex flex-col  items-center md:border-r md:p-5 gap-5' variants={textVariants}>
          <p className='md:h-40'><span className='text-[#64cb89]'>Premium dry fruits</span> cater to
            the demand for high-quality,
            nutritious snacking.</p>
          <img className="md:w-50 max-w-[60vw]" src="/173.webp" alt="" />
        </motion.div>
        <motion.div className='md:w-1/3 flex flex-col items-center md:border-r p-5' variants={textVariants}>
          <p className='md:h-40'>Tata Simply Better’s expanded

            cooking oil range features <span className='text-[#64cb89]'>cold-
              pressed sunflower oil and extra

              virgin olive oil variants</span>, offering
            pure, unrefined choices for
            everyday cooking.</p>
          <img className="md:w-30 max-w-[60vw]" src="/174.webp" alt="" />
        </motion.div>
        <motion.div className='md:w-1/3 flex flex-col items-center p-5 ' variants={textVariants}>
          <p className='md:h-40'>Newly introduced <span className='text-[#64cb89]'>whole cumin,
            coriander, and fennel seeds</span> offer
            high-quality, unadulterated spices
            for Indian kitchens.</p>
          <img className='md:w-50 ' src="/175.webp" alt="" />
        </motion.div>
      </motion.div>
    </motion.div>
  )
}

export default Strategy17th_page