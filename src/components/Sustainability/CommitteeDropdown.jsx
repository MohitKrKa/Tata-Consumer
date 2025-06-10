import React, { useState, useRef, useEffect } from "react";

const committeeData = [
  {
    title: "CSR and Sustainability Committee",
    color: "bg-[#fdf253]",
    responsibilities:
      "To establish a monitoring process to ensure that the Company’s actions are aligned with stakeholders’ interests",
    topic:
      "Sustainability performance, community outreach and impact, ESG targets",
    members: "Non-Executive, Independent Directors",
    frequency: "Bi-annual",
  },
  {
    title: "Sustainability Steering Committee",
    color: "bg-[#c7ecf9]",
    responsibilities:
      "Core committee that plans and monitors the execution of the sustainability strategy",
    topic:
      "Climate, water, plastic circularity, sustainable sourcing, waste management, biodiversity, among others",
    members:
      "Executive Director and Group CFO, CHRO, COO, Head of Sustainability",
    frequency: "Quarterly",
  },
  {
    title: "Nutrition Committee",
    color: "bg-[#e8f4fb]",
    responsibilities:
      "To monitor the nutritional impacts of our products on the consumers",
    topic: "Nutrition policy, Innovation",
    members: "Senior representatives from Marketing and R&D",
    frequency: "Quarterly",
  },
  {
    title: "Business and Human Rights Committee",
    color: "bg-[#cbd3ec]",
    responsibilities:
      "Ensure adherence to the Company’s Guidelines on Business and Human Rights and Modern Slavery Statement to promote employee welfare",
    topic: "Human Rights procedures, and related matters",
    members:
      "Senior representatives from Sustainability, Legal and Compliance, Procurement, Operations/Logistics, Sourcing, and Employee Engagement",
    frequency: "Quarterly",
  },
  {
    title: "Sustainable Operations Committee",
    color: "bg-[#d3f2f4]",
    responsibilities:
      "Establishes Working Groups for sustainability projects and monitors their progress",
    topic:
      "Operational efficiency, energy footprint, resource management, and more",
    members:
      "Senior representatives from Operations, HR, Environment, Health, and Safety (EHS)",
    frequency: "Quarterly",
  },
];

const headers = [
  { label: "Committee", color: "bg-[#1567b2]" },
  { label: "Responsibilities", color: "bg-[#10b04c]" },
  { label: "Topic Covered", color: "bg-[#b08f6f]" },
  { label: "Members + Functions", color: "bg-[#04adee]" },
  { label: "Periodicity of Meetings", color: "bg-[#04adbc]" },
];

