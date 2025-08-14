"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "./ui/button";
import { Menu, X, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "../../public/yellow-logo.svg";
import Image from "next/image";
import DownloadButton from "./buttons/download-button";

const chevronRight = "/chevronRight.svg";
const veloxLogo = "/veloxDrawerLogo.svg";
const veloxName = "/veloxName.svg";

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
        icon: "/header-dropdown/Referral.svg",
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

export function DrawerMenu({ onClose }: { onClose: () => void }) {
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  return (
    <div className="bg-[#ffffff] h-full w-full overflow-clip relative rounded-br-[20px] rounded-tr-[20px] flex flex-col pt-10 pl-6">
      <div className="flex flex-row gap-[7px] items-center justify-start pr-4 py-4">
        <img src={veloxLogo} alt="logo" className="h-[26px] w-[24px]" />
        <img src={veloxName} alt="logo text" className="h-[18px] w-[58px]" />
        <button className="ml-auto text-gray-500" onClick={onClose} aria-label="Close menu">
          <X className="h-6 w-6" />
        </button>
      </div>
      <div className="flex flex-col gap-4 items-start justify-center px-2 py-4 w-full">
        {navItems.map((item, idx) => (
          <div key={item.label} className="w-full">
            <button
              className="flex flex-row items-center w-full py-2 text-[18px] text-[#393939] font-satoshi font-medium"
              onClick={() => setOpenMenu(openMenu === item.label ? null : item.label)}
              aria-expanded={openMenu === item.label}
            >
              <img
                src={chevronRight}
                alt="expand"
                className={`h-6 w-6 pb-[3px] transition-transform ${openMenu === item.label ? "rotate-180" : "hidden"}`}
              />
              {item.label}
              <img
                src={chevronRight}
                alt="expand"
                className={`h-6 w-6 pb-[3px] transition-transform ${openMenu === item.label ? "rotate-180 hidden" : ""}`}
              />
            </button>
            <AnimatePresence>
              {openMenu === item.label && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="pl-2"
                >
                  {item.items.map((subItem) => (
                    <Link
                      key={subItem.title}
                      href={subItem.link}
                      className="flex items-center gap-3 px-2 py-2 rounded-lg text-[16px] text-[#393939] hover:bg-[#f8f9fb]"
                      onClick={onClose}
                    >
                      <div className="flex flex-col">
                        <span className="font-medium">{subItem.title}</span>
                      </div>
                    </Link>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </div>
  );
}

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
    <>
      <AnimatePresence>
        {isMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 z-40 lg:hidden"
              style={{ background: "#6584DB59" }}
            />
            <motion.div
              initial={{ x: -300, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -300, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed top-0 left-0 h-screen w-[260px] bg-white shadow-lg z-50 rounded-br-[20px] rounded-tr-[20px] lg:hidden"
            >
              <DrawerMenu onClose={() => setIsMenuOpen(false)} />
            </motion.div>
          </>
        )}
      </AnimatePresence>
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

  {/* ...existing code... (Mobile Navigation now handled above) */}

      </div>
    </>
  );
};

export default Header;
