"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import coin from "../../public/coin-one.png";
import Link from "next/link";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
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
        className="relative footer-bg top-10 container overflow-hidden rounded-[16px]  mx-4 md:mx-auto mt-16 mb-[100px]"
        style={{ backgroundImage: `url('/footer-bg.svg')` }}
      >
        <div className="container mx-auto px-4 py-16 md:px-[100px] relative z-10 md:flex items-center justify-between">
          <div>
            <p className="text-[18px] text-[#FAFBFE] font-medium">
              GET READY FOR EASE
            </p>
            <h2 className="text-3xl md:text-[50px] font-bold mb-8 leading-normal">
              Join the Velox side <br /> of things
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
                width={357}
                height={357}
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
            <h3 className="font-bold mb-4 text-[#FCDE2F]">Products</h3>
            <ul className="space-y-3 text-[16px] text-white">
              <li>
                <Link
                  href="#"
                  className="hover:text-[#FFD60A] transition-colors font-normal"
                >
                  International Money <br /> Transfer
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-[#FFD60A] transition-colors font-normal"
                >
                  Recurring payment
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-[#FFD60A] transition-colors font-normal"
                >
                  Loyalty Program
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-bold mb-4 text-[#FCDE2F]">Company</h3>
            <ul className="space-y-3 text-[16px] text-white">
              <li>
                <Link
                  href="#"
                  className="hover:text-[#FFD60A] transition-colors font-normal"
                >
                  About us
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-[#FFD60A] transition-colors font-normal"
                >
                  Careers
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-bold mb-4 text-[#FCDE2F]">Resources</h3>
            <ul className="space-y-3 text-[16px] text-white">
              <li>
                <Link
                  href="#"
                  className="hover:text-[#FFD60A] transition-colors font-normal"
                >
                  FAQs
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-[#FFD60A] transition-colors font-normal"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-[#FFD60A] transition-colors font-normal"
                >
                  Terms of service
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-[#FFD60A] transition-colors font-normal"
                >
                  Privacy policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="font-bold mb-4 text-[#FCDE2F]">Support</h3>
            <ul className="space-y-3 text-[16px] text-white">
              <li>
                <Link
                  href="#"
                  className="hover:text-[#FFD60A] transition-colors font-normal"
                >
                  Partner with us
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-[#FFD60A] transition-colors font-normal"
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
          className="footer-bg text-white rounded-lg px-8 py-6 flex flex-col md:flex-row md:items-center md:justify-between w-full mx-auto md:mb-8 mb-5"
        >
          <div className="mb-4 md:mb-0 w-full">
            <h3 className="text-[24px] leading-6 font-medium text-white mb-[10px]">
              Subscribe to Velox Payments
            </h3>
            <p className="text-[20px] font-normal text-[#ECF0FB]">
              Get information about Velox Payments fast when you subscribe
            </p>
          </div>
          <div className="md:flex flex-col w-full md:w-1/2 space-y-4">
            <div className="md:flex  md:space-x-4">
              <input
                type="text"
                placeholder="First name"
                className="flex-1 md:mb-auto mb-2 bg-[#ECF0FB] md:w-auto w-full text-[#949596] text-[16px] font-medium py-5 px-6 md:rounded-l-full outline-none placeholder-[#949596]"
              />
              <input
                type="text"
                placeholder="Last name"
                className="flex-1 bg-[#ECF0FB] md:w-auto w-full text-[#949596] text-[16px] font-medium py-5 px-6 md:rounded-r-full  outline-none placeholder-[#949596]"
              />
            </div>
            <div className="md:flex items-center bg-[#ECF0FB] rounded-full p-1">
              <input
                type="email"
                placeholder="Enter your email address here"
                className="flex-1 text-[#949596] text-[16px] font-medium py-2 px-6 outline-none bg-transparent placeholder-[#949596]"
              />
              <button className="bg-[#FCDE2F] text-[#050506] font-medium md:px-[39px] md:py-4 px-2 py-1 md:w-auto w-11/12 flex justify-center m-auto rounded-full hover:bg-transparent border border-[#CAB22B] transition">
                Subscribe
              </button>
            </div>
          </div>
        </div>
        <hr className="my-[45px] text-[#9BAFE8] bg-[#9BAFE8]" />
        {/* Legal */}
        <div className="text-[16px] text-white space-y-4">
          <p className="text-[16px] leading-6 font-normal">
            Velox Payments Limited, Canada, is registered and regulated by the
            Financial Transactions and Report Analysis Centre of Canada as a
            Money Service Business. MSB registration number: M22109793. Velox
            Payments Limited, Canada.
          </p>
          <p className="text-[#FCDE2F] text-[14px] font-normal">© 2024 All rights reserved</p>
        </div>
      </div>
    </footer>
  );
}
