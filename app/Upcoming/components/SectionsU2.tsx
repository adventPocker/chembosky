
import People from "@/app/components/Elements/Peoples";
import React from "react";
type SectionsU2Prop = {
    CrewData: FilmApiDataLeadCrew[];
    CastData: FilmApiDataLeadCast[];
  };
const SectionsU2 = ({
    CrewData,
    CastData,
  }: SectionsU2Prop)  => {
  return (
    <>
      {" "}
      <div className="items-center bl mix-blend-multiply flex flex-col justify-center h-auto px-16 max-md:px-5 ">
        <div className="w-full max-w-[1128px]  max-md:max-w-full max-md:my-10 ">
          <div className="py-40">

          <People isRole={false}  CrewData={CrewData} CastData={CastData}/>
          </div>
        </div>
      </div>
    </>
  );
};

export default SectionsU2;
