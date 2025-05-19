"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import YouTube from "react-youtube";
import { BASE_URL } from "@/API/endpoint";
import Image from "next/image";

const TrackVideos: React.FC<any> = ({ songData }) => {
  const [visibleSongData, setVisibleSongData] = useState<YoutubeVideo[]>(
    songData.slice(0, 3)
  );
  const [isAllSongVisible, setIsAllSongVisible] = useState(false);

  const handleMouseEnter = (index: number) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };

  const itemsToShow = 3;

  const handleSeeMoreSongClick = () => {
    const nextItems = songData.slice(
      visibleSongData.length,
      visibleSongData.length + itemsToShow
    );
    setVisibleSongData((prevData) => [...prevData, ...nextItems]);
    setIsAllSongVisible(true);
  };

  const handleSeeLessSongClick = () => {
    const itemsToHide = visibleSongData.slice(
      visibleSongData.length - itemsToShow
    );
    setVisibleSongData((prevData) =>
      prevData.filter(
        (_, index) => index < prevData.length - itemsToHide.length
      )
    );
    setIsAllSongVisible(false);
  };
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const opts = {
    height: "170",
    width: "360",
    playerVars: {
      autoplay: 0,
    },
  };

  return (
    <>
      <div className="md::mt-32 mt-20">
        <div className="w-[224.90px] text-stone-900 text-[29px] font-medium font-clash-medium leading-9">
          Videos
        </div>
        <div className="grid md:grid-cols-3 sm:grid-cols-1 grid-cols-1 md:gap-6 ">
          {visibleSongData.map((data: YoutubeVideo, index: number) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              transition={{ duration: 0.5 }}
            >
              <div
                className=" container mt-10 max-h-[233px] h-auto max-w-[360px] w-auto "
                onMouseEnter={() => handleMouseEnter(index)}
                onMouseLeave={handleMouseLeave}
              >
                <div className=" relative max-h-[170px] h-auto max-w-[360px] w-auto">
                  <Image
                    src={`${BASE_URL}${data.Image.url}`}
                    alt={data.Image.name}
                    className="w-full h-[170px] object-cover rounded-lg"
                    width={360}
                    height={170}
                    loading="lazy"
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
                        videoId={data.YoutubeId}
                        opts={{ ...opts, width: "100%", height: "100%" }}
                      />
                    </div>
                  )}
                </div>
                <div className="w-[360px] text-neutral-900 text-base font-medium font-clash-medium leading-normal mt-5 tracking-tight">
                  {data.Title}
                </div>
                <div className="w-[360px] md:block hidden text-neutral-900 text-sm font-normal font-clash-regular leading-tight tracking-tight">
                  {data.MovieName}d
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        {songData.length > itemsToShow && (
          <div className=" mt-10 flex justify-end items-end ">
            <div
              onClick={
                isAllSongVisible
                  ? handleSeeLessSongClick
                  : handleSeeMoreSongClick
              }
              className="w-auto h-[40px] rounded-[40px] border border-black px-6 py-2 flex gap-4 items-center"
            >
              <div className="text-stone-900 text-base font-medium font-clash-medium leading-normal tracking-tight">
                {isAllSongVisible ? "Show Less" : "See More"}
              </div>
              {isAllSongVisible ? (
                <Image
                  src="/Icons/arrow3.png"
                  alt="icon2"
                  width={24}
                  height={24}
                />
              ) : (
                <Image
                  src="/Icons/arrow2.png"
                  alt="icon2"
                  width={24}
                  height={24}
                />
              )}
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default TrackVideos;
