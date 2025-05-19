import getUpcomingFilms from "@/Lib/API/getUpcomingFilms";
import FilmContent from "@/Lib/Global Components/FilmContent";
import React from "react";

export default async function ThirdSection() {
  const dataFilms: any = await getUpcomingFilms();
  const filmData: UpcomingFilm[] = dataFilms.data;
  return (
    <div className="items-center bl mix-blend-multiply   flex flex-col justify-center px-16 md:py-40 max-md:px-5 ">
      <div className="w-full max-w-[1128px]   max-md:max-w-full max-md:my-10">
        <div className=" h-auto ">
          <div className="text-zinc-800 md:text-[32px] text-[25px] font-medium font-clash-medium leading-10">
            Upcoming{" "}
          </div>
          <FilmContent filmData={filmData}/>
         
        </div>
      </div>
    </div>
  );
}
