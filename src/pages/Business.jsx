import React from 'react'
import Businesscard from './Businesscard'
import BusinessCard2 from './BusinessCard2'
import Heading from '../components/Heading'
const Business = () => {
    const obj=[{
      key:"#1",
        head1:"SUPPLY CHAIN RESILIENCE",
        head2:"OUR APPROACH",
        text:"Global supply chains face volatility from geopolitical tensions, trade restrictions, and commodity price swings, requiring resilient and agile strategies for continuity and cost optimisation.",
        img:"CEO9.webp",
        p1:"Strengthening supplier partnerships and diversifying sourcing strategies to reduce dependence on any single region.",
        p2:"Enhancing inventory management and logistics planning to mitigate potential supply chain disruptions. AI/ML driven price and quality forecasting.",
        p3:"Investing in technology and process efficiencies to optimise costs and improve resilience, such as an end-to-end digital sourcing solution for Tea procurement, being extended to Foods, and a next-gen tea blend optimiser."
    },
    {
      key:"#2",
        head1:"Sustainability focus and climate action",
        head2:"OUR APPROACH",
        text:"We recognise that environmental responsibility is essential not only for the planet but also for the longterm sustainability of our business. Our efforts in carbon reduction, responsible sourcing, waste management, and eco-friendly packaging stem from a strategic focus on building resilience and relevance in a changing world.",
        img:"CEO10.webp",
        p1:"Embedding ESG principles into business operations and decision-making. We announced our progress against targets and milestones for FY 2026 reaffirming our long term commitments.",
        p2:"Investing in circular economy initiatives, including sustainable sourcing and waste reduction.",
        p3:"Reducing our carbon footprint by adopting renewable energy solutions and enhancing energy efficiency." },
        {
          key:"#3",
            head1:"DIGITAL AND AI-LED TRANSFORMATION",
            head2:"OUR APPROACH",
            text:"The rise of digital technologies and Artificial Intelligence (AI) is reshaping the FMCG industry, revolutionising consumer engagement, supply chain management and operational efficiencies. AI-driven predictive analytics can enable robust demand forecasting, optimise production and reduce wastage. Additionally, AI-powered personalisation is transforming how brands interact with consumers, offering tailored experiences and product recommendations.",
            img:"CEO11.webp",
            p1:"Leveraging AI-powered insights for demand forecasting and supply chain optimisation.",
            p2:"Enhancing consumer engagement through digital personalisation and data-driven marketing. For example, Tata Tea Gold Vita Care’s AI powered campaign and Tata Tea Kanan Devan’s Thrissur Pooram activation using AI powered expression matching.",
            p3:"Integrating digital tools across operations to strengthen agility and improve decision-making."
        },
        {
            key:"#4",
            head2:"OUR APPROACH",
head1:"PREMIUMISATION PLAY AND VALUE-ADDED OFFERINGS",
text:"In India, the rise in household incomes, the middle class expansion, urbanisation, and exposure to global brands are giving rise to a more aspirational consumer base. This shift is leading to growth opportunities in the premium segment. To leverage this opportunity, businesses are focusing on innovation, premium branding and enhanced product experiences.",
img:"",
p1:"Expanding our premium product portfolio across core and emerging categories — value-added launches in Tata Salt and Tata Tea, Tata Simply Better Cold Pressed oils, Tata Lyfe+ Alkaline water.",
p2:"Accelerating the pace of innovation and launching new offerings that enhance taste, quality and health benefits.",
p3:"Strengthening brand positioning in high-growth premium segments through targeted marketing."
        },
        {
            key:"#5",
            head2:"OUR APPROACH",
            head1:"HEALTH AND WELLNESS-LED CONSUMPTION",
            text:"Rising health consciousness and awareness about nutrition, immunity-boosting ingredients and organic products is reshaping consumer choices. There is increasing demand for natural, organic, functional and Health & Wellness-focused food and beverages, driven by concerns over lifestyle diseases and focus on proactive well-being. Regulatory bodies are also pushing for more transparency in food labelling, encouraging brands to focus on healthier formulations.",
            img:"",
            p1:"Expanding our Health & Wellness portfolio with organic and functional products – for example, Organic India’s range of organic products, Tetley’s instant green tea, Tata Sampann’s Easy cook range, Soulfull’s no maida rusk.",
            p2:"Our approach to nutrition is deeply embedded in our innovation strategy, ensuring that our products are aligned with consumer demand for healthier choices. 29% of our innovation is Health & Wellness focused.",
            p3:"Acquiring and growing brands that can address new health and wellness trends – for example Tata Soulfull, Organic India."
        },
        {
            key:"#6",
            head2:"OUR APPROACH",
            head1:"OMNICHANNEL GROWTH AND EVOLVING RETAIL LANDSCAPE",
            text:"The retail ecosystem is undergoing rapid transformation with the rise of e-commerce, quick commerce and direct-to-consumer (D2C) models. Consumers are demanding convenience, speed and personalised shopping experiences across multiple touchpoints. However, traditional retail channels remain essential, particularly in a diverse country like India.",
            img:"CEO12.webp",
            p1:"Being present where the consumer is shopping",
            p2:"Strengthening our digital and e-commerce presence including quick commerce, through innovative online strategies. We have maintained our market leadership in the tea category. Also, e-commerce has become a key launchpad for new products—allowing faster concept validation and refinement.",
            p3:"Expanding and optimising our physical retail distribution network for seamless accessibility. We expanded our rural network and introduced split routes in all towns with over half a million population, to enable better assortment selling."
        },
        {
            key:"#7",
            head2:"OUR APPROACH",
            head1:"CHANGING CONSUMER DEMOGRAPHICS",
            text:"Younger generations, particularly Millennials and Gen Z, are reshaping consumption trends with their preference for authenticity, transparency and sustainability. These digital-native consumers favour brands that align with their values, provide personalised experiences and engage meaningfully across social and digital platforms. Additionally, urbanisation and changing lifestyles are influencing purchasing decisions, driving demand for innovative and experience-driven products.",
            img:"CEO13.webp",
            p1:"Enriching and expanding our portfolio to cater to emerging consumer aspirations and lifestyle needs. For example, Tetley Kombucha, Tata Coffee Grand Cold Coffee, Tata Soulfull’s snacking range, Ching’s Secret Siracha sauce and Momo chutney.",
            p2:"Strengthening digital marketing strategies to engage with younger, tech-savvy consumers.",
            p3:"Bolstering brand storytelling and communication." 
        },
        {
          key:"#8",
head1:"M&A AND STRATEGIC COLLABORATIONS",
head2:"OUR APPROACH",
text:"Mergers, acquisitions, and strategic collaborations are key growth drivers in FMCG, helping expand market presence, enter high-growth segments, and enhance innovation, sustainability, and digital capabilities.",
img:"",
p1:"Evaluating acquisition opportunities continually that align with long-term strategic goals. We completed integration of our recent acquisitions—Capital Foods and Organic India.",
p2:"Exploring partnerships to strengthen market position in emerging and high-potential categories. Ching’s Secret and PepsiCo’s Kurkure collaborated to launch a new Schezwan chutney flavoured Kurkure.",
p3:"Unlocking synergies in acquired businesses to drive growth and improve financial performance."

        }
]
  return (
    <div className='w-[90%] h-auto m-[5%]'>
       <div className='pb-10'>
      <Heading color="black" title="Business Landscape" linecolor="#0072CE" />
      </div>
      <div className='md:text-3xl text-xl text-[#16b2ef] mb-5'>Driving growth through
strategic agility</div>
<div className='mb-5'>
The global business landscape is transforming at a swift pace. This
transformation is the result of evolving consumer preferences, technological
advancements, regulatory changes and volatility in macroeconomic conditions.
We are integrating these insights into our business model to unlock new
avenues of growth and amplify value creation
</div>
{obj.map((board,index) => {
  if(board.key!=="#7"){
            return <Businesscard obj={board}/>
          }
          else{
            return <Businesscard obj={board}/>
          }
          })}  

    </div>
  )
}

export default Business
