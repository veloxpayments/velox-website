"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion, useAnimation, useInView } from "framer-motion";
import QRModal from "./QRModal";

export default function SendMoney() {
  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);
  const isInView1 = useInView(ref1, { once: true, margin: "-100px" });
  const isInView2 = useInView(ref2, { once: true, margin: "-100px" });
  const isInView3 = useInView(ref3, { once: true, margin: "-100px" });
  const controls1 = useAnimation();
  const controls2 = useAnimation();
  const controls3 = useAnimation();

  useEffect(() => {
    if (isInView1) controls1.start({ opacity: 1, y: 0 });
  }, [isInView1, controls1]);

  useEffect(() => {
    if (isInView2) controls2.start({ opacity: 1, y: 0 });
  }, [isInView2, controls2]);

  useEffect(() => {
    if (isInView3) controls3.start({ opacity: 1, y: 0 });
  }, [isInView3, controls3]);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };
  return (
    <section className="w-full py-12 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center space-y-3 text-center">
          <p className="md:text-[40px] text-[#050506] font-medium text-4xl">
            Services That Deliver
          </p>
          <h1 className="text-2xl font-normal text-[#2E2E2E]">
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
                className="relative z-10"
              />
            </div>
            <section className="py-16 px-4 bg-white">
              <div className="max-w-4xl mx-auto">
                <div className="space-y-[16px]">
                  {/* Header text */}
                  <p className="text-sm font-medium text-[#5A5A5A] uppercase">
                    INTERNATIONAL MONEY TRANSFER
                  </p>

                  {/* Main heading */}
                  <h1 className="text-4xl md:text-[44px] font-medium text-[#050506] leading-[44px]">
                    Send money globally without fees
                  </h1>

                  {/* Description paragraphs */}
                  <div className="mx-auto">
                    <p className="text-[16px] text-[#5A5A5A] leading-6 font-normal">
                      Wherever life takes you, we'll always keep you connected
                      to home <br/>
                      Join thousands who trust us, for fast, secure, and
                      effortless international money transfers.
                    </p>
                  </div>

                  {/* Country flags */}
                  <div className="flex  items-center space-x-4 pt-2">
                    {/* Canada flag */}
                    <div className="w-[28px] h-[28px] rounded-full overflow-hidden">
                      <img
                        src="/ca.png"
                        alt="Canada flag"
                        className="w-full h-full object-cover"
                      />
                    </div>

                    {/* Nigeria flag */}
                    <div className="w-[28px] h-[28px] rounded-full overflow-hidden">
                      <img
                        src="/ng.png"
                        alt="Nigeria flag"
                        className="w-full h-full object-cover"
                      />
                    </div>

                    {/* South Africa flag */}
                    <div className="w-[28px] h-[28px] rounded-full overflow-hidden">
                      <img
                        src="/tz.png"
                        alt="South Africa flag"
                        className="w-full h-full object-cover"
                      />
                    </div>

                    {/* Ghana flag */}
                    <div className="w-[28px] h-[28px] rounded-full overflow-hidden">
                      <img
                        src="/gh.png"
                        alt="Ghana flag"
                        className="w-full h-full object-cover"
                      />
                    </div>

                    {/* Kenya flag */}
                    <div className="w-[28px] h-[28px] rounded-full overflow-hidden">
                      <img
                        src="/ke.png"
                        alt="Kenya flag"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>

                  {/* More countries text */}
                  <p className="text-gray-600 font-medium">
                    More countries coming soon!
                  </p>

                  {/* Download button */}
                  <div className="">
                    <button
                      onClick={toggleModal}
                      className="md:w-[156px] bg-[#6584DB] text-white text-[16px] font-medium hover:text-black hover:transition hover:bg-transparent border border-[#6584DB] rounded-full px-6 py-4 font-medium"
                    >
                      Download
                    </button>
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
                className="relative z-10"
              />
            </div>
            <div className="flex flex-col justify-center space-y-4 md:order-1">
              <p className="text-sm font-medium text-[#5A5A5A] uppercase">
                LOWEST EXCHANGE rates
              </p>
              <h2 className="text-3xl font-medium md:text-[44px] text-[#050506] leading-[44px]">
                Best exchange rate on the market
              </h2>
              <p className="text-[16px] text-[#5A5A5A] font-normal leading-6">
                Seamlessly send money from Canada to Africa with Velox—trusted
                by thousands as we expand our fast, secure transfers from the
                USA, UK, and across the continent. Wherever life takes you, we
                connect your world."
              </p>
              <button
                onClick={toggleModal}
                className="md:w-[156px] font-medium bg-[#6584DB] text-white hover:text-black hover:transition hover:bg-transparent border border-[#6584DB] rounded-full px-6 py-4"
              >
                Download
              </button>
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
                className="relative z-10"
              />
            </div>
            <div className="flex flex-col justify-center space-y-4">
              <p className="text-sm font-medium text-[#5A5A5A] uppercase">
                Automate transactions
              </p>
              <h2 className="text-3xl font-medium md:text-[44px] text-[#050506] leading-[44px]">
                Recurring payments for ease
              </h2>
              <p className="text-[16px] text-[#5A5A5A] font-normal leading-6">
                Seamlessly send money from Canada to Africa with Velox—trusted
                by thousands as we expand our fast, secure transfers from the
                USA, UK, and across the continent. Wherever life takes you, we
                connect your world."
              </p>
              <button
                onClick={toggleModal}
                className="md:w-[156px] font-medium bg-[#6584DB] text-white hover:text-black hover:transition hover:bg-transparent border border-[#6584DB] rounded-full px-6 py-4"
              >
                Download
              </button>
            </div>
          </motion.div>
        </div>
      </div>
      {isModalOpen && <QRModal toggleModal={toggleModal} />}
    </section>
  );
}