export default function CommitteeDropdownInHeader() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef(null);
  const active = committeeData[activeIndex];

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <>
    <div className="text-sm md:text-base max-w-7xl mx-auto relative mb-4 px-2 sm:hidden">
      {/* Paragraph */}
      <div className="p-3 rounded-2xl bg-[#6c6f71]">
        <div className="mb-3 text-white text-sm md:text-base font-medium">
          The composition and responsibilities of the committees involved in our ESG governance structure are given below
        </div>

        {/* Header Row */}
        <div className="grid grid-cols-1 sm:grid-cols-5 font-semibold text-white relative z-20 gap-2">
          {/* Dropdown Header */}
          <div className={`relative ${headers[0].color} p-1 rounded-xl`} ref={dropdownRef}>
            <button
              onClick={() => setOpen((prev) => !prev)}
              className="w-full flex justify-between items-center px-3 py-2 rounded-lg bg-[#124a85]"
            >
              Committee
              <svg
                className={`w-6 h-6 ml-2 transition-transform ${open ? "rotate-180" : ""}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {open && (
              <ul className="absolute top-full left-0 w-full bg-white text-black border border-gray-300 z-50 max-h-64 overflow-y-auto">
                {committeeData.map((item, idx) => (
                  <li
                    key={idx}
                    onClick={() => {
                      setActiveIndex(idx);
                      setOpen(false);
                    }}
                    className={`px-4 py-2 hover:bg-gray-100 cursor-pointer ${
                      idx === activeIndex ? "bg-gray-200 font-bold" : ""
                    }`}
                  >
                    {item.title}
                  </li>
                ))}
              </ul>
            )}
          </div>

          {/* Other Headers */}
          {headers.slice(1).map((header, idx) => (
            <div key={idx} className={`p-1 text-center rounded-xl ${header.color}`}>
              <div className="px-3 py-2 bg-black/20 rounded-lg">{header.label}</div>
            </div>
          ))}
        </div>

        {/* Content Row */}
        <div className="relative mt-1">
          <div className="grid grid-cols-1 sm:grid-cols-5 border border-gray-300 text-[#3b4a68] bg-[#f7f6f1] rounded-md overflow-hidden">
            <div className={`p-4 font-semibold ${active.color}`}>
              {active.title}
            </div>
            <div className="p-4 border-t sm:border-t-0 sm:border-l border-gray-300">
              {active.responsibilities}
            </div>
            <div className="p-4 border-t sm:border-t-0 sm:border-l border-gray-300">
              {active.topic}
            </div>
            <div className="p-4 border-t sm:border-t-0 sm:border-l border-gray-300">
              {active.members}
            </div>
            <div className="p-4 border-t sm:border-t-0 sm:border-l border-gray-300">
              {active.frequency}
            </div>
          </div>

          {/* Right Strip (hidden on mobile) */}
          <div className={`hidden sm:block absolute top-0 right-0 h-full w-8 rounded-r-md rounded-t-2xl border-gray-400 ${active.color}`}></div>
        </div>
      </div>
    </div>
    <div className="hidden sm:block text-sm md:text-base max-w-7xl mx-auto relative  mb-4">
      {/* Paragraph above the button-like header row */}
      <div className="p-3 rounded-2xl bg-[#6c6f71]">
        <div className="mb-3 text-white text-sm md:text-base font-medium">
          The composition and responsibilities of the committees involved in our ESG governance structure are given below
        </div>

        {/* Header Row */}
        <div className="grid grid-cols-5 font-semibold text-white relative z-20 gap-2">
          {/* Dropdown Header */}
          <div className={`relative ${headers[0].color} p-1 rounded-xl`} ref={dropdownRef}>
            <button
              onClick={() => setOpen((prev) => !prev)}
              className="w-full flex justify-between items-center px-3 py-2 rounded-lg bg-[#124a85]"
            >
              Committee
              <svg
                className={`w-6 h-6 ml-2 transition-transform ${open ? "rotate-180" : ""}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {open && (
              <ul className="absolute top-full left-0 w-full bg-white text-black border border-gray-300  ">
                {committeeData.map((item, idx) => (
                  <li
                    key={idx}
                    onClick={() => {
                      setActiveIndex(idx);
                      setOpen(false);
                    }}
                    className={`px-4 py-2 hover:bg-gray-100 cursor-pointer ${
                      idx === activeIndex ? "bg-gray-200 font-bold" : ""
                    }`}
                  >
                    {item.title}
                  </li>
                ))}
              </ul>
            )}
          </div>

          {/* Other Headers */}
          {headers.slice(1).map((header, idx) => (
            <div key={idx} className={`p-1 text-center rounded-xl ${header.color}`}>
              <div className="px-3 py-2 bg-black/20 rounded-lg">{header.label}</div>
            </div>
          ))}
        </div>

        {/* Content Row with dynamic right strip */}
        <div className="relative mt-1">
          <div className="grid grid-cols-5 border border-gray-300 text-[#3b4a68] bg-[#f7f6f1] rounded-md overflow-hidden">
            <div className={`p-4 font-semibold ${active.color}`}>
              {active.title}
            </div>
            <div className="p-4 border-l border-gray-300">
              {active.responsibilities}
            </div>
            <div className="p-4 border-l border-gray-300">{active.topic}</div>
            <div className="p-4 border-l border-gray-300">{active.members}</div>
            <div className="p-4 border-l border-gray-300">{active.frequency}</div>
          </div>

          {/* Right color strip */}
          <div className={`absolute top-0 right-0 h-full w-8 rounded-r-md rounded-t-2xl border-gray-400 ${active.color}`}></div>
        </div>
      </div>
    </div>
    </>
    
  );
}
