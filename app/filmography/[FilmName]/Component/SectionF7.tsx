import { BASE_URL } from "@/API/endpoint";
import Image from "next/image";
import React from "react";

type SectionF7Props = {
  FilmSongs: FilmApiDataSong[];
  PressKit: any;
  ReleaseData: FilmApiDataTrailerRelease[];
  FilmData: FilmApiData[];
};
export default function SectionF7({
  FilmSongs,
  PressKit,
  ReleaseData,
  FilmData,
}: SectionF7Props) {
  return (
    <>
      <div className="items-center mix-blend-multiply flex flex-col justify-center px-16  max-md:px-5">
        <div className="w-full max-w-[1128px] md:pb-40 pb-20 max-md:max-w-full  ">
          <div className=" h-full w-full  ">

            {FilmSongs.length > 0 &&  <div className=" ">
              <div className="w-auto h-auto text-stone-900 md:text-[38px] text-[25px] font-medium font-clash-medium leading-10">
                Track List
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:mt-20 mt-7">
                {FilmSongs.map((data: FilmApiDataSong, index: number) => (
                  <div className="flex gap-4  " key={index}>
                   <a
                    href={`${data.link}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src={`${BASE_URL}${data.ThumbImage.url}`}
                      alt=""
                      className="w-[78.89px] h-20 rounded-lg object-cover"
                    />
                    </a>
                    <div className="py-4">
                      <div className="w-auto  text-neutral-900 text-base font-medium font-clash-medium leading-normal tracking-tight">
                        {data.Title}
                      </div>
                      <div className="w-auto mt-1 text-neutral-900 text-sm font-normal font-clash-regular leading-tight tracking-tight">
                        {data.Singer}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
}
            {/* <div className="mt-40">
              <div className="text-zinc-800 text-2xl font-medium font-clash-medium leading-loose">
                Press Kit
              </div>
              <div className="w-auto lg:mt-[53px] mt-4 text-stone-900 text-base font-bold leading-normal tracking-wide">
                Download Press Kit
              </div>
              <button className="filmButtonBg md:w-auto w-auto h-[56px] mt-5  rounded-[40px]  ">
                <div className="py-4 px-6 flex gap-4 items-center rounded-[40px] ">
                  <div>
                    <img
                      src="/Icons/download.svg"
                      alt="arrow"
                      className="w-auto h-auto"
                    />
                  </div>
                  <div className="text-white text-[22px] font-medium font-clash-medium leading-7">
                    Download
                  </div>
                </div>
              </button>
            </div> */}
            <div className="md:mt-40 mt-20  ">
              <div className="text-zinc-800 text-[25px] font-medium font-clash-medium leading-loose">
                Movie Details
              </div>
              <div className="flex flex-wrap mt-10 gap-4">
                <div className="w-auto  md:h-10 h-auto px-6 py-2 bg-[#FFEEF2] rounded-[100px] justify-start items-center gap-2 inline-flex">
                  <div className="text-red-300 text-sm font-medium  leading-tight tracking-tight">
                    Country
                  </div>
                  <div className="text-red-300 text-base font-medium  leading-normal tracking-wide">
                    {FilmData[0].Country}
                  </div>    
                </div>

                <div className="w-auto  md:h-10 h-auto px-6 py-2 bg-indigo-50 rounded-[100px] justify-start items-center gap-2 inline-flex">
                  <div className="text-indigo-300 text-sm font-semibold leading-tight tracking-tight">
                    Language
                  </div>
                  <div className="text-indigo-300 text-base font-semibold leading-normal tracking-wide">
                    {FilmData[0].Language}
                  </div>
                </div>
                <div className="w-auto  md:h-10 h-auto px-6 py-2 bg-violet-50 rounded-[100px] justify-start items-center gap-2 inline-flex">
                  <div className="text-violet-400 text-sm font-medium  leading-tight tracking-tight">
                    Production Company
                  </div>
                  <div className="text-violet-400 text-base font-medium  leading-normal tracking-wide">
                    {FilmData[0].ProductionCompany}
                  </div>
                </div>

                <div className="w-auto md:h-10 h-auto px-6 py-2 bg-emerald-50 rounded-[100px] justify-start items-center gap-2 inline-flex">
                  <div className="text-stone-400 text-sm font-medium  leading-tight tracking-tight">
                    Distributed by
                  </div>
                  <div className="text-stone-400 text-base font-medium  leading-normal tracking-wide">
                    {FilmData[0].Distributed_by}
                  </div>
                </div>
                <div className="w-auto  md:h-10 h-auto px-6 py-2 bg-rose-50 rounded-[100px] justify-start items-center gap-2 inline-flex">
                  <div className="text-red-300 text-sm font-medium  leading-tight tracking-tight">
                    SoundMix
                  </div>
                  <div className="text-red-300 text-base font-medium  leading-normal tracking-wide">
                    {FilmData[0].Sound_MIx}
                  </div>
                </div>
                <div className="w-auto  md:h-10 h-full px-6 py-2 bg-indigo-50 rounded-[100px] justify-start items-center gap-2 inline-flex">
                  <div className="text-indigo-300 text-sm font-semibold leading-tight tracking-tight">
                    Runtime
                  </div>
                  <div className="text-indigo-300 text-base font-semibold leading-normal tracking-wide">
                    {FilmData[0].durations}
                  </div>
                </div>
                <div className="w-auto  md:h-10 h-auto px-6 py-2 bg-violet-50 rounded-[100px] justify-start items-center gap-2 inline-flex">
                  <div className="text-violet-400 text-sm font-medium  leading-tight tracking-tight">
                    Aspect Ratio
                  </div>
                  <div className="text-violet-400 text-base font-medium  leading-normal tracking-wide">
                    {FilmData[0].Aspect_Ratio}
                  </div>
                </div>
              </div>
            </div>
            <div className="md:mt-40 mt-20  ">
              <div className="text-zinc-800 text-2xl font-medium font-clash-medium leading-loose">
                Releases
              </div>
              <div className="w-auto  mt-10 text-stone-900 text-base font-bold  leading-normal tracking-wide">
                Theatrical
              </div>
              <div className="mt-5 flex flex-wrap gap-4">
                {ReleaseData.map(
                  (data: FilmApiDataTrailerRelease, index: number) =>
                    !data.Digital && (
                      <div
                        key={index}
                        className="py-4 px-6 flex gap-4 justify-center items-center border border-black md:h-14 h-auto w-auto rounded-[40px]"
                      >
                        <div className="text-zinc-800 md:text-base font-medium font-clash-medium leading-normal tracking-tight">
                          {data.Date}
                        </div>
                        <img
                          className="w-8 h-6 rounded-lg"
                          src={`${BASE_URL}${data.HostImage.url}`}
                          alt={data.HostImage.url}
                        />
                        <div className="text-zinc-800 text-base font-medium font-clash-medium leading-normal tracking-tight">
                          {data.HostName}
                        </div>
                      </div>
                    )
                )}
              </div>
              {ReleaseData.some((data) => data.Digital) && (
                <div>
                  <div className="w-auto mt-20 text-stone-900 text-base font-bold  leading-normal tracking-wide">
                    Digital
                  </div>
                  <div className="mt-5 flex flex-wrap gap-4">
                    {ReleaseData.map(
                      (data: FilmApiDataTrailerRelease, index: number) =>
                        data.Digital && (
                          <button
                            key={index}
                            className="py-4 px-6 flex gap-4 justify-center items-center border border-black md:h-14 h-auto w-auto rounded-[40px]"
                          >
                            <div className="text-zinc-800 md:text-base font-medium font-clash-medium leading-normal tracking-tight">
                              {data.Date}
                            </div>
                            <Image
                              className="w-8 h-6 rounded-lg"
                              src={`${BASE_URL}${data.HostImage.url}`}
                              alt={data.HostImage.url}
                              width={32}
                              height={32}
                            />
                            <div className="text-zinc-800 text-base font-medium font-clash-medium leading-normal tracking-tight">
                              {data.HostName}
                            </div>
                          </button>
                        )
                    )}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
