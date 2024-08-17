import React, { useState } from "react";
import Particle from "./practicals";
import GraphemeSplitter from "grapheme-splitter";
import { TypeAnimation } from "react-type-animation";


function Introduction() {
  const splitter = new GraphemeSplitter();
  return (
    <section
      className="text-white font-sans min-h-screen flex justify-center items-center"
      data-aos="fade-down-right"
    >
      {
        console.log("hello")
      }
      <Particle />
      <div className="z-10 m-10">
        <h1 className="text-5xl font-bold mb-6">
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
        <p className="text-2xl mb-6">
          I'm a passionate web developer with experience in building modern web
          applications.
        </p>
        <a
          className="text-center inline-block py-2 h-12 w-32 border border-white rounded-full"
          href="../assets/RESUME.pdf"
          download="RESUME.pdf"
          >
          Resume
        </a>

      </div>
    </section>
  );
}

export default Introduction;



// import { useCallback, useEffect, useState } from "react";
// import Particles, { initParticlesEngine } from "@tsparticles/react";
// import { loadFull } from "tsparticles";

// export default function Particle() {
//   const [init, setInit] = useState(false);
//   useEffect(() => {
//     console.log("init");
//     initParticlesEngine(async (engine) => {
//       await loadFull(engine);
//     }).then(() => {
//       setInit(true);
//     });
//   }, []);

//   const particlesLoaded = (container) => {
//   };

//   return (
//     <>
//       {init && (
//         <Particles
//           id="tsparticles"
//           particlesLoaded={particlesLoaded}
//           style={{
//             zIndex: -1,
//           }}
//           options={{
//             fpsLimit: 120,
//             interactivity: {
//               events: {
//                 onClick: {
//                   enable: true,
//                   mode: "push",
//                 },
//                 onHover: {
//                   enable: true,
//                   mode: "push",
//                 },
//                 resize: true,
//               },
//               modes: {
//                 push: {
//                   quantity: 4,
//                 },
//                 repulse: {
//                   distance: 200,
//                   duration: 0.3,
//                 },
//               },
//             },
//             particles: {
//               color: {
//                 value: "#FFFFFF",
//               },
//               links: {
//                 color: "#FFFFFF",
//                 distance: 150,
//                 enable: true,
//                 opacity: 0.00,
//                 width: 1,
//               },
//               move: {
//                 direction: "none",
//                 enable: true,
//                 outModes: {
//                   default: "bounce",
//                 },
//                 random: false,
//                 speed: 0.5,
//                 straight: true,
//               },
//               number: {
//                 density: {
//                   enable: true,
//                   area: 300,
//                 },
//                 value: 260,
//               },
//               opacity: {
//                 value: 0.5,
//               },
//               shape: {
//                 type: "triangle",
//               },
//               size: {
//                 value: { min: 1, max: 3 },
//               },
//             },
//             detectRetina: true,
//           }}
//         />
//       )}
//     </>
//   );
// }