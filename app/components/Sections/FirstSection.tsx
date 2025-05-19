import React from "react";
import getFeatureFilms from "@/Lib/API/getFeatureFilms";

export default async function FirstSection()  {
  const featureFilms:Promise<FeaturedFilms> = getFeatureFilms()
  const dataFeature = await featureFilms
  return (
    <>
      <div className="flex justify-center bg-[#121212]">
        <div
          className="max-w-[1129px]  w-full"
          style={{ borderTop: "0.5px solid white" }}
        />
      </div>
      <div className="items-center mix-blend-multiply bg-[#121212] flex flex-col justify-center px-16 md:py-12 py-9 max-md:px-5">
        <div className="w-full max-w-[1128px] md:mt-16  mb-12 py-1.5 max-md:max-w-full max-md:my-10">
          <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
            <div className="flex flex-col items-stretch w-[62%] max-md:w-full max-md:ml-0">
              <div className="flex grow flex-col items-stretch max-md:max-w-full max-md:mt-10">
                <h2 className="text-orange-200 md:text-4xl text-[25px] font-clash-medium font-medium leading-10 max-md:max-w-full">
               {dataFeature.data.Title }
                </h2>
                <p className="md:w-[577.35px] mt-9 w-full text-white text-opacity-80 md:text-[22px] text-[16px] font-normal  md:leading-[30.80px] leading-[22.4px]  tracking-wide">
                {dataFeature.data.Content}

                </p>
              </div>
            </div>
            <div className="flex flex-col items-stretch w-[38%] ml-5 max-md:w-full max-md:ml-0">
              <div className="items-stretch flex justify-between gap-5 my-auto max-md:justify-center max-md:mt-10">
                <div className="items-stretch flex basis-[0%] flex-col">
                  <h3 className="text-orange-200 font-clash-medium md:text-6xl text-[35px] font-medium leading-[64px] tracking-tight whitespace-nowrap max-md:text-4xl max-md:leading-[49px]">
                  {dataFeature.data.Films} 
                  </h3>
                  <div className="text-orange-200 font-clash-medium text-base leading-5 tracking-normal whitespace-nowrap mt-3">
                    Movies
                  </div>
                </div>
                <div className="items-stretch flex basis-[0%] flex-col">
                  <div className="text-orange-200 font-clash-medium text-6xl font-medium leading-[64px] tracking-tight whitespace-nowrap max-md:text-4xl max-md:leading-[49px]">
                  {dataFeature.data.Awards}

                  </div>
                  <div className="text-orange-200 font-clash-medium text-base leading-5 tracking-normal whitespace-nowrap mt-3">
                    Awards
                  </div>
                </div>
                <div className="md:items-stretch md:flex grow basis-[0%] flex-col ">
                  <div className="text-orange-200 font-clash-medium text-6xl   font-medium leading-[64px] tracking-tight whitespace-nowrap max-md:text-4xl max-md:leading-[49px]">
                  {dataFeature.data.Streaming}
                  </div>
                  <div className="text-orange-200 font-clash-medium text-base leading-5 tracking-normal self-center whitespace-nowrap mt-3">
                    Streaming
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center bg-[#121212]">
        <div
          className="max-w-[1129px]  w-full"
          style={{ borderTop: "0.5px solid white" }}
        />
      </div>
    </>
  );
};
