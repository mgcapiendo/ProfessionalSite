"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";

const experience = () => {
  return (
    <div className="min-h-screen font-sans">
      <main className="relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 800 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            type: "spring",
            stiffness: 50,
            damping: 15,
            delay: 0.5,
          }}
        >
          <section className="py-6 sm:py-10 md:py-16 w-full max-w-[1700px] mx-auto px-6 sm:px-8 md:px-12 lg:px-16 space-y-4 sm:space-y-6">
            {/* First Row - Internships */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 w-full">
              {/* FPL Intern */}
              <div className="transition-transform duration-300 hover:scale-105 px-14 sm:px-16 py-10 sm:py-12 rounded-2xl flex flex-col h-auto bg-gray-100 shadow-lg bg-black/20 border border-white/10">
                <h2 className="text-lg sm:text-xl md:text-2xl font-bold">
                  Florida Power & Light: IT Nuclear Solutions Analyst Intern
                </h2>
                <h3 className="text-base sm:text-lg mb-4 italic">
                  May 2025 - Present
                </h3>
                <div className="mb-10 min-h-[100px]">
                  <div className="text-sm sm:text-base md:text-lg text-blue-900 font-semibold italic">
                    <Typewriter
                      words={[
                        "Gaining hands-on experience developing AI-powered digital twin models in nuclear operations, developing expertise in both AI implementation and industrial system optimization.",
                      ]}
                      typeSpeed={8}
                    />
                  </div>
                </div>
                <div className="mt-auto pt-4">
                  <ul className="flex flex-wrap gap-2">
                    {["AI", "Drones", "Agile", "Leadership"].map(
                      (skill, index) => (
                        <li
                          key={index}
                          className="transition-transform duration-300 hover:scale-110 bg-blue-100 text-blue-800 px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm"
                        >
                          {skill}
                        </li>
                      )
                    )}
                  </ul>
                </div>
              </div>

              {/* Sparton Intern */}
              <div className="transition-transform duration-300 hover:scale-105 px-14 sm:px-16 py-10 sm:py-12 rounded-2xl flex flex-col h-auto bg-gray-100 shadow-lg bg-black/20 border border-white/10">
                <h2 className="text-lg sm:text-xl md:text-2xl font-bold">
                  Sparton Corporation: Acoustic Engineering Intern
                </h2>
                <h3 className="text-base sm:text-lg mb-4 italic">
                  May 2024 - August 2024
                </h3>
                <div className="mb-10 min-h-[100px]">
                  <div className="text-sm sm:text-base md:text-lg text-blue-900 font-semibold italic">
                    <Typewriter
                      words={[
                        "Developed a flexible testing system for sonobuoy piezoelectric ceramics, reducing testing time by 75%. Integrated a database to automate data collection for thousands of tests.",
                      ]}
                      typeSpeed={8}
                    />
                  </div>
                </div>
                <div className="mt-auto pt-4">
                  <ul className="flex flex-wrap gap-2">
                    {["C", "LabWindows/CVI", "SQL", "Software Development"].map(
                      (skill, index) => (
                        <li
                          key={index}
                          className="transition-transform duration-300 hover:scale-110 bg-blue-100 text-blue-800 px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm"
                        >
                          {skill}
                        </li>
                      )
                    )}
                  </ul>
                </div>
              </div>
            </div>

            {/* Third Row - Hackathons + Data Science Project */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 sm:gap-6 w-full">
              {/* NextEra Data Science Project */}
              <div className="transition-transform duration-300 hover:scale-105 px-14 sm:px-16 py-10 sm:py-12 rounded-2xl flex flex-col h-auto bg-gray-100 shadow-lg bg-black/20 border border-white/10">
                <h2 className="text-lg sm:text-xl md:text-2xl font-bold">
                  NextEra Energy: Data Science Side Project
                </h2>
                <h3 className="text-base sm:text-lg mb-4 italic">
                  June 2025 - July 2025
                </h3>
                <div className="mb-10 min-h-[100px]">
                  <div className="text-sm sm:text-base md:text-lg text-blue-900 font-semibold italic">
                    <Typewriter
                      words={[
                        "Improved an existing Python script to replace local file ingestion with AWS S3 data transfer, efficiently extracting, sanitizing, and preprocessing 150K+ nuclear documents for topic modeling.",
                      ]}
                      typeSpeed={8}
                    />
                  </div>
                </div>
                <div className="mt-auto pt-4">
                  <ul className="flex flex-wrap gap-2">
                    {["Python", "AWS", "Agile"].map((skill, index) => (
                      <li
                        key={index}
                        className="transition-transform duration-300 hover:scale-110 bg-blue-100 text-blue-800 px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm"
                      >
                        {skill}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* NEXT100 Hackathon 🏆 */}
              <div className="transition-transform duration-300 hover:scale-105 px-14 sm:px-16 py-10 sm:py-12 rounded-2xl flex flex-col h-auto bg-gray-100 shadow-lg bg-black/20 border border-white/10">
                <h2 className="text-lg sm:text-xl md:text-2xl font-bold">
                  NEXT100 IT Hackathon 🏆
                </h2>
                <h3 className="text-base sm:text-lg mb-4 italic">July 2025</h3>
                <div className="mb-10 min-h-[100px]">
                  <div className="text-sm sm:text-base md:text-lg text-blue-900 font-semibold italic">
                    <Typewriter
                      words={[
                        "Led a team of interns to develop an internal AI career support tool leveraging organizational data.",
                      ]}
                      typeSpeed={8}
                    />
                  </div>
                </div>
                <div className="mt-auto pt-4">
                  <ul className="flex flex-wrap gap-2">
                    {["C", "LabWindows/CVI", "SQL", "Software Development"].map(
                      (skill, index) => (
                        <li
                          key={index}
                          className="transition-transform duration-300 hover:scale-110 bg-blue-100 text-blue-800 px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm"
                        >
                          {skill}
                        </li>
                      )
                    )}
                  </ul>
                </div>
              </div>

              {/* Biotech Hackathon */}
              <div className="transition-transform duration-300 hover:scale-105 px-14 sm:px-16 py-10 sm:py-12 rounded-2xl flex flex-col h-auto bg-gray-100 shadow-lg bg-black/20 border border-white/10">
                <h2 className="text-lg sm:text-xl md:text-2xl font-bold">
                  Biotech Hackathon
                </h2>
                <h3 className="text-base sm:text-lg mb-4 italic">
                  January 2025
                </h3>
                <div className="mb-10 min-h-[100px]">
                  <div className="text-sm sm:text-base md:text-lg text-blue-900 font-semibold italic">
                    <Typewriter
                      words={[
                        "Led a team to develop a predictive tool for researchers to measure mycobiomes with live data visualization across 10+ test cases.",
                      ]}
                      typeSpeed={8}
                    />
                  </div>
                </div>
                <div className="mt-auto pt-4">
                  <ul className="flex flex-wrap gap-2">
                    {[
                      "Python",
                      "Leadership",
                      "Adaptability",
                      "Public Speaking",
                      "Research",
                    ].map((skill, index) => (
                      <li
                        key={index}
                        className="transition-transform duration-300 hover:scale-110 bg-blue-100 text-blue-800 px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm"
                      >
                        {skill}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Cognitive Hackathon 🏆 */}
              <div className="transition-transform duration-300 hover:scale-105 px-14 sm:px-16 py-10 sm:py-12 rounded-2xl flex flex-col h-auto bg-gray-100 shadow-lg bg-black/20 border border-white/10">
                <h2 className="text-lg sm:text-xl md:text-2xl font-bold">
                  Cognitive Hackathon 🏆
                </h2>
                <h3 className="text-base sm:text-lg mb-4 italic">
                  August 2024
                </h3>
                <div className="mb-10 min-h-[100px]">
                  <div className="text-sm sm:text-base md:text-lg text-blue-900 font-semibold italic">
                    <Typewriter
                      words={[
                        "Developed an AI solution using Ant Colony Optimization to reduce route inefficiencies by 10% to advance waste-to-energy goals.",
                      ]}
                      typeSpeed={8}
                    />
                  </div>
                </div>
                <div className="mt-auto pt-4">
                  <ul className="flex flex-wrap gap-2">
                    {[
                      "Python",
                      "Time Management",
                      "Presentation",
                      "Public Speaking",
                      "Research",
                    ].map((skill, index) => (
                      <li
                        key={index}
                        className="transition-transform duration-300 hover:scale-110 bg-blue-100 text-blue-800 px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm"
                      >
                        {skill}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Fourth Row - Leadership & Volunteering */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 w-full">
              {/* Naval ROTC */}
              <div className="transition-transform duration-300 hover:scale-105 px-14 sm:px-16 py-10 sm:py-12 rounded-2xl flex flex-col h-auto bg-gray-100 shadow-lg bg-black/20 border border-white/10">
                <h2 className="text-lg sm:text-xl md:text-2xl font-bold">
                  Naval Reserve Officer Training Corps: Midshipman
                </h2>
                <h3 className="text-base sm:text-lg mb-4 italic">
                  August 2021 - May 2023
                </h3>
                <div className="mb-10 min-h-[100px]">
                  <div className="text-sm sm:text-base md:text-lg text-blue-900 font-semibold italic">
                    <Typewriter
                      words={[
                        "Cultivated advanced leadership skills through comprehensive military training.",
                      ]}
                      typeSpeed={8}
                    />
                  </div>
                </div>
                <div className="mt-auto pt-4">
                  <ul className="flex flex-wrap gap-2">
                    {[
                      "Military",
                      "Leadership",
                      "Public Speaking",
                      "Professionalism",
                      "Priority Management",
                    ].map((skill, index) => (
                      <li
                        key={index}
                        className="transition-transform duration-300 hover:scale-110 bg-blue-100 text-blue-800 px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm"
                      >
                        {skill}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Asian American Association */}
              <div className="transition-transform duration-300 hover:scale-105 px-14 sm:px-16 py-10 sm:py-12 rounded-2xl flex flex-col h-auto bg-gray-100 shadow-lg bg-black/20 border border-white/10">
                <h2 className="text-lg sm:text-xl md:text-2xl font-bold">
                  Asian American Association: Ambassador
                </h2>
                <h3 className="text-base sm:text-lg mb-4 italic">
                  Spring 2022 - Spring 2023
                </h3>
                <div className="mb-10 min-h-[100px]">
                  <div className="text-sm sm:text-base md:text-lg text-blue-900 font-semibold italic">
                    <Typewriter
                      words={[
                        "Developed event coordination and cross-cultural communication skills by supporting 11 diverse cultural events.",
                      ]}
                      typeSpeed={8}
                    />
                  </div>
                </div>
                <div className="mt-auto pt-4">
                  <ul className="flex flex-wrap gap-2">
                    {[
                      "Cultural Education",
                      "Leadership",
                      "Public Speaking",
                      "Entertainment",
                      "Operations",
                    ].map((skill, index) => (
                      <li
                        key={index}
                        className="transition-transform duration-300 hover:scale-110 bg-blue-100 text-blue-800 px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm"
                      >
                        {skill}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Flamingo Coder */}
              <div className="transition-transform duration-300 hover:scale-105 px-14 sm:px-16 py-10 sm:py-12 rounded-2xl flex flex-col h-auto bg-gray-100 shadow-lg bg-black/20 border border-white/10">
                <h2 className="text-lg sm:text-xl md:text-2xl font-bold">
                  South Florida Tech Hub: Flamingo Coder
                </h2>
                <h3 className="text-base sm:text-lg mb-4 italic">
                  February 2025 - Present
                </h3>
                <div className="mb-10 min-h-[100px]">
                  <div className="text-sm sm:text-base md:text-lg text-blue-900 font-semibold italic">
                    <Typewriter
                      words={[
                        "Assisting in monthly coding classes for K-12 students, fostering an engaging learning environment.",
                      ]}
                      typeSpeed={8}
                    />
                  </div>
                </div>
                <div className="mt-auto pt-4">
                  <ul className="flex flex-wrap gap-2">
                    {["Programming", "Teaching", "Public Speaking"].map(
                      (skill, index) => (
                        <li
                          key={index}
                          className="transition-transform duration-300 hover:scale-110 bg-blue-100 text-blue-800 px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm"
                        >
                          {skill}
                        </li>
                      )
                    )}
                  </ul>
                </div>
              </div>
            </div>

            {/* Resume Link */}
            <div className="w-full mt-8 flex justify-center">
              <Link
                href="/ManuelCapiendo_SWE_Resume.pdf"
                target="_blank"
                className="px-6 py-3 bg-blue-100 hover:bg-blue-200 text-blue-800 rounded-full transition-transform duration-300 hover:scale-105 shadow-md text-sm sm:text-base"
              >
                View Full Resume
              </Link>
            </div>
          </section>
        </motion.div>
      </main>
    </div>
  );
};

export default experience;
