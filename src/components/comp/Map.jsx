import React, { useState } from "react";
import Heading from "../Heading";
import Heading2 from "../Heading2";
import MobileSlider from "./MobileSlider";
const pointers = [
  {
    id: "pointer1",
    top: "50%",
    left: "68.7%",
    label: "India",
    img: "./WorldMap3.webp",
    color: "rgb(6 174 239)",
    num: "01",
  },
  {
    id: "pointer2",
    top: "44%",
    left: "18%",
    label: "USA",
    img: "./WorldMap7.webp",
    color: "rgb(17 177 75)",
    num: "02",
  },
  {
    id: "pointer3",
    top: "28%",
    left: "60%",
    label: "UK AND EUROPE",
    img: "./WorldMap6.webp",
    color: "rgb(2 173 189)",
    num: "03",
  },
  {
    id: "pointer4",
    top: "35%",
    left: "18%",
    label: "CANADA",
    img: "./WorldMap2.webp",
    color: "rgb(19 104 180)",
    num: "04",
  },
  {
    id: "pointer5",
    top: "71%",
    left: "82%",
    label: "AUSTRALIA",
    img: "./WorldMap1.webp",
    color: "rgb(88 89 91)",
    num: "05",
  },
  {
    id: "pointer6",
    top: "48%",
    left: "62%",
    label: "UAE",
    img: "./WorldMap5.webp",
    color: "rgb(221 124 135)",
    num: "06",
  },
  {
    id: "pointer7",
    top: "64%",
    left: "56%",
    label: "SOUTH AFRICA",
    img: "./WorldMap4.webp",
    color: "rgb(176 143 112)",
    num: "07",
  },
];

export default function MapWithCustomTooltip() {
  const [hoveredId, setHoveredId] = useState(null);

  return (
    <>
      <div className="flex justify-center bg-gradient-to-r pt-6 ">
        <Heading2 text={"Where we are"} />
      </div>
      <div className="md:block hidden  relative w-full h-screen  mx-auto mt-10 ">
        <img src="./WorldMap.webp" alt="Map" className="w-full h-full" />

        {pointers.map((pointer) => (
          <div
            key={pointer.id}
            className="absolute group cursor-pointer"
            style={{ top: pointer.top, left: pointer.left }}
            onMouseEnter={() => setHoveredId(pointer.id)}
            onMouseLeave={() => setHoveredId(null)}
          >
            {/* Pointer */}
            <div className="relative w-10 h-10 ">
              <span className="absolute inline-flex h-full w-full rounded-full bg-blue-400/50 opacity-85 animate-ping " />
              <div className="relative">
                <svg
                  viewBox="0 0 1024 1089.841"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill={pointer.color}
                    d="M520.258 1056.92H503.76c0-134.61-50.306-252.21-150.918-352.824S134.628 553.178 0 553.178V536.68c134.628 0 252.23-50.306 352.842-151.145C453.454 284.677 503.76 167.075 503.76 32.938h16.498c0 134.61 50.306 252.21 150.918 352.824S889.39 536.68 1024 536.68v16.498c-134.61 0-252.21 50.306-352.824 150.918S520.258 922.31 520.258 1056.92z"
                  />
                </svg>
                <p className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white text-[10px] font-semibold">
                  {pointer.num}
                </p>
              </div>
            </div>

            {/* Tooltip */}
            {hoveredId === pointer.id && (
              <div
                className={`absolute ${
                  pointer.label !== "India" ? "w-52" : "w-[26rem]"
                } left-1/2 -translate-x-1/2 -top-14 p-2 bg-white border border-gray-300 rounded shadow-lg z-50 text-sm text-gray-800
    transition-all duration-300 ease-in-out opacity-0 scale-95 group-hover:opacity-100 group-hover:scale-100`}
              >
                <img src={pointer.img} alt={pointer.label} className="w-full" />
                <div className="absolute left-1/2 -bottom-1 w-2 h-2 bg-white border-l border-t border-gray-300 transform -translate-x-1/2 rotate-45" />
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="block md:hidden ">
        {/* <div className="flex justify-center bg-gradient-to-r md:py-6 py-3 from-[#1168b3] to-[#00aabb]">
          <Heading2 text={"Where we are"} />
        </div> */}
        <img className="" src="/MobileMap.webp" alt="Map Mobile" />
        <MobileSlider />
      </div>
    </>
  );
}
