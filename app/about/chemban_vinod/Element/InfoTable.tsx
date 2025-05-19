import React from "react";
type InfoTableProps = {
    Date: string;
    MovieName:string;
  };
const InfoTable = ({Date,MovieName}:InfoTableProps) => {
  return (
    <>
      <div className="border-b border-black  md:px-10 py-5  px-0">
        <div className=" flex  md:justify-normal justify-between" >
          <div className="md:w-[147px]  text-black md:text-2xl text-[22px] font-medium font-clash-medium leading-loose ">
            {Date} 
          </div>
          <div className="text-black md:text-4xl text-[22px] text-right font-medium font-clash-medium md:leading-[44px] leading-[40px]">
{MovieName}
          </div>
        </div>
      </div>
    </>
  );
};

export default InfoTable;
