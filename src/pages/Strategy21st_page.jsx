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
const Strategy21st_page = () => {
  return (
    <div className="w-[90%] mx-[5%] px-3 mb-5">
<div className="text-xl font-semibold text-[#06aeef] mb-3">
ACHIEVING CONSISTENT GROWTH
ACROSS KEY CATEGORIES
</div>
<div className="flex flex-row  gap-5">
<div className="md:w-1/3 h-auto  gap-2">
<div className="w-[80%]">
        <img  className="" src="/187.webp" alt="" />
        </div>
        <div className="flex flex-col gap-1">
          <h1 className="text-3xl text-[#4084c1]">2X</h1>

           <div class="flex items-center">
            <div class="w-4 h-2 bg-blue-500 rounded-full"></div>
            <div class="h-0.5 w-[80%] bg-blue-500"></div>
        </div>
        <div className=" text-sm leading-tight">market share in two years.*</div>
     </div>
       </div>
       <div className="md:w-1/3 h-auto  gap-2">
       <div className="w-[75%]">
        <img  className="" src="/188.webp" alt="" />
        </div>
        <div className="flex flex-col gap-1">
          <h1 className="text-3xl text-[#4084c1]">2X</h1>

           <div class="flex items-center">
            <div class="w-4 h-2 bg-blue-500 rounded-full"></div>
            <div class="h-0.5 w-[80%] bg-blue-500"></div>
        </div>
        <div className=" text-sm leading-tight">market share in general
        trade since launch.*</div>
     </div>
     <div className="flex flex-col gap-1">
          <h1 className="text-3xl text-[#4084c1]">Achieved
          No. 2</h1>

           <div class="flex items-center">
            <div class="w-4 h-2 bg-blue-500 rounded-full"></div>
            <div class="h-0.5 w-[80%] bg-blue-500"></div>
        </div>
        <div className=" text-sm leading-tight">position in flavoured oats
        within a year of launch.</div>
     </div>
       </div>
       <div className="md:w-1/3 h-auto  gap-2">
        <div className="w-[80%]">
        <img  className="" src="/189.webp" alt="" />
        </div>
        <div className="flex flex-col gap-1">
          <h1 className="text-3xl text-[#4084c1]">1.5X</h1>

           <div class="flex items-center">
            <div class="w-4 h-2 bg-blue-500 rounded-full"></div>
            <div class="h-0.5 w-[80%] bg-blue-500"></div>
        </div>
        <div className=" text-sm leading-tight">market share in
modern trade
over two years.*</div>
     </div>
       </div>
    </div>
    </div>
//     <motion.div className="w-[90%] h-auto m-[5%] md:flex justify-center items-center gap-5" variants={containerVariants}
//     initial="hidden"
//     whileInView="visible"
//     viewport={{ once: true, amount: 0.2 }}>
//       <motion.div className="md:w-1/3  h-auto flex flex-row justify-start items-center gap-2" variants={textVariants}>
//         <motion.img variants={imageCommonVariants} className="md:w-1/2 w-[140px]" src="/187.webp" alt="" />
//         <div className="flex flex-col gap-1">
//           <h1 className="text-3xl text-[#4084c1]">2X</h1>

//           <div class="flex items-center">
//             <div class="w-4 h-2 bg-blue-500 rounded-full"></div>
//             <div class="h-0.5 w-full bg-blue-500"></div>
//           </div>
//           <div className=" text-sm leading-tight">market share in two years.*</div>
//         </div>
//       </motion.div>
//       <motion.div className="md:w-1/3 h-auto flex flex-row justify-center items-center gap-4" variants={textVariants}>
//         <motion.img variants={imageCommonVariants} className="md:w-[140px] w-[120px] px-1 md:px-0 ml-2 md:ml-0" src="/188.webp" alt="" />
//         <div className="flex flex-col gap-1">
//           <div className="flex flex-col gap-1">
//             <h1 className="text-3xl text-[#4084c1]">2X</h1>

//             {/* <div class="flex items-center space-x-2">
//   <div class="w-3 h-5 bg-blue-500 rounded-full"></div>
//   <div class="h-0.5 w-32 bg-blue-500"></div>
// </div> */}
//             <div class="flex items-center">
//               <div class="w-4 h-2 bg-blue-500 rounded-full"></div>
//               <div class="h-0.5 w-full bg-blue-500"></div>
//             </div>
//             <div className="w- text-sm leading-tight ">market share in general trade.*</div>
//           </div>
//           <div className="flex flex-col mt-2">
//             <h1 className="text-3xl text-[#4084c1] leading-none">Achieved No.2</h1>

//             <div class="flex items-center my-1">
//               <div class="w-4 h-2 bg-blue-500 rounded-full"></div>
//               <div class="h-0.5 w-full bg-blue-500"></div>
//             </div>
//             <div className="w- text-sm leading-tight">
//               position in flavoured oats within a year of launch.
//             </div>
//           </div>
//         </div>
//       </motion.div>
//       <motion.div className="md:w-1/3 h-auto flex flex-row justify-start items-center gap-2" variants={textVariants}>
//         <motion.img variants={imageCommonVariants} className="md:w-1/2 w-[140px]" src="/189.webp" alt="" />
//         <div className="flex flex-col gap-1">
//           <h1 className="text-4xl text-[#4084c1]">2X</h1>

//           <div class="flex items-center">
//             <div class="w-4 h-2 bg-blue-500 rounded-full"></div>
//             <div class="h-0.5 w-full bg-blue-500"></div>
//           </div>
//           <div className="w- text-sm leading-tight">market share in two years.*</div>
//         </div>
//       </motion.div>
//     </motion.div>
  );
};

export default Strategy21st_page;
