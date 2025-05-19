"use client";
import React, { useRef, useState } from "react";
// Import Swiper React components
import SwiperCore from "swiper/core";
import { Swiper, SwiperSlide } from "swiper/react";

import { EffectCreative } from "swiper/modules";
import { Autoplay, Pagination } from "swiper/modules";
SwiperCore.use([Pagination]);

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

type SectionF5Props = {
  awardData:  FilmApiDataAward[];
};
export default function SectionF5({ awardData }: SectionF5Props) {
  const [activeIndex, setActiveIndex] = useState(0);

  const updateActiveIndex = (swiper: any) => {
    setActiveIndex(swiper.activeIndex);
  };

  return (
    <>
      <div className="bg-[#F7F7F7]  lg:h-[522px]">
        {" "}
        <div className="items-center mix-blend-multiply bg-award-bg bg-cover bg-center bg-no-repeat h-full flex flex-col justify-center px-16  max-md:px-5">
          <div className="w-full max-w-[1128px] md:pt-40 pt-20 md:pb-10  max-md:max-w-full ">
            <div></div>
            <div className="lg:px-80 md:px-40 sm:px-20 px-5 ">
              <Swiper
                onSlideChange={updateActiveIndex}
                slidesPerView={1}
                spaceBetween={25}
                autoplay={{
                  delay: 2500,
                  disableOnInteraction: false,
                }}
              
                modules={[Autoplay]}
                className="mySwiper "
              >
                {awardData.map((award: Awards, index: number) => (
                  <SwiperSlide key={index}>
                    <div className="flex flex-col justify-center   items-center w-auto h-full ">
                      <div
                        key={index}
                        className="md:max-w-[466.53px] w-auto h-[200px]  flex justify-between md:gap-10 "
                      >
                        <div className="w-[65.26px] md:h-[190px] h-full  ">
                          <img
                            src="/Icons/Vector.svg"
                            className="w-[65.26px] md:h-[190px] h-full "
                            alt=""
                          />
                        </div>
                        <div className="md:max-w-64 w-auto  h-auto py-3 flex-col justify-start items-center gap-2 inline-flex">
                          <div className="text-center text-black md:text-base text-xs font-medium font-clash-medium leading-normal tracking-tight">
                            {award.awardSponsered}
                          </div>
                          <div className="text-center text-black md:text-3xl text-2xl font-medium font-clash-medium md:leading-[34px] ">
                            {award.AwardTitle}
                          </div>
                          <div className="text-center text-black md:text-base text-xs font-medium font-clash-medium leading-normal tracking-tight">
                            {award.givenFor}
                          </div>
                        </div>
                        <div className="w-[65.26px] md:h-[190px] h-full ">
                          <img
                            src="/Icons/Vector2.svg"
                            className="w-[65.26px] md:h-[190px] h-full "
                            alt=""
                          />
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
            <div className="flex flex-col justify-center items-center mt-28">
              <div className="flex gap-3">
            
              </div>
            </div>
          </div>
        </div>
      </div>
    
    </>
  );
}
