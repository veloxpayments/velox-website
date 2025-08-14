"use client";
import React, { useState } from "react";
import QRModal from "../modals/QRModal";

const DownloadButton = ({ variant }: { variant: string }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <>
      {variant === "primary" ? (
        <button
          onClick={toggleModal}
          className="inline-flex bg-[#1A2238] font-medium text-white hover:text-black hover:transition hover:bg-[#CAB22B] rounded-full px-[24px] py-4"
        >
          Download now
        </button>
      ) : variant === "secondary" ? (
        <button
          onClick={toggleModal}
          className="md:w-[156px] bg-[#6584DB] text-white text-[16px] font-medium hover:text-black hover:transition hover:bg-transparent border border-[#6584DB] rounded-full px-6 py-4 font-medium"
        >
          Download
        </button>
      ) : (
        variant === "tertiary" && (
          <button
            onClick={toggleModal}
            className="flex flex-row gap-2 px-5 py-3 md:px-6 md:py-4 items-center rounded-[58px] border border-[#fff] hover:bg-[#FCDE2F] transition-colors"
          >
            <span className="text-white text-[16px] font-satoshi font-normal">
              Download now
            </span>
          </button>
        )
      )}
      {isModalOpen && <QRModal toggleModal={toggleModal} />}
    </>
  );
};

export default DownloadButton;
