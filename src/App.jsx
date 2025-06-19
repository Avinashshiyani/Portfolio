import React from "react";
import Navbar from "./Navbar/Navbar";
import HeroSection from "./HeroSection/HeroSection";
import SkillSection from "./SkillSection/SkillSection";
import AboutUs from "./AboutSection/AboutUs";

const App = () => {
  return (
    <div className="">
      <Navbar />
      <HeroSection />
      <SkillSection />
      <AboutUs />
    </div>
  );
};

export default App;
