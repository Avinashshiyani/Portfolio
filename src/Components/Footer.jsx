import React from "react";
import HomeImg from "../assets/home.png";
import AboutMeImg from "../assets/user.png";
import PhoneImg from "../assets/phone.png";
import FacebookImg from "../assets/facebook.png";
import InstagramImg from "../assets/instagram.png";
import TwitterImg from "../assets/twitter.png";
import YoutubeImg from "../assets/youtube.png";
import { Link, NavLink } from "react-router-dom";
import { twMerge } from "tailwind-merge";
import { useLocation } from "react-router-dom";

const Footer = () => {
  return (
    <div className="grid justify-center items-center pt-[100px] pb-[130px]">
      {/* Navigation butons */}
      <div className="flex items-center space-x-[48px]">
        <NavButton name="Home" img={HomeImg} link="/" />
        <NavButton name="About me" img={AboutMeImg} link="/about" />
        <NavButton name="Contact" img={PhoneImg} link="/contact" />
      </div>
      {/* social Media Icons */}
      <div className="flex items-center space-x-[24px] pt-[38px] justify-center">
        <MediaIcons img={FacebookImg} link={facebookLink} />
        <MediaIcons img={InstagramImg} link={instagramLink} />
        <MediaIcons img={TwitterImg} />
        <MediaIcons img={YoutubeImg} />
      </div>
    </div>
  );
};

export default Footer;

const NavButton = ({ img = HomeImg, name = "Home", link = "/" }) => {
  const location = useLocation();
  const isActive = location.pathname == link;
  console.log(isActive);

  return (
    <NavLink to={`${link}`}>
      <div className="grid items-center justify-center">
        <div className="flex space-x-[10px]">
          <span>
            <img src={img} alt="" />
          </span>
          <span className="text-[18px] text-white">{name}</span>
        </div>
        <div className="flex justify-center items-center">
          <span
            className={twMerge(
              "h-[2px] w-full bg-secondary mt-[2px] ",
              isActive ? "block" : "hidden"
            )}
          ></span>
        </div>
      </div>
    </NavLink>
  );
};

// socialmedia links
let facebookLink = "https://www.facebook.com/avinash.shiyani.56/";
let instagramLink = "https://www.instagram.com/shiyaniavinash/";

// media icon component
const MediaIcons = ({ img = FacebookImg, link = facebookLink }) => {
  return (
    <Link to={link}>
      <div className="flex rounded-full p-[12px] bg-[#393E46]">
        <img src={img} alt="" />
      </div>
    </Link>
  );
};
