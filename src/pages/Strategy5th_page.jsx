//
import React from "react";
import { motion } from "framer-motion";

const imageVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 300, damping: 25 },
  },
};

const textVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const StrategyPageCombined = () => {
  return (
    <>
      <div className="w-[90%] mx-[5%] px-3 mt-5 mb-5  ">
        {/* Section 1: Tea Business + E-commerce */}
        <div className="flex flex-row gap-5 mb-5">
        <div className="flex flex-col md:flex-ro gap-5 max-w-7xl mx-auto items-start w-[45%] ">
          <div className="flex-1 ">
            <h2 className="text-[#1368b4] text-2xl font-semibold mb-2">
              Accelerated Growth Momentum in Tea Business
            </h2>
            <p className=" ">
              The tea business demonstrated considerable resilience in the face
              of inflationary pressures and a challenging demand environment.
              Growth momentum strengthened in the second half of FY 25, driven
              by strategic pricing decisions and strong execution. As tea
              inflation remained elevated during the year, we leveraged the
              environment to consolidate our market position and expand volumes.
              We remain focused on building long-term competitiveness in the tea
              business.
            </p>
          </div>
        </div>
        <div className="flex items-start flex-row gap-2 w-[65%]">
          <div className="w-[48%] ">
            <h2 className="text-[#06aeef] text-xl font-semibold mb-2">
              Achieved Milestones in E-commerce
            </h2>
            <p className="">
              Tata Tea has retained its market leadership in E-commerce for
              three consecutive years, outpacing competitors with a strong
              digital presence. Tata Tea Gold is the largest brand in
              e-commerce, embodying a definite shift towards premiumisation in
              this channel of the future.
            </p>
          </div>
          <div className="w-[52%] p-8 ">
            <img src="/135.webp" alt="E-commerce growth" className="  " />
          </div>
        </div>
      </div>
      <div>
        <div className="text-xl font-semibold text-[#06aeef] mb-3">EXPANDING THE HEALTH &
        WELLNESS PORTFOLIO</div>
        <div className="flex flex-row gap-5 justify-center">
<div>
  <img src="/136.webp" alt="" />
</div>
<div>
  <img src="/137.webp" alt="" />
</div>
        </div>
      </div>
      </div>
      {/* <div
        className="w-[90%] px-3 mx-[5%] text-center space-y-10"

      >
        <h2
          className="text-[#5cc5f3] text-2xl md:text-3xl font-bold"
          
        >
          Expanding the Health & Wellness Portfolio
        </h2>

        <div
          className=" flex flex-row justify-center items-center  gap-8 justify-items-center"
        >
          <img
            className="w-full max-w-sm rounded-xl "
            src="/136.webp"
            alt="Health Product 1"
          />
          <img
            className="w-full max-w-sm rounded-xl "
            src="/137.webp"
            alt="Health Product 2"
          />
        </div>
     
    </div> */}
    </>
  );
};

export default StrategyPageCombined;
