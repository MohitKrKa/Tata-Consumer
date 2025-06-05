import React from 'react'

const Strategy45th_page = (
    {
        bgColor = "#009546",
        image = "/strategy/5.webp",
        heading1 = "Embed",
        highlight1 = "sustainability",
        heading2 = "",
        highlight2 = "",
        subheading = "",
        footerText = "",}
) => {
  return (
    <>
   
       <div
      className="relative w-full h-[90vh] text-white  p-10"
      style={{ backgroundColor: bgColor }}
    >
      {/* Container for mobile and desktop layout */}
      <div className="flex flex-col md:flex-row h-full gap-8">
        {/* Image Section */}
        <div className="md:w-[2/3]">
          <img src={image} alt="Hero Visual" className="h-full mx-auto" />
        </div>

        {/* Text Content */}
        <div className="w-full md:w-1/2 flex items-center justify-start md:py-0">
          <div className="leading-none [&_h1]:m-0">
            <div className="text-[2rem] md:text-[3rem] font-medium">
              <h1>{heading1}</h1>
            </div>
            <div className="font-extrabold mb">
              <h1 className="text-[3rem] md:text-[5.5rem] m-0">{highlight1}</h1>
            </div>
            <div className="text-[2rem] md:text-[3rem] font-medium">
              <h1>{heading2}</h1>
            </div>
            <div className="text-[3rem] md:text-[5.5rem] font-extrabold mb-3">
              <h1 className="m-0">{highlight2}</h1>
            </div>
            <div className="text-[2rem] md:text-[3rem] font-medium">
              <h1 className="m-0">{subheading}</h1>
            </div>
            <p>At Tata Consumer Products, our journey is
defined by innovation, agility and a deep
commitment to sustainability. Embedding
sustainability has been recognised as a key
strategic pillar for long-term success. Guided
by our ‘For Better Living’ purpose, we prioritise
innovative solutions that cater to evolving
consumer needs while ensuring our efforts
benefit both people and the planet. Through
sustainable sourcing and a focus on better
nutrition, we aim to create lasting value for
all stakeholders and contribute to a more
sustainable future.</p>
          </div>
        </div>
      </div>

      {/* Diagonal Lines (always top-right) */}
      <div className="absolute top-0 right-0 z-20 hidden md:block">
        <svg width="300" height="150">
          <line
            x1="0"
            y1="0"
            x2="300"
            y2="100"
            stroke="#b6e34e"
            strokeWidth="2"
          />
          <line
            x1="0"
            y1="20"
            x2="300"
            y2="120"
            stroke="#b6e34e"
            strokeWidth="2"
          />
        </svg>
      </div>

      {/* Footer */}
    </div>
      
    <div className='w-[90%] h-auto mx-[5%] px-3 mt-3'>
        <div className='mb-3'>
    Our dedication to responsible consumption and efficient natural resource management allows us to deliver
high-quality products while minimising our environmental impact and creating significant social value. By
staying abreast of industry trends, global standards, and regulatory changes, we ensure our proactive approach
continuously drives excellence and sustainability.
</div>
<div className='text-2xl font-semibold text-[#1368b4] mb-2'>
OUR ESG PARADIGM
</div>
<div className='mb-2'>
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
    <div className='w-[90%] h-auto mx-[5%] px-3'>
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