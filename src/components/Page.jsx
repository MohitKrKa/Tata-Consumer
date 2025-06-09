
import React from "react";

const Page = ({ text, head1, text2, img1, img2, img3 }) => {
  return (
    <div className="bg-[#f4f2ee] min-h-[80vh] border flex flex-col md:flex-row p-4 gap-8 items-center justify-center">
      {/* Left Section */}
      <div className="md:w-1/2 w-full flex flex-col items-center md:items-start space-y-3">
        {img1 && (
          <img
            src={img1}
            alt=""
            className="w-full max-w-[400px] object-contain"
          />
        )}
        <img
          src={img2}
          alt=""
          className="w-full h-auto max-h-[50vh] object-contain"
        />
      </div>

      {/* Right Section */}
      <div className="md:w-1/2 w-full flex flex-col items-center md:items-start space-y-4 text-center md:text-left">
        <img
          src={img3}
          alt=""
          className="h-[8vh] md:h-[10vh] w-auto"
        />
        <h1 className="text-[#1267b3] text-3xl md:text-4xl font-medium">
          {head1}
        </h1>
        <p className="text-[#aeafb0] font-normal text-xl md:text-2xl">
          {text2}
        </p>
        <div>
          <span className="text-[#58595b] font-medium text-3xl md:text-4xl">
            For Better
          </span>
          <br />
          <span className="text-[6vh] md:text-8xl font-semibold bg-gradient-to-r from-[#91c08e] to-[#009add] bg-clip-text text-transparent">
            {text}
          </span>
        </div>
      </div>
  </div>
  
  )
};


   
export default Page;
