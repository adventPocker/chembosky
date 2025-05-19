"use client";
import getFamousVideos from "@/Lib/API/getFamousVideos";
import React, { useState, useEffect } from "react";
import YouTube from "react-youtube";
import TrackVideos from "../Elements/TrackVideos";
import { BASE_URL } from "@/API/endpoint";
import Image from "next/image";
const FifthSection: React.FC = () => {
  const [famousVideoList, setFamousVideoList] = useState<FamousVideo[]>();
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response = await getFamousVideos();
        setFamousVideoList(response.data);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching track data:", error);
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const handleMouseEnter = (index: number): void => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };

  const opts = {
    height: "170",
    width: "360",
    playerVars: {
      autoplay: 0,
    },
  };

  return (
    <>
      <div className="items-center mix-blend-multiply  flex flex-col justify-center px-16  max-md:px-5">
        {famousVideoList?.map((data: FamousVideo, index: number) => (
          <div
            className="w-full max-w-[1128px]  md:py-28 py-16 max-md:max-w-full"
            key={index}
          >
            <div className="text-stone-900 hidden md:block  text-base font-normal font-clash-regular leading-tight tracking-tight">
              {data.Date}
            </div>{" "}
            <div className="md:flex justify-between md:mt-6 md:gap-10 ">
              <div className="md:max-h-[372px] h-auto md:max-w-[454px]">
                <Image
                  src={`${BASE_URL}${data.Image[0].url}`}
                  alt={data.Image[0].name}
                  width={454}
                  height={372}
                  className="object-cover h-[372px] w-[454px] md:rounded-3xl rounded-[40px] "
                />
              </div>
              <div className=" max-w-[675px] w-auto md:mt-0 mt-9">
                <div className="text-stone-900 block md:hidden text-[14px] font-normal font-clash-regular leading-tight tracking-tight">
                  {data.Date}
                </div>{" "}
                <div className="w-auto text-stone-900 md:text-[38px] text-[25px] mt-6 md:mt-0 font-medium font-clash-medium md:leading-[53.20px] leading-[33px] text-left">
                  {data.Heading}
                </div>
                <div className="w-auto text-neutral-900 md:mt-5 mt-6 md:text-[22px] text-[16px] font-normal md:leading-[30.80px] leading-[22.4px] md:tracking-wide tracking-[0.5px] ">
                  {data.Content}
                </div>
                <a
                  href="https://open.spotify.com/search/Bheemante%20vazhi"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="md:w-[190px] md:h-16 border border-black rounded-[40px] md:mt-10 mt-6  py-4 px-6 flex gap-3 items-center transition ease-in-out delay-100 hover:bg-gray-200 hover:border-gray-300">
                    <div>
                      <Image
                        src="/Icons/arrow1.png"
                        alt="arrow"
                        width={24}
                        height={24}
                        className="w-6 h-6 md:block hidden"
                      />
                      <div className="md:hidden block">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="25"
                          height="25"
                          viewBox="0 0 25 25"
                          fill="none"
                        >
                          <path
                            d="M6.5 19.5L19.5 6.5M19.5 6.5V18.98M19.5 6.5H7.02"
                            stroke="black"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>
                      </div>
                    </div>
                    <div className="text-stone-900 md:text-[22px] text-[18px] font-medium font-clash-medium leading-7">
                      Play List
                    </div>
                  </button>
                </a>
              </div>
            </div>{" "}
            <TrackVideos songData={data.Videos} />
          </div>
        ))}
      </div>
      <div className="flex justify-center ">
        <div
          className="max-w-[1129px]  w-full"
          style={{ borderTop: "0.5px solid #8D8E91" }}
        />
      </div>{" "}
    </>
  );
};

export default FifthSection;
