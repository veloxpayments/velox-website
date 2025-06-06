"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import coin from "../../public/coin-one.png";
import Link from "next/link";
import { Input } from "../components/ui/input";
import { Button } from "../components/ui/button";
import {
  Facebook,
  Twitter,
  Linkedin,
  TwitterIcon as TikTok,
  FileText,
} from "lucide-react";

function FloatingCoin({ className }) {
  return (
    <motion.div
      className={className}
      animate={{
        y: [0, -20, 0],
        rotate: [0, 15, -15, 0],
      }}
      transition={{
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      <Image src={coin} alt="Floating coin" width={40} height={40} />
    </motion.div>
  );
}

export default function Footer() {
  return (
    <footer className="bg-[#6584DB] text-white ">
      {/* Top Banner */}
      <div
        className="relative footer-bg top-10 container overflow-hidden rounded-[16px] border mx-4 md:mx-auto mt-16 mb-12"
        style={{ backgroundImage: `url('/footer-bg.svg')` }}
      >
        <div className="container mx-auto px-4 py-16 md:px-[100px] relative z-10 md:flex items-center justify-between">
          <div>
            <p className="text-sm mb-4">GET READY FOR EASE</p>
            <h2 className="text-3xl md:text-[50px] font-bold mb-8 leading-normal">
              Join the Velox side of things
            </h2>
          </div>
          {/* QR Code */}
          <div className="">
            <div className="bg-[#FCDE2F] inline-block p-4 rounded-xl">
              <p className="text-black mb-2 text-sm font-medium">
                Download Velox Payments
              </p>
              <Image
                src="/qr-svg.svg"
                alt="Download QR Code"
                width={200}
                height={200}
                className="bg-white rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 mb-12">
          {/* Logo and Social */}
          <div className="lg:col-span-2">
            <Image
              src="/yellow-logo-svg.svg"
              alt="Velox Logo"
              width={120}
              height={40}
              className="mb-6"
            />
            <div className="flex gap-4">
              <Link href="#" className="hover:text-[#FFD60A] transition-colors">
                <Image src="/fb.svg" alt="" width={20} height={20} />
              </Link>
              <Link href="#" className="hover:text-[#FFD60A] transition-colors">
                <Image src="/x.svg" alt="" width={20} height={20} />
              </Link>
              <Link href="#" className="hover:text-[#FFD60A] transition-colors">
                <Image src="/link.svg" alt="" width={20} height={20} />
              </Link>
              <Link href="#" className="hover:text-[#FFD60A] transition-colors">
                <Image src="/tiktok.svg" alt="" width={20} height={20} />
              </Link>
              <Link href="#" className="hover:text-[#FFD60A] transition-colors">
                <Image src="/insta.svg" alt="" width={20} height={20} />
              </Link>
            </div>
          </div>

          {/* Products */}
          <div>
            <h3 className="font-semibold mb-4 text-[#FCDE2F]">Products</h3>
            <ul className="space-y-3 text-[16px] text-gray-200">
              <li>
                <Link
                  href="#"
                  className="hover:text-[#FFD60A] transition-colors"
                >
                  International Money Transfer
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-[#FFD60A] transition-colors"
                >
                  Recurring payment
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-[#FFD60A] transition-colors"
                >
                  Loyalty Program
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold mb-4 text-[#FCDE2F]">Company</h3>
            <ul className="space-y-3 text-[16px] text-gray-200">
              <li>
                <Link
                  href="#"
                  className="hover:text-[#FFD60A] transition-colors"
                >
                  About us
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-[#FFD60A] transition-colors"
                >
                  Careers
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-semibold mb-4 text-[#FCDE2F]">Resources</h3>
            <ul className="space-y-3 text-[16px] text-gray-200">
              <li>
                <Link
                  href="#"
                  className="hover:text-[#FFD60A] transition-colors"
                >
                  FAQs
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-[#FFD60A] transition-colors"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-[#FFD60A] transition-colors"
                >
                  Terms of service
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-[#FFD60A] transition-colors"
                >
                  Privacy policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="font-semibold mb-4 text-[#FCDE2F]">Support</h3>
            <ul className="space-y-3 text-[16px] text-gray-200">
              <li>
                <Link
                  href="#"
                  className="hover:text-[#FFD60A] transition-colors"
                >
                  Partner with us
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-[#FFD60A] transition-colors"
                >
                  Get help
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Newsletter */}
        <div
          style={{ backgroundImage: `url('/footer-bg.svg')` }}
          className="footer-bg text-white rounded-lg p-4 flex flex-col md:flex-row md:items-center md:justify-between w-full  mx-auto border md:mb-8 mb-5"
        >
          <div className="mb-4 md:mb-0">
            <h3 className="text-lg font-medium">Subscribe to Velox Payments</h3>
            <p className="text-sm text-white/80">
              Insert a text to make users eager to subscribe to our newsletter.
            </p>
          </div>

          <div className="flex items-center bg-white rounded-full p-1 w-full md:w-1/3">
            <input
              type="email"
              placeholder="Enter your email address here"
              className="flex-1 text-gray-700 text-sm p-2 outline-none bg-transparent placeholder-gray-400"
            />
            <button className="bg-[#FCDE2F] text-[#050506] font-medium  md:px-11 md:py-4 p-3 rounded-full hover:bg-transparent border border-[#CAB22B] transition">
              Subscribe
            </button>
          </div>
        </div>
        <hr className="my-5" />
        {/* Legal */}
        <div className="text-[16px] text-white space-y-4">
          <p className="text-[16px] leading-6 font-normal">
            Velox Payments Limited, Canada, is registered and regulated by the
            Financial Transactions and Report Analysis Centre of Canada as a
            Money Service Business. MSB registration number: M22109793. Velox
            Payments Limited, Canada.
          </p>
          <p className="text-[#FCDE2F]">© 2024 All rights reserved</p>
        </div>
      </div>
    </footer>
  );
}
