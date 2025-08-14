import React from "react";
import CapApplicationButton from "../../../components/buttons/cap-application-button";
const imgMedalLine = "/medal.svg";
const imgStarLine = "/star.svg";
const imgLinkedinLine = "/linkedIn.svg";
const imgCalendarLine = "/dateCalendar.svg";
const imgBriefcaseLine = "/suitcase.svg";

const benefits = [
  {
    img: imgMedalLine,
    title: "Cash Rewards",
    desc: "Earn $10 instantly for every qualifying referral who completes the required steps."
  },
  {
    img: imgStarLine,
    title: "Performance Bonuses",
    desc: "Special recognition and bonuses for the first ambassador to hit 100 downloads and top monthly performers."
  },
  {
    img: imgStarLine,
    title: "Branded Merchandise",
    desc: "Exclusive Velox merchandise provided only to our ambassador community."
  },
  {
    img: imgLinkedinLine,
    title: "LinkedIn Recommendations",
    desc: "Receive professional recommendations highlighting your achievements as a community ambassador."
  },
  {
    img: imgCalendarLine,
    title: "Exclusive Events",
    desc: "Access to special events and growth opportunities within the Velox ecosystem."
  },
  {
    img: imgBriefcaseLine,
    title: "Career Opportunities",
    desc: "Top-performing ambassadors may be considered for full-time roles at Velox."
  }
];

export default function AmbassadorBenefits() {
  return (
    <div className="bg-white w-full relative overflow-clip flex flex-col items-center justify-center px-4">
      <div className="flex flex-col gap-8 items-center w-full mt-16">
        <div className="flex flex-col items-center text-center">
          <span className="text-[#050506] text-[18px] md:text-[40px] font-satoshi font-medium">Ambassador Benefits</span>
          <span className="text-[#2e2e2e] text-[16px] md:text-[24px] font-satoshi font-normal">Beyond the immediate cash rewards, our ambassadors enjoy a wide range of exclusive perks and opportunities.</span>
        </div>
        <div className="flex flex-wrap gap-6 items-center justify-center w-full">
          {benefits.map((benefit, idx) => (
            <div key={idx} className="bg-[#f8f9fb] h-[273px] w-[392px] rounded-lg shadow-lg flex flex-col items-start justify-center gap-4 px-9">
              <div className="bg-[#6584db] rounded-full size-10 md:size-16 flex items-center justify-center flex-none">
                <img src={benefit.img} alt="benefit" className="size-6 md:size-8" />
              </div>
              <span className="text-[#050506] text-[18px] md:text-[24px] font-satoshi font-medium">{benefit.title}</span>
              <span className="text-neutral-500 text-[16px] md:text-[18px] font-satoshi font-normal">{benefit.desc}</span>
            </div>
          ))}
        </div>
        <div className="bg-[#1a2238] w-full md:w-[80vw] rounded-2xl flex flex-col items-center justify-center gap-4 mt-8 p-8 mb-[64px]">
          <span className="text-white text-[18px] md:text-[28px] lg:text-[40px] font-satoshi font-bold text-center">Unlock your Potential as a Velox Ambassador</span>
          <span className="text-white text-[16px] md:text-[20px] lg:text-[24px] font-satoshi font-normal text-center">Beyond the immediate cash rewards, our ambassadors enjoy a wide range of exclusive perks and opportunities.</span>
          <CapApplicationButton variant='secondary'/>
        </div>
      </div>
    </div>
  );
}
