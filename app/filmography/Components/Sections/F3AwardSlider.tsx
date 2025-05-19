"use client";
import React, { useRef, useState } from "react";
// Import Swiper React components

import { Swiper, SwiperSlide } from "swiper/react";

import { EffectCreative } from "swiper/modules";
import { Pagination,Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from "next/image"; 
const F3AwardSlider = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const updateActiveIndex = (swiper: any) => {
    setActiveIndex(swiper.activeIndex);
  };
  interface Award {
    awardTitle: string;
    awardSponsored: string;
    givenFor: string;
  }

  const awardData: Award[] = [
    {
      awardTitle: "Silver Peacock",
      awardSponsored: "25th International Film Festival of Kerala",
      givenFor: "Lijo Jose Pellissery",
    },
    {
      awardTitle: "Best Lyric Writer",
      awardSponsored: "2022 South Indian International Movie Awards",
      givenFor: "Muhsin Parari (Oruthi)",
    },
    {
      awardTitle: "Best Director",
      awardSponsored: "International Film Festival of India 2019",
      givenFor: "Lijo Jose Pellissery",
    },
    {
      awardTitle: "Best Cinematography",
      awardSponsored: "National Film Awards- 2021",
      givenFor: "Gireesh Gangadharan",
    },
    {
      awardTitle: "Best Director",
      awardSponsored: "Kerala State Film Awards - 2020",
      givenFor: "Lijo Jose Pellissery",
    },
  ];
  return (
    <>
      <Swiper
        onSlideChange={updateActiveIndex}
        slidesPerView={2}
        spaceBetween={80}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Pagination,Autoplay]}
        breakpoints={{
          360: {
            // width: 576,
            slidesPerView: 1,
          },
          576: {
            // width: 576,
            slidesPerView: 1,
          },
          768: {
            // width: 768,
            slidesPerView: 2,
          },
        }}
        className="mySwiper "
      >
        {awardData.map((award: Award, index: number) => (
          <SwiperSlide key={index}>
            <div className="flex flex-col justify-center items-center" >
              <div
               
                className="md:w-[466.53px] w-auto h-[160px]  flex justify-between gap-10 "
              >
                <div className="">
                  <Image
                    src="/Icons/Vector.svg"
                    className="w-[65.26px] h-[160px]"
                    alt="award"
                    width={65.26}
                    height={160}
                  />
                </div>
                <div className="md:w-64 md:h-auto py-3 flex-col justify-start items-center gap-2 inline-flex">
                  <div className="text-center text-black md:text-base text-[16px] font-medium font-clash-medium md:leading-normal leading-4 tracking-tight">
                   {award.awardSponsored}
                  </div>
                  <div className="text-center text-black md:text-4xl text-[30px] font-medium font-clash-medium md:leading-[44px] leading-6">
                    {award.awardTitle}
                  </div>
                  <div className="text-center text-black text-base font-medium font-clash-medium leading-normal tracking-tight">
                  {award.givenFor}
                  </div>
                </div>
                <div className=" ">
                  <Image
                    src="/Icons/Vector2.svg"
                    className="w-[65.26px] h-[160px]"
                    alt="award"
                    width={65.26}
                    height={160}
                  />
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="md:flex hidden flex-col justify-center items-center mt-28">
        <div
          className="flex gap-3">
          {[...Array(awardData.length)].map((_, index) => (
            <div
              className={`w-7 h-0.5 ${
                activeIndex === index ? "bg-zinc-800" : "bg-neutral-400"
              }`}
            key={index}></div>
          ))}
        </div>
      </div>
    </>
  );
};

export default F3AwardSlider;
