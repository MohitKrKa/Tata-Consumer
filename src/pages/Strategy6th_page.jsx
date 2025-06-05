// // components/HeroLayout.jsx

import React from "react";

const Strategy6th_page = ({
  bgColor = "#0066b3",
  image = "/strategy/0.webp",
  heading1 = "Strengthen",
  highlight1 = "core",
  heading2 = "and accelerate",
  highlight2 = "growth",
  subheading = "businesses",
  footerText = "— Integrated Annual Report 2024–25",
}) => {
  return( 
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
  )
};

export default Strategy6th_page;
