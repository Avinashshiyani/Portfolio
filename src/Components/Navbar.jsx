import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex justify-between py-[20px]">
      <div className="flex items-center text-white font-bold text-[24px] text-nowrap">
        Avinash Shiyani
      </div>
      <div className="flex items-center space-x-[48px] text-white text-[18px]">
        <Link to="/">
          <span>Home</span>
        </Link>
        <Link to="/about">
          <span>About Me</span>
        </Link>
        <Link to="/projects">
          <span>Projects</span>
        </Link>
        <Link to="/contact">
          <span>Contact</span>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
