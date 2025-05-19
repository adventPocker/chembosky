"use client";
import Navbar from "@/app/components/Navbar/Navbar";
import React from "react";
import { motion } from "framer-motion";

const SectionA1 = () => {
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
                      type: "ease", // Use ease timing function
                      duration: 0.5, // Adjust the duration as needed
                    }} className="font-clash-medium md:text-[50px] text-[33px] text-[#FFDFB4] font-medium md:leading-[70px] leading-[37.95px] md:tracking-[-0.25px] text-left">
                    Chemban Vinod Jose's Artistry Fueling Chembosky Motion
                    Pictures
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, y: "100%" }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      type: "ease", // Use ease timing function
                      duration: 0.5, // Adjust the duration as needed
                    }} className="md:text-[25px] text-base mt-[2.34vh] font-normal md:leading-[35px] text-white md:tracking-[0.5px] text-left">
                    Redefining Indian Cinema with Blockbuster Hits and Oscar
                    Nominations.Chembosky motion pictures being one of the best
                    film producttion houses in India. s being one of the best
                    film.{" "}
                  </motion.div>
                </div>
               
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default SectionA1;
