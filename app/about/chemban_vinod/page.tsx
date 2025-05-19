import React from "react";
import Link from "next/link";
import SectionsC1 from "./components/SectionsC1";
import F3Sections from "@/app/filmography/Components/Sections/F3Sections";
import SectionsC2 from "./components/SectionsC2";
import SectionsC3 from "./components/SectionsC3";
import Footer from "@/app/components/Sections/Footer";
import { Metadata } from "next";
export const metadata: Metadata = {
  metadataBase: new URL("https://chembosky.com"),
  title: 'Chemban Vinod',
  description:
    "Chembosky Motion Pictures, founded by acclaimed actor and producer Chemban Vinod Jose, is a leading film production company dedicated to pushing the boundaries of storytelling. Known for blockbuster hits and Oscar nominations, we redefine Indian cinema with creativity, innovation, and excellence.",
  keywords: [
    "Chembosky Motion Pictures",
    "Indian cinema",
    "film production",
    "blockbuster hits",
    "Oscar nominations",
    "innovative storytelling",
    "Chemban Vinod Jose",
    "dramas",
    "action adventures",
  ],
  twitter: {
    card: "summary_large_image",
  },
};


export default async function UsersPage() {
  return (
    <>
     <SectionsC1/>
     <F3Sections/>
     <SectionsC2/>
     <SectionsC3/>
     <Footer/>
    </>
  );
}
