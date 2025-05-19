import React from "react";
import Link from "next/link";
const Footer = () => {
  return (
    <>
      <div className="items-center mix-blend-multiply bg-[#F0F0F0] bg-opacity-50 bg-cover bg-center bg-no-repeat flex flex-col justify-center px-16  max-md:px-5">
        <div className="w-full max-w-[1128px] py-40 max-md:max-w-full">
          <div className="w-auto h-auto flex justify-between items-center ">
            <div className="w-auto h-auto flex-col justify-start items-start gap-6 inline-flex ">
              <div className="w-auto justify-start items-center md:gap-2.5 inline-flex ">
                <div className="w-auto text-stone-900 md:text-2xl text-lg text font-normal font-clash-regular leading-tight tracking-tight">
                  <Link href="/home">Home</Link>
                </div>
              </div>
              <div className="w-auto justify-start items-center gap-2.5 inline-flex">
                <div className="w-auto text-stone-900  md:text-2xl text-lg  font-normal font-clash-regular leading-tight tracking-tight">
                  <Link href="/filmography">Filmography</Link>
                </div>
              </div>
              {/* <div className="w-auto justify-start items-center gap-2.5 inline-flex">
                <div className="w-auto text-stone-900  md:text-2xl text-lg  font-normal font-clash-regular leading-tight tracking-tight">
                  Awards
                </div>
              </div> */}
              <div className="w-auto justify-start items-center gap-2.5 inline-flex">
                <div className="w-auto text-stone-900  md:text-2xl text-lg  font-normal font-clash-regular leading-tight tracking-tight">
                  <Link href="/about"> About Us</Link>
                </div>
              </div>
            </div>

            <div className=" md:w-[313px] w-auto flex-col md:justify-start justify-center md:items-start items-center inline-flex">
              <img
                className="md:w-[207px] md:h-[127.91px] w-28 h-14"
                src="/logo2.svg"
                alt="logo"
              />
            </div>
            <div className="w-auto h-44 py-2  flex-col justify-center items-start gap-6 inline-flex">
              <div className="w-[22px] h-[22px] relative">
                <a
                  href="https://www.facebook.com/chemboskymotionpictures/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="/Icons/ficon3.svg"
                    className="w-5 h-5 left-[1px] top-[1px] absolute"
                    alt=""
                  />
                </a>
              </div>
              {/* <div className="w-[22px] h-[22px] relative">
                <a
                  href="https://www.facebook.com/chemboskymotionpictures/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="/Icons/ficon4.svg"
                    alt=""
                    className="w-[22px] h-[22px] left-0 top-0 absolute"
                  />
                </a>
              </div> */}

              <div className="w-[22px] h-[22px] relative">
                <a
                  href="https://www.instagram.com/chembosky.motionpictures/?hl=en"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="/Icons/ficon2.svg"
                    alt=""
                    className="w-[22px] h-[22px] left-0 top-0 absolute"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>{" "}
      </div>
    </>
  );
};

export default Footer;
