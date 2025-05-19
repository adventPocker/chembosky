"use client";

import { useState, useEffect } from "react";
import SixthSections from "@/app/components/Sections/SixthSections";
import SectionF1 from "./Component/SectionF1";
import SectionF2 from "./Component/SectionF2";
import SectionF3 from "./Component/SectionF3";
import SectionF4 from "./Component/SectionF4";
import SectionF5 from "./Component/SectionF5";
import Footer from "@/app/components/Sections/Footer";
import SectionF6 from "./Component/SectionF6";
import SectionF7 from "./Component/SectionF7";
import SectionF8 from "./Component/SectionF8";
import getFilmsDataSet from "@/Lib/API/getFilmsDataSet";

export default function Page({ params }: { params: { FilmName: string } }) {
  const [filmData, setFilmData] = useState<any | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getFilmsDataSet({
          slugs: params.FilmName,
        });
        setFilmData(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [params.FilmName]);

  return (
    <>
      {filmData && (
        <>
          <SectionF1 filmData={filmData} />
          <SectionF2 reviewData={filmData[0].Review} />
          <SectionF3 videoData={filmData[0].MovieVideo} />
          <SectionF4
            Projects={filmData[0].Project_Summary}
            CrewData={filmData[0].LeadCrew}
            CastData={filmData[0].LeadCast}
          />
          {filmData[0].Awards.length > 0 && (
            <SectionF5 awardData={filmData[0].Awards} />
          )}
          <SectionF6 ImageData={filmData[0].Gallery} />
          <SectionF7
            FilmSongs={filmData[0].Songs}
            PressKit={filmData[0].PressKit}
            ReleaseData={filmData[0].Trailer_realeases}
            FilmData={filmData}
          />
          <SectionF8 />
          <SixthSections />
          <Footer />
        </>
      )}
    </>
  );
}
