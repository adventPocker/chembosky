"use client";
import Navbar from "@/app/components/Navbar/Navbar";
import React from "react";
import { motion } from "framer-motion";
const F1Sections = () => {
  const divStyles = {
    background: `
              linear-gradient(180deg, rgba(18, 18, 18, 0) 44.18%, #121212 100%),
              linear-gradient(180deg, rgba(18, 18, 18, 0.6) 0%, rgba(18, 18, 18, 0) 18.41%),
              radial-gradient(97.84% 38.52% at 17% 85.19%, rgba(18, 18, 18, 0.7) 32.81%, rgba(18, 18, 18, 0.07) 100%)
            `,
  };
  return (
    <main className="h-[100vh]  bg-bg-4 bg-no-repeat bg-cover bg-center">
      <div className="h-[100vh] bg-bg-grade bg-no-repeat bg-cover bg-center bg-opacity-20 bg-blend-overlay">
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
                      type: "ease",
                      duration: 0.5,
                    }}
                    className="font-clash-medium md:text-[50px] text-[33px] text-[#FFDFB4] font-medium md:leading-[70px] leading-[37.95px] tracking-[-0.25px] text-left"
                  >
                    Redefining Indian Cinema with Blockbuster Hits and Oscar
                    Nominations{" "}
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, y: "100%" }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      type: "ease", // Use ease timing function
                      duration: 0.5, // Adjust the duration as needed
                    }}
                    className="md:text-[25px] text-[16px] mt-[2.34vh] font-normal md:leading-[35px] leading-[20.8px]  text-white md:tracking-[0.5px] text-left"
                  >
                    Our diverse portfolio encompasses a wide range of
                    genres,from thought-provoking dramas to thrilling action
                    adventures and heartwarming family films.
                  </motion.div>
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
                    <button className="md:w-auto md:h-auto border-[1px] py-4 px-6 border-white rounded-[40px] overflow-hidden transition-transform hover:scale-105">
                      <div className="flex gap-4 items-center px-4 transition-transform hover:translate-x-1">
                        <div>
                          <div className="w-auto h-auto md:block hidden">
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
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                          </div>

                          <div className="md:hidden block">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="15"
                              height="16"
                              viewBox="0 0 15 16"
                              fill="none"
                            >
                              <path
                                d="M1 14.5L14 1.5M14 1.5V13.98M14 1.5H1.52"
                                stroke="white"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                          </div>
                        </div>
                        <div className="font-clash-medium text-white md:text-[22px] text-[18px]">
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

export default F1Sections;
