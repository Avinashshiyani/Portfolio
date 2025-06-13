import React from "react";
import Logo from "../assets/download.webp";

const Navbar = () => {
  return (
    <div className="h-[64px] bg-white flex justify-between items-center px-[20px] border-b sm:h-[90px] lg:px-[64px]">
      {/* logo */}
      <div className="flex items-center justify-center h-[48px] cursor-pointer">
        <img src={Logo} alt="" className="h-[24px] sm:h-[30px]" />
      </div>
      {/* logo */}

      {/* navbar Buttons */}
      <div className="hidden  justify-center items-center lg:flex">
        {navbarButtons.map((e, index) => (
          <div
            className="text-[#1c1e53] text-[16px] py-[8px] px-[16px] cursor-pointer hover:text-[#5e3bee]"
            key={index}
          >
            <p>{e.name}</p>
          </div>
        ))}
      </div>
      {/* navbar Buttons */}

      {/* contact and Hamburger */}
      <div className="flex items-center justify-center space-x-[16px] ">
        <div>
          <button
            className="flex justify-center items-center h-[30px] bg-[#5e3bee] py-[4px] px-[16px] text-white rounded-[4px] text-[14px] cursor-pointer
  hover:bg-white hover:text-[#5e3bee] hover:border hover:border-[#5e3bee] 
  sm:h-[40px] sm:py-[8px] sm:px-[20px] transition-all duration-300"
          >
            Contact
          </button>
        </div>
        <div className="md:invisible lg:hidden">
          <div className="grid items-center justify-center space-y-[6px]">
            <div className="h-[2px] w-[24px] bg-black"></div>
            <div className="h-[2px] w-[24px] bg-black"></div>
            <div className="h-[2px] w-[24px] bg-black"></div>
          </div>
        </div>
      </div>
      {/* contact and Hamburger */}
    </div>
  );
};
export default Navbar;

let navbarButtons = [
  {
    name: "Services",
  },
  {
    name: "About Me",
  },
  {
    name: "Portfolio",
  },
  {
    name: "Testimonials",
  },
];
