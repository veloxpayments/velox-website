'use client'
import React, {useState} from "react";


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
    <div className="w-full bg-[#f7f8fa] flex flex-col items-center">
      {/* Hero Section */}
      <section className="w-full min-h-[400px] md:min-h-[555px] flex flex-col items-center justify-center [background:linear-gradient(292deg,_#E0ECFE_0.55%,_#FCFDFF_99.45%)] rounded-2xl md:rounded-none px-4 md:px-0 pt-12 md:pt-[145px] pb-8 md:pb-0">
        <div className="max-w-5xl w-full flex flex-col items-center justify-center mx-auto">
          <h1 className="text-[28px] md:text-[56px] font-medium text-center text-[#050506] md:leading-[50px]">About Velox Payments</h1>
          <p className="text-[16px] md:text-[24px] font-normal text-center text-[#414141] mt-4 md:mt-8 max-w-[80%] md:max-w-3xl mx-auto">
            We're transforming the way people across the globe send money to their loved ones, making it faster, more affordable, and more reliable than ever before.
          </p>
          <div className="mt-8 w-[120px] md:w-[250px] bg-[#6584DB] h-[5px] rounded-full"></div>
        </div>
      </section>
      {/* Mission Section */}
      <section className="w-full bg-[#fefefe] py-12 md:py-20 flex flex-col md:flex-row items-center justify-center gap-10 md:gap-[157px] px-4">
        <img src={missionImage} alt="Mission" className="w-[180px] md:w-[202px] h-auto rounded-2xl" />
        <div className="max-w-2xl w-full flex flex-col gap-6">
          <div>
            <h2 className="text-[22px] md:text-[32px] font-bold text-[#2D2D2D] leading-[33px] md:leading-[48px]">Our Mission</h2>
            <img src={yellowUnderline} alt="underline" className="w-[98px] h-2 mt-2" />
          </div>
          <div className="bg-[#fefdf6] rounded-2xl shadow-md p-6 md:p-10">
            <p className="text-[#1f1f1f] text-[18px] md:text-[24px] leading-[1.5]">
              To facilitate smooth, fast, and easy cross-border money transfers by decreasing the time and effort required for currency conversion.
            </p>
          </div>
        </div>
      </section>
      {/* Vision Section */}
      <section className="w-full bg-gray-50 py-12 md:py-20 flex flex-col md:flex-row-reverse items-center justify-center gap-10 md:gap-[157px] px-4">
        <img src={visionImage} alt="Vision" className="w-[180px] md:w-[213px] h-auto rounded-2xl" />
        <div className="max-w-2xl w-full flex flex-col gap-6">
          <div>
            <h2 className="text-[22px] md:text-[32px] font-bold text-[#2D2D2D] leading-[33px] md:leading-[48px]">Our Vision</h2>
            <img src={yellowUnderline} alt="underline" className="w-[98px] h-2 mt-2" />
          </div>
          <div className="bg-[#fefdf6] rounded-2xl shadow-md p-6 md:p-10">
            <p className="text-[#1f1f1f] text-[18px] md:text-[24px] leading-[1.5]">
              To revolutionize global money transfer one country at a time: customer-centric driven.
            </p>
          </div>
        </div>
      </section>
      {/* Core Values Section */}
      <section className="w-full bg-white py-12 md:py-20 flex flex-col items-center px-4">
        <div className="max-w-5xl w-full flex flex-col items-center">
          <h2 className="text-[22px] md:text-[32px] font-bold text-[#2D2D2D] text-center">Our Core Values</h2>
          <img src={blueLine} alt="underline" className="w-[98px] h-2 mt-2" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10 w-full">
            {/* Value 1 */}
            <div className="bg-gray-50 rounded-2xl shadow-md p-6 flex gap-6 items-start">
              <div className="rounded-full flex items-center justify-center w-[155px] h-[55px]">
                <img src={customerCentricImage} alt="Customer Centric" className="w-[55px] h-[55px] object-contain" />
              </div>
              <div>
                <h3 className="text-[20px] md:text-[24px] font-medium text-[#050506]">Customer Centric</h3>
                <p className="text-[#252525] text-[16px] md:text-[18px] mt-2">We put customers at the heart of everything we do, guided by sharp business acumen and unwavering focus, in order to deliver solutions that are effective.</p>
              </div>
            </div>
            {/* Value 2 */}
            <div className="bg-gray-50 rounded-2xl shadow-md p-6 flex gap-6 items-start">
              <div className="rounded-full w-[155px] h-[55px] flex items-center justify-center">
                <img src={opennessImage} alt="Openness" className="w-[55px] h-[55px]" />
              </div>
              <div>
                <h3 className="text-[20px] md:text-[24px] font-medium text-[#050506]">Openness</h3>
                <p className="text-[#252525] text-[16px] md:text-[18px] mt-2">We value honest communication, active listening, and transparency in decision-making—creating space for trust, clarity, and real connection.</p>
              </div>
            </div>
            {/* Value 3 */}
            <div className="bg-gray-50 rounded-2xl shadow-md p-6 flex gap-6 items-start">
              <div className="rounded-full w-[155px] h-[55px] flex items-center justify-center">
                <img src={respectImage} alt="Respect" className="w-[55px] h-[55px]" />
              </div>
              <div>
                <h3 className="text-[20px] md:text-[24px] font-medium text-[#050506]">Respect</h3>
                <p className="text-[#252525] text-[16px] md:text-[18px] mt-2">We embrace diversity and treat everyone with kindness and professionalism. Even in disagreement, we seek constructive, respectful resolutions that strengthen us.</p>
              </div>
            </div>
            {/* Value 4 */}
            <div className="bg-gray-50 rounded-2xl shadow-md p-6 flex gap-6 items-start">
              <div className="rounded-full w-[155px] h-[55px] flex items-center justify-center">
                <img src={energyTImage} alt="Energy to Energise" className="w-[55px] h-[55px]" />
              </div>
              <div>
                <h3 className="text-[20px] md:text-[24px] font-medium text-[#050506]">Energy to Energise</h3>
                <p className="text-[#252525] text-[16px] md:text-[18px] mt-2">We show up with resilience and a positive spirit, driving teams forward with momentum by building strong synergies, we turn effort into impactful outcomes.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Promise Section */}
      <section className="w-full bg-gray-50 py-12 md:py-20 flex flex-col items-center px-4">
        <div className="max-w-5xl w-full flex flex-col items-center">
          <h2 className="text-[22px] md:text-[32px] font-bold text-[#2D2D2D] text-center">Our Promise to You</h2>
          <img src={yellowUnderline} alt="underline" className="w-[98px] h-2 mt-2" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-10 w-full">
            {/* Promise 1 */}
            <div className="bg-[#eeebf7] rounded-2xl shadow-md p-6 flex flex-col items-center text-center">
              <div className="rounded-full w-20 h-20 flex items-center justify-center mb-4">
                <img src={trustImage} alt="Trust and Care" className="w-20 h-20" />
              </div>
              <h3 className="text-[18px] md:text-[22px] font-medium text-[#050506]">Trust and Care</h3>
              <p className="text-[#393939] text-[14px] md:text-[16px] mt-2">We’re more than a platform, we’re a promise you can count on.</p>
            </div>
            {/* Promise 2 */}
            <div className="bg-[#ecf4f5] rounded-2xl shadow-md p-6 flex flex-col items-center text-center">
              <div className="rounded-full w-20 h-20 flex items-center justify-center mb-4">
                <img src={builtForYou} alt="Built for You" className="w-20 h-20" />
              </div>
              <h3 className="text-[18px] md:text-[22px] font-medium text-[#050506]">Built for You</h3>
              <p className="text-[#393939] text-[14px] md:text-[16px] mt-2">Every feature is built with your needs at heart.</p>
            </div>
            {/* Promise 3 */}
            <div className="bg-[#e8e9eb] rounded-2xl shadow-md p-6 flex flex-col items-center text-center">
              <div className="rounded-full w-20 h-20 flex items-center justify-center mb-4">
                <img src={stayClose} alt="Stay Close" className="w-20 h-20" />
              </div>
              <h3 className="text-[18px] md:text-[22px] font-medium text-[#050506]">Stay Close</h3>
              <p className="text-[#393939] text-[14px] md:text-[16px] mt-2">We help you stay close to the people who matter, no matter the distance.</p>
            </div>
            {/* Promise 4 */}
            <div className="bg-[#eceef7] rounded-2xl shadow-md p-6 flex flex-col items-center text-center">
              <div className="rounded-full w-20 h-20 flex items-center justify-center mb-4">
                <img src={trustConnection} alt="Trust & Connection" className="w-20 h-20" />
              </div>
              <h3 className="text-[18px] md:text-[22px] font-medium text-[#050506]">Trust & Connection</h3>
              <p className="text-[#393939] text-[14px] md:text-[16px] mt-2">When you use Velox, you’re choosing trust, care, and connection.</p>
            </div>
          </div>
        </div>
      </section>
      {/* Leadership Section */}
      <section className="w-full bg-[#fefdf6] py-12 md:py-20 flex flex-col items-center px-4">
        <div className="max-w-6xl md:max-w-full w-full flex flex-col items-center">
          <h2 className="text-[22px] md:text-[32px] font-bold text-[#2D2D2D] text-center">Our Leadership Team</h2>
          <img src={blueLine} alt="underline" className="w-[98px] h-2 mt-2" />
          <p className="text-[#1f1f1f] text-[16px] md:text-[24px] text-center mt-4">Meet the experienced leaders driving our vision and mission forward.</p>
          {/* Leadership Slider */}
          {(() => {
            const leaders = [
              { name: "Paul Adebayo", title: "Captain of Chaos", img: headshot },
              { name: "Abdulrahman Atta", title: "Chief Technical Officer", img: headshot },
              { name: "Tolulope Eweniyi", title: "Head of Operations", img: headshot },
              { name: "Tolulope Eweniyi", title: "Head of Operations", img: headshot },
              { name: "Tolulope Eweniyi", title: "Head of Operations", img: headshot },
              { name: "Tolulope Eweniyi", title: "Head of Operations", img: headshot },
              { name: "Tolulope Eweniyi", title: "Head of Operations", img: headshot },
              { name: "Tolulope Eweniyi", title: "Head of Operations", img: headshot },
            ];
            const [scrollRef, setScrollRef] = useState(null);
            const scrollBy = 1; // number of cards to scroll per click
            const handleLeft = () => {
              if (scrollRef) {
                const card = scrollRef.querySelector('.leader-card');
                if (card) scrollRef.scrollBy({ left: -card.offsetWidth - 32, behavior: 'smooth' });
              }
            };
            const handleRight = () => {
              if (scrollRef) {
                const card = scrollRef.querySelector('.leader-card');
                if (card) scrollRef.scrollBy({ left: card.offsetWidth + 32, behavior: 'smooth' });
              }
            };
            return (
              <div className="relative w-full md:max-w-[90vw] mt-10 flex flex-col items-center">
                <div
                  className="flex gap-24 overflow-x-auto scrollbar-hide w-full snap-x snap-mandatory px-1 hide-x-scrollbar"
                  ref={setScrollRef}
                  tabIndex={0}
                  style={{ scrollBehavior: 'smooth' }}
                >
                  {leaders.map((leader, idx) => (
                    <div
                      key={leader.name + idx}
                      className="leader-card flex flex-col items-start min-w-[220px] max-w-[296px] w-full snap-start"
                    >
                      <div className="w-[180px] h-[180px] md:w-[296px] md:h-[340px] rounded-2xl bg-cover bg-center" style={{ backgroundImage: `url(${leader.img})` }} />
                      <h3 className="text-[18px] md:text-[24px] font-medium text-[#000] mt-4">{leader.name}</h3>
                      <p className="text-[14px] md:text-[18px] text-neutral-500">{leader.title}</p>
                    </div>
                  ))}
                </div>
                <div className="flex gap-4 justify-center self-end mt-6">
                  <button
                    onClick={handleLeft}
                    aria-label="Previous"
                    className={`bg-white border border-gray-300 rounded-full p-2 shadow transition`}
                  >
                    <svg width="24" height="24" fill="none" viewBox="0 0 24 24"><path d="M15 19l-7-7 7-7" stroke="#222" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  </button>
                  <button
                    onClick={handleRight}
                    aria-label="Next"
                    className={`bg-white border border-gray-300 rounded-full p-2 shadow transition`}
                  >
                    <svg width="24" height="24" fill="none" viewBox="0 0 24 24"><path d="M9 5l7 7-7 7" stroke="#222" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  </button>
                </div>
                <style>{`
                  .hide-x-scrollbar {
                    scrollbar-width: none;
                    -ms-overflow-style: none;
                  }
                  .hide-x-scrollbar::-webkit-scrollbar {
                    display: none;
                  }
                `}</style>
              </div>
            );
          })()}
        </div>
      </section>
    </div>
  );
};

export default About;
