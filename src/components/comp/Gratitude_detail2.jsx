import React from "react";

const Gratitude_detail2 = () => {
  const content = `It is with a profound sense of loss that we bid farewell to Mr. Ratan Naval Tata, a truly uncommon leader whose immeasurable contributions have shaped not only the Tata Group but also the very fabric of our nation.

For the Tata Group, Mr. Tata was more than a chairperson. He inspired by example. With an unwavering commitment
to excellence, integrity and innovation, the Tata Group under his stewardship expanded its global footprint while always remaining true to its moral compass.

Mr. Tata’s dedication to philanthropy and the development of society has touched the lives
of millions. From education to healthcare, his initiatives have
left a deep-rooted mark that will benefit generations to come. Reinforcing all of this was
Mr. Tata’s genuine humility in every individual interaction.
`;

  return (
    <div className="min-h-screen bg-[#fdfaf7]">
      <div className="relative w-full h-[90vh]">
        {/* Image Section */}
        <div className="absolute inset-0">
          <img
            src="/Tata1.webp"
            alt="Ratan N Tata"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Content Section - Overlay */}
        <div className="absolute top-1/2 right-0 transform -translate-y-1/2 w-[45%] h-[80%] bg-white/95 backdrop-blur-sm rounded-l-3xl p-8 shadow-xl border border-white/20">
          <div className="h-full overflow-y-auto custom-scrollbar pr-4">
            <h2 className="text-2xl md:text-3xl font-bold text-[#1168b3] pb-3">
              Remembering Mr. Tata
            </h2>
            <h3 className="text-2xl font-bold text-[#1168b3] mb-4">
              Padma Vibhushan Mr. Ratan N Tata
            </h3>
            <p className="text-[#0DB14B] font-semibold mb-6">
              28.12.1937 to 09.10.2024
            </p>
            <div className="prose prose-lg text-gray-600 space-y-4 mb-6">
              {content.split('\n\n').map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
            <p className="text-2xl md:text-3xl font-bold text-[#1168b3]">
            His legacy will continue to inspire us as we strive to uphold the principles he so passionately championed.
            </p>
          </div>
        </div>
      </div>

      <style jsx>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        
        .custom-scrollbar::-webkit-scrollbar-track {
          background: rgba(0, 0, 0, 0.05);
          border-radius: 3px;
        }
        
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(0, 0, 0, 0.2);
          border-radius: 3px;
        }
        
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: rgba(0, 0, 0, 0.3);
        }
      `}</style>
    </div>
  );
};

export default Gratitude_detail2;
