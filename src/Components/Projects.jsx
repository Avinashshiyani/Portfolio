import React from "react";
import ProjectPage from "../assets/projectpage.png";
import LandingPageOne from "../assets/landingPageOne.png";

const Projects = () => {
  return (
    <div className="grid justify-center absolute ">
      {/* image div */}
      <div className="flex justify-center items-center">
        <img src={ProjectPage} alt="" className="h-fit" />
      </div>
      {/* my project div */}
      <div className="grid absolute mt-[80px] px-[50px]">
        <div className="flex font-bold text-[44px] space-x-2">
          <span className="text-white">My</span>
          <span className="text-secondary">Projects</span>
        </div>
        {/* <div className="px-[40px] py-[40px] flex items-center justify-center backdrop-blur-[50px]">
          <img src={LandingPageOne} alt="" />
        </div> */}
      </div>
    </div>
  );
};

export default Projects;
