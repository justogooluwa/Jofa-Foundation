import React from "react";
import PageLayout from "../Components/PageLayout";
import AboutSection from "../Components/Home/AboutSection";
import Cards from "../Components/Home/Cards";
import AboutContent from "../Components/About/AboutContent";

function About() {
  return (
    <div>
      <PageLayout title="About Us" />
      <AboutSection />
      <Cards />
      <AboutContent />
    </div>
  );
}

export default About;
