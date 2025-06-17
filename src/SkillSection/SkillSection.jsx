import React from "react";
import SkillImageOne from "../assets/skillsOne.webp";
import SkillImageTwo from "../assets/skillsTwo.webp";
import SkillImageThree from "../assets/skillsThree.webp";
import SkillImageFour from "../assets/skillsFour.webp";

const SkillSection = () => {
  return (
    <div className="px-[20px] py-[64px] sm:px-[40px] md:px-[64px] md:py-[96px] lg:py-[112px] ">
      <div className="flex flex-col ">
        <p className="text-[16px] font-semibold text-[#1c1e53] tracking-tight">
          My skills
        </p>
        <p className="text-[36px] font-semibold text-[#1c1e53] tracking-tight">
          My Expertise
        </p>
        <div className="flex flex-col gap-[20px] mt-[40px] md:grid md:grid-cols-2 lg:grid-cols-4">
          {skillCardInfo.map((e, index) => (
            <SkillCard
              image={e.image}
              title={e.title}
              info={e.info}
              key={index}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SkillSection;

let SkillCard = ({ image, title, info }) => {
  return (
    <>
      <div className="p-[24px] bg-[#F5FCFF] space-y-3 rounded-sm">
        <div className="p-[12px] bg-white w-fit">
          <img src={image} alt="" className="w-[40px] h-[40px] " />
        </div>
        <div>
          <p className="text-[20px] text-[#282938] font-bold md:text-[24px]">
            {title}
          </p>
        </div>
        <div>
          <p className="text-[16px]  text-[#1c1e53] md:text-[18px]">{info}</p>
        </div>
      </div>
    </>
  );
};

let skillCardInfo = [
  {
    image: SkillImageOne,
    title: "Strategy & Direction",
    info:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
  },
  {
    image: SkillImageTwo,
    title: "Branding & Logo",
    info:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
  },
  {
    image: SkillImageThree,
    title: "UI & UX Design",
    info:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
  },
  {
    image: SkillImageFour,
    title: "Webflow Dev",
    info:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
  },
];
