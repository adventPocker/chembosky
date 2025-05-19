import Link from "next/link";
import React from "react";

const SectionA2 = () => {
  return (
    <>
      <div className="bg-aboutbg md:bg-cover bg-no-repeat bg-center bg-cover">
        <div className="items-center mix-blend-multiply flex flex-col justify-center px-16  max-md:px-5">
          <div className="w-full max-w-[1128px] md:py-40 py-20 max-md:max-w-full max-md:my-10">
            <div className="text-stone-900 md:text-[46px] text-[25px] font-medium font-clash-medium leading-[52px]">
              Chemben Vinod Jose
            </div>
            <div className="max-w-[553px] w-auto mt-7 text-stone-900 md:text-[25px] text-[16px] font-normal md:leading-[35px] leading-[22.4px]  tracking-wide">
              An artist with an unwavering dedication to his craft, Chemban
              Vinod Jose, the founder of Chembosky Motion Pictures, is a name
              synonymous with versatility and brilliance. His creative insight
              and deep understanding of characters breathe life into every
              project we undertake. With an illustrious career that has spanned
              various roles both in front of and behind the camera, Chemban
              Vinod Jose infuses our productions with a unique blend of artistry
              and authenticity.
            </div>
            <Link href="/about/chemban_vinod">
              <button className="md:w-[204px] md:h-16 mt-10 border border-black transition ease-in-out delay-100 rounded-[40px] py-4 px-6 flex gap-3 items-center hover:bg-gray-200 hover:border-gray-300">
                <div className="md:block hidden">
                  <img
                    src="/Icons/arrow1.png"
                    alt="arrow"
                    className="w-6 h-6"
                  />
                </div>
                <div className="md:hidden block">
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
                <div className="text-stone-900 md:text-[22px] text-[18px] font-medium font-clash-medium md:leading-7 leading-[28px]">
                  Read More
                </div>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default SectionA2;
