import Link from "next/link";
import React from "react";
const SixthSections = () => {
  return (
    <>
      <div className="items-center mix-blend-multiply bg-bg-3 bg-opacity-50 bg-cover bg-center bg-no-repeat flex flex-col justify-center px-16  max-md:px-5">
        <div className="w-full max-w-[1128px] py-24 max-md:max-w-full ">
          <div className="text-orange-200 md:text-[46px] text-[26px] font-medium font-clash-medium leading-[52px]">
            Who we are
          </div>{" "}
          <div className="md:w-[839px] w-auto mt-6 text-white md:text-[22px] text-base font-normal md:leading-[30.80px] tracking-wide">
            Chembosky Motion Pictures is a visionary film production company
            dedicated to pushing the boundaries of storytelling through the art
            of cinema. Founded in [year of establishment], our company has
            quickly risen to prominence in the film industry, earning acclaim
            for our commitment to creativity, innovation, and the highest
            standards of quality.
          </div>{" "}
          <Link href="/about">
            <button className="w-[204px] h-16 border border-white rounded-[40px] mt-10 py-4 px-6 flex gap-3 items-center transition-transform hover:scale-105">
              <div>
                <img src="/Icons/arrow3.svg" alt="arrow" className="w-6 h-6" />
              </div>
              <div className="text-white text-[22px] font-medium font-clash-medium leading-7">
                Read More
              </div>
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default SixthSections;
