import React, { useState } from "react";
import Particle from "./particals";
// import GraphemeSplitter from "grapheme-splitter";
import { TypeAnimation } from "react-type-animation";

function Introduction() {
  // const splitter = new GraphemeSplitter();
  return (
    <section
      className="text-white font-sans min-h-screen flex justify-center items-center m-2 md:m-14"
      data-aos="fade-down-right"
    >
      <Particle />

      <div className="flex items-center justify-center h-screen text-white text-center">
        <div>
          <p className="font-light text-4xl mx:text-3xl text-gray-400">
            Hey! I'm Atif Ansari
          </p>
          <h1 className="text-5xl font-bold my-4">
            I'm A Front End Web Developer
          </h1>
          <p className="sm:text-2xl mx:text-5xl text-gray-400">
            I can build user interface for websites and applications with ReactJS 
          </p>
          <p className="sm:text-sm md:text-2xl text-gray-400 mb-8">
            I love the front end development.
          </p>
          <a
            className="text-center test-xl inline-block py-2 h-12 w-32 border border-white rounded-full hover:w-36 hover:shadow-yellow-500 duration-300"
            href="https://drive.google.com/file/d/1YDyZkXLLIK9sixyy6Xrat3X8ft1_aU_X/view?usp=sharing"
            target="_blank"
          >
            Resume
          </a>
        </div>
      </div>
    </section>
  );
}

export default Introduction;
