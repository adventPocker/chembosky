"use client";
import React from "react";
import Image from "next/image";
import Navbar from "../Navbar/Navbar";
import bg from "../../../public/bg-1.png";
import { motion } from "framer-motion";

const Hero = () => {
  const divStyles = {
    background: `
          linear-gradient(180deg, rgba(18, 18, 18, 0) 44.18%, #121212 100%),
          linear-gradient(180deg, rgba(18, 18, 18, 0.6) 0%, rgba(18, 18, 18, 0) 18.41%),
          radial-gradient(97.84% 38.52% at 17% 85.19%, rgba(18, 18, 18, 0.7) 32.81%, rgba(18, 18, 18, 0.07) 100%)
        `,
  };

  return (
    <main className="h-[100vh]">
      <Image
        src={bg}
        loading="lazy"
        alt="no image"
        className="absolute top-0 h-[100vh]  object-cover	w-[100%]"
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
                  <motion.h1
                    initial={{ opacity: 0, y: "100%" }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      type: "ease", // Use ease timing function
                      duration: 0.5, // Adjust the duration as needed
                    }}
                    className="font-clash-medium md:text-[50px] text-[33px] text-[#FFDFB4] font-medium md:leading-[70px] tracking-[-0.25px] leading-[37.95px]  text-left"
                  >
                    Where Artistic Vision Meets Unparalleled Brilliance
                  </motion.h1>
                  <motion.p
                    initial={{ opacity: 0, y: "100%" }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      type: "ease", // Use ease timing function
                      duration: 0.5, // Adjust the duration as needed
                    }}
                    className="text-white text-opacity-80 md:text-[25px] mt-[2.343vh] text-base font-normal
  md:leading-[35px] leading-5  tracking-wide text-left"
                  >
                    Redefining Indian Cinema with Blockbuster Hits and Oscar
                    Nominations. Chembosky motion pictures being one of thebest
                    film production houses in India. Is being one of the best
                    film.
                  </motion.p>
                </div>
                <motion.div
                  initial={{ opacity: 0, y: "100%" }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    type: "ease", // Use ease timing function
                    duration: 0.5, // Adjust the duration as needed
                  }}
                  className="mt-[3.91vh]"
                >
                  <a
                    href="https://www.youtube.com/watch?v=2Zw4qN8EsLo"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <button className="md:w-auto md:h-auto py-4 px-6 border-[1px] border-white rounded-[40px] overflow-hidden transition-transform hover:scale-105">
                      <div className="flex gap-4 items-center justify-center  transition-transform hover:translate-x-1">
                        <div className="md:block hidden">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                          >
                            <path
                              d="M6 19L19 6M19 6V18.48M19 6H6.52"
                              stroke="white"
                              stroke-width="1.5"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                          </svg>
                        </div>
                        <div className="md:hidden">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="25"
                            viewBox="0 0 24 25"
                            fill="none"
                          >
                            <path
                              d="M6 19.5L19 6.5M19 6.5V18.98M19 6.5H6.52"
                              stroke="white"
                              stroke-width="1.5"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                          </svg>
                        </div>
                        <div className="font-clash-medium text-white md:text-[22px] text-[18px] leading-[28px] ">
                          Showreel
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
};

export default Hero;
