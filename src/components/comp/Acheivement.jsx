
// import React, { useEffect, useRef } from 'react'
// import gsap from 'gsap'
// import { ScrollTrigger } from 'gsap/ScrollTrigger'
// import Slider from 'react-slick'
// import 'slick-carousel/slick/slick.css'
// import 'slick-carousel/slick/slick-theme.css'
// import { AnimatedCounter } from './ui/animated.counter'
// gsap.registerPlugin(ScrollTrigger)

// const Acheivement = ({ obj }) => {
//   const containerRef = useRef(null)

//   useEffect(() => {
//     const ctx = gsap.context(() => {
//       gsap.from('.achievement-box', {
//         scrollTrigger: {
//           trigger: containerRef.current,
//           start: 'top 85%',
//         },
//         y: -100,
//         opacity: 0,
//         rotation: 5,
//         ease: 'bounce.out',
//         stagger: {
//           amount: 0.6,
//           each: 0.2,
//           from: 'start',
//         },
//         duration: 1.2,
//       })
//     }, containerRef)

//     return () => ctx.revert()
//   }, [])

//   const renderCard = (ob, index) => (
//     <div
//       key={index}
//       className={`achievement-box h-[300px] md:h-auto my-6 transform ${
//         index % 2 === 0 ? 'skew-y-6' : '-skew-y-6'
//       } bg-white border border-[#0DB14B] flex flex-col justify-center items-center shadow-md p-6 md:w-1/3 w-full`}
//     >
//       <div className={`transform ${index % 2 === 0 ? '-skew-y-6' : 'skew-y-6'}`}>
//         {ob.img && (
//           <img
//             className="w-10 h-10 object-contain mb-4"
//             src={ob.img}
//             alt={ob.title || 'achievement'}
//           />
//         )}
//         {ob.subtitle && (
//           <span className="text-xl font-semibold text-left mb-2 bg-gradient-to-r from-[#1168b3] to-[#00aabb] text-transparent bg-clip-text">
//             {ob.subtitle}
//           </span>
//         )}
//         <h1 className="text-4xl font-semibold text-left bg-gradient-to-r from-[#1168b3] to-[#00aabb] text-transparent bg-clip-text">
//           <AnimatedCounter value={ob.title}/>
//         </h1>
//         <p className="text-xl font-semibold leading-tight text-left mb-2 bg-gradient-to-r from-[#1168b3] to-[#00aabb] text-transparent bg-clip-text">
//           {ob.subtitle2}
//         </p>
//         <p className="text-sm text-gray-600 text-left">{ob.desc}</p>
//         <p className='text-xs mt-8'>{ob.ast}</p>
//       </div>
//     </div>
//   )

//   const settings = {
//     dots: false,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     arrows: true,
//     className: 'achievement-slider',
//     nextArrow: <CustomNextArrow />,
//     prevArrow: <CustomPrevArrow />
//   }

//   return (
//     <div ref={containerRef} className="w-full pb-16 py- overflow-x-hidden">
//       {/* 💻 md+ view: original layout (unchanged) */}
//       <div className="hidden md:flex flex-row flex-nowrap items-stretch justify-center gap-6 px-4">
//         {obj.map((ob, index) => renderCard(ob, index))}
//       </div>

//       {/* 📱 mobile view: slider with one card per view */}
//       <div className="md:hidden px-4 pb-8 ">
//         <Slider {...settings}>
//           {obj.map((ob, index) => (
//             <div key={index}>{renderCard(ob, index)}</div>
//           ))}
//         </Slider>
//       </div>
//     </div>
//   )
// }

// // Custom arrow components
// const CustomNextArrow = ({ onClick }) => (
//   <button
//     className="absolute -bottom-6 left-1/2 transform translate-x-4 z-10 bg-white rounded-full p-2 shadow-md hover:bg-gray-100 mt-6"
//     onClick={onClick}
//   >
//     <svg
//       xmlns="http://www.w3.org/2000/svg"
//       className="h-10 w-10 text-[#1168b3]"
//       fill="none"
//       viewBox="0 0 24 24"
//       stroke="currentColor"
//     >
//       <path
//         strokeLinecap="round"
//         strokeLinejoin="round"
//         strokeWidth={2}
//         d="M9 5l7 7-7 7"
//       />
//     </svg>
//   </button>
// )

