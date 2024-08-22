import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import { twMerge } from "tailwind-merge";
import { CiLight } from "react-icons/ci";

const Navbar = () => {
  return (
    <div className="flex justify-between py-[20px] fixed z-10 w-full px-[50px] bg-primary">
      <div className="flex items-center text-white font-bold text-[24px] text-nowrap">
        Avinash Shiyani
      </div>
      <div className="flex items-center space-x-[48px] text-white text-[18px]">
        <Navigation link="/">Home</Navigation>
        <Navigation link="/about">About Me</Navigation>
        <Navigation link="/projects">Projects</Navigation>
        <Navigation link="/contact">Contact</Navigation>
        <span>
          <CiLight />
        </span>
      </div>
    </div>
  );
};

export default Navbar;

const Navigation = ({ link, children }) => {
  const location = useLocation();
  const isActive = location.pathname === link;

  return (
    <NavLink to={link} className="grid items-center justify-center">
      <span>{children}</span>

      <span
        className={twMerge(
          "h-[2px] w-full bg-secondary mt-[0.5px] ",
          isActive ? "block" : "hidden"
        )}
      ></span>
    </NavLink>
  );
};
