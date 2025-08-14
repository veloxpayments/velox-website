"use client";
import React, { useState } from "react";
import ContactModal from "../modals/contactModal";
import CapApplicationModal from "../modals/capApplicationModal";

const CapApplicationButton = ({ variant }: { variant: string }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <>
    {variant === "primary" ? (
      <button onClick={toggleModal} className="bg-white flex justify-center px-5 py-3 md:px-6 md:py-4 items-center rounded-[58px] hover:bg-[#FCDE2F] transition-colors">
              <span className="text-[#050506] text-[16px] font-satoshi font-normal ">
                Apply now
              </span>
            </button>
    ) : (
        <button onClick={toggleModal} className="flex flex-row gap-2 h-[54px] justify-center items-center px-6 py-4 rounded-[58px] w-[226px] border border-[#8d8d8d] hover:bg-[#FCDE2F] transition-colors">
            <span className="text-white text-[16px] font-satoshi font-normal">Apply now</span>
          </button>
    )}
    {isModalOpen && <CapApplicationModal toggleModal={toggleModal} />}
    </>
  );
};

export default CapApplicationButton;