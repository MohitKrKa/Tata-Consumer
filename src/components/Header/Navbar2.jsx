import React, { useState, useEffect } from "react";
import { FaBars } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import { FaLinkedinIn, FaTwitter, FaFacebookF, FaInstagram } from "react-icons/fa";
import { FiGlobe, FiSearch } from "react-icons/fi";
import { FaAngleDown } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { label } from "framer-motion/client";
const navItems = [
    { label: "Home", path: "/" },
    {
      label: "Business Momentum",
      path: "/business-momentum",
    //   path: "//",
      submenu: [
        { label: "Chairman's Message", path: "/business-momentum/chairman-message" },
        { label: "MD & CEO's Message", path: "/business-momentum/ceo-message" },
        { label: "Business Landscape", path: "/business-momentum/landscape" },
        { label: "Financial and Operational Highlights", path: "/business-momentum/highlights" },
        { label: "Year in Review", path: "/business-momentum/year-review" },
        { label: "Spotlight on Recognitions", path: "/business-momentum/recognitions" },
        // { label: "Spotlight on Recognitions", path: "/" },
      ],
    },
    {
      label: "Delivering on Strategy",
    //   path: "///",
      path: "/strategy",
      submenu: [
        // { label: "Recalibrated Strategy", path: "/strategy/recalibrated" },
        { label: "How will we win", path: "/strategy/our-strategy" },
        { label: "Strengthen Core & Accelerate Growth Businesses", path: "/strategy/core-growth" },
        // { label: "Strengthen Core & Accelerate Growth Businesses", path: "/" },
        { label: "Build on New Opportunities", path: "/strategy/opportunities" },
        // { label: "Build on New Opportunities", path: "/" },
        { label: "Drive Execution Excellence Everyday", path: "/strategy/execution" },
        // { label: "Drive Execution Excellence Everyday", path: "/" },
        { label: "Create a Future-ready Organisation", path: "/strategy/future-ready" },
        // { label: "Create a Future-ready Organisation", path: "/" },
        { label: "Drive Digital & Innovation", path: "/strategy/digital" },
        // { label: "Drive Digital & Innovation", path: "/" },
        { label: "Embed Sustainability", path: "/strategy/sustainability" },
        // { label: "Embed Sustainability", path: "/" },
      ],
    },
    {
      label: "Sustainability",
    //   path: "/sustainability",
      path: "////",
      submenu: [
        { label: "ESG Highlights", path: "/sustainability/esg-highlights" },
        // { label: "ESG Highlights", path: "/" },
        { label: "ESG Governance", path: "/sustainability/esg-governance" },
        // { label: "ESG Governance", path: "/" },
        // { label: "Better Nutrition", path: "/sustainability/nutrition" },
        { label: "Better Nutrition", path: "/" },
        { label: "Better Sourcing", path: "/sustainability/sourcing" },
        // { label: "Better Sourcing", path: "/" },
        { label: "Better Planet", path: "/sustainability/planet" },
        // { label: "Better Planet", path: "/" },
        { label: "Better Communities", path: "/sustainability/communities" },
        // { label: "Better Communities", path: "/" },
      ],
    },
    {
      label: "Sustaining Value",
    //   path: "/value",
      path: "/////",
      submenu: [
        // { label: "Stakeholder Value Creation", path: "/value/stakeholder" },
        { label: "Our stakeholders and topics of priority", path: "/sustaining-value/Materiality_assessment_and_stakeholder_discussions" },
        // { label: "Materiality", path: "/value/materiality" },
        { label: "Materiality assessment and stakeholder discussions", path: "/sustaining-value/Materiality_assessment_and_stakeholder_discussions" },
        // { label: "Risk Management", path: "/value/risk" },
        { label: "Sustainable development goals", path: "/sustaining-value/Sustainable_development_goals" },
        // { label: "Governance", path: "/value/governance" },
        { label: "Risk management", path: "/sustaining-value/Risk_management" },
        { label: "Managing risks", path: "/sustaining-value/Managing_risks" },
        {label:"Governance",path:"/sustaining-value/Governance"},
        {
            label:"Corporate information",path:"/sustaining-value/Corporate_information"
        },
        {
            label:"Ten year financial highlights",path:"/sustaining-value/Ten_year_financial_highlights"
        }
      ],
    },{
        label: "Reports",
        path: "//////////////////",
        submenu: [
            {
                label: "Statutory Reports",
                path: "/docs/Board's_Report.pdf"
            },
            {
                label: "Financial Statements",
                path: "/docs/Financial_Statements.pdf"
            },
            {
                label: "Notice of Annual General Meeting",
                path: "/docs/Annual_Notice.pdf"
            }
        ]
    },
  ];
  

