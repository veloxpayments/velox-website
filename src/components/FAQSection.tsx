'use client';
import FAQDropdown from "./faqDropdown";
import Image from "next/image";
import React, { useMemo, useState } from "react";
import { faqsByCategory } from "../lib/faqs";

const {
  gettingStartedFaqs,
  sendMoneyFaqs,
  feesPricingFaqs,
  complianceKycFaqs,
  coverageFaqs,
  beneficiariesFaqs,
  securityFaqs,
  accountManagementFaqs,
  supportFaqs,
} = faqsByCategory;


// Figma asset constants
const imgQuestionLine = "/question.svg";
const imgSearchLine = "/search.svg";
const imgLine = "/faqline.png";
const imgMessage1Line = "/message.svg";
const whiteLine = "/whiteLine.svg";

const PAGE_SIZE = 10;

export default function FAQSection () {
  // GLOBAL pagination count (reveals across categories in order)
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);

  // Pre-calc totals to know when to stop
  const totalFaqsCount =
    gettingStartedFaqs.length +
    sendMoneyFaqs.length +
    feesPricingFaqs.length +
    complianceKycFaqs.length +
    coverageFaqs.length +
    beneficiariesFaqs.length +
    securityFaqs.length +
    accountManagementFaqs.length +
    supportFaqs.length;

  // Compute visible slices per category in order, and hide empty sections
  const {
    gsVisible,
    smVisible,
    fpVisible,
    kycVisible,
    covVisible,
    benVisible,
    secVisible,
    accVisible,
    supVisible,
    canLoadMore,
  } = useMemo(() => {
    let remaining = visibleCount;

    const take = (arr: any[]) => {
      const n = Math.min(arr.length, Math.max(0, remaining));
      const slice = arr.slice(0, n);
      remaining -= n;
      return slice;
    };

    return {
      gsVisible: take(gettingStartedFaqs),
      smVisible: take(sendMoneyFaqs),
      fpVisible: take(feesPricingFaqs),
      kycVisible: take(complianceKycFaqs),
      covVisible: take(coverageFaqs),
      benVisible: take(beneficiariesFaqs),
      secVisible: take(securityFaqs),
      accVisible: take(accountManagementFaqs),
      supVisible: take(supportFaqs),
      canLoadMore: visibleCount < totalFaqsCount,
    };
  }, [visibleCount, totalFaqsCount]);

  return (
    <section className="w-full custom-bg-faq">
      {/* Search Bar */}
      <div className="max-w-2xl mx-auto pt-8 md:pt-16 z-2 relative">
        <div className="flex items-center bg-white border border-[#51515499] rounded-xl px-4 py-3 shadow-sm">
          <Image
            src={imgSearchLine}
            alt="search"
            width={20}
            height={20}
            className="w-5 h-5 mr-2"
            loading="lazy"
          />
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
          {gsVisible.length > 0 && (
            <section className="mb-10">
              <div className="flex items-center gap-3 mb-2">
                <h2 className="text-[18px] md:text-[28px] font-medium text-[#000]">
                  Getting Started
                </h2>
              </div>
              <Image
                src={imgLine}
                alt="line"
                width={200}
                height={8}
                className="w-full h-1 mb-6"
                loading="lazy"
              />
              <div className="flex flex-col gap-4">
                {gsVisible.map((faq: any, idx: number) => (
                  <FAQDropdown key={idx} title={faq.question} answer={faq.answer} />
                ))}
              </div>
            </section>
          )}

          {/* Send Money */}
          {smVisible.length > 0 && (
            <section className="mb-10">
              <div className="flex items-center gap-3 mb-2">
                <h2 className="text-[18px] md:text-[28px] font-medium text-[#000]">
                  Send Money
                </h2>
              </div>
              <Image
                src={imgLine}
                alt="line"
                width={200}
                height={8}
                className="w-full h-1 mb-6"
                loading="lazy"
              />
              <div className="flex flex-col gap-4">
                {smVisible.map((faq: any, idx: number) => (
                  <FAQDropdown key={idx} title={faq.question} answer={faq.answer} />
                ))}
              </div>
            </section>
          )}

          {/* Fees & Pricing */}
          {fpVisible.length > 0 && (
            <section className="mb-10">
              <div className="flex items-center gap-3 mb-2">
                <h2 className="text-[18px] md:text-[28px] font-medium text-[#000]">
                  Fees & Pricing
                </h2>
              </div>
              <Image
                src={imgLine}
                alt="line"
                width={200}
                height={8}
                className="w-full h-1 mb-6"
                loading="lazy"
              />
              <div className="flex flex-col gap-4">
                {fpVisible.map((faq: any, idx: number) => (
                  <FAQDropdown key={idx} title={faq.question} answer={faq.answer} />
                ))}
              </div>
            </section>
          )}

          {/* Compliance & KYC */}
          {kycVisible.length > 0 && (
            <section className="mb-10">
              <div className="flex items-center gap-3 mb-2">
                <h2 className="text-[18px] md:text-[28px] font-medium text-[#000]">
                  Compliance & KYC
                </h2>
              </div>
              <Image
                src={imgLine}
                alt="line"
                width={200}
                height={8}
                className="w-full h-1 mb-6"
                loading="lazy"
              />
              <div className="flex flex-col gap-4">
                {kycVisible.map((faq: any, idx: number) => (
                  <FAQDropdown key={idx} title={faq.question} answer={faq.answer} />
                ))}
              </div>
            </section>
          )}

          {/* Coverage & Availability */}
          {covVisible.length > 0 && (
            <section className="mb-10">
              <div className="flex items-center gap-3 mb-2">
                <h2 className="text-[18px] md:text-[28px] font-medium text-[#000]">
                  Coverage & Availability
                </h2>
              </div>
              <Image
                src={imgLine}
                alt="line"
                width={200}
                height={8}
                className="w-full h-1 mb-6"
                loading="lazy"
              />
              <div className="flex flex-col gap-4">
                {covVisible.map((faq: any, idx: number) => (
                  <FAQDropdown key={idx} title={faq.question} answer={faq.answer} />
                ))}
              </div>
            </section>
          )}

          {/* Beneficiaries */}
          {benVisible.length > 0 && (
            <section className="mb-10">
              <div className="flex items-center gap-3 mb-2">
                <h2 className="text-[18px] md:text-[28px] font-medium text-[#000]">
                  Beneficiaries
                </h2>
              </div>
              <Image
                src={imgLine}
                alt="line"
                width={200}
                height={8}
                className="w-full h-1 mb-6"
                loading="lazy"
              />
              <div className="flex flex-col gap-4">
                {benVisible.map((faq: any, idx: number) => (
                  <FAQDropdown key={idx} title={faq.question} answer={faq.answer} />
                ))}
              </div>
            </section>
          )}

          {/* Security & Privacy */}
          {secVisible.length > 0 && (
            <section className="mb-10">
              <div className="flex items-center gap-3 mb-2">
                <h2 className="text-[18px] md:text-[28px] font-medium text-[#000]">
                  Security & Privacy
                </h2>
              </div>
              <Image
                src={imgLine}
                alt="line"
                width={200}
                height={8}
                className="w-full h-1 mb-6"
                loading="lazy"
              />
              <div className="flex flex-col gap-4">
                {secVisible.map((faq: any, idx: number) => (
                  <FAQDropdown key={idx} title={faq.question} answer={faq.answer} />
                ))}
              </div>
            </section>
          )}

          {/* Account & Profile Management */}
          {accVisible.length > 0 && (
            <section className="mb-10">
              <div className="flex items-center gap-3 mb-2">
                <h2 className="text-[18px] md:text-[28px] font-medium text-[#000]">
                  Account & Profile Management
                </h2>
              </div>
              <Image
                src={imgLine}
                alt="line"
                width={200}
                height={8}
                className="w-full h-1 mb-6"
                loading="lazy"
              />
              <div className="flex flex-col gap-4">
                {accVisible.map((faq: any, idx: number) => (
                  <FAQDropdown key={idx} title={faq.question} answer={faq.answer} />
                ))}
              </div>
            </section>
          )}

          {/* Support & Complaints */}
          {supVisible.length > 0 && (
            <section className="mb-10">
              <div className="flex items-center gap-3 mb-2">
                <h2 className="text-[18px] md:text-[28px] font-medium text-[#000]">
                  Support & Complaints
                </h2>
              </div>
              <Image
                src={imgLine}
                alt="line"
                width={200}
                height={8}
                className="w-full h-1 mb-6"
                loading="lazy"
              />
              <div className="flex flex-col gap-4">
                {supVisible.map((faq: any, idx: number) => (
                  <FAQDropdown key={idx} title={faq.question} answer={faq.answer} />
                ))}
              </div>
            </section>
          )}

          <div className="flex justify-center mt-8">
            <button
              className="bg-[#1a2238] text-white rounded-full px-8 py-3 font-medium"
              onClick={() => canLoadMore && setVisibleCount((c) => c + PAGE_SIZE)}
              disabled={!canLoadMore}
              aria-disabled={!canLoadMore}
            >
              {canLoadMore ? "Load more FAQs" : "All FAQs loaded"}
            </button>
          </div>
        </main>
    </section>
  );
}
