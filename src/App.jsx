import React from "react";
import Navbar from "./Navbar/Navbar";
import HeroSection from "./HeroSection/HeroSection";
import SkillSection from "./SkillSection/SkillSection";
import AboutUs from "./AboutSection/AboutUs";
import Portfolio from "./Portfolio/Portfolio";

const App = () => {
  return (
    <div className="">
      <Navbar />
      <HeroSection />
      <SkillSection />
      <AboutUs />
      <Portfolio />
    </div>
  );
};

export default App;
