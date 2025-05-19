"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import getFilimographyData from "@/Lib/API/getFilimographyData";
import { BASE_URL } from "@/API/endpoint";
import Image from "next/image";
import { FilmCardSkeleton } from "@/app/components/Elements/Skeletons";


const F4Sections: React.FC = () => {
  const [filmData, setFilmData] = useState<FilmApiData[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result: any = await getFilimographyData();
        setFilmData(result.data);
      } catch (error) {
        console.error("Error fetching film data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <div className="items-center mix-blend-multiply bg-white flex flex-col justify-center px-16 max-md:px-5">
        <div className="w-full max-w-[1128px] md:py-40 py-20 max-md:max-w-full">
          <div className="text-stone-900 md:text-[38px] text-[25px] font-medium font-clash-medium leading-10 mb-2">
            Own Production
          </div>
          {loading
            ? // Show 2 skeletons for loading state
              [0, 1].map((i) => (
                <FilmCardSkeleton key={i} reverse={i % 2 === 1} />
              ))
            : filmData.map((data: FilmApiData, index: number) => (
                <div
                  key={index}
                  className={`${
                    index % 2 === 0 ? "lg:flex" : "lg:flex lg:flex-row-reverse"
                  } lg:gap-14 w-full ${
                    index === 0 ? "md:mt-20 mt-8" : "md:mt-20 mt-8"
                  } `}
                >
                  <Image
                    src={`${BASE_URL}${data.ImgThumb.url}`}
                    className="md:w-[520px] w-auto h-[480px] bg-no-repeat object-cover rounded-3xl"
                    width={520}
                    height={480}
                    alt={data.Title}
                    priority
                    blurDataURL={`${BASE_URL}${data.ImgThumb.url}`}
                  />
                  <div className="lg:w-[520px] w-full md:max-h-[552px] h-auto md:py-20 py-8">
                    <div className="w-full">
                      <div className="text-stone-900 md:text-[45px] text-[25px] font-medium font-clash-medium md:leading-[52px] leading-[40px]">
                        {data.Title}
                      </div>
                      <div className="justify-center items-center gap-5 inline-flex md:mt-6 mt-[10px]">
                        <div className="px-2 py-1 rounded-lg border border-stone-900 flex-col justify-center items-center gap-5 inline-flex">
                          <div className="text-stone-900 text-base font-medium font-clash-medium leading-normal tracking-tight">
                            {data.Catogery}
                          </div>
                        </div>
                        <div className="text-stone-900 text-base font-medium font-clash-medium leading-normal tracking-tight">
                          {data.genere1}
                        </div>
                        <div className="text-stone-900 text-base font-medium font-clash-medium leading-normal tracking-tight">
                          ~
                        </div>
                        <div className="text-stone-900 text-base font-medium font-clash-medium leading-normal tracking-tight">
                          {data.genere2}
                        </div>
                        <div className="text-stone-900 text-base font-medium font-clash-medium leading-normal tracking-tight">
                          ~
                        </div>
                        <div className="text-stone-900 text-base font-medium font-clash-medium leading-normal tracking-tight">
                          {data.durations}
                        </div>
                      </div>
                      <div className="md:py-10 py-8 md:text-[22px] text-[16px] font-normal h-auto md:leading-normal md:tracking-wide leading-[22.4px] tracking-[0.5px]">
                        <div className="lg:w-[552px] w-auto flex text-neutral-900 h-auto">
                          <div
                            dangerouslySetInnerHTML={{
                              __html:
                                data.FIlmContent.length > 150
                                  ? `${data.FIlmContent.slice(0, 150)}...`
                                  : data.FIlmContent,
                            }}
                          />
                        </div>
                      </div>
                      <div className="hidden lg:flex gap-4">
                        <Link href={`${data.ExternalUrl}`}>
                          <button className="filmButtonBg md:w-[235px] w-auto h-16 rounded-[40px]">
                            <div className="py-4 px-6 flex gap-4 items-center rounded-[40px]">
                              <div>
                                <Image
                                  src="/Icons/play1.png"
                                  alt="arrow"
                                  width={24}
                                  height={25}
                                  className="w-6 h-6"
                                />
                              </div>
                              <div className="text-white text-[22px] font-medium font-clash-medium leading-7">
                                Watch Trailer
                              </div>
                            </div>
                          </button>
                        </Link>
                        <Link href={`/filmography/${data.slug}`}>
                          <button className="w-[204px] h-16 border border-black transition ease-in-out delay-100 rounded-[40px] py-4 px-6 flex gap-3 items-center hover:bg-gray-200 hover:border-gray-300">
                            <div>
                              <Image
                                src="/Icons/arrow1.png"
                                alt="arrow"
                                width={24}
                                height={25}
                                className="w-6 h-6"
                              />
                            </div>
                            <div className="text-stone-900 text-[22px] font-medium font-clash-medium leading-7">
                              Read More
                            </div>
                          </button>
                        </Link>
                      </div>
                      <div className="flex flex-col gap-4 lg:hidden items-start">
                        <Link href={`/filmography/${data.slug}`}>
                          <button className="border border-black transition ease-in-out delay-100 rounded-[40px] py-4 px-6 flex gap-3 items-center hover:bg-gray-200 hover:border-gray-300">
                            <div>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="25"
                                viewBox="0 0 24 25"
                                fill="none"
                              >
                                <path
                                  d="M6 19.5L19 6.5M19 6.5V18.98M19 6.5H6.52"
                                  stroke="black"
                                  strokeWidth="1.5"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                              </svg>
                            </div>
                            <div className="text-stone-900 text-[18px] font-medium font-clash-medium leading-7">
                              Read More
                            </div>
                          </button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
        </div>
      </div>
    </>
  );
};

export default F4Sections;
