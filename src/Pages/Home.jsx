import React from "react";
import HeroSection from "../Components/Home/HeroSection";
import AboutSection from "../Components/Home/AboutSection";
import Staffs from "../Components/Home/Staffs";
import Cards from "../Components/Home/Cards";
import OurCases from "../Components/Home/OurCases";

function Home() {
  return (
    <div className="overflow-hidden">
      <HeroSection />
      <Cards />
      <AboutSection />
      <Staffs />
      <OurCases />
    </div>
  );
}

export default Home;
