// "use client";

// import React from "react";
// import { motion } from "framer-motion";
// import { Typewriter } from "react-simple-typewriter";

// export default function Home() {
//   return (
//     <div className="min-h-screen font-sans">
//       {/* Main Content */}
//       <main className="relative z-10 max-w-6xl mx-auto px-4 sm:px-8 py-6 sm:py-12">
//         <div className="w-full md:w-2/3 lg:w-1/2">
//           {/* Intro Section */}
//           <section>
//             <motion.div
//               initial={{ opacity: 0, y: -800 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{
//                 type: "spring",
//                 stiffness: 50,
//                 damping: 15,
//                 delay: 1.5,
//               }}
//             >
//               <h1 className="text-4xl sm:text-6xl font-bold text-gray-900 mb-4">
//                 Hey!
//               </h1>
//               <div
//                 className="text-3xl text-blue-900 font-semibold italic"
//                 style={{ height: "30px" }}
//               >
//                 <Typewriter
//                   words={[
//                     "I'm Manuel",
//                     "I'm a Learner",
//                     "I'm a Developer",
//                     "I'm a Leader",
//                     "I'm a Doer",
//                     "I'm Manuel",
//                   ]}
//                   typeSpeed={100}
//                   deleteSpeed={50}
//                   delaySpeed={3000}
//                 />
//               </div>
//             </motion.div>
//             <motion.div
//               initial={{ opacity: 0, y: -800 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{
//                 type: "spring",
//                 stiffness: 50,
//                 damping: 15,
//                 delay: 1.5,
//               }}
//             >
//               <div className="mt-8">
//                 <p className="text-base sm:text-lg md:text-xl text-gray-700 font-semibold leading-relaxed">
//                   I'm an aspiring software engineer who wants to build
//                   technology that inspires and creates wonder. My journey began
//                   in middle school with an engineering program and has continued
//                   through college, where I study computer science and artificial
//                   intelligence. Along the way, my interests in process
//                   improvement and enterprise design have taught me to adapt,
//                   learn quickly, and collaborate with great people. I'm
//                   determined to contribute to projects that push technology
//                   forward while exploring opportunities to learn, grow, and make
//                   the most impact.
//                 </p>
//               </div>
//             </motion.div>
//           </section>

//           {/* Skills Section */}
//           <section className="mb-6">
//             <motion.div
//               initial={{ opacity: 0, x: -800 }}
//               animate={{ opacity: 1, x: 0 }}
//               transition={{
//                 type: "spring",
//                 stiffness: 50,
//                 damping: 15,
//                 delay: 1.5,
//               }}
//               className="mt-8 sm:mt-11 bg-gray-100 rounded-xl border border-gray-200 p-4 sm:p-8 text-gray-800 shadow-lg"
//             >
//               <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-4">
//                 <div>
//                   <h3 className="font-semibold mb-2 text-gray-800">
//                     My Languages:
//                   </h3>
//                   <ul className="flex flex-wrap">
//                     {["Python", "C/C++", "JavaScript", "Java", "SQL"].map(
//                       (skill, index) => (
//                         <li
//                           key={index}
//                           className="transition-transform duration-300 hover:scale-110 bg-blue-100 text-blue-800 px-2 sm:px-3 py-1 rounded-full inline-block mr-2 mb-2 text-xs sm:text-sm"
//                         >
//                           {skill}
//                         </li>
//                       )
//                     )}
//                   </ul>
//                 </div>

//                 <div>
//                   <h3 className="font-semibold text-gray-800 mt-4 sm:mt-0 mb-2">
//                     My Frameworks:
//                   </h3>
//                   <ul className="flex flex-wrap">
//                     {[
//                       "React",
//                       "React Native",
//                       "Angular",
//                       "Next.js",
//                       "Node.js",
//                       "Flask",
//                     ].map((tech, index) => (
//                       <li
//                         key={index}
//                         className="transition-transform duration-300 hover:scale-110 bg-blue-100 text-blue-800 px-3 py-1 rounded-full inline-block mr-2 mb-2 text-sm"
//                       >
//                         {tech}
//                       </li>
//                     ))}
//                   </ul>
//                 </div>

