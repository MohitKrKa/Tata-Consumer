import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SplitType from 'split-type';

gsap.registerPlugin(ScrollTrigger);

const Heading2 = ({ text, className = '', color = '#00aabb' }) => {
  const headingRef = useRef(null);

  useEffect(() => {
    const split = new SplitType(headingRef.current, {
      types: 'chars, words',
      tagName: 'span',
    });

    const chars = headingRef.current.querySelectorAll('.char');

    gsap.set(chars, {
      y: 100,
      opacity: 0,
      rotateX: -90,
      transformPerspective: 1000,
    });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: headingRef.current,
        start: 'top 80%',
        end: 'bottom 20%',
        toggleActions: 'play none none reverse',
      },
    });

    tl.to(chars, {
      y: 0,
      opacity: 1,
      rotateX: 0,
      transformPerspective: 1000,
      duration: 1.4,
      ease: 'expo.out',
      stagger: {
        each: 0.015,
        from: 'center',
      },
    });

    return () => {
      split.revert();
    };
  }, []);

  return (
    <h2
      ref={headingRef}
      className={`text-4xl md:text-7xl font-bold leading-tight ${className}`}
      style={{ color }}
    >
      {text}
    </h2>
  );
};

export default Heading2;
