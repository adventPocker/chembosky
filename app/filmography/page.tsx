import React from "react";
import F1Sections from "./Components/Sections/F1Sections";

import F2Sections from "./Components/Sections/F2Sections";
import F3Sections from "./Components/Sections/F3Sections";
import F4Sections from "./Components/Sections/F4Sections";
import Footer from "../components/Sections/Footer";
import SixthSections from "../components/Sections/SixthSections";
import { Metadata } from "next";
export const metadata: Metadata = {
  metadataBase: new URL("https://chembosky.com"),
  title: 'Filimography',
  description:
    "Explore the diverse filmography of Chembosky Motion Pictures, featuring blockbuster hits, award-winning films, and upcoming projects. Founded by Chemban Vinod Jose, Chembosky is known for pushing the boundaries of storytelling in Indian cinema.",
  keywords: [
    "Chembosky Motion Pictures",
    "filmography",
    "Indian cinema",
    "blockbuster hits",
    "award-winning films",
    "upcoming projects",
    "Chemban Vinod Jose",
    "innovative storytelling",
    "movie production",
  ],
  twitter: {
    card: "summary_large_image",
  },
};

const page = () => {
  return (
    <>
      <div className="min-h-screen max-w-full">
        <F1Sections />
      </div>
      <F2Sections />
      <F3Sections />
      <F4Sections />
      <SixthSections />
      <Footer />
    </>
  );
};

export default page;
