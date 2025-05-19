"use client";
import { BASE_URL } from "@/API/endpoint";
import React, { useState } from "react";
import YouTube from "react-youtube";
import Image from "next/image";

type SectionF3Props = {
  videoData: FilmApiDataMovieVideo[];
};
export default function SectionF3({ videoData }: SectionF3Props) {
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
    <div
      className="items-center bl mix-blend-multiply flex flex-col justify-center h-auto px-16 max-md:px-5 "
      style={{
        background:
          "radial-gradient(50.03% 32.44% at 50.03% 57.38%, rgba(18, 18, 18, 0.94) 0%, #121212 100%)",
      }}
    >
      <div className="w-full max-w-[1128px] md:py-40 py-20 max-md:max-w-full max-md:my-10">
        <div className="grid  md:grid-cols-3 grid-cols-1 gap-6">
          {videoData.map((Video: FilmApiDataMovieVideo, index: number) => (
            <div
              className=" container mt-10 max-h-[233px] h-auto max-w-[360px] w-auto "
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}
            >
              <div className=" relative max-h-[170px] h-auto max-w-[360px] w-auto rounded-lg">
                <Image
                  src={`${BASE_URL}${Video.Image.url}`}
                  alt={Video.Image.name}
                  width={360}
                  height={170}
                  className="w-[360px] h-[170px] object-cover rounded-lg"
                />
                <div
                  className="absolute top-0 left-0 h-full w-full"
                  style={{
                    background:
                      "linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.2) 100%)",
                  }}
                ></div>
                <Image
                  loading="lazy"
                  src="/Icons/play2.png"
                  alt="play"
                  width={48}
                  height={48}
                  className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-12 w-12 object-cover object-center"
                />
                {hoveredIndex === index && (
                  <div className="absolute top-0 left-0 max-h-[170px] h-auto max-w-[360px] w-auto">
                    <YouTube
                      className="w-[360px] h-[170px] "
                      key={index}
                      videoId={Video.YoutubeId}
                      opts={{ ...opts, width: "100%", height: "100%" }}
                    />
                  </div>
                )}
              </div>
              <div className="md:max-w-[360px] w-auto text-white md:text-lg text-[16px]  font-medium font-clash-medium md:leading-normal leading-[33px] mt-6 tracking-tight">
                {Video.Title}
              </div>
              <div className="md:max-w-[360px] md:block hidden  w-auto text-white text-sm  md:text-xs font-normal font-clash-regular leading-tight tracking-tight">
                {Video.MovieName}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
