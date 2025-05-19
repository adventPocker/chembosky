import Image from "next/image";
import Hero from "./components/Sections/Hero";
import FirstSection from "./components/Sections/FirstSection";
import SecondSection from "./components/Sections/SecondSection";
import ThirdSection from "./components/Sections/ThirdSection";
import FourthSection from "./components/Sections/FourthSection";
import FifthSection from "./components/Sections/FifthSection";
import SixthSections from "./components/Sections/SixthSections";
import Footer from "./components/Sections/Footer";

export default function Home() {
  return (
    <>
      <div className="min-h-screen max-w-full">
        <Hero />
      </div>
      <FirstSection />
      <SecondSection />
      {/* <ThirdSection /> */}
      <FourthSection />
      <FifthSection />
      <SixthSections />
      <Footer />
    </>
  );
}
