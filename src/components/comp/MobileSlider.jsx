import React, { useState, useEffect, useRef } from "react";

const images = [
  "./WorldMap1.webp",
  "./WorldMap2.webp",
  "./WorldMap3.webp",
  "./WorldMap4.webp",
  "./WorldMap5.webp",
  "./WorldMap6.webp",
  "./WorldMap7.webp",
];

const CustomNextArrow = ({ onClick }) => (
  <button
    className="absolute bottom-0 right-0 z-10 bg-white rounded-full p-1 shadow-md hover:bg-gray-100"
    onClick={onClick}
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-10 w-10 text-[#1168b3]"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M9 5l7 7-7 7"
      />
    </svg>
  </button>
);

const CustomPrevArrow = ({ onClick }) => (
  <button
    className="absolute bottom-0 left-0 z-10 bg-white rounded-full p-1 shadow-md hover:bg-gray-100"
    onClick={onClick}
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-10 w-10 text-[#1168b3]"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M15 19l-7-7 7-7"
      />
    </svg>
  </button>
);

const MobileSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const sliderRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider || !isMobile) return;

    let startX = 0;

    const handleTouchStart = (e) => {
      startX = e.touches[0].clientX;
    };

    const handleTouchEnd = (e) => {
      const endX = e.changedTouches[0].clientX;
      if (startX - endX > 50) handleArrow("right");
      else if (endX - startX > 50) handleArrow("left");
    };

    slider.addEventListener("touchstart", handleTouchStart);
    slider.addEventListener("touchend", handleTouchEnd);

    return () => {
      slider.removeEventListener("touchstart", handleTouchStart);
      slider.removeEventListener("touchend", handleTouchEnd);
    };
  }, [isMobile]);

  const handleArrow = (dir) => {
    setCurrentIndex((prev) =>
      dir === "left"
        ? (prev - 1 + images.length) % images.length
        : (prev + 1) % images.length
    );
  };

  if (!isMobile) return null;

  return (
    <div className=" w-full md:hidden overflow-hidden bg-white p-3 ">
      {/* Image Slider */}
      <div
        ref={sliderRef}
        className="flex transition-transform duration-300 "
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((src, i) => (
          <div
            key={i}
            className="w-full flex-shrink-0 h-full flex items-center justify-center px-4"
          >
            <img
              src={src}
              alt={`Slide ${i}`}
              className="max-h-[240px] w-auto object-contain"
            />
          </div>
        ))}
      </div>

      {/* Custom Arrows Below Image */}
      {/* Custom Arrows Below Image */}
      <div className="relative mb-2 mt-2 h-0">
        <CustomPrevArrow onClick={() => handleArrow("left")} />
        <CustomNextArrow onClick={() => handleArrow("right")} />
      </div>
    </div>
  );
};

export default MobileSlider;
