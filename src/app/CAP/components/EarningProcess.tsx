import React from "react";
import Image from "next/image";
const imgCurrencyDollar2Line1 = "/dollar.svg";
const imgDownload2Line = "/download.svg";
const imgCheckLine = "/tick.svg";
const imgCurrencyDollar2Line2 = "/dollar2.svg";
const imgLine367 = "/whiteLine2.svg";
const imgWarningLine = "/attention.svg";
const imgCheckLine1 = "/tick2.svg";

export default function EarningProcess() {
  return (
    <div className="bg-[#f8f9fb] lg:h-[642px] w-full relative overflow-clip flex items-center justify-center pt-20 pb-10 px-4">
      <div className="bg-white lg:h-[570px] rounded-2xl shadow-lg flex flex-col lg:flex-row gap-[53px] items-center justify-center p-8">
        {/* Left: Earning Process */}
        <div className="flex flex-col gap-4 items-start">
          <div className="flex flex-row gap-4 items-center">
            <div className="bg-[#f7df56] rounded-full size-[51px] flex items-center justify-center">
              <Image src={imgCurrencyDollar2Line1} alt="dollar" width={25} height={25} className="size-[25px]" loading="lazy" />
            </div>
            <span className="text-[#050506] text-[20px] md:text-[30px] font-satoshi font-bold">Earning Process</span>
          </div>
          <div className="flex flex-col gap-5 items-start">
            <div className="flex flex-row gap-4 items-start w-full">
              <div className="bg-[#d6e3fb] rounded-full w-[39px] h-[39px] flex items-center justify-center flex-none">
                <Image src={imgDownload2Line} alt="download" width={19} height={19} className="size-[19px] contain" loading="lazy" />
              </div>
              <div className="flex flex-col gap-2 items-start">
                <span className="text-[#050506] text-[18px] md:text-[20px] font-satoshi font-medium">Download the app</span>
                <span className="text-neutral-500 text-[16px] md:text-[18px] font-satoshi font-normal">Your referral is tracked from the moment they use your link.</span>
              </div>
            </div>
            <div className="flex flex-row gap-4 items-start w-full">
              <div className="bg-[#d6e3fb] rounded-full w-[39px] h-[39px] flex items-center justify-center flex-none">
                <Image src={imgCheckLine} alt="check" width={19} height={19} className="size-[19px]" loading="lazy" />
              </div>
              <div className="flex flex-col gap-2 items-start">
                <span className="text-[#050506] text-[18px] md:text-[20px] font-satoshi font-medium">Completes KYC</span>
                <span className="text-neutral-500 text-[16px] md:text-[18px] font-satoshi font-normal">Verifies their identity through our Know Your Customer process.</span>
              </div>
            </div>
            <div className="flex flex-row gap-4 items-start w-full">
              <div className="bg-[#d6e3fb] rounded-full w-[39px] h-[39px] flex items-center justify-center flex-none">
                <Image src={imgCurrencyDollar2Line2} alt="dollar" width={19} height={19} className="size-[19px]" loading="lazy" />
              </div>
              <div className="flex flex-col gap-2 items-start">
                <span className="text-[#050506] text-[18px] md:text-[20px] font-satoshi font-medium">Makes a transaction of at least $50</span>
                <span className="text-neutral-500 text-[16px] md:text-[18px] font-satoshi font-normal">Completes their first qualifying transaction on the platform.</span>
              </div>
            </div>
          </div>
          <div className="bg-[#e7ecfa] px-7 py-4 rounded-md mt-4">
            <span className="text-[#050506] text-[14px] md:text-[20px] font-satoshi font-medium">Your Velox account is credited $10 instantly!</span>
          </div>
        </div>
        {/* Divider */}
        <div className="flex h-full items-center justify-center">
          <Image src={imgLine367} alt="divider" width={1} height={40} className="h-[1px] w-full lg:h-full lg:w-[1px]" loading="lazy" />
        </div>
        {/* Right: Requirements to Qualify */}
        <div className="flex flex-col gap-6 items-start">
          <div className="flex flex-row gap-4 items-center">
            <div className="bg-[#f7df56] rounded-full size-[51px] flex items-center justify-center">
              <Image src={imgWarningLine} alt="warning" width={25} height={25} className="size-[25px]" loading="lazy" />
            </div>
            <span className="text-[#050506] text-[20px] md:text-[30px] font-satoshi font-bold">Requirements to Qualify</span>
          </div>
          <div className="flex flex-col gap-5 items-start w-full">
            {[
              "Have an existing Velox account",
              "Follow Velox on social media channels",
              "Be located in Canada",
              "Be passionate about digital finance and community building"
            ].map((req, idx) => (
              <div key={idx} className="flex flex-row gap-4 items-center w-full">
                <div className="bg-[#babdc3] rounded-full w-[39px] h-[39px] flex items-center justify-center flex-none">
                  <Image src={imgCheckLine1} alt="check" width={19} height={19} className="size-[19px]" loading="lazy" />
                </div>
                <span className="text-[#000] text-[16px] md:text-[18px] font-satoshi font-normal">{req}</span>
              </div>
            ))}
          </div>
          <div className="bg-[#fdf9dd] p-4 rounded-lg lg:w-[422px] mt-4 border-l-4 border-[#f7df57] flex flex-col gap-2">
            <span className="text-[#000] text-[18px] md:text-[22px] font-satoshi font-medium">After Approval:</span>
            <span className="text-neutral-500 text-[16px] md:text-[18px] max-w-[60vw] font-satoshi font-normal">You&apos;ll receive a welcome email with your unique referral code, program rules, and a link to access the ambassador toolkit.</span>
          </div>
        </div>
      </div>
    </div>
  );
}
