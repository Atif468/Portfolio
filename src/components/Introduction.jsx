import React, { useState } from "react";
import Particle from "./particals";
import GraphemeSplitter from "grapheme-splitter";
import { TypeAnimation } from "react-type-animation";

function Introduction() {
  const splitter = new GraphemeSplitter();
  return (
    <section
      className="text-white font-sans min-h-screen flex justify-center items-center m-2 md:m-14"
      data-aos="fade-down-right"
    >
      {console.log("hello")}
      <Particle />
      <div className="z-10  m-14">
        <h1 className="text-2xl md:text-5xl font-bold mb-6">
          Hello, I'm
          <span style={{ fontSize: "1em", color: "white" }}>
            <TypeAnimation
              splitter={(str) => splitter.splitGraphemes(str)}
              sequence={[
                " Atif",
                2000,
                " Front-end Developer",
                2000,
                " Back-end Developer",
                2000,
                " Full-stack Developer",
                2000,
              ]}
              repeat={Infinity}
            />
          </span>
        </h1>
        <div className="text-2xl font-jersey mb-6 md:text-5xl">
          <h1 className="hidden md:block">
            Specializing in data structures, algorithms, and full-stack
            development, I excel in crafting innovative tech solutions and
            solving complex problems with efficiency. My expertise spans both
            frontend and backend technologies, ensuring secure and user-focused
            project delivery. Driven by a passion for coding and continuous
            improvement, I consistently build impactful software solutions.
          </h1>
          <h1 className="block md:hidden">
          I'm a passionate web developer with extensive experience in building modern, responsive web applications that deliver seamless user experiences. My work reflects a deep understanding of frontend and backend technologies, coupled with a commitment to crafting high-quality, efficient, and scalable solutions.
          </h1>
        </div>

        <a
          className="text-center inline-block py-2 h-12 w-32 border border-white rounded-full hover:w-36 hover:shadow-yellow-500 duration-300"
          href="https://drive.google.com/file/d/1YDyZkXLLIK9sixyy6Xrat3X8ft1_aU_X/view?usp=sharing"
          target="_blank"
        >
          Resume
        </a>
      </div>
    </section>
  );
}

export default Introduction;
