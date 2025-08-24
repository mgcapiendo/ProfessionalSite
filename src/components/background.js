"use client";

import React from "react";
import { motion } from "framer-motion";

export default function Background() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-sky-100">
      {/* Animated Hills */}
      <motion.div
        className="absolute bottom-0 left-0 w-full"
        initial={{ opacity: 0, scaleY: 0 }}
        animate={{ opacity: 1, scaleY: 1 }}
        transition={{
          type: "spring",
          staggerChildren: 3,
          delayChildren: 0.1,
        }}
      >
        {/* Darkest Hill */}
        <motion.svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          className="absolute bottom-0"
          initial={{ y: 200, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            type: "spring",
            stiffness: 50,
            damping: 15,
            delay: 0.4,
          }}
        >
          <path
            fill="#106010"
            fillOpacity="0.9"
            d="M0,160 C320,80 640,32 960,96 C1280,160 1440,192 1440,192 L1440,320 L0,320 Z"
          />
        </motion.svg>

        {/* Middle Hill */}
        <motion.svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          className="absolute bottom-0"
          initial={{ y: 200, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            type: "spring",
            stiffness: 50,
            damping: 15,
            delay: 0.8,
          }}
        >
          <path
            fill="#107010"
            fillOpacity="0.9"
            d="M0,192 C320,128 640,96 960,128 C1280,160 1440,192 1440,192 L1440,320 L0,320 Z"
          />
        </motion.svg>

        {/* Bottom hill */}
        <motion.svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          className="absolute bottom-0"
          initial={{ y: 200, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            type: "spring",
            stiffness: 50,
            damping: 15,
            delay: 1.1,
          }}
        >
          <path
            fill="#108010"
            fillOpacity="0.9"
            d="M0,224 C320,160 640,128 960,160 C1280,192 1440,224 1440,224 L1440,320 L0,320 Z"
          />
        </motion.svg>
      </motion.div>

      {/* Sun */}
      <motion.div
        initial={{ opacity: 0, y: 245 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          type: "spring",
          stiffness: 50,
          damping: 15,
          duration: 1.5,
          delay: 1.4,
        }}
        className="absolute right-8 sm:right-20 md:right-40 lg:right-80 transform -translate-x-1/2 w-32 h-32 sm:w-48 sm:h-48 md:w-64 md:h-64 lg:w-80 lg:h-80 top-1/4"
      >
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <circle cx="50" cy="50" r="40" fill="yellow" />
        </svg>
      </motion.div>

      {/* Clouds - Consolidated for better performance */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 1, x: -300, y: -120 - i * 30 }}
          animate={{ opacity: 1, x: 2200, y: -120 - i * 30 }}
          transition={{
            type: "tween",
            duration: 80,
            delay: 6 + i * 8,
            repeat: Infinity,
            repeatType: "loop",
          }}
          className="absolute transform -translate-x-1/3 w-100 h-90 top-1/3"
        >
          <svg viewBox="0 0 40 100" className="w-full h-full">
            <circle cx="10" cy="10" r="10" fill="white" />
            <circle cx="20" cy="12" r="10" fill="white" />
            <circle cx="30" cy="10" r="10" fill="white" />
          </svg>
        </motion.div>
      ))}

      {/* Birds - Consolidated */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={`bird-${i}`}
          initial={{ opacity: 1, x: -250 - i * 20, y: -180 + i * 20 }}
          animate={{ opacity: 1, x: 2200, y: -180 + i * 20 }}
          transition={{
            type: "tween",
            duration: 40,
            delay: 10,
            repeat: Infinity,
            repeatType: "loop",
          }}
          className="absolute transform -translate-x-1/3 w-100 h-90 top-1/3"
        >
          <svg viewBox="1 20 600 300" className="w-full h-full">
            <line
              x1="30"
              y1="20"
              x2="50"
              y2="50"
              stroke="black"
              strokeWidth="3"
            />
            <line
              x1="30"
              y1="20"
              x2="10"
              y2="50"
              stroke="black"
              strokeWidth="3"
            />
            <line
              x1="50"
              y1="20"
              x2="70"
              y2="50"
              stroke="black"
              strokeWidth="3"
            />
            <line
              x1="50"
              y1="20"
              x2="30"
              y2="50"
              stroke="black"
              strokeWidth="3"
            />
          </svg>
        </motion.div>
      ))}
    </div>
  );
}
