import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import SplitType from 'split-type'

gsap.registerPlugin(ScrollTrigger)

const Heading = ({ color, title, linecolor }) => {
  const headingRef = useRef(null)

  useEffect(() => {
    const split = new SplitType(headingRef.current, {
      types: 'chars',
      tagName: 'span',
    })

    const chars = headingRef.current.querySelectorAll('.char')

    gsap.set(chars, {
      x: 80,
      opacity: 0,
    })

    gsap.to(chars, {
      x: 0,
      opacity: 1,
      ease: 'power4.out',
      duration: 2,
      stagger: {
        each: 0.04,
        from: 'start',
      },
      scrollTrigger: {
        trigger: headingRef.current,
        start: 'top 85%',
        toggleActions: 'play none none none',
      },
    })

    return () => split.revert()
  }, [])


  return (
    <div>
      <h1
        ref={headingRef}
        className="md:text-4xl text-2xl font-medium text-left mb-2"
        style={{color:color}}
      >
        {title}
      </h1>

      {/* Line below heading */}
      <div className="flex flex-row justify-start items-center">
        <div
          className="w-24 h-1 rounded-full flex flex-row justify-end items-center"
          style={{ backgroundColor: linecolor || (typeof color === 'string' ? color : '#1168b3') }}
        >
          <div className="w-1/2 h-1 bg-[#14b04a] rounded-full"></div>
        </div>
      </div>
    </div>
  )
}

export default Heading
