"use client";

import Image from "next/image";
import globe from "../../public/mobile-trim.svg";
import { useState } from "react";
import QRModal from "./QRModal";

const Hero = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };
  return (
    <div className="relative md:min-h-[100vh] w-full p-6">
      <section className="custom-bg rounded-2xl">
        {/* Centered Content Container */}
        <div className="container mx-auto px-4 md:flex md:min-h-[86vh] w-full flex-col-reverse items-center justify-between gap-2 md:pt-36 sm:flex-row ">
          {/* Left Content */}
          <div className="relative z-10  space-y-[12px]  text-left">
            <h1 className="text-2xl pt-5 font-bold md:leading-[67px] text-[#2D2D2D]  md:text-[58px]">
              Easiest way to send <br /> money across <br /> borders.
            </h1>
            <p className="text-[24px] font-normal text-[#484E60] sm:text-xl">
              Fast, effortless, fee-free transfers to Africa.
            </p>
            <button
              onClick={toggleModal}
              className="md:inline-flex bg-[#1A2238] text-white hover:text-black hover:transition hover:bg-[#CAB22B] rounded-full px-6 py-4"
            >
              Download now
            </button>
          </div>

          {/* Right Globe Image */}
          <div className="relative w-full max-w-[400px] sm:max-w-[500px] lg:max-w-[700px]">
            <Image
              src={globe}
              alt="Globe Illustration"
              width={600}
              height={600}
              className="w-full object-contain"
              priority
            />
          </div>
        </div>
      </section>
      {/* Modal */}
      {isModalOpen && <QRModal toggleModal={toggleModal} />}
    </div>
  );
};

export default Hero;
