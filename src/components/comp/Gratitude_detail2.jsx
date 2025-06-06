import React from "react";

const Gratitude_detail2= () => {
  return (
    <div className="flex flex-col items-center text-center px-4 py-10 bg-[#fdfaf7]">
      <h2 className="text-2xl md:text-3xl font-bold text-[#1168b3] mb-6">
      Remembering Mr. Tata
      </h2>

      <div className="w-full h-full mb-6 rounded-2xl overflow-hidden shadow-lg">
        <img
          src="/Tata1.webp" // Replace with your actual image path
          alt="Padma Vibhushan Mr. Ratan N. Tata"
          className="object-cover w-full h-full"
        />
      </div>

      <h3 className="text-xl md:text-2xl font-semibold text-[#1168b3] mb-2">
      Padma Vibhushan Mr. Ratan N. Tata
      </h3>

      <p className="text-sm md:text-base text-gray-600 mb-8">
      28.12.1937 to 09.10.2024
      </p>

      <p className="text-base md:text-lg text-gray-700 max-w-xl leading-relaxed">
      It is with a profound sense of loss
that we bid farewell to Mr. Ratan
Naval Tata, a truly uncommon
leader whose immeasurable
contributions have shaped not
only the Tata Group but also the
very fabric of our nation.
For the Tata Group, Mr. Tata
was more than a chairperson.
He inspired by example. With
an unwavering commitment
to excellence, integrity and
innovation, the Tata Group
under his stewardship
expanded its global footprint
while always remaining true to
its moral compass.
Mr. Tata’s dedication to
philanthropy and the development
of society has touched the lives
of millions. From education to
healthcare, his initiatives have
left a deep-rooted mark that will
benefit generations to come.
Reinforcing all of this was
Mr. Tata’s genuine humility in
every individual interaction.
<p className="text-3xl font-bold text-[#1168b3] mt-3">His legacy will continue
to inspire us as we strive
to uphold the principles
he so passionately
championed.</p>

      </p>
    </div>
  );
};

export default Gratitude_detail2;
