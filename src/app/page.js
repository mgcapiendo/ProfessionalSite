'use client';

import React from 'react'
import Link from "next/link"
import { motion } from 'framer-motion'

export default function Home() {
  return (
    //div that will store everything
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
          className="absolute right-80 transform -translate-x-1/2 w-100 h-100 top-1/4"
        >
          <svg viewBox="0 0 100 100" className="w-full h-full">
            <circle cx="50" cy="50" r="40" fill="yellow"/>
          </svg>
        </motion.div>

      {/*clouds */}
      <motion.div
        initial={{ opacity: 1, x: -300, y: -120}}
        animate={{ opacity: 1,x: 2200, y: -120}}
        transition={{
          type: 'tween',
          stiffness: 30,
          damping: 10,
          duration: 80,
          delay: 6
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
        initial={{ opacity: 1, x: -300, y: -300}}
        animate={{ opacity: 1,x: 2200, y: -300}}
        transition={{
          type: 'tween',
          stiffness: 30,
          damping: 10,
          duration: 80,
          delay: 7
        }}
        className="absolute transform -translate-x-1/3 w-100 h-90 top-1/3"
      >
        <svg viewBox='0 0 40 100' className='w-full h-full'>
          <circle cx="10" cy="10" r="10" fill="white"/>
          <circle cx="20" cy="12" r="10" fill="white"/>
          <circle cx="30" cy="10" r="10" fill="white"/>
        </svg>

      </motion.div>



      {/*this inner div stores everything that is NOT the background*/}
      <div className="relative mx-auto p-10 font-sans">

        {/*navbar at the top of the screen */}
        <header className='flex justify-between items-center mb-5'> {/*flex allows for my dynamic positioning, justify between pushes h1 to the left and nav to the right, items-center is for vertical centering, mb-8 is for adding space at the bottom of the container*/}
          

        <motion.div
                  initial={{ opacity: 0, x: -800 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ 
                    type: 'spring',
                    stiffness: 50,
                    damping: 15,
                    }}
                >
          <Link href="/" className='text-3xl font-bold text-gray-900'> {/*text-3xl sets it to 30px and goes from xs,sm,base,lg,xl,2xl-9xl, font-bold makes it bold and can be replaced with sans, serif, mono, etc, text-gray-900 is default text color and intensity and can be adjusted to anything*/}
            Manuel Capiendo
          </Link>
          </motion.div>
            
          <motion.div
                  initial={{ opacity: 0, x: 800 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ 
                    type: 'spring',
                    stiffness: 50,
                    damping: 22,
                    delay: 1.2 }}
                >
                  
            <nav className='space-x-4 shadow-md p-3 rounded-xl bg-gray-100'> {/*space-x-4 is for horizontally spacing the children of this tag */} 
              {/*good practice to use Link for internal routing, and anchor for external sites*/}
              <Link 
              href="/"
              className='text-gray-600  hover:text-blue-500 transition-colors duration-300'
              >Home</Link> {/*text-gray-600 is for setting the color and intensity, hover: declares when the mouse is over it, underlines it on hover and turns it blue, transistion-colors duration-300 makes it smoothly change the color over 300ms instead of instant*/}

              <Link 
              href="/projects"
              className='text-gray-600  hover:text-blue-500 transition-colors duration-300'
              >Projects</Link> {/*text-gray-600 is for setting the color and intensity, hover: declares when the mouse is over it, underlines it on hover and turns it blue, transistion-colors duration-300 makes it smoothly change the color over 300ms instead of instant*/}

              <Link 
              href="/experience"
              className='text-gray-600  hover:text-blue-500 transition-colors duration-300'
              >Experience</Link> {/*text-gray-600 is for setting the color and intensity, hover: declares when the mouse is over it, underlines it on hover and turns it blue, transistion-colors duration-300 makes it smoothly change the color over 300ms instead of instant*/}

              <a 
              href="https://github.com/mgcapiendo"
              className='text-gray-600  hover:text-blue-500 transition-colors duration-300'
              >Github</a> {/*text-gray-600 is for setting the color and intensity, hover: declares when the mouse is over it, underlines it on hover and turns it blue, transistion-colors duration-300 makes it smoothly change the color over 300ms instead of instant*/}

              <a 
              href="https://www.linkedin.com/in/capiendo/"
              className='text-gray-600  hover:text-blue-500 transition-colors duration-300'
              >Linkedin</a> {/*text-gray-600 is for setting the color and intensity, hover: declares when the mouse is over it, underlines it on hover and turns it blue, transistion-colors duration-300 makes it smoothly change the color over 300ms instead of instant*/}

              <Link 
              href="/contact"
              className='text-gray-600  hover:text-blue-500 transition-colors duration-300'
              >Contact</Link> {/*text-gray-600 is for setting the color and intensity, hover: declares when the mouse is over it, underlines it on hover and turns it blue, transistion-colors duration-300 makes it smoothly change the color over 300ms instead of instant*/}
            </nav>
          </motion.div>
        </header>




          <main className="max-w-6xl mx-auto px-8 py-12">
            <div className="w-full md:w-1/2"> {/*LETS GOO LEFT COLUMN */}

              {/*intro section*/}
              <section> {/*previously i had the gray box but i dont want it anymore so no need for class name properties in this section */}
                <motion.div
                  initial={{ opacity: 0, y: -800 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ 
                    type: 'spring',
                    stiffness: 50,
                    damping: 20,
                    delay: 2.7 }}
                >
                <h1 className="text-6xl font-bold text-gray-900 mb-4">Hey!</h1>
                  <p className="text-3xl text-gray-700 mb-6">I'm Manuel.</p>
                </motion.div>
                

                <motion.div
                  initial={{ opacity: 0, y: -800 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ 
                    type: 'spring',
                    stiffness: 50,
                    damping: 20,
                    delay: 2.7 }}
                >
                <div className="mt-8">
                  <p className="text-xl text-gray-700 text-lg leading-relaxed">
                    I'm an aspiring software engineer with a passion for learning and creating innovative solutions. 
                    My interests in interior design and architecture is what sparked my interest in this role and has given me a unique perspective 
                    on problem-solving for user-centered design. I'm motivated to develop and collaborate on projects that 
                    enhance productivity and create meaningful experiences for users.
                  </p>
                </div>
                </motion.div>
              </section>


              
              
              {/*skills section*/}
              <section className='mb-6'>
              <motion.div
                initial={{ opacity: 0, x: -800 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ 
                  type: 'spring',
                  stiffness: 50,
                  damping: 15,
                  delay: 2.1 }}
                className="mt-11 bg-gray-100 rounded-xl border border-gray-200 p-8 text-gray-800 shadow-lg"
              >

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <h3 className="font-semibold mb-2 text-gray-800">Programming Languages</h3>
                      <ul className='space-y-2'> {/*space-y-2 adds spacing for the y-axis between the children of this tag with a space of 8px (1-20)*/}
                        {/*First we create an array of everything we want to include in our skills, .map() is a method to transform each item in the array and in this case according to a <li> tag, (skill,index) is a callback function that .map() calls for each item in our array and it takes skill (which is the current element) then index (which is what item it is currently on) and the arrow is just a quicker way to write a function and the function in this case returns the jsx which is the className we want to render for each skill*/}
                        {/*map() is a dynamic way of getting everything in the list rendered a specific way then doing it one by one */}
                        {['Python', 'C/C++', 'JavaScript', 'SQL', 'HTML', 'CSS'].map((skill, index) => ( 
                          <li
                          key={index} 
                          className='bg-blue-100 text-blue-800 px-3 py-1 rounded-full inline-block mr-2 mb-2 text-sm'
                          >
                            {skill} {/*this is getting whats in the array and rendering it here for each index it iterates through*/}
                          </li>
                        ))}
                      </ul> {/*FORMATTING: bg-blue-100 sets the background color to blue with an intensity of 100, text-blue-800 sets the text color to blue with an intensity of 800, px-3 is the horizontal padding for the left and right of the element adding padding, py-1 is the vertical padding that adds padding to the top and bottom of the element, rounded-full applies a pill like shape depeneding on size of element, inline-block allows elements to be laid out side by side than the full width of the line, mr-2 means adding a space of 2 to the element and anything on its right, mb-2 applies a space of 2 to this element and anything below it, text-sm just sets the text size in a small font*/}
                    </div>

                    <div>
                      <h3 className="font-semibold text-gray-800">Technologies/Frameworks</h3>
                        <ul className='space-y-2'> {/*space-y-2 adds spacing for the y-axis between the children of this tag with a space of 8px (1-20)*/}
                        {/*First we create an array of everything we want to include in our skills, .map() is a method to transform each item in the array and in this case according to a <li> tag, (skill,index) is a callback function that .map() calls for each item in our array and it takes skill (which is the current element) then index (which is what item it is currently on) and the arrow is just a quicker way to write a function and the function in this case returns the jsx which is the className we want to render for each skill*/}
                        {/*map() is a dynamic way of getting everything in the list rendered a specific way then doing it one by one */}
                        {['React/Native', 'Angular', 'Node.js', 'Next.js', 'Git', 'CI/CD'].map((tech, index) => ( 
                          <li
                          key={index} 
                          className='bg-blue-100 text-blue-800 px-3 py-1 rounded-full inline-block mr-2 mb-2 text-sm'
                          >
                            {tech} {/*this is getting whats in the array and rendering it here for each index it iterates through*/}
                          </li>
                        ))}
                        </ul>
                    </div> 
                 </div>
                 </motion.div>
              </section>
            </div>
          </main>

          <footer className='text-center text-sm mt-12'>
            <p>© 2025 Manuel Capiendo. All rights reserved.</p>
          </footer>

      </div>
    </div>

  );
}