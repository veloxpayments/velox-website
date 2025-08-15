import React from "react";
import Image from "next/image";

// Figma asset constants
const blogAvatar = "/blogAvatar.png";
const blogHero = "/blogHero.png";
const articleImage = "/articleImage.png";
const imgTimeLine = "/clock.svg";
const imgArrow = "/arrowRight.svg";
const imgSearchLine = "/search.svg";
const clock = "/clock.svg";

const Blog = () => {
  return (
    <div className="w-full min-h-screen font-satoshi bg-[#F9FAFB] pt-7 md:px-0 md:pt-0">
      {/* Header Section */}
      <header className="w-full px-4 md:px-0 pb-8 md:pb-16 pt-0 md:pt-44 relative">
        {/* Hero Section */}
        <div className="md:max-w-[90vw] mx-auto flex flex-col md:flex-row items-center bg-[linear-gradient(110deg,_#F0F3FB_0.23%,_#D1DAF4_99.77%)] gap-10 p-4 md:p-8 pt-32 md:pt-8 rounded-2xl">
          <div className="flex-1 flex flex-col gap-3 md:gap-6 items-start justify-center">
            <h1 className="capitalize text-[#000] text-4xl md:text-6xl font-bold leading-tight">
              How blockchain is revolutionizing the banking industry
            </h1>
            <p className="capitalize text-[#2c2c2c] text-lg md:text-2xl max-w-xl">
              Explore how blockchain technology is transforming traditional
              banking systems and creating new opportunities for financial
              institutions.
            </p>
            <div className="flex items-center gap-3 text-neutral-500 text-base">
              <Image
                src={imgTimeLine}
                width={20}
                height={20}
                alt="time"
                className="w-5 h-5"
                loading="lazy"
              />
              <span>6 min read</span>
            </div>
            <div className="flex items-center gap-3">
              <Image
                src={blogAvatar}
                alt="Jane Doe"
                width={48}
                height={48}
                className="w-12 h-12 rounded-2xl object-cover"
                loading="lazy"
              />
              <div>
                <div className="font-bold text-[#000] text-lg">Jane Doe</div>
                <div className="text-[#2c2c2c] text-sm">April 2nd 2025</div>
              </div>
            </div>
            <button className="bg-[#050506] text-white rounded-full px-8 py-3 font-medium flex items-center gap-2">
              Read Article
              <Image
                src={imgArrow}
                alt="arrow"
                width={20}
                height={20}
                className="w-5 h-5"
                loading="lazy"
              />
            </button>
          </div>
          <div className="flex-1 flex items-center justify-center">
            <Image
              src={blogHero}
              alt="Blockchain in banking"
              width={600}
              height={400}
              className="rounded-3xl shadow-lg w-full object-cover"
              loading="lazy"
            />
          </div>
        </div>
      </header>

      {/* Browse Articles Section */}
      <section className="max-w-[90vw] mx-auto w-full py-8  md:py-16 px-4">
        <div className="flex flex-col md:items-start md:justify-between gap-4 md:gap-8 mb-10">
          <h2 className="capitalize text-[#050506] text-3xl md:text-4xl font-bold">
            Browse Articles
          </h2>
          <div className="flex items-center bg-white border border-[#51515499] rounded-xl px-4 py-3 shadow-sm w-full md:w-[464px]">
            <Image
              src={imgSearchLine}
              alt="search"
              width={20}
              height={20}
              className="w-5 h-5 mr-2"
              loading="lazy"
            />
            <input
              type="text"
              placeholder="Search Articles"
              className="flex-1 bg-transparent outline-none text-base text-[#51515466] placeholder-[#51515466]"
            />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div
              key={i}
              className="bg-white rounded-xl overflow-hidden flex flex-col h-full"
            >
              <Image
                src={articleImage}
                alt="AI Investment"
                width={400}
                height={240}
                className="h-60 w-full object-cover"
                loading="lazy"
              />
              <div className="p-6 flex flex-col flex-1">
                <h3 className="font-bold text-[#050506] text-xl mb-2">
                  AI-Powered Investment Strategies for the Modern Investor
                </h3>
                <p className="text-[#2d2d2d] text-sm mb-4 flex-1">
                  Discover how artificial intelligence is changing the
                  investment landscape and providing new opportunities.
                </p>
                <div className="flex items-center gap-[2px] text-neutral-500 text-xs mb-4">
                  <Image
                    src={clock}
                    alt="time"
                    width={14}
                    height={14}
                    className="w-[14px] h-[14px]"
                    loading="lazy"
                  />
                  <span>6 min read</span>
                </div>
                <div className="flex justify-between items-center pt-[10px] border-t border-[#e5e7eb]">
                  <div className="flex items-center gap-2">
                    <Image
                      src={blogAvatar}
                      alt="Jane Doe"
                      width={32}
                      height={32}
                      className="w-8 h-8 rounded-xl object-cover"
                      loading="lazy"
                    />
                    <div>
                      <div className="font-bold text-[#000] text-sm">
                        Jane Doe
                      </div>
                      <div className="text-[#2c2c2c] text-xs">
                        April 2nd 2025
                      </div>
                    </div>
                  </div>
                  <button className="bg-[#050506] text-white rounded-full px-6 py-2 font-medium flex items-center gap-2">
                    Read Article
                    <Image
                      src={imgArrow}
                      alt="arrow"
                      width={16}
                      height={16}
                      className="w-4 h-4"
                      loading="lazy"
                    />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center mt-12">
          <button className="bg-[#6584db] text-white rounded-full px-8 py-3 font-medium">
            Load More Articles
          </button>
        </div>
      </section>
    </div>
  );
};

export default Blog;
