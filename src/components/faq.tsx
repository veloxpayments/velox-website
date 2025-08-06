"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const faqs = [
  {
    id: 1,
    question: "How quickly will my money arrive?",
    answer:
      "Most transfers arrive within 1-2 business days. Platinum members receive priority processing that can deliver funds within hours for certain corridors.",
  },
  {
    id: 2,
    question: "How quickly will my money arrive?",
    answer:
      "Most transfers arrive within 1-2 business days. Platinum members receive priority processing that can deliver funds within hours for certain corridors.",
  },
  {
    id: 3,
    question: "How quickly will my money arrive?",
    answer:
      "Most transfers arrive within 1-2 business days. Platinum members receive priority processing that can deliver funds within hours for certain corridors.",
  },
  {
    id: 4,
    question: "How quickly will my money arrive?",
    answer:
      "Most transfers arrive within 1-2 business days. Platinum members receive priority processing that can deliver funds within hours for certain corridors.",
  },
  {
    id: 5,
    question: "How quickly will my money arrive?",
    answer:
      "Most transfers arrive within 1-2 business days. Platinum members receive priority processing that can deliver funds within hours for certain corridors.",
  },
];

const FAQSection = () => {
  const [openFAQ, setOpenFAQ] = useState(1);

  const toggleFAQ = (id) => {
    setOpenFAQ(openFAQ === id ? null : id);
  };

  return (
    <div>
      <section className="py-16 px-4 bg-[#F8F9FB]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Left side - Title and button */}
            <div className="lg:sticky lg:top-8">
              <h2 className="text-4xl md:text-[64px] font-medium text-[#050506] mb-6 leading-normal">
                Frequently Asked Questions?
              </h2>
              <button className="bg-black hover:bg-gray-800 text-white px-[24px] py-4 rounded-full">
                See more FAQs
              </button>
            </div>

            {/* Right side - FAQ items */}
            <div className="space-y-4">
              {faqs.map((faq) => (
                <div
                  key={faq.id}
                  className={`rounded-2xl transition-all duration-200 bg-white ${
                    openFAQ === faq.id
                      ? "border border-[#6584DB] text-[#6584DB]"
                      : "border border-gray-200 bg-white hover:border-gray-300"
                  }`}
                >
                  <button
                    onClick={() => toggleFAQ(faq.id)}
                    className="w-full px-6 py-5 text-left flex items-center justify-between"
                  >
                    <span
                      className={`text-[20px] font-medium pr-4 ${
                        openFAQ === faq.id ? "text-[#6584DB]" : "text-black"
                      }`}
                    >
                      {faq.question}
                    </span>
                    {openFAQ === faq.id ? (
                      <ChevronUp className="w-5 h-5 text-[#6584DB] flex-shrink-0" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-gray-400 flex-shrink-0" />
                    )}
                  </button>

                  {openFAQ === faq.id && (
                    <div className="px-6 pb-5">
                      <p className="text-[#050506] leading-[27px] font-normal text-[18px]">
                        {faq.answer}
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FAQSection;
