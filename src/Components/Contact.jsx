import React from "react";
import keyboard from "../assets/keyboard.png";
import MainContact from "../assets/MainContact.png";
import { Button } from "./Body";
import Mail from "../assets/mail.png";

const Contact = () => {
  return (
    <div className="grid  items-center">
      {/* image */}
      <div className="flex justify-end items-center pr-[400px] ">
        <img src={keyboard} alt="" />
      </div>

      <div className="flex space-x-[48px]">
        {/* left  */}
        <div className="grid w-full">
          <div className="grid leading-[80px] font-bold text-[54px]">
            <span className="text-white">Got a project in </span>
            <span className="text-secondary">mind?</span>
          </div>
          <div className="flex justify-center ">
            <img src={MainContact} alt="" />
          </div>
        </div>

        {/* right */}
        <div className="grid items-center w-full">
          <div className="grid  items-center gap-[24px]">
            {/* input sub divs */}
            <div className="flex space-x-[24px]">
              <div className="grid items-center space-y-[10px] ">
                <Label name="Your Name" />
                <Input placeholder="Name" />
              </div>
              <div className="grid items-center space-y-[10px]">
                <Label name="Your Email" />
                <Input placeholder="Email" />
              </div>
            </div>
            <div className="grid items-center space-y-[10px]">
              <Label name="Your Message" />
              <textarea
                id=""
                cols="30"
                rows="10"
                className="rounded-[16px] resize-none bg-[#393E46] font-bold text-[18px] py-[10px] pl-[26px] text-white"
              ></textarea>
            </div>
            <div className="flex">
              <Button>Send Message</Button>
            </div>
            <div className="flex items-center justify-end">
              <img src={Mail} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

const Label = ({ name = "Name" }) => {
  return <span className=" font-bold text-[18px] text-[#EEEEEE]">{name}</span>;
};

const Input = ({ type = "text", placeholder = "Enter" }) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      className="py-[16px] pl-[26px] rounded-[16px] bg-[#393E46] font-bold text-[18px] text-[#EEEEEE]"
    />
  );
};
