"use client";
import React, { useEffect, useState } from "react";
import SectionsU1 from "./components/SectionsU1";
import { useSearchParams } from "next/navigation";
import getUpcomingData from "@/Lib/API/getUpcomingData";
import SectionsU2 from "./components/SectionsU2";
import SectionF8 from "../filmography/[FilmName]/Component/SectionF8";
import SixthSections from "../components/Sections/SixthSections";
import Footer from "../components/Sections/Footer";

export default function Page() {
  const searchParams = useSearchParams();
  const id = searchParams.get("id") || ""; // Default to empty string if id is null
  const [filmData, setFilmData] = useState<any | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getUpcomingData({
          slugs: id,
        });
        console.log(data);
        setFilmData(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [id]);
  return (
    <>
      {filmData && (
        <>
          <SectionsU1 filmData={filmData} />
          <SectionsU2
            CrewData={filmData[0].attributes.LeadCrew}
            CastData={filmData[0].attributes.LeadCast}
          />
          <SectionF8 />
          <SixthSections />
          <Footer />
        </>
      )}
    </>
  );
}
