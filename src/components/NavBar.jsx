import React from "react";

const NavBar = ({
  scrollToSection,
  introRef,
  skillsRef,
  projectsRef,
  contactRef,
  achievementsRef,
  educationRef,
  profilesRef,
}) => (
  <nav className="backdrop-blur-sm rounded-full w-[60%] max-w-auto m-auto shadow-sm shadow-white p-3 mb-4 flex justify-center sticky top-5 z-50 scroll-m-1">
    <ul className="flex space-x-5 overflow-hidden scroll-m-3">
      <li>
        <a
          href="#introduction"
          className="text-white hover:text-gray-300"
          onClick={() => scrollToSection(introRef)}
        >
          Home
        </a>
      </li>
      <li>
        <a
          href="#skills"
          className="text-white hover:text-gray-300"
          onClick={() => scrollToSection(skillsRef)}
        >
          Skills
        </a>
      </li>
      <li>
        <a
          href="#projects"
          className="text-white hover:text-gray-300"
          onClick={() => scrollToSection(projectsRef)}
        >
          Projects
        </a>
      </li>
      <li>
        <a
          href="#profiles"
          className="text-white hover:text-gray-300"
          onClick={() => scrollToSection(profilesRef)}
        >
          Profiles
        </a>
      </li>
      <li>
        <a
          href="#achievements"
          className="text-white hover:text-gray-300"
          onClick={() => scrollToSection(achievementsRef)}
        >
          Achievements
        </a>
      </li>
      <li>
        <a
          href="#education"
          className="text-white hover:text-gray-300"
          onClick={() => scrollToSection(educationRef)}
        >
          Education
        </a>
      </li>
      <li>
        <a
          href="#contact"
          className="text-white hover:text-gray-300"
          onClick={() => scrollToSection(contactRef)}
        >
          Contact
        </a>
      </li>
    </ul>
  </nav>
);

export default NavBar;
