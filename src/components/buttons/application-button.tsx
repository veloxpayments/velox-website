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
        className="bg-[#050506] text-white px-6 py-4 rounded-full font-medium text-base hover:bg-[#1a2238] transition-colors"
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
