import React, { useEffect, useState } from "react";
import FinancialChart from "./Chart/FinincialChart";
import SegmentalChart from "./Chart/SegmentalChart";
import Heading from "../Heading";

const Financial_data = [
  { title: "Revenue from Operations(INR CRORES)", key: "RFO" },
  { title: "EBITDA", key: "EB" },
  { title: "Profile Before Tax and Exceptional Items", key: "PBT" },
  { title: "Group Net Profit", key: "GNT" },
  { title: "Return on Capital Employed (RoCE)", key: "ROCE" },
  { title: "Dividend", key: "DIVIDEND" },
  { title: "India Business", key: "IndiaB" },
  { title: "International Business", key: "IB" },
  { title: "Non-branded Business", key: "NBA" },
];

const Financial = {
  RFO: [
    { year: "FY 20-21", value: 11602, isPercentage: true, percent: 16 },
    { year: "FY 21-22", value: 12425 },
    { year: "FY 22-23", value: 13783 },
    { year: "FY 23-24", value: 15206 },
    { year: "FY 24-25", value: 17618 },
  ],
  EB: [
    { year: "FY 20-21", value: 1569, isPercentage: true, percent: 8 },
    { year: "FY 21-22", value: 1749 },
    { year: "FY 22-23", value: 1874 },
    { year: "FY 23-24", value: 2323 },
    { year: "FY 24-25", value: 2502 },
  ],
  PBT: [
    { year: "FY 20-21", value: 1342, isPercentage: true, percent: -12 },
    { year: "FY 21-22", value: 1508 },
    { year: "FY 22-23", value: 1634 },
    { year: "FY 23-24", value: 2023 },
    { year: "FY 24-25", value: 1782 },
  ],
  GNT: [
    { year: "FY 20-21", value: 945, isPercentage: true, percent: -17 },
    { year: "FY 21-22", value: 1056 },
    { year: "FY 22-23", value: 1174 },
    { year: "FY 23-24", value: 1516 },
    { year: "FY 24-25", value: 1252 },
  ],
  ROCE: [
    { year: "FY 20-21", value: 34.7, isPercentage: false, percent: 0 },
    { year: "FY 21-22", value: 32.8 },
    { year: "FY 22-23", value: 34.3 },
    { year: "FY 23-24", value: 43.3 },
    { year: "FY 24-25", value: 37.5 },
  ],
  DIVIDEND: [
    { year: "FY 20-21", value: 405, isPercentage: true, percent: 6 },
    { year: "FY 21-22", value: 605 },
    { year: "FY 22-23", value: 845 },
    { year: "FY 23-24", value: 775 },
    { year: "FY 24-25", value: 825 },
  ],
  IndiaB: [
    { year: "FY 20-21", value: 7003, isPercentage: true, percent: 15 },
    { year: "FY 21-22", value: 7003 },
    { year: "FY 22-23", value: 8717 },
    { year: "FY 23-24", value: 9736 },
    { year: "FY 24-25", value: 11241 },
  ],
  IB: [
    { year: "FY 20-21", value: 3508, isPercentage: true, percent: 16 },
    { year: "FY 21-22", value: 3336 },
    { year: "FY 22-23", value: 3589 },
    { year: "FY 23-24", value: 3925 },
    { year: "FY 24-25", value: 4549 },
  ],
  NBA: [
    { year: "FY 20-21", value: 1122, isPercentage: true, percent: 21 },
    { year: "FY 21-22", value: 1214 },
    { year: "FY 22-23", value: 1500 },
    { year: "FY 23-24", value: 1577 },
    { year: "FY 24-25", value: 1910 },
  ],
};

export default function FinancialPage() {
  const [selectedKey, setSelectedKey] = useState("RFO");
  const [view, setView] = useState("Financial");
  const [percentageItemSelected, setPercentageItemSelected] = useState(false);
  const [percentValue, setPercentValue] = useState(0);

  useEffect(() => {
    const first = Financial[selectedKey]?.[0];
    if (first?.isPercentage && first.percent !== 0) {
      setPercentageItemSelected(true);
      setPercentValue(first.percent);
    } else {
      setPercentageItemSelected(false);
      setPercentValue(0);
    }
  }, [selectedKey]);

  return (
    <div className="px-4 overflow-hidden pt-10 md:px-10 w-screen">
      <div className="pb-10">
        <Heading
          color="black"
          title="Financial and Operational Highlights"
          linecolor="#0072CE"
        />
      </div>

      {/* Toggle Buttons */}
      <div className="flex justify-center max-w-[100%] gap-4 mb-6">
        <button
          onClick={() => setView("Financial")}
          className={`px-6 cursor-pointer w-full py-4 rounded-lg text-sm md:text-base transition font-semibold ${
            view === "Financial"
              ? "bg-[#2c8bdf] text-white"
              : "border-2 border-[#2c8bdf] text-[#2c8bdf]"
          }`}
        >
          Financial
        </button>
        <button
          onClick={() => setView("segmental")}
          className={`px-6 py-2 cursor-pointer w-full rounded-lg text-sm md:text-base transition font-semibold ${
            view === "segmental"
              ? "bg-[#2c8bdf] text-white"
              : "border-2 border-[#2c8bdf] text-[#2c8bdf]"
          }`}
        >
          Segmental
        </button>
      </div>

      {/* Conditional Views */}
      {view === "Financial" ? (
        <div className="flex flex-col items-center p-10">
          <div className="flex flex-wrap justify-center gap-4 md:gap-6 mb-6">
            {Financial_data.map((item) => (
              <button
                key={item.key}
                onClick={() => setSelectedKey(item.key)}
                className={`text-sm md:text-base px-4 py-2 rounded-lg cursor-pointer transition font-semibold ${
                  selectedKey === item.key
                    ? "bg-[#2c8bdf] text-white"
                    : "border-2 border-[#2c8bdf] text-[#2c8bdf]"
                }`}
              >
                {item.title}
                <p className="text-xs mt-1">
                  {item.title === "Return on Capital Employed (RoCE)" ||
                  item.title === "Dividend"
                    ? "(%)"
                    : "(INR Crores)"}
                </p>
              </button>
            ))}
          </div>

          {/* Conditional Percentage View */}
          

          <FinancialChart 
  data={Financial[selectedKey]} 
  showPercent={percentageItemSelected && percentValue !== 0}
  percentValue={percentValue}
/>

        </div>
      ) : (
        <SegmentalChart />
      )}
    </div>
  );
}
