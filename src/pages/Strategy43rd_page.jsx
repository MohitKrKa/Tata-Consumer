import React from 'react'
const items = [
    {
      icon: "/278.webp",
      text: "Align with the Tata Consumer Products North Star"
    },
    {
      icon: "/279.webp",
      text: "Invest in mission critical skills"
    },
    {
      icon: "/280.webp",
      text: "Be the Employer of Choice – build internal talent, attract and retain the best talent"
    },
    {
      icon: "/281.webp",
      text: "Embed growth mindset behaviours"
    },
  ];
   const Strategy43rd_page = ({
     bgColor = "#0066b3",
     image = "/strategy/3.webp",
     heading1 = "a",
     highlight1 = "Create  ",
     heading2 = "",
     highlight2 = "future-ready",
     subheading = "organisation",
     footerText = "— Integrated Annual Report 2024–25",
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
          <div className="font-extrabold mb">
              <h1 className="text-[3rem] md:text-[5.5rem] m-0">{highlight1}</h1>
            </div>
            <div className="text-[2rem] md:text-[3rem] font-medium">
              <h1>{heading1}</h1>
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

      {/* Footer */}
    </div>
       <div className="bg-[#f9f7f4] px-4 md:px-16 py-8">
          <div className="grid grid-cols-1 md:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-gray-300">
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
        <div className='w-[90%] mx-[5%] px-3 mb-5 mt-5'>
<div className='mb-2'>A future-ready organisation is one that can balance scale with agility, transformation with continuity, and ambition
with execution. At Tata Consumer Products, we are shaping a workforce that is aligned with our long-term vision while
continuously evolving to stay ahead of industry shifts. The TCP North Star anchors this journey, supported by initiatives that
strengthen leadership, accelerate skill-building, and create a high-performance culture that drives meaningful impact.</div>
<div className='mb-5'>
<img src="/282.webp" alt="" />
</div>
<div className='flex flex-row justify-center gap-5 mb-3'>
    <div className='w-[70%]'>
        <div className='text-2xl text-[#1368b4] mb-2 font-semibold '>THE TATA CONSUMER
        PRODUCTS’ NORTH STAR</div>
        <div className='mb-2'>
        Tata Consumer Products’ journey of growth and transformation
is anchored around the six Strategic Pillars, underpinned by
our ambition to be the premier global FMCG company from the
Tata Group, and our vision of building better lives and thriving
communities. With a view to align our people across India and the
international markets, around a unifying theme, we developed the
TCP North Star. This charts the direction we are headed in, the
pace at which we want to go, the breadth of our ambition, and the
Growth Mindset Behaviours (GMB) that everyone needs to display,
whilst living our core values and the Tata Code of Conduct. 
        </div>
        <div className=''>
            <img src="/284.webp" alt="" />
        </div>
    </div>
    <div className='w-[30%]'>
        <div className='text-3xl text-[#1368b4]'>Who are we?</div>
        <img src="/283.webp" alt="" />
    </div>
</div>
<div>
<div className='text-3xl text-[#1368b4]  mt-5'>How will we win?</div>
<div className='flex flex-row justify-center gap-5'>
<div className=''>
    <img src="/285.webp" alt="" />
</div>
<div className=''>
    <img src="/286.webp" alt="" />
</div>
</div>
</div>
<div>
    <div className='text-xl text-[#06aeef] mb-3 font-semibold '>CHARTING A PATHWAY FROM ‘GOOD TO GREAT’ </div>
    <div className='flex flex-row justify-center gap-5 items-baseline'>
        <div className='w-[35%]'>
            <div className='mb-4'>Our leaders play a key role in presenting a
compelling vision and inspiring people to work
towards a common goal. A key initiative in
this direction is the Senior Leadership Forum,
launched in May 2024. This platform brings
together the top 150+ senior leaders to
collectively shape Tata Consumer Products’
future direction and outline the path to becoming
a premier global FMCG company. The second
edition of this forum was held in January 2025,
bringing the leadership team together to assess
outcomes achieved, identify key improvement
areas and refine ways of working. A virtual
edition of the same brought together leaders from
across international markets and helped rally
around the theme of ‘Build Better Together’. </div>
<div>
    <img src="/287.webp" alt="" />
</div>
        </div>
        <div className='w-[65%]'>
            <div className='font-bold mb-3'>Through open discussions and diverse
            perspectives, the forum:</div>

        
        <div className='flex flex-row  justify-between gap-2 mb-3 flex-'>
        <div className="text-center px-4 mb-2">
  {/* Line + Capsule Layout */}
  <div className="relative flex items-center justify-center mb-1">
    {/* Left line (shorter) */}
    <div className="h-0.5 w-6 bg-gradient-to-r from-green-500 to-sky-500" />

    {/* Capsule with inner line */}
    <div className="relative">
      {/* Green capsule */}
      <div className="w-15 h-1 bg-green-500 rounded-full z-10" />

      {/* Line inside the capsule to connect it seamlessly */}
      <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-green-500 to-sky-500 -z-10 transform -translate-y-1/2" />
    </div>

    {/* Right line (longer) */}
    <div className="h-0.5 w-30 bg-gradient-to-r from-green-500 to-sky-500" />
  </div>

  {/* Gradient Heading */}
  <h2 className="text-2xl font-bold bg-gradient-to-r from-green-500 to-sky-500 text-transparent bg-clip-text text-left">
    Strengthened
  </h2>

  {/* Subheading */}
  <p className="text-left ">
    alignment on strategic priorities
  </p>
</div>
<div className="text-center px-4 mb-2">
  {/* Line + Capsule Layout */}
  <div className="relative flex items-center justify-center mb-1">
    {/* Left line (shorter) */}
    <div className="h-0.5 w-6 bg-gradient-to-r from-green-500 to-sky-500" />

    {/* Capsule with inner line */}
    <div className="relative">
      {/* Green capsule */}
      <div className="w-15 h-1 bg-green-500 rounded-full z-10" />

      {/* Line inside the capsule to connect it seamlessly */}
      <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-green-500 to-sky-500 -z-10 transform -translate-y-1/2" />
    </div>

    {/* Right line (longer) */}
    <div className="h-0.5 w-30 bg-gradient-to-r from-green-500 to-sky-500" />
  </div>

  {/* Gradient Heading */}
  <h2 className="text-2xl font-bold bg-gradient-to-r from-green-500 to-sky-500 text-transparent bg-clip-text text-left">
    Reinforced
  </h2>

  {/* Subheading */}
  <p className="  max-w-xl mx-auto  text-left">
    Collective commitment towards the TCP North Star and to cascading the same
    across the organisation
  </p>
</div>

<div className="text-center px-4 ">
  {/* Line + Capsule Layout */}
  <div className="relative flex items-center justify-center mb-1">
    {/* Left line (shorter) */}
    <div className="h-0.5 w-6 bg-gradient-to-r from-green-500 to-sky-500" />

    {/* Capsule with inner line */}
    <div className="relative">
      {/* Green capsule */}
      <div className="w-15 h-1 bg-green-500 rounded-full z-10" />

      {/* Line inside the capsule to connect it seamlessly */}
      <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-green-500 to-sky-500 -z-10 transform -translate-y-1/2" />
    </div>

    {/* Right line (longer) */}
    <div className="h-0.5 w-30 bg-gradient-to-r from-green-500 to-sky-500" />
  </div>

  {/* Gradient Heading */}
  <h2 className="text-2xl font-bold bg-gradient-to-r from-green-500 to-sky-500 text-transparent bg-clip-text text-left">
  Encouraged
  </h2>

  {/* Subheading */}
  <p className="text-left">
  cross-functional collaboration
  </p>
</div>
</div>
<div className=''>
    <img src="/288.webp" alt="" />
</div>
        </div>
    </div>
</div>
        </div>
       
       </>
     );
   };
   export default Strategy43rd_page;

   
    {/* <div className='w-[90%] h-auto m-[5%] flex md:flex-row flex-col justify-center items-center md:gap-15 gap-5'>
    <div className='md:w-[50%] h-auto '>
<img className='' src="/277.webp" alt="" />
</div>
<div className='md:w-[50%] h-auto flex flex-col md:gap-15 gap-5'>
<div className='md:text-5xl text-2xl text-[#009bdf]'>
Create a future-ready organisation
</div>
<div className='flex flex-row justify-center gap-15 border-2 p-5 bg-[#f1eee9] flex-wrap'>
<div>
    <img className='w-16' src="/278.webp" alt="" />
    <p className='w-40'>Align with the Tata
Consumer Products
North Star</p>
</div>
<div>
    <img className="w-16" src="/279.webp" alt="" />
    <p className='w-40'>Invest in mission
    critical skills</p>
</div>
<div>
    <img className='w-16' src="/280.webp" alt="" />
    <p className='w-40'>Be the Employer of
Choice – build internal
talent, attract and retain
the best talent</p>
</div>
<div>
    <img className='w-16' src="/281.webp" alt="" />
    <p className='w-40'>Embed growth
mindset
behaviours</p>
</div>
</div>
</div>
</div>
<div className='w-[90%] h-auto m-[5%]'>
<Card obj={{name:"THE TATA CONSUMER PRODUCTS’ NORTH STAR",
text:"Tata Consumer Products' growth journey is guided by six Strategic Pillars and the TCP North Star, uniting global teams under a shared ambition to be a leading FMCG brand while fostering growth, values, and thriving communities.",
img:"/282.webp"}}/>
</div>
<div className='w-[90%] h-auto m-[5%] flex md:flex-row flex-col justify-center gap-10'>
    <div className='md:w-[25%] h-auto'>
    <div className='text-3xl text-[#1267b3] flex justify-center'>Who are we?</div>
    <div>
        <img className='w-90' src="/283.webp" alt="" />
    </div>
    </div>
    <div className='md:w-[75%] h-auto'>
    <div className=' flex justify-center text-[#2d76bb] text-3xl'>
    How will we win?
    </div>
    <div className='flex md:flex-row flex-col justify-center items-center '>
    <div className=''>
        <img className='' src="/285.webp" alt="" />
    </div>
    <div>
        <img src="/286.webp" alt="" />
    </div>
    </div>
    </div>
</div>
<div className='w-[90%] h-auto m-[5%] flex md:flex-row flex-col justify-center  md:gap-10 gap-5'>

    <Card obj={{name:"CHARTING A PATHWAY FROM ‘GOOD TO GREAT",img:"/287.webp",text:"Our leaders play a key role in presenting a compelling vision and inspiring people to work towards a common goal. A key initiative in this direction is the Senior Leadership Forum, launched in May 2024. This platform brings together the top 150+ senior leaders to collectively shape Tata Consumer Products’ future direction and outline the path to becoming a premier global FMCG company. The second edition of this forum was held in January 2025, bringing the leadership team together to assess outcomes achieved, identify key improvement areas and refine ways of working. A virtual edition of the same brought together leaders from across international markets and helped rally around the theme of ‘Build Better Together"
}}/>
    



</div>
<div className='w-[90%] h-auto m-[5%] flex md:flex-row flex-col justify-center gap-10'>
<div className='flex flex-col justify-center gap-5 md:w-[50%] h-auto items-center'>
<div className='mb-5'>Through open discussions and diverse
perspectives, the forum:</div>
<div>
    <img className='md:w-50 max-w-[70vw]' src="/289.webp" alt="" />
</div>
<div>
    <img className='md:w-50 max-w-[70vw]' src="/290.webp" alt="" />
</div>
<div>
    <img className='md:w-50 max-w-[70vw]' src="/291.webp" alt="" />
</div>
</div>
<div className='md:w-[50%] h-auto flex justify-center '>
<img className='ma-w-[90vw] border-2' src="/288.webp" alt="" />
</div>
</div>
<div className='w-[90%] h-auto m-[5%]'>
<div className='mb-5 text-xl text-[#4a8ac4]'>BUILDING AN ADAPTIVE ORGANISATION</div>
<div className='mb-5'>Given the uncertainties, challenges and changes in the macro-economic environment, the leadership at Tata Consumer
Products (TCP) recognises the need to undertake a regular review of the wider organisation and align the same to the
strategic pillars. Equally, given the intent of organic and inorganic growth, we recognise that the true measure of success
in integrating different businesses extends beyond operational alignment and market expansion. It hinges on the ability to
integrate people, fostering a unified and inclusive culture. Over the past year, TCP has expanded; integrating new businesses
and multiple operating locations, worldwide. This includes welcoming Capital Foods, Organic India, and Tata Coffee, adding
to its earlier acquisitions of Tata Soulfull, NourishCo, and Tata SmartFoodz. The heart of this transformation lies in how TCP
navigates the complexities of blending multi-legacy and multi-generational organisations, creating a cohesive, inclusive, and
future-ready environment.</div>
<div className='flex md:flex-row flex-col justify-center  md:gap-10 gap-5'>
<div className='md:w-[50%] h-auto'>
<div className='mb-5 text-xl text-[#55c2f3]'>DEVELOPING CAPACITY AND

CAPABILITY FOR A FUTURE-
READY BUSINESS</div>
<div className='mb-5'>We have reimagined our organisation
and invested in requisite capacity
as well as in infusing capabilities
ahead of the curve . This is aimed at
enabling the organisation to grow
at pace, whilst transforming into a
sector-leading multi-category FMCG
organisation . This also enables
our ambition on innovation through
streamlining processes and upskilling
talent across the value chain. Across
India and international markets, we
have conducted regular organisational
reviews and implemented new
operating models, such as the
6-cluster structure for India Sales, the
Direct Sales model for the USA, and
the category-based Quality Assurance
and Regulatory Affairs (QARA)
organisation in India.</div>
</div>
<div className='md:w-[50%] h-auto flex justify-center'>
<img className='w-80' src="/292.webp" alt="" />
</div>
</div>
<Card obj={{name:"CULTURAL CONVERGENCE",text:"Rather than imposing a ‘one-size-fits-all’ model, Tata Consumer Products adopts a strategy of weaving a strong cultural fabric for the organisation and incorporating diversity of heritage and identity. Shared values and a common vision help shape a unified sense of belongingness, without losing one’s core identity. The result is a celebration of the diversity, fostering a sense of shared ownership and pride among employees.",img:"/293.webp"}}/>
<Card obj={{name:"BECOMING AN EMPLOYER OF CHOICE",text:"Attracting, developing, and retaining diverse talent is key to scaling our organization and building a future-ready enterprise.",img:"/294.webp"}}/>
<Card obj={{name:"EMERGING LEADERS PLUS",text:"Emerging Leaders Plus is a flagship 12-month management trainee program in India that nurtures high-potential talent through skill-building, cross-functional exposure, and executive",img:"/295.webp"}}/>
<div className='flex md:flex-row flex-col justify-center items-center gap-5'>
<div className='md:w-[50%] h-auto md:m-[5%]'>
    <div className='text-xl text-[#4cc1f3] mb-5'>CONNECTING WITH BRIGHT MINDS</div>
    <div className='mb-5'>The fourth edition of our Business
Challenge Competition ‘Growing Beyond
Better’ helps us connect with bright minds
from premier business schools, offering a
platform to tackle real-world challenges
within Tata Consumer.</div>
<div className='p-5 bg-[#e9f7fe]'>
   <p>The competition garnered an impressive</p>
   <p><span>13,400</span> registrations, a remarkable</p>
   <p><span>335%</span>increase compared to the
   previous year and attracted interest from</p>
   <p><span>472</span> B-School campuses.</p> 
</div>
</div>
<div className='md:w-[50%] h-auto mb-5'>
    <img src="/296.webp" alt="" />
</div>
</div>
<div className=''>
<div className='text-xl text-[#2ebaf1] mb-5'>TATA GLOBAL INTERNSHIPS</div>
<div className='mb-5'>In partnership with international institutions and the Tata
Group HR team, we engage interns in key international
markets, such as the US and the UK.</div>
<div className='text-xl text-[#2ebaf1] mb-5'>ENABLING GROWTH
THROUGH INTERNAL MOBILITY</div>
<div className='mb-5'>We prioritise internal talent development by creating
pathways for both horizontal and vertical career
progression. This approach prepares employees for
leadership roles. A structured assessment process
helps identify individuals with high potential to take
on larger responsibilities.
Focused learning, exposure to key business areas
and career mobility ensure that talent within the
organisation continues to evolve, strengthening our
leadership pipeline and driving long-term growth.</div>
<div className="flex flex-col mt-2 w-[200px] mb-5">
            <h1 className="text-3xl text-[#4084c1] leading-none">33%</h1>

            <div class="flex items-center my-1">
              <div class="w-4 h-2 bg-blue-500 rounded-full"></div>
              <div class="h-0.5 w-full bg-blue-500"></div>
            </div>
            <div className=" text-sm leading-tight">
            of employees in our leadership
pipeline have taken on new
roles within the organisation
over the past year
            </div>
           
          </div>
</div>
<Card obj={{name:"TRAILBLAZERS’ TRACKS",text:"This is an initiative that highlights the journeys of our leadership pipeline candidates as they take on new roles within the organisation. It reflects our focus on internal talent development, career mobility and leadership growth, while encouraging adaptability and continuous learning.",img:"/299.webp"}}/>
</div>
<div className='w-[90%] h-auto m-[5%]'>
<div className='text-xl text-[#1567b3] mb-5'>RAZOR-SHARP FOCUS
ON SKILLS</div>
<div className='mb-5'>As we advance towards our ambition
of becoming a global premier FMCG
organisation, strengthening our
capabilities is essential to sustaining
our competitive advantage.
Leadership development remains a
core priority, as we continue to groom
individuals who can drive strategic
growth. We consistently enhance
skills across the organisation,
equipping talent to meet evolving
industry demands.
Digital and functional expertise
represent a critical part of this
journey, embedding technology and
specialised knowledge into every
aspect of our operations.</div>
<div className='flex md:flex-row flex-col justify-center items-center gap-10'>
    <div className='md:w-[50%] h-auto '>
<div className='text-xl text-[#29b8ef] mb-5'>
LEADERSHIP
DEVELOPMENT
</div>
<div className='mb-5'>To strengthen our leadership pipeline,
we have developed a comprehensive
leadership development strategy
with specially curated in-house
programmes in partnership with
TMTC (Tata Management Training
Centre) and other global institutions.
The various programmes help
strengthen leadership capabilities
and equip identified high-potential
employees with essential skills
through structured learning, case
studies and leadership challenges.</div>
<div className="flex flex-col mt-2 w-[200px] mb-5">
            <h1 className="text-3xl text-[#4084c1] leading-none">40%+</h1>

            <div class="flex items-center my-1">
              <div class="w-4 h-2 bg-blue-500 rounded-full"></div>
              <div class="h-0.5 w-full bg-blue-500"></div>
            </div>
            <div className=" text-sm leading-tight">
            of our leadership pipeline
has participated in at least
one structured leadership
development initiative
            </div>
           
          </div>
          </div>
          <div className='md:w-[50%] h-auto'>
            <img src="/300.webp" alt="" />
          </div>
</div>
<div>
    <Card obj={{name:"AAROHAN- STRENGTHENING FRONTLINE MANAGERIAL CAPABILITIES",text:"We recognise that strong frontline management is essential for sustained growth and operational excellence. Alongside leadership development, we are investing in structured professional development",img:"/301.webp"}}/>
    <Card obj={{name:"BUILDING SELF AWARENESS AS THE FIRST STEP OF LEADERSHIP DEVELOPMENT",text:"In partnership with SHL, we introduced 360° Feedback and OPQ assessments for senior leaders to evaluate leadership effectiveness",img:"/303.webp"}}/>
</div>
<div className='mb-5 text-xl text-[#29b8ef]'>SKILLUP - BUILDING
FUNCTIONAL EXPERTISE
</div>
<div className='mb-5'>Building functional expertise is
essential for sustained performance
in a dynamic business environment.
Through the ‘Skill Up!’ programme,
we have introduced targeted learning
interventions across Sales, Operations,
Finance, Marketing and Digital. Across

functions, we are driving a future-
focused learning agenda building

proficiency in digital skills in addition
to function specific capabilities. These
initiatives equip our workforce with
cutting-edge capabilities, ensuring
they remain prepared for evolving
industry demands.</div>
<Card obj={{name:"EMBEDDING GROWTH MINDSET BEHAVIOURS",text:"As we continue to accelerate our pace towards becoming a premier global FMCG company, it has become critical for leaders to",img:"/302.webp"}}/>
</div> */}


