import React from 'react';
import { motion } from 'framer-motion';
import SoftCover from '../components/dos/SoftCover';
const items = [
  {
    icon: "/130.webp",
    text: "Grow the India tea business by driving execution excellence and focusing on previously underserved markets."
  },
  {
    icon: "/131.webp",
    text: "Grow market share and drive premiumisation in Salt."
  },
  {
    icon: "/132.webp",
    text: "Build Sampann as India’s preferred Pantry brand."
  },
  {
    icon: "/133.webp",
    text: "Build a pan-India multi-category Ready-to-drink (RTD) business."
  },
  {
    icon: "/134.webp",
    text: "Grow market share profitably in International business."
  }
];
const Strategy4th_page = () => {

  const softData2 = {
    bgColor: "#0066b3",
    image: "/strategy/0.webp",
    heading1: "Strengthen core \n and accelerate \n growth businesses",
    subheading: "",
    footerText: "",
  }
  return (
    <div >
      <SoftCover props={softData2} />
      <div className="bg-[#f9f7f4] ">
        <div className="grid marginal grid-cols-1 md:grid-cols-5 divide-y md:divide-y-0 md:divide-x divide-gray-300">
          {items.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center px-3 md:py-0"
            >
              <div className='w-14 h-14 flex items-center  mb-4'>
                <img src={item.icon} alt={`icon-${index}`} />
              </div>
              <p className="text-lg text-gray-800 text-center">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Strategy4th_page;
