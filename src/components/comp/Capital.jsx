import React from 'react'
import Marquee from 'react-fast-marquee'
import Heading2 from '../Heading2'

const Capital = () => {
  const capital = [
    {
      img: "./Social-Capital.webp",
      text: "Social and Relationship Capital"
    },
    {
      img: "./Manufactured-capital.webp",
      text: "Manufactured Capital"
    },
    {
      img: "./Human-Capital.webp",
      text: "Human Capital"
    },
    {
      img: "./Natural-capital.webp",
      text: "Natural Capital"
    },
    {
      img: "./Financial-Capital.webp",
      text: "Financial Capital"
    },
    {
      img: "./Intellectual-capital.webp",
      text: "Intellectual Capital"
    }
  ]

  return (
    <div className="w-full py-4 bg-white">
       <div className='w-fit mx-auto py-6'>
        <Heading2 text="Our Six Capitals"/>
        </div>
      <Marquee gradient={false} speed={40} loop={0}>
        {capital.map((item, index) => (
          <div
            key={index}
            className="flex flex-col justify-center items-center border border-[#0db14b] px-6 py-6 mx-4 w-[250px] h-40 shadow-sm hover:shadow-md transition-shadow duration-300 bg-white"
          >
            <img src={`/${item.img}`} alt={item.text} className="h-18 w-18 mb-2 object-contain" />
            <div className="text-xl font-regular text-center text-gray-700">
              {item.text}
            </div>
          </div>
        ))}
      </Marquee>
    </div>
  )
}

export default Capital
