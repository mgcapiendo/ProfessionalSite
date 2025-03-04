'use client'

import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Typewriter } from 'react-simple-typewriter'

const experience = () => {
  return (

    <div className="relative min-h-screen overflow-hidden bg-sky-100"> 
    {/* Animated Hills */}
          <motion.div
            className="absolute bottom-0 left-0 w-full"
            initial={{ opacity: 0, scaleY: 0 }}
            animate={{ opacity: 1, scaleY: 1 }}
            transition={{
              type: 'spring',
              staggerChildren: 3,
              delayChildren: 0.1
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
                type: 'spring',
                stiffness: 50,
                damping: 15,
                delay: 0.4
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
                type: 'spring',
                stiffness: 50,
                damping: 15,
                delay: 0.8
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
                type: 'spring',
                stiffness: 50,
                damping: 15,
                delay: 1.1
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
                type: 'spring',
                stiffness: 50,
                damping: 15,
                duration: 1.5,
                delay: 1.4
              }}
              className="absolute right-8 sm:right-20 md:right-40 lg:right-80 transform -translate-x-1/2 w-32 h-32 sm:w-48 sm:h-48 md:w-64 md:h-64 lg:w-80 lg:h-80 top-1/4"
          >
              <svg viewBox="0 0 100 100" className="w-full h-full">
                <circle cx="50" cy="50" r="40" fill="yellow"/>
              </svg>
            </motion.div>
    
    
    
            <div className="hidden sm:block">
              {/*clouds */}
          <motion.div
            initial={{ opacity: 1, x: -300, y: -120}}
            animate={{ opacity: 1,x: 2200, y: -120}}
            transition={{
              type: 'tween',
              stiffness: 30,
              damping: 10,
              duration: 80,
              delay: 6,
              repeat: Infinity,
              repeatType: "loop"
            }}
            className="absolute transform -translate-x-1/3 w-100 h-90 top-1/3"
          >
            <svg viewBox='0 0 40 100' className='w-full h-full'>
              <circle cx="10" cy="10" r="10" fill="white"/>
              <circle cx="20" cy="12" r="10" fill="white"/>
              <circle cx="30" cy="10" r="10" fill="white"/>
            </svg>
    
          </motion.div>
    
          {/*Cloud phase 1 */}
            {/*clouds */}
            <motion.div
              initial={{ opacity: 1, x: -300, y: -300}}
              animate={{ opacity: 1,x: 2200, y: -300}}
              transition={{
                type: 'tween',
                stiffness: 30,
                damping: 10,
                duration: 80,
                delay: 7,
                repeat: Infinity,
                repeatType: "loop"
              }}
              className="absolute transform -translate-x-1/3 w-100 h-90 top-1/3"
            >
              <svg viewBox='0 0 40 100' className='w-full h-full'>
                <circle cx="10" cy="10" r="10" fill="white"/>
                <circle cx="20" cy="12" r="10" fill="white"/>
                <circle cx="30" cy="10" r="10" fill="white"/>
              </svg>
    
            </motion.div>
    
          {/*Cloud phase 2 */}
            {/*clouds */}
            <motion.div
              initial={{ opacity: 1, x: -300, y: -310}}
              animate={{ opacity: 1,x: 2200, y: -310}}
              transition={{
                type: 'tween',
                stiffness: 30,
                damping: 10,
                duration: 80,
                delay: 29,
                repeat: Infinity,
                repeatType: "loop"
              }}
              className="absolute transform -translate-x-1/3 w-100 h-90 top-1/3"
            >
              <svg viewBox='0 0 40 100' className='w-full h-full'>
                <circle cx="10" cy="10" r="10" fill="white"/>
                <circle cx="20" cy="12" r="10" fill="white"/>
                <circle cx="30" cy="10" r="10" fill="white"/>
              </svg>
            </motion.div>
            {/*clouds */}
            <motion.div
              initial={{ opacity: 1, x: -300, y: -130}}
              animate={{ opacity: 1,x: 2200, y: -130}}
              transition={{
                type: 'tween',
                stiffness: 30,
                damping: 10,
                duration: 80,
                delay: 32,
                repeat: Infinity,
                repeatType: "loop"
              }}
              className="absolute transform -translate-x-1/3 w-100 h-90 top-1/3"
            >
              <svg viewBox='0 0 40 100' className='w-full h-full'>
                <circle cx="10" cy="10" r="10" fill="white"/>
                <circle cx="20" cy="12" r="10" fill="white"/>
                <circle cx="30" cy="10" r="10" fill="white"/>
              </svg>
            </motion.div>
    
            {/*Cloud phase 3*/}
            {/*clouds */}
            <motion.div
              initial={{ opacity: 1, x: -300, y: -280}}
              animate={{ opacity: 1,x: 2200, y: -280}}
              transition={{
                type: 'tween',
                stiffness: 30,
                damping: 10,
                duration: 80,
                delay: 50,
                repeat: Infinity,
                repeatType: "loop"
              }}
              className="absolute transform -translate-x-1/3 w-100 h-90 top-1/3"
            >
              <svg viewBox='0 0 40 100' className='w-full h-full'>
                <circle cx="10" cy="10" r="10" fill="white"/>
                <circle cx="20" cy="12" r="10" fill="white"/>
                <circle cx="30" cy="10" r="10" fill="white"/>
              </svg>
            </motion.div>
            {/*clouds */}
            <motion.div
              initial={{ opacity: 1, x: -300, y: -110}}
              animate={{ opacity: 1,x: 2200, y: -110}}
              transition={{
                type: 'tween',
                stiffness: 30,
                damping: 10,
                duration: 80,
                delay: 53,
                repeat: Infinity,
                repeatType: "loop"
              }}
              className="absolute transform -translate-x-1/3 w-100 h-90 top-1/3"
            >
              <svg viewBox='0 0 40 100' className='w-full h-full'>
                <circle cx="10" cy="10" r="10" fill="white"/>
                <circle cx="20" cy="12" r="10" fill="white"/>
                <circle cx="30" cy="10" r="10" fill="white"/>
              </svg>
            </motion.div>
    
    
            {/*lets see if a bird is possible*/}
            <motion.div
              initial={{ opacity: 1, x: -250, y: -180}}
              animate={{ opacity: 1,x: 2200, y: -180}}
              transition={{
                type: 'intertia',
                stiffness: 90,
                damping: 30,
                duration: 40,
                delay: 10,
                repeat: Infinity,
                repeatType: "loop"
              }}
              className="absolute transform -translate-x-1/3 w-100 h-90 top-1/3"
            >
              <svg viewBox='1 20 600 300' className='w-full h-full'>
              <line x1="30" y1="20" x2="50" y2="50" stroke="black" strokeWidth="3" />
              <line x1="30" y1="20" x2="10" y2="50" stroke="black" strokeWidth="3" />
              <line x1="50" y1="20" x2="70" y2="50" stroke="black" strokeWidth="3" />
              <line x1="50" y1="20" x2="30" y2="50" stroke="black" strokeWidth="3" />
              </svg>
            </motion.div>
    
            <motion.div
              initial={{ opacity: 1, x: -270, y: -120}}
              animate={{ opacity: 1,x: 2200, y: -120}}
              transition={{
                type: 'intertia',
                stiffness: 90,
                damping: 30,
                duration: 40,
                delay: 10,
                repeat: Infinity,
                repeatType: "loop"
              }}
              className="absolute transform -translate-x-1/3 w-100 h-90 top-1/3"
            >
              <svg viewBox='1 20 600 300' className='w-full h-full'>
              <line x1="30" y1="20" x2="50" y2="50" stroke="black" strokeWidth="3" />
              <line x1="30" y1="20" x2="10" y2="50" stroke="black" strokeWidth="3" />
              <line x1="50" y1="20" x2="70" y2="50" stroke="black" strokeWidth="3" />
              <line x1="50" y1="20" x2="30" y2="50" stroke="black" strokeWidth="3" />
              </svg>
            </motion.div>
    
            <motion.div
              initial={{ opacity: 1, x: -250, y: -140}}
              animate={{ opacity: 1,x: 2200, y: -140}}
              transition={{
                type: 'intertia',
                stiffness: 90,
                damping: 30,
                duration: 40,
                delay: 10,
                repeat: Infinity,
                repeatType: "loop"
              }}
              className="absolute transform -translate-x-1/3 w-100 h-90 top-1/3"
            >
              <svg viewBox='1 20 600 300' className='w-full h-full'>
              <line x1="30" y1="20" x2="50" y2="50" stroke="black" strokeWidth="3" />
              <line x1="30" y1="20" x2="10" y2="50" stroke="black" strokeWidth="3" />
              <line x1="50" y1="20" x2="70" y2="50" stroke="black" strokeWidth="3" />
              <line x1="50" y1="20" x2="30" y2="50" stroke="black" strokeWidth="3" />
              </svg>
            </motion.div>
    
            <motion.div
              initial={{ opacity: 1, x: -220, y: -160}}
              animate={{ opacity: 1,x: 2200, y: -160}}
              transition={{
                type: 'intertia',
                stiffness: 90,
                damping: 30,
                duration: 40,
                delay: 10,
                repeat: Infinity,
                repeatType: "loop"
              }}
              className="absolute transform -translate-x-1/3 w-100 h-90 top-1/3"
            >
              <svg viewBox='1 20 600 300' className='w-full h-full'>
              <line x1="30" y1="20" x2="50" y2="50" stroke="black" strokeWidth="3" />
              <line x1="30" y1="20" x2="10" y2="50" stroke="black" strokeWidth="3" />
              <line x1="50" y1="20" x2="70" y2="50" stroke="black" strokeWidth="3" />
              <line x1="50" y1="20" x2="30" y2="50" stroke="black" strokeWidth="3" />
              </svg>
            </motion.div>
    
            <motion.div
              initial={{ opacity: 1, x: -280, y: -200}}
              animate={{ opacity: 1,x: 2200, y: -200}}
              transition={{
                type: 'intertia',
                stiffness: 90,
                damping: 30,
                duration: 40,
                delay: 10,
                repeat: Infinity,
                repeatType: "loop"
              }}
              className="absolute transform -translate-x-1/3 w-100 h-90 top-1/3"
            >
              <svg viewBox='1 20 600 300' className='w-full h-full'>
              <line x1="30" y1="20" x2="50" y2="50" stroke="black" strokeWidth="3" />
              <line x1="30" y1="20" x2="10" y2="50" stroke="black" strokeWidth="3" />
              <line x1="50" y1="20" x2="70" y2="50" stroke="black" strokeWidth="3" />
              <line x1="50" y1="20" x2="30" y2="50" stroke="black" strokeWidth="3" />
              </svg>
            </motion.div>
    
            <motion.div
              initial={{ opacity: 1, x: -290, y: -100}}
              animate={{ opacity: 1,x: 2200, y: -100}}
              transition={{
                type: 'intertia',
                stiffness: 90,
                damping: 30,
                duration: 40,
                delay: 10,
                repeat: Infinity,
                repeatType: "loop"
              }}
              className="absolute transform -translate-x-1/3 w-100 h-90 top-1/3"
            >
              <svg viewBox='1 20 600 300' className='w-full h-full'>
              <line x1="30" y1="20" x2="50" y2="50" stroke="black" strokeWidth="3" />
              <line x1="30" y1="20" x2="10" y2="50" stroke="black" strokeWidth="3" />
              <line x1="50" y1="20" x2="70" y2="50" stroke="black" strokeWidth="3" />
              <line x1="50" y1="20" x2="30" y2="50" stroke="black" strokeWidth="3" />
              </svg>
            </motion.div>
            </div>



            

    <div className= "relative mx-auto p-10 font-sans leading-relaxed">
      {/*navbar at the top of the screen */}
      <header className='flex flex-col sm:flex-row justify-between items-center mb-5 gap-4'> {/*flex allows for my dynamic positioning, justify between pushes h1 to the left and nav to the right, items-center is for vertical centering, mb-8 is for adding space at the bottom of the container*/}
        <motion.div
                  initial={{ opacity: 0, x: -800 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ 
                    type: 'spring',
                    stiffness: 50,
                    damping: 15,
                    delay: 0.3
                    }}
                >
          <Link href="/" className='text-2xl sm:text-3xl font-bold text-gray-900'> {/*text-3xl sets it to 30px and goes from xs,sm,base,lg,xl,2xl-9xl, font-bold makes it bold and can be replaced with sans, serif, mono, etc, text-gray-900 is default text color and intensity and can be adjusted to anything*/}
            Manuel Capiendo
          </Link>
          </motion.div>
            
          <motion.div
                  initial={{ opacity: 0, x: -1000 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ 
                    type: 'spring',
                    stiffness: 50,
                    damping: 15,
                    delay: 0.3 }}
                >
            <nav className='flex flex-wrap justify-center space-x-2 sm:space-x-4 shadow-md p-3 rounded-xl bg-gray-100 font-semibold text-sm sm:text-base'> {/*space-x-4 is for horizontally spacing the children of this tag */} 
              {/*good practice to use Link for internal routing, and anchor for external sites*/}
              <Link 
              href="/"
              className='text-blue-900  hover:text-blue-500 transition-colors duration-300 mb-1 sm:mb-0'
              >Home</Link> {/*text-blue-900 is for setting the color and intensity, hover: declares when the mouse is over it, underlines it on hover and turns it blue, transistion-colors duration-300 makes it smoothly change the color over 300ms instead of instant*/}

              <Link 
              href="/projects"
              className='text-blue-900  hover:text-blue-500 transition-colors duration-300 mb-1 sm:mb-0'
              >Projects</Link> {/*text-blue-900 is for setting the color and intensity, hover: declares when the mouse is over it, underlines it on hover and turns it blue, transistion-colors duration-300 makes it smoothly change the color over 300ms instead of instant*/}

              <Link 
              href="/experience"
              className='text-blue-900  hover:text-blue-500 transition-colors duration-300 mb-1 sm:mb-0'
              >Experience</Link> {/*text-blue-900 is for setting the color and intensity, hover: declares when the mouse is over it, underlines it on hover and turns it blue, transistion-colors duration-300 makes it smoothly change the color over 300ms instead of instant*/}

              <a 
              href="https://github.com/mgcapiendo"
              className='text-blue-900  hover:text-blue-500 transition-colors duration-300 mb-1 sm:mb-0'
              >Github</a> {/*text-blue-900 is for setting the color and intensity, hover: declares when the mouse is over it, underlines it on hover and turns it blue, transistion-colors duration-300 makes it smoothly change the color over 300ms instead of instant*/}

              <a 
              href="https://www.linkedin.com/in/capiendo/"
              className='text-blue-900  hover:text-blue-500 transition-colors duration-300 mb-1 sm:mb-0'
              >Linkedin</a> {/*text-blue-900 is for setting the color and intensity, hover: declares when the mouse is over it, underlines it on hover and turns it blue, transistion-colors duration-300 makes it smoothly change the color over 300ms instead of instant*/}

              <Link 
              href="/contact"
              className='text-blue-900  hover:text-blue-500 transition-colors duration-300 mb-1 sm:mb-0'
              >Contact</Link> {/*text-gray-600 is for setting the color and intensity, hover: declares when the mouse is over it, underlines it on hover and turns it blue, transistion-colors duration-300 makes it smoothly change the color over 300ms instead of instant*/}
            </nav>
          </motion.div>
        </header>


        <motion.div
            initial={{ opacity: 0, y: 800 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ 
            type: 'spring',
            stiffness: 50,
            damping: 15,
            delay: 0.5
            }}
        >











 

        <section className="py-6 sm:py-10 md:py-16 w-full max-w-[1700px] mx-auto px-6 sm:px-8 md:px-12 lg:px-16 space-y-4 sm:space-y-6">

            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 w-full">
             
              <div className="transition-transform duration-300 hover:scale-105 px-14 sm:px-16 py-10 sm:py-12 rounded-2xl flex flex-col h-auto bg-gray-100 shadow-lg bg-black/20 border border-white/10">
                <h2 className="text-lg sm:text-xl md:text-2xl font-bold">NextEra Energy: IT Nuclear Solutions Analyst Intern</h2>
                <h3 className='text-base sm:text-lg mb-4 italic'>Summer 2025</h3>
                
                <div className="mb-10 min-h-[100px]">
                  <div className="text-sm sm:text-base md:text-lg text-blue-900 font-semibold italic">
                    <Typewriter 
                      words={["Gaining hands-on experience developing AI-powered digital twin models in nuclear operations, developing expertise in both AI implementation and industrial system optimization."]} 
                      typeSpeed={8}
                    />
                  </div>
                </div>
                
                <div className="mt-auto pt-4">
                  <ul className='flex flex-wrap gap-2'> 
                    {['AI', 'Drones', 'Agile', 'Leadership'].map((skill, index) => ( 
                      <li
                        key={index} 
                        className='transition-transform duration-300 hover:scale-110 bg-blue-100 text-blue-800 px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm'
                      >
                        {skill} 
                      </li>
                    ))}
                  </ul>  
                </div>
              </div>

            
              <div className="transition-transform duration-300 hover:scale-105 px-14 sm:px-16 py-10 sm:py-12 rounded-2xl flex flex-col h-auto bg-gray-100 shadow-lg bg-black/20 border border-white/10">
                <h2 className="text-lg sm:text-xl md:text-2xl font-bold">Sparton Corporation: Acoustic Engineering Intern</h2>
                <h3 className='text-base sm:text-lg mb-4 italic'>Summer 2024</h3>
                
                <div className="mb-10 min-h-[100px]">
                  <div className="text-sm sm:text-base md:text-lg text-blue-900 font-semibold italic">
                    <Typewriter 
                      words={["Developed a flexible testing system for sonobuoy piezoelectric ceramics, reducing testing time by 75% (160 to 40 seconds). Integrated a database to automate data collection for thousands of tests, halving retrieval time while ensuring accuracy."]} 
                      typeSpeed={8}
                    />
                  </div>
                </div>
                
                <div className="mt-auto pt-4">
                  <ul className='flex flex-wrap gap-2'> 
                    {['C', 'LabWindows/CVI', 'SQL', 'Software Development', 'Department Collaboration'].map((skill, index) => ( 
                      <li
                        key={index} 
                        className='transition-transform duration-300 hover:scale-110 bg-blue-100 text-blue-800 px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm'
                      >
                        {skill} 
                      </li>
                    ))}
                  </ul>  
                </div>
              </div>
            </div>

         
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 w-full">
              
            <div className="transition-transform duration-300 hover:scale-105 px-14 sm:px-16 py-10 sm:py-12 rounded-2xl flex flex-col h-auto bg-gray-100 shadow-lg bg-black/20 border border-white/10">
                <h2 className="text-lg sm:text-xl md:text-2xl font-bold">Cognitive Hackathon: 2nd Place Solo Developer</h2>
                <h3 className='text-base sm:text-lg mb-4 italic'>August 2024</h3>
                
                <div className="mb-10 min-h-[100px]">
                  <div className="text-sm sm:text-base md:text-lg text-blue-900 font-semibold italic">
                    <Typewriter 
                      words={["Developed an AI solution using Ant Colony Optimization to reduce route inefficiencies by 10% to advance waste-to-energy goals."]} 
                      typeSpeed={8}
                    />
                  </div>
                </div>
                
                <div className="mt-auto pt-4">
                  <ul className='flex flex-wrap gap-2'> 
                    {['Python', 'Time Management', 'Presentation', 'Public Speaking', 'Research'].map((skill, index) => ( 
                      <li
                        key={index} 
                        className='transition-transform duration-300 hover:scale-110 bg-blue-100 text-blue-800 px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm'
                      >
                        {skill} 
                      </li>
                    ))}
                  </ul>  
                </div>
              </div>

            
              <div className="transition-transform duration-300 hover:scale-105 px-14 sm:px-16 py-10 sm:py-12 rounded-2xl flex flex-col h-auto bg-gray-100 shadow-lg bg-black/20 border border-white/10">
                <h2 className="text-lg sm:text-xl md:text-2xl font-bold">Biotech Hackathon: Team Lead</h2>
                <h3 className='text-base sm:text-lg mb-4 italic'>January 2025</h3>
                
                <div className="mb-10 min-h-[100px]">
                  <div className="text-sm sm:text-base md:text-lg text-blue-900 font-semibold italic">
                    <Typewriter 
                      words={["Led a team to develop a predictive tool for researchers to measure mycobiomes with live data visualization across 10+ test cases."]} 
                      typeSpeed={8}
                    />
                  </div>
                </div>
                
                <div className="mt-auto pt-4">
                  <ul className='flex flex-wrap gap-2'> 
                    {['Python', 'Leadership', 'Adaptability', 'Public Speaking', 'Research'].map((skill, index) => ( 
                      <li
                        key={index} 
                        className='transition-transform duration-300 hover:scale-110 bg-blue-100 text-blue-800 px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm'
                      >
                        {skill} 
                      </li>
                    ))}
                  </ul>  
                </div>
              </div>
            </div>

         
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 w-full">
         
            <div className="transition-transform duration-300 hover:scale-105 px-14 sm:px-16 py-10 sm:py-12 rounded-2xl flex flex-col h-auto bg-gray-100 shadow-lg bg-black/20 border border-white/10">
                <h2 className="text-lg sm:text-xl md:text-2xl font-bold">Naval Reserve Officer Training Corps: Midshipman</h2>
                <h3 className='text-base sm:text-lg mb-4 italic'>Summer 2021 - Spring 2023</h3>
                
                <div className="mb-10 min-h-[100px]">
                  <div className="text-sm sm:text-base md:text-lg text-blue-900 font-semibold italic">
                    <Typewriter 
                      words={["Cultivated advanced leadership skills through comprehensive military training, successfully completing rigorous physical and academic performance assessments."]} 
                      typeSpeed={8}
                    />
                  </div>
                </div>
                
                <div className="mt-auto pt-4">
                  <ul className='flex flex-wrap gap-2'> 
                    {['Military', 'Leadership', 'Public Speaking', 'Professionalism', 'Priority Mangement'].map((skill, index) => ( 
                      <li
                        key={index} 
                        className='transition-transform duration-300 hover:scale-110 bg-blue-100 text-blue-800 px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm'
                      >
                        {skill} 
                      </li>
                    ))}
                  </ul>  
                </div>
              </div>

             
              <div className="transition-transform duration-300 hover:scale-105 px-14 sm:px-16 py-10 sm:py-12 rounded-2xl flex flex-col h-auto bg-gray-100 shadow-lg bg-black/20 border border-white/10">
                <h2 className="text-lg sm:text-xl md:text-2xl font-bold">Asian American Association: Ambassador</h2>
                <h3 className='text-base sm:text-lg mb-4 italic'>Spring 2022 - Spring 2023</h3>
                
                <div className="mb-10 min-h-[100px]">
                  <div className="text-sm sm:text-base md:text-lg text-blue-900 font-semibold italic">
                    <Typewriter 
                      words={["Developed event coordination and cross-cultural communication skills by supporting 11 diverse cultural events, enhancing interpersonal and organizational abilities."]} 
                      typeSpeed={8}
                    />
                  </div>
                </div>
                
                <div className="mt-auto pt-4">
                  <ul className='flex flex-wrap gap-2'> 
                    {['Cultural Education', 'Leadership', 'Public Speaking', 'Entertainment', 'Operations'].map((skill, index) => ( 
                      <li
                        key={index} 
                        className='transition-transform duration-300 hover:scale-110 bg-blue-100 text-blue-800 px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm'
                      >
                        {skill} 
                      </li>
                    ))}
                  </ul>  
                </div>
              </div>

           
              <div className="transition-transform duration-300 hover:scale-105 px-14 sm:px-16 py-10 sm:py-12 rounded-2xl flex flex-col h-auto bg-gray-100 shadow-lg bg-black/20 border border-white/10">
                <h2 className="text-lg sm:text-xl md:text-2xl font-bold">South Florida Tech Hub: Flamingo Coder</h2>
                <h3 className='text-base sm:text-lg mb-4 italic'>Ongoing</h3>
                
                <div className="mb-10 min-h-[100px]">
                  <div className="text-sm sm:text-base md:text-lg text-blue-900 font-semibold italic">
                    <Typewriter 
                      words={["Assisting in monthly in-person coding classes for K-12 students, fostering an engaging learning environment while introducing fundamental programming concepts through platforms like Code.org and freeCodeCamp."]} 
                      typeSpeed={8}
                    />
                  </div>
                </div>
                
                <div className="mt-auto pt-4">
                  <ul className='flex flex-wrap gap-2'> 
                    {['Programming', 'Teaching', 'Public Speaking'].map((skill, index) => ( 
                      <li
                        key={index} 
                        className='transition-transform duration-300 hover:scale-110 bg-blue-100 text-blue-800 px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm'
                      >
                        {skill} 
                      </li>
                    ))}
                  </ul>  
                </div>
              </div>
            </div>

            
            <div className="w-full mt-8 flex justify-center">
              <Link 
                href="/ManuelCapiendo_Senior_BSComputerScienceAI_NuclearIT_Integration_Navy.pdf"
                className="px-6 py-3 bg-blue-100 hover:bg-blue-200 text-blue-800 rounded-full transition-transform duration-300 hover:scale-105 shadow-md text-sm sm:text-base"
              >
                View Full Resume
              </Link>
            </div>
          </section>
        </motion.div>

    </div>
</div>
  )
}

export default experience
