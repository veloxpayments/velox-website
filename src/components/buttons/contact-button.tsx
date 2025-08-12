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
      <button onClick={toggleModal} className="bg-[#6584db] text-white rounded-full px-8 py-3 font-medium">Load More Articles</button>
      {isModalOpen && <ContactModal toggleModal={toggleModal} />}
    </>
  );
};

export default ContactButton;