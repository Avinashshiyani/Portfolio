import React from "react";

const ContactSection = () => {
  return (
    <div className="px-[20px] grid  py-[56px] sm:px-[40px] md:px-[64px] lg:px-[200px] md:py-[80px] lg:py-[100px]">
      {/* intro */}
      <div className="w-full ">
        {/* 👈 added w-full */}
        <div className="flex flex-col text-center">
          <p className="text-[16px] font-semibold text-[#1c1e53] tracking-tight">
            Get In Touch
          </p>
          <p className="text-[36px] font-semibold text-[#1c1e53] tracking-tight">
            Contact Me
          </p>
        </div>
        {/* form */}
        <div className="flex flex-col text-[#1c1e53] text-[16px] space-y-[20px] mt-[20px]">
          <div className="grid space-y-[20px] md:grid-cols-2 md:space-y-0 md:gap-[24px]">
            <div className="grid space-y-[8px]">
              <label htmlFor="firstname">First name</label>
              <input
                type="text"
                name="firstname"
                className="w-full h-[44px] border border-[#5e3bee] rounded-sm py-[8px] px-[12px] focus:outline-none focus:border-black"
              />
            </div>
            <div className="grid space-y-[8px]">
              <label htmlFor="lastname">Last name</label>
              <input
                type="text"
                name="lastname"
                className="w-full h-[44px] border border-[#5e3bee] rounded-sm py-[8px] px-[12px] focus:outline-none focus:border-black"
              />
            </div>
            <div className="grid space-y-[8px]">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="email"
                className="w-full h-[44px] border border-[#5e3bee] rounded-sm py-[8px] px-[12px] focus:outline-none focus:border-black"
              />
            </div>
            <div className="grid space-y-[8px]">
              <label htmlFor="phone">Phone number</label>
              <input
                type="text"
                name="phone"
                className="w-full h-[44px] border border-[#5e3bee] rounded-sm py-[8px] px-[12px] focus:outline-none focus:border-black"
              />
            </div>
          </div>

          <div className="grid space-y-[8px]">
            <label htmlFor="message">Message</label>
            <textarea
              name="message"
              className="w-full h-[180px] border border-[#5e3bee] rounded-sm py-[8px] px-[12px] focus:outline-none focus:border-black"
              placeholder="Type your message..."
            ></textarea>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
