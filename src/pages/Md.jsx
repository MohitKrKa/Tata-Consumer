import React from 'react'
import { motion, AnimatePresence } from "framer-motion";
import Heading from '../components/Heading'
const slides = 
    {
      image: "/leader1.webp",
      title: "N.Chandrasekaran",
      desg: "Chairman",
      description:
        "Our strategic roadmap and the strong foundation we have laid for our business have yielded good results.",
      link: "/nature",
    }
const Md = () => {
  return (
    <div className='marginal text-lg'>
      <div className='py-10'>
      <Heading color="black" title="Chairman's Message" linecolor="#0072CE" />
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


      <div className='text-xl font-semibold text-[#06aeef] mb-2'>
      Dear Shareholders,
      </div>
      <div className='mb-3'>
      <p className='mb-3'>In today’s uncertain and complex global economic environment,
companies need to stay agile and dynamic. The need for strong,
resilient, and visible supply chains has never been more critical.
Emerging technologies such as Gen AI, robotics, and blockchain are
not just buzzwords but essential tools. The green energy transition
globally is making notable progress, and this transition is driving
substantial investment in technology, electric mobility, renewable
power, hydrogen and sustainable fuel. Companies must embed
these trends into their strategies, fostering a culture of agility and
continuous improvement.
</p>
<p className='mb-3'>
2025 started on a positive note with expectations of stable global
growth, falling inflation, and tailwinds from falling interest rates.
However, this global macro narrative shifted with rising concerns
around global growth and inflation as policy uncertainty rose
sharply with dramatic shifts in trade policy. The latest global
growth estimates have been revised down.
</p>
<p className='mb-3'>
Amidst a volatile global economic environment, India remains
one of the bright spots of economic growth. India’s long-term
growth is underpinned by strong demographic and economic
fundamentals and the ongoing structural reforms. India’s
near term macro-outlook remains strong with stable growth
expectation in 2025, falling inflation, and ongoing monetary
easing. India’s direct exposure to the US is limited as its goods
exports to the US are just over 2% of its GDP, one of the lowest
among emerging markets.
</p>
<p className='mb-3'>
Consumer trends such as premiumisation, health & wellness,
and convenience are gathering pace. Quick commerce has seen
exponential growth, yet physical distribution remains extremely
relevant at the same time.
</p>
<p className='mb-3'>
At Tata Consumer, we have adopted an omnichannel strategy to
tap into this large and growing opportunity. Gen Z and Millennials
are expected to contribute to an increasing share of consumption;
by some estimates, 76% of the total consumption by 2030. This
presents an opportunity for cooking aids, packaged food, healthier
& guilt-free snacking, and mini meal options, all of which we
have added to our portfolio in the last few years. The innovation
capability we have built along with our portfolio transformation
initiatives over the past few years, position us well to leverage
these emerging trends.
</p>
<p className='mb-3'>
Our overarching ambition is to evolve into a full-fledged fastmoving consumer goods (FMCG) company that keeps consumers
at the heart of everything it does.
</p>
<p className='mb-3'>
Since its formation, Tata Consumer Products has maintained
a robust growth trajectory, delivering a 5-year compounded
annualised growth rate of 13% in Revenue and 23% in Net Profit.
We are also seeding businesses for future growth by identifying and
nurturing additional growth engines to drive market expansion. In
tandem, we are unlocking synergies across our portfolio and building
future-ready capabilities by accelerating innovation, embedding
digital transformation, and nurturing talent.
</p>
<p className='mb-3'>
Our strategic roadmap and the strong foundation we have laid
for the business have yielded good results. This fiscal, our revenue
grew to ₹ 17,618 Crores, a 16% increase from the previous year,
driven by strong performance across segments. Meanwhile,
EBITDA reached ₹ 2,502 Crores, up 8%, despite significant input
cost inflation in India tea business. Additionally, we continued to
drive Balance Sheet efficiencies with the Net Working Capital for the
India business turning negative.
</p>
<p className='mb-3'>
We continued to strengthen our core business of tea and salt. Tata
Salt continues to be the market leader in branded salt and has
premiumised its portfolio with value-added offerings. Tata Tea
is among the market leaders in branded tea. The acquisition of
Organic India has enabled us to significantly expand our presence in
the health & wellness segment. Our initiatives in the foods segment
have allowed us to diversify our portfolio and leverage emerging
consumer trends. There have been several launches across the Tata
Sampann and Tata Soulfull portfolios aimed at expanding our target
addressable market and addressing evolving consumer needs.
The Capital Foods acquisition has helped us unlock new market
segments in the culinary and in-home consumption segments. Our
growth businesses (Tata Sampann, Tata Soulfull, Ready to Drink,
Capital Foods, Organic India), ended the year with over
Rs 3,200 Crores in revenue, accounting for 28% of our India
business, illustrating the rapid transformation of our portfolio.
Internationally, we recorded a strong performance, becoming the #2
branded tea player in the UK, up from #4 last year.
With the FMCG landscape evolving rapidly, it is critical for brands to be
present everywhere the consumer is. In India, we continued to make
strong progress in our sales and distribution expansion, with a total
reach of 4.4 million retail outlets. We completed the implementation
of a next-gen Distributor Management System to further enhance
salesforce productivity. Modern trade and E-commerce/Quickcommerce continue to be strong growth drivers, and we have started
building pharmacy and HoReCa channels.
</p>
<p className='mb-3'>
The integration of AI and machine learning into our supply chain has
further enhanced our ability to forecast demand, optimise inventory
levels, and unlock efficiencies. Simultaneously, we are embedding
robust processes to drive manufacturing excellence, ensuring our
operations remain at the forefront of industry standards.
Sustainability is deeply ingrained in our corporate ethos, guiding
our actions and decisions. We are steadfast in our commitment to
fostering a sustainable and equitable future, driven by a genuine
desire to create lasting positive impact. Our ambitious sustainability
targets for FY 2025-26, centered around ‘Better Sourcing’, ‘Better
Planet’, ‘Better Communities’, and ‘Better Nutrition’, reflect this
unwavering dedication. Aligned with the Tata Group’s ‘Project
Aalingana’, we are making significant strides in key areas such as
climate adaptation, circular economy, and community engagement.
We remain committed to embedding sustainability across our entire
value chain, ensuring that our efforts contribute meaningfully to the
well-being of our planet and its people.
</p>
<p className='mb-3'>
I would like to extend my gratitude to our employees, partners,
investors, community members, and all other stakeholders for
their trust and faith in Tata Consumer Products. As we navigate
the complexities of the present and anticipate the opportunities of
the future, I am deeply optimistic about the path ahead. The solid
foundation we have established and the progress we have achieved
thus far are not just milestones; they are the bedrock upon which
we will build our next phase of growth. Together, we will continue to
forge a future of enduring growth and impact.
</p>
      </div>
      <div className=''>
        <p className='text-xl font-semibold  text-[#06aeef]'>N. Chandrasekaran</p>
        <p>Chairman</p>
      </div>
    </div>
  )
}

export default Md