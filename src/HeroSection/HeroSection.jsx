import React from "react";
import HeroImage from "../assets/download_2.webp";

const HeroSection = () => {
  return (
    <div className="py-[56px] m px-[20px] bg-[#F5FCFF] sm:px-[40px] md:px-[64px] md:flex md:gap-x-[34px] md:py-[80px] lg:py-[100px]">
      {/* hero section first part starts */}
      <div className="space-y-2 md:w-[50%]  lg:flex lg:flex-col lg:justify-center">
        <div className="text-[16px] text-[#1c1e53] font-medium w-full">
          Hey, I am Avi
        </div>
        <div className="grid text-[40px] font-extrabold w-full text-[#282938] tracking-tight leading-tight sm:text-[52px] lg:text-[56px] lg:leading-[70px]">
          <h1>
            I create
            <span className="flex  text-[#5e3bee]"> product design</span>
            and brand experience
          </h1>
        </div>
        <div className="text-[16px] text-[#1c1e53] sm:text-[18px]">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            varius enim in eros elementum tristique.
          </p>
        </div>
        <div>
          <button
            className="flex justify-center items-center h-[50px] bg-[#5e3bee] mt-6 py-[12px] px-[20px] text-white rounded-[4px] text-[16px] cursor-pointer
  hover:bg-white hover:text-[#5e3bee] hover:border hover:border-[#5e3bee] 
   transition-all duration-300"
          >
            Get In Touch
          </button>
        </div>
      </div>
      {/* hero section first part ends */}

      {/* hero section photo part starts */}
      <div className="mt-10 md:w-[50%] md:mt-0">
        <img src={HeroImage} alt="" />
      </div>
      {/* hero section photo part ends */}
    </div>
  );
};

export default HeroSection;
