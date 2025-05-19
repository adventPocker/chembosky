import InfoTable from "../Element/InfoTable";
import React from "react";

const SectionsC3 = () => {
  return (
    <>
      {" "}
      <div className="items-center mix-blend-multiply flex flex-col justify-center px-16  max-md:px-5">
        <div className="w-full max-w-[1128px] md:py-40 py-20 max-md:max-w-full max-md:my-10">
          <div className=" text-stone-900 md:text-[38px] text-[25px] font-medium font-clash-medium leading-10">
            Filimography
          </div>

          <div className="text-stone-900 md:text-[32px] text-[16px] md:mt-20 mt-10 font-medium font-clash-medium leading-10">
            As Screenwriter
          </div>
          <div className="md:mt-20 mt-10">
            <InfoTable Date="2021" MovieName="Bheemante Vazhi" />
          </div>
          <div className="md:py-40 py-20">
            <div className="text-stone-900 md:text-[32px] text-[16px] font-medium font-clash-medium leading-10">
              As Producer
            </div>
            <div className="md:mt-20 mt-10">
              <InfoTable Date="TBA" MovieName="Anjakkallakokkan" />
              <InfoTable Date="2023" MovieName="Sulaikha Manzil" />
              <InfoTable Date="2021" MovieName="Bheemante Vazhi" />
              <InfoTable Date="2021" MovieName="Churuli" />
              <InfoTable Date="2019" MovieName="Jallikettu" />
              <InfoTable Date="2019" MovieName="Thamaasha" />
              <InfoTable Date="2018" MovieName="Swathanthryam Ardharathriyil" />
            </div>
          </div>
          <div className="">
            <div className="text-stone-900 md:text-[32px] text-[16px] font-medium font-clash-medium leading-10">
              As Actor
            </div>
            <div className="md:py-20 py-10">
              <InfoTable Date="2023" MovieName="King of Kotha" />
              <InfoTable Date="2023" MovieName="Nalla Nilavulla Rathri" />
              <InfoTable Date="2023" MovieName="Sulaikha Manzil" />
              <InfoTable Date="2023" MovieName="Neelavelicham" />
              <InfoTable Date="2023" MovieName="Romancham" />
              <InfoTable Date="2022" MovieName="Thallumaala" />
              <InfoTable Date="2022" MovieName="Vikram" />
              <InfoTable Date="2021" MovieName="Ajagajantharam" />
              <InfoTable Date="2021" MovieName="Bheemante Vazhi" />
              <InfoTable Date="2021" MovieName="Churuli" />
              <InfoTable Date="2020" MovieName="Trance" />
            </div>
            {/* <div className="mt-5 flex justify-end items-end hidden">
              <div>
                <div className="w-auto h-[40px] rounded-[40px] border border-black px-6 py-2 flex gap-4 items-center">
                  <div className="text-stone-900 text-base font-medium font-clash-medium leading-normal tracking-tight">
                    See More
                  </div>

                  <img src="/Icons/arrow2.png" alt="icon2" />
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default SectionsC3;
