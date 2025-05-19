"use client";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { EffectCoverflow, Pagination, Navigation,Autoplay } from "swiper/modules";
import { BASE_URL } from "@/API/endpoint";
import Image from "next/image";

type SectionF6Props = {
  ImageData: FilmApiDataGalleryImage[];
};
export default function SectionF6({ ImageData }: SectionF6Props) {
  const [activeIndex, setActiveIndex] = useState(0);

  const updateActiveIndex = (swiper: any) => {
    setActiveIndex(swiper.activeIndex);
  };


  const totalCount = ImageData.length;

  const displayIndices = Array.from({ length: 3 }, (_, index) => {
    const adjustedIndex = (activeIndex + index) % totalCount;
    return adjustedIndex < 0 ? totalCount + adjustedIndex : adjustedIndex;
  });
  return (
    <>
      {" "}
      <div className="items-center mix-blend-multiply b flex flex-col justify-center px-16  max-md:px-5">
        <div className="w-full max-w-[1128px] md:py-40 py-20   max-md:max-w-full max-md:my-10">
          <div className=" h-full w-full  ">
          <div className="w-auto text-stone-900 md:text-[38px] text-[25px] font-medium font-clash-medium leading-10">Gallery</div>
            <Swiper
              effect={"coverflow"}
              onSlideChange={updateActiveIndex}
              grabCursor={true}
              centeredSlides={true}
              spaceBetween={24}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              loop={true}
              pagination={{
                dynamicBullets: true,
                renderBullet: (index, className) => {
                    return '<span style="width:28px; background-color: white; height:4px;" class="' + className + '"></span>';
                },
            }}
            
            
              breakpoints={{
                360: {
                  // width: 576,
                  slidesPerView: 1,
                },
                576: {
                  // width: 576,
                  slidesPerView: 2,
                },
                768: {
                  // width: 768,
                  slidesPerView: 3,
                },
              }}
              coverflowEffect={{
                rotate: 0,
                stretch: 300,
                depth: 100,
                modifier: 2.5,
              }}

              navigation={{
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
              }}
              modules={[EffectCoverflow, Pagination, Navigation,Autoplay]}
              className="h-[400px]  w-auto md:mt-20 mt-6  "
            >
              {ImageData.map((data: FilmApiDataGalleryImage, index: number) => (
                <SwiperSlide>
                  <div className="h-[400px] w-auto" key={index}>
                    <Image
                      src={`${BASE_URL}${data.url}`}
                      className="h-[400px] w-[1000px]  md:rounded-lg rounded-[16px]  object-cover"
                      alt={data.name}
                      width={1000}
                      height={1000}
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          {/* <div className="flex flex-col justify-center items-center mt-16">
            <div className="flex gap-3">
              {ImageData.slice(0, 2).map((_, index) => (
                <div
                  key={index}
                  className={`w-7 h-0.5 ${
                    activeIndex === index ? "bg-zinc-800" : "bg-neutral-400"
                  }`}
                ></div>
              ))}
            </div>
          </div> */}
        </div>
      </div>
    </>
  );
};


