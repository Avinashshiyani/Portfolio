import React, { useState, useContext, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { twMerge } from "tailwind-merge";
import { CiLight } from "react-icons/ci";

const Navbar = () => {
  return (
    <div
      className={twMerge(
        "flex justify-between py-5 fixed z-10 w-full px-12 text-white bg-primary"
      )}
    >
      <div className="flex items-center font-bold text-2xl whitespace-nowrap theme">
        Avinash Shiyani
      </div>
      <div className="flex items-center space-x-12 text-lg theme">
        <Navigation link="/">Home</Navigation>
        <Navigation link="/about">About Me</Navigation>
        <Navigation link="/projects">Projects</Navigation>
        <Navigation link="/contact">Contact</Navigation>
        <span className="cursor-pointer">
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
          "h-0.5 w-full bg-secondary mt-0.5",
          isActive ? "block" : "hidden"
        )}
      ></span>
    </NavLink>
  );
};
