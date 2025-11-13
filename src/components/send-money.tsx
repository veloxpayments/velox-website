"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion, useAnimation, useInView } from "framer-motion";
import DownloadButton from "./buttons/download-button";

export default function SendMoney() {
  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);
  const ref4 = useRef(null);
  const isInView1 = useInView(ref1, { once: true, margin: "-100px" });
  const isInView2 = useInView(ref2, { once: true, margin: "-100px" });
  const isInView3 = useInView(ref3, { once: true, margin: "-100px" });
  const isInView4 = useInView(ref4, { once: true, margin: "-100px" });
  const controls1 = useAnimation();
  const controls2 = useAnimation();
  const controls3 = useAnimation();
  const controls4 = useAnimation();

  useEffect(() => {
    if (isInView1) controls1.start({ opacity: 1, y: 0 });
    if (isInView2) controls2.start({ opacity: 1, y: 0 });
    if (isInView3) controls3.start({ opacity: 1, y: 0 });
    if (isInView4) controls4.start({ opacity: 1, y: 0 });
  }, [isInView1, controls1, isInView2, controls2, isInView3, controls3, isInView4, controls4]);

  useEffect(() => {
    if (window.location.hash === "#send-money") {
      const el = document.getElementById("send-money");
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }
    if (window.location.hash === "#recurring-payment") {
      const el = document.getElementById("recurring-payment");
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, []);

  return (
    <section className="w-full py-12 md:py-24" id="send-money">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center space-y-3 text-center">
          <p className="text-[24px] md:text-[40px] text-[#050506] font-medium text-4xl">
            Services That Deliver
          </p>
          <h1 className="text-[16px] md:text-2xl font-normal text-[#2E2E2E]">
            Explore services designed to elevate every step of your journey
          </h1>
        </div>

        <div className="mt-16 space-y-24 md:mt-24 md:space-y-32">
          {/* Transfer Speed Section */}
          <motion.div
            ref={ref1}
            initial={{ opacity: 0, y: 50 }}
            animate={controls1}
            transition={{ duration: 0.5 }}
            className="grid md:w-3/4 gap-8 mx-auto md:grid-cols-2 md:gap-8"
          >
            <div className="relative flex items-center justify-center">
              <div className="absolute h-[300px] w-[300px] rounded-full" />
              <Image
                src="/services.svg"
                alt="Transfer Speed Illustration"
                width={427}
                height={427}
                className="relative z-1"
              />
            </div>
            <section className="md:py-16 px-4 bg-white">
              <div className="max-w-4xl mx-auto">
                <div className="space-y-[16px]">
                  {/* Header text */}
                  <p className="text-[12px] md:text-sm font-medium text-[#5A5A5A] uppercase">
                    INTERNATIONAL MONEY TRANSFER
                  </p>

                  {/* Main heading */}
                  <h1 className="text-[24px] md:text-[44px] font-medium text-[#050506] leading-[24px] md:leading-[44px]">
                    Send money globally without fees
                  </h1>

                  {/* Description paragraphs */}
                  <div className="mx-auto">
                    <p className="text-[16px] text-[#5A5A5A] leading-6 font-normal">
                      Wherever life takes you, we&apos;ll always keep you connected
                      to home. <br />
                      Join thousands who trust us, for fast, secure, and
                      effortless international money transfers.
                    </p>
                  </div>

                  {/* Country flags */}
                  <div className="flex  items-center space-x-4 pt-2">
                    {/* Canada flag */}
                    <div className="w-[28px] h-[28px] rounded-full overflow-hidden">
                      <Image
                        src="/ca.png"
                        alt="Canada flag"
                        width={28}
                        height={28}
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                    </div>

                    {/* Nigeria flag */}
                    <div className="w-[28px] h-[28px] rounded-full overflow-hidden">
                      <Image
                        src="/ng.png"
                        alt="Nigeria flag"
                        width={28}
                        height={28}
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                    </div>

                    {/* South Africa flag */}
                    <div className="w-[28px] h-[28px] rounded-full overflow-hidden">
                      <Image
                        src="/tz.png"
                        alt="South Africa flag"
                        width={28}
                        height={28}
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                    </div>

                    {/* Ghana flag */}
                    <div className="w-[28px] h-[28px] rounded-full overflow-hidden">
                      <Image
                        src="/gh.png"
                        alt="Ghana flag"
                        width={28}
                        height={28}
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                    </div>

                    {/* Kenya flag */}
                    <div className="w-[28px] h-[28px] rounded-full overflow-hidden">
                      <Image
                        src="/ke.png"
                        alt="Kenya flag"
                        width={28}
                        height={28}
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                    </div>

                    {/* UK flag */}
                    <div className="w-[28px] h-[28px] rounded-full overflow-hidden">
                      <Image
                        src="/uk.svg"
                        alt="UK flag"
                        width={28}
                        height={28}
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                    </div>
                  </div>

                  {/* More countries text */}
                  <p className="text-gray-600 font-medium">
                    More countries coming soon!
                  </p>

                  {/* Download button */}
                  <div className="">
                    <DownloadButton variant="secondary" />
                  </div>
                </div>
              </div>
            </section>
          </motion.div>

          {/* Best Rates Section */}
          <motion.div
            ref={ref2}
            initial={{ opacity: 0, y: 50 }}
            animate={controls2}
            transition={{ duration: 0.5 }}
            className="grid md:w-3/4 gap-8 mx-auto md:grid-cols-2 md:gap-8 md:grid-flow-col"
          >
            <div className="relative flex items-center justify-center md:order-2">
              <div className="absolute h-[300px] w-[300px] rounded-full" />
              <Image
                src="/services-two.svg"
                alt="Best Rates Illustration"
                width={427}
                height={427}
                className="relative z-1"
              />
            </div>
            <div className="flex flex-col justify-center space-y-4 md:order-1">
              <p className="text-[12px] md:text-sm font-medium text-[#5A5A5A] uppercase">
                LOWEST EXCHANGE RATES
              </p>
              <h2 className="text-[24px] font-medium md:text-[44px] text-[#050506] leading-[24px] md:leading-[44px]">
                Best exchange rate on the market
              </h2>
              <p className="text-[16px] text-[#5A5A5A] font-normal leading-6">
                We keep it real, and that includes our rates. Get daily exchange
                rate alerts, so you always know the perfect time to send money,
                save more and stress less.
              </p>
              {/* Download button */}
              <div className="" id="recurring-payment">
                <DownloadButton variant="secondary" />
              </div>
            </div>
          </motion.div>

          {/* Zero Fees Section */}
          <motion.div
            ref={ref3}
            initial={{ opacity: 0, y: 50 }}
            animate={controls3}
            transition={{ duration: 0.5 }}
            className="grid md:w-3/4 gap-8 mx-auto md:grid-cols-2 md:gap-8"
          >
            <div className="relative flex items-center justify-center">
              <div className="absolute h-[300px] w-[300px] rounded-full" />
              <Image
                src="/recurring-transfer.svg"
                alt="Zero Fees Illustration"
                width={427}
                height={427}
                className="relative z-1"
              />
            </div>
            <div className="flex flex-col justify-center space-y-4">
              <p className="text-[12px] md:text-sm font-medium text-[#5A5A5A] uppercase">
                Automate transactions
              </p>
              <h2 className="text-[24px] font-medium md:text-[44px] text-[#050506] leading-[24px] md:leading-[44px]">
                Recurring payments for ease
              </h2>
              <p className="text-[16px] text-[#5A5A5A] font-normal leading-6">
                Never miss a birthday, rent or a monthly commitment. Automate
                your transfers with zero fees and great rates. Stay consistent,
                connected and carefree across borders.
              </p>
              {/* Download button */}
              <div className="">
                <DownloadButton variant="secondary" />
              </div>
            </div>
          </motion.div>

          {/* Loyalty Points Section */}
          <motion.div
            ref={ref4}
            initial={{ opacity: 0, y: 50 }}
            animate={controls4}
            transition={{ duration: 0.5 }}
            className="grid md:w-3/4 gap-8 mx-auto md:grid-cols-2 md:gap-8 md:grid-flow-col"
          >
            <div className="relative flex items-center justify-center md:order-2">
              <div className="absolute h-[300px] w-[300px] rounded-full" />
              <Image
                src="/services-three.svg"
                alt="Best Rates Illustration"
                width={427}
                height={427}
                className="relative z-1"
              />
            </div>
            <div className="flex flex-col justify-center space-y-4 md:order-1">
              <p className="text-[12px] md:text-sm font-medium text-[#5A5A5A] uppercase">
                LOYALTY POINTS
              </p>
              <h2 className="text-[24px] font-medium md:text-[44px] text-[#050506] leading-[24px] md:leading-[44px]">
                Earn points while you spend
              </h2>
              <p className="text-[16px] text-[#5A5A5A] font-normal leading-6">
                Each time you send money, you earn loyalty points you can redeem later. Because adulting deserves rewards.
              </p>
              {/* Download button */}
              <div className="" id="recurring-payment">
                <DownloadButton variant="secondary" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
