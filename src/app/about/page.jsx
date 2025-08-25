"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";

const About = () => {
  return (
    <div className="min-h-screen font-sans">
      <main className="relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 800 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            type: "spring",
            stiffness: 50,
            damping: 15,
            delay: 0.5,
          }}
        >
          <section className="py-6 sm:py-10 md:py-16 w-full max-w-[1700px] mx-auto px-6 sm:px-8 md:px-12 lg:px-16 space-y-4 sm:space-y-6">

            {/* Page Title */}
            <div className="text-center mb-8 sm:mb-12">
              <h1 className="text-4xl sm:text-5xl font-bold text-black mb-6">
                My Story
              </h1>
            </div>

            {/* Journey Section */}
            <div className="transition-transform duration-300 hover:scale-105 px-14 sm:px-16 py-10 sm:py-12 rounded-2xl flex flex-col h-auto bg-gray-100 shadow-lg bg-black/20 border border-white/10">
              <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-black">The Journey</h2>
              
              <div className="space-y-4 text-lg text-blue-900 leading-relaxed font-semibold italic">
                <p>My journey started in my middle school STEAM program, then continued through my high school engineering program and my first two years of college pursuing electrical engineering with the Navy.</p>
                <p>I eventually discovered what drives me in computer science and I committed fully, transferring colleges, leaving scholarships behind, and moving states to go all in.</p>
                <p>
                  <Typewriter
                    words={[
                      "I gained my first industry experience as an intern at Sparton, a defense company that produces sonobuoys, where I applied my programming skills to streamline the manufacturing line by removing shipment bottlenecks that would otherwise send workers home. This was my first real taste of what felt like magic."
                    ]}
                    typeSpeed={12}
                    cursor
                  />
                </p>
              </div>
            </div>

            {/* Current Focus & Beyond the Code */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 w-full">

              {/* What I'm Building Now */}
              <div className="transition-transform duration-300 hover:scale-105 px-14 sm:px-16 py-10 sm:py-12 rounded-2xl flex flex-col h-auto bg-gray-100 shadow-lg bg-black/20 border border-white/10">
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-4 text-black">What I'm Building Now</h3>
                
                <div className="mb-10 min-h-[100px] text-sm sm:text-base md:text-lg text-blue-900 font-semibold italic space-y-2">
                  <p>Switching to computer science in my third year of college also meant having to work much harder to catch up.
                  However, I love what I do and enjoy sharing that same magic as a coding instructor to K-12 students.</p>
                  <p>
                    <Typewriter
                      words={["I also really enjoy participating in hackathons where I get to work and collaborate with all kinds of teams, push my self, and try new things. This is why I also enjoy learning from others in my field through coffee chats or mentoring."]}
                      typeSpeed={12}
                      cursor
                    />
                  </p>
                </div>
              </div>

              {/* Beyond the Code */}
              <div className="transition-transform duration-300 hover:scale-105 px-14 sm:px-16 py-10 sm:py-12 rounded-2xl flex flex-col h-auto bg-gray-100 shadow-lg bg-black/20 border border-white/10">
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-4 text-black">Beyond the Code</h3>
                
                <div className="mb-10 min-h-[100px] text-sm sm:text-base md:text-lg text-blue-900 font-semibold italic space-y-2">
                  <p>When I'm not at school or work, I love visiting Disney Springs for a southern pig sandwich at Polite Pig and a humongous pistachio toffee cookie at Gideon's Bakehouse.</p>
                  <p>
                    <Typewriter
                      words={["I also really love being outdoors, I've found it keeps me inspired and curious. I recently rescued a turtle now named Junebug on a wild fishing trip and constantly check on her whenever I can."]}
                      typeSpeed={12}
                      deleteSpeed={0}
                      loop={1}
                      cursor
                    />
                  </p>
                  <p> Check out more about Junebug here: <Link href="https://marinelife.org/turtle/junebug/" target="_blank" className="underline text-blue-700">Loggerhead Marinelife Center</Link> </p>
                </div>
              </div>

            </div>

            {/* Vision Section */}
            <div className="transition-transform duration-300 hover:scale-105 px-14 sm:px-16 py-10 sm:py-12 rounded-2xl flex flex-col h-auto bg-gray-100 shadow-lg bg-black/20 border border-white/10">
              <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-black">Where I'm Headed</h2>
              
              <div className="mb-10 text-sm sm:text-base md:text-lg text-blue-900 font-semibold italic space-y-2">
                <p>I have just under two more years until graduation, and I'm excited to continue learning, building my skills, and shaping the personal brand I want to carry into my career.</p>
                <p>I am grateful for how far I've come and my goal is to keep growing, giving back, and supporting my network of friends, colleagues, and mentors who have guided me along the way.</p>
                <p>
                  <Typewriter
                    words={["I hope the next roles I get to take on allow me to gain a deeper understanding of the business value, enterprise design, and large scale operational needs attached to the work I do. The closer I am to understanding every aspect of my projects the better I can be in achieving them efficently. I want to collaborate with great people and grow as a confident developer with their guidance. Because at the end I want to be the best version of myself as I can!"]}
                    typeSpeed={12}
                    cursor
                  />
                </p>
              </div>
            </div>

            {/* Call to Action */}
            <div className="w-full mt-8 flex justify-center">
            <div className="flex flex-wrap justify-center gap-4">
                <Link
                href="/projects"
                className="px-6 py-3 bg-blue-100 hover:bg-blue-200 text-blue-800 rounded-full transition-transform duration-300 hover:scale-105 shadow-md text-sm sm:text-base"
                >
                View My Projects
                </Link>
                <Link
                href="/experience"
                className="px-6 py-3 bg-blue-100 hover:bg-blue-200 text-blue-800 rounded-full transition-transform duration-300 hover:scale-105 shadow-md text-sm sm:text-base"
                >
                View Experiences
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

export default About;
