"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "./ui/button";
import { Menu, X, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "../../public/yellow-logo.svg";
import Image from "next/image";
import QRModal from "./modals/QRModal";
import DownloadButton from "./buttons/download-button";

const navItems = [
  {
    label: "Products",
    items: [
      {
        title: "International Money Transfer",
        subtitle: "Cross-border payments made easy",
        icon: "/header-dropdown/international-money.svg",
        link: "/",
      },
      {
        title: "Recurring Payments",
        subtitle: "Create wallets in different currencies",
        icon: "/header-dropdown/recurring-payments.svg",
        link: "/",
      },
      {
        title: "Referral",
        subtitle: "Refer and earn",
        icon: "/header-dropdown/referral.svg",
        link: "/referral",
      },
    ],
  },
  {
    label: "Company",
    items: [
      {
        title: "About Us",
        subtitle: "Learn more about who we are at Velox Payments",
        icon: "/header-dropdown/About-us.svg",
        link: "/about",
      },
      {
        title: "Careers",
        subtitle: "Join our team and be a part of the Velox adventure",
        icon: "/header-dropdown/careers.svg",
        link: "/careers",
      },
      {
        title: "Privacy Policy",
        subtitle: "Our privacy policy",
        icon: "/header-dropdown/privacy.svg",
        link: "/privacy",
      },
      {
        title: "Terms of service",
        subtitle: "Our terms of service",
        icon: "/header-dropdown/terms.svg",
        link: "/terms",
      },
    ],
  },
  {
    label: "Resources",
    items: [
      {
        title: "Blog",
        subtitle: "Read articles concerning finance and busniess",
        icon: "/header-dropdown/blogs.svg",
        link: "/blog",
      },
      {
        title: "CAP",
        subtitle: "Join the Velox Community Ambassadors",
        icon: "/header-dropdown/CAP.svg",
        link: "/CAP",
      },
    ],
  },
  {
    label: "Contact Us",
    items: [
      {
        title: "FAQs",
        subtitle: "Find answers to common questions you might have",
        icon: "/header-dropdown/FAQs.svg",
        link: "/FAQs",
      },
      {
        title: "Talk to us",
        subtitle: "Get the help you need with our support team",
        icon: "/header-dropdown/talk-to-us.svg",
        link: "/contact",
      },
    ],
  },
];

const headerVariants = {
  absolute: {
    position: "absolute",
    top: 0,
    opacity: 1,
    transition: { duration: 0.5, ease: "easeInOut" },
  },
  sticky: {
    position: "fixed",
    top: 0,
    opacity: 1,
    transition: { duration: 0.5, ease: "easeInOut" },
  },
};

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [hoveredItem, setHoveredItem] = useState(null);
  const [isSticky, setIsSticky] = useState(false); // State to track sticky positioning

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  // Handle scroll event to toggle sticky positioning
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll); // Cleanup
  }, []);

  return (
    <div className="container mx-auto bg-white absolute top-10 right-0 left-0 z-10 max-w-[80vw] py-[15px] px-[40px] rounded-xl">
      <div className="flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="text-xl font-bold">
          <Image src={logo} alt="Logo" />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex md:space-x-6">
          {navItems.map((item) => (
            <div
              key={item.label}
              className="relative"
              onMouseEnter={() => setHoveredItem(item.label)}
              onMouseLeave={() => setHoveredItem(null)}
            >
              <button className="flex items-center space-x-1 text-[16px] font-normal text-[#393939] hover:text-black hover:font-semibold transition-colors duration-200">
                <span>{item.label}</span>
                <ChevronDown
                  className={`h-4 w-4 transition-transform duration-200 ${
                    hoveredItem === item.label ? "rotate-180" : ""
                  }`}
                />
              </button>

              <AnimatePresence>
                {hoveredItem === item.label && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute left-0 mt-2 px-6 py-[37px] rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5"
                  >
                    <div className="py-1 w-96 space-y-8" role="menu">
                      {item.items.map((subItem) => (
                        <Link
                          key={subItem.title}
                          href={subItem.link}
                          className="flex items-center gap-3 px-4 py-2 hover:bg-[#FCDE2F20] rounded-lg transition"
                          role="menuitem"
                        >
                          <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center bg-blue-50 rounded-full">
                            <Image
                              src={subItem.icon}
                              alt={subItem.title}
                              width={40}
                              height={40}
                            />
                          </div>
                          <div className="flex-1">
                            <div className="font-500 font-Satoshi text-black text-[16px] mb-1">
                              {subItem.title}
                            </div>
                            <div className="text-[14px] font-Satoshi text-[#737373]">
                              {subItem.subtitle}
                            </div>
                          </div>
                          <span className="ml-auto text-gray-300">
                            <svg width="20" height="20" fill="none">
                              <path
                                d="M8 6l4 4-4 4"
                                stroke="#000000"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                          </span>
                        </Link>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </nav>

        {/* Right Section - Buttons & Mobile Menu Toggle */}
        <div className="flex items-center space-x-4">
          <div className="hidden md:inline-flex">
            <DownloadButton variant="primary" />
          </div>

          <button className="lg:hidden" onClick={toggleMenu}>
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="absolute left-0 right-0 top-20 bg-white shadow-md lg:hidden z-50"
          >
            <div className="container mx-auto flex flex-col space-y-4 p-4">
              {navItems.map((item) => (
                <details key={item.label} className="group">
                  <summary className="flex cursor-pointer items-center justify-between py-2 text-sm font-medium">
                    {item.label}
                    <ChevronDown className="h-4 w-4 transition-transform group-open:rotate-180" />
                  </summary>
                  <div className="flex flex-col space-y-2 pl-4">
                    {item.items.map((subItem) => (
                      <Link
                        key={subItem.title}
                        href={subItem.link}
                        className="text-sm text-gray-700 hover:text-gray-900"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {subItem.title}
                      </Link>
                    ))}
                  </div>
                </details>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Header;
