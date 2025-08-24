"use client";

import React from "react";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";

export default function Home() {
  return (
    <div className="min-h-screen font-sans">
      {/* Main Content */}
      <main className="relative z-10 max-w-6xl mx-auto px-4 sm:px-8 py-6 sm:py-12">
        <div className="w-full md:w-2/3 lg:w-1/2">
          {/* Intro Section */}
          <section>
            <motion.div
              initial={{ opacity: 0, y: -800 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                type: "spring",
                stiffness: 50,
                damping: 15,
                delay: 1.5,
              }}
            >
              <h1 className="text-4xl sm:text-6xl font-bold text-gray-900 mb-4">
                Hey!
              </h1>
              <div
                className="text-3xl text-blue-900 font-semibold italic"
                style={{ height: "30px" }}
              >
                <Typewriter
                  words={[
                    "I'm Manuel",
                    "I'm a Learner",
                    "I'm a Developer",
                    "I'm a Leader",
                    "I'm a Doer",
                    "I'm Manuel",
                  ]}
                  typeSpeed={100}
                  deleteSpeed={50}
                  delaySpeed={3000}
                />
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: -800 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                type: "spring",
                stiffness: 50,
                damping: 15,
                delay: 1.5,
              }}
            >
              <div className="mt-8">
                <p className="text-base sm:text-lg md:text-xl text-gray-700 font-semibold leading-relaxed">
                  I'm an aspiring software engineer and I want to build
                  technology that creates wonder. My journey started in middle
                  school with an engineering program and has continued through
                  college studying computer science and artificial intelligence.
                  My interests in process improvement and enterprise design have
                  taught me to adapt, learn quickly, and collaborate with great
                  people. I'm determined to contribute to projects with emerging
                  technologies and open to exploring roles where I can make the
                  most impact.
                </p>
              </div>
            </motion.div>
          </section>

          {/* Skills Section */}
          <section className="mb-6">
            <motion.div
              initial={{ opacity: 0, x: -800 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                type: "spring",
                stiffness: 50,
                damping: 15,
                delay: 1.5,
              }}
              className="mt-8 sm:mt-11 bg-gray-100 rounded-xl border border-gray-200 p-4 sm:p-8 text-gray-800 shadow-lg"
            >
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-4">
                <div>
                  <h3 className="font-semibold mb-2 text-gray-800">
                    My Languages:
                  </h3>
                  <ul className="flex flex-wrap">
                    {["Python", "C/C++", "JavaScript", "Java", "SQL"].map(
                      (skill, index) => (
                        <li
                          key={index}
                          className="transition-transform duration-300 hover:scale-110 bg-blue-100 text-blue-800 px-2 sm:px-3 py-1 rounded-full inline-block mr-2 mb-2 text-xs sm:text-sm"
                        >
                          {skill}
                        </li>
                      )
                    )}
                  </ul>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-800 mt-4 sm:mt-0 mb-2">
                    My Frameworks:
                  </h3>
                  <ul className="flex flex-wrap">
                    {[
                      "React",
                      "React Native",
                      "Angular",
                      "Next.js",
                      "Node.js",
                      "Flask",
                    ].map((tech, index) => (
                      <li
                        key={index}
                        className="transition-transform duration-300 hover:scale-110 bg-blue-100 text-blue-800 px-3 py-1 rounded-full inline-block mr-2 mb-2 text-sm"
                      >
                        {tech}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-800 mt-4 sm:mt-0 mb-2">
                    My Databases
                  </h3>
                  <ul className="flex flex-wrap">
                    {["MongoDB", "PostgreSQL", "Microsoft SQL Server"].map(
                      (skill, index) => (
                        <li
                          key={index}
                          className="transition-transform duration-300 hover:scale-110 bg-blue-100 text-blue-800 px-2 sm:px-3 py-1 rounded-full inline-block mr-2 mb-2 text-xs sm:text-sm"
                        >
                          {skill}
                        </li>
                      )
                    )}
                  </ul>
                </div>
              </div>
            </motion.div>
          </section>
        </div>
      </main>
    </div>
  );
}
