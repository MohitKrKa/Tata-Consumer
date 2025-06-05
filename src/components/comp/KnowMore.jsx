import React from 'react';
import { Link } from 'react-router-dom';
const KnowMore = ({ link, isGradient = false }) => {
  return (
    <div
      className={` ${
        isGradient
          ? 'bg-gradient-to-r from-[#1168b3] to-[#00aabb] p-[2px] rounded-3xl w-fit h-auto'
          : 'bg-transparent w-fit h-auto'
      }`}
    >
      <div
        className="bg-white flex items-center justify-center rounded-3xl px-4 py-1 group hover:-translate-y-1 transition-transform duration-300"
      >
        <Link
          to={link}
          className="text-black px-4 py-2 rounded-2xl transition-colors duration-300 hover:bg-gray-100"
        >
          Know More
        </Link>
        <img
          src="/arrow.webp"
          alt="arrow"
          className="w-7 h-10 transition-transform duration-300 transform group-hover:translate-x-1"
        />
      </div>
    </div>
  );
};

export default KnowMore;
