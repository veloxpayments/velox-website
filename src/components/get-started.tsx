"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const steps = [
  {
    title: "Create Your Account:",
    description: "Sign up quick and easy.",
    proTip: "Pro tip: Use the same name as on your ID for a smooth process.",
  },
  {
    title: "Upload Your Documents:",
    description: "Provide clear, matching identification, and you're all set.",
  },
  {
    title: "Fund Your Wallet:",
    description: "Load your wallet securely with the funds you need.",
  },
  {
    title: "Start Transacting:",
    description:
      "Send money in multiple currencies with just a tap—fast, secure, and completely free.",
  },
];

const GetStarted = () => {
  return (
    <section className="w-full overflow-hidden py-24 bg-[#FEFDF6]">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-16">
          {/* Phone Mockup */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="relative mx-auto"
          >
            {/* Background Rectangles */}

            {/* Phone Image */}
            <div className="relative z-10">
              <Image
                src="/Mobile.svg"
                alt="Registration Form"
                width={547}
                height={665}
                className=""
              />
            </div>
          </motion.div>

          {/* Steps */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="flex flex-col justify-center"
          >
            <h2 className="mb-8 text-[30px] font-medium text-[#050506]">
              Get Started in 4 Simple Steps
            </h2>

            <div className="relative flex flex-col space-y-8">
              {/* Vertical Timeline Line */}
              <div className="absolute left-[7px] top-10 h-[calc(100%-140px)] w-[2px] border-l-2 border-dotted border-black md:inline-flex hidden"></div>

              {/* Steps */}
              {steps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="relative flex gap-6"
                >
                  {/* Timeline Dot */}
                  <div className="relative z-10 mt-2 h-4 w-4 rounded-full bg-black md:inline-flex hidden"></div>

                  {/* Content */}
                  <div className="flex flex-col space-y-2 pb-2 md:w-[250px]">
                    <h3 className="text-lg font-medium text-black">
                      {step.title}
                    </h3>
                    <p className="text-[#737373]">{step.description}</p>
                    {step.proTip && (
                      <p className="text-[#737373] italic">({step.proTip})</p>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default GetStarted;
