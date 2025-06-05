import React, { useState } from "react";
import Heading from "../components/Heading";
import { motion } from "framer-motion";

const obj = [
  {
    text: "Himalayan Kashmiri Saffron won ET Shark Gold for Product Launch Campaign",
    img: "/Award00.webp",
  },
  {
    text: "Tata Tea Premium won ET Shark Silver for B2C Campaign",
    img: "/Award01.webp",
  },
  {
    text: "Tata Tea Premium won ET Shark Bronze for Use of Data Analytics/ Consumer Insight Tetley won ET Shark Gold for FMCG - Beverage Tata Tea Gold won ET Shark Silver for B2C Campaign",
    img: "/Award02.webp",
  },
  {
    text: "Tata Tea Chakra Gold named 'Brand of the Year' at the MAA Awards, also winning two Golds for its digital-first campaigns for Navratri, Deepavali, Suvarana Avakasham and Pongal",
    img: "/Award9.webp",
  },
  {
    text: "Himalayan won Gold for Most Popular Brand of Water at the BBB Awards 2024",
    img: "/Award8.webp",
  },
  {
    text: "Tata Tea Agni listed for Pitch Top 50 Brands 2024",
    img: "/Award33.webp",
  },
  {
    text: "Tata Soulfull won Golden Spoon Brand Retailer Partnership award for its collaboration with Reliance Smart Point",
    img: "/Award0.webp",
  },
  {
    text: "Tata Tea Premium won an award for its Odisha Day Campaign (#UtkalakiKala) that honoured Odisha's rich handloom legacy at the Indian Marketing Awards by E4M",
    img: "/Award1.webp",
  },
  {
    text: "Tata Salt won the Silver medal for Best Use of TV for the Namak ho Tata ka, Tata Namak campaign at the Indian Marketing Awards by E4M",
    img: "/Award2.webp",
  },
  {
    text: "Tata Salt won Gold in the Best Media Innovation- Audio, for the Namak ho Tata campaign at the EMVIES 2025",
    img: "/Award3.webp",
  },
  {
    text: "Tetley Australia won Best for Value in both black and green tea categories at the 2024 WeMoney People's Choice Awards",
    img: "/Award10.webp",
  },
  {
    text: "Tata Salt Immuno, Tata Coffee Grand and Tata Gluco+ Jelly Energy Drink won NIQ Bases Breakthrough Innovations Awards",
    img: "/Award11.webp",
  },
  {
    text: "Tata Salt won three Afaqs! Digies Awards, Gold for Best Campaign in Foods & Beverages, Gold for Thought Leadership and Bronze for Best Branded Content",
    img: "/Award12.webp",
  },
  {
    text: "Tata Tea won Gold for Local Marketing with #Pongal-O-Pongal campaign. Other accolades include Silver for #DeshkeDhaage in Physical Space Activation and Durga Puja festive packs in Brand Identity Packaging category as well as Bronze for #GhanamalnaBommalu in Best Use of Technology at the Indian Marketing Awards by E4M",
    img: "/Award13.webp",
  },
];

const obj1 = [
  {
    text: "Himalayan Kashmiri Saffron won ET Shark Silver for Product Designing and Packaging",
    img: "/Award14.webp",
  },
  {
    text: "Tata Consumer Products' PIVOT won Best Shared Services Leader of the Year award in the Food and Beverage category at the 15th Shared Services Summit and Awards 2024",
    img: "/Award15.webp",
  },
  {
    text: "Tata Consumer Products awarded the prestigious Economic Times Global Legal Awards 2024, in the Best Legal Team- FMCG – Food & Beverages category",
    img: "/Award16.webp",
  },
  {
    text: "Margolly Estate won Gold and Coovercolly Estate won Bronze for their Arabica Coffees, ranked among the top 3 Indian coffees exported to Illy Café during the 2023-24 crop season",
    img: "/Award17.webp",
  },
  {
    text: "Tata Consumer Products won India Content Leadership Awards 2024 for Best Integrated Annual Report and Best Social Media Campaign",
    img: "/Award18.webp",
  },
  {
    text: "Tata Consumer Products won Excellence in Packaging with 6 IndiaStar Awards 2024 by the Indian Institute of Packaging, Mumbai",
    img: "/Award19.webp",
  },
  {
    text: "Tata Consumer Products won Second Runner-Up for Best Product Display at the Indus Food Exhibition 2025, while Detox Kahwa by Organic India earned Second Runner-Up for Process Innovation",
    img: "/Award20.webp",
  },
  {
    text: "Tata Consumer Products recognised for Excellence in Packaging with 6 SIES SOP Star Awards 2025, by the SIES School of Packaging",
    img: "/Award21.webp",
  },
];

