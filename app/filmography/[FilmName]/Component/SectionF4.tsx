"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BASE_URL } from "@/API/endpoint";
import { Image } from "@nextui-org/react";
import People from "@/app/components/Elements/Peoples";

type SectionF4Props = {
  Projects: string;
  CrewData: FilmApiDataLeadCrew[];
  CastData: FilmApiDataLeadCast[];
};
export default function SectionF4({
  Projects,
  CrewData,
  CastData,
}: SectionF4Props) {


  return (
    <>
      <div className="items-center bl mix-blend-multiply flex flex-col justify-center h-auto px-16 max-md:px-5 ">
        <div className="w-full max-w-[1128px]  max-md:max-w-full max-md:my-10 ">
          <div className="md:py-40 py-20 ">
            <div className="w-auto text-stone-900 md:text-[38px] text-[25px] font-medium font-clash-medium leading-10">
              Project Summary
            </div>
            <div className="w-auto md:mt-6 mt-[18px]  text-neutral-900 lg:text-[22px] md:text-lg text-[16px] font-normal md:leading-[30.80px] leading-[23.52px] tracking-wide">
              {Projects}
            </div>
          </div>
          <People isRole={true} CrewData={CrewData} CastData={CastData}/>

          
        </div>
      </div>
    </>
  );
}
