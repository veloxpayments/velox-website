"use client";

import React from "react";
import FAQDropdown from "../../components/faqDropdown";
import Image from "next/image";
import PrimaryButton from "../../components/buttons/primary-button";
import SecondaryButton from "../../components/buttons/secondary-button";
import { useRouter } from "next/navigation";

// Figma asset constants (update these paths to match your exported Figma assets)

const how1 = "/about-images/getCode.svg";
const how2 = "/about-images/share.svg";
const how3 = "/about-images/dollar.svg";
const rewardImg = "/about-images/phone.svg";

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
    question: "How long does it take for the recipient to receive the money I sent?",
    answer: "It only takes a few moments for the recipient to receive the transaction.",
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
  {
    id: 6,
    question: "How do I keep my account secure?",
    answer:
      "We do everything we can to keep your money safe. We ask you to do the same by keeping your security details safe. We encourage you to disguise or protect them should you write them down. You should not disclose your security details to anyone. Velox will not ask you for your card information or login details.",
  },
  {
    id: 7,
    question: "How secure is the Velox platform?",
    answer:
      "The Velox platform is safe and secure, our facial verification login, encrypted platform, and fraud monitoring tools keep your personal and transaction information safe and secure.",
  },
  {
    id: 8,
    question: "Account security and safety",
    answer:
      "If you ever have any reason to believe your account has been compromised, reach out to us at support@veloxpayments.com",
  },
];

