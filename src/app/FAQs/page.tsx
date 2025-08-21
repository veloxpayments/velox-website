import React from "react";
import ContactButton from "../../components/buttons/contact-button";
import Image from "next/image";
import FAQSection from "../../components/FAQSection";

// Figma asset constants
const imgQuestionLine = "/question.svg";
const imgMessage1Line = "/message.svg";
const whiteLine = "/whiteLine.svg";


const FAQs = () => {
  
  return (
    <div className="w-full min-h-screen bg-[#f8f9fb] font-satoshi font-satoshi pt-7 px-4 md:px-0 md:pt-0">
      {/* Header Section */}
      <header className="bg-[#1a2238] w-full h-[783px] md:h-auto md:py-0 relative rounded-2xl md:rounded-none flex justify-center items-center md:block px-4">
        <div className="flex flex-col items-center justify-center text-center md:pt-48 md:pb-16">
          <Image
            src={imgQuestionLine}
            alt="question"
            width={48}
            height={48}
            className="w-10 h-10 md:w-12 md:h-12 mx-auto mb-4"
            loading="lazy"
          />
          <h1 className="text-white text-[30px] md:text-5xl font-medium mb-4">
            Frequently Asked Questions
          </h1>
          <p className="text-white text-[16px] md:text-2xl font-[300] max-w-[60vw] lg:max-w-6xl mx-auto">
            Have questions about our services? Find quick answers to commonly
            asked questions below.
          </p>
          <Image
            src={whiteLine}
            alt="white line"
            width={98}
            height={8}
            className="md:hidden mt-6"
            loading="lazy"
          />
        </div>
      </header>
      
      {/* FAQ Section */}
      <FAQSection/>

      {/* Still have questions */}
      <section className="bg-white py-16 flex flex-col items-center">
        <Image
          src={imgMessage1Line}
          alt="message"
          width={64}
          height={64}
          className="w-16 h-16 mb-4"
          loading="lazy"
        />
        <h2 className="text-[#050506] text-2xl md:text-3xl font-medium mb-2 text-center">
          Still have questions?
        </h2>
        <p className="text-[#393939] text-lg text-center max-w-xl mb-6">
          Can’t find what you’re looking for? Send us a message and our support
          team will get back to you within 48 hours
        </p>
        <ContactButton />
      </section>
    </div>
  );
};

export default FAQs;