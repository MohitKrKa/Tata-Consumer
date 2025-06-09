import React from "react";
import esgG1 from "/Sustainability/esgG1.webp";
import esgG2 from "/Sustainability/esgG2.webp";
import esgG3 from "/Sustainability/esgG3.webp";
import esgG4 from "/Sustainability/esgG4.webp";
import esgG5 from "/Sustainability/esgG5.webp";
import esgG6 from "/Sustainability/esgG6.webp";
import esgG7 from "/Sustainability/esgG7.webp";
import esgG8 from "/Sustainability/esgG8.webp";
import esgG9 from "/Sustainability/esgG9.webp";
import esgG10 from "/Sustainability/esgG10.webp";
import esgG11 from "/Sustainability/esgG11.webp";
import { motion } from "framer-motion";
import CommitteeDropdown from "./CommitteeDropdown";
import Governance_table from "./Governance_table"
const parentVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.3, // auto one-by-one without manual delay
    },
  },
};
const imageCommonVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  show: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.6, ease: "easeOut" },
  },
}

// Children animation
const childVariants = {
  hidden: { opacity: 0, y: 100 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 20,
    },
  },
};

const EsgGovernance = () => {
  return (
    <>
    <div className="marginal">
      <div className="text-lg   flex flex-col md:flex-row gap-10 ">
        {/* Left */}
        <div className="relative w-full md:w-1/2 bg-[#00acbc] text-white text-5xl md:text-7xl flex items-center justify-center">
          <img src={esgG1} alt="" className="h-[80vh] object-cover" />
          <span className="absolute font-[500] left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center leading-tight">
            ESG <br /> Governance
          </span>
        </div>

        {/* Right */}
        <div className="w-full md:w-1/2 flex flex-col gap-6 md:gap-10">
          <h1 className="text-[#176ab4] text-2xl md:text-3xl font-[500]">
            ESG LEADERSHIP AND OVERSIGHT FOR INCLUSIVE GROWTH
          </h1>
          <p className="text-[#959493] font-[400] text-base md:text-xl">
            At Tata Consumer, we believe that growth is meaningful only when we
            evolve together — our business, our people, our partners and the
            communities we serve. Operating in the dynamic FMCG sector, where
            agility and consumer insights are key, our ESG Leadership and
            Oversight act as the guiding force that steers us towards
            sustainable excellence. Embracing the Tata Group's ethos of
            integrity and social responsibility, we imbibe ESG considerations
            into our strategic governance blueprint, ensuring they permeate
            every aspect of our business operations.
          </p>
          <motion.img
            src={esgG2}
            alt=""
            className=""
            initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.5 }}
              variants={imageCommonVariants}
          />
        </div>
      </div>

      <div className="m-5 md:m-10 mt-20 flex flex-col gap-6 md:gap-10 ">
        <h1 className="text-[#176ab4] text-2xl md:text-3xl font-[500]">
          ESG LEADERSHIP AND OVERSIGHT FOR INCLUSIVE GROWTH
        </h1>
        <p className="text-[#959493] font-[400] text-base md:text-xl ">
          The dedicated sustainability governance at TCPL ensures effective
          oversight and integrated management of the sustainability agenda of
          the Company. The governance structure includes the the Board's CSR and
          Sustainability Committee, the Sustainability Steering Committee and
          the Working Group, each with specific roles and responsibilities. The
          Internal Audit and Risks team at Tata Consumer Products also plays a
          significant role in our ESG agenda. This team is responsible for the
          oversight of the organisation's risk management process, which
          integrates ESG risks into our organisational risk matrix. Following
          this, appropriate mitigation actions are identified and enacted.
          Residual risk is thereby reduced to an acceptable level and
          continuously monitored.
        </p>

        <motion.div
          className="md:flex mb-3 md:mb-0 justify-center  gap-6 md:gap-6"
          variants={parentVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.6 }}
        >
          {[esgG3, esgG4, esgG5].map((img, idx) => (
            <motion.img
              key={idx}
              src={img}
              alt=""
              className="md:w-[33%] object-contain"
              variants={childVariants}
            />
          ))}
        </motion.div>
      </div>
<CommitteeDropdown/>
      <div className="">
        {/* <motion.img src={esgG6} alt="" className=""
        initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.5 }}
              variants={imageCommonVariants}
        /> */}
        <div className="flex flex-col gap-6">
          <div className="">
          <p className="text-[#959493] font-[400] text-base md:text-xl">
            Our targeted ESG endeavours have contributed to enhanced operational
            efficiency and risk management and have been appreciated by a
            multitude of stakeholders.
          </p>
         
          <p className="text-[#959493] font-[400] text-base md:text-xl">
            Building on a robust ESG governance structure, we have established
            well-defined ESG targets to further scale our sustainability
            efforts.
          </p>
          </div>
          <div className="flex md:flex-row flex-col justify-center gap-6 text-[#959493] font-[400] text-base md:text-xl">
  {[0, 1, 2, 3].map((i, idx) => (
    <div key={idx} className="flex flex-col text-left items-start md:w-1/4  bg-gray-50 p-6">
      {/* Fixed-size image container for consistent layout */}
      <div className="md:w-[120px] md:h-[60px]  mb-3">
        <img
          src={`/governance_logo/${i}.webp`}
          alt=""
          className="w-full h-full object-contain"
        />
      </div>

      {/* Text below image starts at same position for all */}
      <div>
        {i === 0 && (
          <>TCP was included in the Sustainability Yearbook 2024 by S&P Global Sustainable 1, marking our place among the leaders in sustainability</>
        )}
        {i === 1 && (
          <>TCP’s ESG Risk Rating from Morningstar Sustainalytics has improved, transitioning to ‘Medium’ risk status</>
        )}
        {i === 2 && (
          <>MSCI rating for TCP remains unchanged at ‘A’, indicating continued strong performance</>
        )}
        {i === 3 && (
          <>CDP Climate Change Rating ‘B’; CDP Water Rating ‘B’ (recognises that the Company is making significant efforts to manage environmental challenges)</>
        )}
      </div>
    </div>
  ))}
</div>


        </div>
      </div>
<Governance_table/>
      </div>
    </>
  );
};

export default EsgGovernance;
