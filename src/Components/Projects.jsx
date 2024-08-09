import React from "react";
import ProjectPage from "../assets/projectpage.png";
import LandingPageOne from "../assets/landingPageOne.png";

const Projects = () => {
  return (
    <div className="grid ">
      {/* my project div */}
      <div className="grid items-center mt-[80px] w-full h-full ">
        {/* title div */}
        <div className="flex font-bold text-[44px] space-x-2">
          <span className="text-white">My</span>
          <span className="text-secondary">Projects</span>
        </div>
        {/* square project show div */}
        <div className="grid  items-start  w-full ">
          <div className="grid sm:grid-cols-2 md:grid-cols-3  gap-[26px]  ">
            <Project />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;

const Project = ({ img = LandingPageOne, name = "React Mock" }) => {
  return (
    <div>
      <div className="grid   items-center rounded-lg py-[6px] px-[12px] bg-[#393E46]  ">
        <div className="flex  justify-center">
          <img src={img} alt="" className="h-[250px] w-full rounded-lg" />
        </div>
        <div className="font-bold text-[#FFFFFF] text-[18px]  py-[4px] ">
          <span>{name}</span>
        </div>
      </div>
    </div>
  );
};
