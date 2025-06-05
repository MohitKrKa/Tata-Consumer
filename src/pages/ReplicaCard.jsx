import React from 'react'
import {motion} from "framer-motion"
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
const ReplicaCard = ({obj}) => {
  return (
    <motion.div className='my-[5%] w-full justify-between flex md:flex-row flex-col  gap-10' initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }} // 60% in view triggers
          variants={containerVariants} >
            <motion.img className='md:min-w-96 h-80 flex max-w-[80vh]' variants={imageCommonVariants} src={obj.img} alt="" />
        <motion.div className='' variants={itemVariants}>
            <h2 className='text-xl text-[#50c4cf] mb-3'>{obj.name}</h2>
            <p>{obj.text}</p>
        </motion.div>




    </motion.div>
  )
}

export default ReplicaCard