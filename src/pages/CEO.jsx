import React from 'react'
import { motion, AnimatePresence } from "framer-motion";
import Card from './Card';
import ReplicaCard from './ReplicaCard';
import Heading from '../components/Heading'
const slides =
{
  image: "/leader2.webp",
  title: "Sunil D’Souza",
  desg: "MD & CEO",
  description:
    "Over the last five years, our portfolio has grown to span multiple categories... and is well-positioned to cater to evolving consumer needs.",
  link: "/nature",
}
const CEO = () => {
  return (
    <div className='marginal text-lg'>
      <div className='py-10'>
      <Heading color="black" title="MD & CEO's Message" linecolor="#0072CE" />
      </div>
       <div className="relative mb-5">
              {/* <div className="absolute triangle-bottom-right w-10 h-30 bg-gradient-to-br from-[#00aeef] to-[#0db14b]"></div> */}
              <div className="absolute bottom-0 right-0 triangle-top-left w-20 h-70 bg-gradient-to-br from-[#00aeef] to-[#0db14b]"></div>
      
            <div className="flex flex-col  md:flex-row bg-gradient-to-tr from-[#f1f6fa] to-[#f0faf5] items-stretch overflow-hidde ">
              {/* Image Section */}
              <div className="md:w-1/2 w-full relative overflow-hidden">
                <AnimatePresence mode="wait">
                  <motion.img
                      key={slides.image}
                      src={slides.image}
                      alt={slides.title}
                    className="object-cover w-full h-full"
                    initial={{ opacity: 0, scale: 1.02 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.98 }}
                    transition={{ duration: 0.6, ease: "easeInOut" }}
                  />
                </AnimatePresence>
              </div>
      
              {/* Text Section */}
              <div className="md:w-1/2 w-full p-6 flex flex-col justify-center">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={slides.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    layout
                  >
                    <img src="/Quotation.webp" className="w-8" alt="Quote" />
                    <div className="relative py-2">
                      <p className="text-gray-600 text-lg mb-4">{slides.description}</p>
                      <img src="/Quotation.webp" className="absolute right-4 bottom-2 w-6 rotate-180" alt="Quote" />
                    </div>
      
                    <h2 className="text-lg font-bold text-[#38b9c7]">{slides.title}</h2>
                    <p className="text-gray-500 font-semibold text-sm">{slides.desg}</p>
                    <p className="text-gray-500 font-semibold text-sm">Tata Consumer Products</p>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
            </div>
      <div className='text-2xl text-[#06aeef] mb-3 font-semibold'>
        Delivering consistent results
        and strong progress in our
        transformation journey
      </div>
      <div className='text-2xl text-[#1368b4] font-semibold mb-2'>
        Dear Shareholders
      </div>
      <div className='mb-2'>
        Your unwavering support and trust
        have been a powerful catalyst for our
        growth at Tata Consumer Products.
        The theme of this year’s Annual Report
        — Growing Together. For Better —
        articulates the consistent progress we
        have made and our transformation
        into a multi-category FMCG company
        with a strong portfolio of food and
        beverage brands; especially with our
        stakeholders – consumers, employees,
        business partners, shareholders
        and community at the heart of this
        transformation.
        If we zoom out and look at the big
        picture, we would see the extent to
        which we have transformed over the
        years. We began our journey as a
        pioneer in packeted tea operations in
        the 1980s. However, we have been
        on a journey of rapid transformation
        since 2020 with the integration of
        the salt and foods business of Tata
        Chemicals, which laid the foundation
        to expand our target addressable
        market and enhance our portfolio.
        Over the last 5 years, our portfolio has
        grown to span multiple categories —
        tea, coffee, water, RTD, food staples,
        breakfast cereals, snacks, mini
        meals, cooking aids, condiments and
        herbal supplements, and is now well
        positioned to cater to the evolving
        consumer needs and aspirations.
        Equally important is the fact that
        we have built a strong foundation and future- ready capabilities in areas spanning sales and distribution,
        innovation, digitalisation and supply chain.
      </div>
      <div className='flex md:flex-row flex-col  gap-5 items-center'>
        <div className='md:w-[50%] h-auto '>
          <img src="/CEO1.webp" alt="" />
        </div>
        <div className='md:w-[50%] h-auto'>
          <div className='text-2xl text-[#1368b4] font-semibold mb-2'>
            CONSISTENT PERFORMANCE WITH
            STEADY GROWTH
          </div>
          <div className=''>
          <div className='flex md:flex-row flex-col md:justify-evenly md:items-center gap-5'>
            <div className="flex flex-col mt-2 w-[200px] mb-5">
              <h1 className="text-3xl text-[#4084c1] leading-none">INR 17,618 Crores</h1>

              <div class="flex items-center my-1">
                <div class="w-4 h-2 bg-blue-500 rounded-full"></div>
                <div class="h-0.5 w-full bg-blue-500"></div>
              </div>
              <div className=" text-sm leading-tight">
                Revenue from operations
                increased 16% against
                INR 15,206 Crores in FY24
              </div>
            </div>
            
            <div className="flex flex-col mt-2 w-[200px] mb-5">
              <h1 className="text-3xl text-[#4084c1] leading-none">14.2
                %</h1>

              <div class="flex items-center my-1">
                <div class="w-4 h-2 bg-blue-500 rounded-full"></div>
                <div class="h-0.5 w-full bg-blue-500"></div>
              </div>
              <div className=" text-sm leading-tight">
                FY25 EBITDA margin
              </div>
            </div>
            </div>

            <div className='flex justify-evenly items-center'>
              
            <div className="flex flex-col mt-2 w-[200px] mb-5">
  <h1 className="text-3xl text-[#4084c1] leading-none">29%</h1>

  <div className="flex items-center my-1">
    <div className="w-4 h-2 bg-blue-500 rounded-full"></div>
    <div className="h-0.5 w-full bg-blue-500"></div>
  </div>

  <div className="text-sm leading-tight">
    India Foods<br />
    business growth<sup>2</sup>
  </div>
</div>

            <div className="flex flex-col mt-2 w-[200px] mb-5">
              <h1 className="text-3xl text-[#4084c1] leading-none">10
                %</h1>

              <div class="flex md:flex-row flex-col items-center my-1">
                <div class="w-4 h-2 bg-blue-500 rounded-full"></div>
                <div class="h-0.5 w-full bg-blue-500"></div>
              </div>
              <div className=" text-sm leading-tight">
                India Beverages
                business growth
                <sup>1</sup>
              </div>
            </div>
          </div>
          </div>
            <p className='mb-5 text-xs'>1. India Beverages includes Packaged Beverages, Ready-to-Drink (RTD),
              and Organic India revenues (including overseas revenue).</p>
            <p className='mb-5 text-xs'>
              2. India Foods Includes Salt, Tata Sampann, Tata Soulfull and Capital
              Foods revenues (including overseas revenue).
            </p>
        </div>
      </div>
      <div>
        <div className='mb-3 text-2xl font-semibold text-[#1368b4]'>TRANSFORMING THE PORTFOLIO, EXPANDING THE ADDRESSABLE MARKET</div>
        <div>
          <p className='mb-2'>
            We have evolved into a multi-category
            Food & Beverage company. While
            strengthening our core businesses
            (tea, coffee, salt), we have added
            multiple growth vectors – Sampann
            (pantry staples), NourishCo Beverages
            (RTD), Tata Soulfull (millet-based
            snacks and mini meals), and our recent
            acquisitions of Capital Foods and
            Organic India.
          </p>
          <p className='mb-2 text-[#1368b4]'>
            Our India-focused portfolio has
            transformed significantly, with
            the growth businesses, such as
            Tata Sampann, RTD, Tata Soulfull,
            Capital Foods and Organic India,
            now accounting for 28% of our India
            business.
          </p>
          <p className='mb-2'>
            The consumer landscape in India is fast
            evolving due to growing urbanisation,
            increasing disposable incomes and
            rising aspirations, which have led to
            trends such as Health & Wellness,
            Convenience, and Premiumisation. Our
            brand portfolio is well positioned to
            unlock the opportunities this landscape
            presents.
          </p>
          <p className='mb-2'>
            To cater to the health & wellness trend,
            this fiscal year, we further strengthened
            our beverage portfolio with the launch
            of Tata Tea Gold Vita Care (vitamin
            enriched black tea), Immuno Chai (to
            help support the immune system) and
            instant mix Tetley Green Tea in low unit
            price packs to democratise green tea.
          </p>
          <p className='mb-2'>
            With the acquisition of Organic India,
            our portfolio has expanded to include a
            range of organic and herbal teas, organic
            food staples and herbal supplements. In
            the salt category, we further enhanced
            our offerings in the value-added space
            with the launch and scale-up of offerings
            such as Tata Salt Immuno (salt fortified
            with zinc) and Iron Health (salt with iodine plus iron). In our foods business,
            Tata Sampann continued its high-growth
            trajectory, while expanding into white
            spaces in dry-fruits and other pantry
            staples. Our food business offers a range
            of cold pressed oils under the ‘Simply
            Better’ brand. Tata Soulfull’s entire
            product range is based on millets, which
            have well known nutritional benefits and
            it has expanded into new categories such
            as no-maida rusk and cornflakes with
            millets.
          </p>
          <p className='mb-2'>To address the convenience trend, we
            have strengthened Tata Sampann’s
            portfolio with value added offerings.
            Our Easy Cook range of quick cooking
            channa and easily rollable millet
            flour address the growing need for
            convenience with no compromise on
            taste. Ching’s Secret has a range of
            food products and cooking aids to cater
            to the increased salience of global
            cuisines in in-home cooking, coupled
            with the need for convenience</p>
            <p className='mb-2'>
            We are premiumising our portfolio
            across categories in line with the
            premiumisation trend. In our core
            categories of tea and salt, we have
            launched value-added offerings. In line
            with the company’s premiumisation agenda, value-added salts grew 31%
            in FY25. The Organic India range offers
            organic teas and infusions and food
            products. Tetley’s Kombucha range
            is tailored for consumers who are
            health conscious and trend savvy. Tata
            Coffee launched a ready to drink cold
            brew and cold coffee range, aimed at
            addressing the growing preference
            for premium new coffee formats.
            In the café space, Tata Consumer’s
            partnership with Starbucks brings
            a premium coffee experience to
            consumers across its 479 stores.
            Tata Starbucks is now the largest café
            operator in India
          </p>
          <div className=' flex md:flex-row flex-col justify-center gap-5'>
          <div className='md:w-[60%]'> 
        
          
          <p className='mb-2'>
            In our International Business, we have
            expanded our portfolio with premium
            offerings- a range of Tetley black teas
            inspired by Britain’s favourite baked
            treats, a Ceylon and Kenyan tea blend
            from teapigs — our super-premium
            range and Tetley Chai Latte — a
            convenient instant spiced tea. We are
            strengthening Organic India’s presence
            in the US and other international
            markets to address the growing
            preference for organic products in the
            health & wellness space.
          </p>
          </div>
          <div className='md:w-[40%]'>
          <img src="/CEO2.webp" alt="" />
        </div>
        </div>
        </div>
       

      </div>
      <div className='mb-3'>
        <div className='mb-3 text-2xl font-semibold  text-[#1368b4] '>
          REINFORCING OUR DISTRIBUTION STRENGTH
        </div>
        <div className=' flex md:flex-row flex-col justify-center gap-5'>
          <div className='md:w-[50%]'>
            <p className='mb-2'>
          In India, we reach over 275 million
          households and distribute to 4.4 million
          retail outlets. To enable our growth
          ambitions, we have been expanding
          and strengthening our sales and
          distribution network over the past
          few years. We are widening our rural
          network and increasing the depth of
          our urban network. Split routes have
          been introduced in all towns with a
          population of over half a million to
          ensure effective assortment selling
          across our product range.
          </p>
          <p className='mb-2'>
          Consumers engage with Tata Consumer
          products in various categories across
          millions of outlets in General Trade, and
          alternate channels of Modern Trade,
          e-commerce and institutions. New
          channels (Food Services and Pharma)
          are being incubated to fuel growth,
          pilots have been completed and rollouts
          are in process.
          </p>
          
          </div>
          <div className='  md:w-[50%]'>
          <img className='' src="/CEO3.webp" alt="" />
        </div>
        </div>
        <div>
        Our assortments are tailored to meet
          the changing consumer needs and
          shopping behaviours in each retail
          channel, helping us establish leadership
          position in many categories. We have
          also devised a robust omnichannel
          strategy to provide consumers a unified
          retail experience.
          We have stepped up our salesforce
          capability significantly with a next
          gen Go-to-Market platform in India,
          designed to enhance salesforce
          productivity. Rollout was completed
          last year across our distributors and we
          are currently on a journey of enhancing
          the analytical and decision-making
          capabilities of our frontline through
          this platform. In addition, we have
          rolled out centralised planning and
          dispatch capabilities for our CFAs and
          an auto-replenishment system for
          our distributors to further streamline
          operations.
        </div>
        <div className='mt-2 text-[#1368b4]'>
        We reach over
<span className='text-2xl'> 275 million </span>
households and
distribute to
<span className='text-2xl'> 4.4 million </span>
retail outlets.
        </div>
      </div>
      
      <div className='flex md:flex-row flex-col justify-center gap-5 '>
        <div>
     <div className='text-2xl font-semibold text-[#1368b4] mb-2'>
     ACCELERATING INNOVATION
     </div>
     <div className='mb-2 '>
     As consumer aspirations rise, New
Product Development will need to
deliver products that offer relevant
differentiation and add value to
consumers. Our innovation to sales
ratio stood at 5.2% for FY 25, up
from 1.4% in FY 21 when we started
our journey. Our innovation pipeline
remains robust, with several valueadded products planned across
categories.
Our Nutrition Policy guides the
innovation agenda and is built
around three key pillars — Superior
Experiences (experiential food
and beverage products offering
an indulgence/treat),Nutritionally
Enhanced Offerings (educating
consumers about nutrition and
enabling healthier choices) and
Sustenance (products for regular
consumption known for their
holistic goodness).
     </div>
     </div>
     <div className=''>
      <img src="/CEO4.webp" alt="" />
     </div>
     </div>
     <div> We have further
strengthened our R&D capability
through science-backed disruptive
innovation, resulting in differentiated
products such as Tata Sampann’s easy
cook range, Tetley’s instant green tea
in powder format, Tata Soulfull’s no
maida rusk with millets and cornflakes
with millets.
In addition, we have fostered
strong partnerships with academic
institutions to further enhance our
research capabilities.</div>
     <div className='flex md:flex-row flex-col justify-center gap-5 '>
        <div className='md:w-[60%]'>
     <div className='text-2xl font-semibold text-[#1368b4] mb-2'>
     UNLOCKING VALUE FROM OUR
RECENT ACQUISITIONS
     </div> 
     <div className='mb-2'>
      <p>
     The integration of both our acquisitions
— Capital Foods and Organic India
was completed in record time, within
100 days of closing the respective
deals. We had substantial learnings
early on handling new categories and
channels, but we are exiting FY25 with
strong growth in both the businesses
and remain confident of accelerating
it further as we move forward. In
addition, we are starting to derive
significant synergy benefits in both
businesses.
</p>
<p>We have expanded Capital Foods’
product portfolio by foraying into
adjacencies such as Schezwan
ketchup, Sriracha sauce and Momo
chutney, catering to the growing
demand for bold, spicy flavours. 
    </p>

     </div>
     </div>
     <div className='md:w-[40%]'>
      <img src="/CEO5.webp" alt="" />
     </div>
     </div>
     <div className='mb-4'>
     The Food Services/ HoReCa channel
is another area of opportunity for the
Capital Foods portfolio that will fuel
growth  as we scale that channel going
forward.
Organic India has gone through
a brand refresh and the Tata
Masterbrand endorsement is being
integrated into its branding to further
strengthen its brand equity. The
acquisition of Organic India has
enabled Tata Consumer Products to
start developing a pharma channel,
that will not only drive the herbal
supplements and infusions portfolio
of Organic India, but also provide a
gateway for other relevant brands
from Tata Consumer Products’
portfolio. A structured rollout of
the channel is underway across 40
markets.
We have also accelerated the growth
of Organic India in international
markets with stronger e-commerce
execution in USA.
     </div>
     <div className='flex md:flex-row flex-col justify-center gap-5 mb-5 '>
        <div className='md:w-[70%]'>
     <div className='text-2xl font-semibold text-[#1368b4] mb-2'>
     STRENGTHENING
INTERNATIONAL BUSINESS
     </div> 
     <div className='mb-4'>
     Our international business delivered strong
performance with significantly improved
profitability, led by strong revenue
growth in the UK and earlier structural
interventions. In the UK, Tata Consumer
Products is now ranked as the #2 branded
tea player, up from #4 last year.
In USA, our coffee segment has
returned to growth, with stable market
share. Our teapigs brand continued
to witness robust growth, and its cold
brew variant was recognised as a top
trend for 2025 by Whole Foods Market.
The Canada business is expanding
steadily and Tetley is continuing to
maintain its market leadership.
With sustained investments in key
global markets, our international
business remains well-positioned for
long-term growth.
     </div>
     <div className="flex flex-col mt-2 w-[200px] mb-5">
        <h1 className="text-3xl text-[#4084c1] leading-none">No.2</h1>

        <div class="flex items-center my-1">
          <div class="w-4 h-2 bg-blue-500 rounded-full"></div>
          <div class="h-0.5 w-full bg-blue-500"></div>
        </div>
        <div className=" text-sm leading-tight">
          in the ‘Top 50 Most
          Sustainable Companies
          across sectors (India)’ in
          Business World’s IMSC
          rankings, 2024.
        </div>
      </div>
     </div>
     <div className='md:w-[30%]'>
      <img src="/CEO6.webp" alt="" />
     </div>
     </div>
     <div className='flex md:flex-row flex-col justify-center gap-5 '>
        <div className='md:w-[50%]'>
     <div className='text-2xl font-semibold text-[#1368b4] mb-2'>
     EMBEDDING SUSTAINABILITY
     ACROSS OUR BUSINESS
     </div> 
     <div className='mb-2'>
     Our Sustainability strategy, ‘For Better
Living,’ is centred around four key
pillars — Better Sourcing, Better
Planet, Better Communities and
Better Nutrition. In 2022, Tata
Consumer Products released its ESG
Strategy with long-term ambitions
for 2030 and 2040. In October 2023,
we publicly committed targets to be
achieved by FY 2026, reaffirming our
long-term ambitions.
We have been following through
on our commitments with action,
reporting annual progress on the
targets. Our inclusion in the S&P
Global Sustainability Yearbook 2025
is a testimony to our commitment
to embedding sustainability across
various facets of the organisation. 
     </div>
     </div>
     <div className='md:w-[50%]'>
      <img src="/CEO7.webp" alt="" />
     </div>
     </div>
     <div className='mb-2'>
     This
focus on strengthening ESG practices
has resulted in over 15% improvement
in Tata Consumer’s Sustainalytics
ESG Risk rating. The Company
has also been recognised as the
‘Most Sustainable Consumer Goods
Company (India)’ and No.2 in the
‘Top 50 Most Sustainable Companies
across sectors (India)’ in Business
World’s IMSC rankings, 2024.
     </div>
     <div className='mb-2 text-2xl font-semibold text-[#1368b4] '>
     NURTURING TALENT
     </div>
     <div className='mb-2'>
     No strategy can succeed without the
ownership and commitment of our
employees at every stage of the value
chain. Our teams and the expertise
they bring to the table remain critical to
our growth journey. A strong focus on
talent development, leadership pipeline
building, and employee engagement is
central to our growth agenda.
We nurture internal talent by providing
horizontal and vertical career growth
opportunities, broadening their
expertise and preparing them for
future leadership roles.
The Growth Mindset Behaviours
(GMBs), instituted as a means to
differentiate who we are and how
our stakeholders will experience us,
continue to ensure that we move swiftly towards our goal with purpose
and collective action. The GMBs are
the driving force behind creating a
collaborative and winning culture
essential for long-term value creation.
In the past year, we have undertaken
numerous initiatives to embed them
across the organisation. 
     </div>
      <div className='text-2xl font-semibold text-[#1368b4] mb-2'>
        CREATING
        ENDURING VALUE
      </div>
      <div className='mb-5'>
        As we cross new milestones of growth
        and sustainability, we draw strength
        from the foundational values of the
        Tata Group. Over the years, we have
        built the right infrastructure, multicategory F&B portfolio, best-in-class
        brands, omnichannel outreach and a culture of innovation and leadership to
        create enduring value.
        Before I conclude, I would like to
        convey my appreciation and gratitude
        to our Board members, employees,
        partners, shareholders, and the larger
        stakeholder fraternity for supporting
        us and keeping their precious faith in
        our vision and roadmap.
      </div>
      <div>
        <p className='text-xl text-[#16b2ef] mb-5'>Sunil D’Souza
        </p>
        <p className='mb-5'>
          MD & CEO
        </p>
      </div>
      <div className='mb-2'>
        <img src="/CEO8.webp" alt="" />
      </div>
    </div>
  )
}

export default CEO