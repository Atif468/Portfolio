// import React, { useState } from "react";
// import Particle from "./particals";
// // import GraphemeSplitter from "grapheme-splitter";
// import { TypeAnimation } from "react-type-animation";

// function Introduction() {
//   // const splitter = new GraphemeSplitter();
//   return (
//     <section
//       className="text-white font-sans min-h-screen flex justify-center items-center m-2 md:m-14"
//       data-aos="fade-down-right"
//     >
//       <Particle />

//       <div className="flex items-center justify-center h-screen text-white text-center">
//         <div>
//           <p className="font-light text-4xl mx:text-3xl text-gray-400">
//             Hey! I'm Atif Ansari
//           </p>
//           <h1 className="text-5xl font-bold my-4">
//             I'm A Front End Web Developer
//           </h1>
//           <p className="sm:text-2xl mx:text-5xl text-gray-400">
//             I can build user interface for websites and applications with ReactJS 
//           </p>
//           <p className="sm:text-sm md:text-2xl text-gray-400 mb-8">
//             I love the front end development.
//           </p>
//           <a
//             className="text-center test-xl inline-block py-2 h-12 w-32 border border-white rounded-full hover:w-36 hover:shadow-yellow-500 duration-300"
//             href="https://drive.google.com/file/d/1YDyZkXLLIK9sixyy6Xrat3X8ft1_aU_X/view?usp=sharing"
//             target="_blank"
//           >
//             Resume
//           </a>
//         </div>
//       </div>
//     </section>
//   );
// }

// export default Introduction;

import React from "react";
import Particle from "./particals";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiLeetcode, SiGeeksforgeeks } from "react-icons/si";

function Introduction() {
  return (
    <section
      className="relative bg-black text-white min-h-screen flex items-center justify-center p-4"
      data-aos="fade-down-right"
    >
      <Particle />

      <div className="text-white text-center px-6 md:px-12">
         <div className="font-light text-2xl md:text-3xl text-gray-400 mb-2">
          Hey! I'm <span className="text-blue-400 font-semibold">Atif Ansari</span>
        </div>

         <div className="text-4xl md:text-6xl font-extrabold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-500 to-blue-600">
          I'm A Full Stack Developer
        </div>

         <div className="text-lg md:text-2xl text-gray-300 mb-6">
          Crafting interactive user experiences with <span className="text-blue-400">ReactJS</span>, 
          developing robust back-ends with <span className="text-blue-400">Node.js</span>, 
          and managing data with <span className="text-blue-400">MongoDB</span>.
        </div>

        <div className="text-gray-400 text-md md:text-lg mb-8">
          Passionate about delivering scalable, high-performance solutions and beautiful user interfaces.
        </div>

         <a
          className="inline-block py-3 px-8 bg-blue-500 text-white text-lg font-semibold rounded-full hover:bg-blue-400 hover:scale-105 transform transition-all duration-300"
          href="https://drive.google.com/file/d/1YDyZkXLLIK9sixyy6Xrat3X8ft1_aU_X/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
        >
          View My Resume
        </a>

         <div className="mt-8 flex justify-center space-x-8 text-2xl">
          <a
            href="https://github.com/atif468"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-blue-400 transition duration-300"
          >
            <FaGithub />
          </a>
          <a
            href="https://linkedin.com/in/atif468"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-blue-400 transition duration-300"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://leetcode.com/u/Atif_2005"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-blue-400 transition duration-300"
          >
            <SiLeetcode />
          </a>
          <a
            href="https://www.geeksforgeeks.org/user/atifans468/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-blue-400 transition duration-300"
          >
            <SiGeeksforgeeks />
          </a>
        </div>
      </div>
    </section>
  );
}

export default Introduction;
