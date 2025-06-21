import React from "react";
import ProjectOne from "../assets/projectOne.png";
import ProjectTwo from "../assets/projectTwo.png";
import ProjectThree from "../assets/projectThree.png";

const Portfolio = () => {
  return (
    <div className="px-[20px] py-[56px] sm:px-[40px] md:px-[64px] md:py-[80px] lg:py-[100px]">
      <div className="flex flex-col ">
        <p className="text-[16px] font-semibold text-[#1c1e53] tracking-tight">
          Recent Projects
        </p>
        <p className="text-[36px] font-semibold text-[#1c1e53] tracking-tight">
          My Portfolio
        </p>
        <div className="flex   flex-col gap-[20px] mt-[40px] md:grid md:grid-cols-2 lg:grid-cols-3">
          {projectInfo.map((e, index) => (
            <ProjectCard
              image={e.image}
              title={e.title}
              desc={e.desc}
              link={e.link}
              key={index}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

let ProjectCard = ({ image, title, desc, link }) => {
  return (
    <div className="shadow-2xl rounded-[6px]">
      <div>
        <img src={image} alt="" />
      </div>
      <div className="py-[24px] px-[24px] space-y-[10px] ">
        <div className="text-[20px] font-bold text-[#282938] md:text-[24px]">
          <p>{title}</p>
        </div>
        <div className="text-[16px] text-[#1c1e53]">
          <p>{desc}</p>
        </div>
        <div className="text-[14px] font-semibold text-[#1c1e53] decoration-1 decoration-[#5e3bee] underline  underline-offset-[8px]  pt-[16px]">
          <a href={link}>View In Github </a>
        </div>
      </div>
    </div>
  );
};

let projectInfo = [
  {
    image: ProjectOne,
    title: "Ahuse",
    desc:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
    link: "https://github.com/Avinashshiyani",
  },
  {
    image: ProjectTwo,
    title: "App Dashboard",
    desc:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
    link: "https://github.com/Avinashshiyani",
  },
  {
    image: ProjectThree,
    title: "Easy Rent",
    desc:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
    link: "https://github.com/Avinashshiyani",
  },
];

export default Portfolio;