const Referral = () => {
  const router = useRouter()
  return (
    <div className="w-full flex flex-col items-center min-h-screen font-satoshi pt-7 md:px-0 md:pt-0">
      {/* Hero Section */}
      <section className="w-full px-4 md:px-0">
        <header className="w-full h-[783px] md:h-auto flex flex-col items-center justify-center px-4 md:px-0 pt-12 md:pt-[120px] pb-8 md:pb-0 bg-[#E4EEFE] md:bg-[linear-gradient(110deg,_#F0F3FB_0.23%,_#D1DAF4_99.77%)] rounded-2xl md:rounded-none min-h-[400px] md:min-h-[555px] relative overflow-hidden">
          <div className="max-w-4xl w-full flex flex-col items-center justify-center mx-auto gap-6 relative z-1">
            <h1 className="text-[30px] md:text-5xl lg:text-[56px] font-[500] md:font-bold text-[#050506] leading-[1.1] md:leading-[60px] tracking-tight text-center">
              Earn $10 Per Referral
            </h1>
            <p className="text-[16px] md:text-[20px] lg:text-[24px] text-[#737373] max-w-2xl text-center leading-[1.4]">
              Invite friends to Velox and earn $10 for each successful referral.
              Unlike others, you get the entire reward.
            </p>
            <PrimaryButton onClick={() => {}}>
              Start Referring Now
            </PrimaryButton>
          </div>
        </header>
      </section>

      {/* How it Works Section */}
      <section className="w-full flex flex-col items-center py-10 md:py-16 px-4 bg-white">
        <h2 className="text-[18px] md:text-[40px] text-[500] md:font-bold text-[#050506] text-center mb-2">
          How it Works
        </h2>
        <p className="text-[16px] md:text-[24px] text-[#2e2e2e] text-center mb-10 max-w-[60vw] md:max-w-full">
          Simple steps to earn rewards with Velox referrals
        </p>
        <div className="flex flex-col md:flex-row gap-10 md:gap-16 mt-4 w-full items-center justify-center">
          <div
            className="flex flex-col items-center bg-[#f8f9fb] rounded-[8px] p-8 w-full max-w-[392px] h-auto md:h-[223px] md:max-w-[392px]"
            style={{
              boxShadow:
                "0 12px 16px -4px rgba(16,24,40,0.08), 0 4px 6px -2px rgba(16,24,40,0.03)",
            }}
          >
            <div className="bg-[#dee9fc] rounded-full flex items-center justify-center p-4 mb-6">
              <Image
                src={how1}
                alt="Get Referral Code"
                width={32}
                height={32}
                className="w-8 h-8"
                loading="lazy"
              />
            </div>
            <h3 className="text-[20px] md:text-[24px] font-semibold text-[#050506] text-center mb-2">
              Get Referral Code
            </h3>
            <p className="text-[#737373] text-[16px] md:text-[18px] text-center">
              Get your referral code on the app
            </p>
          </div>
          <div
            className="flex flex-col items-center bg-[#f8f9fb] rounded-[8px] p-8 w-full max-w-[392px] h-auto md:h-[223px] md:max-w-[392px]"
            style={{
              boxShadow:
                "0 12px 16px -4px rgba(16,24,40,0.08), 0 4px 6px -2px rgba(16,24,40,0.03)",
            }}
          >
            <div className="bg-[#e2fbe8] rounded-full flex items-center justify-center p-4 mb-6">
              <Image
                src={how2}
                alt="Share"
                width={32}
                height={32}
                className="w-8 h-8"
                loading="lazy"
              />
            </div>
            <h3 className="text-[20px] md:text-[24px] font-semibold text-[#050506] text-center mb-2">
              Share
            </h3>
            <p className="text-[#737373] text-[16px] md:text-[18px] text-center">
              Share code with your friends
            </p>
          </div>
          <div
            className="flex flex-col items-center bg-[#f8f9fb] rounded-[8px] p-8 w-full max-w-[392px] h-auto md:h-[223px] md:max-w-[392px]"
            style={{
              boxShadow:
                "0 12px 16px -4px rgba(16,24,40,0.08), 0 4px 6px -2px rgba(16,24,40,0.03)",
            }}
          >
            <div className="bg-[#fcf3cc] rounded-full flex items-center justify-center mb-6 p-4">
              <Image
                src={how3}
                alt="Earn"
                width={32}
                height={32}
                className="w-8 h-8"
                loading="lazy"
              />
            </div>
            <h3 className="text-[20px] md:text-[24px] font-semibold text-[#050506] text-center mb-2">
              Earn
            </h3>
            <p className="text-[#737373] text-[16px] md:text-[18px] text-center">
              Get $10 when friend’s first transaction is $50+
            </p>
          </div>
        </div>
      </section>

      {/* Rewards Section */}
      <section className="w-full flex flex-col items-center justify-center px-4 py-12 md:py-20 bg-[#F9FAFB] rounded-2xl md:rounded-none mb-8">
        <div className="w-full max-w-md bg-white rounded-[24px] flex flex-col items-center mx-auto overflow-hidden">
          <div className="w-full bg-[#6584DB] rounded-t-[24px] px-6 py-6 flex flex-col items-center">
            <h3 className="text-white text-[22px] md:text-[24px] font-bold text-center">
              Get Your Referral Code
            </h3>
            <p className="text-white text-[16px] md:text-[18px] text-center mt-1">
              Download the Velox app to start earning rewards
            </p>
          </div>
          <div className="flex flex-col items-center px-8 py-8 w-full">
            <div className="flex flex-col items-center mb-8">
              <div className="bg-[#f5f6fa] rounded-full flex items-center justify-center w-[96px] h-[96px] mb-6">
                <Image
                  src={rewardImg}
                  alt="Referral Icon"
                  width={40}
                  height={40}
                  className="w-10 h-10"
                  loading="lazy"
                />
              </div>
              <h4 className="text-[18px] md:text-[28px] font-[500] md:font-bold text-[#050506] text-center mb-2">
                Your referral code awaits
              </h4>
              <p className="text-[#2d2d2d] text-[16px] md:text-[20px] text-center mb-6">
                Sign up for Velox to receive your unique referral code and start
                earning $10 per referral
              </p>
              <PrimaryButton onClick={() => {router.push('/FAQs')}}>
                Download to get code{" "}
              </PrimaryButton>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="w-full bg-[#F8F9FB] flex flex-col items-center py-16 px-4">
        <div className="max-w-4xl w-full flex flex-col items-center mb-10">
          <h2 className="text-[18px] md:text-[40px] font-[500] md:font-bold text-[#050506] text-center mb-4">
            Frequently Asked Questions?
          </h2>
          <p className="text-[16px] md:text-[22px] text-[#737373] text-center">
            Have questions about our services? Find quick answers to commonly
            asked questions below.
          </p>
        </div>
        <div className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-10">
          {faqs.map((faq) => (
            <FAQDropdown
              key={faq.id}
              title={faq.question}
              answer={faq.answer}
            />
          ))}
        </div>
        <SecondaryButton onClick={()=>{router.push('/FAQs')}}>
          See more FAQs
        </SecondaryButton>
      </section>
    </div>
  );
};

export default Referral;
