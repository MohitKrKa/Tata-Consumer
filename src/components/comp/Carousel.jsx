import React from "react";
import Slider from "react-slick";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Heading2 from "../Heading2";
import KnowMore from "./KnowMore";
import {Link} from 'react-router-dom';
// Example data



// Custom Arrows
const PrevArrow = ({ onClick }) => (
  <button
    className="absolute bottom-[-2.5rem] left-1/2 transform -translate-x-[150%]  bg-white border border-gray-300 rounded-full p-2 shadow hover:bg-gray-100"
    onClick={onClick}
  >
    <FaChevronLeft className="text-gray-800" />
  </button>
);

const NextArrow = ({ onClick }) => (
  <button
    className="absolute bottom-[-2.5rem] left-1/2 transform -translate-x-[-50%]  bg-white border border-gray-300 rounded-full p-2 shadow hover:bg-gray-100"
    onClick={onClick}
  >
    <FaChevronRight className="text-gray-800" />
  </button>
);

const ProfileCardsCarousel = ({ people, head, color, linecolor, link }) => {
  const gradolor = {
    backgroundImage: 'linear-gradient(to right, #1168b3, #00aabb)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
  }
  const settings = {
    dots: false,
    infinite: true,
    speed: 600,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [

      {
        breakpoint: 1024,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 640,
        settings: { slidesToShow: 1, arrows: false },
      },
    ],
  };

  return (
    <div className="w-full marginal mx-auto  relative md:py-12">
      {/* <div className={`flex justify-center py-6 `}>
        <Heading color={color} title={head} linecolor={linecolor} />
      </div> */}
      <div className='w-fit mx-auto py-6'>
        <Heading2 text={head}/>
        </div>
      <Slider {...settings}>
        {people.map((person, index) => (
          <Link to={`/profile/${person.id}`} key={index}>
          <div key={index} id={person.id} className="px-4 ">
            <div className="rounded-xl overflow-hidden text-center transition-shadow duration-300">
              <div className="bg-gradient-to-r p-1 w-fit mx-auto from-[#1168b3] to-[#00aabb] rounded-xl">
                <div className="h-[260px] mx-auto w-[280px] border-gray-300 border-b-0 overflow-hidden rounded-xl">
                  <img
                    src={person.img}
                    alt={person.name}
                    className="  object-cover w-full bg-white h-full object-top"
                  />
                </div>
                <div className="bg-gradient-to-r w-[280px] h-[82px] mx-auto rounded-b-xl from-[#1168b3] to-[#00aabb] p-4">
                  <h3 className="text-base font-semibold text-white leading-4">{person.name}</h3>
                  <p className="text-gray-200 text-sm mt-1 leading-4 ">{person.designation}</p>
                </div>
              </div>
            </div>
          </div>
          </Link>
        ))}
      </Slider>
      {/* <a
                href=""
                className="inline-block mt-4 bg-gradient-to-r text-sm from-[#1168b3] to-[#00aabb] rounded-xl text-white font-semibold px-5 py-2 transition duration-200"
              >
                Know More
              </a> */}
      <div className="md:mt-20 w-full flex justify-center">
        <KnowMore
          link={link}
          isGradient={true}
        />
      </div>
    </div>
  );
};

export default ProfileCardsCarousel;
