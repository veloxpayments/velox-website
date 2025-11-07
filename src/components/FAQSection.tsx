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
  const [search, setSearch] = useState("");

  // Pre-calc totals to know when to stop
  const totalFaqsCount =
    gettingStartedFaqs.length +
    sendMoneyFaqs.length +
    feesPricingFaqs.length +
    complianceKycFaqs.length +
    coverageFaqs.length +
    beneficiariesFaqs.length +
    securityFaqs.length ;

  // Filter and paginate FAQs by search
  const filterFaqs = (faqs: any[]) =>
    faqs.filter(
      (faq) =>
        faq.question.toLowerCase().includes(search.toLowerCase()) ||
        faq.answer.toLowerCase().includes(search.toLowerCase())
    );

  const {
    gsVisible,
    smVisible,
    fpVisible,
    kycVisible,
    covVisible,
    benVisible,
    secVisible,
    canLoadMore,
  } = useMemo(() => {
    let remaining = visibleCount;

    const take = (arr: any[]) => {
      const filtered = filterFaqs(arr);
      const n = Math.min(filtered.length, Math.max(0, remaining));
      const slice = filtered.slice(0, n);
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
      canLoadMore: visibleCount < totalFaqsCount,
    };
  }, [visibleCount, totalFaqsCount, search]);

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
            value={search}
            onChange={e => setSearch(e.target.value)}
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
                  About Velox & General Information
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

          {/* Compliance & KYC */}
          {kycVisible.length > 0 && (
            <section className="mb-10">
              <div className="flex items-center gap-3 mb-2">
                <h2 className="text-[18px] md:text-[28px] font-medium text-[#000]">
                  Account Setup & Verification (KYC)
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

          {/* Send Money */}
          {smVisible.length > 0 && (
            <section className="mb-10">
              <div className="flex items-center gap-3 mb-2">
                <h2 className="text-[18px] md:text-[28px] font-medium text-[#000]">
                  Funding & Sending Money
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

          {/* New Features & Corridors */}
          {fpVisible.length > 0 && (
            <section className="mb-10">
              <div className="flex items-center gap-3 mb-2">
                <h2 className="text-[18px] md:text-[28px] font-medium text-[#000]">
                  New Features & Corridors
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

          {/* Loyalty Program */}
          {covVisible.length > 0 && (
            <section className="mb-10">
              <div className="flex items-center gap-3 mb-2">
                <h2 className="text-[18px] md:text-[28px] font-medium text-[#000]">
                  Loyalty Program
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

          {/* Security & Safety */}
          {secVisible.length > 0 && (
            <section className="mb-10">
              <div className="flex items-center gap-3 mb-2">
                <h2 className="text-[18px] md:text-[28px] font-medium text-[#000]">
                  Security & Safety
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

          {/* Troubleshooting & Support */}
          {benVisible.length > 0 && (
            <section className="mb-10">
              <div className="flex items-center gap-3 mb-2">
                <h2 className="text-[18px] md:text-[28px] font-medium text-[#000]">
                  Troubleshooting & Support
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

          <div className="flex justify-center mt-8">
            <button
              className={`inline-flex bg-[#1A2238] font-medium text-white hover:text-black hover:transition hover:bg-[#CAB22B] rounded-full px-6 py-4 ${!canLoadMore ? 'opacity-50 disabled hover:bg-gray-500' : ''}`}
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
