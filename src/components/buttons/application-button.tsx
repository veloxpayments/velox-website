"use client";
import React, { useState } from "react";
import ApplicationFormModal from "../modals/applicationFormModal";



interface ApplicationButtonProps {
  title: string;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  isModalOpen?: boolean;
  closeModal?: () => void;
}


const ApplicationButton: React.FC<ApplicationButtonProps> = ({ title, onClick, isModalOpen, closeModal }) => {
  // const [modalOpen, setModalOpen] = useState(false);
  // const toggleModal = () => {
  //   setModalOpen(!modalOpen);
  //   console.log("Modal toggled");
  // };

  return (
    <>
      <button
        onClick={onClick}
        className="inline-flex bg-[#1A2238] font-medium text-white hover:text-black hover:transition hover:bg-[#CAB22B] rounded-full px-6 py-4"
      >
        Apply Now
      </button>
      {isModalOpen && (
        <ApplicationFormModal
          title={title}
          isModalOpen={isModalOpen}
          closeModal={closeModal}
        />
      )}
    </>
  );
};

export default ApplicationButton;
