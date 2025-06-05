import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const ExploreHeading = () => {
  const containerRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 85%',
        },
      })

      tl.from('.explore-text', {
        x: -80,
        opacity: 0,
        duration: 1,
        ease: 'power3.out',
      })
        .from(
          '.our-text',
          {
            opacity: 0,
            y: 20,
            duration: 1,
            ease: 'power3.out',
          },
          '-=0.6' // overlaps with previous
        )
        .from(
          '.world-text',
          {
            x: 80,
            opacity: 0,
            duration: 1.2,
            ease: 'power3.out',
          },
          '-=0.7'
        )
    }, containerRef)

    return () => ctx.revert()
  }, [])

  return (
    <div
  ref={containerRef}
  className="relative md:w-[50vw] m-auto flex flex-col justify-center items-center pb-16 overflow-hidden"
>
  {/* Blurred blue shape background */}
  <div className="absolute  inset-0 flex z-0 pointer-events-none">
    <div className="w-[60%] h-[60%] m-auto rounded-full bg-[#56c8cd]/40 items-center blur-[60px]"></div>
  </div>

  {/* Subtle cloud image layer (not blurred, just soft and subtle) */}
  <div className="absolute inset-0  opacity-10 z-0 pointer-events-none" />

  {/* Sharp Text on top */}
  <div className="relative text-center leading-none space-y-0">
    <div className="explore-text text-[clamp(3rem,8vw,5rem)] font-extrabold leading-[1] bg-clip-text text-transparent bg-gradient-to-r from-[#1168b3] to-[#00aabb] tracking-tigh">
      Explore
    </div>
    <div className="our-text text-[clamp(3rem,8vw,5rem)] font-regular leading-[0.8] bg-clip-text text-transparent bg-gradient-to-r from-[#1168b3] to-[#00aabb] tracking-tight">
      our
    </div>
    <div className="world-text text-[clamp(4rem,12vw,8rem)] leading-[0.8] font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-[#1168b3] to-[#00aabb]">
      world
    </div>
  </div>
</div>

  

  )
}

export default ExploreHeading
