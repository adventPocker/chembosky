"use client";
import React, { useState, useEffect } from "react";
import getFamousTrack from "@/Lib/API/getFamousTrack";
import TrackSongs from "../Elements/TrackSongs";
import { BASE_URL } from "@/API/endpoint";
import Image from "next/image";
import { FallbackUI, SkeletonCard } from "../Elements/Skeletons";



const FourthSection = () => {
  const [famousTrackList, setFamousTrackList] = useState<FamousTrack[] | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    let isMounted = true;
    const fetchData = async () => {
      setLoading(true);
      setError(false);
      try {
        const response = await getFamousTrack();
        if (isMounted) {
          setFamousTrackList(response.data);
        }
      } catch (error) {
        if (isMounted) {
          setError(true);
        }
        console.error("Error fetching track data:", error);
      } finally {
        if (isMounted) setLoading(false);
      }
    };

    fetchData();
    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <div className="items-center bl mix-blend-multiply flex flex-col justify-center px-16 max-md:px-5">
      <div className="w-full max-w-[1128px] max-md:max-w-full md:pt-40">
        <h3 className="w-auto text-stone-900 md:text-[38px] text-[31px] font-medium font-clash-medium leading-10">
          Did You Know?
        </h3>
        {loading && (
          <>
            <SkeletonCard />
            <SkeletonCard />
          </>
        )}
        {!loading && error && <FallbackUI />}
        {!loading && !error && famousTrackList && famousTrackList.length === 0 && (
          <div className="w-full flex flex-col items-center justify-center py-24">
            <div className="text-stone-900 text-xl font-clash-medium mb-2">No tracks found</div>
            <div className="text-gray-500">Please check back later for updates.</div>
          </div>
        )}
        {!loading && !error && famousTrackList && famousTrackList.length > 0 &&
          famousTrackList.map((data: FamousTrack, index: number) => (
            <div className="md:py-32" key={index}>
              <div className="text-stone-900 md:block hidden text-base font-normal font-clash-regular leading-tight tracking-tight">
                {data.Date}
              </div>
              <div className="md:flex justify-between md:mt-6">
                <div className="max-h-[372px] md:mt-0 mt-3 h-auto max-w-[454px] order-last">
                  {data.Image && data.Image.url ? (
                    <Image
                      src={`${BASE_URL}${data.Image.url}`}
                      alt={data.Image.url}
                      width={454}
                      height={372}
                      className="h-[372px] w-[454px] md:rounded-3xl rounded-[40px] object-cover md:object-none"
                      loading="lazy"
                    />
                  ) : (
                    <div className="h-[372px] w-[454px] bg-gray-200 rounded-3xl flex items-center justify-center text-gray-400 text-lg">
                      No Image
                    </div>
                  )}
                </div>
                <div className="max-w-[675px] w-auto mt-7 md:mt-0">
                  <div className="text-stone-900 md:hidden text-[14px] font-normal font-clash-regular leading-tight tracking-tight">
                    {data.Date}
                  </div>
                  <div className="w-auto text-stone-900 md:text-[38px] text-[25px] font-medium font-clash-medium md:leading-[53.20px] leading-[33px] md:mt-0 mt-6 text-left">
                    {data.Heading}
                  </div>
                  <div className="max-w-[565px] text-neutral-900 md:mt-5 mt-6 md:text-[22px] text-[16px] font-normal md:leading-[30.80px] leading-[16px] md:tracking-wide tracking-[0.5px]">
                    {data.Content}
                  </div>
                  <a
                    href="https://open.spotify.com/album/3KEn6h4Pr8FJ3vHyS3DfvH"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <button className="md:w-[190px] md:h-16 border border-black rounded-[40px] md:mt-10 mt-6 py-4 px-6 flex gap-3 items-center transition ease-in-out delay-100 hover:bg-gray-200 hover:border-gray-300">
                      <div>
                        <img
                          src="/Icons/arrow1.png"
                          alt="arrow"
                          className="w-6 h-6 md:block hidden"
                        />
                        <div className="md:hidden block">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="25"
                            height="25"
                            viewBox="0 0 25 25"
                            fill="none"
                          >
                            <path
                              d="M6.5 19.5L19.5 6.5M19.5 6.5V18.98M19.5 6.5H7.02"
                              stroke="black"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </div>
                      </div>
                      <div className="text-stone-900 md:text-[22px] text-[18px] font-medium font-clash-medium leading-7">
                        Play List
                      </div>
                    </button>
                  </a>
                </div>
              </div>
              <TrackSongs songData={data.Songs} />
            </div>
          ))}
        <div className="flex justify-center">
          <div
            className="max-w-[1129px] w-full"
            style={{ borderTop: "0.5px solid #8D8E91" }}
          />
        </div>
      </div>
    </div>
  );
};

export default FourthSection;


// Skeleton Loader Component

