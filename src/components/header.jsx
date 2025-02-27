"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "../components/ui/button";
import { Menu, X, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "../../public/logo.png";
import Image from "next/image";

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
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [hoveredItem, setHoveredItem] = useState(null);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="sticky top-0 z-50 w-full bg-transparent backdrop-blur-sm">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        {/* Logo */}
        <Link href="/" className="text-xl font-bold">
          <Image src={logo} alt="" />
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
              <button className="flex items-center space-x-1 text-[16px] font-medium text-[#737373]">
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
          <Link
            href="/contact"
            className="text-[16px] font-medium text-[#737373]"
          >
            Contact us
          </Link>
        </nav>

        {/* Right Section - Buttons & Mobile Menu Toggle */}
        <div className="flex items-center space-x-4">
          <button
            className="hidden md:inline-flex  bg-black text-white hover:bg-black/90 rounded-full  px-4 py-3"
          >
            Download now
          </button>
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
            className="absolute left-0 right-0 top-16 bg-white shadow-md md:hidden"
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
    </header>
  );
};

export default Header;
