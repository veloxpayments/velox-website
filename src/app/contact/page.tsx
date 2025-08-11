import React from "react";
import { useForm } from "react-hook-form";
import ContactForm from "../../components/ContactForm";

// Figma asset constants

const imgCustomerCareFill = "/contactIcon.svg";
const imgVector8 = "/imageVector8.svg";
const imgPhoneCallLine = "/phoneIcon.svg";
const imgChat3Line = "/chatIcon.svg";
const imgArrowRightLine = "/smallArrowRight.svg";
const imgMailLine = "/mailIcon.svg";
const imgWorld2Line = "/worldIcon.svg";
const imgFacebookFill = "/facebookContact.svg";
const imgInstagramFill = "/instagramContact.svg";
const imgLinkedinFill = "/linkedinContact.svg";
const imgTiktokFill = "/tiktokContact.svg";
const imgTwitterXFill = "/xContact.svg";
const whiteLine = "/whiteLine.svg";

const socialIcons = [
  { src: imgFacebookFill, alt: "Facebook" },
  { src: imgTwitterXFill, alt: "X" },
  { src: imgLinkedinFill, alt: "LinkedIn" },
  { src: imgTiktokFill, alt: "TikTok" },
  { src: imgInstagramFill, alt: "Instagram" },
];

const Contact = () => {
  return (
    <div className="w-full min-h-screen bg-[#f8f9fb] font-satoshi pt-7 px-4 md:px-0 md:pt-0">
      {/* Header Section */}
      <header className="bg-[#1a2238] w-full py-[300px] md:py-0 relative rounded-2xl md:rounded-none">
        <div className="flex flex-col items-center justify-center text-center md:pt-48 md:pb-16">
          <img src={imgCustomerCareFill} alt="customer care" className="w-10 h-10 md:w-14 md:h-14 mx-auto mb-4" />
          <h1 className="text-white text-[30px] md:text-5xl font-bold mb-4">Talk to us</h1>
          <p className="text-white text-[16px] md:text-2xl font-[300] max-w-2xl lg:max-w-4xl mx-auto">Get in touch, we are here to help</p>
          <img src={whiteLine} alt="white line" className="md:hidden mt-6" />
        </div>
      </header>

      {/* Contact Section */}
      <section className="w-full relative custom-bg-faq py-10 md:py-24 overflow-hidden">
        <img src={imgVector8} alt="background vector" className="absolute left-0 top-0 w-full h-full object-cover opacity-10 pointer-events-none select-none" />
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-16 items-start justify-center relative z-10 px-4">
          {/* Left: Contact Info */}
          <div className="flex-1 flex flex-col gap-10 min-w-[300px]">
            <h2 className="text-[#050506] text-[18px] md:text-4xl font-[500] md:font-bold max-w-lg">We are always ready to help you and answer your questions</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Call Us */}
              <div className="flex items-start gap-4 ">
                <div className="bg-[#e7ecfa] rounded-md w-10 h-10 flex items-center justify-center">
                  <img src={imgPhoneCallLine} alt="Call" className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-[#050506] text-lg font-[500] md:font-semibold">Call Us</div>
                  <div className="text-[#393939] text-base">Insert mobile number</div>
                  <div className="text-[#393939] text-xs">Mon - Fri 6AM - 9PM</div>
                </div>
              </div>
              {/* Live Chat */}
              <div className="flex items-start gap-4 ">
                <div className="bg-[#e7ecfa] rounded-md w-10 h-10 flex items-center justify-center">
                  <img src={imgChat3Line} alt="Live chat" className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-[#050506] text-lg font-[500] md:font-semibold">Live chat</div>
                  <div className="text-[#393939] text-base">Need help now? chat with us</div>
                  <div className="flex items-center gap-1 mt-1">
                    <span className="text-[#213879] text-xs underline cursor-pointer">Chat with us</span>
                    <img src={imgArrowRightLine} alt="arrow" className="w-3.5 h-3.5" />
                  </div>
                </div>
              </div>
              {/* Email */}
              <div className="flex items-start gap-4">
                <div className="bg-[#e7ecfa] rounded-md w-10 h-10 flex items-center justify-center">
                  <img src={imgMailLine} alt="Email" className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-[#050506] text-lg font-[500] md:font-semibold">Email</div>
                  <div className="text-[#393939] text-base">support@veloxpayments.com</div>
                  <div className="text-[#393939] text-xs">Reply within 36 hours</div>
                </div>
              </div>
              {/* Socials */}
              <div className="flex items-start gap-4">
                <div className="bg-[#e7ecfa] rounded-md w-10 h-10 flex items-center justify-center">
                  <img src={imgWorld2Line} alt="Socials" className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-[#050506] text-lg font-[500] md:font-semibold mb-1">Our socials</div>
                  <div className="flex items-center gap-4 mt-2">
                    {socialIcons.map((icon, idx) => (
                      <img key={idx} src={icon.src} alt={icon.alt} className="w-5 h-5" />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Right: Contact Form */}
          <ContactForm />
        </div>
      </section>
    </div>
  );
};

export default Contact;