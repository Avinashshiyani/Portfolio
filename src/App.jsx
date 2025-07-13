import React from "react";
import Navbar from "./Navbar/Navbar";
import HeroSection from "./HeroSection/HeroSection";
import SkillSection from "./SkillSection/SkillSection";
import AboutUs from "./AboutSection/AboutUs";
import Portfolio from "./Portfolio/Portfolio";
import CustomerTestimonial from "./CustomerTestimonial/CustomerTestimonial";
import ContactSection from "./ContactSection/ContactSection";

const App = () => {
  return (
    <div className="">
      <Navbar />
      <HeroSection />
      <SkillSection />
      <AboutUs />
      <Portfolio />
      <CustomerTestimonial />
      {/* <div className="grid justify-center "> */}
        <ContactSection />
      {/* </div> */}
    </div>
  );
};

export default App;
