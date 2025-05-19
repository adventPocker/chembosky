import React from 'react'
import SectionA1 from './components/SectionA1'
import SectionA2 from './components/SectionA2'
import SectionA3 from './components/SectionA3'
import SixthSections from '../components/Sections/SixthSections'
import Footer from '../components/Sections/Footer'
import { Metadata } from 'next'
export const metadata: Metadata = {
  metadataBase: new URL("https://chembosky.com"),
  title: 'about',
  description:
    "Chembosky Motion Pictures is a leading film production company dedicated to pushing the boundaries of storytelling. Known for blockbuster hits and Oscar nominations, we redefine Indian cinema with creativity, innovation, and excellence.",
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

const page = () => {

  return (
    <>
    
    <SectionA1/>
    <SectionA2/>
    <SectionA3/>
    <SixthSections/>
    <Footer/>
    </>
  )
}

export default page

