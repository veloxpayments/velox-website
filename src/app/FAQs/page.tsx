
import React from "react";
import FAQDropdown from "../../components/faqDropdown";

// Figma asset constants
const imgQuestionLine = "/question.svg";
const imgSearchLine = "/search.svg";
const imgLine = "/faqline.png";
const imgMessage1Line = "/message.svg";

const gettingStartedFaqs = [
  {
    question: "How quickly will my money arrive?",
    answer:
      "Most transfers arrive within 1-2 business days. Platinum members receive priority processing that can deliver funds within hours for certain corridors.",
  },
  {
    question: "How do I create an account?",
    answer:
      "Download the Velox app and follow the sign-up instructions. You’ll need a valid email and phone number.",
  },
  {
    question: "Is my information secure?",
    answer:
      "Yes, we use industry-standard encryption and security practices to protect your data.",
  },
  {
    question: "What countries can I send money to?",
    answer:
      "You can send money to a growing list of countries. Check our app for the latest supported destinations.",
  },
];

const sendMoneyFaqs = [
  {
    question: "How do I send money?",
    answer:
      "Log in to your Velox account, select the recipient, enter the amount, and follow the prompts to complete your transfer.",
  },
  {
    question: "Are there any fees?",
    answer:
      "Velox offers zero-fee transfers for most corridors. Some transfers may incur a small fee, which will be shown before you confirm.",
  },
  {
    question: "How can I track my transfer?",
    answer:
      "You can track your transfer status in the app under the ‘Transfers’ section.",
  },
  {
    question: "What payment methods are supported?",
    answer:
      "We support bank transfers, debit cards, and other local payment methods depending on your country.",
  },
];



const FAQs = () => {
  return (
    <div className="w-full min-h-screen bg-[#f8f9fb] font-satoshi">
      {/* Header Section */}
      <header className="bg-[#1a2238] w-full pb-12 md:pb-0 relative">
        <div className="flex flex-col items-center justify-center text-center pt-16 md:pt-48 pb-8 md:pb-16">
          <img src={imgQuestionLine} alt="question" className="w-12 h-12 mx-auto mb-4" />
          <h1 className="text-white text-3xl md:text-5xl font-medium mb-4">Frequently Asked Questions</h1>
          <p className="text-white text-lg md:text-2xl font-[300] max-w-2xl lg:max-w-6xl mx-auto">Have questions about our services? Find quick answers to commonly asked questions below.</p>
        </div>
      </header>

      <section className="w-full custom-bg-faq">
        {/* Search Bar */}
      <div className="max-w-2xl mx-auto mt-8 md:mt-16 z-20 relative">
        <div className="flex items-center bg-white border border-[#51515499] rounded-xl px-4 py-3 shadow-sm">
          <img src={imgSearchLine} alt="search" className="w-5 h-5 mr-2" />
          <input
            type="text"
            placeholder="Search frequently asked questions"
            className="flex-1 bg-transparent outline-none text-base text-[#b9b9bb] placeholder-[#b9b9bb]"
          />
        </div>
      </div>

      {/* FAQ Sections */}
      <main className="max-w-4xl mx-auto w-full py-12 md:py-20 px-4">
        {/* Getting Started */}
        <section className="mb-10">
          <div className="flex items-center gap-3 mb-2">
            <h2 className="text-[28px] font-medium text-[#000]">Getting Started</h2>
          </div>
          <img src={imgLine} alt="line" className="w-full h-1 mb-6" />
          <div className="flex flex-col gap-4">
            {gettingStartedFaqs.map((faq, idx) => (
              <FAQDropdown key={idx} title={faq.question} answer={faq.answer} />
            ))}
          </div>
        </section>
        {/* Send Money */}
        <section className="mb-10">
          <div className="flex items-center gap-3 mb-2">
            <h2 className="text-[28px] font-medium text-[#000]">Send Money</h2>
          </div>
          <img src={imgLine} alt="line" className="w-full h-1 mb-6" />
          <div className="flex flex-col gap-4">
            {sendMoneyFaqs.map((faq, idx) => (
              <FAQDropdown key={idx} title={faq.question} answer={faq.answer} />
            ))}
          </div>
        </section>
        <div className="flex justify-center mt-8">
          <button className="bg-[#1a2238] text-white rounded-full px-8 py-3 font-medium">Load more FAQs</button>
        </div>
      </main>
      </section>

      {/* Still have questions */}
      <section className="bg-white py-16 flex flex-col items-center">
        <img src={imgMessage1Line} alt="message" className="w-16 h-16 mb-4" />
        <h2 className="text-[#050506] text-2xl md:text-3xl font-medium mb-2 text-center">Still have questions?</h2>
        <p className="text-[#393939] text-lg text-center max-w-xl mb-6">Can’t find what you’re looking for? Send us a message and our support team will get back to you within 48 hours</p>
        <button className="bg-[#6584db] text-white rounded-full px-8 py-3 font-medium">Load More Articles</button>
      </section>
    </div>
  );
};

export default FAQs;