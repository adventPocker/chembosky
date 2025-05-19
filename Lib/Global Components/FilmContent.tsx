import React from "react";
import Link from "next/link";
import { BASE_URL } from "@/API/endpoint";

type FilmContentsProp = {
  filmData: UpcomingFilm[];
};
const FilmContent = ({ filmData }: FilmContentsProp) => {
  return (
    <>
      {filmData.map((data: UpcomingFilm, index: number) => (
        <div
          key={index}
          className={`${
            index % 2 === 0 ? "lg:flex" : "lg:flex lg:flex-row-reverse "
          } lg:gap-14 w-full   ${
            index === 0 ? "md:mt-20 mt-8 " : "md:mt-20 mt-8"
          } `}
        >
          <img
            src={`${BASE_URL}${data.attributes.ImgThumb.data.attributes.url}`}
            className="md:w-[520px] w-auto h-[480px]  bg-no-repeat object-cover rounded-[40px]"
            loading="lazy"
          />
          <div
            className="lg:w-[520px] w-full  md:max-h-[552px] h-auto py-20"
            style={{ backgroundColor: "blck" }}
          >
            <div className="w-full ">
              <div className="text-stone-900 md:text-[45px] text-[25px] font-medium font-clash-medium leading-52">
                {data.attributes.Title}
              </div>
              <div className="hidden md:block">
                <div className="justify-center items-center gap-5 inline-flex mt-6 ">
                  <div className="text-stone-900 text-base font-medium font-clash-medium leading-normal tracking-tight">
                    {data.attributes.genere1}
                  </div>
                  <div className="text-stone-900 text-base font-medium font-clash-medium leading-normal tracking-tight">
                    ~
                  </div>
                  <div className="text-stone-900 text-base font-medium font-clash-medium leading-normal tracking-tight">
                    {data.attributes.genere2}
                  </div>
                </div>
              </div>

              <div className="py-10 md:text-[22px] text-[16px] font-normal  h-auto  md:leading-normal  tracking-wide">
                <div className="lg:w-[552px] w-auto flex  text-neutral-900 ">
                  <div
                    dangerouslySetInnerHTML={{
                      __html:
                        data.attributes.FIlmContent.length > 150
                          ? `${data.attributes.FIlmContent.slice(0, 150)}...`
                          : data.attributes.FIlmContent,
                    }}
                  />
                </div>
              </div>
              <div className={`hidden lg:flex gap-4`}>
                {data.attributes.PageAvailable ? (
                  <Link
                    href={{
                      pathname: "/Upcoming",
                      query: { id: data.attributes.slug },
                    }}
                  >
                    <button className="w-[204px] h-16 border border-black transition ease-in-out delay-100 rounded-[40px] py-4 px-6 flex gap-3 items-center hover:bg-gray-200 hover:border-gray-300">
                      <div>
                        <img
                          src="/Icons/arrow1.png"
                          alt="arrow"
                          className="w-6 h-6"
                        />
                      </div>
                      <div className="text-stone-900 text-[22px] font-medium font-clash-medium leading-7">
                        Read More
                      </div>
                    </button>{" "}
                  </Link>
                ) : (
                  <a
                    href={data.attributes.ExternalUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <button className="w-[204px] h-16 border border-black transition ease-in-out delay-100 rounded-[40px] py-4 px-6 flex gap-3 items-center hover:bg-gray-200 hover:border-gray-300">
                      <div>
                        <img
                          src="/Icons/arrow1.png"
                          alt="arrow"
                          className="w-6 h-6"
                        />
                      </div>
                      <div className="text-stone-900 text-[22px] font-medium font-clash-medium leading-7">
                        Read More
                      </div>
                    </button>
                  </a>
                )}
              </div>
              <div className={`flex flex-col gap-4 lg:hidden items-start`}>
                {data.attributes.PageAvailable ? (
                  <Link
                    href={{
                      pathname: "/Upcoming",
                      query: { id: data.attributes.slug },
                    }}
                  >
                    <button className=" border border-black transition ease-in-out delay-100 rounded-[40px] py-4 px-6 flex gap-3 items-center hover:bg-gray-200 hover:border-gray-300">
                      <div>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="25"
                          viewBox="0 0 24 25"
                          fill="none"
                        >
                          <path
                            d="M6 19.5L19 6.5M19 6.5V18.98M19 6.5H6.52"
                            stroke="black"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>
                      </div>
                      <div className="text-stone-900 text-[18px] font-medium font-clash-medium leading-7">
                        Read More
                      </div>
                    </button>
                  </Link>
                ) : (
                  <a
                    href={data.attributes.ExternalUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {" "}
                    <button className=" border border-black transition ease-in-out delay-100 rounded-[40px] py-4 px-6 flex gap-3 items-center hover:bg-gray-200 hover:border-gray-300">
                      <div>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="25"
                          viewBox="0 0 24 25"
                          fill="none"
                        >
                          <path
                            d="M6 19.5L19 6.5M19 6.5V18.98M19 6.5H6.52"
                            stroke="black"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>
                      </div>
                      <div className="text-stone-900 text-[18px] font-medium font-clash-medium leading-7">
                        Read More
                      </div>
                    </button>
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default FilmContent;