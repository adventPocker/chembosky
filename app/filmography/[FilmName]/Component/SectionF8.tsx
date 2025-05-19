"use client";
import React, { useState, useEffect } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

import { Pagination, Autoplay } from "swiper/modules";
import SwiperCore from "swiper";

SwiperCore.use([Autoplay]);

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import Link from "next/link";
import getAllFilms from "@/Lib/API/getAllFilms";
import Image from "next/image";
import { BASE_URL } from "@/API/endpoint";
import { SkeletonCardFeatureFilm } from "@/app/components/Elements/Skeletons";

const SKELETON_COUNT = 4;

const SectionF8 = () => {
  const [movieData, setMovieData] = useState<FilmListResponse>();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await getAllFilms();
        const data: any = response;
        setMovieData(data);
      } catch (error) {
        console.error("Error fetching movie data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="items-center mix-blend-multiply flex flex-col justify-center h-auto px-16 max-md:px-5 ">
      <div className="w-full max-w-[1128px] max-md:max-w-full max-md:my-10">
        <div className="md:h-[540px] h-auto w-full">
          <div className="text-stone-900 md:text-[38px] text-[25px] font-medium font-clash-medium leading-10">
            Explore more
          </div>
          <div className="md:py-16  py-9" >
            <div className="flex gap-6 group">
              <Swiper
                spaceBetween={10}
                autoplay={{
                  delay: 2500,
                  disableOnInteraction: false,
                }}
                modules={[Pagination, Autoplay]}
                breakpoints={{
                  360: {
                    slidesPerView: 1,
                  },
                  576: {
                    slidesPerView: 3,
                  },
                  768: {
                    slidesPerView: 4,
                  },
                }}
                className="mySwiper md:h-[400px] h-auto  w-full"
              >
                {loading ? (
                  Array.from({ length: SKELETON_COUNT }).map((_, idx) => (
                    <SwiperSlide key={idx}>
                      <SkeletonCardFeatureFilm />
                    </SwiperSlide>
                  ))
                ) : movieData && movieData.data && movieData.data.length > 0 ? (
                  movieData.data.map((data: FilmApiData, index: number) => (
                    <SwiperSlide key={index}>
                      <Link href={`/filmography/${data.slug}`}>
                        <div
                          className="md:max-w-[264px] h-full md:h-[400px] py-9"
                          key={index}
                        >
                          <div className="relative md:hover:scale-110 transition-transform duration-500 ease-in-out delay-100">
                            <div
                              className="absolute p-5 w-full h-full rounded-3xl"
                              style={{
                                background: `
                      linear-gradient(180deg, rgba(0, 0, 0, 0) 35.74%, rgba(0, 0, 0, 0.5) 100%),
                      radial-gradient(68.92% 68.92% at 50% 31.08%, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.2) 100%)
                    `,
                              }}
                            >
                              <div className="w-full h-full flex justify-start items-end">
                                <div className="flex-col justify-start items-start gap-2 inline-flex">
                                  <div className="text-white text-[22px] font-medium font-clash-medium leading-tight tracking-wide">
                                    {data.Title}
                                  </div>
                                  <div className="text-white text-sm font-normal font-clash-regular leading-none tracking-wide">
                                    {data.Year}
                                  </div>
                                </div>
                              </div>
                            </div>
                            <Image
                              src={`${BASE_URL}${data.ImgThumb.url}`}
                              className="object-cover hover:cursor-pointer w-full h-[428px] md:h-[340px] rounded-3xl md:hover:scale-110 transition-transform duration-500 ease-in-out delay-100"
                              alt={data.ImgThumb.name}
                              width={264}
                              height={340}
                              loading="lazy"
                            />
                          </div>
                        </div>
                      </Link>
                    </SwiperSlide>
                  ))
                ) : (
                    Array.from({ length: SKELETON_COUNT }).map((_, idx) => (
                    <SwiperSlide key={idx}>
                      <SkeletonCardFeatureFilm />
                    </SwiperSlide>
                  ))
                )}
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionF8;
