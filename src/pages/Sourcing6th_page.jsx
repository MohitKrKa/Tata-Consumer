import React from 'react'
import {motion } from "framer-motion"
const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
      delayChildren: 0.2,
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
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
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
const Sourcing6th_page = () => {
  return (
    <motion.div  whileInView="visible"
    viewport={{ once: true, amount: 0.2 }} // 60% in view triggers
    variants={parentVariants} initial="hidden" >
        <motion.div className='w-[90%] h-auto m-[5%] flex md:flex-row flex-col justify-center items-center md:gap-10' variants={parentVariants}  >
            <div className='md:w-[70%] h-auto '>
                <p className='mb-5'>We ensure that our suppliers fulfill
these criteria and when aggregators
are involved, our aggregator partners
coordinate with responsible producers
on our behalf to ensure that these
minimum criterias are met, enabling
us to maintain the highest standards
of quality, sustainability and social
responsibility in our supply chain.
Complementing this, our supplier
screening is systematically conducted
by our internal quality team. This
dedicated team meticulously conducts
supplier audits, both to affirm
compliance with our standards, and
to identify areas for enhancement
by conducting physical audits of
supplier facilities, adhering to TCP's
stringent quality and food safety
standards. Vendors are rigorously
scored based on audit findings
and root cause analyses (RCA).
Furthermore, corrective and preventive
action (CAPA) plans, developed
in collaboration with suppliers for
identified gaps, are verified at regular
intervals. Final vendor approval is
based on the scores achieved, with
a comprehensive report provided to
each vendor at the conclusion of the
assessment process.

At TCP, we define a critical supplier
as one with whom we maintain a
significant, value-driven business
relationship, typically through the
procurement of raw materials for our
products or related components such as
packaging. Another defining factor of a
critical supplier is if they are considered
essential when our engagements are
dependent on the exclusivity of their
supplies.
These critical suppliers constitute a
major part of our Value Creation Model
and are essential for both our business
expansion as well as the sustainability
of our Value Chain.
Moving forward, we aim to
progressively enhance our supplier
assessment process, ensuring a
more thorough and comprehensive
evaluation process.
In terms of packaging, we ensure that all
our strategic suppliers involved in primary
packaging hold ISO and British Retail
Consortium (BRC) Global Standard
certifications, which serve as the initial
level of screening. These certificationsalso incorporate key ESG considerations.
Our supplier screening methodology
entails a comprehensive evaluation of
country-specific risks by scrutinising
compliance with local regulations,
including GST and FSSAI. Additionally,
the tea industry's segmented structure
necessitates an in-depth assessment of
commodity-specific risks. This includes
thorough evaluation of various factors
that could impact the tea's quality, its
sustainable production practices, and
the ethical standards of its sourcing.
In this process, we consider the
environmental repercussions of tea
farming, the working conditions and rights of labourers on tea estates, as
well as the traceability of the tea's
journey from plantation to consumer.
Business relevance considerations,
such as market stability and supplier
reliability, are also considered to ensure
alignment with our strategic objectives.
This risk assessment is a critical part of
our supplier screening process.
To mitigate the risks, we review
and verify certifications like Trustea,
which serves as an assurance that
tea producers are meeting predefined
standards for responsible production.</p>
            </div>
            <div className='md:w-[20%] h-auto '>
                <div className='bg-[#f3f1eb] md:p-7 p-3 mb-5'>
                As a Sedex member, our
commitment to responsible
sourcing and maintaining an
ethical, sustainable supply chain
is paramount. By utilising Sedex's
tools and services, we collaborate
with our suppliers as a medium
for congruency on principles of
sustainable operations.
                </div>
                <div className='flex flex-col justify-center items-center gap-5 '>
                    <div className='text-2xl text-[#1267b3]'><span className='font-bold bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent text-2xl'>#XXXX</span>
suppliers screened
in FY 2025</div>
                    <div className='text-2xl text-[#1267b3]'><span className='font-bold bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent text-2xl'>On-boarded </span> 
SEDEX for supplier
sustainability assessment</div>
                    <div className='text-2xl text-[#1267b3]'><span className='font-bold bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent text-2xl'>32%</span>
Directly sourced
from MSME</div>
                </div>
            </div>
        </motion.div>
    </motion.div>
  )
}

export default Sourcing6th_page