"use client";
import React, { useRef, useState, useEffect } from "react";
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
import { SkeletonCardFeatureFilm } from "../Elements/Skeletons";

// Skeleton Card Component


const SecondSection = () => {
  const [movieData, setMovieData] = useState<FilmListResponse>();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
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

  // Number of skeleton cards to show while loading
  const skeletonCount = 6;

  return (
    <div
      className="items-center bl mix-blend-multiply flex flex-col justify-center h-auto px-16 py-20 max-md:px-5 "
      style={{
        background:
          "radial-gradient(50.03% 32.44% at 50.03% 57.38%, rgba(18, 18, 18, 0.94) 0%, #121212 100%)",
      }}
    >
      <div className="w-full max-w-[1128px]  mt-16 mb-12 py-1.5 max-md:max-w-full max-md:my-10">
        <div className="md:h-[540px] h-auto w-full">
          <div className="font-clash-medium text-[#FFDFB4] font-medium text-[36px] leading-10">
            Filmography
          </div>

          <div className="md:mt-20 mt-8 flex gap-6 group ">
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
                Array.from({ length: skeletonCount }).map((_, idx) => (
                  <SwiperSlide key={idx}>
                    <SkeletonCardFeatureFilm />
                  </SwiperSlide>
                ))
              ) : movieData && movieData.data.length > 0 ? (
                movieData.data.map((data: FilmApiData, index: number) => (
                  <SwiperSlide key={index}>
                    <Link href={`/filmography/${data.slug}`}>
                      <div
                        className="md:max-w-[264px] h-full md:h-[400px] md:py-9 "
                        key={index}
                      >
                        <div className="relative   md:hover:scale-110 md:transition-transform md:duration-500 ease-in-out delay-100">
                          <div
                            className="absolute p-5 w-full h-full rounded-3xl"
                            style={{
                              background: `
                        linear-gradient(180deg, rgba(0, 0, 0, 0) 35.74%, rgba(0, 0, 0, 0.5) 100%),
                        radial-gradient(68.92% 68.92% at 50% 31.08%, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.2) 100%)
                      `,
                            }}
                          >
                            <div className="w-full h-full  flex justify-start items-end">
                              <div className=" flex-col justify-start items-start gap-2 inline-flex">
                                <div className=" text-white text-[22px] font-medium font-clash-medium leading-tight tracking-wide">
                                  {data.Title}
                                </div>
                                <div className="text-white text-sm font-normal font-clash-regular leading-none tracking-wide">
                                  {data.Year}
                                </div>
                              </div>
                            </div>
                          </div>
                          <Image
                            src={`${BASE_URL}${data.BannerImages[0].url}`}
                            className="object-cover hover:cursor-pointer w-full h-[428px] md:h-[340px] rounded-3xl md:hover:scale-110 transition-transform duration-500 ease-in-out delay-100 "
                            alt={data.BannerImages[0].name}
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
                <SwiperSlide>
                  <div className="text-white text-center w-full py-20">No films found.</div>
                </SwiperSlide>
              )}
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SecondSection;
