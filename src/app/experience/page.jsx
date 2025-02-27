'use client'

import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'

const experience = () => {
  return (

    <div className="relative min-h-screen overflow-hidden bg-sky-100"> 


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

        <section className="py-10 sm:py-20 w-full max-w-[1800px] mx-auto px-4 md:px-8 lg:px-16 xl:px-24 space-y-4 sm:space-y-6">

           <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-6 w-full">
               <div className="lg:col-span-6 custom-bg px-4 sm:px-6 md:px-12 lg:px-16 py-8 sm:py-12 rounded-2xl flex flex-col h-auto bg-gray-100 shadow-lg bg-black/20 border border-white/10">
                   <h2 className="text-xl sm:text-2xl font-semibold mb-4">Experience 1</h2>
                   <div className="space-y-4">
                       <p className="text-black-300">• detail 1</p>
                       <p className="text-black-300">• detail 2</p>
                       <p className="text-black-300">• detail 3</p>
                       <p className="text-black-300">• detail 4</p>
                   </div>
               </div>

               <div className="lg:col-span-6 custom-bg px-4 sm:px-6 md:px-12 lg:px-16 py-8 sm:py-12 rounded-2xl flex flex-col h-auto bg-gray-100 shadow-lg bg-black/20 border border-white/10">
                   <h2 className="text-xl sm:text-2xl font-semibold mb-4">Experience 2</h2>
                   <div className="space-y-4">
                       <p className="text-black-300">• detail 1</p>
                       <p className="text-black-300">• detail 2</p>
                       <p className="text-black-300">• detail 3</p>
                       <p className="text-black-300">• detail 4</p>
                   </div>
               </div>
           </div>

           <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-6 w-full">
               <div className="lg:col-span-6 custom-bg px-4 sm:px-6 md:px-12 lg:px-16 py-8 sm:py-12 rounded-2xl flex flex-col h-auto bg-gray-100 shadow-lg bg-black/20 border border-white/10">
                   <h2 className="text-xl sm:text-2xl font-semibold mb-4">Experience 3</h2>
                   <div className="space-y-4">
                       <p className="text-black-300">• detail 1</p>
                       <p className="text-black-300">• detail 2</p>
                       <p className="text-black-300">• detail 3</p>
                       <p className="text-black-300">• detail 4</p>
                   </div>
               </div>

               <div className="lg:col-span-6 custom-bg px-4 sm:px-6 md:px-12 lg:px-16 py-8 sm:py-12 rounded-2xl flex flex-col h-auto bg-gray-100 shadow-lg bg-black/20 border border-white/10">
                   <h2 className="text-xl sm:text-2xl font-semibold mb-4">Experience 4</h2>
                   <div className="space-y-4">
                       <p className="text-black-300">• detail 1</p>
                       <p className="text-black-300">• detail 2</p>
                       <p className="text-black-300">• detail 3</p>
                       <p className="text-black-300">• detail 4</p>
                   </div>
               </div>
           </div>

           <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-6 w-full">
               <div className="lg:col-span-4 custom-bg px-4 sm:px-6 md:px-12 lg:px-16 py-8 sm:py-12 rounded-2xl flex flex-col h-auto bg-gray-100 shadow-lg bg-black/20 border border-white/10">
                   <h2 className="text-xl sm:text-2xl font-semibold mb-4">Org 1</h2>
                   <div className="space-y-4">
                       <p className="text-black-300">• detail 1</p>
                       <p className="text-black-300">• detail 2</p>
                       <p className="text-black-300">• detail 3</p>
                       <p className="text-black-300">• detail 4</p>
                   </div>
               </div>

               <div className="lg:col-span-4 custom-bg px-4 sm:px-6 md:px-12 lg:px-16 py-8 sm:py-12 rounded-2xl flex flex-col h-auto bg-gray-100 shadow-lg bg-black/20 border border-white/10">
                   <h2 className="text-xl sm:text-2xl font-semibold mb-4">Org 2</h2>
                   <div className="space-y-4">
                       <p className="text-black-300">• detail 1</p>
                       <p className="text-black-300">• detail 2</p>
                       <p className="text-black-300">• detail 3</p>
                       <p className="text-black-300">• detail 4</p>
                   </div>
               </div>

               <div className="lg:col-span-4 custom-bg px-4 sm:px-6 md:px-12 lg:px-16 py-8 sm:py-12 rounded-2xl flex flex-col h-auto bg-gray-100 shadow-lg bg-black/20 border border-white/10">
                   <h2 className="text-xl sm:text-2xl font-semibold mb-4">Org 3</h2>
                   <div className="space-y-4">
                       <p className="text-black-300">• detail 1</p>
                       <p className="text-black-300">• detail 2</p>
                       <p className="text-black-300">• detail 3</p>
                       <p className="text-black-300">• detail 4</p>
                   </div>
               </div>
           </div>

           <div className="grid grid-cols-1 lg:grid-cols-11 w-full text-sm">
            <div className="lg:col-start-6 text-center rounded-2xl flex flex-col h-auto bg-gray-100 shadow-lg border border-white/10 hover:text-blue-500">
              <Link href="/ManuelCapiendo_Senior_BSComputerScienceAI_NuclearIT_Integration_Navy.pdf">View Full Resume</Link>
            </div>
          </div>

       </section>


    </div>
</div>
  )
}

export default experience
