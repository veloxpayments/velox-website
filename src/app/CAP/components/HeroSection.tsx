import React from "react";
import DownloadButton from "../../../components/buttons/download-button";
import CapApplicationButton from "../../../components/buttons/cap-application-button";
const imgCap = "/CAPImage.svg";

export default function HeroSection() {
  return (
    <div className="bg-white md:h-[665px] w-full relative overflow-clip pt-7 pb-3 px-4 md:px-[60px] md:pt-[140px]">
      <div
        className={`bg-[#6a82d4] h-[783px] md:h-[474px] rounded-2xl relative flex px-3 pt-28 md:px-[60px] md:py-7
                md:bg-[url('/capHero.png')] bg-no-repeat bg-right-bottom bg-contain bg-[url('/capHeroMobile.png')] bg-no-repeat bg-right bg-contain`}
      >
        {/* Text section */}
        <div className="flex flex-col gap-4 xl:gap-6 items-start justify-start md:justify-center relative z-10">
          <div className="hidden md:block bg-[#fcde2f] flex flex-row gap-2 items-center px-[13px] py-2 rounded-[22px]">
            <span className="text-[#050506] text-[16px] font-satoshi font-medium">
              Earn $10 per referral
            </span>
          </div>

          <img
            src={imgCap}
            alt="CAP"
            className="h-[103px] w-[200px] md:h-[183px] md:w-[372px] lg:h-[203px] lg:w-[392px]"
          />

          <div className="flex flex-col gap-2 items-start w-full">
            <span className="text-white text-[16px] md:text-[20px] lg:text-[24px] font-satoshi font-normal max-w-[90%] md:max-w-[60%]">
              Drive growth, earn rewards and be a part of our grassroot movement
              to transform digital finance in Canada
            </span>
          </div>

          <div className="flex flex-row gap-[9px] items-center">
            <CapApplicationButton variant='primary'/>
            <DownloadButton variant="tertiary"/>
          </div>
        </div>
      </div>
    </div>
  );
}
