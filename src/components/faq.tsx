"use client";

import FAQDropdown from "./faqDropdown";

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
  return (
    <div>
      <section className="py-16 px-4 bg-[#F8F9FB]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Left side - Title and button */}
            <div className="lg:sticky lg:top-8">
              <h2 className="text-[24px] md:text-[64px] font-medium text-[#050506] md:mb-6 leading-normal">
                Frequently Asked Questions?
              </h2>
              <button className="hidden md:block bg-black hover:bg-gray-800 text-white px-[24px] py-4 rounded-full">
                See more FAQs
              </button>
            </div>

            {/* Right side - FAQ items */}
            <div className="space-y-4">
              {faqs.map((faq) => (
                <FAQDropdown key={faq.id} title={faq.question} answer={faq.answer} />
              ))}
            </div>
            <div className="flex justify-center">
              <button className="md:hidden bg-black hover:bg-gray-800 text-white px-[24px] py-4 rounded-full">
                See more FAQs
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FAQSection;
