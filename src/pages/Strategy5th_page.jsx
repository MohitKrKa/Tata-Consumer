import React from "react";

const StrategyPageCombined = () => {
  return (
    <>
      <div className="marginal text-lg mt-5 mb-5  ">
        {/* Section 1: Tea Business + E-commerce */}
        <div className="md:flex flex-row gap-5 mb-5">
          <div className="flex justify-end flex-col md:flex-ro gap-5 mx-auto items-start md:w-[45%] ">
            <div className="flex- h-fit">
              <h2 className="text-[#1368b4] text-2xl font-semibold mb-2">
                Accelerated Growth Momentum in Tea Business
              </h2>
              <p className=" ">
                The tea business demonstrated considerable resilience in the face
                of inflationary pressures and a challenging demand environment.
                Growth momentum strengthened in the second half of FY 25, driven
                by strategic pricing decisions and strong execution. As tea
                inflation remained elevated during the year, we leveraged the
                environment to consolidate our market position and expand volumes.
                We remain focused on building long-term competitiveness in the tea
                business.
              </p>
            </div>
          </div>
          <div className="md:flex items-end flex-row gap-2 md:w-[65%]">
            <div className="md:w-[48%] ">
              <h2 className="text-[#06aeef] text-xl font-semibold mb-2">
                Achieved Milestones in E-commerce
              </h2>
              <p className="">
                Tata Tea has retained its market leadership in E-commerce for
                three consecutive years, outpacing competitors with a strong
                digital presence. Tata Tea Gold is the largest brand in
                e-commerce, embodying a definite shift towards premiumisation in
                this channel of the future.
              </p>
            </div>
            <div className="md:w-[52%]">
              <img src="/135.webp" alt="E-commerce growth" className="  " />
            </div>
          </div>
        </div>
        <div>
          <div className="text-xl font-semibold text-[#06aeef] mb-3">EXPANDING THE HEALTH &
            WELLNESS PORTFOLIO</div>
          <div className="flex flex-row gap-5 justify-center">
            <div>
              <img src="/136.webp" alt="" />
            </div>
            <div>
              <img src="/137.webp" alt="" />
            </div>
          </div>
        </div>
      </div>
     
    </>
  );
};

export default StrategyPageCombined;
