"use client";
import React, { useState } from "react";
import Image from "next/image";
import ApplicationButton from "../../components/buttons/application-button";

// Image asset imports (SVGs and PNGs as constants)
const imgSelectorVerticalLine = "/chevronUpDown.svg";
const img3 = "/chevronDown.svg";
const img4 = "/postedCalendar.svg";
const img5 = "/location.svg";
const img6 = "/briefcase.svg";

// JobTypeBadge component
function JobTypeBadge({
  type,
  color,
  textColor,
}: {
  type: string;
  color: string;
  textColor: string;
}) {
  return (
    <div
      className={`px-4 py-2 rounded-[27px] text-[14px] md:text-[20px] font-medium`}
      style={{ background: color, color: textColor }}
    >
      {type}
    </div>
  );
}

const jobListings = [
  {
    title: "Senior Frontend Developer",
    dept: "Engineering",
    type: "Full-time",
    typeColor: "#e2fbe8",
    typeText: "#306339",
    location: "Remote",
    posted: "March 15, 2025",
    about:
      "We are looking for a Senior Frontend Developer to join our engineering team and help build the next generation of our product.",
    responsibilities: [
      "Design and implement new features for our web application",
      "Collaborate with designers, product managers, and backend developers",
      "Write clean, maintainable, and well-tested code",
      "Optimize application for maximum speed and scalability",
      "Stay up-to-date with emerging trends and technologies",
    ],
    requirements: [
      "5+ years of experience in frontend development",
      "Strong proficiency in React, TypeScript, and modern JavaScript",
      "Experience with responsive design and mobile-first development",
      "Understanding of web performance optimization techniques",
      "Excellent problem-solving skills and attention to detail",
    ],
    expanded: true,
  },
  {
    title: "UI/UX Designer",
    dept: "Design",
    type: "Full-time",
    typeColor: "#e2fbe8",
    typeText: "#306339",
    location: "Remote",
    posted: "April 2, 2025",
    about:
      "We are seeking a creative UI/UX Designer to craft beautiful and usable digital experiences.",
    responsibilities: [
      "Design user interfaces and user flows",
      "Work closely with product and engineering teams",
      "Conduct user research and usability testing",
      "Create wireframes, prototypes, and high-fidelity mockups",
      "Advocate for the user in all design decisions",
    ],
    requirements: [
      "3+ years of experience in UI/UX design",
      "Proficiency with Figma and design systems",
      "Strong portfolio of design projects",
      "Excellent communication and teamwork skills",
      "Attention to detail and a passion for great user experiences",
    ],
  },
  {
    title: "Product Marketing Manager",
    dept: "Marketing",
    type: "Full-time",
    typeColor: "#e2fbe8",
    typeText: "#306339",
    location: "Remote",
    posted: "April 10, 2025",
    about:
      "Lead go-to-market strategies and drive product adoption as our Product Marketing Manager.",
    responsibilities: [
      "Develop and execute product marketing strategies",
      "Collaborate with product and sales teams",
      "Create compelling product messaging and positioning",
      "Analyze market trends and customer insights",
      "Support product launches and campaigns",
    ],
    requirements: [
      "4+ years in product marketing",
      "Experience in SaaS or fintech preferred",
      "Excellent written and verbal communication skills",
      "Strong analytical and project management skills",
      "Ability to work cross-functionally in a fast-paced environment",
    ],
  },
  {
    title: "Backend Engineer",
    dept: "Engineering",
    type: "Contract",
    typeColor: "#dee9fc",
    typeText: "#3048a9",
    location: "Remote",
    posted: "April 15, 2025",
    about:
      "Join our backend team to build scalable and robust APIs and services.",
    responsibilities: [
      "Design and implement backend services and APIs",
      "Maintain and optimize database systems",
      "Collaborate with frontend and DevOps teams",
      "Write clean, maintainable, and well-documented code",
      "Ensure security and scalability of backend systems",
    ],
    requirements: [
      "3+ years of backend development experience",
      "Proficiency in Node.js, Python, or Go",
      "Experience with cloud platforms (AWS, Azure, GCP)",
      "Familiarity with CI/CD pipelines",
      "Strong problem-solving and debugging skills",
    ],
  },
  {
    title: "Human Resource Officer",
    dept: "Operations",
    type: "Internship",
    typeColor: "#fcf4de",
    typeText: "#a96230",
    location: "Remote",
    posted: "April 20, 2025",
    about:
      "Support our HR team in recruitment, onboarding, and employee engagement initiatives.",
    responsibilities: [
      "Assist with recruitment and onboarding",
      "Coordinate employee engagement activities",
      "Maintain HR records and documentation",
      "Support payroll and benefits administration",
      "Help ensure compliance with HR policies",
    ],
    requirements: [
      "Bachelor's degree or ongoing studies in HR or related field",
      "Strong organizational and communication skills",
      "Attention to detail and confidentiality",
      "Ability to multitask and prioritize",
      "Interest in HR best practices and trends",
    ],
  },
];

