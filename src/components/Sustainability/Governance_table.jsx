import React, { useState } from "react";

const sectionData = [
  {
    title: "For Better Nutrition",
    image: "/life/4.png",
    focusAreabgColour: "#04adee",
    longTermTargetbgColour: "#e8f7fd",
    ProgressbgColour: "#f2efea",
    focusAreas: [
      {
        name: "Consumer Connect",

        longTermTarget: [
          "$250Mn $  Households in India to be reached through our product portfolio by 2030",
        ],
        progress: [
          "In FY 2024-25, we successfully added 41 products to our portfolio",
          "29% health and wellness focused new product launched in F25*",
        ],
      },
      {
        name: "Sustainable Products",
        longTermTarget: ["100% Sustainable products by volume by 2040"],
        progress: [
          "Nutritional Policy defined with classification of products",
        ],
      },
    ],
  },
  {
    title: "For Better Sourcing",
    image: "/life/1.png",
    focusAreabgColour: "#6bc781",
    longTermTargetbgColour: "#e8f7fd",
    ProgressbgColour: "#f2efea",
    focusAreas: [
      {
        name: "Sustainable supply chain",
        bgColour: "#04adbc",
        longTermTarget: [
          "100% Critical supplier assessments across all geographies by 2030",
        ],
        progress: [
          "Internal Risk Assessment on sustainability in supply chain",
        ],
      },
      {
        name: "Responsible sourcing",
        bgColour: "#04adbc",
        longTermTarget: [
          "100% Sustainably sourced critical raw materials by 2040",
        ],
        progress: [
          "60% of tea procured in FY 2024-25 by TCP is trustea-certified in India",
          "979 Mn KG of tea sustainably transformed through 'trustea' initiative till March 2025 in India.",
          "100% Tata Coffee plantations in India hold Rainforest Alliance certification.",
        ],
      },
    ],
  },
  {
    title: "For Better Planet",
    image: "/life/2.png",
    focusAreabgColour: "#55bf70",
    longTermTargetbgColour: "#eef7ed",
    ProgressbgColour: "#f2efea",
    focusAreas: [
      {
        name: "Energy",
        longTermTarget: ["Net Zero by 2040 across all geographies"],
        progress: [
          "Biodiversity risk assessment in alignment with TNFD guidelines",
          "62% of our direct energy sourced from renewable sources",
          "64943 Scope 1 & 71211 Scope 2",
          "52% of our energy needs are met by renewable energy sources",
        ],
      },
      {
        name: "Circular Economy",
        longTermTarget: [
          "100% of packaging materials to be recyclable, compostable or reusable across all geographies by 2030",
        ],
        progress: [
          "All beverages' factories worldwide have achieved zero waste to landfill",
          "94% recyclable laminations used in salt packaging",
          "100% compliance to EPR commitments in India",
        ],
      },
      {
        name: "Water",
        longTermTarget: ["Water-neutral Across all operations by 2030"],
        progress: [
          "Poanta Sahib Plant is water neutral",
          "Conducted water risk assessment in line with the CDSB",
          "700 Mn litres of water recharged",
        ],
      },
    ],
  },
  {
    title: "For Better Communities",
    image: "/life/3.png",
    focusAreabgColour: "#1567b2",
    longTermTargetbgColour: "#eaedf8",
    ProgressbgColour: "#f2efea",
    focusAreas: [
      {
        name: "Community Initiatives",
        longTermTarget: ["2 Mn Community beneficiaries by 2030"],
        progress: [
          "1.5 Mn beneficiaries impacted cumulatively till FY 2023-24",
        ],
      },
      {
        name: "Safe Operations",
        longTermTarget: ["certifications Health and safety"],
        progress: [
          "70% of Tata Consumer units (excluding plantations) are ISO 45001 certified",
        ],
      },
      {
        name: "Workforce Diversity",
        longTermTarget: [
          "50% of diverse workforce across all geographies by 2030",
        ],
        progress: ["45% of all our permanent employees and workers"],
      },
    ],
  },
];

