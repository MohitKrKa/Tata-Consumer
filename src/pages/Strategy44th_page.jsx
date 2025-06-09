import React from 'react'
import SoftCover from '../components/dos/SoftCover';
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
const Strategy44th_page = () => {
  const softData = {

    bgColor: "#0066b3",
    image: "/strategy/4.webp",
    heading1: "Drive \n digital & \n innovation",
  }
  return (
    <>
      <SoftCover props={softData} />
      <div className='md:flex flex-row justify-between marginal text-lg'>
        <div className="bg-[#f9f7f4] px-4 md:px-16 flex items-center w-[70%]">
          <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-gray-300">
            {items.map((item, index) => (
              <div
                key={index}
                className="flex flex-col items-center text-center px-4 py-6"
              >
                <div className='w-12 h-16 flex items-center  mb-4'>
                  <img src={item.icon} alt={`icon-${index}`} />
                </div>
                <p className=" text-gray-800">{item.text}</p>
              </div>
            ))}
          </div>
          
        </div>
        <div className='absolut w-[25%] right-0'>
          <img src="/307.webp" className='md:opacity-0' alt="" />
        </div>
       
      </div>
      <div className='relative marginal !p-4 text-lg' style={{
        background: 'linear-gradient(to bottom right, #d1edfb, #eff6e0)'
      }}>
         <div className='md:block hidden absolute w-[29%] right-0 -top-30 transform -translate-y-2/3'>
          <img src="/307.webp" className='' alt="" />
        </div>
        <div className='text-2xl font-semibold text-[#1368b4] mb-3'>TATA GROUP’S FOCUS ON TECHNOLOGY & INNOVATION</div>
        <div className='flex flex-row flex-wrap justify-center gap-5 mb-5 '>
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
            product design and engineering, and improve employee engagement
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
            At Tata Group, we continue to strengthen partnerships with
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
      <div className='marginal text-lg md:flex flex-row justify-center gap-5 '>
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
      <div className='marginal text-lg'>
        <div className='mb-2 '>
          <img src="/309.webp" className='md:w-[70%] bg-white mx-auto' alt="" />
        </div>
        <div className='mb-3'>
          <div className='text-xl font-semibold text-[#06aeef] mb-2'>
            SIMPLIFYING LOGISTICS, ENHANCING AGILITY
          </div>
          <div className='mb-2'>
            Our transition to a centralised digital framework unlocks efficiencies across our expanding network of
            warehouses and Carrying and Forwarding Agents (CFAs) in India.
          </div>
          <div className='bg-gray-50 p-4'>
            <img src="/310.webp" className='w-[70%] mx-auto' alt="" />
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
          <div className='text-[#02adbd] my-6'>
            Scaling Innovation
          </div>
          <div className='flex flex-row gap-8 justify-between flex-wrap'>
            <div className="flex flex-col w-[200px] mb-2">
              <h1 className="text-3xl text-[#4084c1] leading-none">5.2%</h1>

              <div class="flex items-center my-2">
                <div class="w-4 h-2 bg-blue-500 rounded-full"></div>
                <div class="h-0.5 w-full bg-blue-500"></div>
              </div>
              <div className=" text-base leading-tight">
                innovation to sales ratio
              </div>
            </div>
            <div className="flex flex-col w-[200px] mb-2">
              <h1 className="text-3xl text-[#4084c1] leading-none">15%</h1>

              <div class="flex items-center my-2">
                <div class="w-4 h-2 bg-blue-500 rounded-full"></div>
                <div class="h-0.5 w-full bg-blue-500"></div>
              </div>
              <div className=" text-base leading-tight">
                Disruptive innovation
              </div>
            </div>
            <div className="flex flex-col w-[200px] mb-2">
              <h1 className="text-3xl text-[#4084c1] leading-none">5X</h1>

              <div class="flex items-center my-2">
                <div class="w-4 h-2 bg-blue-500 rounded-full"></div>
                <div class="h-0.5 w-full bg-blue-500"></div>
              </div>
              <div className=" text-base leading-tight">
                innovation revenue
                vs FY21
              </div>
            </div>
            <div className="flex flex-col w-[200px] mb-2">
              <h1 className="text-3xl text-[#4084c1] leading-none">150</h1>

              <div class="flex items-center my-2">
                <div class="w-4 h-2 bg-blue-500 rounded-full"></div>
                <div class="h-0.5 w-full bg-blue-500"></div>
              </div>
              <div className=" text-base leading-tight">
                launches in four years
              </div>
            </div>
            <div className="flex flex-col mb-2">
              <h1 className="text-3xl text-[#4084c1] leading-none">On average
                3 to 4 new
                launches per
                month in FY 25</h1>

              <div class="flex items-center my-2">
                <div class="w-4 h-2 bg-blue-500 rounded-full"></div>
                <div class="h-0.5 w-full bg-blue-500"></div>
              </div>
              <div className=" text-base leading-tight">
                sustaining a strong pipeline
                of innovative products
              </div>
            </div>
          </div>
        </div>
        <div className='flex bg-gray-100 pt-6 pl-6 flex-row justify-center gap-5 mb-2'>
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
      <div className='marginal text-lg' >
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
    </>
  )
}

export default Strategy44th_page