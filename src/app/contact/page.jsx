'use client'

import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'

const contact = () => {
  return (

    <div className="relative min-h-screen overflow-hidden bg-sky-100"> 
          
          {/* Animated Hills */}
          <motion.div
            className="absolute bottom-0 left-0 w-full"
            initial={{ opacity: 0, scaleY: 0 }}
            animate={{ opacity: 1, scaleY: 1 }}
            transition={{
              type: 'spring',
              staggerChildren: 0.2,
              delayChildren: 0.5
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
                damping: 15
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
                delay: 0.3
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
                delay: 0.6
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
              initial={{ y: '100%' }}
              animate={{ y: '0%' }}
              transition={{
                type: 'spring',
                stiffness: 50,
                damping: 15,
                duration: 1.5
              }}
              className="absolute right-80 transform -translate-x-1/2 w-100 h-100 top-1/4"
            >
              <svg viewBox="0 0 100 100" className="w-full h-full">
                <circle cx="50" cy="50" r="40" fill="yellow"/>
              </svg>
            </motion.div>

    
  
    <div className= "relative mx-auto p-10">
      {/*navbar at the top of the screen */}
      <header className='flex justify-between items-center mb-5'> {/*flex allows for my dynamic positioning, justify between pushes h1 to the left and nav to the right, items-center is for vertical centering, mb-8 is for adding space at the bottom of the container*/}
          

        
          <Link href="/" className='text-3xl font-bold  text-gray-900'> {/*text-3xl sets it to 30px and goes from xs,sm,base,lg,xl,2xl-9xl, font-bold makes it bold and can be replaced with sans, serif, mono, etc, text-gray-900 is default text color and intensity and can be adjusted to anything*/}
            Manuel Capiendo
          </Link>
                  
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
        </header>


        <section className="absolute top-[300px] right-[460px] text-center">
          <div className="grid grid-cols-8 lg:grid-cols-12 w-full">
                <div className="lg:col-span-7 custom-bg lg:px-16 sm:py-20 rounded-2xl flex flex-col justify-center h-auto bg-gray-100 rounded-xl shadow-lg">
                    <h2 className="text-xl sm:text-3xl font-semibold">Let's Stay in Touch</h2>
                    <div>
                        <p className='italic mb-5'>Here's how you can connect with me
                        </p>
                        <a 
                        href="https://www.linkedin.com/in/capiendo/"
                        className='bg-blue-100 text-blue-500 px-3 py-1 rounded-full inline-block mr-2 mb-2 text-sm  hover:bg-transparent transition-colors duration-300'
                        >Linkedin</a>

                        <a 
                        href="https://github.com/mgcapiendo"
                        className='ml-1 bg-blue-100 text-blue-500 px-3 py-1 rounded-full inline-block mr-2 mb-2 text-sm  hover:bg-transparent transition-colors duration-300'
                        >Github</a> {/*text-gray-600 is for setting the color and intensity, hover: declares when the mouse is over it, underlines it on hover and turns it blue, transistion-colors duration-300 makes it smoothly change the color over 300ms instead of instant*/}
                    </div>

                    <div>
                      <p className='mt-2 bg-blue-100 text-blue-500 px-3 py-1 rounded-full inline-block mr-2 mb-2 text-sm  hover:bg-transparent transition-colors duration-300'>
                        manuelgcapiendo@gmail.com
                      </p>
                    </div>
                </div>
            </div>

        </section>






    </div>

  </div>
  )
}

export default contact