export default function StrategyLayout() {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const selectedSection = sectionData[selectedIndex];
  const selectedFocusAreas = selectedSection.focusAreas;
  const widthClass = selectedFocusAreas.length === 2
  ? "w-full sm:w-[50%]"
  : "w-full sm:w-[33%]";

  return (
    <div className="p-4 space-y-6">
      {/* Carousel */}
      <div className="flex md:flex-row  flex-col justify-center gap-4">
        {sectionData.map((section, idx) => (
          <div
            key={section.title}
            onClick={() => setSelectedIndex(idx)}
            className={`cursor-pointer rounded-xl  overflow-hidden border-2 transition-all duration-300 ${
              idx === selectedIndex
                ? "border-[#1568b4] scale-101"
                : "border-none"
            }`}
          >
            <div className="w-full bg-white flex items-center justify-center">
              <img
                src={section.image}
                alt={section.title}
                className="w-full object-contain"
              />
            </div>

            <div className="bg-[#e7f3f9] h-full rounded-2xl text-center py-2 font-semibold">
              {section.title}
            </div>
          </div>
        ))}
      </div>

      {/* Content layout in rows */}
      <div className="space-y-2 relative">
        <div className="absolute top-0 left-0 border-r-2 border-b-2 text-[#1568b4] border-[#1568b4] py-0 px-2 bg-white  rounded-xl">
        Focus Area/KPI
        </div>
        {/* Row 1: Focus Area Names */}
        <div
          className="p-4 pt-10 rounded-2xl"
          style={{
            backgroundImage: `linear-gradient(to top right, ${selectedSection.focusAreabgColour}, ${selectedSection.longTermTargetbgColour}`,
          }}
        >
          <div className="flex md:flex-row flex-col md:justify-start gap-4 text-white text-lg">
            {selectedFocusAreas.map((area, i) => (
              <div key={i} className={`${widthClass} font-medium border-r border-white `}>
                {area.name}
              </div>
            ))}
          </div>
        </div>
</div>
        {/* Row 2: Long Term Targets */}
        <div className="space-y-2 relative">
        <div className="absolute top-0 left-0 border-r-2 border-b-2 text-[#1568b4] border-[#1568b4] py-0 px-2 bg-white  rounded-xl">
        Long term Target (FY30 / FY40)
        </div>
        <div
          className="p-4 pt-10"
          style={{ backgroundColor: selectedSection.longTermTargetbgColour }}
        >
           
          <div className="flex md:flex-row flex-col md:justify-start gap-4 text-lg">
            {selectedFocusAreas.map((area, i) => (
              <div key={i} className={`${widthClass}  p-`}>
                {area.longTermTarget.map((item, j) => (
                  <p key={j} className="mb-2 border-r border-black">
                    {item}
                  </p>
                ))}
              </div>
            ))}
          </div>
        </div>
</div>
        {/* Row 3: Progress */}
        <div className="space-y-2 relative">
        <div className="absolute top-0 left-0 border-r-2 border-b-2 text-[#1568b4] border-[#1568b4] py-0 px-2 bg-white  rounded-xl">
        Progress – FY 2024-25
        </div>
        <div
          className=" p-4 pt-10"
          style={{ backgroundColor: selectedSection.ProgressbgColour }}
        >
          <div className="flex md:flex-row flex-col md:justify-start gap-4  text-lg">
            {selectedFocusAreas.map((area, i) => (
              <div key={i} className={`${widthClass}`}>
                {area.progress.map((item, j) => (
                  <p key={j} className="mb-2 border-r border-black">
                    {item}
                  </p>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
  </div>
  );
}

// import React, { useState } from "react";

// const sectionData = [
//   {
//     title: "For Better Nutrition",
//     image: "/life/1.png",
//     focusAreabgColour: "#04adee",
//     longTermTargetbgColour: "#e8f7fd",
//     ProgressbgColour: "#f2efea",
//     focusAreas: [
//       {
//         name: "Consumer Connect",
//         longTermTarget: [
//           "250 Mn  Households in India to be reached through our product portfolio by 2030",
//         ],
//         progress: [
//           "In FY 2024-25, we successfully added 41 products to our portfolio",
//           "29% health and wellness focused new product launched in F25*",
//         ],
//       },
//       {
//         name: "Sustainable Products",
//         longTermTarget: ["100% Sustainable products by volume by 2040"],
//         progress: [
//           "Nutritional Policy defined with classification of products",
//         ],
//       },
//     ],
//   },
//   {
//     title: "For Better Sourcing",
//     image: "/life/2.png",
//     focusAreabgColour: "#6bc781",
//     longTermTargetbgColour: "#e8f7fd",
//     ProgressbgColour: "#f2efea",
//     focusAreas: [
//       {
//         name: "Sustainable supply chain",
//         longTermTarget: [
//           "100% Critical supplier assessments across all geographies by 2030",
//         ],
//         progress: ["Internal Risk Assessment on sustainability in supply chain"],
//       },
//       {
//         name: "Responsible sourcing",
//         longTermTarget: [
//           "100% Sustainably sourced critical raw materials by 2040",
//         ],
//         progress: [
//           "60% of tea procured in FY 2024-25 by TCP is trustea-certified in India",
//           "979 Mn KG of tea sustainably transformed through 'trustea' initiative till March 2025 in India.",
//           "100% Tata Coffee plantations in India hold Rainforest Alliance certification.",
//         ],
//       },
//     ],
//   },
//   {
//     title: "For Better Planet",
//     image: "/life/3.png",
//     focusAreabgColour: "#55bf70",
//     longTermTargetbgColour: "#eef7ed",
//     ProgressbgColour: "#f2efea",
//     focusAreas: [
//       {
//         name: "Energy",
//         longTermTarget: ["Net Zero by 2040 across all geographies"],
//         progress: [
//           "Biodiversity risk assessment in alignment with TNFD guidelines",
//           "62% of our direct energy sourced from renewable sources",
//           "64943 Scope 1 & 71211 Scope 2",
//           "52% of our energy needs are met by renewable energy sources",
//         ],
//       },
//       {
//         name: "Circular Economy",
//         longTermTarget: [
//           "100% of packaging materials to be recyclable, compostable or reusable across all geographies by 2030",
//         ],
//         progress: [
//           "All beverages' factories worldwide have achieved zero waste to landfill",
//           "94% recyclable laminations used in salt packaging",
//           "100% compliance to EPR commitments in India",
//         ],
//       },
//       {
//         name: "Water",
//         longTermTarget: ["Water-neutral Across all operations by 2030"],
//         progress: [
//           "Poanta Sahib Plant is water neutral",
//           "Conducted water risk assessment in line with the CDSB",
//           "700 Mn litres of water recharged",
//         ],
//       },
//     ],
//   },
//   {
//     title: "For Better Communities",
//     image: "/life/4.png",
//     focusAreabgColour: "#1567b2",
//     longTermTargetbgColour: "#eaedf8",
//     ProgressbgColour: "#f2efea",
//     focusAreas: [
//       {
//         name: "Community Initiatives",
//         longTermTarget: ["2 Mn Community beneficiaries by 2030"],
//         progress: [
//           "1.5 Mn beneficiaries impacted cumulatively till FY 2023-24",
//         ],
//       },
//       {
//         name: "Safe Operations",
//         longTermTarget: ["certifications Health and safety"],
//         progress: [
//           "70% of Tata Consumer units (excluding plantations) are ISO 45001 certified",
//         ],
//       },
//       {
//         name: "Workforce Diversity",
//         longTermTarget: [
//           "50% of diverse workforce across all geographies by 2030",
//         ],
//         progress: ["45% of all our permanent employees and workers"],
//       },
//     ],
//   },
// ];

// export default function StrategyLayout() {
//   const [selectedIndex, setSelectedIndex] = useState(0);

//   const section = sectionData[selectedIndex];
//   const focusAreas = section.focusAreas;
//   const widthClass = focusAreas.length === 2 ? "w-[50%]" : "w-[33.33%]";

//   return (
//     <div className="p-4 space-y-6">
//       {/* Carousel */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
//         {sectionData.map((section, idx) => (
//           <div
//             key={section.title}
//             onClick={() => setSelectedIndex(idx)}
//             className={`cursor-pointer rounded-xl overflow-hidden shadow-lg border-2 transition-all duration-300 ${
//               idx === selectedIndex ? "border-blue-600 scale-105" : "border-gray-200"
//             }`}
//           >
//             <img
//               src={section.image}
//               alt={section.title}
//               className="w-full h-32 object-cover"
//             />
//             <div className="bg-[#e7f3f9] text-center py-2 font-semibold">
//               {section.title}
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* Row Layout with Background Colors */}
//       <div className="space-y-4">
//         {/* Row 1: Focus Area */}
//         <div style={{ backgroundColor: section.focusAreabgColour }} className="p-4 rounded-md text-white font-semibold">
//           <div className="flex flex-wrap gap-4">
//             {focusAreas.map((area, i) => (
//               <div key={i} className={`${widthClass} p-2`}>
//                 {area.name}
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Row 2: Long Term Targets */}
//         <div style={{ backgroundColor: section.longTermTargetbgColour }} className="p-4 rounded-md">
//           <div className="flex flex-wrap gap-4">
//             {focusAreas.map((area, i) => (
//               <div key={i} className={`${widthClass} p-2 text-sm`}>
//                 {area.longTermTarget.map((item, j) => (
//                   <p key={j} className="mb-2">{item}</p>
//                 ))}
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Row 3: Progress */}
//         <div style={{ backgroundColor: section.ProgressbgColour }} className="p-4 rounded-md">
//           <div className="flex flex-wrap gap-4">
//             {focusAreas.map((area, i) => (
//               <div key={i} className={`${widthClass} p-2 text-sm`}>
//                 {area.progress.map((item, j) => (
//                   <p key={j} className="mb-2">{item}</p>
//                 ))}
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