// const navItems = [
//     {
//         label: "Home",
//         path: "/",
//     },
//     {
//         label: "Business Momentum",
//         path: "/business-momentum",
//         submenu: [
//             { label: "Growth", path: "/business-momentum/growth" },
//             { label: "Expansion", path: "/business-momentum/expansion" },
//         ],
//     },
//     {
//         label: "Delivering on Strategy",
//         path: "/strategy",
//     },
//     {
//         label: "Sustainability",
//         path: "/sustainability",
//         submenu: [
//             { label: "Environment", path: "/sustainability/environment" },
//             { label: "Social", path: "/sustainability/social" },
//         ],
//     },
//     {
//         label: "Sustaining Value",
//         path: "/sustaining-value",
//     },
//     {
//         label: "Statutory Reports",
//         path: "/statutory-reports",
//     },
// ];

export default function Navbar() {
    const [active, setActive] = useState(navItems[0].path);
    const [mobileOpen, setMobileOpen] = useState(false);
    const [openSubmenu, setOpenSubmenu] = useState(null);
    const [isScrolled, setIsScrolled] = useState(false);
    const [lastScrollY, setLastScrollY] = useState(0);
    const [scrollDirection, setScrollDirection] = useState('up');

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            
            // Determine scroll direction
            if (currentScrollY > lastScrollY) {
                setScrollDirection('down');
                setIsScrolled(true);
            } else {
                setScrollDirection('up');
                setIsScrolled(false);
            }
            
            setLastScrollY(currentScrollY);
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, [lastScrollY]);

    // Renders the main nav links
    const renderLinks = (isMobile = false) =>
        navItems.map((item, idx) => {
          const isUnclickable = item.label === "Reports";
      
          return (
            <div key={item.label} className="relative group">
              {isUnclickable ? (
                // Unclickable parent (e.g. "Reports")
                <div
                  className={`px-3 py-2 cursor-default text-[16px] font-normal flex items-center gap-1 ${
                    active === item.path
                      ? "text-[#0072CE] border-t-2 border-[#0072CE]"
                      : "text-gray-500"
                  }`}
                  onMouseEnter={() => {
                    if (item.submenu && !isMobile) setOpenSubmenu(idx);
                  }}
                  onMouseLeave={() => {
                    if (item.submenu && !isMobile) setOpenSubmenu(null);
                  }}
                >
                  <div className="whitespace-nowrap text-[14px] truncate">{item.label}</div>
                  {item.submenu && (
                    <FaAngleDown className="text-[#0072CE] w-3 h-3 text-xl" />
                  )}
                </div>
              ) : (
                <Link
                  to={item.path}
                  className={`px-3 py-2 cursor-pointer text-[16px] font-normal flex items-center gap-1 focus:outline-none ${
                    active === item.path
                      ? "text-[#0072CE] border-t-2 border-[#0072CE]"
                      : "text-gray-500"
                  }`}
                  onClick={() => {
                    setActive(item.path);
                    if (item.submenu && !isMobile) setOpenSubmenu(idx);
                    else setOpenSubmenu(null);
                    if (isMobile) setMobileOpen(false);
                  }}
                  onMouseEnter={() => {
                    if (item.submenu && !isMobile) setOpenSubmenu(idx);
                  }}
                  onMouseLeave={() => {
                    if (item.submenu && !isMobile) setOpenSubmenu(null);
                  }}
                >
                  <div className="whitespace-nowrap text-[14px] truncate">{item.label}</div>
                  {item.submenu && (
                    <FaAngleDown className="text-[#0072CE] w-3 h-3 text-xl" />
                  )}
                </Link>
              )}
      
              {/* Submenu (desktop only) */}
              {item.submenu && !isMobile && (
                <div
                  className={`absolute left-0 top-full mt-o min-w-[180px] bg-white shadow-lg rounded transition-all duration-300 overflow-hidden ${
                    openSubmenu === idx ? "opacity-100 visible" : "max-h-0 opacity-0 invisible"
                  }`}
                  onMouseEnter={() => setOpenSubmenu(idx)}
                  onMouseLeave={() => setOpenSubmenu(null)}
                  style={{ zIndex: 20 }}
                >
                  {item.submenu.map((sub) => {
                    const isPdf = sub.path.endsWith(".pdf");
                    return isPdf ? (
                      <a
                        href={sub.path}
                        key={sub.label}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block w-full text-left px-4 py-2 cursor-pointer text-[14px] text-gray-700 hover:bg-gray-100"
                        onClick={() => setOpenSubmenu(null)}
                      >
                        {sub.label}
                      </a>
                    ) : (
                      <Link
                        to={sub.path}
                        key={sub.label}
                        className="block w-full text-left px-4 py-2 cursor-pointer text-[14px] text-gray-700 hover:bg-gray-100"
                        onClick={() => {
                          setActive(item.path);
                          setOpenSubmenu(null);
                        }}
                      >
                        {sub.label}
                      </Link>
                    );
                  })}
                </div>
              )}
            </div>
          );
        });
      
    return (
        <header className="w-full bg-white">
            {/* Top header (scrolls away) */}
            <div className={`fixed py-1 top-0 left-0 right-0 z-40 bg-white border-b border-gray-100 transition-all duration-200 ${isScrolled ? '-translate-y-[40px]' : 'translate-y-0'}`}>
                <div className="max-w-6xl mx-auto flex items-center justify-between  py-2 px-4">
                    {/* Left: Logo and title */}
                    <div className="flex items-center gap-3">
                        <a href="https://www.tataconsumer.com/" target="_blank">
                        <img 
                            src="/logo.png"
                            alt="Tata Consumer"
                            className="md:h-4 h-3 w-auto"
                        />
                        </a>
                    </div>
                    {/* Right: Icons */}
                    <div className="hidden sm:flex items-center gap-4 ">
                        <a href="https://www.linkedin.com/company/tata-consumer-products/?viewAsMember=true" target="_blank">
                        <FaLinkedinIn className="text-[#0072CE] text-sm" />
                        </a>
                        <a href="https://x.com/TataConsumer" target="_blank">
                        <FaTwitter className="text-[#0072CE] text-sm" />
                        </a>
                        <a href="https://www.facebook.com/TataConsumerProducts/" target="_blank">
                        <FaFacebookF className="text-[#0072CE] text-sm" />
                        </a>
                        <a href="https://www.instagram.com/tataconsumerproducts/" target="_blank">
                        <FaInstagram className="text-[#0072CE] text-sm" />
                        </a>
                        <a href="https://www.tata.com/" target="_blank"><img
                            src="/tata-group.png"
                            alt="Tata"
                            className="h-4 w-auto"
                        />
                        </a>
                        
                    </div>
                    <div className="sm:hidden ml-3">
                    <a href="https://www.tata.com/" target="_blank"><img
                            src="/tata-group.png"
                            alt="Tata"
                            className="h-4 w-auto"
                        />
                        </a>
                    </div>
  
                </div>
            </div>

            {/* Sticky Navigation Bar */}
            <div className={`fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-100 transition-all duration-200 ${isScrolled ? 'translate-y-0' : 'translate-y-[40px]'}`}>
                <div className="md:max-w-6xl mx-auto">
                    <nav className="max-w-7xl mx-auto flex items-center justify-between px-4">
                        {/* Nav links (desktop) */}
                        <div className="hidden md:flex items-center gap-2">
                            {renderLinks()}
                        </div>
                        {/* Right: Newsroom, Contact, Search */}
                        <div className="hidden md:flex items-center gap-6">
                            <a href="https://www.tataconsumer.com/sites/g/files/gfwrlq316/files/2025-05/Tata_Consumer_AR%202024-25_" target="_blank" className="text-[#0072CE] text-[14px] font-semibold">Download Full Report</a>
                        </div>
                        {/* Hamburger (mobile) */}
                        <button
                            className="md:hidden ml-2 p-2"
                            onClick={() => setMobileOpen((v) => !v)}
                        >
                            {mobileOpen ? <IoMdClose size={24} /> : <FaBars size={24} />}
                        </button>
                    </nav>
                    {/* Mobile menu */}
                    <div
                        className={`md:hidden bg-white transition-all duration-500 overflow-hidden ${mobileOpen ? "max-h-[500px]" : "max-h-0"
                            }`}
                    >
                        <div className="flex flex-col gap-1 px-4 pb-3">
                            {renderLinks(true)}
                            <a href="https://www.tataconsumer.com/newsroom" target="_blank" className="text-[#0072CE] py-2">Newsroom</a>
                            <a href="https://www.tataconsumer.com/contact-us" target="_blank" className="text-[#0072CE] py-2">Contact</a>
                            <div className="flex items-center gap-2 py-2">
                                <FiSearch className="text-[#0072CE] text-xl" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}