import React, { useState } from "react";
import { motion } from "framer-motion";

const SegmentalChart = () => {
  const Segmental_data = [
    { title: "Segment Revenue**", key: "BB" },
    { title: "Segment Results**", key: "INDB" },
   
  ];

  const Segmental = {
    BB: [
     
      {
        year2: "FY 24-25",
        value1: 71,
        value2: 29,
        compare1: "India",
        compare2: "International",
      },
    ],
    INDB: [
      
      {
        year: "FY 24-25",
        value1: 60,
        value2: 40,
        compare1: "India",
        compare2: "International",
      },
    ],
    INTB: [
      {
        year: "FY 20-21",
        value1: 92,
        value2: 8,
        compare1: "Core",
        compare2: "Growth",
      },
      {
        year: "FY 24-25",
        value1: 72,
        value2: 28,
        compare1: "Core",
        compare2: "Growth",
      },
    ],
  };

  const [selectedKey, setSelectedKey] = useState("BB");

  const PieChart = (
    { year, year1, year2, value1, value2, compare1, compare2 },
    index
  ) => {
    const size = 400;
    const stroke = 40;
    const radius = (size - stroke) / 2;
    const circumference = 2 * Math.PI * radius;

    const offset1 = circumference * (1 - value1 / 100);
    const offset2 = circumference * (1 - value2 / 100);
    const labelYear = year || year1 || year2 || `Year ${index + 1}`;

    // Total rotation based on value1 to keep segment 2 correctly offset
    const totalRotation = (value1 / 100) * 360;

    return (
      <div key={index} className="flex flex-col items-center">
        <svg width={size} height={size} className="mb-2">
          {/* Background Circle */}
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            fill="transparent"
            stroke="#e5e7eb"
            strokeWidth={stroke}
          />

          {/* Rotating group for both segments */}
          <motion.g
            initial={{ rotate: 0 }}
            animate={{ rotate: 270 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            transform={`rotate(0 ${size / 2} ${size / 2})`}
          >
            {/* Segment 1 */}
            <motion.circle
              cx={size / 2}
              cy={size / 2}
              r={radius}
              fill="transparent"
              stroke="#1368b4"
              strokeWidth={stroke}
              strokeDasharray={circumference}
              strokeDashoffset={circumference}
              animate={{ strokeDashoffset: offset1 }}
              transition={{ duration: 0.5 }}
              strokeLinecap="round"
            />
            {/* Segment 2 */}
            <motion.circle
              cx={size / 2}
              cy={size / 2}
              r={radius}
              fill="transparent"
              stroke="#11b14b"
              strokeWidth={stroke}
              strokeDasharray={circumference}
              strokeDashoffset={circumference}
              animate={{ strokeDashoffset: offset2 }}
              transition={{ duration: 0.5 }}
              strokeLinecap="round"
              transform={`rotate(${totalRotation} ${size / 2} ${size / 2})`}
            />
          </motion.g>
        </svg>

        {/* Labels Below */}
        <div className="text-sm font-medium text-gray-700 mb-1">
          {labelYear}
        </div>
        <div className="text-sm font-medium text-gray-700 mb-1 border-b-1 p-1">
          Business
        </div>
        <div className="flex items-center gap-4 text-xs text-gray-500 mt-1">
          {/* Segment 2 (Left side) */}
          <div className="flex items-center gap-1">
            <span className="w-3 h-3 rounded-full bg-[#11b14b] inline-block" />
            {compare2}: {value2}%
          </div>
          {/* Segment 1 (Right side) */}
          <div className="flex items-center gap-1">
            <span className="w-3 h-3 rounded-full bg-[#1368b4] inline-block" />
            {compare1}: {value1}%
          </div>
        </div>
        <div className="text-xs text-gray-500 mt-7 ">
      **Branded Business
      </div>
      </div>
    );
  };

  return (
    <div className="w-screen py-6  flex flex-col items-center">
      <div className="flex flex-wrap justify-center gap-4 mb-6">
        {Segmental_data.map((item) => (
          <button
            key={item.key}
            onClick={() => setSelectedKey(item.key)}
            className={`text-sm md:text-base px-4 py-2 rounded-lg cursor-pointer transition ${
              selectedKey === item.key
                ? "bg-[#2c8bdf] text-white"
                    : "border-2 border-[#2c8bdf] text-[#2c8bdf]"
            }`}
          >
            {item.title}
          </button>
        ))}
      </div>

      <div className="flex flex-wrap gap-8 justify-center">
        {Segmental[selectedKey].map((entry, i) => PieChart(entry, i))}
      </div>
     
    </div>
  );
};

export default SegmentalChart;
