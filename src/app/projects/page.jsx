"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";

const Projects = () => {
  const projects = [
    {
      title: "Theme Park Ticketing System",
      date: "August 2025 - August 2025",
      description: [
        "Built a full-stack ticketing platform to simulate themepark purchasing pipeline and database processing and automated testing.",
        "Ensured robust frontend/backend integration and database reliability."
      ],
      skills: ["React", "Flask", "PostgresSQL", "Selenium"]
    },
    {
      title: "Disney Emissions Dashboard",
      date: "June 2025 - July 2025",
      description: [
        "Developed interactive sustainability dashboard for Disney to visualize Scope 1-3 carbon emissions.",
        "Integrated petition registration feature and tracked progress toward 2030 net zero targets."
      ],
      skills: ["JavaScript"]
    },
    {
      title: "Voice-Controlled Robot Assistant",
      date: "April 2025 - May 2025",
      description: [
        "Engineered voice-interactive robot using Python for speech recognition, Arduino for servo motor control.",
        "Implemented Google's Gemini API for natural language processing to create responsive physical interaction."
      ],
      skills: ["Python", "Arduino"]
    },
    {
      title: "Thrill Seeker",
      date: "April 2025 - May 2025",
      description: [
        "Created GeoGuessr-inspired theme park location guessing game on Universal and Disney using JavaScript.",
        "Features dynamic image maps, randomized clues, and adjustable difficulty to ensure replayability."
      ],
      skills: ["JavaScript"],
      link: "https://mgcapiendo.github.io/thrillseeker/",
      img: "/images/thrillseekerlogo.jpg"
    },
    {
      title: "Schedule Optimizer",
      date: "March 2025 - April 2025",
      description: [
        "Developed a CRUD task management app using Next.js and MongoDB.",
        "Customized interface, popup task details, and persistent storage for personal organization."
      ],
      skills: ["JavaScript", "React", "Next.js", "MongoDB"]
    },
    {
      title: "LeetCode Habit Tracker",
      date: "February 2025 - March 2025",
      description: [
        "Mobile app created to input, track, and update leetcode habits.",
        "Created to meet study goals, see progress, and built personal timeline"
      ],
      skills: ["JavaScript", "React Native"]
    },
    {
      title: "Mycobiome Simulator Researcher Tool Set",
      date: "January 2025 - January 2025",
      description: [
        "Led 4-person interdisciplinary team to develop proof-of-concept predictive tool.",
        "Live data visualization across 10+ test cases for human mycobiomes."
      ],
      skills: ["Python"]
    },
    {
      title: "Professional Portfolio Website",
      date: "February 2025 - February 2025",
      description: [
        "Created fully responsive portfolio website with React to showcase projects and resume.",
        "Ensured functionality over different devices and locations, hosted on vercel using Next.js and porkbun for domain"
      ],
      skills: ["JavaScript", "React", "Next.js"]
    },
    {
      title: "Swarm Intelligence For Waste Management",
      date: "August 2024 - August 2024",
      description: [
        "Developed a swarm intelligence solution using Ant Colony Optimization to reduce route inefficiencies and overhead by 10% for waste management trucks.",
        "Achieved 2nd place as solo developer for waste-to-energy optimization applications."
      ],
      skills: ["Python"]
    },
    {
      title: "Piezoelectric Ceramic Analyzer",
      date: "May 2024 - August 2024",
      description: [
        "Developed flexible testing system for sonobuoy piezoelectric ceramics, reducing test time by 75%.",
        "Integrated database for automated data collection and improved accuracy and retrieval by 50%."
      ],
      skills: ["C", "SQL", "Microsoft SQL Server", "HIOKI Impedance Analyzer"]
    }
  ];

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
          <section className="py-10 sm:py-20 w-full max-w-[1800px] mx-auto px-4 md:px-8 lg:px-16 xl:px-24 space-y-4 leading-relaxed">

            {/* Page Title */}
            <div className="text-center mb-8 sm:mb-12">
              <h1 className="text-4xl sm:text-5xl font-bold text-black mb-6">
                My Projects
              </h1>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 w-full">
              {projects.map((proj, idx) => (
                <div
                  key={idx}
                  className="transition-transform duration-300 hover:scale-105 px-4 sm:px-6 py-6 sm:py-10 rounded-2xl flex flex-col h-auto bg-gray-100 shadow-lg bg-black/20 border border-white/10"
                >
                  <h2 className="text-xl sm:text-2xl font-bold">{proj.title}</h2>
                  <h3 className="text-base sm:text-lg mb-4 italic">{proj.date}</h3>

                  <div className="space-y-2 text-base sm:text-lg text-blue-900 font-semibold italic">
                    {proj.description.slice(0, -1).map((line, i) => (
                      <p key={i}>{line}</p>
                    ))}
                    <p>
                      <Typewriter
                        words={[proj.description[proj.description.length - 1]]}
                        typeSpeed={15}
                      />
                    </p>
                  </div>

                  {proj.link && proj.img && (
                    <a href={proj.link} target="_blank">
                      <img
                        src={proj.img}
                        alt={`${proj.title} Logo`}
                        className="cursor-pointer hover:opacity-80 transition-opacity mt-4"
                      />
                    </a>
                  )}

                  <div className="mt-auto pt-4">
                    <ul className="flex flex-wrap gap-2">
                      {proj.skills.map((skill, i) => (
                        <li
                          key={i}
                          className="transition-transform duration-300 hover:scale-110 bg-blue-100 text-blue-800 px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm"
                        >
                          {skill}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>

            {/* Call to Action */}
            <div className="w-full mt-12 flex justify-center">
              <div className="flex flex-wrap justify-center gap-4">
                <Link
                  href="/about"
                  className="px-6 py-3 bg-blue-100 hover:bg-blue-200 text-blue-800 rounded-full transition-transform duration-300 hover:scale-105 shadow-md text-sm sm:text-base"
                >
                  View About
                </Link>
                <Link
                  href="/experience"
                  className="px-6 py-3 bg-blue-100 hover:bg-blue-200 text-blue-800 rounded-full transition-transform duration-300 hover:scale-105 shadow-md text-sm sm:text-base"
                >
                  View Experiences
                </Link>
                <Link
                  href="/contact"
                  className="px-6 py-3 bg-blue-100 hover:bg-blue-200 text-blue-800 rounded-full transition-transform duration-300 hover:scale-105 shadow-md text-sm sm:text-base"
                >
                  Let's Connect
                </Link>
                <Link
                  href="/ManuelCapiendo_SWE_Resume.pdf"
                  target="_blank"
                  className="px-6 py-3 bg-blue-100 hover:bg-blue-200 text-blue-800 rounded-full transition-transform duration-300 hover:scale-105 shadow-md text-sm sm:text-base"
                >
                  Download Resume
                </Link>
              </div>
            </div>

          </section>
        </motion.div>
      </main>
    </div>
  );
};

export default Projects;
