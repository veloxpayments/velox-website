"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "./ui/button";
import { Menu, X, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "../../public/yellow-logo.svg";
import Image from "next/image";
import QRModal from "./QRModal";
import DownloadButton from "./ui/download-button";

const navItems = [
  {
    label: "Products",
    items: ["Product 1", "Product 2", "Product 3"],
  },
  {
    label: "Company",
    items: ["About Us", "Careers", "Press"],
  },
  {
    label: "Resources",
    items: ["Blog", "Help Center", "API Docs"],
  },
  {
    label: "Contact Us",
    items: ["Contact 1", "Contact 2", "Contact 3"],
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
    <div className="container mx-auto bg-white md:absolute top-10 right-0 left-0 z-50  py-[15px] px-[40px] rounded-xl">
      <div className="flex  items-center justify-between">
        {/* Logo */}
        <Link href="/" className="text-xl font-bold">
          <Image src={logo} alt="Logo" />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex md:space-x-6">
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
                    className="absolute left-0 mt-2 w-48 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5"
                  >
                    <div className="py-1" role="menu">
                      {item.items.map((subItem) => (
                        <Link
                          key={subItem}
                          href="#"
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                          role="menuitem"
                        >
                          {subItem}
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
          <DownloadButton variant="primary" />
          <button className="md:hidden" onClick={toggleMenu}>
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
            className="absolute left-0 right-0 top-16 bg-white shadow-md md:hidden z-50"
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
                        key={subItem}
                        href="#"
                        className="text-sm text-gray-700 hover:text-gray-900"
                      >
                        {subItem}
                      </Link>
                    ))}
                  </div>
                </details>
              ))}
              <Link href="/contact" className="text-sm font-medium">
                Contact us
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Header;
