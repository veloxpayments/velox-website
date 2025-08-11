"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

interface FAQDropdownProps {
  title: string;
  answer: string;
}

const FAQDropdown = ({ title, answer }: FAQDropdownProps) => {
  const [open, setOpen] = useState(false);

  const toggle = () => setOpen((prev) => !prev);

  return (
    <div
      className={`rounded-2xl transition-all duration-200 bg-white ${
        open
          ? "border border-[#6584DB] text-[#6584DB]"
          : "border border-gray-200 bg-white hover:border-gray-300"
      }`}
    >
      <button
        onClick={toggle}
        className="w-full px-6 py-5 text-left flex items-center justify-between"
      >
        <span
          className={`text-[16px] md:text-[20px] font-[400] md:font-medium pr-4 ${
            open ? "text-[#6584DB]" : "text-black"
          }`}
        >
          {title}
        </span>
        {open ? (
          <ChevronUp className="w-5 h-5 text-[#6584DB] flex-shrink-0" />
        ) : (
          <ChevronDown className="w-5 h-5 text-gray-400 flex-shrink-0" />
        )}
      </button>
      {open && (
        <div className="px-6 pb-5">
          <p className="text-[#050506] leading-[27px] font-normal text-[16px] md:text-[18px]">
            {answer}
          </p>
        </div>
      )}
    </div>
  );
};

export default FAQDropdown;
