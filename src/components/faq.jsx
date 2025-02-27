"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const faqData = [
  {
    category: "About Velox",
    faqs: [
      { question: "Name of faq", answer: "This is the answer to the FAQ." },
      { question: "Name of faq", answer: "This is another FAQ answer." },
    ],
  },
  {
    category: "Customer support",
    faqs: [
      { question: "Name of faq", answer: "Customer support details." },
      { question: "Name of faq", answer: "More support information." },
      { question: "Name of faq", answer: "Even more support info." },
      { question: "Name of faq", answer: "Final support FAQ." },
    ],
  },
  {
    category: "Loyalty points",
    faqs: [
      { question: "Name of faq", answer: "Loyalty points explanation." },
      { question: "Name of faq", answer: "More about loyalty points." },
      { question: "Name of faq", answer: "Third loyalty FAQ." },
      { question: "Name of faq", answer: "Final loyalty points info." },
    ],
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full px-4 py-12 container mx-auto">
      <h2 className="text-center text-2xl font-semibold md:text-3xl">
        Got questions?
      </h2>

      <div className="mt-8 space-y-10">
        {faqData.map((category, categoryIndex) => (
          <div key={categoryIndex}>
            <h3 className="mb-2 text-lg font-medium">{category.category}</h3>

            <div className="space-y-2  border-gray-300">
              {category.faqs.map((faq, index) => {
                const isOpen = openIndex === `${categoryIndex}-${index}`;
                return (
                  <div key={index} className="border-b border-gray-300">
                    <button
                      className="flex w-full items-center justify-between px-4 py-3 text-left text-[#121212] focus:outline-none"
                      onClick={() => toggleFAQ(`${categoryIndex}-${index}`)}
                    >
                      <span>{faq.question}</span>
                      <motion.span
                        animate={{ rotate: isOpen ? 180: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <Image src="/up-arrow.png" alt="" width={8} height={4}/>
                      </motion.span>
                    </button>

                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{
                        height: isOpen ? "auto" : 0,
                        opacity: isOpen ? 1 : 0,
                      }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden px-4"
                    >
                      <p className="pb-3 text-gray-600">{faq.answer}</p>
                    </motion.div>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 flex justify-center">
        <button className="rounded-full bg-[#050506] px-6 py-3 text-white">
          View all FAQs
        </button>
      </div>
    </section>
  );
}
