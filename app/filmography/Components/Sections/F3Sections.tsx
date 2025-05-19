import React from "react";
import F3AwardSlider from "./F3AwardSlider";

const F3Sections = () => {
 
      
  return (
    <>
      {" "}
      <div className="items-center mix-blend-multiply bg-[#F7F7F7] flex flex-col justify-center px-16  max-md:px-5">
        <div className="w-full max-w-[1128px] md:py-32 py-20 max-md:max-w-full  ">
          {/* here the award start  */}
         <F3AwardSlider/>
        </div>
      </div>
    </>
  );
};

export default F3Sections;