export default function Careers() {
  const [openIndex, setOpenIndex] = useState(0); // 0 = first job open by default
  const [modalJobIndex, setModalJobIndex] = useState<number | null>(null);

  return (
    <main className="w-full bg-[#f7f8fa] flex flex-col items-center pt-7 md:px-0 md:pt-0">
      {/* Header Section */}
      <section className="w-full px-4 md:px-0">
        <header className="w-full h-[783px] md:h-auto flex flex-col items-center justify-center px-4 md:px-0 pt-12 md:pt-[120px] pb-8 md:pb-0 bg-[#E4EEFE] md:bg-[linear-gradient(110deg,_#F0F3FB_0.23%,_#D1DAF4_99.77%)] rounded-2xl md:rounded-none min-h-[400px] md:min-h-[555px] relative overflow-hidden">
          <div className="max-w-5xl w-full flex flex-col items-center justify-center mx-auto">
            <h1 className="text-[28px] md:text-[56px] font-medium text-center text-[#050506] md:leading-[50px]">
              Join Our Team
            </h1>
            <p className="text-[16px] md:text-[24px] font-normal text-center text-[#414141] mt-4 md:mt-8 max-w-[80%] md:max-w-3xl mx-auto">
              Discover your next career opportunity and become part of a team
              that's building the future.
            </p>
            <div className="mt-8 w-[120px] md:w-[250px] bg-[#6584DB] h-[5px] rounded-full"></div>
          </div>
        </header>
      </section>

      {/* Filter Section */}
      <section className="w-full max-w-[1060px] flex flex-col gap-10 my-16 px-4">
        <div className="flex gap-4 md:gap-10 w-full">
          <button className="bg-white py-3 md:py-0 md:h-[60px] w-full md:w-[331px] rounded-2xl flex items-center justify-between px-1 md:px-6 border border-[#BDBDBD]">
            <span className="text-[14px] md:text-[18px] font-medium text-black">
              Filter by Department
            </span>
            <Image
              src={imgSelectorVerticalLine}
              alt="filter"
              width={32}
              height={32}
              className="w-8 h-8"
              loading="lazy"
            />
          </button>
          <button className="bg-white py-3 md:py-0 md:h-[60px] w-full md:w-[331px] rounded-2xl flex items-center justify-between px-1 md:px-6 border border-[#bdbdbd]">
            <span className="text-[14px] md:text-[18px] font-medium text-black">
              Filter by Job Type
            </span>
            <Image
              src={imgSelectorVerticalLine}
              alt="filter"
              width={32}
              height={32}
              className="w-8 h-8"
              loading="lazy"
            />
          </button>
        </div>
        <div className="text-[24px] font-medium text-black">
          {jobListings.length} Positions Available
        </div>

        {/* Job Listings Accordion */}
        <div className="flex flex-col gap-6 w-full">
          {jobListings.map((job, i) => {
            const isOpen = openIndex === i;
            return (
              <div
                key={job.title}
                className={`bg-white rounded-2xl border border-[#bdbdbd] transition-all duration-300 ${
                  isOpen
                    ? "p-4 md:p-8"
                    : "px-4 md:px-8 py-4 overflow-hidden cursor-pointer"
                }`}
                onClick={() => setOpenIndex(isOpen ? -1 : i)}
                tabIndex={0}
                role="button"
                aria-expanded={isOpen}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ")
                    setOpenIndex(isOpen ? -1 : i);
                }}
              >
                <div
                  className={`flex flex-row items-center justify-between gap-4 ${
                    isOpen ? "" : "pointer-events-none select-none"
                  }`}
                >
                  <div className="flex flex-col gap-2">
                    <h2 className="text-[18px] md:text-[28px] font-bold text-black">
                      {job.title}
                    </h2>
                    <div className="flex gap-2 md:gap-4 items-center">
                      <span className="bg-[#f2f5f8] px-4 py-2 rounded-[27px] text-[14px] md:text-[20px] text-black font-medium">
                        {job.dept}
                      </span>
                      <JobTypeBadge
                        type={job.type}
                        color={job.typeColor}
                        textColor={job.typeText}
                      />
                      <span className="text-[14px] md:text-[20px] text-[#1f1f1f] font-medium">
                        {job.location}
                      </span>
                    </div>
                  </div>
                  <Image
                    src={img3}
                    alt={isOpen ? "collapse" : "expand"}
                    width={32}
                    height={32}
                    className={`w-6 h-6 md:w-8 md:h-8 transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                    loading="lazy"
                  />
                </div>
                {isOpen && (
                  <>
                    <div className="flex flex-col md:flex-row gap-8 mt-6">
                      <div className="flex flex-col gap-2 min-w-[188px]">
                        <div className="flex items-center gap-1.5 text-[#464646] text-[14px]">
                          <Image
                            src={img4}
                            alt="calendar"
                            width={20}
                            height={20}
                            className="w-5 h-5"
                            loading="lazy"
                          />
                          <span>Posted on {job.posted}</span>
                        </div>
                        <div className="flex items-center gap-1.5 text-[#464646] text-[14px]">
                          <Image
                            src={img5}
                            alt="location"
                            width={20}
                            height={20}
                            className="w-5 h-5"
                            loading="lazy"
                          />
                          <span>{job.location}</span>
                        </div>
                        <div className="flex items-center gap-1.5 text-[#464646] text-[14px]">
                          <Image
                            src={img6}
                            alt="briefcase"
                            width={20}
                            height={20}
                            className="w-5 h-5"
                            loading="lazy"
                          />
                          <span>{job.type}</span>
                        </div>
                      </div>
                      <div className="flex-1 flex flex-col gap-6">
                        <div>
                          <h3 className="text-[18px] font-bold text-[#050506] mb-1">
                            About the Role
                          </h3>
                          <p className="text-[16px] text-[#050506]">
                            {job.about}
                          </p>
                        </div>
                        <div>
                          <h3 className="text-[18px] font-bold text-[#050506] mb-1">
                            Responsibilities
                          </h3>
                          <ul className="list-disc pl-6 text-[16px] text-[#050506] space-y-1">
                            {job.responsibilities.map((item, idx) => (
                              <li key={idx}>{item}</li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <h3 className="text-[18px] font-bold text-[#050506] mb-1">
                            Requirements
                          </h3>
                          <ul className="list-disc pl-6 text-[16px] text-[#050506] space-y-1">
                            {job.requirements.map((item, idx) => (
                              <li key={idx}>{item}</li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="flex justify-center mt-6">
                      <ApplicationButton
                        title={job.title}
                        onClick={(e: React.MouseEvent) => {
                          e.stopPropagation();
                          setModalJobIndex(i);
                        }}
                        isModalOpen={modalJobIndex === i}
                        closeModal={() => setModalJobIndex(null)}
                      />
                    </div>
                  </>
                )}
              </div>
            );
          })}
        </div>
      </section>
    </main>
  );
}
