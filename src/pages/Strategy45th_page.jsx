import React from 'react'
import SoftCover from '../components/dos/SoftCover'

const Strategy45th_page = () => {
  const softData = {
    bgColor: "#009546",
    image: "/strategy/5.webp",
    heading1: "Embed \n sustainability",
  }
  return (
    <>
    <SoftCover props={softData} />
      

      <div className='marginal text-lg'>
        <div className='mb-8'>
          Our dedication to responsible consumption and efficient natural resource management allows us to deliver
          high-quality products while minimising our environmental impact and creating significant social value. By
          staying abreast of industry trends, global standards, and regulatory changes, we ensure our proactive approach
          continuously drives excellence and sustainability.
        </div>
        <div className='text-2xl font-semibold text-[#1368b4] mb-2'>
          OUR ESG PARADIGM
        </div>
        <div className='mb-2 bg-gradient-to-t p-4 from-[#f7f6f2] to-[#fdfdfc]'>
          <img src="/319.webp" alt="" />
        </div>
        <div className='mb-2'>
          At TCPL, we are firmly rooted in
          the Tata Group's Code of Conduct,
          a strong and comprehensive
          framework that shapes our ethical and
          responsible business practices. This
          code acts as our guiding compass,
          ensuring integrity, transparency,
          and respect for all stakeholders. Our

          stakeholders are crucial in influencing
          our trajectory and directing our
          purpose. Through robust and inclusive
          stakeholder engagement, we have
          identified critical issues to effectively
          focus our ESG initiatives. These
          insights have been crucial in assessing
          the materiality of Environmental,

          Social, and Governance (ESG)
          priorities. This process has enabled
          us to develop a comprehensive ESG
          strategy, mitigate risks through
          enterprise risk management, and
          unlock strategic opportunities for
          sustainable growth.
        </div>
      </div>
      <div className='marginal text-lg'>
        <div className='mb-2'>Our ESG strategy, ‘For Better Living’, is built on the below strategic pillars that
          seamlessly integrate across every facet of our business, uniting stakeholders and
          fostering holistic, sustainable growth.</div>
        <div className='flex md:flex-row flex-col justify-center items-center'>
          <div className='md:w-[50%] '>
            <img src="/322.webp" alt="" />
          </div>
          <div className='md:w-[50%]'>
            <img src="/323.webp" alt="" />
            <div className='text-xs md:mt-2 mb-2'>
              Across these pillars, we have established specific Key Performance Indicators (KPIs) aligned with global
              standards, enabling focused action plans to drive our strategic goals. Integral to this framework is a robust
              ESG governance structure that ensures accountability and transparency in our sustainability endeavours. Our
              mission is to embed this strategy deeply within our organisation and value chain—strengthening our brand,
              expanding our market reach, and fuelling innovation in product development.
            </div>
          </div>
        </div>

      </div>
    </>
  )
}

export default Strategy45th_page