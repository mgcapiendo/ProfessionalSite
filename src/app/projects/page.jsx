"use client";

import React from "react";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";

const projects = () => {
  return (
    <div className="min-h-screen font-sans">
      {/* Projects Content */}
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
          <section className="py-10 sm:py-20 w-full max-w-[1800px] mx-auto px-4 md:px-8 lg:px-16 xl:px-24 space-y-4 leading-relaxed">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 w-full">
              {/* Theme Park Ticketing System */}
              <div className="transition-transform duration-300 hover:scale-105 px-4 sm:px-6 py-6 sm:py-10 rounded-2xl flex flex-col h-auto bg-gray-100 shadow-lg bg-black/20 border border-white/10">
                <h2 className="text-xl sm:text-2xl font-bold">
                  Theme Park Ticketing System
                </h2>
                <h3 className="text-base sm:text-lg mb-4 italic">
                  August 2025 - August 2025
                </h3>

                <div className="min-h-[150px]">
                  <div className="text-base sm:text-lg text-blue-900 font-semibold italic">
                    <Typewriter
                      words={[
                        "Developed full-stack attraction ticketing platform featuring photo verification and end-to-end automated testing, ensuring robust frontend/backend integration and database reliability.",
                      ]}
                      typeSpeed={7}
                    />
                  </div>
                </div>

                <div className="mt-auto pt-4">
                  <ul className="flex flex-wrap gap-2">
                    {["React", "Flask", "PostgresSQL", "Selenium"].map(
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

              {/* Disney Emissions Dashboard */}
              <div className="transition-transform duration-300 hover:scale-105 px-4 sm:px-6 py-6 sm:py-10 rounded-2xl flex flex-col h-auto bg-gray-100 shadow-lg bg-black/20 border border-white/10">
                <h2 className="text-xl sm:text-2xl font-bold">
                  Disney Emissions Dashboard
                </h2>
                <h3 className="text-base sm:text-lg mb-4 italic">
                  June 2025 - July 2025
                </h3>

                <div className="min-h-[150px]">
                  <div className="text-base sm:text-lg text-blue-900 font-semibold italic">
                    <Typewriter
                      words={[
                        "Developed interactive sustainability dashboard for The Walt Disney Company to visualize Scope 1-3 carbon emissions and track progress toward 2030 net zero targets; integrated petition registration feature.",
                      ]}
                      typeSpeed={7}
                    />
                  </div>
                </div>

                <div className="mt-auto pt-4">
                  <ul className="flex flex-wrap gap-2">
                    {["JavaScript", "HTML", "CSS"].map((skill, index) => (
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

              {/* Voice-Controlled Robot Assistant */}
              <div className="transition-transform duration-300 hover:scale-105 px-4 sm:px-6 py-6 sm:py-10 rounded-2xl flex flex-col h-auto bg-gray-100 shadow-lg bg-black/20 border border-white/10">
                <h2 className="text-xl sm:text-2xl font-bold">
                  Voice-Controlled Robot Assistant
                </h2>
                <h3 className="text-base sm:text-lg mb-4 italic">
                  April 2025 - May 2025
                </h3>

                <div className="min-h-[150px]">
                  <div className="text-base sm:text-lg text-blue-900 font-semibold italic">
                    <Typewriter
                      words={[
                        "Engineered voice-interactive robot using Python for speech recognition, Arduino for servo motor control, and Google's Gemini API for natural language processing, creating a responsive robot with physical interaction capabilities.",
                      ]}
                      typeSpeed={7}
                    />
                  </div>
                </div>

                <div className="mt-auto pt-4">
                  <ul className="flex flex-wrap gap-2">
                    {["Python", "Arduino"].map((skill, index) => (
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

              {/* Thrill Seeker */}
              <div className="transition-transform duration-300 hover:scale-105 px-4 sm:px-6 py-6 sm:py-10 rounded-2xl flex flex-col h-auto bg-gray-100 shadow-lg bg-black/20 border border-white/10">
                <h2 className="text-xl sm:text-2xl font-bold">Thrill Seeker</h2>
                <h3 className="text-base sm:text-lg mb-4 italic">
                  April 2025 - May 2025
                </h3>

                <div className="min-h-[150px]">
                  <div className="text-base sm:text-lg text-blue-900 font-semibold italic">
                    <Typewriter
                      words={[
                        "Created GeoGuessr-inspired theme park location guessing game using JavaScript, featuring dynamic image maps, randomized clues, and adjustable difficulty to create engaging and replayable user experience across several locations.",
                      ]}
                      typeSpeed={7}
                    />
                  </div>
                </div>

                <a
                  href="https://mgcapiendo.github.io/thrillseeker/"
                  target="_blank"
                >
                  <img
                    src="/images/thrillseekerlogo.jpg"
                    alt="Thrill Seeker Logo"
                    className="cursor-pointer hover:opacity-80 transition-opacity"
                  />
                </a>

                <div className="mt-auto pt-4">
                  <ul className="flex flex-wrap gap-2">
                    {["JavaScript", "HTML", "CSS"].map((skill, index) => (
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

              {/* Schedule Optimizer */}
              <div className="transition-transform duration-300 hover:scale-105 px-4 sm:px-6 py-6 sm:py-10 rounded-2xl flex flex-col h-auto bg-gray-100 shadow-lg bg-black/20 border border-white/10">
                <h2 className="text-xl sm:text-2xl font-bold">
                  Schedule Optimizer
                </h2>
                <h3 className="text-base sm:text-lg mb-4 italic">
                  March 2025 - April 2025
                </h3>

                <div className="mb-10 min-h-[192px]">
                  <div className="text-base sm:text-lg text-blue-900 font-semibold italic">
                    <Typewriter
                      words={[
                        "Developed a CRUD task management application using Next.js and MongoDB, customized interface, popup task details, and persistent storage, providing seamless task organization while enhancing user productivity.",
                      ]}
                      typeSpeed={7}
                    />
                  </div>
                </div>

                <div className="mt-auto pt-4">
                  <ul className="flex flex-wrap gap-2">
                    {["JavaScript", "React", "Next.js", "MongoDB"].map(
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

              {/* LeetCode Habit Tracker */}
              <div className="transition-transform duration-300 hover:scale-105 px-4 sm:px-6 py-6 sm:py-10 rounded-2xl flex flex-col h-auto bg-gray-100 shadow-lg bg-black/20 border border-white/10">
                <h2 className="text-xl sm:text-2xl font-bold">
                  LeetCode Habit Tracker
                </h2>
                <h3 className="text-base sm:text-lg mb-4 italic">
                  February 2025 - March 2025
                </h3>

                <div className="mb-10 min-h-[192px]">
                  <div className="text-base sm:text-lg text-blue-900 font-semibold italic">
                    <Typewriter
                      words={[
                        "Client-side mobile app that allows users to input, track, and update leetcode habits and goals through a minimal UI with async.",
                      ]}
                      typeSpeed={7}
                    />
                  </div>
                </div>

                <div className="mt-auto pt-4">
                  <ul className="flex flex-wrap gap-2">
                    {["JavaScript", "React Native", "HTML", "CSS"].map(
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

              {/* Mycobiome Simulator */}
              <div className="transition-transform duration-300 hover:scale-105 px-4 sm:px-6 py-6 sm:py-10 rounded-2xl flex flex-col h-auto bg-gray-100 shadow-lg bg-black/20 border border-white/10">
                <h2 className="text-xl sm:text-2xl font-bold mb-4">
                  Mycobiome Simulator Researcher Tool Set
                </h2>

                <div className="mb-10 min-h-[192px]">
                  <div className="text-base sm:text-lg text-blue-900 font-semibold italic">
                    <Typewriter
                      words={[
                        "Led an interdisciplinary team to develop a predictive tool for researchers to measure mycobiomes with live data visualization across 10+ test cases.",
                      ]}
                      typeSpeed={7}
                    />
                  </div>
                </div>

                <div className="mt-auto pt-4">
                  <ul className="flex flex-wrap gap-2">
                    {["Python"].map((skill, index) => (
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

              {/* Professional Website */}
              <div className="transition-transform duration-300 hover:scale-105 px-4 sm:px-6 py-6 sm:py-10 rounded-2xl flex flex-col h-auto bg-gray-100 shadow-lg bg-black/20 border border-white/10">
                <h2 className="text-xl sm:text-2xl font-bold mb-4">
                  Professional Website
                </h2>

                <div className="mb-10 min-h-[192px]">
                  <div className="text-base sm:text-lg text-blue-900 font-semibold italic">
                    <Typewriter
                      words={[
                        "Created a fully responsive and interactive portfolio website with Next.js to showcase projects, professional experience, and resume, featuring a modern design with smooth animations, mobile optimization, and seamless navigation.",
                      ]}
                      typeSpeed={7}
                    />
                  </div>
                </div>

                <div className="mt-auto pt-4">
                  <ul className="flex flex-wrap gap-2">
                    {[
                      "JavaScript",
                      "React",
                      "Next.js",
                      "HTML",
                      "CSS",
                      "CI/CD",
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

              {/* Swarm Intelligence */}
              <div className="transition-transform duration-300 hover:scale-105 px-4 sm:px-6 py-6 sm:py-10 rounded-2xl flex flex-col h-auto bg-gray-100 shadow-lg bg-black/20 border border-white/10">
                <h2 className="text-xl sm:text-2xl font-bold mb-4">
                  Swarm Intelligence For Waste Management
                </h2>

                <div className="mb-10 min-h-[192px]">
                  <div className="text-base sm:text-lg text-blue-900 font-semibold italic">
                    <Typewriter
                      words={[
                        "Developed an AI solution using Ant Colony Optimization to reduce route inefficiencies by 10% to advance waste-to-energy goals. Winning 2nd Place as a Solo Developer.",
                      ]}
                      typeSpeed={7}
                    />
                  </div>
                </div>

                <div className="mt-auto pt-4">
                  <ul className="flex flex-wrap gap-2">
                    {["Python"].map((skill, index) => (
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

              {/* Piezoelectric Ceramic Analyzer */}
              <div className="transition-transform duration-300 hover:scale-105 px-4 sm:px-6 py-6 sm:py-10 rounded-2xl flex flex-col h-auto bg-gray-100 shadow-lg bg-black/20 border border-white/10">
                <h2 className="text-xl sm:text-2xl font-bold mb-4">
                  Piezoelectric Ceramic Analyzer
                </h2>

                <div className="mb-10 min-h-[192px]">
                  <div className="text-base sm:text-lg text-blue-900 font-semibold italic">
                    <Typewriter
                      words={[
                        "Developed a flexible testing system for sonobuoy piezoelectric ceramics, reducing testing time by 75% (160 to 40 seconds). Integrated a database to automate data collection for thousands of tests, halving retrieval time while ensuring accuracy.",
                      ]}
                      typeSpeed={7}
                    />
                  </div>
                </div>

                <div className="mt-auto pt-4">
                  <ul className="flex flex-wrap gap-2">
                    {[
                      "C",
                      "LabWindows/CVI",
                      "SQL",
                      "Instrument Integration",
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
          </section>
        </motion.div>
      </main>
    </div>
  );
};

export default projects;
