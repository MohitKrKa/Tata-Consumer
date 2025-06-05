import React from 'react';

const Businesscard = ({ obj }) => {
  const hasImage = obj.img && obj.img.trim() !== '';

  return (
    <div className='flex flex-col md:flex-row w-full mb-10 bg-white rounded-2xl overflow-hidden'>
      {/* Left Section */}
      <div className='w-full md:w-1/2 p-6 flex flex-col justify-center bg-[#f3f4f6]/50'>
        <h2 className='text-lg md:text-xl text-[#1461a5] font-semibold mb-2'>{obj.head1}</h2>
        <p className='text-gray-800 mb-3'>{obj.text}</p>

        {hasImage && (
          <div>
            <h3 className='text-md text-[#16b2ef] mb-4'>{obj.head2}</h3>
            <ul className='list-disc list-inside text-gray-700 space-y-2'>
              <li>{obj.p1}</li>
              <li>{obj.p2}</li>
              <li>{obj.p3}</li>
            </ul>
          </div>
        )}
      </div>

      {/* Right Section */}
      <div className='w-full md:w-1/2 p-6 flex flex-col justify-center bg-[#e5f2fc]/50'>
        {hasImage ? (
          <img
            className='max-w-full h-auto rounded-lg'
            src={`/${obj.img}`}
            alt={obj.head1}
          />
        ) : (
          <div>
            <h3 className='text-md text-[#16b2ef] mb-4'>{obj.head2}</h3>
            <ul className='list-disc list-inside text-gray-700 space-y-3'>
              <li>{obj.p1}</li>
              <li>{obj.p2}</li>
              <li>{obj.p3}</li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Businesscard;
