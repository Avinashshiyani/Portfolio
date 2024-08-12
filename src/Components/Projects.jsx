import React from "react";
import LandingPageOne from "../assets/landingPageOne.png";
import { Link } from "react-router-dom";

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
        {/* view all div */}
        <div className="flex items-center justify-end py-[20px] z-[10]">
          <div className="text-[18px] text-white">
            <Link to="/allprojects">
              <span>View All </span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
export { Project };

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
