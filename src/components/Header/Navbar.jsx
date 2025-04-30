import React, { useState, useRef } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import { motion } from "framer-motion";
import logo from "/logo.webp";
import logo1 from "/logo1.webp";

const navItems = [
  { label: "Home", path: "/" },
  {
    label: "Business Momentum",path:"/BusinessMomentum",
    submenu: [
      "Chairman's Message",
      "MD & CEO's Message",
      "Business Landscape",
      "Financial and Operational Highlights",
      "Year in Review",
      "Spotlight on Recognitions",
    ],
  },
  {
    label: "Delivering on Strategy",
    submenu: [
      "Recalibrated Strategy",
      "Strengthen Core & Accelerate Growth Businesses",
      "Build on New Opportunities",
      "Drive Execution Excellence Everyday",
      "Create a Future-ready Organisation",
      "Drive Digital & Innovation",
      "Embed Sustainability",
    ],
  },
  {
    label: "Sustainability",path:"/sustainability",
    submenu: [
      "ESG Highlights",
      "ESG Governance",
      "Better Nutrition",
      "Better Sourcing",
      "Better Planet",
      "Better Communities",
    ],
  },
  {
    label: "Sustaining Value",
    submenu: [
      "Stakeholder Value Creation",
      "Materiality",
      "Risk Management",
      "Governance",
    ],
  },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openSubmenuMobile, setOpenSubmenuMobile] = useState(null);
  const [openSubmenuDesktop, setOpenSubmenuDesktop] = useState(null);
  const timeoutRef = useRef(null);

  const handleMouseEnter = (index) => {
    clearTimeout(timeoutRef.current);
    setOpenSubmenuDesktop(index);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setOpenSubmenuDesktop(null);
    }, 150); // Adjust this delay (in milliseconds) as needed
  };

  const handleSubmenuMouseEnter = () => {
    clearTimeout(timeoutRef.current);
  };

  const handleSubmenuMouseLeave = () => {
    setOpenSubmenuDesktop(null);
  };

  return (
    <nav className="bg-[#ffffff] fixed w-screen  text-[#848484]">
      <div className="ml-11 mr-11 py-3 flex justify-center gap-20 items-center">
        <img src={logo} alt="" />
        <div className="md:hidden">
          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-6 justify-center items-center">
          {navItems.map((item, idx) => (
            <li
              key={idx}
              className="relative group"
              onMouseEnter={() => handleMouseEnter(idx)}
              onMouseLeave={handleMouseLeave}
            >
              <a
                href={item.path || "#"}
                className="flex items-center gap-1 p-4 hover:bg-[#236ab4] hover:text-white rounded-2xl transition"
              >
                {item.label}
                {item.submenu && <ChevronDown size={20} />}
              </a>
              {item.submenu && (
                <ul
                  className={`absolute left-0 mt-2 bg-white text-black shadow-md rounded-md py-2 w-90 transform transition duration-300 z-10 ${
                    openSubmenuDesktop === idx
                      ? "opacity-100 translate-y-1 pointer-events-auto"
                      : "opacity-0 translate-y-4 pointer-events-none"
                  }`}
                  onMouseEnter={handleSubmenuMouseEnter}
                  onMouseLeave={handleSubmenuMouseLeave}
                >
                  {item.submenu.map((sub, i) => (
                    <motion.li
                      key={i}
                      className="relative px-4 py-2 cursor-pointer"
                      initial="rest"
                      whileHover="hover"
                      animate="rest"
                      variants={{
                        rest: {},
                        hover: {},
                      }}
                    >
                      <motion.div
                        className="absolute inset-0 h-8 bg-[#90c5fe] z-0 rounded-md"
                        variants={{
                          rest: { opacity: 0 },
                          hover: { opacity: 1 },
                        }}
                        transition={{ duration: 0.3 }}
                      />
                      <motion.a
                        href="#"
                        className="block relative z-10 text-sm"
                      >
                        {sub}
                      </motion.a>

                      {/* Underline */}
                      <motion.div
                        className="absolute bottom-1 left-0 h-[2px] bg-[#236ab4] rounded"
                        variants={{
                          rest: { width: 0 },
                          hover: { width: "100%" },
                        }}
                        transition={{ duration: 0.3 }}
                      />
                    </motion.li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
        <img src={logo1} alt="" />
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden px-4 pb-4">
          <ul className="space-y-4">
            {navItems.map((item, idx) => (
              <li key={idx}>
                <div className="flex items-center justify-between">
                  <a href={item.path || "#"} className="text-lg font-medium">
                    {item.label}
                  </a>
                  {item.submenu && (
                    <button
                      onClick={() =>
                        setOpenSubmenuMobile(
                          openSubmenuMobile === idx ? null : idx
                        )
                      }
                    >
                      <ChevronDown
                        className={`transform transition-transform duration-300 ${
                          openSubmenuMobile === idx ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                  )}
                </div>
                {item.submenu && openSubmenuMobile === idx && (
                  <ul className="mt-2 space-y-2 pl-4 text-gray-300">
                    {item.submenu.map((sub, i) => (
                      <li key={i}>
                        <a href="#" className="block hover:text-[#236ab4]">
                          {sub}
                        </a>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}
