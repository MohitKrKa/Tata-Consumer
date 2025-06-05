import React from 'react'

const BusinessCard2 = ({obj}) => {
  return (
    <div className='flex md:flex-row flex-col justify-center md:gap-10 gap-5 mb-5 '>
    <div className='md:w-1/3 h-auto'>
      <div className='text-xl mb-5 text-[#18b1ee]'>{obj.head1}</div>
      <div className='mb-5'>{obj.text}</div>
    </div>

    <div className='md:w-1/3 h-auto'>
      <div className='text-xl mb-5 text-[#18b1ee]'>{obj.head2}</div>

      {[obj.p1, obj.p2, obj.p3].map(
        (point, index) =>
          point && (
            <ul key={index} className='flex items-start gap-4 mb-5 list-disc '>
              {/* <li className='w-3 h-3 bg-blue-600 skew-x-[-20deg] rounded-sm mt-1'></li> */}
              <li className='text-gray-800 text-base max-w-prose'>{point}</li>
            </ul>
          )
      )}
    </div>
    <div className='w-1/3'>
        {obj.img  && (
          <img className='h-[400px] ' src={`/${obj.img}`} alt="Business Visual" />
        )}
      </div>
  </div>
  )
}

export default BusinessCard2