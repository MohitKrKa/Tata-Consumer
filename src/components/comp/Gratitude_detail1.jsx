import React from "react";

const Gratitude_detail1 = () => {
  return (
    <div className="flex flex-col items-center text-center px-4 py-10 bg-[#fdfaf7]">
      <h2 className="text-2xl md:text-3xl font-bold text-[#1168b3] mb-6">
        Our Founder
      </h2>

      <div className="w-full h-full mb-6 rounded-2xl overflow-hidden shadow-lg">
        <img
          src="/Tata2.webp" // Replace with your actual image path
          alt="Jamsetji Nusserwanji Tata"
          className="object-cover w-full h-full"
        />
      </div>

      <h3 className="text-xl md:text-2xl font-semibold text-[#1168b3] mb-2">
        Jamsetji Nusserwanji Tata
      </h3>

      <p className="text-sm md:text-base text-gray-600 mb-8">
        03.03.1839 to 19.05.1904
      </p>

      <p className="text-base md:text-lg text-gray-700 max-w-xl leading-relaxed">
        In a free enterprise, the community is not just another stakeholder in
        business, but is in fact the very purpose of its existence.
      </p>
    </div>
  );
};

export default Gratitude_detail1;
