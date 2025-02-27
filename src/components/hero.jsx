"use client";

import Image from "next/image";
import globe from "../../public/hero-globe.png";
import coinone from "../../public/coin-one.png";
import cointwo from "../../public/coin-two.png";

const Hero = () => {
  return (
    <section className="relative md:min-h-[100vh] w-full -top-16 bg-gradient-to-br from-[#FEFBE0] to-[#AFBDE3]">
      {/* Centered Content Container */}
      <div className="container mx-auto px-4 flex md:min-h-[100vh] w-full flex-col-reverse items-center justify-between sm:flex-row pt-[64px] pb-5">
        {/* Left Content */}
        <div className="relative z-10 max-w-[700px] space-y-6 text-center sm:text-left">
          <h1 className="text-5xl font-bold tracking-tight text-black sm:text-6xl lg:text-9xl">
            Securely send Your Love Home
          </h1>
          <p className="text-lg text-black sm:text-xl pb-5">
            Unlock effortless global transfers: fast, recurring, and fee-free
            for a seamless experience.
          </p>
        </div>

        {/* Right Globe Image */}
        <div className="relative w-full max-w-[400px] sm:max-w-[500px] lg:max-w-[700px]">
          <Image
            src={globe}
            alt="Globe Illustration"
            width={700}
            height={700}
            className="w-full object-contain"
            priority
          />
        </div>
      </div>

      {/* Floating Coins */}
      <div className="absolute hidden md:inline-flex left-[10%] bottom-[15%] h-8 w-8 animate-float-delay rounded-full">
        <Image src={cointwo} alt="" />
      </div>
      <div className="absolute hidden md:inline-flex left-[20%] bottom-[10%] h-8 w-8 animate-float rounded-full">
        <Image src={coinone} alt="" />
      </div>

      <div className="absolute hidden md:inline-flex left-[30%] bottom-[5%] h-8 w-8 animate-float-delay-2 rounded-full">
        <Image src={coinone} alt="" />
      </div>

      {/* Tailwind Keyframes Animation */}
      <style jsx>{`
        @keyframes float {
          0% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
          100% {
            transform: translateY(0);
          }
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        .animate-float-delay {
          animation: float 3s ease-in-out infinite 0.5s;
        }
        .animate-float-delay-2 {
          animation: float 3s ease-in-out infinite 1s;
        }
      `}</style>
    </section>
  );
};

export default Hero;
