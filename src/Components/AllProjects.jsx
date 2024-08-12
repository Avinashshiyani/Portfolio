import React from "react";
import { Project } from "./Projects";

const AllProjects = () => {
  return (
    <div className="mt-[100px]">
      <div className="grid  items-start  w-full ">
        <div className="grid sm:grid-cols-2 md:grid-cols-3  gap-[26px]  ">
          <Project name="Project 1" />
          <Project name="Project 2" />
          <Project name="Project 3" />
          <Project name="Project 4" />
          <Project name="Project 5" />
          <Project name="Project 6" />
        </div>
      </div>
    </div>
  );
};

export default AllProjects;
