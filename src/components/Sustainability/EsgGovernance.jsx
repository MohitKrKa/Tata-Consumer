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
      <div className="m-5 md:m-10 mt-20  flex flex-col md:flex-row gap-10 pt-10">
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
          className="flex flex-wrap justify-center  gap-6 md:gap-6"
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
              className="h-[30vh] md:h-[38vh] object-contain"
              variants={childVariants}
            />
          ))}
        </motion.div>
      </div>

      <div className="m-5 md:m-10 mt-20 flex flex-col  gap-6">
        <motion.img src={esgG6} alt="" className=""
        initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.5 }}
              variants={imageCommonVariants}
        />
        <div className="flex flex-row gap-6">
          <div className="w-[50%]">
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
          <div className="w-[50%]">
          <img src={esgG7} alt="" className="" />
          </div>
        </div>
      </div>

      <motion.div
        className="m-10 hidden md:flex max-w-[68vh] mt-20 h-[96vh] "
        variants={parentVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.6 }}
      >
        <motion.img src={esgG8} alt="" variants={childVariants} />
        <motion.img src={esgG9} alt="" variants={childVariants} />
        <motion.img src={esgG10} alt="" variants={childVariants} />
        <motion.img src={esgG11} alt="" variants={childVariants}  />
      </motion.div>
    </>
  );
};

export default EsgGovernance;
