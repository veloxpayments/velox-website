"use client";

import SecondaryButton from "./buttons/secondary-button";
import FAQDropdown from "./faqDropdown";
import { useRouter } from "next/navigation";

const faqs = [
  {
    id: 1,
    question: "How transfers work",
    answer:
      "Making a transfer with Velox is easy. All you have to do is: 1. Download the Velox app on your iOS or Android device. 2. Sign in to your profile within the app. 3. Users can now fund their wallet through Paramount for CAD 4. NGN wallets are funded by swapping the CAD amount from the wallet 5. Add the amount you wish to send and provide your receiver's details. 6. Relax, and let us take care of the rest!",
  },
  {
    id: 2,
    question: "Recurring payments",
    answer:
      "If you ever feel like setting up recurring payments, we have you covered! Users can schedule payments to loved ones on specific dates in the future and leave it to us to work our magic on the day without coming back to the app.",
  },
  {
    id: 3,
    question:
      "How long does it take for the recipient to receive the money I sent?",
    answer:
      "It only takes a few moments for the recipient to receive the transaction.",
  },
  {
    id: 4,
    question: "What happens if I send money to the wrong recipient by mistake?",
    answer:
      "Before confirming any transfer, please double-check your recipient information. There is no assurance of a reimbursement for transactions made to the incorrect account. To start a reversal, you would need to get in touch with your beneficiary. Please inform our support team as soon as you find you've sent money to the wrong account for further support.",
  },
  {
    id: 5,
    question: "Which countries can I send money to?",
    answer: "You can send money to Nigeria, and other countries coming soon.",
  },
];

const FAQSection = () => {
  const router = useRouter();

  return (
    <div>
      <section className="py-16 px-4 bg-[#F8F9FB]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Left side - Title and button */}
            <div className="lg:sticky lg:top-[80px]">
              <h2 className="text-[24px] md:text-[64px] font-medium text-[#050506] md:mb-6 leading-normal">
                Frequently Asked Questions?
              </h2>
              <div className="hidden md:block">
                <SecondaryButton
                onClick={() => {
                  router.push("/FAQs");
                }}
              >
                See more FAQs
              </SecondaryButton>
              </div>
            </div>

            {/* Right side - FAQ items */}
            <div className="space-y-4">
              {faqs.map((faq) => (
                <FAQDropdown
                  key={faq.id}
                  title={faq.question}
                  answer={faq.answer}
                />
              ))}
            </div>
            <div className="flex justify-center md:hidden">
              <SecondaryButton
                onClick={() => {
                  router.push("/FAQs");
                }}
              >
                See more FAQs
              </SecondaryButton>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FAQSection;
