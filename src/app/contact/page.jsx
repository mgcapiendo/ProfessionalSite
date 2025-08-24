"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";

const contact = () => {
  return (
    <div className="min-h-screen font-sans">
      {/* Contact Content */}
      <main className="relative z-10">
        <div className="w-full flex justify-center items-center mt-8 sm:mt-16 md:mt-24 lg:mt-32">
          <motion.div
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              type: "spring",
              stiffness: 50,
              damping: 15,
              delay: 1.3,
            }}
            className="w-full max-w-sm sm:max-w-md md:max-w-lg"
          >
            <div className="bg-gray-100 rounded-2xl shadow-lg p-6 sm:p-8 md:p-10 text-center">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
                Let's Stay in Touch
              </h2>

              <div className="h-12 mb-6">
                <div className="text-base sm:text-lg md:text-xl text-blue-900 font-semibold italic">
                  <Typewriter
                    words={["Here's How We Can Connect", "Have a Great Day!"]}
                    typeSpeed={100}
                    deleteSpeed={50}
                    delaySpeed={5000}
                  />
                </div>
              </div>

              <div className="flex flex-wrap justify-center gap-3 mb-6">
                <a
                  href="https://www.linkedin.com/in/capiendo/"
                  className="transition-transform duration-300 hover:scale-110 bg-blue-100 text-blue-500 px-4 py-2 rounded-full text-sm sm:text-base hover:bg-transparent border border-blue-100 transition-colors"
                  target="_blank"
                >
                  LinkedIn
                </a>

                <a
                  href="https://github.com/mgcapiendo"
                  className="transition-transform duration-300 hover:scale-110 bg-blue-100 text-blue-500 px-4 py-2 rounded-full text-sm sm:text-base hover:bg-transparent border border-blue-100 transition-colors"
                  target="_blank"
                >
                  GitHub
                </a>
              </div>

              <div className="mb-6">
                <p className="transition-transform duration-300 hover:scale-110 bg-blue-100 text-blue-500 px-4 py-2 rounded-full inline-block text-sm sm:text-base hover:bg-transparent border border-blue-100 transition-colors">
                  manuelgcapiendo@gmail.com
                </p>
              </div>

              <div>
                <Link
                  className="transition-transform duration-300 hover:scale-110 bg-blue-100 text-blue-500 px-4 py-2 rounded-full inline-block text-sm sm:text-base hover:bg-transparent border border-blue-100 transition-colors"
                  href="/ManuelCapiendo_CS_Senior_WebDev_Resume.pdf"
                  target="_blank"
                >
                  View Full Resume
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </main>
    </div>
  );
};

export default contact;
