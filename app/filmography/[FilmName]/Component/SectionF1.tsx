"use client";
import Navbar from "@/app/components/Navbar/Navbar";
import { BASE_URL } from "@/API/endpoint";
import { motion } from "framer-motion";
import Image from "next/image";
type SectionF1Props = {
  filmData: FilmApiData[];
};
export default async function SectionF1({ filmData }: SectionF1Props) {
  const randomIndex = Math.floor(
    Math.random() * filmData[0].BannerImages.length
  );
  const divStyles = {
    background: `
                  linear-gradient(180deg, rgba(18, 18, 18, 0) 44.18%, #121212 100%),
                  linear-gradient(180deg, rgba(18, 18, 18, 0.6) 0%, rgba(18, 18, 18, 0) 18.41%),
                  radial-gradient(97.84% 38.52% at 17% 85.19%, rgba(18, 18, 18, 0.7) 32.81%, rgba(18, 18, 18, 0.07) 100%)
                `,
  };
  return (
    <main className="h-[100vh]  ">
      <Image
        src={`${BASE_URL}${filmData[0].BannerImages[randomIndex].url}`}
        width={1000}
        height={1000}
        loading="lazy"
        alt="no image"
        className="absolute top-0 h-[100vh]  object-cover	w-[100vw]"
      />
   
      <div className="h-[100vh] bg-bg-grade bg-no-repeat bg-cover bg-center bg-opacity-20 bg-blend-overlay relative">
        <div
          className="w-full h-[100vh] flex justify-center  "
          style={divStyles}
        >
          <div className="relative max-w-[1129px]  w-full">
            <Navbar />
            <div className="static w-full h-auto ">
              <div className="absolute bottom-0 pb-[13.96vh] w-full left-0 md:px-0 px-4">
                <div className="md:w-[840px] w-auto h-auto ">
                <motion.div
                    initial={{ opacity: 0, y: "100%" }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      type: "ease", // Use ease timing function
                      duration: 0.5, // Adjust the duration as needed
                    }}
                    className="font-clash-medium md:text-[50px] text-[33px] text-[#FFDFB4] font-medium md:leading-[70px] leading-[37.95px] tracking-[-0.25px] text-left"
                  >
                    {filmData[0].Title}
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, y: "100%" }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      type: "ease", // Use ease timing function
                      duration: 0.5, // Adjust the duration as needed
                    }}
                    className="w-auto py-6 justify-center items-center md:gap-5 gap-1 inline-flex"
                  >
                    <div className="px-2 py-1 rounded-lg border border-white flex-col justify-center items-center gap-2.5 inline-flex">
                      <div className="text-white md:text-[22px] text-base font-medium font-clash-medium leading-7">
                        {filmData[0].Catogery}
                      </div>
                    </div>
                    <div className="text-white md:text-[22px] text-base font-medium font-clash-medium leading-7">
                      {filmData[0].genere1}
                    </div>
                    <div className="text-white md:text-[22px] text-base font-medium font-clash-medium leading-7">
                      ~
                    </div>
                    <div className="text-white md:text-[22px] text-base font-medium font-clash-medium leading-7">
                      {filmData[0].genere2}
                    </div>
                    <div className="text-white md:text-[22px] text-base font-medium font-clash-medium leading-7">
                      ~
                    </div>
                    <div className="text-white md:text-[22px] text-base font-medium font-clash-medium leading-7">
                      {filmData[0].durations}
                    </div>
                    {/* <div className="px-2 py-0.5 rounded-sm border border-white flex-col justify-center items-center gap-2.5 inline-flex">
                      <div className="text-white text-sm font-normal font-clash-medium leading-tight tracking-tight">
                        IMDB
                      </div>
                    </div>
                    <div className="text-white md:text-[22px] font-medium font-clash-medium leading-7">
                      6.3
                    </div> */}
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, y: "100%" }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      type: "ease", // Use ease timing function
                      duration: 0.5, // Adjust the duration as needed
                    }}
                    className="md:text-[25px] sm:text-lg text-base mt-[2.34vh] w-full  font-normal md:leading-[35px] text-white md:tracking-[0.5px] text-left"
                  >
                    {filmData[0].FIlmContent}
                  </motion.div>
                </div>
                <motion.div
                  initial={{ opacity: 0, y: "100%" }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    type: "spring",
                    stiffness: 120,
                    damping: 10,
                    velocity: 2,
                  }}
                  className="mt-[3.91vh] md:block hidden"
                >
                  <a
                    href={`${filmData[0].ExternalUrl}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <button className="w-[160px] h-[60px] border-[1px] border-white rounded-[40px] overflow-hidden transition-transform hover:scale-105">
                      <div className="flex gap-4 items-center px-4 transition-transform hover:translate-x-1">
                        <div>
                          <Image
                            src="/Icons/play1.png"
                            alt="arrow"
                            width={24}
                            height={25}
                            className="w-6 h-6"
                          />
                        </div>
                        <div className="font-clash-medium text-white text-[22px]">
                          Watch
                        </div>
                      </div>
                    </button>
                  </a>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
