"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
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
  { code: "CA", name: "Canada", image: "/CA.png" },
  { code: "NG", name: "Nigeria", image: "/NG.png" },
  { code: "TZ", name: "Tanzania", image: "/TZ.png" },
  { code: "GH", name: "Ghana", image: "/GH.png" },
  { code: "KE", name: "Kenya", image: "/KE.png" },
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
            <span className="h-px w-8 bg-gray-300"></span>
            Our services
            <span className="h-px w-8 bg-gray-300"></span>
          </span>
        </h2>

        <div className="grid gap-12 lg:grid-cols-[auto,1fr]">
          {/* Service Tabs */}
          <div className="flex flex-row lg:flex-col gap-5 justify-between">
            {services.map((service) => (
              <button
                key={service.id}
                onClick={() => setActiveTab(service.id)}
                className={`flex md:h-32 md:w-32 h-24 w-24 flex-col items-center justify-center rounded-3xl border transition-colors ${
                  activeTab === service.id
                    ? "border-transparent bg-black text-white"
                    : "border-gray-200 bg-[#EAE8E4] text-gray-600 hover:border-gray-300"
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
            <div className="relative flex items-center justify-center">
              <Image
                src={phone}
                alt="App Interface"
                width={350}
                height={700}
                className=""
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
                <p className="text-[#5A5A5A] font-medium uppercase tracking-wider text-[16px]">
                  INTERNATIONAL MONEY TRANSFER
                </p>
                <h3 className="text-4xl font-medium tracking-tighter leading-[56px] lg:text-[56px]">
                  {activeService.title}
                </h3>
                <div className="space-y-4">
                  <p className="text-[16px] text-[#5A5A5A]">
                    {activeService.description}
                  </p>
                  <p className="text-[16px] text-[#5A5A5A]">
                    {activeService.subtext}
                  </p>
                </div>

                {/* Flags */}
                <div className="space-y-3">
                  <div className="flex gap-2">
                    {flags.map((flag) => (
                      <div
                        key={flag.code}
                        className="h-6 w-6 overflow-hidden rounded-full"
                      >
                       
                        <Image
                          src={flag.image}
                          alt={flag.name}
                          width={24}
                          height={24}
                          className="object-cover"
                        />
                      </div>
                    ))}
                  </div>
                  <p className="text-sm text-gray-500">
                    More countries coming soon!
                  </p>
                </div>

                <Button className="w-fit bg-[#6584DB] px-9 py-4 hover:bg-blue-700 rounded-full font-medium">
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
