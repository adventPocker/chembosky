"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BASE_URL } from "@/API/endpoint";
import { Image } from "@nextui-org/react";
type PeoplesProp = {
  CrewData: FilmApiDataLeadCrew[];
  CastData: FilmApiDataLeadCast[];
  isRole: boolean;
};
export default function People({ CrewData, CastData, isRole }: PeoplesProp) {
  const [isAllCastVisible, setIsAllCastVisible] = useState(false);
  const [isAllCrewVisible, setIsAllCrewVisible] = useState(false);

  const itemsToShow = 8;

  const [visibleCrewData, setVisibleCrewData] = useState<FilmApiDataLeadCrew[]>(
    CrewData.slice(0, itemsToShow)
  );

  const handleSeeMoreCrewClick = () => {
    const nextItems = CrewData.slice(visibleCrewData.length, CrewData.length);
    setVisibleCrewData((prevData) => [...prevData, ...nextItems]);
    setIsAllCrewVisible(true);
  };
  const handleSeeLessCrewClick = () => {
    const itemsToHide = itemsToShow;
    setVisibleCrewData((prevData) => prevData.slice(0, itemsToShow));
    setIsAllCrewVisible(false);
  };

  const [visibleCastData, setVisibleCastData] = useState<FilmApiDataLeadCast[]>(
    CastData.slice(0, itemsToShow)
  );

  const handleSeeMoreCastClick = () => {
    const nextItems = CastData.slice(visibleCastData.length, CastData.length);
    setVisibleCastData((prevData) => [...prevData, ...nextItems]);
    setIsAllCastVisible(true);
  };
  const handleSeeLessCastClick = () => {
    const itemsToHide = itemsToShow;
    setVisibleCastData((prevData) => prevData.slice(0, itemsToShow));
    setIsAllCastVisible(false);
  };

  return (
    <>
      <div className=" ">
        <div className="flex justify-between items-center">
          <div className="w-auto text-stone-900 md:text-[38px] text-[25px] font-medium font-clash-medium leading-10">
            Lead Crew
          </div>
          <div className="md:hidden block">
          <div className=" md:flex justify-end items-end  hidden">
          {visibleCrewData.length >= itemsToShow && (
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              <div
                onClick={
                  isAllCrewVisible
                    ? handleSeeLessCrewClick
                    : handleSeeMoreCrewClick
                }
                className="w-auto h-[40px]  px-6 py-2 flex gap-4 items-center"
              >
                
                {isAllCrewVisible ? (
                  <img src="/Icons/arrow3.png" alt="icon2" />
                ) : (
                  <img src="/Icons/arrow2.png" alt="icon2" />
                )}
              </div>
            </motion.div>
          )}
        </div>
          </div>
        </div>

        <div className="md:pt-20 pt-[18px] pb-16 md:px-14 ">
          <div className="grid md:grid-cols-3 lg:grid-cols-4 sm:grid-cols-2 grid-cols-2 md:gap-10 gap-5">
            <AnimatePresence>
              {visibleCrewData.map((data: FilmApiDataLeadCrew, index: number) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -50 }}
                  transition={{ duration: 0.5 }}
                  className="max-w-[220px] w-full"
                >
                  <div className="max-w-[220px] w-full  " key={index}>
                    <div className=" max-w-[220px] h-full max-h-[172px] relative ">
                      <Image
                        src={`${BASE_URL}${data.Image.url}`}
                        alt={data.Image.name}
                        width={220}
                        loading="lazy"
                        height={172}
                        className="object-cover max-w-[220px] md:w-[220px] w-full h-full  max-h-[172px] md:h-[172px] rounded-xl "
                      />

                      <div
                        className=" absolute top-0 w-full h-full rounded-xl "
                        style={{
                          background:
                            "linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.2) 100%)",
                        }}
                      ></div>
                    </div>
                    <div className="w-auto mt-7 text-neutral-900 lg:text-base text-xs font-normal font-clash-regular leading-tight tracking-tight">
                      {data.Title}
                    </div>
                    <div className="w-auto text-neutral-900 lg:text-2xl text-lg  font-medium font-clash-medium leading-normal tracking-tight">
                      {data.Name}
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
        <div className="mt-5 md:flex justify-end items-end  hidden">
          {visibleCrewData.length >= itemsToShow && (
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              <div
                onClick={
                  isAllCrewVisible
                    ? handleSeeLessCrewClick
                    : handleSeeMoreCrewClick
                }
                className="w-auto h-[40px] rounded-[40px] border border-black px-6 py-2 flex gap-4 items-center"
              >
                <div className="text-stone-900 text-base font-medium font-clash-medium leading-normal tracking-tight">
                  {isAllCrewVisible ? "Show Less" : "See All"}
                </div>
                {isAllCrewVisible ? (
                  <img src="/Icons/arrow3.png" alt="icon2" />
                ) : (
                  <img src="/Icons/arrow2.png" alt="icon2" />
                )}
              </div>
            </motion.div>
          )}
        </div>
      </div>

      <div className=" md:pt-36 pt-20 pb-12 ">
        {" "}
        <div className="flex justify-between items-center">
          <div className="md:w-[836.16px] text-stone-900 md:text-[38px] text-[25px] font-medium font-clash-medium leading-10 ">
            Lead Cast
          </div>
          <div>
          {visibleCastData.length >= itemsToShow && (
          <div className="flex justify-end items-end  md:hidden">
            <motion.div
              whileHover={{ scale: 1.1 }} // Example hover animation
              whileTap={{ scale: 0.9 }} // Example tap animation
            >
              <div
                onClick={
                  isAllCastVisible
                    ? handleSeeLessCastClick
                    : handleSeeMoreCastClick
                }
                className="w-auto h-[40px] rounded-[40px]  px-6 py-2 flex gap-4 items-center"
              >
              
                {isAllCastVisible ? (
                  <img src="/Icons/arrow3.png" alt="icon2" />
                ) : (
                  <img src="/Icons/arrow2.png" alt="icon2" />
                )}
              </div>
            </motion.div>
          </div>
        )}
          </div>
        </div>
        <div className="md:pt-20 pt-[18px] pb-16 md:px-14">
          <div className="grid md:grid-cols-3 lg:grid-cols-4 sm:grid-cols-2 grid-cols-2 md:gap-10 gap-5">
            <AnimatePresence>
              {visibleCastData.map((data: FilmApiDataLeadCast, index: number) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -50 }}
                  transition={{ duration: 0.7, ease: "easeInOut" }}
                  className="max-w-[220px] w-full"
                >
                  <div
                    className=" max-w-[220px] h-full max-h-[172px] relative "
                    key={index}
                  >
                    <Image
                      src={`${BASE_URL}${data.Image.url}`}
                      alt={data.Image.name}
                      width={220}
                      height={172}
                      className="object-cover max-w-[220px] md:w-[220px] w-full h-full  max-h-[172px] md:h-[172px] rounded-xl "
                      loading="lazy"
                    />

                    <div
                      className=" absolute  top-0 w-full h-full rounded-xl "
                      style={{
                        background:
                          "linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.2) 100%)",
                      }}
                    ></div>
                  </div>
                  {isRole && (
                    <div className="w-auto mt-7 text-neutral-900 lg:text-base text-xs font-normal font-clash-regular leading-tight tracking-tight">
                      {data.Title}
                    </div>
                  )}
                  {isRole ? (
                    <div className="w-auto text-neutral-900 lg:text-2xl text-lg font-medium font-clash-medium leading-normal tracking-tight">
                      {data.Name}
                    </div>
                  ) : (
                    <div className="w-auto mt-7 text-neutral-900 lg:text-2xl text-lg font-medium font-clash-medium leading-normal tracking-tight">
                      {data.Name}
                    </div>
                  )}
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
        {visibleCastData.length >= itemsToShow && (
          <div className="mt-5 md:flex justify-end items-end  hidden">
            <motion.div
              whileHover={{ scale: 1.1 }} // Example hover animation
              whileTap={{ scale: 0.9 }} // Example tap animation
            >
              <div
                onClick={
                  isAllCastVisible
                    ? handleSeeLessCastClick
                    : handleSeeMoreCastClick
                }
                className="w-auto h-[40px] rounded-[40px] border border-black px-6 py-2 flex gap-4 items-center"
              >
                <div className="text-stone-900 text-base font-medium font-clash-medium leading-normal tracking-tight">
                  {isAllCastVisible ? "Show Less" : "See All"}
                </div>
                {isAllCastVisible ? (
                  <img src="/Icons/arrow3.png" alt="icon2" />
                ) : (
                  <img src="/Icons/arrow2.png" alt="icon2" />
                )}
              </div>
            </motion.div>
          </div>
        )}
      </div>
    </>
  );
}
