import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Heading from '../components/Heading';

const fadeVariants = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0, transition: { ease: 'easeOut', duration: 0.5 } },
  exit: { opacity: 0, y: -30, transition: { ease: 'easeIn', duration: 0.4 } },
};

const YearInReview = () => {
  const [selectedPage, setSelectedPage] = useState(1);

  return (
    <div className="px-4 overflow-hidden pt-10 md:px-10 w-screen min-h-[100vh]">
      <div className="mb-3">
        <Heading color="black" title="Year in review" linecolor="#0072CE" />
      </div>

      <div className="md:w-[500px] w-full text-blue-400 text-4xl font-semibold">
        Accelerating growth with <br /> shared value creation
      </div>

      <div className="flex flex-col md:flex-row gap-4 mt-10">
        {[1, 2, 3].map((val) => (
          <button
            key={val}
            onClick={() => setSelectedPage(val)}
            className={`md:w-[33%] cursor-pointer px-4 py-2 rounded-lg text-white font-medium ${
              selectedPage === val ? 'bg-blue-500' : 'bg-gray-300'
            }`}
          >
            {val === 1 && 'EVOLUTION OVER THE LAST 5 YEARS'}
            {val === 2 && 'EXECUTION FOCUS'}
            {val === 3 && 'EFFICIENT AND FUTURE READY'}
          </button>
        ))}
      </div>

      <div className="mt-10 mb-5 min-h-[300px]">
        <AnimatePresence mode="wait">
          {selectedPage === 1 && (
            <>
            
            <motion.div
              key="tab1"
              variants={fadeVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              className="flex flex-col md:flex-row gap-6 items-center"
            >
              <img src="/yearInReview/1.png" alt="5 year evolution" className="object-contain" />
              <img src="/yearInReview/2.png" alt="5 year evolution" className="object-contain" />
              <img src="/yearInReview/3.png" alt="5 year evolution" className="object-contain" />
            </motion.div>
            <p className='mt-4 text-sm'>*Growth businesses include Tata Sampann, Ready-to-Drink, Tata Soulfull, and Tata SmartFoodz (RTE/RTC Business), Capital Foods and Organic India</p>

            </>
          )}

          {selectedPage === 2 && (
            <motion.div
              key="tab2"
              variants={fadeVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              className="flex flex-col md:flex-row gap-10 items-center"
            >
              <img src="/yearInReview/4.png" alt="execution focus" className="object-contain md:min-w-[30%] md:pb-9" />
              <img src="/yearInReview/5.png" alt="execution focus" className="object-contain md:min-w-[30%]" />
              <img src="/yearInReview/6.png" alt="execution focus" className="object-contain md:min-w-[30%]" />
            </motion.div>
          )}

          {selectedPage === 3 && (
            <>
            <motion.div
              key="tab3"
              variants={fadeVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              className="grid grid-cols-1 md:grid-cols-2 gap-6"
            >
              <img src="/yearInReview/7.png" alt="future ready" className="object-contain w-full" />
              <img src="/yearInReview/8.png" alt="future ready" className="object-contain w-full" />
              <img src="/yearInReview/9.png" alt="future ready" className="object-contain w-full" />
              <img src="/yearInReview/10.png" alt="future ready" className="object-contain w-full" />
            </motion.div>
            <p className='mt-4 text-sm'>**FY 2023-24 figures have been restated <br /> #Free Cash Flow before Capex and Tax</p>
            </>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default YearInReview;
