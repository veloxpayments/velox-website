"use client"

import { useState } from "react"
import { ChevronDown, ChevronUp } from "lucide-react"


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
]


const FAQSection = () => {
    const [openFAQ, setOpenFAQ] = useState(1)

  const toggleFAQ = (id) => {
    setOpenFAQ(openFAQ === id ? null : id)
  }

  return (
    <div>
       <section className="py-16 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left side - Title and button */}
          <div className="lg:sticky lg:top-8">
            <h2 className="text-4xl md:text-[64px] font-bold text-[#050506] mb-8 leading-tight">
              Frequently Asked Questions?
            </h2>
            <button className="bg-black hover:bg-gray-800 text-white px-8 py-3 rounded-full">See more FAQs</button>
          </div>

          {/* Right side - FAQ items */}
          <div className="space-y-4">
            {faqs.map((faq) => (
              <div
                key={faq.id}
                className={`rounded-2xl transition-all duration-200 ${
                  openFAQ === faq.id
                    ? "border-2 border-[#6584DB] text-[#6584DB]"
                    : "border border-gray-200 bg-white hover:border-gray-300"
                }`}
              >
                <button
                  onClick={() => toggleFAQ(faq.id)}
                  className="w-full px-6 py-5 text-left flex items-center justify-between"
                >
                  <span className="text-[20px] font-medium text-gray-900 pr-4">{faq.question}</span>
                  {openFAQ === faq.id ? (
                    <ChevronUp className="w-5 h-5 text-[#6584DB] flex-shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-gray-400 flex-shrink-0" />
                  )}
                </button>

                {openFAQ === faq.id && (
                  <div className="px-6 pb-5">
                    <p className="text-gray-700 leading-relaxed text-[18px]">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
    </div>
  )
}

export default FAQSection