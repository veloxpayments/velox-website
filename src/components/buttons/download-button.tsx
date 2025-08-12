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
      ) : (
      <button
        onClick={toggleModal}
        className="md:w-[156px] bg-[#6584DB] text-white text-[16px] font-medium hover:text-black hover:transition hover:bg-transparent border border-[#6584DB] rounded-full px-6 py-4 font-medium"
      >
        Download
      </button>
      )}
      {isModalOpen && <QRModal toggleModal={toggleModal} />}
    </>
  );
};

export default DownloadButton;
