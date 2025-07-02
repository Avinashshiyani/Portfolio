import React from "react";
import FiveStarImage from "../assets/fiveStar.png";
import CustomerOne from "../assets/customerOne.webp";
import CustomerTwo from "../assets/customerTwo.webp";
import CustomerThree from "../assets/customerThree.webp";

const CustomerTestimonial = () => {
  return (
    <div className="px-[20px] py-[56px] sm:px-[40px] md:px-[64px] md:py-[80px] lg:py-[100px] bg-[#F5FCFF]">
      <div className="flex flex-col ">
        <p className="text-[16px] font-semibold text-[#1c1e53] tracking-tight">
          Client Feedback
        </p>
        <p className="text-[36px] font-semibold text-[#1c1e53] tracking-tight">
          Customer Testimonials
        </p>
        <div className="flex   flex-col gap-[34px] mt-[40px] md:grid md:grid-cols-2 lg:grid-cols-3">
          {customerFeedbackInfo.map((e, index) => (
            <CustomerCard
              image={e.image}
              info={e.info}
              profileImg={e.profileImg}
              name={e.name}
              company={e.company}
              key={index}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

let CustomerCard = ({ image, info, profileImg, name, company }) => {
  return (
    <div className="grid border-1 border-[#006B6A] text-[#1c1e53] p-[32px] rounded-sm space-y-[32px] hover:border-[#5e3bee]">
      {/* image */}
      <div className="flex ">
        <img src={image} alt="" className="w-[116px] h-[20px]" />
      </div>
      <div className="text-[16px] md:text-[18px]">
        <p>"{info}"</p>
      </div>
      <div className="flex">
        <div>
          <img src={profileImg} alt="" className="h-[56px] w-[56px]" />
        </div>
        <div className="grid text-[16px] -space-y-[10px] justify-center items-center pl-[16px]">
          <p className="font-semibold">{name}</p>
          <p>{company}</p>
        </div>
      </div>
    </div>
  );
};

let customerFeedbackInfo = [
  {
    image: FiveStarImage,
    info:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare",
    profileImg: CustomerOne,
    name: "Dianne Russell",
    company: "Starbucks",
  },
  {
    image: FiveStarImage,
    info:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare",
    profileImg: CustomerTwo,
    name: "Dianne Russell",
    company: "Louis Vuitton",
  },
  {
    image: FiveStarImage,
    info:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare",
    profileImg: CustomerThree,
    name: "Dianne Russell",
    company: "McDonald's",
  },
];

export default CustomerTestimonial;
