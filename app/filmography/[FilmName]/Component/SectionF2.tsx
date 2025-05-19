"use client";
import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
// import required modules
import { Navigation } from "swiper/modules";

type SectionF2Props = {
  reviewData:  FilmApiDataReview[];
};
export default function SectionF2({ reviewData }: SectionF2Props) {
  return (
    <>
      <div className="flex justify-center bg-[#121212]">
        <div
          className="max-w-[1129px]  w-full"
          style={{ borderTop: "0.5px solid white" }}
        />
      </div>
      <div className="items-center mix-blend-multiply bg-[#121212] flex flex-col justify-center px-16  max-md:px-5">
        <div className="w-full max-w-[1128px] md:py-32 py-20 max-md:max-w-full max-md:my-10">
          <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
            {reviewData.map((data: FilmApiDataReview, index: number) => (
              <SwiperSlide>
                <div key={index} className="flex justify-center items-center">
                  <div className="">
                    <div className="max-w-[650px]  text-center text-white md:text-[32px] sm:text-2xl text-[25px] font-medium font-clash-medium md:leading-10 leading-[35px]">
                      {data.ReviewContent}
                    </div>
                    <div className="mt-10 text-center text-orange-200 text-base font-medium font-clash-medium leading-normal tracking-tight">
                      ~ {data.Reviewer}
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
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
}
