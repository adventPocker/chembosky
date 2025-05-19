"use client";
import Navbar from "@/app/components/Navbar/Navbar";
import Image from "next/image";
import React from "react";
import { BASE_URL } from "@/API/endpoint";
import { motion } from "framer-motion";
type SectionsU1Props = {
  filmData: UpcomingFilm[];
};
const SectionsU1 = ({ filmData }: SectionsU1Props) => {
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
        src={`${BASE_URL}${filmData[0].attributes.Image.data.attributes.url}`}
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
                <motion.div
                  initial={{ opacity: 0, y: "100%" }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    type: "ease", // Use ease timing function
                    duration: 0.5, // Adjust the duration as needed
                  }}
                  className="w-[137px] h-9 px-6 py-2 bg-orange-200 rounded-[100px] justify-start items-center gap-2 inline-flex"
                >
                  <div className="text-stone-900 text-sm font-medium  leading-tight tracking-tight">
                    coming soon
                  </div>
                </motion.div>
                <div className="md:w-[840px] mt-[3.90vh] w-auto h-auto ">
                  <motion.div
                    initial={{ opacity: 0, y: "100%" }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      type: "ease", // Use ease timing function
                      duration: 0.5, // Adjust the duration as needed
                    }}
                    className="font-clash-medium md:text-[50px] text-[30px] text-[#FFDFB4] font-medium md:leading-[70px] md:tracking-[-0.25px] text-left"
                  >
                    {filmData[0].attributes.Title}
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, y: "100%" }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      type: "ease", // Use ease timing function
                      duration: 0.5, // Adjust the duration as needed
                    }}
                    className="md:text-[25px] text-base mt-[2.34vh] text-[22px] font-medium font-clash-medium leading-7  md:leading-[35px] text-white md:tracking-[0.5px] text-left"
                  >
                    {filmData[0].attributes.genere1}
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, y: "100%" }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      type: "ease", // Use ease timing function
                      duration: 0.5, // Adjust the duration as needed
                    }}
                    className="md:text-[25px] text-base mt-[2.34vh] font-normal md:leading-[35px] text-white md:tracking-[0.5px] text-left"
                  >
                    {filmData[0].attributes.FIlmContent}
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>{" "}
    </main>
  );
};

export default SectionsU1;
