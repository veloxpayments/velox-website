"use client";
import line from "../../public/hero-line.png";
import line2 from "../../public/hero-line-2.png";
import { useState } from "react";
import { Button } from "../components/ui/button";
import {
  Send,
  ArrowLeftRight,
  RefreshCw,
  ArrowLeftSquare,
  ArrowLeftToLine,
} from "lucide-react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import phone from "../../public/send-money.png";

const services = [
  {
    id: "send",
    icon: "/send-icon.png",
    label: "Send",
    title: "Send money globally without fees",
    description:
      "Wherever life takes you, we'll always keep you connected to home",
    subtext:
      "Join thousands who trust us, for fast, secure, and effortless international money transfers.",
  },
  {
    id: "exchange",
    icon: "/left-right.png",
    label: "Exchange",
    title: "Exchange currencies instantly",
    description: "Get the best rates for your currency exchanges",
    subtext:
      "Real-time rates and transparent pricing for all your exchange needs.",
  },
  {
    id: "automate",
    icon: "/automate.png",
    label: "Automate",
    title: "Automate your transfers",
    description: "Set up recurring transfers and never miss a payment",
    subtext: "Schedule your transfers and let us handle the rest.",
  },
];

const flags = [
  {
    code: "CA",
    name: "Canada",
    image: "https://velox-public-images.s3.us-east-1.amazonaws.com/ca_1.svg",
  },
  {
    code: "NG",
    name: "Nigeria",
    image: "https://velox-public-images.s3.us-east-1.amazonaws.com/ng_1.svg",
  },
  {
    code: "TZ",
    name: "Tanzania",
    image: "https://velox-public-images.s3.us-east-1.amazonaws.com/tz_1.svg",
  },
  {
    code: "GH",
    name: "Ghana",
    image: "https://velox-public-images.s3.us-east-1.amazonaws.com/gh_1.svg",
  },
  {
    code: "KE",
    name: "Kenya",
    image: "https://velox-public-images.s3.us-east-1.amazonaws.com/ke_1.svg",
  },
];

const Services = () => {
  const [activeTab, setActiveTab] = useState("send");

  const activeService =
    services.find((service) => service.id === activeTab) || services[0];

  return (
    <section className="md:py-8 bg-[#FEFDF6]">
      <div className="container px-4 mx-auto">
        <h2 className="mb-16 text-center text-2xl font-medium text-black">
          <span className="inline-flex items-center gap-4">
            <Image src={line} alt="" />
            Our services
            <Image src={line2} alt="" />
          </span>
        </h2>

        <div className="grid gap-12 lg:grid-cols-[auto,1fr] md:w-4/5 mx-auto">
          {/* Service Tabs */}
          <div className="flex flex-row lg:flex-col gap-5 justify-between">
            {services.map((service) => (
              <button
                key={service.id}
                onClick={() => setActiveTab(service.id)}
                className={`flex md:h-32 md:w-32 h-24 w-24 text-lg flex-col items-center justify-center rounded-3xl border transition-colors ${
                  activeTab === service.id
                    ? "border-transparent bg-black text-white text-lg"
                    : "border-gray-200 bg-[#EAE8E4] text-white text-lg hover:border-gray-300"
                }`}
              >
                {/* ✅ Correct way to use images */}
                <Image
                  src={service.icon}
                  alt={service.label}
                  width={24}
                  height={24}
                  className="mb-2"
                />
                <span className="text-sm">{service.label}</span>
              </button>
            ))}
          </div>

          {/* Content */}
          <div className="grid gap-8 lg:grid-cols-[1.2fr,1fr] lg:gap-12">
            {/* Phone Mockup */}
            <div className="relative md:h-[620px] flex items-center justify-center">
              <img
                className="h-full"
                style={{
                  display: "block",
                  WebkitUserSelect: "none",
                  margin: "auto",
                  cursor: "zoom-in",
                }}
                src="https://s3-alpha-sig.figma.com/img/3927/b22c/b9b6bf978d271c649601e5c977d12786?Expires=1742169600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=f1oJbsikZk3dnbXZPI-5r79bsZa50k7CNIsvva30VyYO~k7-t~1dJWMx57E7K9CJFE913w1GWpwy8OSLb5mGup1YkfMSyW5JgP0CmLE4dFcn968ktEtkgbBAYaYXD~6q4YaFG0G137KpTwmpYcV5kPBA~3NoLx7TO95zhax4~DLGEClG3vGYEDGsduM-DMYvOPy3ha1Wz8XY5nRWUrj~kR8y9FHsqiq7nhWgzKeiqpJsMuJArx9Em2TeIOU0uTRXmIP9Rjxiw1~cQXEy2eZhBrmsDANpMkgXvTwMGzkR9gVIih-p2egBvrn1u3JtGK6b7wX-29GVu1inqavgIeftwg__"
              />
            </div>

            {/* Text Content */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="flex flex-col justify-center space-y-6"
              >
                <p className="text-[#5A5A5A] font-medium uppercase tracking-wider text-[14px]">
                  INTERNATIONAL MONEY TRANSFER
                </p>
                <h3 className="text-4xl font-medium leading-[56px] md:text-[56px] text-[#050506]">
                  {activeService.title}
                </h3>
                <div className="space-y-4">
                  <p className="text-[18px] leading-6 text-[#5A5A5A]">
                    {activeService.description}
                  </p>
                  <p className="text-[18px] text-[#5A5A5A] leading-6">
                    {activeService.subtext}
                  </p>
                </div>

                {/* Flags */}
                <div className="space-y-3">
                  <div className="flex gap-4">
                    {flags.map((flag) => (
                      <div
                        key={flag.code}
                        className="h-6 w-7 overflow-hidden rounded-full"
                      >
                        <Image
                          src={flag.image}
                          alt={flag.name}
                          width={28}
                          height={24}
                          className="object-cover"
                        />
                      </div>
                    ))}
                  </div>
                  <p className="text-[16px] font-medium text-[#5A5A5A]">
                    More countries coming soon!
                  </p>
                </div>

                <Button className="bg-[#6584DB] border border-[#6584DB] hover:bg-transparent hover:transition-all hover:text-[#6584DB] px-6 py-6 w-fit rounded-full font-medium text-[16px]">
                  Learn more
                </Button>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
