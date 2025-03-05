"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import hand from "../../public/hands.png";
import { motion, useAnimation, useInView } from "framer-motion";

const features = ["Speed -", "Fair Rates -", "No Fees -", "Automation -"];

const sections = [
  {
    title: "Transfer speed",
    description:
      'Since we know that in many love languages, "credit alert" means "I miss you," we\'ve ensured your transfers arrive faster than you can say it.',
    image: "/hands-money.svg",
    imageAlt: "Transfer Speed Illustration",
  },
  {
    title: "Best rates",
    description:
      "We know money can buy happiness if it's the right amount. So, we make sure your loved ones get the most value, for every amount you send.",
    image: "/deposite-money.svg",
    imageAlt: "Best Rates Illustration",
  },
  {
    title: "Zero fees",
    description:
      "No stories, No charges! Every penny you send goes directly to your loved ones. Yup! we're nice like that!",
    image: "/deposite-money.svg",
    imageAlt: "Zero Fees Illustration",
  },
  {
    title: "Automated payments",
    description: "You'll never miss an important transfer again!",
    image: "/hands-money.svg",
    imageAlt: "Automated Payments Illustration",
  },
];

function FeatureSlider() {
    const sliderRef = useRef(null);
    const controls = useAnimation();

  useEffect(() => {
    const startSlider = async () => {
      while (true) {
        await controls.start({ x: "-100%", transition: { duration: 10, ease: "linear" } });
        controls.set({ x: "0%" });
      }
    };
    startSlider();
  }, [controls]);

  return (
    <div className="relative overflow-hidden container max-auto py-4">
    <motion.div
      ref={sliderRef}
      animate={controls}
      className="flex whitespace-nowrap"
      style={{ display: "flex", whiteSpace: "nowrap" }}
    >
      {[...features, ...features].map((feature, index) => (
        <div
          key={index}
          className="mx-4 inline-block text-4xl font-medium text-[#ABB2CA] md:text-[64px]"
        >
          {feature}
        </div>
      ))}
    </motion.div>
  </div>
  );
}

function Section({ title, description, image, imageAlt, isReversed }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start({ opacity: 1, y: 0 });
    }
  }, [isInView, controls]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={controls}
      transition={{ duration: 0.5 }}
      className={`grid md:w-3/4 gap-8 mx-auto md:grid-cols-2 md:gap-8 ${isReversed ? "md:grid-flow-col" : ""}`}
    >
      <div className={`flex flex-col justify-center space-y-4 ${isReversed ? "md:order-2" : ""}`}>
        <h2 className="text-3xl font-medium md:text-4xl text-[#050506]">{title}</h2>
        <p className="text-lg text-[#737373] font-normal">{description}</p>
      </div>
      <div className={`relative  flex items-center justify-center ${isReversed ? "md:order-1" : ""}`}>
        <div className="absolute h-[300px] w-[300px] rounded-full" />
        <Image src={image || "/placeholder.svg"} alt={imageAlt} width={400} height={400} className="relative z-10" />
      </div>
    </motion.div>
  );
}

export default function SendMoney() {
  return (
    <section className="w-full py-12 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center space-y-4 text-center">
          <h1 className="text-2xl font-medium text-[#737373]">A better way to send money</h1>
          <FeatureSlider />
        </div>

        <div className="mt-16 space-y-24 md:mt-24 md:space-y-32">
          {sections.map((section, index) => (
            <Section key={section.title} {...section} isReversed={index % 2 !== 0} />
          ))}
        </div>
      </div>
    </section>
  );
}
