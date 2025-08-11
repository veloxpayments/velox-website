"use client";

import React from "react";
import FAQDropdown from "../../components/faqDropdown";

// Figma asset constants (update these paths to match your exported Figma assets)

const how1 = "/about-images/getCode.svg";
const how2 = "/about-images/share.svg";
const how3 = "/about-images/dollar.svg";
const rewardImg = "/about-images/phone.svg";
const newsletterBg = "/about-images/699b816a9e194764251a9da7f2c992deb6a287c4.svg";

const Referral = () => {
  return (
    <div className="w-full flex flex-col items-center min-h-screen font-satoshi pt-7 md:px-0 md:pt-0">
      {/* Hero Section */}
      <section className="w-full px-4">
        <header className="w-full h-[783px] md:h-auto flex flex-col items-center justify-center px-4 md:px-0 pt-12 md:pt-[120px] pb-8 md:pb-0 bg-[#E4EEFE] md:bg-[linear-gradient(110deg,_#F0F3FB_0.23%,_#D1DAF4_99.77%)] rounded-2xl md:rounded-none min-h-[400px] md:min-h-[555px] relative overflow-hidden">
          <div className="max-w-4xl w-full flex flex-col items-center justify-center mx-auto gap-6 relative z-10">
          <h1 className="text-[30px] md:text-5xl lg:text-[56px] font-[500] md:font-bold text-[#050506] leading-[1.1] md:leading-[60px] tracking-tight text-center">Earn $10 Per Referral</h1>
          <p className="text-[16px] md:text-[20px] lg:text-[24px] text-[#737373] max-w-2xl text-center leading-[1.4]">Invite friends to Velox and earn $10 for each successful referral. Unlike others, you get the entire reward.</p>
          <button className="mt-2 md:mt-6 px-8 py-3 bg-[#6584DB] text-white rounded-full text-[16px] font-[500] shadow hover:bg-[#4a6fc1] transition mx-auto">Start Referring Now</button>
        </div>
        </header>
      </section>

      {/* How it Works Section */}
      <section className="w-full flex flex-col items-center py-10 md:py-16 px-4 bg-white">
        <h2 className="text-[18px] md:text-[40px] text-[500] md:font-bold text-[#050506] text-center mb-2">How it Works</h2>
        <p className="text-[16px] md:text-[24px] text-[#2e2e2e] text-center mb-10 max-w-[60vw] md:max-w-full">Simple steps to earn rewards with Velox referrals</p>
        <div className="flex flex-col md:flex-row gap-10 md:gap-16 mt-4 w-full items-center justify-center">
          <div className="flex flex-col items-center bg-[#f8f9fb] rounded-[8px] p-8 w-full max-w-[392px] h-auto md:h-[223px] md:max-w-[392px]" style={{ boxShadow: '0 12px 16px -4px rgba(16,24,40,0.08), 0 4px 6px -2px rgba(16,24,40,0.03)' }}>
            <div className="bg-[#dee9fc] rounded-full flex items-center justify-center p-4 mb-6">
              <img src={how1} alt="Get Referral Code" className="w-8 h-8" />
            </div>
            <h3 className="text-[20px] md:text-[24px] font-semibold text-[#050506] text-center mb-2">Get Referral Code</h3>
            <p className="text-[#737373] text-[16px] md:text-[18px] text-center">Get your referral code on the app</p>
          </div>
          <div className="flex flex-col items-center bg-[#f8f9fb] rounded-[8px] p-8 w-full max-w-[392px] h-auto md:h-[223px] md:max-w-[392px]" style={{ boxShadow: '0 12px 16px -4px rgba(16,24,40,0.08), 0 4px 6px -2px rgba(16,24,40,0.03)' }}>
            <div className="bg-[#e2fbe8] rounded-full flex items-center justify-center p-4 mb-6">
              <img src={how2} alt="Share" className="w-8 h-8" />
            </div>
            <h3 className="text-[20px] md:text-[24px] font-semibold text-[#050506] text-center mb-2">Share</h3>
            <p className="text-[#737373] text-[16px] md:text-[18px] text-center">Share code with your friends</p>
          </div>
          <div className="flex flex-col items-center bg-[#f8f9fb] rounded-[8px] p-8 w-full max-w-[392px] h-auto md:h-[223px] md:max-w-[392px]" style={{ boxShadow: '0 12px 16px -4px rgba(16,24,40,0.08), 0 4px 6px -2px rgba(16,24,40,0.03)' }}>
            <div className="bg-[#fcf3cc] rounded-full flex items-center justify-center mb-6 p-4">
              <img src={how3} alt="Earn" className="w-8 h-8" />
            </div>
            <h3 className="text-[20px] md:text-[24px] font-semibold text-[#050506] text-center mb-2">Earn</h3>
            <p className="text-[#737373] text-[16px] md:text-[18px] text-center">Get $10 when friend’s first transaction is $50+</p>
          </div>
        </div>
      </section>

      {/* Rewards Section */}
      <section className="w-full flex flex-col items-center justify-center px-4 py-12 md:py-20 bg-[#F9FAFB] rounded-2xl md:rounded-none mb-8">
        <div className="w-full max-w-md bg-white rounded-[24px] flex flex-col items-center mx-auto overflow-hidden">
          <div className="w-full bg-[#6584DB] rounded-t-[24px] px-6 py-6 flex flex-col items-center">
            <h3 className="text-white text-[22px] md:text-[24px] font-bold text-center">Get Your Referral Code</h3>
            <p className="text-white text-[16px] md:text-[18px] text-center mt-1">Download the Velox app to start earning rewards</p>
          </div>
          <div className="flex flex-col items-center px-8 py-8 w-full">
            <div className="flex flex-col items-center mb-8">
              <div className="bg-[#f5f6fa] rounded-full flex items-center justify-center w-[96px] h-[96px] mb-6">
                <img src={rewardImg} alt="Referral Icon" className="w-10 h-10" />
              </div>
              <h4 className="text-[18px] md:text-[28px] font-[500] md:font-bold text-[#050506] text-center mb-2">Your referral code awaits</h4>
              <p className="text-[#2d2d2d] text-[16px] md:text-[20px] text-center mb-6">Sign up for Velox to receive your unique referral code and start earning $10 per referral</p>
              <button className="bg-[#6584DB] hover:bg-[#4a6fc1] text-white rounded-full px-8 py-3 font-[500] text-[16px] shadow transition">Download to get code</button>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="w-full bg-[#F8F9FB] flex flex-col items-center py-16 px-4">
        <div className="max-w-4xl w-full flex flex-col items-center mb-10">
          <h2 className="text-[18px] md:text-[40px] font-[500] md:font-bold text-[#050506] text-center mb-4">Frequently Asked Questions?</h2>
          <p className="text-[16px] md:text-[22px] text-[#737373] text-center">Have questions about our services? Find quick answers to commonly asked questions below.</p>
        </div>
        <div className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-10">
          {Array.from({ length: 8 }).map((_, i) => (
            <FAQDropdown
              key={i}
              title="How quickly will my money arrive?"
              answer="Most transfers arrive within 1-2 business days. Platinum members receive priority processing that can deliver funds within hours for certain corridors."
            />
          ))}
        </div>
        <button className="bg-[#050506] text-white rounded-full px-8 py-3 font-medium text-base md:text-lg shadow transition hover:bg-[#222]">See more FAQs</button>
      </section>
    </div>
  );
};

export default Referral;
