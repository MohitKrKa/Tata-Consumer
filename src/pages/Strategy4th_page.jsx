import React from 'react';
import { motion } from 'framer-motion';
const items = [
  {
    icon: "/130.webp",
    text: "Grow the India tea business by driving execution excellence and focusing on previously underserved markets."
  },
  {
    icon: "/131.webp",
    text: "Grow market share and drive premiumisation in Salt."
  },
  {
    icon: "/132.webp",
    text: "Build Sampann as India’s preferred Pantry brand."
  },
  {
    icon: "/133.webp",
    text: "Build a pan-India multi-category Ready-to-drink (RTD) business."
  },
  {
    icon: "/134.webp",
    text: "Grow market share profitably in International business."
  }
];
const Strategy4th_page = () => {
  return (
    <div className="bg-[#f9f7f4] px-4 md:px-16 py-8">
      <div className="grid grid-cols-1 md:grid-cols-5 divide-y md:divide-y-0 md:divide-x divide-gray-300">
        {items.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center px-4 py-6 md:py-0"
          >
            <div className='w-12 h-16 flex items-center  mb-4'>
            <img src={item.icon} alt={`icon-${index}`} />
            </div>
            <p className="text-sm text-gray-800">{item.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Strategy4th_page;
// import React from 'react';
// import { motion } from 'framer-motion';
// const items = [
//     {
//       icon: "/270.webp",
//       text: "Grow the India tea business by driving execution excellence and focusing on previously underserved markets."
//     },
//     {
//       icon: "/270.webp",
//       text: "Grow market share and drive premiumisation in Salt."
//     },
//     {
//       icon: "/271.webp",
//       text: "Build Sampann as India’s preferred Pantry brand."
//     },
//     {
//       icon: "/272.webp",
//       text: "Build a pan-India multi-category Ready-to-drink (RTD) business."
//     },
//     {
//       icon: "/273.webp",
//       text: "Grow market share profitably in International business."
//     }
//   ];
// const Strategy4th_page = () => {
//   return (
//     <div className="bg-[#f9f7f4] px-4 md:px-16 py-8">
//       <div className="grid grid-cols-1 md:grid-cols-5 divide-y md:divide-y-0 md:divide-x divide-gray-300">
//         {items.map((item, index) => (
//           <motion.div
//             key={index}
//             className="flex flex-col items-center text-center px-4 py-6 md:py-0"
//             variants={textVariants}
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true }}
//           >
//             <div
//               className={`w-12 h-16 flex items-center justify-center border mb-4 ${
//                 item.iconClassName || ''
//               }`}
//             >
//               <img src={item.icon} alt={`icon-${index}`} className={item.imgClassName || ''} />
//             </div>
//             <p className="text-sm text-gray-800 leading-snug">{item.text}</p>
//           </motion.div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Strategy4th_page;
