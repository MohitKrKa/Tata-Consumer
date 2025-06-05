import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Heading2 from '../Heading2';

gsap.registerPlugin(ScrollTrigger);

const visionMissionValues = [
  {
    title: 'OUR VISION',
    description: 'To build better lives and thriving communities',
    icon: '/world1.webp',
  },
  {
    title: 'OUR MISSION',
    description: 'Passionately growing and transforming everyday',
    icon: '/world2.webp',
  },
  {
    title: 'VALUES',
    description:
      'Our values are drawn from the foundational values of the Tata Group and support our FMCG ambitions',
    icon: '/world3.webp',
  },
];

const coreValues = [
  { label: 'Empathy', icon: '/world4.webp' },
  { label: 'Agility', icon: '/world5.webp' },
  { label: 'Ownership', icon: '/world6.webp' },
  { label: 'Integrity', icon: '/world7.webp' },
  { label: 'Excellence', icon: '/world8.webp' },
];

export default function  World() {
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);
  const iconsRef = useRef([]);
  const productRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Card animation
      gsap.from(cardsRef.current, {
        y: 100,
        scale: 0.9,
        opacity: 0,
        duration: 1.2,
        ease: 'expo.out',
        stagger: 0.3,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
        },
      });
  
      // Icons animation
      gsap.from(iconsRef.current, {
        y: 50,
        scale: 0.7,
        opacity: 0,
        duration: 1,
        ease: 'back.out(1.7)',
        stagger: 0.15,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 75%',
        },
      });
  
      // Product Image animation
      gsap.from(productRef.current, {
        y: 120,
        scale: 0.95,
        opacity: 0,
        duration: 1.3,
        ease: 'power4.out',
        scrollTrigger: {
          trigger: productRef.current,
          start: 'top 85%',
        },
      });
    }, sectionRef);
  
    return () => ctx.revert();
  }, []);
  

  return (
    <section ref={sectionRef} className="md:py-12 py-5 bg-white text-center px-4 w-full max-w-6xl mx-auto">
      {/* <h2 className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-800 to-green-500 mb-14">
        Explore <span className="text-green-500">Our World</span>
      </h2> */}
      <div className='mb-10'>
      <Heading2 text={"Explore Our World"}/>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-14">
        {visionMissionValues.map((item, index) => (
            <div className='bg-[#00B150]'>

          <div
            key={index}
            ref={(el) => (cardsRef.current[index] = el)}
            className="bg-gradient-to-tr skew-bottom h-full from-[#f1f6fa] to-[#f0faf5] p-8 shadow-md flex flex-col items-center text-center"
          >

            <img src={item.icon} alt={item.title} className="w-20 mb-4" />
            <h3 className="text-[#00B150] font-bold text-2xl mb-2">{item.title}</h3>
            <p className="text-slate-800 text-lg">{item.description}</p>
          </div>
          </div>

        ))}
      </div>

      <div className="flex flex-wrap justify-center items-center gap-20 mb-14">
        {coreValues.map((item, index) => (
          <div
            key={index}
            ref={(el) => (iconsRef.current[index] = el)}
            className="flex flex-col items-center gap-2"
          >
            <div className='w-24 h-24'>
            <img src={item.icon} alt={item.label} className="object-contain w-full h-full" />
            </div>
            <span className="text-sm font-medium text-slate-800">{item.label}</span>
          </div>
        ))}
      </div>

      <div ref={productRef} className="flex justify-center">
        <img
          src="/optimised/prod-unit.webp"
          alt="Product Lineup"
          className="max-w-full md:max-w-6xl object-contain"
        />
      </div>
    </section>
  );
}
