import React from 'react'
import Card from './Card'
const items = [
  {
    icon: "/305.webp",
    text: "Harness Digital as a strategic differentiator"
  },
  {
    icon: "/306.webp",
    text: "Be the leading Innovation driven FMCG player in India"
  },
  
];
const Strategy44th_page = ({
  bgColor = "#0066b3",
  image = "/strategy/4.webp",
  heading1 = "Drive",
  highlight1 = "digital &",
  heading2 = "",
  highlight2 = "innovation",
  subheading = "",
  footerText = "*The mobile screens displayed on this page are for representative purposes only",
}) => {
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
      <div className="absolute  bottom-4 left-5 text-white text-shadow-2xs md:text-base italic opacity-80">
  {footerText}
</div>
      {/* Footer */}
    </div>
       <div className='flex flex-row justify-between mt-3'>
       <div className="bg-[#f9f7f4] px-4 md:px-16 flex items-center w-[70%]">
          <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-gray-300">
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
        <div className='w-[20%] pt'>
          <img src="/307.webp" alt="" />
        </div>
        </div>
        <div className='w-[90%] mx-[5%] px-3 mb-5 p-5' style={{
    background: 'linear-gradient(to bottom right, #d1edfb, #eff6e0)'}}>
<div className='text-2xl font-semibold text-[#1368b4] mb-3'>TATA GROUP’S FOCUS ON TECHNOLOGY & INNOVATION</div>
<div className='flex flex-row justify-center gap-5 mb-5 '>
  <div>Recent advancements in Artificial
Intelligence (AI) over the past two to
three years have revolutionised the
technology landscape. Generative
AI is emerging as a transformative
force and is fundamentally different
from the previous waves of
technology disruption.
AI will have a transformative impact
on every business, both B2C and
B2B, in more ways than one. There
is tremendous opportunity across
Tata group companies to enhance
customer experiences, reimagine
manufacturing processes, innovate
product design and engineering, </div>
  <div>and improve employee engagement
with an AI driven approach.
Recognising the critical role of data in
scaling AI initiatives, the Tata Group
is driving data maturity across Group
Companies through a comprehensive
data excellence framework.
Companies are setting up Centres
of Excellence (CoEs) to identify and
implement impactful AI projects and
build tech talent.
The Group’s investments in Cloud,
Data and Digital provide strong
foundation for our AI journey.
At Tata Group, we continue to </div>
  <div>strengthen partnerships with
leading technology firms and
research institutes to access latest
AI developments. Given the rapid
pace of change in AI technologies,
the Tata Group continues to upskill
its workforce continue to upskill
our workforce and build vibrant
communities for learning and sharing.
With evolving threat landscape,
cybersecurity remains a top priority.
Tata Group companies are making
significant investments in advanced
cybersecurity technologies and
workforce training to safeguard
against evolving cyber risks.</div>
</div>
</div>
<div className='w-[90%] mx-[5%] px-3 mb-5 flex flex-row justify-center gap-5 '>
  <div className=''>
<div className='text-2xl font-semibold text-[#1368b4] mb-2'>
HARNESSING DIGITAL STRATEGY
FOR SCALABLE GROWTH
</div>
<div className='mb-3'>
The digital landscape is evolving at an
unprecedented pace, bolstering innovation,
productivity and unveiling novel opportunities to
connect with consumers.
At Tata Consumer Products, we continue to advance
digital transformation across the organisation
— leveraging technology to optimise operations,
unlock efficiencies and accelerate growth. The rollout of our all new Salesforce based go-to-market
platform, Distributor Management System (DMS)
and centralisation of Carrying and Forwarding Agent
(CFA) operations were some of the initiatives that we
drove during the year.
</div>
</div>
<div className=''>
  <img src="/308.webp" alt="" />
</div>
</div>
<div className='w-[90%] mx-[5%] px-3 mb-5'>
<div className='mb-2'>
  <img src="/309.webp" alt="" />
</div>
<div className='mb-3'>
  <div className='text-xl font-semibold text-[#06aeef] mb-2'>
  SIMPLIFYING LOGISTICS, ENHANCING AGILITY
  </div>
  <div className='mb-2'>
  Our transition to a centralised digital framework unlocks efficiencies across our expanding network of
  warehouses and Carrying and Forwarding Agents (CFAs) in India. 
  </div>
<div className=''>
  <img src="/310.webp" alt="" />
</div>
</div>
<div className='mb-5'>
  <div className='text-xl font-semibold text-[#06aeef] mb-2'>FUELLING GROWTH THROUGH INNOVATION </div>
  <div className='mb-3'>
  At Tata Consumer Products, innovation extends beyond product development — it is about enhancing consumer
experience and well-being, integrating sustainability and leveraging scientific advancements. Our investments in
disruptive categories, nutrition policy integration and academia collaborations ensure that our innovation pipeline is
geared to meet evolving consumer needs.
  </div>
  <div className='text-[#02adbd] mb-2'>
  Scaling Innovation
  </div>
  <div className='flex flex-row  justify-between gap-5 flex-wrap'>
  <div className="flex flex-col w-[200px] mb-2">
            <h1 className="text-3xl text-[#4084c1] leading-none">5.2%</h1>

            <div class="flex items-center my-1">
              <div class="w-4 h-2 bg-blue-500 rounded-full"></div>
              <div class="h-0.5 w-full bg-blue-500"></div>
            </div>
            <div className=" text-sm leading-tight">
            innovation to sales ratio
            </div>
          </div>
          <div className="flex flex-col w-[200px] mb-2">
            <h1 className="text-3xl text-[#4084c1] leading-none">15%</h1>

            <div class="flex items-center my-1">
              <div class="w-4 h-2 bg-blue-500 rounded-full"></div>
              <div class="h-0.5 w-full bg-blue-500"></div>
            </div>
            <div className=" text-sm leading-tight">
            Disruptive innovation
            </div>
          </div>
          <div className="flex flex-col w-[200px] mb-2">
            <h1 className="text-3xl text-[#4084c1] leading-none">5X</h1>

            <div class="flex items-center my-1">
              <div class="w-4 h-2 bg-blue-500 rounded-full"></div>
              <div class="h-0.5 w-full bg-blue-500"></div>
            </div>
            <div className=" text-sm leading-tight">
            innovation revenue
vs FY21
            </div>
          </div>
          <div className="flex flex-col w-[200px] mb-2">
            <h1 className="text-3xl text-[#4084c1] leading-none">150</h1>

            <div class="flex items-center my-1">
              <div class="w-4 h-2 bg-blue-500 rounded-full"></div>
              <div class="h-0.5 w-full bg-blue-500"></div>
            </div>
            <div className=" text-sm leading-tight">
            launches in four years
            </div>
          </div>
          <div className="flex flex-col w-[200px] mb-2">
            <h1 className="text-3xl text-[#4084c1] leading-none">On average
3 to 4 new
launches per
month in FY 25</h1>

            <div class="flex items-center my-1">
              <div class="w-4 h-2 bg-blue-500 rounded-full"></div>
              <div class="h-0.5 w-full bg-blue-500"></div>
            </div>
            <div className=" text-sm leading-tight">
            sustaining a strong pipeline
            of innovative products
            </div>
          </div>
          </div>
</div>
<div className='flex flex-row justify-center gap-5 mb-2'>
  <div className=''>
    <div className='text-xl font-semibold text-[#06aeef] mb-2'>ADVANCING HEALTH AND
WELLNESS THROUGH OUR
NUTRITION POLICY</div>
<div className='mb-2'>Our approach to nutrition is deeply
embedded in our innovation strategy,
ensuring that our products align
with evolving consumer needs.
The policy is built around three
key pillars— Superior Experiences,
Nutritionally Enhanced Offerings and
Sustenance. By integrating under
a unified nutritional framework,
we create a product portfolio that
caters to consumer needs across the
spectrum-indulgence and functional
benefits, without compromising on
taste or quality. Details can be found
in ‘For Better Nutrition’ section of
the Integrated Annual Report.</div>
  </div>
  <div className=''>
    <img src="/311.webp" alt="" />
  </div>
</div>
<div className='mb-3'>
  <div className='text-xl font-semibold text-[#06aeef] mb-2'>LEVERAGING KEY CONSUMER TRENDS DURING THE YEAR</div>
  <div className='mb-2'>
    <img src="/312.webp" alt="" />
  </div>
</div>
<div className='mb-5'>
  <div className='text-xl font-semibold text-[#06aeef] mb-2'>EMBEDDING DISRUPTIVE INNOVATION</div>
  <div className='mb-2'>
  We reimagine everyday products with alternatives that deliver improved nutrition, convenience and ingredient-led
innovation. By enhancing traditional categories with functional benefits and smarter formulations, we make it easier for
consumers to make healthier choices without compromising on taste or experience.
  </div>
  <div className=''>
    <img src="/313.webp" alt="" />
  </div>
</div>
<div className='flex flex-row justify-center gap-5'>
  <div className='w-[50%]'>
    <div className='text-xl font-semibold text-[#06aeef] mb-2'>
    SCIENCE-BACKED INNOVATION FOR
    DIFFERENTIATED PRODUCTS
    </div>
    <div className='mb-3'>
    We integrate consumer insights, sensory evaluations with analytical
science to develop products that offer both superior nutrition and
enhanced consumer experiences. Through data-driven substantiation,
we ensure product differentiation, maintain quality consistency and
establish credible claims.
One such example is the Unpolished Toor Dal for Tata Sampann, where
scientific evaluation revealed the retention of key micronutrients in
unpolished dals. This insight was reinforced with expert collaborations
through a campaign, ensuring consumers make informed choices. By
embedding rigorous research and consumer understanding into our
innovation strategy, we create products that combine functionality
with trust.
    </div>
  </div>
  <div className='w-[50%]'>
    <img src="/314.webp" alt="" />
  </div>
</div>
</div>
<div className='w-[90%] mx-[5%] px-3 mb-5' >
<div className='flex flex-row justify-center gap-5 mb-5'>
  <div className='w-[45%]'>
    <div className='font-semibold mb-2'>Tata LYFE + Alkaline water</div>
    <div className='mb-2'>
    Distinctive and innovative packaging developed in
collaboration with Tata Elxsi, for the Premium Alkaline
Water segment. The design exudes sophistication with a
unique and premium aesthetic.
    </div>
    <div className=''>
      <img src="/315.webp" alt="" />
    </div>
  </div>
  <div className='w-[55%]'>
  <div className='font-semibold mb-2'>Tata Copper+ value engineering</div>
    <div className='mb-2'>
    Embracing the latest global technological advancements, the
Tata Copper+ PET bottle has been upgraded with a valueengineered neck and cap design. The innovative design reduces
PET usage by approximately 30% compared to traditional
designs, ensuring no compromise on quality or user experience.
This change is set to eliminate 1,200 metric tons of PET
from annual consumption, reinforcing our commitment to
sustainability
    </div>
    <div>
      <img src="/316.webp" alt="" />
    </div>
  </div>
</div>
<div>
  <div className='text-xl font-semibold text-[#06aeef] mb-2'>
  STRENGTHENING ACADEMIA COLLABORATIONS
  </div>
  <div className='mb-2'>
  Strategic partnerships with leading academic institutions enhance our research capabilities,
  driving innovation in food and nutrition.
  </div>
  <div>
    <img src="/317.webp" alt="" />
  </div>
</div>
</div>
        
    {/* <div className='w-[90%] h-auto m-[5%] flex md:flex-row flex-col justify-center items-center md:gap-15 gap-5'>
    <div className='md:w-[50%] h-auto '>
<img className='' src="/304.webp" alt="" />
</div>
<div className='md:w-[50%] h-auto flex flex-col md:gap-15 gap-5'>
<div className='md:text-5xl text-2xl text-[#009bdf]'>
Drive
digital &
innovation
</div>
<div className='flex flex-row justify-center md:gap-15 border-2 p-5 bg-[#f1eee9] flex-wrap gap-5'>
<div>
    <img className='w-16' src="/305.webp" alt="" />
    <p className='w-40'>Harness Digital
as a strategic
differentiator</p>
</div>
<div>
    <img className="w-16" src="/306.webp" alt="" />
    <p className='w-40'>Be the leading Innovation
driven Food & Beverage
player in India</p>
</div>
</div>
</div>
</div>
<div className='w-[90%] h-auto m-[5%] flex md:flex-row flex-col justify-center items-center'>
    <div className='md:w-[50%] h-auto md:m-[5%]'>
    <div className='text-xl text-[#2774ba] mb-5'>
HARNESSING DIGITAL STRATEGY
FOR SCALABLE GROWTH
</div>
<div className='mb-5'>The digital landscape is evolving at an
unprecedented pace, bolstering innovation,
productivity and unveiling novel opportunities
to connect with consumers.
At Tata Consumer Products, we continue to
advance digital transformation across the
organisation — leveraging technology to
optimise operations, unlock efficiencies and
accelerate growth. The roll-out of our all new
Salesforce based go-to-market platform,
Distributor Management System (DMS) and
centralisation of Carrying and Forwarding
Agent (CFA) operations were some of the
initiatives that we drove during the year.</div>
</div>
<div className='md:w-[50%] h-auto m-[5%]'>
<img src="/307.webp" alt="" />
</div>
</div>
<div className='flex md:flex-row flex-col justify-center md:gap-10 gap-5'>
<div className='md:w-[50%] h-auto m-[5%]'>
<img src="/309.webp" alt="" />
</div>
<div className='md:w-[50%] h-auto m-[5%]'>
<div className='text-xl text-[#7ac7f8] mb-5'>SIMPLIFYING LOGISTICS, ENHANCING AGILITY</div>
<div className='mb-5'>Our transition to a centralised digital framework unlocks efficiencies across our expanding network of
warehouses and Carrying and Forwarding Agents (CFAs) in India.</div>
<img src="/310.webp" alt="" />
</div>
</div>
<div className='w-[90%] h-auto m-[5%]'>
<div className='mb-5 text-xl text-[#7ac7f8]'>FUELLING GROWTH THROUGH INNOVATION</div>
<div className='mb-5'>At Tata Consumer Products, innovation extends beyond product development — it is about enhancing consumer
experience and well-being, integrating sustainability and leveraging scientific advancements. Our investments in
disruptive categories, nutrition policy integration and academia collaborations ensure that our innovation pipeline is
geared to meet evolving consumer needs.</div>
<div className='mb-5 text-xl text-[#7ac7f8]'>Scaling Innovation</div>
<div className='flex flex-row justify-center  flex-wrap gap-15'>
<div className="flex flex-col mt-2 w-[200px] mb-5">
            <h1 className="text-3xl text-[#4084c1] leading-none">~6X</h1>

            <div class="flex items-center my-1">
              <div class="w-4 h-2 bg-blue-500 rounded-full"></div>
              <div class="h-0.5 w-full bg-blue-500"></div>
            </div>
            <div className=" text-sm leading-tight">
            innovation to sales ratio
            </div>
          </div>
          <div className="flex flex-col mt-2 w-[200px] mb-5">
            <h1 className="text-3xl text-[#4084c1] leading-none">5X</h1>

            <div class="flex items-center my-1">
              <div class="w-4 h-2 bg-blue-500 rounded-full"></div>
              <div class="h-0.5 w-full bg-blue-500"></div>
            </div>
            <div className=" text-sm leading-tight">
            innovation revenue
            vs FY21
            </div>
          </div>
          <div className="flex flex-col mt-2 w-[200px] mb-5">
            <h1 className="text-3xl text-[#4084c1] leading-none">15%</h1>

            <div class="flex items-center my-1">
              <div class="w-4 h-2 bg-blue-500 rounded-full"></div>
              <div class="h-0.5 w-full bg-blue-500"></div>
            </div>
            <div className=" text-sm leading-tight">
            Disruptive innovation
            </div>
          </div>
          <div className="flex flex-col mt-2 w-[200px] mb-5">
            <h1 className="text-3xl text-[#4084c1] leading-none">150</h1>

            <div class="flex items-center my-1">
              <div class="w-4 h-2 bg-blue-500 rounded-full"></div>
              <div class="h-0.5 w-full bg-blue-500"></div>
            </div>
            <div className=" text-sm leading-tight">
            launches in four years
            </div>
          </div>
          <div className="flex flex-col mt-2 w-[200px] mb-5">
            <h1 className="text-3xl text-[#4084c1] leading-none">One new
launch per
week in FY25</h1>

            <div class="flex items-center my-1">
              <div class="w-4 h-2 bg-blue-500 rounded-full"></div>
              <div class="h-0.5 w-full bg-blue-500"></div>
            </div>
            <div className=" text-sm leading-tight">
            sustaining a strong pipeline
            of innovative products
            </div>
          </div>
          </div>
          <Card obj={{name:"ADVANCING HEALTH AND WELLNESS THROUGH OUR NUTRITION POLICY",text:"Our nutrition strategy focuses on innovation, delivering superior experiences, enhanced offerings, and sustained benefits to meet evolving consumer needs without compromising on taste or quality.",img:"/311.webp"}}/>
          <div>
            <div className='mb-5 text-xl text-[#7ac7f8]'>LEVERAGING KEY CONSUMER TRENDS DURING THE YEAR</div>
            <div className='mb-5'>
                <img src="/312.webp" alt="" />
            </div>
            <div className='text-xl text-[#7ac7f8] mb-5'>
            EMBEDDING DISRUPTIVE INNOVATION
            </div>
            <div className='mb-5'>We reimagine everyday products with alternatives that deliver improved nutrition, convenience and ingredient-led
innovation. By enhancing traditional categories with functional benefits and smarter formulations, we make it easier for
consumers to make healthier choices without compromising on taste or experience.</div>
<div className='mb-5'>
    <img src="/313.webp" alt="" />
</div>
<Card obj={{name:"SCIENCE-BACKED INNOVATION FOR DIFFERENTIATED PRODUCTS",text:"We integrate consumer insights, sensory evaluations with analytical science to develop products that offer both superior nutrition and enhanced consumer experiences. Through data-driven substantiation, we ensure product differentiation, maintain quality consistency and establish credible claims. One such example is the Unpolished Toor Dal for Tata Sampann, where scientific evaluation revealed the retention of key micronutrients in unpolished dals. This insight was reinforced with expert collaborations through a campaign, ensuring consumers make informed choices. By embedding rigorous research and consumer understanding into our innovation strategy, we create products that combine functionality with trust.",img:"/314.webp"}}/>
<Card obj={{name:"Tata LYFE + Alkaline water",text:"Distinctive and innovative packaging developed in collaboration with Tata Elxsi, for the Premium Alkaline Water segment. The design exudes sophistication with a unique and premium aesthetic.",img:"/315.webp"}}/>
<Card obj={{name:"Tata Copper+ value engineering",text:"Embracing the latest global technological advancements, the Tata Copper+ PET bottle has been upgraded with a value-engineered neck and cap design. The innovative design reduces PET usage by approximately 30% compared to traditional designs, ensuring no compromise on quality or user experience. This change is set to eliminate 1,200 metric tons of PET from annual consumption, reinforcing our commitment to sustainability.",img:"/316.webp"}}/>
<div className='mb-5 text-xl text-[#7ac7f8]'>
STRENGTHENING ACADEMIA COLLABORATIONS
</div>
<div className='mb-5'>
Strategic partnerships with leading academic institutions enhance our research capabilities,
driving innovation in food and nutrition.
</div>
<div className='mb-5'>
    <img className='md:mt-5' src="/317.webp" alt="" />
</div>
          </div>
</div> */}
</>
  )
}

export default Strategy44th_page