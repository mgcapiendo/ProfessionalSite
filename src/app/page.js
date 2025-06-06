"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";

export default function Home() {
  return (
    //div that will store everything
    <div className="relative min-h-screen overflow-hidden bg-sky-100 font-sans">
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

        {/*bottom hill */}
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

      {/*sun */}
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

      {/*clouds */}
      <motion.div
        initial={{ opacity: 1, x: -300, y: -120 }}
        animate={{ opacity: 1, x: 2200, y: -120 }}
        transition={{
          type: "tween",
          stiffness: 30,
          damping: 10,
          duration: 80,
          delay: 6,
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

      {/*Cloud phase 1 */}
      {/*clouds */}
      <motion.div
        initial={{ opacity: 1, x: -300, y: -300 }}
        animate={{ opacity: 1, x: 2200, y: -300 }}
        transition={{
          type: "tween",
          stiffness: 30,
          damping: 10,
          duration: 80,
          delay: 7,
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

      {/*Cloud phase 2 */}
      {/*clouds */}
      <motion.div
        initial={{ opacity: 1, x: -300, y: -310 }}
        animate={{ opacity: 1, x: 2200, y: -310 }}
        transition={{
          type: "tween",
          stiffness: 30,
          damping: 10,
          duration: 80,
          delay: 29,
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
      {/*clouds */}
      <motion.div
        initial={{ opacity: 1, x: -300, y: -130 }}
        animate={{ opacity: 1, x: 2200, y: -130 }}
        transition={{
          type: "tween",
          stiffness: 30,
          damping: 10,
          duration: 80,
          delay: 32,
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

      {/*Cloud phase 3*/}
      {/*clouds */}
      <motion.div
        initial={{ opacity: 1, x: -300, y: -280 }}
        animate={{ opacity: 1, x: 2200, y: -280 }}
        transition={{
          type: "tween",
          stiffness: 30,
          damping: 10,
          duration: 80,
          delay: 50,
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
      {/*clouds */}
      <motion.div
        initial={{ opacity: 1, x: -300, y: -110 }}
        animate={{ opacity: 1, x: 2200, y: -110 }}
        transition={{
          type: "tween",
          stiffness: 30,
          damping: 10,
          duration: 80,
          delay: 53,
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

      {/*lets see if a bird is possible*/}
      <motion.div
        initial={{ opacity: 1, x: -250, y: -180 }}
        animate={{ opacity: 1, x: 2200, y: -180 }}
        transition={{
          type: "intertia",
          stiffness: 90,
          damping: 30,
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

      <motion.div
        initial={{ opacity: 1, x: -270, y: -120 }}
        animate={{ opacity: 1, x: 2200, y: -120 }}
        transition={{
          type: "intertia",
          stiffness: 90,
          damping: 30,
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

      <motion.div
        initial={{ opacity: 1, x: -250, y: -140 }}
        animate={{ opacity: 1, x: 2200, y: -140 }}
        transition={{
          type: "intertia",
          stiffness: 90,
          damping: 30,
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

      <motion.div
        initial={{ opacity: 1, x: -220, y: -160 }}
        animate={{ opacity: 1, x: 2200, y: -160 }}
        transition={{
          type: "intertia",
          stiffness: 90,
          damping: 30,
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

      <motion.div
        initial={{ opacity: 1, x: -280, y: -200 }}
        animate={{ opacity: 1, x: 2200, y: -200 }}
        transition={{
          type: "intertia",
          stiffness: 90,
          damping: 30,
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

      <motion.div
        initial={{ opacity: 1, x: -290, y: -100 }}
        animate={{ opacity: 1, x: 2200, y: -100 }}
        transition={{
          type: "intertia",
          stiffness: 90,
          damping: 30,
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

      {/*this inner div stores everything that is NOT the background*/}
      <div className="relative mx-auto p-4 sm:p-10 font-sans">
        {/*navbar at the top of the screen */}
        <header className="flex flex-col sm:flex-row justify-between items-center mb-5 gap-4">
          {" "}
          {/*flex allows for my dynamic positioning, justify between pushes h1 to the left and nav to the right, items-center is for vertical centering, mb-8 is for adding space at the bottom of the container*/}
          <motion.div
            initial={{ opacity: 0, x: -800 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              type: "spring",
              stiffness: 50,
              damping: 15,
              delay: 0.3,
            }}
          >
            <Link
              href="/"
              className="text-2xl sm:text-3xl font-bold text-gray-900"
            >
              {" "}
              {/*text-3xl sets it to 30px and goes from xs,sm,base,lg,xl,2xl-9xl, font-bold makes it bold and can be replaced with sans, serif, mono, etc, text-gray-900 is default text color and intensity and can be adjusted to anything*/}
              Manuel Capiendo
            </Link>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: -1000 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              type: "spring",
              stiffness: 50,
              damping: 15,
              delay: 0.3,
            }}
          >
            <nav className="flex flex-wrap justify-center space-x-2 sm:space-x-4 shadow-md p-3 rounded-xl bg-gray-100 font-semibold text-sm sm:text-base">
              {" "}
              {/*space-x-4 is for horizontally spacing the children of this tag */}
              {/*good practice to use Link for internal routing, and anchor for external sites*/}
              <Link
                href="/"
                className="text-blue-900  hover:text-blue-500 transition-colors duration-300 mb-1 sm:mb-0"
              >
                Home
              </Link>{" "}
              {/*text-blue-900 is for setting the color and intensity, hover: declares when the mouse is over it, underlines it on hover and turns it blue, transistion-colors duration-300 makes it smoothly change the color over 300ms instead of instant*/}
              <Link
                href="/projects"
                className="text-blue-900  hover:text-blue-500 transition-colors duration-300 mb-1 sm:mb-0"
              >
                Projects
              </Link>{" "}
              {/*text-blue-900 is for setting the color and intensity, hover: declares when the mouse is over it, underlines it on hover and turns it blue, transistion-colors duration-300 makes it smoothly change the color over 300ms instead of instant*/}
              <Link
                href="/experience"
                className="text-blue-900  hover:text-blue-500 transition-colors duration-300 mb-1 sm:mb-0"
              >
                Experience
              </Link>{" "}
              <Link
                href="/contact"
                className="text-blue-900  hover:text-blue-500 transition-colors duration-300 mb-1 sm:mb-0"
              >
                Contact
              </Link>{" "}
              {/*text-gray-600 is for setting the color and intensity, hover: declares when the mouse is over it, underlines it on hover and turns it blue, transistion-colors duration-300 makes it smoothly change the color over 300ms instead of instant*/}
            </nav>
          </motion.div>
        </header>

        <main className="max-w-6xl mx-auto px-4 sm:px-8 py-6 sm:py-12">
          <div className="w-full md:w-2/3 lg:w-1/2">
            {" "}
            {/*LETS GOO LEFT COLUMN */}
            {/*intro section*/}
            <section>
              {" "}
              {/*previously i had the gray box but i dont want it anymore so no need for class name properties in this section */}
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
                    I'm an aspiring software engineer with a passion for
                    learning and creating innovative solutions. My background in
                    computer science, combined with my interest in interior
                    design and architecture, gives me a unique perspective on
                    problem-solving and user-centered design. I'm determined to
                    develop and collaborate on projects that help improve
                    productivity and create meaningful experiences for users.
                  </p>
                </div>
              </motion.div>
            </section>
            {/*skills section*/}
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
                      Programming Languages
                    </h3>
                    <ul className="flex flex-wrap">
                      {" "}
                      {/*space-y-2 adds spacing for the y-axis between the children of this tag with a space of 8px (1-20)*/}
                      {/*First we create an array of everything we want to include in our skills, .map() is a method to transform each item in the array and in this case according to a <li> tag, (skill,index) is a callback function that .map() calls for each item in our array and it takes skill (which is the current element) then index (which is what item it is currently on) and the arrow is just a quicker way to write a function and the function in this case returns the jsx which is the className we want to render for each skill*/}
                      {/*map() is a dynamic way of getting everything in the list rendered a specific way then doing it one by one */}
                      {["Python", "C/C++", "JavaScript", "HTML", "CSS"].map(
                        (skill, index) => (
                          <li
                            key={index}
                            className="transistion-transform duration-300 hover:scale-110 bg-blue-100 text-blue-800 px-2 sm:px-3 py-1 rounded-full inline-block mr-2 mb-2 text-xs sm:text-sm"
                          >
                            {skill}{" "}
                            {/*this is getting whats in the array and rendering it here for each index it iterates through*/}
                          </li>
                        )
                      )}
                    </ul>{" "}
                  </div>

                  <div>
                    <h3 className="font-semibold text-gray-800 mt-4 sm:mt-0 mb-2">
                      Frameworks & Libraries
                    </h3>
                    <ul className="flex flex-wrap">
                      {" "}
                      {/*space-y-2 adds spacing for the y-axis between the children of this tag with a space of 8px (1-20)*/}
                      {/*First we create an array of everything we want to include in our skills, .map() is a method to transform each item in the array and in this case according to a <li> tag, (skill,index) is a callback function that .map() calls for each item in our array and it takes skill (which is the current element) then index (which is what item it is currently on) and the arrow is just a quicker way to write a function and the function in this case returns the jsx which is the className we want to render for each skill*/}
                      {/*map() is a dynamic way of getting everything in the list rendered a specific way then doing it one by one */}
                      {["React & Native", "Angular", "Next.js", "Node.js"].map(
                        (tech, index) => (
                          <li
                            key={index}
                            className="transistion-transform duration-300 hover:scale-110 bg-blue-100 text-blue-800 px-3 py-1 rounded-full inline-block mr-2 mb-2 text-sm"
                          >
                            {tech}{" "}
                            {/*this is getting whats in the array and rendering it here for each index it iterates through*/}
                          </li>
                        )
                      )}
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-semibold text-gray-800 mt-4 sm:mt-0 mb-2">
                      Databases & Practices
                    </h3>
                    <ul className="flex flex-wrap">
                      {" "}
                      {/*space-y-2 adds spacing for the y-axis between the children of this tag with a space of 8px (1-20)*/}
                      {/*First we create an array of everything we want to include in our skills, .map() is a method to transform each item in the array and in this case according to a <li> tag, (skill,index) is a callback function that .map() calls for each item in our array and it takes skill (which is the current element) then index (which is what item it is currently on) and the arrow is just a quicker way to write a function and the function in this case returns the jsx which is the className we want to render for each skill*/}
                      {/*map() is a dynamic way of getting everything in the list rendered a specific way then doing it one by one */}
                      {["SQL", "MongoDB", "Agile", "Git", "CI/CD"].map(
                        (skill, index) => (
                          <li
                            key={index}
                            className="transistion-transform duration-300 hover:scale-110 bg-blue-100 text-blue-800 px-2 sm:px-3 py-1 rounded-full inline-block mr-2 mb-2 text-xs sm:text-sm"
                          >
                            {skill}{" "}
                            {/*this is getting whats in the array and rendering it here for each index it iterates through*/}
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
    </div>
  );
}
