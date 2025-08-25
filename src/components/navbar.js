"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Navbar() {
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    // Set hasAnimated to true after first load
    const timer = setTimeout(() => setHasAnimated(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <header className="relative z-20 flex flex-col sm:flex-row justify-between items-center mb-5 gap-4 mx-auto p-4 sm:p-10">
      <motion.div
        initial={hasAnimated ? { opacity: 1, x: 0 } : { opacity: 0, x: -800 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{
          type: "spring",
          stiffness: 50,
          damping: 15,
          delay: hasAnimated ? 0 : 0.3,
        }}
      >
        <Link href="/" className="text-2xl sm:text-3xl font-bold text-gray-900">
          Manuel Capiendo
        </Link>
      </motion.div>
      <motion.div
        initial={hasAnimated ? { opacity: 1, x: 0 } : { opacity: 0, x: -1000 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{
          type: "spring",
          stiffness: 50,
          damping: 15,
          delay: hasAnimated ? 0 : 0.3,
        }}
      >
        <nav className="flex flex-wrap justify-center space-x-2 sm:space-x-4 shadow-md p-3 rounded-xl bg-gray-100 font-semibold text-sm sm:text-base">
          <Link
            href="/"
            className="text-blue-900 hover:text-blue-500 transition-colors duration-300 mb-1 sm:mb-0"
          >
            Home
          </Link>
          <Link
            href="/about"
            className="text-blue-900 hover:text-blue-500 transition-colors duration-300 mb-1 sm:mb-0"
          >
            About
          </Link>
          <Link
            href="/projects"
            className="text-blue-900 hover:text-blue-500 transition-colors duration-300 mb-1 sm:mb-0"
          >
            Projects
          </Link>
          <Link
            href="/experience"
            className="text-blue-900 hover:text-blue-500 transition-colors duration-300 mb-1 sm:mb-0"
          >
            Experience
          </Link>
          <Link
            href="/contact"
            className="text-blue-900 hover:text-blue-500 transition-colors duration-300 mb-1 sm:mb-0"
          >
            Contact
          </Link>
        </nav>
      </motion.div>
    </header>
  );
}
