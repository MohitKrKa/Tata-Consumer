import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { SplitText } from "gsap/SplitText";
// import banner from ;
const GlobalCover = ({
  title = "Sustainability",
  bgImage = "url('/Sustainability/banner.webp')",
  leftGradient = {
    from: "#006531",
    to: "#006531",
    opacity: 10
  },
  rightGradient = {
    from: "#006531",
    to: "#006531",
    opacity: 10
  },
  menuItems = [
    { 
      page: 136, 
      label: "ESG highlights",
      link: "#esg-highlights"
    },
    { 
      page: 138, 
      label: "ESG governance",
      link: "#esg-governance"
    },
    { 
      page: 144, 
      label: "For better nutrition",
      link: "#better-nutrition"
    },
    { 
      page: 160, 
      label: "For better sourcing",
      link: "#better-sourcing"
    },
    { 
      page: 176, 
      label: "For better planet",
      link: "#better-planet"
    },
    { 
      page: 196, 
      label: "Better communities",
      link: "#better-communities"
    },
  ],
  onMenuItemClick = (link) => {
    const element = document.querySelector(link);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
}) => {
  const boxRef = useRef(null);
  const titleRef = useRef(null);

  useEffect(() => {
    // Register SplitText plugin
    gsap.registerPlugin(SplitText);

    // Box animation
    gsap.fromTo(
      boxRef.current,
      {
        opacity: 0,
        y: 50,
      },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        delay: 1,
        ease: "power2.out"
      }
    );

    // Title animation with split text
    const splitTitle = new SplitText(titleRef.current, { type: "chars,words" });
    
    gsap.fromTo(
      splitTitle.chars,
      {
        opacity: 0,
        y: 50,
        rotateX: -90,
      },
      {
        opacity: 1,
        y: 0,
        rotateX: 0,
        duration: 1.2,
        stagger: 0.05,
        delay: 0.3,
        ease: "back.out(1.7)",
      }
    );

    // Cleanup
    return () => {
      splitTitle.revert();
    };
  }, []);

  return (
    <div
      className="relative w-full h-screen overflow-hidden bg-cover bg-center"
      style={{ backgroundImage: bgImage }}
    >
      {/* Left gradient angle */}
      <motion.div
        initial={{ x: "-100%" }}
        animate={{ x: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="absolute top-0 left-0 w-[60%] h-full clip-left-triangle z-10"
        style={{
          background: `linear-gradient(to right, ${leftGradient.from}${Math.round(leftGradient.opacity * 2.55).toString(16)}, ${leftGradient.to}${Math.round((leftGradient.opacity - 20) * 2.55).toString(16)})`
        }}
      ></motion.div>

      {/* Right gradient angle */}
      <motion.div
        initial={{ x: "100%" }}
        animate={{ x: 0 }}
        transition={{ duration: 1, ease: "easeOut", delay: 0.5 }}
        className="absolute top-0 right-0 w-[60%] h-full clip-right-triangle z-10"
        style={{
          background: `linear-gradient(to top right, ${rightGradient.from}${Math.round(rightGradient.opacity * 2.55).toString(16)}, ${rightGradient.to}${Math.round((rightGradient.opacity - 20) * 2.55).toString(16)})`
        }}
      ></motion.div>

      {/* Skewed submenu box */}
      <div
        ref={boxRef}
        style={{ transform: 'skewY(12deg)' }}
        className="absolute right-4 md:right-10 top-1/4 bg-[#1264ad] text-white shadow-lg px-4 md:px-6 py-8 md:py-12 z-20 w-[90%] md:w-[25%] lg:w-[22%]"
      >
        <div style={{ transform: 'skewX(-12deg)', rotate: '-12deg' }}>
          {menuItems.map(({ page, label, link }) => (
            <div 
              key={page} 
              className="mb-3 md:mb-4 cursor-pointer group"
              onClick={() => onMenuItemClick(link)}
            >
              <div className="relative">
                <p className="text-xs md:text-sm text-white group-hover:text-gray-200 transition-colors duration-300">{label}</p>
              </div>
              <hr className="my-2 border-gray-500 group-hover:border-white transition-colors duration-300" />
            </div>
          ))}
        </div>
      </div>

      {/* Title */}
      <div ref={titleRef} className="absolute top-8 md:top-30 left-4 md:left-10 z-30">
        <h1 className="text-4xl md:text-5xl lg:text-7xl text-white font-light tracking-wider">
          {title.split('\n').map((line, index) => (
            <React.Fragment key={index}>
              {line}
              {index < title.split('\n').length - 1 && <br />}
            </React.Fragment>
          ))}
        </h1>
      </div>
    </div>
  );
};

export default GlobalCover;
