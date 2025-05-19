"use client";
import React from "react";
import Image from "next/image";
import bg from "@/public/bg-3.png";
import Link from "next/link";

const ErrorPage = () => {
  const divStyles = {
    background: `
          linear-gradient(180deg, rgba(18, 18, 18, 0) 44.18%, #121212 100%),
          linear-gradient(180deg, rgba(18, 18, 18, 0.6) 0%, rgba(18, 18, 18, 0) 18.41%),
          radial-gradient(97.84% 38.52% at 17% 85.19%, rgba(18, 18, 18, 0.7) 32.81%, rgba(18, 18, 18, 0.07) 100%)
        `,
  };

  return (
    <main className="h-[100vh] w-full">
    <Image
      src={bg}
      loading="lazy"
      alt="no image"
      className="absolute top-0 h-[100vh]  object-cover	w-[100%]"
    />
      <div className="h-[100vh] bg-bg-grade bg-no-repeat bg-cover bg-center bg-opacity-20 bg-blend-overlay relative">
      
          <div className="relative max-w-[1129px]  w-full h-full">
            <div className="static w-full h-auto ">
              <div className="flex items-center justify-center w-screen h-screen">
                <div className="px-4 lg:py-12">
                  <div className="lg:gap-4 lg:flex">
                    <div className="flex flex-col items-center justify-center md:py-24 lg:py-32">
                      <h1 className="font-clash-medium md:text-[50px] text-[30px] text-[#FFDFB4] font-medium md:leading-[70px] md:tracking-[-0.25px] text-left">
                        404
                      </h1>
                      <p className="mb-2 font-clash-medium md:text-[50px] text-[30px] text-[#FFDFB4] font-medium md:leading-[70px] md:tracking-[-0.25px] text-left">
                        <span className="text-red-500">Oops!</span> Page{" "}
                      </p>
                      <p
                        className="mb-8 text-white text-opacity-80 md:text-[25px] mt-[2.343vh] text-base font-normal
  md:leading-[35px] tracking-wide text-left"
                      >
                        we are sorry, but the page you requested was not found
                      </p>
                      <Link href="/" className="mt-9">
                        <div className="flex items-center px-4  mt-8">
                          <div className="font-clash-medium text-2xl text-white hover:scale-125">
                            Go Home
                          </div>
                        </div>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
      </div>
    </main>
  );
};

export default ErrorPage;
