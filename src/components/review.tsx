"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import quote from "../../public/quote.svg";
import quotefilled from "../../public/quote-filled.png";

import { LucideQuote, LucideTextQuote, Quote } from "lucide-react";

const reviews = [
  {
    name: "Veronica Veritson",
    text: "I love the Velox app so much, it makes me feel like I can fly",
    image: "/review-pic.svg", // Replace with actual image path
    highlighted: false,
  },
  {
    name: "Veronica Veritson",
    text: "I love the Velox app so much, it makes me feel like I can fly",
    image: "/review-pic.svg",
    highlighted: true,
  },
  {
    name: "Veronica Veritson",
    text: "I love the Velox app so much, it makes me feel like I can fly",
    image: "/review-pic.svg",
    highlighted: false,
  },
  {
    name: "Veronica Veritson",
    text: "I love the Velox app so much, it makes me feel like I can fly",
    image: "/review-pic.svg",
    highlighted: true,
  },
];

const ReviewSection = () => {
  return (
    <section className="relative flex items-center justify-center bg-[#F8F9FB] py-20 px-6 mx-auto overflow-hidden">
      <div className="container mx-auto md:w-3/4 flex flex-col md:flex-row items-center justify-between w-full">
        {/* Left Side */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="w-full md:w-1/2 text-center md:text-left"
        >
          <h2 className="text-4xl md:text-5xl leading-[64px] font-bold text-black">
            What our customers are saying
          </h2>
          <button className="mt-6 px-6 py-3 bg-[#6584DB] border border-[#6584DB] hover:bg-transparent hover:transition-all hover:text-[#6584DB] text-white rounded-full text-[16px] font-medium">
            View more
          </button>
        </motion.div>

        {/* Right Side - Reviews */}
        <div className="relative w-full mt-12 md:mt-0 flex flex-col items-center space-y-6">
          {reviews.map((review, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className={`relative flex items-center p-6 bg-white w-full md:max-w-md ${
                review.highlighted
                  ? "border-l-4 border-[#7B87E6] md:right-10"
                  : "border-l-4 border-[#B9B9BB]"
              }`}
            >
              <Image
                src={review.image}
                alt={review.name}
                width={64}
                height={64}
                className="rounded-full mr-4"
              />
              <div>
                <h3 className="font-semibold text-black">{review.name}</h3>
                <p className="text-[#737373]">{review.text}</p>
              </div>

              <Image
                src={review.highlighted ? quotefilled : quote}
                alt="Quote"
                className="absolute top-4 right-4 w-6 h-6"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReviewSection;
