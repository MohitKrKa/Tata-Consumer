import React from 'react'
import Card from './Card'
import {motion } from "framer-motion"
import { div } from 'framer-motion/client';
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
const Sourcing5th_page = () => {
  return (
    <>
    <div className='marginal text-lg'>
      <div className='flex flex-row gap-2'>
     <div className='w-[5%]'>
         <img src="/sourcing/Screening.webp" alt="" />
       </div>
       <div>
<div className='text-xl font-semibold text-[#06aeef] '>
Screening:
</div>
<span className=' text-xl inline text-black font-light '>
Supplier Classification
and Assessment
</span>
</div>
</div>
<div className='flex flex-row justify-center gap-5 mb-5'>
<div className='w-[50%]'>
<div className='mb-2 mt-2'>
We recognise the importance of
thorough supplier screening, selection,
and assessment in ensuring a resilient
and sustainable supply chain. Our
multi-step selection process involves
robust screenings, risk assessments,
and performance evaluations to
identify and onboard suppliers who
share our commitment to quality,
sustainability and social responsibility.
We have incorporated ESG related
parameters into our supplier
assessment process. Our structured
supplier screening process evaluates
various ESG factors for critical
suppliers. We follow the Supplier Code
of Conduct and a Green Procurement
Policy, actively incorporating these
elements into direct procurement
choices and encouraging key supply
chain partners to adopt similar
commitments. Our focus includes
reducing resource use, optimising
plastic consumption and enhancing
ESG awareness among suppliers. We
encourage our suppliers to implement
management systems aligned with
international standards like ISO 14001
and to establish procedures that
monitor and enhance sustainability
practices
</div>
<div className=''>
  <div className='mb-2'>
  At TCP, we have established
a stringent set of criteria for
selecting suppliers, including:
  </div>
  </div>
  <div>
    <ul className='list-disc ml-6'>
      <li className='mb-2'>Relevant product-specific
manufacturing licenses (e.g.
Tea Marketing Control Order
(TMCO) for tea commodity)</li>
      <li className='mb-2'>Certification of compliance by
Food Safety and Standards
Authority of India (FSSAI)
regulations</li>
      <li className='mb-2'> Sustainability certifications,
such as Trustea or Rainforest
Alliance </li>
    </ul>
  </div>
  <div className='mb-2'>
  Additionally, suppliers must
meet all applicable statutory and
regulatory requirements.
  </div>
</div>
<div className='w-[50%] p-2 border-grey-'>
  <img src="/53.webp" alt="" />
</div>
</div>
<div className='mb-2'>
We ensure that our suppliers fulfil
these criteria and when aggregators
are involved, our aggregator partners
coordinate with responsible producers
on our behalf to ensure that these
minimum criteria are met, enabling
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
supplier facilities, adhering to TCP’s
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
</div>
<div className='flex md:flex-row justify-between mb-2'>
<div className="flex flex-col w-[200px] mb-2">
            <h1 className="text-3xl text-[#4084c1] leading-none">Policy</h1>

            <div class="flex items-center my-1">
              <div class="w-4 h-2 bg-blue-500 rounded-full"></div>
              <div class="h-0.5 w-full bg-blue-500"></div>
            </div>
            <div className=" text-sm leading-tight">
            Sustainable Supply Chain Policy
            launched in FY2024-25 
            </div>
          </div>
          <div className="flex flex-col w-[200px] mb-2">
            <h1 className="text-3xl text-[#4084c1] leading-none">SEDEX</h1>

            <div class="flex items-center my-1">
              <div class="w-4 h-2 bg-blue-500 rounded-full"></div>
              <div class="h-0.5 w-full bg-blue-500"></div>
            </div>
            <div className=" text-sm leading-tight">
            On-boarded for supplier
sustainability assessment
            </div>
          </div>
          <div className="flex flex-col w-[200px] mb-2">
            <h1 className="text-3xl text-[#4084c1] leading-none">32%</h1>

            <div class="flex items-center my-1">
              <div class="w-4 h-2 bg-blue-500 rounded-full"></div>
              <div class="h-0.5 w-full bg-blue-500"></div>
            </div>
            <div className=" text-sm leading-tight">
            Directly sourced
from MSME
            </div>
          </div>
          </div>
          <div className='mb-2'>
          At TCP, we define a critical supplier
as one with whom we maintain a
significant, value-driven business
relationship, typically through the
procurement of raw materials for our
products or related components such as
packaging. Another defining factor for a
critical supplier is if they are considered
essential when our engagements are
dependent on the exclusivity of their
supplies.
These critical suppliers constitute a
major part of our value chain model
and are essential for both our business
expansion as well as the sustainability
of our value chain.
Moving forward, we aim to
progressively enhance our supplier
assessment process, ensuring a
more thorough and comprehensive
evaluation process.
In terms of packaging, we ensure that
all our strategic suppliers involved in
primary packaging hold ISO and British
Retail Consortium (BRC) Global Standard
certifications, which serve as the initial
level of screening. These certifications
also incorporate key ESG considerations.
Our supplier screening methodology
entails a comprehensive evaluation of
country-specific risks by scrutinising
compliance with local regulations,
including GST and FSSAI. Additionally,
the tea industry’s segmented structure
necessitates an in-depth assessment of
commodity-specific risks. This includes
thorough evaluation of various factors
that could impact the tea’s quality, its
sustainable production practices, and
the ethical standards of its sourcing.
In this process, we consider the
environmental repercussions of tea
farming, the working conditions and rights of labourers on tea estates, as
well as the traceability of the tea’s
journey from plantation to consumer.
Business relevance considerations,
such as market stability and supplier
reliability, are also considered to ensure
alignment with our strategic objectives.
This risk assessment is a critical part of
our supplier screening process.
To mitigate the risks, we review and
verify certifications like Trustea, which
serve as a testament that tea producers
are meeting predefined standards for
responsible production.
          </div>
<div className='mb-2 p-5 bg-[#f3f1eb]'>
As a Sedex member, our
commitment to responsible
sourcing and maintaining an
ethical, sustainable supply chain
is paramount. By utilising Sedex’s
tools and services, we collaborate
with our suppliers as a medium
for congruency on principles of
sustainable operations.
</div>
    </div>
  <div className='w-[90%] mx-[5%] px-3 mb-5'>
    <div className='flex flex-row justify-center'>
<div className='w-[35%] p-3 bg-[#eaf8fc]'>
  <div className='text-3xl font-semibold mb-3 text-[#1368b4]'>
  #FY 2024-25
progress against
the target
  </div>
  <div className='text-3xl bg-gradient-to-r from-[#0ab14b] to-[#06aee0] bg-clip-text text-transparent mb-3'>
  Our targets include
assessing 100%
of our critical
suppliers across all
geographies by 2030
and sourcing 100%
of our critical raw
materials sustainably
by 2040.
  </div>
</div>
<div className='w-[65%] p-3 bg-[#f3f1eb]'>
  <div className='text-xl font-semibold text-[#06aeef] mb-3'>SUPPLY CHAIN
SUSTAINABILITY RISK
ASSESSMENT</div>
<div className='mb-2'>
As a part of For Better Sourcing,
TCP developed a framework
providing a structured approach
to identifying, assessing and
mitigating risks that could impact
the sustainability of the supply
chain. The objective of the
framework has been to include
Environmental (E), Social (S) and
Governance (G) considerations
into traditional supply chain risk
management.
Common ESG risks, based on
industry standards such as
ISO 26000, ISO 20400 and
ILO guidelines were taken into
consideration. Additionally, industry
specific risks identified using other
standards such as Farm Standard,
Rainforest Alliance, C.A.F.E. Practices
and OECD guidelines were also
considered. TATA Supplier Code
of Conduct was also used as a
reference.
Procurement leaders for both
commodity and non-commodity
categories were included in the
assessment. The risk study included
all subsidiaries and global operations
to provide a comprehensive overview.
All identified risks were broadly
categorised under the ESG pillars.
The risk register is updated
periodically and mitigation measures
planned for the key risks identified.
</div>
</div>
</div>
  </div>
    </>
  )
}

export default Sourcing5th_page