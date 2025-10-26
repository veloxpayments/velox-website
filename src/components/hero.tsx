"use client";

import Image from "next/image";
import dynamic from "next/dynamic";
import globe from "../../public/mobile-trim.svg";
import { useState } from "react";
import QRModal from "./modals/QRModal";
import DownloadButton from "./buttons/download-button";

const Hero = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };
  return (
    <div className="relative md:min-h-[100vh] w-full px-4 pt-7 md:p-6 bg-[#f7f8fa]">
  <section className="md:bg-[url('/homeHero.png'),linear-gradient(110deg,_#F0F3FB_0.23%,_#D1DAF4_99.77%)] md:bg-[length:auto_388px,auto] lg:bg-[length:auto_500px,auto] bg-no-repeat bg-right bg-contain rounded-2xl">
        {/* Centered Content Container */}
        <div className="container pt-[145px] mx-auto px-4 md:flex md:min-h-[86vh] w-full flex-col-reverse items-center justify-between gap-2 md:pt-36 sm:flex-row ">
          {/* Left Content */}
          <div className="relative z-2  space-y-[12px]  text-left">
            <h1 className="text-[32px] pt-5 font-bold leading-[33px] md:leading-[46px] lg:leading-[67px] text-[#2D2D2D] md:text-[42px] lg:text-[58px]">
              Easiest way to send <br /> money across <br /> borders.
            </h1>
            <p className="lg:text-[24px] md:text-[20px] font-normal text-[#484E60] sm:text-[16px]">
              Fast, effortless, fee-free transfers to Africa.
            </p>
            <DownloadButton variant="primary"/>
          </div>

          {/* Right Globe Image */}
          {/* <div className="relative w-full max-w-[400px] sm:max-w-[500px] lg:max-w-[700px] self-end">
            <Image
              src={globe}
              alt="Globe Illustration"
              width={600}
              height={600}
              className="w-full object-contain"
              priority
            />
          </div> */}
        </div>
      </section>
      {/* Modal */}
      {isModalOpen && <QRModal toggleModal={toggleModal} />}
    </div>
  );
};

export default Hero;
