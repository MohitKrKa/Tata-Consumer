import React from 'react'

const Strategy42nd_page = () => {
  const items = [
    {
      icon: "/270.webp",
      text: "Build top quartile distribution network through consistent everyday execution"
    },
    {
      icon: "/271.webp",
      text: "Strengthen and accelerate channels of the future (Modern Trade, E-Commerce, Quick-Commerce)"
    },
    {
      icon: "/272.webp",
      text: "Embed best-in-class processes across the organisation"
    },
    {
      icon: "/273.webp",
      text: "Step up cost savings and efficiency improvement across the value chain"
    },
  ];

  return (
    <>
      <div className="bg-[#f9f7f4]">
        <div className="grid marginal text-lg grid-cols-1 md:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-gray-300">
          {items.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center px-4 py-6 md:py-0"
            >
              <div className='w-12 h-16 flex items-center  mb-4'>
                <img src={item.icon} alt={`icon-${index}`} />
              </div>
              <p className=" text-gray-800">{item.text}</p>
            </div>
          ))}
        </div>
      </div>

      <div className='marginal text-lg   flex-row justify-center gap-5 mb-5'>
        <div className='w-full bg-gray-100 p-4'>
          <div className='text-2xl font-semibold mb-3 text-[#1368b4]'>ADOPTING BEST-INCLASS DISTRIBUTOR
            MANAGEMENT
            SYSTEM (DMS)</div>
          <div className='mb-2'>
            Tata Consumer Products has
            strengthened its distributor
            management with 'MAVIC'- a
            next gen Go-To-Market platform
            which provides real-time market
            intelligence and key insights into
            distributor sales and retail shelf
            activity. This collaboration is driving
            efficiency across Tata Consumer
            Products' extensive retail network.
            The platform's user-friendly
            design enables distributors and
            sales representatives to adopt
            it with minimal training, offering
            an enhanced experience similar
            to consumer-grade applications.
            This ease of use has also enabled
            significant reduction in distributor
            onboarding time to just 45 minutes,
            and new retailers can now be set up
            to place orders in under two minutes.
          </div>
          <div className="flex flex-col w-[200px] mt-10">
            <h1 className="text-3xl text-[#4084c1] leading-none">100%</h1>
            <div class="flex items-center my-2">
              <div class="w-4 h-2 bg-blue-500 rounded-full"></div>
              <div class="h-0.5 w-full bg-blue-500"></div>
            </div>
            <div className=" text-base leading-tight">
              MAVIC rollout completed in
              4 months across ~3,500+
              Distributors and ~10,000+
              Sub Distributors
            </div>
          </div>
        </div>
        <div className='w-full'>
          <div className='md:'>

            <div className='text-2xl font-semibold mb-2 mt-6 text-[#1368b4]'>DEEPENING AND WIDENING MARKET REACH</div>
            <div className='fle flex-row justify-center gap-5'>
              <div className='mb-2'>In our endeavour to strengthen
                distribution reach and enhance market
                penetration, we have significantly
                expanded our sales infrastructure.
                A robust sales framework supported
                by improved coverage will enable
                us to widen our rural network,
                while also strengthening the
                depth of assortments available in
                urban centres. We now have more
                distributors, super-stockists, subdistributors, and distributor sales
                representatives creating a robust
                network across both urban and
                rural territories. This infrastructure
                expansion also ensures consistent
                product availability and improved
                order fulfilment.</div>
              <div className=''>
                <div className='w-[60%] gap-8 md:flex items-center'>
                  <div className="flex flex-col w-[200px] mb-6">
                    <h1 className="text-3xl text-[#4084c1] leading-none">1,200+</h1>

                    <div class="flex items-center my-2">
                      <div class="w-4 h-2 bg-blue-500 rounded-full"></div>
                      <div class="h-0.5 w-full bg-blue-500"></div>
                    </div>
                    <div className=" text-base leading-tight">
                      New hires (feet on street)
                    </div>
                  </div>
                  <div className="flex flex-col w-[200px] mb-6">
                    <h1 className="text-3xl text-[#4084c1] leading-none">100</h1>
                    <div class="flex items-center my-2">
                      <div class="w-4 h-2 bg-blue-500 rounded-full"></div>
                      <div class="h-0.5 w-full bg-blue-500"></div>
                    </div>
                    <div className=" text-base leading-tight">
                      Additional super-stockists
                    </div>
                  </div>
                  <div>
                  </div>
                </div>
                <div className='text-xs font-bold'>Increase in Direct Reach</div>
              </div>
            </div>
          </div>
          <div className='flex md:flex-row flex-col mt-8 items-center gap-6'>
            <div className=''>
              <img src="/251.webp" className='w-full mx-auto' alt="" />
            </div>
            <div className=''>
              <img src="/dos/Page103.webp" className='' alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className='marginal text-lg'>
        <div className='md:flex flex-row items-end justify-between gap-5 mb-3 '>
          <div className='md:w-[40%] bg-gray-100 p-4'>
            <div className='text-xl font-semibold text-[#06aeef] mb-3'>RURAL NETWORK EXPANSION</div>
            <p className=''>We augmented the rural sales
              organisation to deepen coverage in
              focus geographies. This structural
              shift enables faster decision-making,
              tailored strategies for local markets
              and better defined career pathways
              for rural sales teams.
              <br /><br />
              Simultaneously, our Wholesale
              Channel has been reorganised to align
              with this expansion. Strengthening
              wholesale networks in rural pockets
              has proven vital to maintaining
              consistent product availability and
              driving volume.
            </p></div>
          <div className='md:w-[30%] flex flex-col bg-gradient-to-t from-gray-200 to-transparent justify-end mb-2'>
            <img src="/updated/104-IMG-2.webp" className='' alt="" />
          </div>
          <div className='md:w-[30%]'>
            <img src="/updated/104-IMG.webp" className='' alt="" />
          </div>
        </div>
        <div className='mt-16'>
          <div className='text-xl font-semibold text-[#06aeef] mb-3'>SHARPER URBAN FOCUS</div>
          <div className='mb-4'>To enhance execution in large cities, we introduced split routes across metros and towns with a population of over half a
            million. This reconfiguration enhances sales coverage, allowing dedicated salesforce for beverages and packaged foods,
            and a distinct salesforce for some of our new age brands. This ensures high-frequency servicing, effective range-selling, and
            better retailer engagement across diverse demographic clusters.</div>
          <div className='bg-gray-100 p-4'>
            <img src="/258.webp" className='w-[90%]' alt="" />
          </div>
        </div>
      </div>
      <div className='marginal text-lg md:flex bg-gray-100 !p-4 flex-row justify-center gap-6'>
        <div className='md:w-[80%]'>
          <div className='text-2xl font-semibold text-[#1368b4] mb-3'>
            ENHANCED EMPHASIS ON CHANNELS OF THE FUTURE
          </div>
          <div className='mb-2'>
            As India's retail landscape evolves, we are amplifying our presence in modern
            trade, while harnessing e-commerce and quick commerce to enhance our reach
            across consumer cohorts.
          </div>
          <div className='flex md:flex-row flex-col justify-center gap-5'>
            <div>
              <div className='text-xl font-semibold text-[#06aeef] mb-3'>MODERN TRADE</div>
              <div className='mb-2'>
                Strengthened alliances with regional
                chains such as Vijeta, Ratnadeep,
                and Vishal Megamart. Activities like
                assortment optimisation, in-store
                promoter coverage, and sampling have
                led to robust performance.
              </div>
              <div className="flex flex-col w-[200px] mb-2">
                <h1 className="text-3xl text-[#4084c1] leading-none">18%</h1>
                <div class="flex items-center my-2">
                  <div class="w-4 h-2 bg-blue-500 rounded-full"></div>
                  <div class="h-0.5 w-full bg-blue-500"></div>
                </div>
                <div className="text-sm leading-tight">
                  Modern Trade
                  growth in FY25*
                </div>
              </div>
              <div className='text-bold  mt-30'>*Organic growth</div>
            </div>
            <div>
              <div className='text-xl font-semibold text-[#06aeef] mb-3'>E-COMMERCE AND
                QUICK COMMERCE</div>
              <div className='mb-2'>
                E-commerce, especially Quick Commerce,
                has emerged as a pivotal growth channel,
                enabling us to extend our market leadership
                while accelerating innovation. We have
                maintained our leadership position in the
                Tea category (MAT Mar' 25), and with the
                Organic India portfolio, we now lead the
                premium Green Tea and Herbal segment on
                major e-commerce platforms. Additionally,
                e-commerce has become a key launchpad
                for new products—contributing ~15% of
                innovation-to-sales (i2S) in e-commerce—
                allowing faster concept validation and
                refinement.
              </div>
              <div className="flex flex-col w-[200px] mb-2">
                <h1 className="text-3xl text-[#4084c1] leading-none">57%</h1>

                <div class="flex items-center my-2">
                  <div class="w-4 h-2 bg-blue-500 rounded-full"></div>
                  <div class="h-0.5 w-full bg-blue-500"></div>
                </div>
                <div className=" text-sm leading-tight">
                  E-commerce growth*
                </div>
              </div>

            </div>
          </div>
        </div>
        <div className='md:w-[30%]'>
          <img src="/254.webp" className='md:w-[70%]' alt="" />
        </div>
      </div>
      <div className='marginal text-lg md:flex flex-row justify-center gap-5'>
        <div className='md:w-[50%]'>
          <img src="/260.webp" className='' alt="" />
        </div>
        <div className='md:w-[30%]'>
          <div className='text-2xl font-semibold text-[#1368b4] mb-3'>IMPLEMENTING
            AUTOMATIC
            REPLENISHMENT
            SYSTEM</div>
          <div className='mb-2'>We have implemented an Automatic
            Replenishment System (ARS) across
            both rural and urban areas, leveraging
            automatic triggers to replenish stock
            keeping units (SKUs) as soon as they
            are billed. This mechanism improves
            range availability—especially for
            smaller or niche SKUs —and curbs
            stockouts at distributor points.</div>
          <div className='text-xl font-semibold text-[#06aeef] mb-3'>
            IMPROVED PROCESS
            EFFICIENCY
          </div>
          <div className='mb-2'>
            ARS reduces manual workload and
            brings tighter alignment between
            actual demand and replenishment
            cycles. Its automated approach not
            only improves service metrics, but also
            restricts excess inventory, improving
            ROIs for our distributor partners.
          </div>
        </div>
      </div>
      <div className='marginal text-lg'>
        <div className='text-2xl font-semibold text-[#1368b4] mb-1'>DIGITISATION AND PROCESS OPTIMISATION ENABLING
          OPERATIONAL EFFICIENCIES</div>
        <div className='mb-2'>
          The past year saw strong progress in enhancing operational efficiencies through the integration of businesses, technology
          adoption and supply chain standardisation. We continue to focus on improving our processes, optimising our costs and
          embedding digital solutions across key business areas.
        </div>
        <div className='text-xl font-semibold text-[#06aeef] mb-3'>
          SEAMLESS INTEGRATION OF CAPITAL FOODS AND ORGANIC INDIA
        </div>
        <div className='flex md:flex-row flex-col justify-center gap-6 bg-gray-50 p-4'>
          <div>
            <img src="/261.webp" alt="" />
          </div>
          <div>
            <img src="/262.webp" alt="" />
          </div>
          <div>
            <img src="/263.webp" alt="" />
          </div>
          <div>
            <img src="/264.webp" alt="" />
          </div>
        </div>
      </div>
      <div className='marginal text-lg'>
        <div className='text-xl font-semibold text-[#06aeef] mb-3'>
          LEVERAGING ARTIFICIAL
          INTELLIGENCE (AI) FOR
          SMARTER SOURCING
        </div>
        <div className='flex md:flex-row flex-col justify-center gap-5'>
          <div className='md:w-[60%]'>
            <div className='mb-2 text-[#02adbd]'>
              End-to-end digital
              sourcing solution
            </div>
            <div className='mb-2'>
              An in-house, industry-first digital
              platform has enhanced efficiency
              and controls in tea procurement,
              enabling seamless backward
              integration with vendor partners.
              This approach is now being extended
              to food procurement, leveraging
              insights from tea sourcing to improve
              transparency and decision-making.
            </div>
            <div className='mb-2 text-[#02adbd]'>
              AI/ML-driven price and
              quality forecasting
            </div>
            <div className='mb-2'>
              Machine learning models built on
              this platform are optimising tea
              procurement by improving price
              forecasting and quality predictions,
              reducing variability and enhancing
              procurement precision.
            </div>
            <div className='mb-2 text-[#02adbd]'>
              Next-gen tea blend optimiser
            </div>
            <div className='mb-2'>
              A state-of-the-art blend optimisation
              system has been implemented in
              India to efficiently manage growing
              business complexity and supply
              chain dynamics, ensuring consistency
              and adaptability in blends.
            </div>
          </div>
          <div className='md:w-[40%] '>
            <img src="/266.webp" alt="" />
          </div>
        </div>
      </div>
      <div className='marginal text-lg'>
        <div className='text-xl font-semibold text-[#06aeef] mb-3'>
          IMPROVING SUPPLY CHAIN RESILIENCE
        </div>
        <div className='mb-3'>
          With growing market demand and the need for cost-efficient service delivery,
          we have streamlined our supply chain processes by leveraging standardisation
          and digital transformation. We are integrating technology to enhance visibility of
          demand-supply dynamics, optimise logistics and improve inventory management.
          Integrated logistics and warehousing have been consolidated to enhance
          operational efficiency, ensuring cost optimisation and improved service levels.
        </div>

        <div className='md:flex  md:flex-row flex-col justify-center gap-5'>
          <div className='md:w-[30%] bg-gray-100 p-4'>
            <img src="/265.webp" className='w-[80%] mx-auto' alt="" />
          </div>
          <div className='md:w-[70%]'>
            <div className='flex flex-col justify-center gap-2 '>
              <div>
                <div className='text-[#02adbd] mb-2'>Cost optimisation initiatives</div>
                <div>
                  <ul className='list-disc ml-6'>
                    <li className='mb-2'>Integrated logistics and
                      warehousing for Capital Foods
                      and Organic India to streamline
                      operations and reduce costs.</li>
                    <li className='mb-2'>Optimisation of logistics network
                      across India to reduce total
                      delivered costs.</li>
                    <li className='mb-2'>
                      Reduction in slow-moving
                      inventory to free up working
                      capital.
                    </li>
                  </ul>
                </div>
              </div>
              <div>
                <div className='text-[#02adbd] mb-2'>Technology-driven supply chain
                  transformation</div>
                <div>
                  <ul className='list-disc ml-6'>
                    <li className='mb-2'>Centralised warehouse planning
                      and management implemented,
                      reducing reliance on manual
                      processes.</li>
                    <li className='mb-2'>A Transportation Management
                      System (TMS) introduced in
                      primary logistics to improve
                      operational visibility and efficiency.</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="flex flex-col w-[200px] my-4">
              <h1 className="text-3xl text-[#4084c1] leading-none">90%+</h1>

              <div class="flex items-center my-2">
                <div class="w-4 h-2 bg-blue-500 rounded-full"></div>
                <div class="h-0.5 w-full bg-blue-500"></div>
              </div>
              <div className=" text-base leading-tight">
                Modern Trade and
                E-commerce
              </div>
            </div>
            <div className="flex flex-col w-[200px]">
              <h1 className="text-3xl text-[#4084c1] leading-none">94%+</h1>

              <div class="flex items-center my-2">
                <div class="w-4 h-2 bg-blue-500 rounded-full"></div>
                <div class="h-0.5 w-full bg-blue-500"></div>
              </div>
              <div className=" text-base leading-tight">
                General Trade
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='marginal text-lg md:flex flex-row justify-center gap-5'>
        <div className='md:w-[65%]'>
          <div className='text-xl font-semibold text-[#06aeef] mb-1'>ENHANCING MANUFACTURING EFFICIENCIES THROUGH
            INTERNET OF THINGS (IOT)</div>
          <div className='mb-2'>
            We have implemented targeted IoT-driven initiatives to enhance manufacturing
            efficiency and energy management.
          </div>
          <div className='mb-1 text-[#02adbd]'>
            IoT-enabled Energy Monitoring System, Vietnam Plant
          </div>
          <div className='mb-2'>
            The Energy Monitoring System assesses and collects data from different sections
            in real time, enabling better energy usage analysis and efficiency improvements
          </div>
          <div className='mb-2'>
            <img className='' src="/268.webp" alt="" />
          </div>
          <div className='mb-1 text-[#02adbd]'>
            Optimised Roasting Operations, Theni Plant
          </div>
          <div className='mb-2'>
            We implemented IoT-enabled monitoring to improve roasting consistency and
            enhance throughput efficiency
          </div>
          <div className='mb-1'>
            <img src="/269.webp" alt="" />
          </div>
        </div>
        <div className='md:w-[35%] bg-gray-100 p-4'>
          <div className='text-xl font-semibold text-[#06aeef] mb-1'>ENSURING
            WORKPLACE SAFETY</div>
          <div className='mb-2'>
            Ensuring workplace safety remains a
            core priority, with strategic initiatives
            implemented to reinforce compliance
            and drive cultural change.
          </div>
          <div className='mb-1'>
            <div className='mb-1 text-[#02adbd]'>
              Governance and Compliance
            </div>
            <ul className='list-disc ml-6'>
              <li className='mb-1'>Structured oversight with
                Governance Councils, elevating
                safety excellence across the
                organisation.</li>
              <li className='mb-1'>Strengthened incident
                management through proactive
                reporting and risk mitigation.</li>
              <li className='mb-1'>
                Reinforced a culture of safety with
                reward programmes, encouraging
                safe workplace behaviours.
              </li>
              <li className='mb-1'>
                Enhanced machine safety with risk
                reviews and systematic mitigation
                measures.
              </li>
            </ul>
          </div>
          <div>
            <div className='my-4 text-xl text-[#02adbd]'>Improving efficiency with the
              Digital EHS platform</div>
            <div className='mb-2'>A Digital EHS (Employee Health &
              Safety) platform on web and mobile
              has been introduced to drive efficiency
              in safety management. It offers:</div>
            <div className='bg-white p-4'>
              <img src="/267.webp" alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Strategy42nd_page