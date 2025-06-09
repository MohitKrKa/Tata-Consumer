// export default VerticalNav;
import { MdKeyboardArrowDown } from "react-icons/md";
import React, { useState, useEffect, useCallback, useMemo } from 'react';
// import Heading from "../Heading";
import Heading2 from "../Heading2";
import { debounce } from 'lodash';
import { motion, AnimatePresence } from 'framer-motion';

// Image preloader utility with caching
const imageCache = new Map();
const preloadImage = (src) => {
  if (imageCache.has(src)) {
    return Promise.resolve();
  }

  return new Promise((resolve, reject) => {
    const img = new Image();
    img.src = src;
    img.onload = () => {
      imageCache.set(src, true);
      resolve();
    };
    img.onerror = reject;
  });
};

const VerticalNav = () => {
  const [activeState, setActiveState] = useState('home');
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [loadedImages, setLoadedImages] = useState(new Set());
  const [currentSlide, setCurrentSlide] = useState(0);
  const [colour, setColour] = useState('#10b04a');
  const [isTransitioning, setIsTransitioning] = useState(false);

  const navItems = [
    {
      id: 'home', label: 'CURRENT CORE', title: "Delighting Customer", subcategory: [
        { head: "Largest", desc: "salt brand in India" },
        { head: "2^nd", desc: "largest branded tea player in India" },
        { head: "2^nd", desc: "largest branded tea manufacturer in UK" },
        { head: "Largest", desc: "tea brand in Canada" },
        { head: "4^th", desc: "largest Roast & Ground coffee brand in USA" }
      ], theme: "#10b04a"
    },
    {
      id: 'profile', label: 'PANTRY', title: "Delighting Customer", subcategory: [
        { head: "Himalayan", desc: "#1 natural mineral water brand in India" },
        { head: "Tata Sampann", desc: "National brand in pulses, spices, dry fruits and other staples" },
        { head: "Tata Soulfull", desc: "Reinventing 'Desh ke Millets' for today's kids and young adults" },
        { head: "Ching's Secret", desc: "India's leading Desi-Chinese brand" },
        { head: "Organic India", desc: "Leading organic F&B and herbal supplements brand" }
      ], theme: "#1267b3"
    },
    { id: 'messages', label: 'READY-TO-DRINK (RTD)', title: "Delighting Customer", subcategory: [], theme: "[#04adef]" },
    { id: 'settings1', label: 'BREAKFAST CEREALS AND SNACKING', title: "Delighting Customer", subcategory: [], theme: "#00acbc" },
    { id: 'settings2', label: 'HORIZON 3', title: "Delighting Customer", subcategory: [], theme: "#6488c5" },
    { id: 'settings3', label: 'INTERNATIONAL BUSINESS BRAND PORTFOLIO', title: "Delighting Customer", subcategory: [], theme: "#76c37a" },
  ];

  // Memoize content data to prevent unnecessary recalculations
  const contentData = useMemo(() => ({
    home: {
      carousel: [
        { image: "/delighting-cons/8.webp", smallimage: ['/Tea1.webp', '/Tea2.webp', '/Tea3.webp', '/Tea4.webp', '/Tea5.webp', '/Tea6.webp', '/Tea7.webp', '/Tea8.webp', '/Tea9.webp', '/Tea10.webp', '/Tea11.webp', '/Tea12.webp', '/Tea13.webp', '/Tea14.webp'], text: 'Tea', activeStyle: '' },
        { image: "/delighting-cons/9.webp", smallimage: ['/Packaged-Coffee1.webp', '/Packaged-Coffee2.webp', '/Packaged-Coffee3.webp', '/Packaged-Coffee4.webp', '/Packaged-Coffee5.webp', '/Packaged-Coffee6.webp', '/Packaged-Coffee7.webp'], text: 'Coffee', activeStyle: '' },
        { image: "/delighting-cons/10.webp", smallimage: ['/Salt-1.webp', '/Salt-2.webp', '/Salt-3.webp', '/Salt-4.webp', '/Salt-5.webp', '/Salt-6.webp', '/Salt-7.webp', '/Salt-8.webp', '/Salt-9.webp', '/Salt-10.webp', '/Salt-11.webp'], text: 'Salt', activeStyle: '' }
      ],
      showHeader: true,
      headerText: "Welcome to Your Journey"
    },
    profile: {
      carousel: [
        { image: '/delighting-cons/7.webp', smallimage: ['/Sampan-1.webp', '/Sampan-2.webp', '/Sampan-3.webp', '/Sampan-4.webp', '/Sampan-5.webp', '/Sampan-6.webp', '/Sampan-7.webp', '/Sampan-8.webp', '/Sampan-9.webp', '/Sampan-10.webp', '/Sampan-11.webp', '/Sampan-12.webp', '/Sampan-13.webp', '/Sampan-14.webp', '/Sampan-15.webp', '/Sampan-16.webp'], text: 'Staples and Spices', activeStyle: '' },
        { image: '/delighting-cons/6.webp', smallimage: ['/Sauce-1.webp', '/Sauce-2.webp', '/Sauce-3.webp', '/Sauce-4.webp', '/Sauce-5.webp', '/Sauce-6.webp', '/Sauce-7.webp', '/Sauce-8.webp', '/Sauce-9.webp', '/Sauce-10.webp', '/Sauce-11.webp', '/Sauce-12.webp'], text: 'Cooking aids and Condiments', activeStyle: '' },
        { image: '/delighting-cons/5.webp', smallimage: ['/Dryfruits1.webp', '/Dryfruits2.webp', '/Dryfruits3.webp', '/Dryfruits4.webp', '/Dryfruits5.webp', '/Dryfruits6.webp', '/Dryfruits7.webp', '/Dryfruits8.webp', '/Dryfruits9.webp', '/Dryfruits10.webp'], text: 'Dry Fruits', activeStyle: '' }
      ],
      showHeader: false
    },
    messages: {
      carousel: [
        { image: '/delighting-cons/3.webp', smallimage: ['/Health-Drink-1.webp', '/Health-Drink-2.webp', '/Health-Drink-3.webp', '/Health-Drink-4.webp', '/Health-Drink-5.webp', '/Health-Drink-6.webp', '/Health-Drink-7.webp', '/Health-Drink-8.webp', '/Health-Drink-9.webp', '/Health-Drink-10.webp', '/Health-Drink-11.webp', '/Health-Drink-12.webp'], text: 'READY-TO-DRINK (RTD)', activeStyle: '' },
      ],
      showHeader: true,
      headerText: "Stay Connected"
    },
    settings1: {
      carousel: [
        { image: '/delighting-cons/4.webp', smallimage: ['/Soulful-1.webp', '/Soulful-2.webp', '/Soulful-3.webp', '/Soulful-4.webp', '/Soulful-5.webp', '/Soulful-6.webp', '/Soulful-7.webp', '/Soulful-8.webp'], text: 'BREAKFAST CEREALS AND SNACKING', activeStyle: '' },
      ],
      showHeader: false
    },
    settings2: {
      carousel: [
        { image: '/delighting-cons/2.webp', smallimage: ['/HealthCare1.webp', '/HealthCare2.webp', '/HealthCare3.webp', '/HealthCare4.webp', '/HealthCare5.webp', '/HealthCare6.webp', '/HealthCare7.webp', '/HealthCare8.webp'], text: 'HORIZON 3', activeStyle: '' },
      ],
      showHeader: false
    },
    settings3: {
      carousel: [
        { image: '/delighting-cons/1.webp', smallimage: ['/Organic-Tea1.webp', '/Organic-Tea2.webp', '/Organic-Tea3.webp', '/Organic-Tea4.webp', '/Organic-Tea5.webp', '/Organic-Tea6.webp', '/Organic-Tea7.webp', '/Organic-Tea8.webp', '/Organic-Tea9.webp'], text: 'INTERNATIONAL BUSINESS BRAND PORTFOLIO', activeStyle: '' },
      ],
      showHeader: false
    }
  }), []);

  const activeNavItem = navItems.find(item => item.id === activeState);

  const hasSubcategory = activeNavItem?.subcategory?.length > 0;

  // Debounced state updates
  const debouncedSetActiveState = useCallback(
    debounce((newState) => {
      setActiveState(newState);
      setCurrentSlide(0);
    }, 100),
    []
  );

  // Preload next slide images
  useEffect(() => {
    let isMounted = true;
    const currentImages = contentData[activeState]?.carousel[currentSlide];

    if (!currentImages) return;

    const loadImages = async () => {
      try {
        setIsTransitioning(true);
        // Load main image first
        await preloadImage(currentImages.image);
        if (!isMounted) return;

        // Then load thumbnails in batches
        const batchSize = 3;
        for (let i = 0; i < currentImages.smallimage.length; i += batchSize) {
          const batch = currentImages.smallimage.slice(i, i + batchSize);
          await Promise.all(batch.map(img => preloadImage(img)));
          if (!isMounted) return;
        }

        if (isMounted) {
          setIsLoading(false);
          // Add a small delay before removing transition state
          setTimeout(() => {
            if (isMounted) {
              setIsTransitioning(false);
            }
          }, 100);
        }
      } catch (error) {
        console.error('Error loading images:', error);
        if (isMounted) {
          setIsLoading(false);
          setIsTransitioning(false);
        }
      }
    };

    setIsLoading(true);
    loadImages();

    return () => {
      isMounted = false;
    };
  }, [currentSlide, activeState]);

  // Optimize slide navigation
  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) =>
      prev === contentData[activeState].carousel.length - 1 ? 0 : prev + 1
    );
  }, [activeState, contentData]);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) =>
      prev === 0 ? contentData[activeState].carousel.length - 1 : prev - 1
    );
  }, [activeState, contentData]);

  // Handle image load
  const handleImageLoad = useCallback((imageSrc) => {
    setLoadedImages(prev => new Set([...prev, imageSrc]));
  }, []);

  return (
    <div className="w-full max-w-full mx-auto">
      <div className='w-fit mx-auto md:py-8 py-4'>
        <Heading2 text="Delighting consumers" />
      </div>
      <div
        className="py-6 gap-8"
        style={{
          backgroundColor: colour,
        }}
      >
        <div className='w-full margina mx-auto px-4 flex flex-col justify-center items-center'>
          {/* Mobile Dropdown Nav */}
          <div className="w-full md:hidden relative">
            <button
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className="w-full bg-white border border-gray-300 rounded-xl px-4 py-3 text-sm flex justify-between items-center shadow-sm hover:border-blue-400 transition"
            >
              <span>{activeNavItem.label}</span>
              <MdKeyboardArrowDown className="text-2xl" />
              {/* <ChevronDown className={`w-4 h-4 transition-transform ${dropdownOpen ? "rotate-180" : ""}`} /> */}

            </button>
            {dropdownOpen && (
              <ul className="absolute z-10 w-full mt-2 bg-white border border-gray-200 rounded-xl shadow-lg overflow-hidden animate-fadeIn max-h-60 overflow-y-auto">
                {navItems.map(item => (
                  <li
                    key={item.id}
                    onClick={() => {
                      debouncedSetActiveState(item.id);
                      setColour(item.theme);
                      setCurrentSlide(0);
                      setDropdownOpen(false);
                    }}
                    className={`px-4 py-2 text-sm cursor-pointer hover:bg-blue-100 transition-colors ${activeState === item.id ? "bg-blue-50 text-blue-600 font-semibold" : "text-gray-800"
                      }`}
                  >
                    {item.label}
                  </li>
                ))}
              </ul>
            )}
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex justify-center gap-2 shadow-sm rounded-3xl p-2 mx-auto border border-gray-200 bg-white">
            {navItems.map((item) => (
              <button
                key={item.id}
                className={`
                px-6 py-2.5 cursor-pointer text-sm font-medium rounded-2xl transition-all duration-200 whitespace-nowrap
                ${activeState === item.id
                    ? 'bg-gradient-to-r from-[#1168b3] to-[#00aabb] text-white shadow-sm'
                    : 'text-gray-800 hover:bg-gray-100 hover:text-[#2c8bdf]'
                  }
                focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-[#2c8bdf]
              `}
                onClick={() => {
                  debouncedSetActiveState(item.id);
                  setCurrentSlide(0);
                  setColour(item.theme);
                }}
              >
                {item.label}
              </button>
            ))}
          </nav>

          <div className="flex flex-col items-center justify-center w-full gap-8 mt-6">
            {/* Top Navigation: Arrows + Names */}
            <div className="flex items-center justify-between w-full max-w-[1200px] px-4">
              {/* Left Button with Previous Slide Name */}
              <button
                onClick={prevSlide}
                className="flex items-center gap-2 text-white hover:text-[#2c8bdf] transition-all duration-300 text-lg font-medium"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>

              </button>

              {/* Current Slide Title */}
              <div className="text-3xl font-bold text-white uppercase tracking-widest text-center">
                {contentData[activeState].carousel[currentSlide].text}
              </div>

              {/* Right Button with Next Slide Name */}
              <button
                onClick={nextSlide}
                className="flex items-center gap-2 text-white hover:text-[#2c8bdf] transition-all duration-300 text-lg font-medium cursor-pointer"
              >

                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
            {/* Carousel */}
            <div className="w-full max-w-[1400px] rounded-xl group relative mx-auto">
              <AnimatePresence mode="wait">
                {isLoading && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="absolute inset-0 bg-white/50 flex items-center justify-center z-10 backdrop-blur-sm"
                    style={{ willChange: 'opacity' }}
                  >
                    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
                  </motion.div>
                )}
              </AnimatePresence>

              <div className="p-6 rounded-3xl bg-white w-full flex md:flex-row flex-col gap-8 justify-center items-center">
                <div className='md:w-[30%] rounded-3xl md:block hidden relative overflow-hidden aspect-[3/4]'>
                  <AnimatePresence mode="wait">
                    <motion.img
                      key={`${activeState}-${currentSlide}-main`}
                      src={contentData[activeState].carousel[currentSlide].image}
                      alt={contentData[activeState].carousel[currentSlide].text}
                      className='w-full h-full rounded-3xl object-cover'
                      loading="lazy"
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 1.05 }}
                      transition={{
                        duration: 0.4,
                        ease: [0.4, 0, 0.2, 1]
                      }}
                      onLoad={() => handleImageLoad(contentData[activeState].carousel[currentSlide].image)}
                    />
                  </AnimatePresence>
                </div>

                <div className='md:w-[70%] flex flex-wrap gap-6 md:justify-start justify-center items-center'>
                  {contentData[activeState].carousel[currentSlide].smallimage?.map((img, idx) => (
                    <motion.div
                      key={`${activeState}-${currentSlide}-${idx}`}
                      className="w-[45%] md:w-[17%] relative aspect-square flex-shrink-0"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{
                        duration: 0.4,
                        delay: idx * 0.03,
                        ease: [0.4, 0, 0.2, 1]
                      }}
                    >
                      <img
                        src={img}
                        alt={`image-${idx}`}
                        className="w-full h-full object-contain rounded-lg"
                        loading="lazy"
                        onLoad={(e) => {
                          handleImageLoad(img);
                          e.target.style.opacity = '1';
                        }}
                        style={{ opacity: 0 }}
                      />
                    </motion.div>
                  ))}
                </div>

              </div>
            </div>
          </div>

          {/* Subcategory Section */}
          {hasSubcategory && (
            <div className="w-full max-w-[1200px] mx-auto mt-8">
              <div className="flex md:flex-row flex-col gap-6 items-stretch w-full justify-center" style={{
                backgroundColor: colour
              }}>
                {activeNavItem.subcategory.map((sub, i) => (
                  <div key={i} className='md:w-[20%]'>
                    <div className="flex flex-col justify-center space-y-3 p-6">
                      <div className="text-3xl font-semibold text-white">
                        {sub.head.split('^').map((part, index) =>
                          index === 1 ? <sup key={index}>{part}</sup> : part
                        )}
                      </div>

                      <div className="flex items-center w-full">
                        <div className="w-2 h-2 bg-white rounded-full"></div>
                        <div className="flex-grow h-px bg-white"></div>
                      </div>
                      <div className="text-sm text-white">{sub.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default VerticalNav;