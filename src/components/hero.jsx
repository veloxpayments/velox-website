"use client";

import Image from "next/image";
import globe from "../../public/mobile-trim.svg";
import { useState } from "react";
import qr from "../../public/qr-code.svg";
const Hero = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };
  return (
    <div className="relative md:min-h-[100vh] w-full p-6">
      <section className="custom-bg rounded-2xl">
        {/* Centered Content Container */}
        <div className="container mx-auto px-4 flex md:min-h-[86vh] w-full flex-col-reverse items-center justify-between gap-2 md:pt-36 sm:flex-row ">
          {/* Left Content */}
          <div className="relative z-10  space-y-6 text-center sm:text-left">
            <h1 className="text-2xl font-bold leading-[67px] text-[#2D2D2D]  md:text-[64px]">
              Easiest way to send <br /> money across <br /> borders.
            </h1>
            <p className="text-[24px] font-normal text-[#484E60] sm:text-xl">
              Fast, effortless, fee-free transfers to Africa.
            </p>
            <button
              onClick={toggleModal}
              className="hidden md:inline-flex bg-[#1A2238] text-white hover:text-black hover:transition hover:bg-[#CAB22B] rounded-full px-4 py-3"
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
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          {/* Background Overlay */}
          <div
            className="absolute inset-0 bg-black opacity-50"
            onClick={toggleModal}
          ></div>

          {/* Modal Content */}
          <div className="relative custom-modal rounded-2xl md:py-[108px] md:px-[109px] p-5  max-w-3xl z-10 shadow-lg">
            {/* Cross Button */}
            <button
              onClick={toggleModal}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            {/* Modal Body */}
            <div className="relative flex flex-col items-center space-y-4">
              {/* Placeholder Background */}

              {/* Modal Content */}
              <div className="relative z-10 text-center space-y-4 bg-white p-5 rounded-md">
                <p className="text-[40px] font-bold">Scan to download</p>
                <p className="text-base font-medium text-gray-600 leading-relaxed">
                  Scan the QR code with your phone camera and follow the link to
                  download
                </p>
                {/* Placeholder QR Code */}

                <Image
                  className="mx-auto flex"
                  src={qr}
                  alt=""
                  width={311}
                  height={311}
                />
                <p className="text-sm font-medium text-gray-600">
                  Download Velox and sign up or log in to your account.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Hero;
