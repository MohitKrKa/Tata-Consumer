import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const dummySvg = (
  <div className="w-5 h-5 bg-gray-300 rounded-full inline-block mr-2"></div>
);

const EsgDummy = () => {
  const [activeTab, setActiveTab] = useState('target'); // 'target' | 'highlight'
  const [activeSub, setActiveSub] = useState('environment'); // 'environment' | 'social' | 'governance'

  const fadeVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.4 } },
    exit: { opacity: 0, y: -20, transition: { duration: 0.3 } },
  };

  const fadeProps = {
    key: `${activeTab}-${activeSub}`,
    variants: fadeVariants,
    initial: 'initial',
    animate: 'animate',
    exit: 'exit',
    className: 'mt-6',
  };

  return (
    <div className="m-6 md:m-10 lg:m-20 pt-10">
      {/* Main Tabs */}
      <div className="flex gap-4 mb-6">
        <button
          onClick={() => setActiveTab('target')}
          className={`px-5 py-2 rounded-full font-medium ${
            activeTab === 'target' ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-700'
          }`}
        >
          Target <span>FY 2025-26</span>
        </button>
        <button
          onClick={() => setActiveTab('highlight')}
          className={`px-5 py-2 rounded-full font-medium ${
            activeTab === 'highlight' ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-700'
          }`}
        >
          Highlights <span>FY 2024-25</span>
        </button>
      </div>

      {/* Sub Tabs */}
      <div className="flex gap-3 mb-6">
        {['environment', 'social', 'governance'].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveSub(tab)}
            className={`px-4 py-1 rounded-full text-sm font-medium capitalize ${
              activeSub === tab ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Section Content */}
      <AnimatePresence mode="wait">
        {activeTab === 'target' && activeSub === 'environment' && (
          <motion.div {...fadeProps}>
            <ul className="space-y-4">
              <li>{dummySvg} Be <strong>Carbon Neutral</strong> on Scope 1 and Scope 2 across all geographies.</li>
              <li>{dummySvg} Ensure <strong>70%</strong> of all packaging is recyclable, compostable, or reusable.</li>
              <li>{dummySvg} Achieve <strong>Zero waste</strong> to landfill across all operations.</li>
              <li>{dummySvg} Aim for <strong>35%</strong> of power to come from renewable sources.</li>
            </ul>
          </motion.div>
        )}

        {activeTab === 'target' && activeSub === 'social' && (
          <motion.div {...fadeProps}>
            <ul className="space-y-4">
              <li>{dummySvg} Achieve <strong>100%</strong> ISO 45001 certification across all operations.</li>
              <li>{dummySvg} Increase women's workforce participation to over <strong>35%</strong>.</li>
              <li>{dummySvg} Touch <strong>1.75 Mn</strong> lives through community initiatives.</li>
            </ul>
          </motion.div>
        )}

        {activeTab === 'highlight' && activeSub === 'environment' && (
          <motion.div {...fadeProps}>
            <ul className="space-y-2 list-disc pl-6">
              <li>64,943 tCO₂e (Scope 1) and 71,211 tCO₂e (Scope 2) emissions recorded.</li>
              <li>62% of direct energy, 52% overall energy from renewables.</li>
              <li>500 KWp solar power plant commissioned at ICD Theni.</li>
              <li>11 manufacturing units are ISO 50001 certified.</li>
              <li>Eaglescliffe site used 97% renewable energy in FY25.</li>
              <li>All beverage factories achieved zero waste to landfill.</li>
              <li>94% recyclable salt packaging laminations used.</li>
              <li>700 Mn litres of water recharged.</li>
            </ul>
          </motion.div>
        )}

        {activeTab === 'highlight' && activeSub === 'social' && (
          <motion.div {...fadeProps}>
            <ul className="space-y-2 list-disc pl-6">
              <li>1.5 Mn beneficiaries reached via CSR.</li>
              <li>70% of units ISO 45001 certified.</li>
              <li>8.4 average volunteering hours per employee.</li>
              <li>45% gender diversity achieved.</li>
              <li>60% of tea in FY24-25 is trusted certified.</li>
              <li>29% of health & wellness launches were new.</li>
              <li>Tetley Tea & Good Earth are Rainforest Alliance certified.</li>
            </ul>
          </motion.div>
        )}

        {activeTab === 'highlight' && activeSub === 'governance' && (
          <motion.div {...fadeProps}>
            <ul className="space-y-2 list-disc pl-6">
              <li>Supply chain policy strengthened.</li>
              <li>Performance highlights published for FY 2024-25.</li>
              <li>TNFD Biodiversity Risk Assessment conducted.</li>
              <li>CDP Climate & Water Ratings: ‘B’.</li>
              <li>100% compliance to EPR commitments.</li>
              <li>MSCI rating unchanged at ‘A’.</li>
              <li>ESG risk rating improved to ‘Medium’ by Morningstar.</li>
              <li>Included in S&P Sustainability Yearbook 2024.</li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default EsgDummy;
