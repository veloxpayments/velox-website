"use client";
import React, { useState } from "react";
import Image from "next/image";

const About = () => {
  const missionImage = "/about-images/Mission.svg";
  const yellowUnderline = "/about-images/yellowLine.svg";
  const visionImage = "/about-images/Vision.svg";
  const blueLine = "/about-images/blueLine.svg";
  const customerCentricImage = "/about-images/customerCentricIcon.svg";
  const opennessImage = "/about-images/opennessIcon.svg";
  const respectImage = "/about-images/respectIcon.svg";
  const energyTImage = "/about-images/energyIcon.svg";
  const customer = "/about-images/customer.png";
  const trustImage = "/about-images/trust.svg";
  const stayClose = "/about-images/stayClose.svg";
  const trustConnection = "/about-images/trustConnection.svg";
  const builtForYou = "/about-images/built.svg";
  const headshot = "/about-images/Headshot.png";

  return (
    <div className="w-full bg-[#f7f8fa] flex flex-col items-center pt-7 md:px-0 md:pt-0">
      {/* Hero Section */}
      <section className="w-full px-4 md:px-0">
        <header className="w-full h-[783px] md:h-auto flex flex-col items-center justify-center px-4 md:px-0 pt-12 md:pt-[120px] pb-8 md:pb-0 bg-[#E4EEFE] md:bg-[linear-gradient(110deg,_#F0F3FB_0.23%,_#D1DAF4_99.77%)] rounded-2xl md:rounded-none min-h-[400px] md:min-h-[555px] relative overflow-hidden">
          <div className="max-w-5xl w-full flex flex-col items-center justify-center mx-auto">
            <h1 className="text-[28px] md:text-[56px] font-medium text-center text-[#050506] md:leading-[50px]">
              About Velox Payments
            </h1>
            <p className="text-[16px] md:text-[24px] font-normal text-center text-[#414141] mt-4 md:mt-8 max-w-[80%] md:max-w-3xl mx-auto">
              We&apos;re transforming the way people across the globe send money to
              their loved ones, making it faster, more affordable, and more
              reliable than ever before.
            </p>
            <div className="mt-8 w-[120px] md:w-[250px] bg-[#6584DB] h-[5px] rounded-full"></div>
          </div>
        </header>
      </section>
      {/* Mission Section */}
      <section className="w-full bg-[#fefefe] py-12 md:py-20 flex flex-col md:flex-row items-center justify-center gap-10 md:gap-[157px] px-4">
        <Image
          src={missionImage}
          alt="Mission"
          width={202}
          height={180}
          className="w-[180px] md:w-[202px] h-auto rounded-2xl"
          loading="lazy"
        />
        <div className="max-w-2xl w-full flex flex-col gap-6">
          <div className="flex flex-col items-center md:items-start">
            <h2 className="text-[28px] md:text-[32px] font-bold text-[#2D2D2D] leading-[33px] md:leading-[48px]">
              Our Mission
            </h2>
            <Image
              src={yellowUnderline}
              alt="underline"
              width={98}
              height={8}
              className="w-[98px] h-2 mt-2"
              loading="lazy"
            />
          </div>
          <div className="bg-[#fefdf6] rounded-2xl shadow-md p-6 md:p-10">
            <p className="text-[#1f1f1f] text-[16px] md:text-[24px] leading-[1.5]">
              To facilitate smooth, fast, and easy cross-border money transfers
              by decreasing the time and effort required for currency
              conversion.
            </p>
          </div>
        </div>
      </section>
      {/* Vision Section */}
      <section className="w-full bg-gray-50 py-12 md:py-20 flex flex-col md:flex-row-reverse items-center justify-center gap-10 md:gap-[157px] px-4">
        <Image
          src={visionImage}
          alt="Vision"
          width={213}
          height={180}
          className="w-[180px] md:w-[213px] h-auto rounded-2xl"
          loading="lazy"
        />
        <div className="max-w-2xl w-full flex flex-col gap-6">
          <div className="flex flex-col items-center md:items-start">
            <h2 className="text-[28px] md:text-[32px] font-bold text-[#2D2D2D] leading-[33px] md:leading-[48px]">
              Our Vision
            </h2>
            <Image
              src={yellowUnderline}
              alt="underline"
              width={98}
              height={8}
              className="w-[98px] h-2 mt-2"
              loading="lazy"
            />
          </div>
          <div className="bg-[#fefdf6] rounded-2xl shadow-md p-6 md:p-10">
            <p className="text-[#1f1f1f] text-[16px] md:text-[24px] leading-[1.5]">
              To revolutionize global money transfer one country at a time:
              customer-centric driven.
            </p>
          </div>
        </div>
      </section>
      {/* Core Values Section */}
      <section className="w-full bg-white py-12 md:py-20 flex flex-col items-center px-4">
        <div className="max-w-5xl w-full flex flex-col items-center">
          <h2 className="text-[28px] md:text-[32px] font-bold text-[#2D2D2D] text-center">
            Our Core Values
          </h2>
          <Image
            src={blueLine}
            alt="underline"
            width={98}
            height={8}
            className="w-[98px] h-2 mt-2"
            loading="lazy"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10 w-full">
            {/* Value 1 */}
            <div className="bg-gray-50 rounded-2xl shadow-md p-6 flex flex-col md:flex-row gap-6 items-start">
              <div className="rounded-full flex items-center md:justify-center justify-start w-[155px] h-[55px]">
                <Image
                  src={customerCentricImage}
                  alt="Customer Centric"
                  width={55}
                  height={55}
                  className="w-[55px] h-[55px] object-contain"
                  loading="lazy"
                />
              </div>
              <div>
                <h3 className="text-[18px] md:text-[24px] font-medium text-[#050506]">
                  Customer Centric
                </h3>
                <p className="text-[#252525] text-[16px] md:text-[18px] mt-2">
                  We put customers at the heart of everything we do, guided by
                  sharp business acumen and unwavering focus, in order to
                  deliver solutions that are effective.
                </p>
              </div>
            </div>
            {/* Value 2 */}
            <div className="bg-gray-50 rounded-2xl shadow-md p-6 flex flex-col md:flex-row gap-6 items-start">
              <div className="rounded-full w-[155px] h-[55px] flex items-center md:justify-center justify-start">
                <Image
                  src={opennessImage}
                  alt="Openness"
                  width={55}
                  height={55}
                  className="w-[55px] h-[55px]"
                  loading="lazy"
                />
              </div>
              <div>
                <h3 className="text-[18px] md:text-[24px] font-medium text-[#050506]">
                  Openness
                </h3>
                <p className="text-[#252525] text-[16px] md:text-[18px] mt-2">
                  We value honest communication, active listening, and
                  transparency in decision-making—creating space for trust,
                  clarity, and real connection.
                </p>
              </div>
            </div>
            {/* Value 3 */}
            <div className="bg-gray-50 rounded-2xl shadow-md p-6 flex flex-col md:flex-row gap-6 items-start">
              <div className="rounded-full w-[155px] h-[55px] flex items-center md:justify-center justify-start">
                <Image
                  src={respectImage}
                  alt="Respect"
                  width={55}
                  height={55}
                  className="w-[55px] h-[55px]"
                  loading="lazy"
                />
              </div>
              <div>
                <h3 className="text-[18px] md:text-[24px] font-medium text-[#050506]">
                  Respect
                </h3>
                <p className="text-[#252525] text-[16px] md:text-[18px] mt-2">
                  We embrace diversity and treat everyone with kindness and
                  professionalism. Even in disagreement, we seek constructive,
                  respectful resolutions that strengthen us.
                </p>
              </div>
            </div>
            {/* Value 4 */}
            <div className="bg-gray-50 rounded-2xl shadow-md p-6 flex flex-col md:flex-row gap-6 items-start">
              <div className="rounded-full w-[155px] h-[55px] flex items-center md:justify-center justify-start">
                <Image
                  src={energyTImage}
                  alt="Energy to Energise"
                  width={55}
                  height={55}
                  className="w-[55px] h-[55px]"
                  loading="lazy"
                />
              </div>
              <div>
                <h3 className="text-[18px] md:text-[24px] font-medium text-[#050506]">
                  Energy to Energise
                </h3>
                <p className="text-[#252525] text-[16px] md:text-[18px] mt-2">
                  We show up with resilience and a positive spirit, driving
                  teams forward with momentum by building strong synergies, we
                  turn effort into impactful outcomes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Promise Section */}
      <section className="w-full bg-gray-50 py-12 md:py-20 flex flex-col items-center px-4">
        <div className="max-w-5xl w-full flex flex-col items-center">
          <h2 className="text-[22px] md:text-[32px] font-bold text-[#2D2D2D] text-center">
            Our Promise to You
          </h2>
          <Image
            src={yellowUnderline}
            alt="underline"
            width={98}
            height={8}
            className="w-[98px] h-2 mt-2"
            loading="lazy"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-10 w-full">
            {/* Promise 1 */}
            <div className="bg-[#eeebf7] rounded-2xl shadow-md p-6 flex flex-col items-center text-center">
              <div className="rounded-full w-20 h-20 flex items-center justify-center mb-4">
                <Image
                  src={trustImage}
                  alt="Trust and Care"
                  width={80}
                  height={80}
                  className="w-20 h-20"
                  loading="lazy"
                />
              </div>
              <h3 className="text-[18px] md:text-[22px] font-medium text-[#050506]">
                Trust and Care
              </h3>
              <p className="text-[#393939] text-[14px] md:text-[16px] mt-2">
                We’re more than a platform, we’re a promise you can count on.
              </p>
            </div>
            {/* Promise 2 */}
            <div className="bg-[#ecf4f5] rounded-2xl shadow-md p-6 flex flex-col items-center text-center">
              <div className="rounded-full w-20 h-20 flex items-center justify-center mb-4">
                <Image
                  src={builtForYou}
                  alt="Built for You"
                  width={80}
                  height={80}
                  className="w-20 h-20"
                  loading="lazy"
                />
              </div>
              <h3 className="text-[18px] md:text-[22px] font-medium text-[#050506]">
                Built for You
              </h3>
              <p className="text-[#393939] text-[14px] md:text-[16px] mt-2">
                Every feature is built with your needs at heart.
              </p>
            </div>
            {/* Promise 3 */}
            <div className="bg-[#e8e9eb] rounded-2xl shadow-md p-6 flex flex-col items-center text-center">
              <div className="rounded-full w-20 h-20 flex items-center justify-center mb-4">
                <Image
                  src={stayClose}
                  alt="Stay Close"
                  width={80}
                  height={80}
                  className="w-20 h-20"
                  loading="lazy"
                />
              </div>
              <h3 className="text-[18px] md:text-[22px] font-medium text-[#050506]">
                Stay Close
              </h3>
              <p className="text-[#393939] text-[14px] md:text-[16px] mt-2">
                We help you stay close to the people who matter, no matter the
                distance.
              </p>
            </div>
            {/* Promise 4 */}
            <div className="bg-[#eceef7] rounded-2xl shadow-md p-6 flex flex-col items-center text-center">
              <div className="rounded-full w-20 h-20 flex items-center justify-center mb-4">
                <Image
                  src={trustConnection}
                  alt="Trust & Connection"
                  width={80}
                  height={80}
                  className="w-20 h-20"
                  loading="lazy"
                />
              </div>
              <h3 className="text-[18px] md:text-[22px] font-medium text-[#050506]">
                Trust & Connection
              </h3>
              <p className="text-[#393939] text-[14px] md:text-[16px] mt-2">
                When you use Velox, you’re choosing trust, care, and connection.
              </p>
            </div>
          </div>
        </div>
      </section>
      
    </div>
  );
};

export default About;
