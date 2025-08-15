import React from "react";
import Image from "next/image";
const imgUserFollowLine = "/personTick.svg";
const imgCheckFill = "/tick.svg";
const imgShareForwardLine = "/bentArrowRight.svg";
const imgCurrencyDollar2Line = "/dollar2.svg";

const steps = [
  {
    img: imgUserFollowLine,
    step: "Step 1",
    title: "Apply",
    desc: "Fill out our simple application form with your details and social media handles."
  },
  {
    img: imgCheckFill,
    step: "Step 2",
    title: "Get Approved",
    desc: "We’ll review and send your referral code with a warm welcome."
  },
  {
    img: imgShareForwardLine,
    step: "Step 3",
    title: "Share and Promote",
    desc: "Promote Velox with your referral link on social media and beyond."
  },
  {
    img: imgCurrencyDollar2Line,
    step: "Step 4",
    title: "Get Rewarded",
    desc: "Get $10 when your referral signs up, verifies, and sends $50+."
  }
];

export default function HowItWorks() {
  return (
    <div className="bg-[#f8f9fb] w-full relative overflow-clip flex flex-col items-center">
      <div className="mt-[49px] flex flex-col gap-10 items-center px-6">
        <div className="flex flex-col items-center text-center x">
          <span className="text-[#050506] text-[18px] md:text-[40px] font-satoshi font-medium">How it Works</span>
          <span className="text-[#2e2e2e] text-[16px] max-w-[80%] lg:max-w-full md:text-[24px] font-satoshi font-normal">Join our ambassador program in a few easy steps and start earning rewards for every successful referral.</span>
        </div>
        <div className="flex flex-col md:flex-row gap-[26px] items-center flex-wrap justify-center">
          {steps.map((step, idx) => (
            <div key={idx} className="bg-white h-[333px] w-[301px] px-4 rounded-lg shadow-md flex flex-col items-start justify-center gap-4">
              <div className="bg-[#d6e3fb] rounded-full size-16 flex items-center justify-center">
                <Image src={step.img} alt="step" width={32} height={32} className="size-8" loading="lazy" />
              </div>
              <div className="bg-[#fcde2f] px-2.5 py-1 rounded-[34px]">
                <span className="text-[#050506] text-[16px] font-satoshi font-normal">{step.step}</span>
              </div>
              <span className="text-[#050506] text-[18px] md:text-[24px] font-satoshi font-medium">{step.title}</span>
              <span className="text-neutral-500 text-[16px] md:text-[18px] font-satoshi font-normal text-left">{step.desc}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
