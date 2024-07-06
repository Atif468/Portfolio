import React, { useState } from "react";
import Particle from "./practicals";
import GraphemeSplitter from "grapheme-splitter";
import { TypeAnimation } from "react-type-animation";

function Introduction() {
  const splitter = new GraphemeSplitter();
  const [textColor, setTextColor] = useState("white");
  return (
    <section
      className="relative bg-gray-900 text-white font-sans min-h-screen flex items-center justify-center"
      data-aos="fade-down-right"
    >
      <Particle />
      <div className=" overflow-hidden">
        <h1 className="text-5xl font-bold mb-6">
          Hello, I'm
          <span style={{ fontSize: "1em", color: textColor }}>
            <TypeAnimation
              splitter={(str) => splitter.splitGraphemes(str)}
              sequence={[
                " Atif",
                2000,
                () => setTimeout(() => setTextColor("aqua"), 350),
                " Front-end Developer",
                2000,
                () => setTimeout(() => setTextColor("yellow"), 1250),
                " Back-end Developer",
                2000,
                () => setTimeout(() => setTextColor("purple"), 1250),
                " Full-stack Developer",
                2000,
                () => setTimeout(() => setTextColor("white"), 1300),
              ]}
              repeat={Infinity}
            />
          </span>
        </h1>
        <p className="text-2xl mb-6">
          I'm a passionate web developer with experience in building modern web
          applications.
        </p>
        <a
          className="text-center inline-block py-2 h-12 w-32 border border-white rounded-full"
          href="https://github.com/Atif468/Portfolio/blob/main/assets/RESUME.pdf"
          download="RESUME.pdf"
          >
          Resume
        </a>
      </div>
    </section>
  );
}

export default Introduction;
