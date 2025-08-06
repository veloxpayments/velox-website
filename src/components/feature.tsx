import React from "react";
import { DollarSign, Globe, Zap, Wallet, Clock } from "lucide-react";
import globe from "../../public/globe-img.svg";
import veloxGlobe from "../../public/velox-globe.png";
import Image from "next/image";
import rate from "../../public/exchange-rate-icon.svg";
import zero from '../../public/zero.svg';
import wallet from '../../public/wallet-icon.svg';
import speed from '../../public/speed.svg';
import noun from '../../public/reach.svg';
const FeatureSection = () => {
  return (
    <div>
      <section className="py-16 px-4 bg-[#f8f9fb]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-medium text-[#050506]">
              Why Velox Payments
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Competitive rates */}
            <div className="bg-[#ECF4F5] rounded-3xl p-8 relative overflow-hidden md:min-h-[623px]">
              <div className="bg-[#4059AD] w-14 h-14 md:w-20 md:h-20 rounded-full flex items-center justify-center mb-2 md:mb-6">
                <Image src={rate} alt="" className="m-auto flex" />
              </div>
              <h3 className="text-[22px] md:text-[32px] font-bold text-[#2D2D2D] leading-[33px] md:leading-[48px]">
                Competitive rates
              </h3>
              <p className="text-[#2D2D2D] text-[14px] md:text-[20px] mb-6 font-normal leading-[21px] md:leading-[30px]">
                Transact with low rates
              </p>

              {/* Phone mockup image */}
              <div className="relative flex justify-center">
                <img
                  src="/gif.gif"
                  alt="Mobile app interface"
                  className="md:absolute overflow-hidden object-contain md:left-28"
                />
              </div>
            </div>

            {/* Global reach */}
            <div className="bg-gray-100 rounded-3xl p-8 relative overflow-hidden min-h-[373px] md:min-h-[623px]">
              <div className="bg-[#4059AD] w-14 h-14 md:w-20 md:h-20 rounded-full flex items-center justify-center mb-2 md:mb-6">
                <Image src={noun} alt="" className="m-auto flex justify-center items-center"  />
              </div>
              <h3 className="text-[22px] md:text-[32px] font-bold text-[#2D2D2D] leading-[33px] md:leading-[48px]">
                Global reach
              </h3>
              <p className="text-[#2D2D2D] text-[14px] md:text-[20px] mb-6 font-normal leading-[21px] md:leading-[30px]">Send money globally</p>

              {/* Globe illustration */}
              <div className="relative flex justify-end">
                <Image
                  src={veloxGlobe}
                  alt="Global network visualization"
                  className="object-cover overflow-hidden md:absolute md:-right-24 md:-top-24"
                />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
            {/* Zero Fees */}
            <div className="bg-[#FFFCEA] rounded-3xl p-8">
              <div className="bg-[#4059AD] w-14 h-14 md:w-20 md:h-20 rounded-full flex items-center justify-center mb-2 md:mb-6">
                <Image src={zero} alt=""/>
              </div>
              <h3 className="text-[22px] md:text-[32px] font-bold text-[#2D2D2D] leading-[33px] md:leading-[48px]">
                Zero Fees
              </h3>
              <p className="text-[#2D2D2D] text-[14px] md:text-[20px] mb-6 font-normal leading-[21px] md:leading-[30px]">
                No fixed fees, transaction and conversion fees
              </p>
            </div>

            {/* Multi-wallet account */}
            <div className="bg-[#D9DEEF] rounded-3xl p-8">
              <div className="bg-[#4059AD] w-14 h-14 md:w-20 md:h-20 rounded-full flex items-center justify-center mb-2 md:mb-6">
                <Image src={wallet} alt=""/>
              </div>
              <h3 className="text-[22px] md:text-[32px] font-bold text-[#2D2D2D] leading-[33px] md:leading-[48px]">
                Multi-wallet account
              </h3>
              <p className="text-[#2D2D2D] text-[14px] md:text-[20px] mb-6 font-normal leading-[21px] md:leading-[30px]">Hold money in multiple currencies</p>
            </div>

            {/* Fast Transactions */}
            <div className="bg-[#DED7F0] rounded-3xl p-8">
              <div className="bg-[#4059AD] w-14 h-14 md:w-20 md:h-20 rounded-full flex items-center justify-center mb-2 md:mb-6">
                <Image src={speed} alt="" className="m-auto flex"/>
              </div>
              <h3 className="text-[22px] md:text-[32px] font-bold text-[#2D2D2D] leading-[33px] md:leading-[48px]">
                Fast Transactions
              </h3>
              <p className="text-[#2D2D2D] text-[14px] md:text-[20px] mb-6 font-normal leading-[21px] md:leading-[30px]">
                Send money within seconds of an initiated transaction
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FeatureSection;
