import React from "react";
import HeroSection from "../Components/Home/HeroSection";
import AboutSection from "../Components/Home/AboutSection";
import Staffs from "../Components/Home/Staffs";
import Cards from "../Components/Home/Cards";

function Home() {
  return (
    <div className="overflow-hidden">
      <HeroSection />
      <Cards />
      <AboutSection />
      <Staffs />
    </div>
  );
}

export default Home;