const obj2 = [
  {
    text: "Sampla Plant won 1st Runner-Up in the 8th CII National Energy Efficiency Circle Competition",
    img: "/Award22.webp",
  },
  {
    text: "Gopalpur unit honoured with the Best ESG Initiative to Improve Energy Efficiency Award at the ESG & Cleantech Summit and Awards 2024",
    img: "/Award23.webp",
  },
  {
    text: "Pullivasal Packeting Centre won the GOLD Award at IGMC 2024. Tata Consumer Products also won Silver for its unit in ICD Theni and Bronze for Tata Soulfull's Indore Plant",
    img: "/Award24.webp",
  },
  {
    text: "Tata Consumer Products' PSO Packaged Beverages Unit in Gopalpur and Food Manufacturing Facility in Sricity won Gold Awards, while the Sampla Packeting Centre received Silver at the SEEM National Energy Management Awards",
    img: "/Award25.webp",
  },
  {
    text: "Tata Consumer Products recognised as one of the Top 30 Supply Chains across industries by the Institute of Supply Chain Management (ISCM)",
    img: "/Award26.webp",
  },
  {
    text: "Tata Consumer Products won National Safety Award at 12th Global Safety Summit Conference",
    img: "/Award27.webp",
  },
  {
    text: "Kellyden Packeting Centre, Assam received the Commendation Certificate in the category of Large Manufacturing Food Businesses – Tea at the 15th CII Food Safety Awards 2024",
    img: "/Award28.webp",
  },
  {
    text: "PSO Packaged Beverages' Sampla and Nanoi Packeting Centres won the prestigious President Award- National Energy Conservation Award (NECA) 2024",
    img: "/Award29.webp",
  },
  {
    text: "Instant Coffee Division - Theni won the National Safety Award 2024 under the 4th Level Award: PRASHANSA PATRA in the Large Enterprises category (FMCG sector)",
    img: "/Award30.webp",
  },
];

const obj3 = [
  {
    text: "Tata Consumer Products ranked no. 1 as India's Most Sustainable Consumer Goods Company by Business World. It also ranked no. 2 in the Top 50 Most Sustainable Companies across sectors",
    img: "/Award31.webp",
  },
  {
    text: "Tata Coffee won FICCI Sustainable Agriculture Award 2024",
    img: "/Award32.webp",
  },
];

const Award = () => {
  const [activeTab, setActiveTab] = useState('brand');

  const renderAwards = (awards) => {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center ">
        {awards.map((award, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="w-full max-w-sm p-4 rounded shadow bg-gray-100"
          >
            <motion.img
              src={award.img}
              alt=""
              className="mb-2 w-full  object-contain  md:min-h-[300px] md:max-h-[300px] h-auto"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            />
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
            >
              {award.text.split(' ').map((word, i) => {
                if (word.includes('Tata') || word.includes('Himalayan') || 
                    word.includes('Tetley') || word.includes('Gold') || 
                    word.includes('Silver') || word.includes('Bronze') ||
                    word.includes('Award') || word.includes('Best')) {
                  return <span key={i} className="text-[#007cb6]">{word} </span>;
                }
                return <span key={i}>{word} </span>;
              })}
            </motion.p>
          </motion.div>
        ))}
      </div>
    );
  };

  return (
    <div className="w-[90%] mx-auto px-10 mb-[30px]">
      <div className="py-10">
        <Heading
          color="black"
          title="Spotlight on Recognition"
          linecolor="#0072CE"
        />
      </div>

      <div className="flex flex-wrap gap-4 mb-10">
        <button 
          onClick={() => setActiveTab('brand')}
          className={`w-fit pl-3 pr-20 py-1 text-white text-xl font-bold rounded shadow transform -skew-x-18 cursor-pointer ${
            activeTab === 'brand' ? 'bg-[#007cb6]' : 'bg-gray-400'
          }`}
        >
          <div className="transform skew-x-12">BRAND</div>
        </button>
        <button 
          onClick={() => setActiveTab('corporate')}
          className={`w-fit pl-3 pr-20 py-1 text-white text-xl font-bold rounded shadow transform -skew-x-18 cursor-pointer ${
            activeTab === 'corporate' ? 'bg-[#007cb6]' : 'bg-gray-400'
          }`}
        >
          <div className="transform skew-x-12">CORPORATE</div>
        </button>
        <button 
          onClick={() => setActiveTab('operational')}
          className={`w-fit pl-3 pr-20 py-1 text-white text-xl font-bold rounded shadow transform -skew-x-18 cursor-pointer ${
            activeTab === 'operational' ? 'bg-[#007cb6]' : 'bg-gray-400'
          }`}
        >
          <div className="transform skew-x-12">OPERATIONAL EXCELLENCE</div>
        </button>
        <button 
          onClick={() => setActiveTab('sustainability')}
          className={`w-fit pl-3 pr-20 py-1 text-white text-xl font-bold rounded shadow transform -skew-x-18 cursor-pointer ${
            activeTab === 'sustainability' ? 'bg-[#007cb6]' : 'bg-gray-400'
          }`}
        >
          <div className="transform skew-x-12">SUSTAINABILITY</div>
        </button>
      </div>

      {activeTab === 'brand' && renderAwards(obj)}
      {activeTab === 'corporate' && renderAwards(obj1)}
      {activeTab === 'operational' && renderAwards(obj2)}
      {activeTab === 'sustainability' && renderAwards(obj3)}
    </div>
  );
};

export default Award;
