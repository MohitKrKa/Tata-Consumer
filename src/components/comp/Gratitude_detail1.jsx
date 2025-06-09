import React from "react";

const Gratitude_detail1 = () => {
  const content = `In a free enterprise, the community is not just another stakeholder in business, but is in fact the very purpose
of its existence.`;

  return (
    <div className="min-h-screen bg-[#fdfaf7]">
      
      
      <div className="relative w-full h-[90vh]">
        {/* Image Section */}
        <div className="absolute inset-0">
          <img
            src="/Tata2.webp"
            alt="Jamsetji Nusserwanji Tata"
            className="w-full h-full object-cover"
          />
        </div>
        
        {/* Content Section - Overlay */}
        <div className="absolute top-1/2 right-0 transform -translate-y-1/2 w-[45%] h-[80%] bg-white/95 backdrop-blur-sm rounded-l-3xl p-8 shadow-xl border border-white/20">
          <div className="h-full overflow-y-auto custom-scrollbar pr-4">
          <h2 className="text-2xl md:text-3xl font-bold text-[#1168b3] pb-3">
        Our Founder
      </h2>
            <h3 className="text-2xl font-bold text-[#1168b3] mb-4">
              Jamsetji Nusserwanji Tata
            </h3>
            <p className="text-[#0DB14B] font-semibold mb-6">
              03.03.1839 to 19.05.1904
            </p>
            <div className="prose prose-lg text-gray-600 space-y-4">
              {content.split('\n\n').map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
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

export default Gratitude_detail1;
