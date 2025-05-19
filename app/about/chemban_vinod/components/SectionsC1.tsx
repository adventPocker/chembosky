"use client";
import React from "react";
import Navbar from "@/app/components/Navbar/Navbar";
import { motion } from "framer-motion";
const SectionsC1 = () => {
  const divStyles = {
    background: `
                  linear-gradient(180deg, rgba(18, 18, 18, 0) 44.18%, #121212 100%),
                  linear-gradient(180deg, rgba(18, 18, 18, 0.6) 0%, rgba(18, 18, 18, 0) 18.41%),
                  radial-gradient(97.84% 38.52% at 17% 85.19%, rgba(18, 18, 18, 0.7) 32.81%, rgba(18, 18, 18, 0.07) 100%)
                `,
  };
  return (
    <>
      {" "}
      <main className="h-[100vh]  bg-bg-6 bg-no-repeat bg-cover bg-center">
        <div className="h-[100vh] bg-bg-grade bg-no-repeat bg-cover bg-center bg-opacity-20 bg-blend-overlay">
          <div
            className="w-full h-[100vh] flex justify-center  "
            style={divStyles}
          >
            <div className="relative max-w-[1129px] px-4 w-full ">
              <Navbar />

              <div className="min-h-screen pt-[26.37vh]">
              <motion.div
                    initial={{ opacity: 0, y: "100%" }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      type: "ease", // Use ease timing function
                      duration: 0.5, // Adjust the duration as needed
                    }} className="text-[#FFDFB4] md:text-[46px] text-[33px] font-medium font-clash-medium leading-[52px]">
                  Chemben Vinod Jose
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, y: "100%" }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      type: "ease", // Use ease timing function
                      duration: 0.5, // Adjust the duration as needed
                    }} className="md:w-[443px] md:mt-[2.34vh] h-7 md:justify-center items-center gap-5 inline-flex">
                  <div className="text-[#FFFFFF] md:text-2xl font-medium font-clash-medium leading-7">
                    Actor
                  </div>
                  <div className="text-[#FFFFFF] md:text-2xl font-medium font-clash-medium leading-7">
                    /
                  </div>
                  <div className="text-[#FFFFFF] md:text-2xl font-medium font-clash-medium leading-7">
                    Screenwriter
                  </div>
                  <div className="text-[#FFFFFF] md:text-2xl font-medium font-clash-medium leading-7">
                    /
                  </div>
                  <div className="text-[#FFFFFF] md:text-2xl font-medium font-clash-medium leading-7">
                    Producer
                  </div>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, y: "100%" }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      type: "ease", // Use ease timing function
                      duration: 0.5, // Adjust the duration as needed
                    }}className="md:max-w-[500px] w-auto md:mt-[5.86vh] mt-5 text-[#FFFFFF] md:text-[25px] font-normal  md:leading-[35px] tracking-wide">
                  An artist with an unwavering dedication to his craft, Chemban
                  Vinod Jose, the founder of Chembosky Motion Pictures, is a
                  name synonymous with versatility and brilliance. His creative
                  insight and deep understanding of characters breathe life{" "}
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, y: "100%" }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      type: "ease", // Use ease timing function
                      duration: 0.5, // Adjust the duration as needed
                    }} className="max-w-[138px] w-auto md:mt-[2.34vh] mt-6 justify-center items-center gap-5 inline-flex">
                  <div className="text-[#FFFFFF] text-base font-medium font-clash-medium leading-normal tracking-tight">
                    More at
                  </div>
                  <a
                    href="https://www.imdb.com/name/nm5584853/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                  <div className="px-2 py-0.5 transform transition  hover:scale-125  rounded-sm border border-[#FFFFFF] flex-col justify-center items-center gap-2.5 inline-flex">
                    <div className="text-[#FFFFFF]  transform transition text-base font-medium font-clash-medium leading-normal tracking-tight">
                      IMDB
                    </div>
                  </div>
                  </a>
                </motion.div>
              </div>
            </div>
          </div>
        </div>{" "}
      </main>
    </>
  );
};

export default SectionsC1;
