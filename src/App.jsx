import React, { useRef, useEffect } from "react";
import { motion, useScroll } from "framer-motion";
import NavBar from "./components/NavBar";
import Introduction from "./components/Introduction";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import ContactForm from "./components/ContactForm";
import Profiles from "./components/Profiles";
import Achievements from "./components/Achievements";
import Education from "./components/Education";
import Aos from "aos";
import "aos/dist/aos.css";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/react";

const App = () => {
  //take ref of all the compo...
  const introRef = useRef(null);
  const skillsRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);
  const achievementsRef = useRef(null);
  const educationRef = useRef(null);
  const profilesRef = useRef(null);
  const { scrollYProgress } = useScroll();

  const scrollToSection = (e) => {
    e.current.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    Aos.init({
      duration: 2000,
      once: false,
    });
  }, []);

  // position: fixed;
  // top: 0;
  // left: 0;
  // right: 0;
  // height: 10px;
  // background: var(--red);
  // transform-origin: 0%;

  return (
    <div className="font-sans bg-black">
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 z-50 bg-white origin-left"
        style={{ scaleX: scrollYProgress }}
      />
      <NavBar
        scrollToSection={scrollToSection}
        introRef={introRef}
        skillsRef={skillsRef}
        projectsRef={projectsRef}
        contactRef={contactRef}
        achievementsRef={achievementsRef}
        educationRef={educationRef}
        profilesRef={profilesRef}
      />
      <section ref={introRef}>
        <Introduction />
      </section>
      <section ref={skillsRef}>
        <Skills />
      </section>
      <section ref={projectsRef}>
        <Projects />
      </section>
      <section ref={profilesRef}>
        <Profiles />
      </section>
      <section ref={achievementsRef}>
        <Achievements />
      </section>
      <section ref={educationRef}>
        <Education />
      </section>
      <section ref={contactRef}>
        <ContactForm />
      </section>
      <p className="text-gray-400 text-center p-6">
        © 2024 Atif. All rights reserved.
      </p>
      <SpeedInsights />
      <Analytics />
    </div>
  );
};

export default App;