// const CustomPrevArrow = ({ onClick }) => (
//   <button
//     className="absolute -bottom-6 left-1/2 transform -translate-x-16 z-10 bg-white rounded-full p-2 shadow-md hover:bg-gray-100 mt-6"
//     onClick={onClick}
//   >
//     <svg
//       xmlns="http://www.w3.org/2000/svg"
//       className="h-10 w-10 text-[#1168b3]"
//       fill="none"
//       viewBox="0 0 24 24"
//       stroke="currentColor"
//     >
//       <path
//         strokeLinecap="round"
//         strokeLinejoin="round"
//         strokeWidth={2}
//         d="M15 19l-7-7 7-7"
//       />
//     </svg>
//   </button>
// )

// export default Acheivement
import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { AnimatedCounter } from './ui/animated.counter'

gsap.registerPlugin(ScrollTrigger)

const Acheivement = ({ obj = [] }) => {
  const containerRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.achievement-box', {
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 85%',
        },
        y: -100,
        opacity: 0,
        rotation: 5,
        ease: 'bounce.out',
        stagger: {
          amount: 0.6,
          each: 0.2,
          from: 'start',
        },
        duration: 1.2,
      })
    }, containerRef)

    return () => ctx.revert()
  }, [])

  const renderCard = (ob, index) => (
    <div
      key={index}
      className={`achievement-box h-[300px] md:h-auto my-6 transform ${
        index % 2 === 0 ? 'skew-y-6' : '-skew-y-6'
      } bg-white border border-[#0DB14B] flex flex-col justify-center items-center shadow-md p-6 md:w-1/3 w-full`}
    >
      <div className={`transform ${index % 2 === 0 ? '-skew-y-6' : 'skew-y-6'}`}>
        {ob.img && (
          <img
            className="w-10 h-10 object-contain mb-4"
            src={ob.img}
            alt={ob.title || 'achievement'}
          />
        )}
        {ob.subtitle && (
          <span className="text-xl font-semibold text-left mb-2 bg-gradient-to-r from-[#1168b3] to-[#00aabb] text-transparent bg-clip-text">
            {ob.subtitle}
          </span>
        )}
        <h1 className="text-4xl font-semibold text-left bg-gradient-to-r from-[#1168b3] to-[#00aabb] text-transparent bg-clip-text">
          <AnimatedCounter value={ob.title} />
        </h1>
        {ob.subtitle2 && (
          <p className="text-xl font-semibold leading-tight text-left mb-2 bg-gradient-to-r from-[#1168b3] to-[#00aabb] text-transparent bg-clip-text">
            {ob.subtitle2}
          </p>
        )}
        {ob.desc && <p className="text-sm text-gray-600 text-left">{ob.desc}</p>}
        {ob.ast && <p className="text-xs mt-8">{ob.ast}</p>}
      </div>
    </div>
  )

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    className: 'achievement-slider',
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />,
  }

  return (
    <div ref={containerRef} className="w-full py-16 overflow-x-hidden">
      {/* Desktop View */}
      <div className="hidden md:flex flex-row flex-nowrap items-stretch justify-center gap-6 px-4">
        {obj.map((ob, index) => renderCard(ob, index))}
      </div>

      {/* Mobile View */}
      <div className="md:hidden px-4 pb-8">
        <Slider {...settings}>
          {obj.map((ob, index) => (
            <div key={index}>{renderCard(ob, index)}</div>
          ))}
        </Slider>
      </div>
    </div>
  )
}

// Custom arrow components
const CustomNextArrow = ({ onClick }) => (
  <button
    className="absolute -bottom-6 left-1/2 transform translate-x-4 z-10 bg-white rounded-full p-2 shadow-md hover:bg-gray-100 mt-6"
    onClick={onClick}
  >
    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-[#1168b3]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
    </svg>
  </button>
)

const CustomPrevArrow = ({ onClick }) => (
  <button
    className="absolute -bottom-6 left-1/2 transform -translate-x-16 z-10 bg-white rounded-full p-2 shadow-md hover:bg-gray-100 mt-6"
    onClick={onClick}
  >
    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-[#1168b3]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
    </svg>
  </button>
)

export default Acheivement