//                 <div>
//                   <h3 className="font-semibold text-gray-800 mt-4 sm:mt-0 mb-2">
//                     My Databases
//                   </h3>
//                   <ul className="flex flex-wrap">
//                     {["MongoDB", "PostgreSQL", "Microsoft SQL Server"].map(
//                       (skill, index) => (
//                         <li
//                           key={index}
//                           className="transition-transform duration-300 hover:scale-110 bg-blue-100 text-blue-800 px-2 sm:px-3 py-1 rounded-full inline-block mr-2 mb-2 text-xs sm:text-sm"
//                         >
//                           {skill}
//                         </li>
//                       )
//                     )}
//                   </ul>
//                 </div>
//               </div>
//             </motion.div>
//           </section>
//         </div>
//       </main>
//     </div>
//   );
// }
"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="flex-1 flex items-center justify-center overflow-hidden font-sans">
      {/* Main Content */}
      <main className="relative z-10 max-w-5xl mx-auto px-6 sm:px-10 overflow-hidden">
        
        {/* Intro Section */}
        <motion.div
          initial={{ opacity: 0, y: -80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            type: "spring",
            stiffness: 50,
            damping: 15,
            delay: 0.5,
          }}
          className="mb-12 text-center"
        >
          <h1 className="text-4xl sm:text-6xl font-bold text-gray-900 mb-1">
            I want to build technology that creates wonder.
          </h1>
          <div
            className="text-2xl sm:text-3xl text-blue-900 font-semibold italic"
            style={{ height: "30px" }}
          >
          </div>
          <p className="text-lg sm:text-xl text-gray-700 leading-relaxed max-w-2xl mx-auto">
            Hey! I'm Manuel, an aspiring software engineer, and I want to build
            technology that inspires and creates wonder. My journey began
            in middle school with an engineering program and has continued
            through college, where I study computer science and artificial
            intelligence. Along the way, my interests in process
            improvement and enterprise design have taught me to adapt,
            learn quickly, and collaborate with great people. I'm
            determined to contribute to projects that push technology
            forward while exploring opportunities to learn, grow, and make
            the most impact.
          </p>
        </motion.div>

        {/* Skills Snapshot */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            type: "spring",
            stiffness: 50,
            damping: 15,
            delay: 0.8,
          }}
          className="bg-gray-100 rounded-2xl border border-gray-200 p-6 sm:p-10 text-gray-800 shadow-lg mx-auto max-w-2xl"
        >
          <h2 className="text-xl sm:text-2xl font-bold mb-4 text-center">
            What I Work With
          </h2>
          <ul className="flex flex-wrap justify-center gap-3">
            {[
              "Python",
              "JavaScript",
              "React",
              "SQL",
              "Node.js",
            ].map((skill, index) => (
              <li
                key={index}
                className="transition-transform duration-300 hover:scale-110 bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm sm:text-base"
              >
                {skill}
              </li>
            ))}
          </ul>
          <p className="mt-4 text-blue-900 text-sm sm:text-base text-center">
            Learn more about my journey on my{" "}
            <Link href="/about" className="text-blue-700 hover:underline">
              About Page
            </Link>
            , explore how I've applied these skills and more in my{" "}
            <Link href="/projects" className="text-blue-700 hover:underline">
              Projects
            </Link>{" "}
            and{" "}
            <Link href="/experience" className="text-blue-700 hover:underline">
              Experiences
            </Link>
            , or{" "}
            <Link href="/contact" className="text-blue-700 hover:underline">
              get in touch
            </Link>
            .
          </p>
        </motion.div>
      </main>
    </div>
  );
}
