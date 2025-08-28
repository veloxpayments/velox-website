"use client";
import React, { useState } from "react";
import ContactModal from "../modals/contactModal";

const ContactButton = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <>
      <button
        onClick={toggleModal}
        className="bg-[#6584DB] text-white text-[16px] font-medium hover:text-[#6584DB] hover:transition hover:bg-transparent border border-[#6584DB] rounded-full px-6 py-4 font-medium"
      >
        Talk to us
      </button>
      {isModalOpen && <ContactModal toggleModal={toggleModal} />}
    </>
  );
};

export default ContactButton;
