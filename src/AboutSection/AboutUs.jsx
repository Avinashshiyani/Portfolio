import React from "react";
import HeroImage from "../assets/about.png";

const AboutUs = () => {
  return (
    <div className="py-[56px]  px-[20px] bg-[#F5FCFF] sm:px-[40px] md:px-[64px] md:flex  md:gap-x-[34px] lg:gap-x-[150px] sm:py-[80px] md:py-[100px]">
      {/* hero section photo part starts */}
      <div className="mt-10 md:w-[50%] order-1   md:mt-0">
        <img src={HeroImage} alt="" />
      </div>
      {/* hero section photo part ends */}

      {/* hero section first part starts */}
      <div className="space-y-2 md:w-[50%] order-2  lg:flex lg:flex-col lg:justify-center ">
        <div className="space-y-3">
          <p className="text-[16px] font-semibold text-[#1c1e53] tracking-tight">
            About
          </p>
          <p className="text-[40px] font-bold text-[#282938] tracking-tight sm:text-[52px] md:text-[56px]">
            About Me
          </p>
        </div>
        <div className="text-[16px] text-[#1c1e53] sm:text-[18px]">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
            varius faucibus massa sollicitudin amet augue. Nibh metus a semper
            purus mauris duis. Lorem eu neque, tristique quis duis. Nibh
            scelerisque ac adipiscing velit non nulla in amet pellentesque.
            <br />
            <br />
            Sit turpis pretium eget maecenas. Vestibulum dolor mattis
            consectetur eget commodo vitae. Amet pellentesque sit pulvinar lorem
            mi a, euismod risus r.
          </p>
        </div>
      </div>
      {/* hero section first part ends */}
    </div>
  );
};

export default AboutUs;
