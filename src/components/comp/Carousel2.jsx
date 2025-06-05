import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import KnowMore from "./KnowMore";
import Heading2 from "../Heading2";
import { title } from "framer-motion/client";
const slides = [
  {
    image: "./leader1.webp",
    title: "N.Chandrasekaran",
    desg: "Chairman",
    description:
      "Our strategic roadmap and the strong foundation we have laid for our business have yielded good results.",
    link: "/business-momentum/chairman-message",
    head: "Chairman's Message"
  },
  {
    image: "./leader2.webp",
    title: "Sunil D'Souza",
    desg: "MD & CEO",
    description:
      "Over the last five years, our portfolio has grown to span multiple categories... and is well-positioned to cater to evolving consumer needs.",
    link: "/business-momentum/ceo-message",
    head: "MD & CEO's Message"
  },
];

export default function OneSlideWithText() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="w-full marginal max-w-7xl mx-auto my-12 relative">
      <div className="my-10 mx-auto w-fit ">
      <Heading2 text={slides[currentIndex].head}/>
      </div>
      <div className="relative">
        {/* <div className="absolute triangle-bottom-right w-10 h-30 bg-gradient-to-br from-[#00aeef] to-[#0db14b]"></div> */}
        <div className="absolute bottom-0 right-0 triangle-top-left w-20 h-70 bg-gradient-to-br from-[#00aeef] to-[#0db14b]"></div>

      <div className="flex flex-col  md:flex-row bg-gradient-to-tr from-[#f1f6fa] to-[#f0faf5] items-stretch overflow-hidde ">
        {/* Image Section */}
        <div className="md:w-1/2 w-full relative overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.img
              key={slides[currentIndex].image}
              src={slides[currentIndex].image}
              alt={slides[currentIndex].title}
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
              key={slides[currentIndex].title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              layout
            >
              <img src="Quotation.webp" className="w-8" alt="Quote" />
              <div className="relative py-2">
                <p className="text-gray-600 text-lg mb-4">{slides[currentIndex].description}</p>
                <img src="Quotation.webp" className="absolute right-4 bottom-2 w-6 rotate-180" alt="Quote" />
              </div>

              <h2 className="text-lg font-bold text-[#38b9c7]">{slides[currentIndex].title}</h2>
              <p className="text-gray-500 font-semibold text-sm">{slides[currentIndex].desg}</p>
              <p className="text-gray-500 font-semibold text-sm">Tata Consumer Products</p>
            </motion.div>
            <div className="mt-5 flex md:flex-row flex-col md:items-center gap-8">
              <KnowMore
                link={slides[currentIndex].link}
                isGradient={true}
              />
              {/* Navigation Arrows */}
              <div className="flex gap-2">
                <button
                  onClick={prevSlide}
                  className="w-12 h-12 cursor-pointer flex items-center justify-center rounded-full border-2 border-[#38b9c7] text-[#38b9c7] hover:bg-[#00aeef] hover:text-white transition-all"
                >
                  ‹
                </button>
                <button
                  onClick={nextSlide}
                  className="w-12 h-12 flex cursor-pointer items-center justify-center rounded-full border-2 border-[#38b9c7] text-[#38b9c7] hover:bg-[#00aeef] hover:text-white transition-all"
                >
                  ›
                </button>
              </div>
            </div>
          </AnimatePresence>
        </div>
      </div>
      </div>

      {/* Dots */}
      {/* <div className="flex justify-center mt-6 space-x-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrentIndex(i)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              currentIndex === i ? "bg-black" : "bg-gray-400"
            }`}
          />
        ))}
      </div> */}
    </div>
  );
}
