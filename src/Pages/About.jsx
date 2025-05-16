import React from "react";
import PageLayout from "../Components/PageLayout";
import AboutSection from "../Components/Home/AboutSection";
import Cards from "../Components/Home/Cards";

function About() {
  return (
    <div>
      <PageLayout title="About Us" />
      <AboutSection />
      <Cards />
    </div>
  );
}

export default About;
