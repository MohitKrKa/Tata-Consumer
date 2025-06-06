import React, { useEffect, useRef } from 'react'
import { motion } from "framer-motion"
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const SoftCover = ({props}) => {
    const containerRef = useRef(null)
    const glass1Ref = useRef(null)
    const glass2Ref = useRef(null)
    const glass3Ref = useRef(null)

    useEffect(() => {
        const container = containerRef.current
        const glass1 = glass1Ref.current
        const glass2 = glass2Ref.current
        const glass3 = glass3Ref.current

        // Set initial perspective and transform style
        gsap.set([glass1, glass2, glass3], {
            perspective: 1000,
            transformStyle: "preserve-3d",
            backfaceVisibility: "hidden",
            transformOrigin: "center center"
        })

        // Initial dramatic flip animation
        const initialFlip = () => {
            // First glass - dramatic flip
            gsap.fromTo(glass1,
                {
                    rotationY: -180,
                    rotationX: 45,
                    scale: 0.5,
                    opacity: 0,
                    y: -100
                },
                {
                    rotationY: 0,
                    rotationX: 0,
                    scale: 1,
                    opacity: 0.8,
                    y: 0,
                    duration: 1.5,
                    ease: "power4.out"
                }
            )

            // Second glass - dramatic flip
            gsap.fromTo(glass2,
                {
                    rotationY: 180,
                    rotationX: -45,
                    scale: 0.5,
                    opacity: 0,
                    y: 100
                },
                {
                    rotationY: 0,
                    rotationX: 0,
                    scale: 1,
                    opacity: 0.7,
                    y: 0,
                    duration: 1.5,
                    delay: 0.3,
                    ease: "power4.out"
                }
            )

            // Third glass - dramatic flip
            gsap.fromTo(glass3,
                {
                    rotationY: -180,
                    rotationX: 45,
                    scale: 0.5,
                    opacity: 0,
                    y: 100
                },
                {
                    rotationY: 0,
                    rotationX: 0,
                    scale: 1,
                    opacity: 0.6,
                    y: 0,
                    duration: 1.5,
                    delay: 0.6,
                    ease: "power4.out"
                }
            )
        }

        // Enhanced floating animation with more prominent movement
        const enhancedFloat = () => {
            // First glass - more pronounced floating
            gsap.to(glass1, {
                y: "+=150",
                duration: 2.5,
                repeat: -1,
                yoyo: true,
                ease: "sine.inOut",
                opacity: 0.8
            })

            // Second glass - opposite direction floating
            gsap.to(glass2, {
                y: "-=180",
                duration: 3,
                repeat: -1,
                yoyo: true,
                ease: "sine.inOut",
                opacity: 0.7,
                delay: 0.5
            })

            // Third glass - different timing floating
            gsap.to(glass3, {
                y: "+=200",
                duration: 2,
                repeat: -1,
                yoyo: true,
                ease: "sine.inOut",
                opacity: 0.6,
                delay: 1
            })

            // Add more pronounced rotation for dynamic movement
            gsap.to([glass1, glass2, glass3], {
                rotation: "+=10",
                duration: 3,
                repeat: -1,
                yoyo: true,
                ease: "sine.inOut"
            })
        }

        // Start animations
        initialFlip()
        setTimeout(enhancedFloat, 2000) // Start floating after flip

        // Scroll trigger for re-animation
        ScrollTrigger.create({
            trigger: container,
            start: "top center",
            end: "bottom center",
            onEnter: () => {
                initialFlip()
                setTimeout(enhancedFloat, 2000)
            },
            onLeaveBack: () => {
                gsap.killTweensOf([glass1, glass2, glass3])
            }
        })

        return () => {
            gsap.killTweensOf([glass1, glass2, glass3])
        }
    }, [])

    return (
        <>
            <div
                ref={containerRef}
                className="w-full md:h-[90vh] text-white overflow-hidden perspective-1000"
                style={{ backgroundColor: props.bgColor }}
            >
                <div className="flex md:relative flex-col md:flex-row w-[90%] mx-auto items-end h-full gap-6">
                    <div className="md:w-1/2 h-[90%] md:relative">
                        {/* Skewed Background Layers */}
                        <div ref={glass1Ref} className="absolute md:block hidden top-0 left-20 transform z-0 md:w-[300px] md:h-[400px] -skew-y-26 bg-white/20 backdrop-blur-[2px] transition-all duration-300 transform-gpu will-change-transform"></div>
                        <div ref={glass2Ref} className="absolute md:block hidden top-1/2 right-0 transform -translate-y-1/2 z-0 md:w-[270px] md:h-[360px] -skew-y-26 bg-white/20 backdrop-blur-[2px] transition-all duration-300 transform-gpu will-change-transform"></div>

                        {/* Main Image */}
                        <img
                            src={props.image}
                            alt="Hero Visual"
                            className="h-full mx-aut relative z-10"
                        />
                    </div>
                    <div className="md:w-1/2 h-[90%] relative">
                        <div ref={glass3Ref} className="absolute md:block hidden top-1 right-0 z-0 md:w-[270px] md:h-[360px] -skew-y-26 bg-white/20 backdrop-blur-[2px] transition-all duration-300 transform-gpu will-change-transform"></div>
                        <div className='md:absolute static top-1/2 transform md:-translate-y-1/2'>
                            <div className=" md:text-[8vh] font-extrabold text-5xl whitespace-pre-line">
                                <h1>{props.heading1}</h1>
                            </div>
                            <div className='my-5'>
                                <p className='text-white text-2xl'>
                                    {props.text}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SoftCover