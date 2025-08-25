"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";

const experiences = [
  {
    title: "Florida Power & Light: IT Nuclear Solutions Analyst Intern",
    date: "May 2025 - Present",
    description: [
      "Gaining hands-on experience developing VR digital twin models in nuclear operations.",
      "Developing expertise in robotic and other emerging technologies implementation for enterprise efficiency."
    ],
    skills: ["VR", "Unity", "Robotics", "Drones", "Agile", "Leadership"]
  },
  {
    title: "Sparton Corporation: Acoustic Engineering Intern",
    date: "May 2024 - August 2024",
    description: [
      "Developed a new testing system for sonobuoy piezoelectric ceramics reducing testing time by 75%.",
      "Integrated a database to automate data collection for thousands of tests increasing retrieval time and accruacy by 50%."
    ],
    skills: ["C", "LabWindows/CVI", "SQL", "Software Development"]
  },
  {
    title: "NextEra Energy: Data Science Side Project",
    date: "June 2025 - July 2025",
    description: [
      "Improved an existing Python script to replace local file ingestion with AWS S3 data transfer.",
      "Efficiently extracted, sanitized, and preprocessed 150K+ nuclear documents for BERTopic modeling."
    ],
    skills: ["Python","AWS", "Agile"]
  },
  {
    title: "NEXT100 IT Hackathon 🏆",
    date: "July 2025",
    description: [
      "Led team of 5 to develop internal AI career support tool leveraging organizational data to suggest role transitions based on employee skills and backgrounds based on successful career transitions, with similar solution later adopted by the company."
    ],
    skills: ["Python", "React", "Presentation", "Software Development", "Leadership",]
  },
  {
    title: "Biotech Hackathon",
    date: "January 2025",
    description: [
      "Led a team of 4 to develop a predictive tool for researchers to measure mycobiomes.",
      "Live data visualization across 10+ test cases for accurate research insights."
    ],
    skills: ["Python", "Leadership", "Adaptability", "Public Speaking", "Research"]
  },
  {
    title: "Cognitive Hackathon 🏆",
    date: "August 2024",
    description: [
      "Developed a swarm intelligence solution using Ant Colony Optimization to reduce route inefficiencies and overhead by 10% for waste management trucks."
    ],
    skills: ["Python", "Time Management", "Presentation", "Public Speaking", "Research"]
  },
  {
    title: "South Florida Tech Hub: Instructional Coder",
    date: "February 2025 - Present",
    description: [
      "Assisting in monthly coding classes for K-12 students, fostering an engaging learning environment."
    ],
    skills: ["Programming", "Teaching", "Public Speaking"]
  },
  {
    title: "Naval Reserve Officer Training Corps: Midshipman",
    date: "August 2021 - May 2023",
    description: [
      "Cultivated advanced leadership skills through comprehensive military training."
    ],
    skills: ["Military", "Leadership", "Public Speaking", "Professionalism", "Priority Management"]
  },
  {
    title: "Asian American Association: Ambassador",
    date: "Spring 2022 - Spring 2023",
    description: [
      "Developed event coordination and cross-cultural communication skills by supporting 11 diverse cultural events."
    ],
    skills: ["Cultural Education", "Leadership", "Public Speaking", "Entertainment"]
  }
];

const Experience = () => {
  return (
    <div className="min-h-screen font-sans">
      <main className="relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 800 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", stiffness: 50, damping: 15, delay: 0.5 }}
        >
          <section className="py-6 sm:py-10 md:py-16 w-full max-w-[1700px] mx-auto px-6 sm:px-8 md:px-12 lg:px-16 space-y-4 sm:space-y-6">

            {/* Page Title */}
            <div className="text-center mb-8 sm:mb-12">
              <h1 className="text-4xl sm:text-5xl font-bold text-black mb-6">
                My Experiences
              </h1>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 w-full">
              {experiences.map((exp, idx) => (
                <div
                  key={idx}
                  className="transition-transform duration-300 hover:scale-105 px-6 sm:px-8 py-8 sm:py-10 rounded-2xl flex flex-col h-auto bg-gray-100 shadow-lg bg-black/20 border border-white/10"
                >
                  <h2 className="text-lg sm:text-xl md:text-2xl font-bold">{exp.title}</h2>
                  <h3 className="text-base sm:text-lg mb-4 italic">{exp.date}</h3>

                  <div className="space-y-2 text-sm sm:text-base md:text-lg text-blue-900 font-semibold italic">
                    {exp.description.slice(0, -1).map((line, i) => (
                      <p key={i}>{line}</p>
                    ))}
                    <p>
                      <Typewriter
                        words={[exp.description[exp.description.length - 1]]}
                        typeSpeed={15}
                      />
                    </p>
                  </div>

                  <div className="mt-auto pt-4">
                    <ul className="flex flex-wrap gap-2">
                      {exp.skills.map((skill, i) => (
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
                  href="/projects"
                  className="px-6 py-3 bg-blue-100 hover:bg-blue-200 text-blue-800 rounded-full transition-transform duration-300 hover:scale-105 shadow-md text-sm sm:text-base"
                >
                  View Projects
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

export default Experience;
