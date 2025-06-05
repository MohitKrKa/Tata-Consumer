import React from "react";
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
   const Strategy41th_page = ({
     bgColor = "#0066b3",
     image = "/strategy/2.webp",
     heading1 = "Drive",
     highlight1 = "execution",
     heading2 = "excellence",
     highlight2 = "everyday",
     subheading = "",
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

      {/* Footer */}
    </div>
       <div className="bg-[#f9f7f4] px-4 md:px-16 py-8 mb-5">
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
     </>
     );
   };
   
   export default Strategy41th_page;