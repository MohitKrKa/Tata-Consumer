import React, { useRef, useEffect, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Heading2 from '../Heading2';
import KnowMore from './KnowMore';
// import ratan from '../assets/founders/ratan.webp';
// import jamsetji from '../assets/founders/jamsetji.webp';

gsap.registerPlugin(ScrollTrigger);

const founders = [
  
  {
    id: 2,
    title: "Our Founder",
    name: 'Jamsetji Nusserwanji Tata',
    date: '03.03.1839 to 19.05.1904',
    message: 'In a free enterprise, the community is not just another stakeholder in business, but is in fact the very purpose of its existence.',
    image: "/Tata2.webp",
    link:"/gratitude/founder"
  },
  {
    id: 1,
    title: "Remembering Mr. Tata",
    name: 'Padma Vibhushan Mr. Ratan N Tata',
    date: '28.12.1937 to 09.10.2024',
    message: 'His legacy will continue to inspire us as we strive to uphold the principles he so passionately championed.',
    image: "/Tata1.webp",
    link:"/gratitude/Tata"
  },
];

export default function Gratitude() {
  const [index, setIndex] = useState(0);
  const contentRef = useRef(null);
  const sectionRef = useRef(null);
  const imageRef = useRef(null);
  const overlayRef = useRef(null);

  const current = founders[index];

  useEffect(() => {
    // Initial animation
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top 80%',
      }
    });

    tl.fromTo(imageRef.current,
      { scale: 1.1, opacity: 0 },
      { scale: 1, opacity: 1, duration: 1.5, ease: 'power2.out' }
    )
      .fromTo(overlayRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 1, ease: 'power2.out' },
        '-=1'
      )
      .fromTo(contentRef.current,
        {
          y: 50,
          opacity: 0,
          // skewY: 5,
          scale: 0.95
        },
        {
          y: 0,
          opacity: 1,
          // skewY: 2,
          scale: 1,
          duration: 1.2,
          ease: 'power3.out'
        },
        '-=0.5'
      );
  }, []);

  const handleNext = () => {
    const tl = gsap.timeline();

    // Fade out current content
    tl.to(contentRef.current, {
      y: 30,
      opacity: 0,
      // skewY: 5,
      scale: 0.95,
      duration: 0.6,
      ease: 'power2.in'
    })
      // Fade out current image
      .to(imageRef.current, {
        scale: 1.1,
        opacity: 0,
        duration: 0.8,
        ease: 'power2.in'
      }, '-=0.4')
      // Update state
      .call(() => setIndex((prev) => (prev + 1) % founders.length))
      // Fade in new image
      .to(imageRef.current, {
        scale: 1,
        opacity: 1,
        duration: 1,
        ease: 'power2.out'
      })
      // Fade in new content
      .to(contentRef.current, {
        y: 0,
        opacity: 1,
        // skewY: 2,
        scale: 1,
        duration: 0.8,
        ease: 'power3.out'
      }, '-=0.4');
  };

  return (
    <>
    <section ref={sectionRef} className="hidden sm:block relative w-full h-screen overflow-hidden">
      {/* Background Image */}
      <img
        ref={imageRef}
        src={current.image}
        alt=""
        className="absolute inset-0 w-full h-full object-cover z-0"
      />

      {/* Dark overlay */}
      <div

        ref={overlayRef}
        className="absolute inset-0 bg-black/30 z-10"
      />
      <div className='absolute right-8 top-4'>
        <Heading2 text={current.title} color='white'/>
        </div>    
      {/* Content Box */}
      <div className="relative z-20 max-w-7xl mx-auto h-full flex items-center justify-end px-6 md:px-20">
        <div className='bg-[#0DB14B] pt-1 skew-top absolute right-0 top-1/2 transform -translate-y-1/2 w-full max-w-[80vh]'>
          <div
            ref={contentRef}
            className="bg-[#08549A] text-white p-8 md:pb-14 md:pt-20 w-full shadow-2xl skew-top-bottom"
          >
            <div>
              <h3 className="text-2xl md:text-3xl font-bold mb-2">{current.name}</h3>
              <p className="text-[#0DB14B] font-semibold">{current.date}</p>
              <p className="text-sm md:text-base mt-4 text-slate-100">{current.message}</p>
              {/* <button className="mt-6 inline-flex items-center px-4 py-2 border border-[#0DB14B] text-[#0DB14B] rounded-full hover:bg-[#0DB14B] hover:text-blue-900 transition-all">
              KnowMore
              </button> */}
               <div className="mt-5 flex md:flex-row flex-col md:items-center gap-8">
              <KnowMore
                link={current.link}
                isGradient={true}
              />
              </div>
            </div>
          </div>
        </div>

        {/* Pagination Dots */}
        <div className="absolute bottom-[13vh] right-8 flex gap-4">
          {founders.map((_, i) => (
            <button
              key={i}
              onClick={() => {
                if (i !== index) handleNext();
              }}
              className={`p-1 border border-white rounded-full transition-all duration-300 ${
                i === index 
                  ? ' shadow-lg shadow-[#0DB14B]/30' 
                  : 'hover:bg-white/80 hover:scale-110'
              }`}
            >
              <div className={`w-2 h-2 rounded-full ${i === index ? 'bg-[#0DB14B]' : ''}`} />
            </button>
          ))}
        </div>
      </div>
    </section>
    {/* Mobile phone code below */}
    <section
  ref={sectionRef}
  className="sm:hidden block relative w-full  overflow-hidden "
>
  {/* Background Image — visible only on sm+ screens */}
  <img
    ref={imageRef}
    src={current.image}
    alt=""
    className="hidden sm:block sm:absolute inset-0 w-full h-full object-cover z-0"
  />

  {/* Mobile Image on top */}
  <img
    src={current.image}
    alt=""
    className="block sm:hidden w-full md:h-full h-64 object-cover  "
  />

  {/* Dark overlay — hidden on mobile */}
  {/* <div
    ref={overlayRef}
    className="hidden sm:block absolute inset-0 bg-black/30 z-10"
  /> */}

  {/* Title */}
  {/* <div className=" ">
    <Heading2 text={current.title} color="white" />
  </div> */}

  {/* Content & Dots container */}
  <div className="relative z-20 max-w-7xl mx-auto w-full flex flex-col sm:flex-row sm:items-center sm:justify-end  md:px-20 flex-grow h-full">
    
    {/* Content Box */}
    <div className="w-full sm:absolute sm:right-0 sm:top-1/2 sm:transform sm:-translate-y-1/2 sm:max-w-xl sm:skew-top bg-[#0DB14B] ">
      <div
        ref={contentRef}
        className="bg-[#08549A] text-white p-6 sm:p-8 md:py-30 w-full shadow-2xl sm:skew-top-bottom"
      >
        <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-2">{current.name}</h3>
        <p className="text-[#0DB14B] font-semibold">{current.date}</p>
        <p className="text-sm sm:text-base mt-4 text-slate-100">{current.message}</p>
      </div>
    </div>
    

    {/* Pagination Dots */}
    <div className="flex justify-center sm:absolute sm:bottom-30 sm:right-8 gap-4 md:mt-6 mt-2 sm:mt-0">
      {founders.map((_, i) => (
        <button
          key={i}
          onClick={() => {
            if (i !== index) handleNext();
          }}
          className={`p-1 border md:border-white border-black rounded-full transition-all duration-300 ${
            i === index 
              ? 'shadow-lg shadow-[#0DB14B]/30' 
              : 'hover:bg-white/80 hover:scale-110'
          }`}
        >
          <div className={`w-2 h-2 rounded-full ${i === index ? 'md:bg-[#0DB14B] bg-[#000000]' : ''}`} />
        </button>
      ))}
    </div>
  </div>
</section>
</>
  );
}
