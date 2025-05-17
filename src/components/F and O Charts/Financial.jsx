import React from "react";
import FinincialChart from "./Chart/FinincialChart";
import SegmentalChart from "./Chart/SegmentalChart";

const Finincial_data = [
  { title: "Revenue from Operations", key: "RFO" },
  { title: "EDITBA", key: "EB" },
  { title: "Profile Before Tax and Exceptional Items", key: "PBT" },
  { title: "Group Net Profit", key: "GNT" },
  { title: "Return on Capital Employed (RoCE)", key: "ROCE" },
  { title: "Dividend", key: "DIVIDEND" },
  { title: "India Business", key: "IndiaB" },
  { title: "International Business", key: "IB" },
  { title: "Non-branded Business", key: "NBA" },
];

const Finincial = {
  RFO: [
    { year: "FY 20-21", value: 11602 },
    { year: "FY 21-22", value: 12425 },
    { year: "FY 22-23", value: 13783 },
    { year: "FY 23-24", value: 15206 },
    { year: "FY 24-25", value: 15206 },
  ],
  EB: [
    { year: "FY 20-21", value: 1569 },
    { year: "FY 21-22", value: 1749 },
    { year: "FY 22-23", value: 1874 },
    { year: "FY 23-24", value: 2323 },
    { year: "FY 24-25", value: 2323 },
  ],
  PBT: [
    { year: "FY 20-21", value: 1342 },
    { year: "FY 21-22", value: 1508 },
    { year: "FY 22-23", value: 1634 },
    { year: "FY 23-24", value: 2023 },
    { year: "FY 24-25", value: 2023 },
  ],
  GNT: [
    { year: "FY 20-21", value: 945 },
    { year: "FY 21-22", value: 1056 },
    { year: "FY 22-23", value: 1174 },
    { year: "FY 23-24", value: 1516 },
    { year: "FY 24-25", value: 1516 },
  ],
  ROCE: [
    { year: "FY 20-21", value: 34.7 },
    { year: "FY 21-22", value: 32.8 },
    { year: "FY 22-23", value: 34.3 },
    { year: "FY 23-24", value: 43.3 },
    { year: "FY 24-25", value: 43.3 },
  ],
  DIVIDEND: [
    { year: "FY 20-21", value: 405 },
    { year: "FY 21-22", value: 605 },
    { year: "FY 22-23", value: 845 },
    { year: "FY 23-24", value: 775 },
    { year: "FY 24-25", value: 775 },
  ],
  IndiaB: [
    { year: "FY 20-21", value: 7003 },
    { year: "FY 21-22", value: 7003 },
    { year: "FY 22-23", value: 8717 },
    { year: "FY 23-24", value: 9736 },
    { year: "FY 24-25", value: 9736 },
  ],
  IB: [
    { year: "FY 20-21", value: 3508 },
    { year: "FY 21-22", value: 3336 },
    { year: "FY 22-23", value: 3589 },
    { year: "FY 23-24", value: 3925 },
    { year: "FY 24-25", value: 3925 },
  ],
  NBA: [
    { year: "FY 20-21", value: 1122 },
    { year: "FY 21-22", value: 1214 },
    { year: "FY 22-23", value: 1500 },
    { year: "FY 23-24", value: 1577 },
    { year: "FY 24-25", value: 1577 },
  ],
};

export default function FinincialPage() {
  const [selectedKey, setSelectedKey] = React.useState("RFO");
  const [view, setView] = React.useState("finincial"); // NEW state

  return (
    <div className="px-4 overflow-hidden mt-20 md:px-10 py-6 w-screen ">
      {/* Toggle Buttons */}
      <div className="flex justify-center   max-w-[100%] gap-4 mb-6">
        <button
          onClick={() => setView("finincial")}
          className={`px-6 cursor-pointer w-full py-4 rounded-lg text-sm md:text-base transition ${
            view === "finincial" ? "bg-[#0363c6] text-white" : "bg-[#2c8bdf] text-white"
          }`}
        >
          Finincial
        </button>
        <button
          onClick={() => setView("segmental")}
          className={`px-6 py-2 cursor-pointer w-full rounded-lg text-sm md:text-base transition ${
            view === "segmental" ? "bg-[#0363c6] text-white" : "bg-[#2c8bdf] text-white"
          }`}
        >
          Segmental
        </button>
      </div>

      {/* Conditional Views */}
      {view === "finincial" ? (
        <div className="flex  flex-col items-center">
          <div className="flex flex-wrap  justify-center gap-4 md:gap-6 mb-6">
            {Finincial_data.map((item) => (
              <button
                key={item.key}
                onClick={() => setSelectedKey(item.key)}
                className={`text-sm md:text-base  px-4 py-2 rounded-lg cursor-pointer transition ${
                  selectedKey === item.key
                    ? "bg-[#0363c6] text-white"
                    : "bg-[#2c8bdf] text-white"
                }`}
              >
                {item.title}
              </button>
            ))}
          </div>
          <FinincialChart data={Finincial[selectedKey]} />
        </div>
      ) : (

        <SegmentalChart />

      )}
    </div>
  );
}
