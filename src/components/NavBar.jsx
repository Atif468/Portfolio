import React, { useState } from "react";

const NavBar = ({
  scrollToSection,
  introRef,
  skillsRef,
  projectsRef,
  contactRef,
  achievementsRef,
  educationRef,
  profilesRef,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="backdrop-blur-md rounded-lg w-[90%] max-w-screen-lg mx-auto shadow-2xl shadow-black p-4 mb-6 flex justify-between items-center sticky top-4 z-50">
      <div className="text-white text-xl font-bold font-mono">Atif</div>
      <button
        onClick={toggleMenu}
        className="md:hidden text-white focus:outline-none"
      >
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16m-7 6h7"
          ></path>
        </svg>
      </button>
      <ul
        className={`flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-8 absolute md:relative bg-gray-800 md:bg-transparent w-full md:w-auto top-16 md:top-0 left-0 md:left-auto transition-all duration-300 ${
          isOpen ? "block" : "hidden md:flex"
        }`}
      >
        {[
          { label: "Home", ref: introRef, href: "#introduction" },
          { label: "Skills", ref: skillsRef, href: "#skills" },
          { label: "Projects", ref: projectsRef, href: "#projects" },
          { label: "Profiles", ref: profilesRef, href: "#profiles" },
          { label: "Achievements", ref: achievementsRef, href: "#achievements" },
          { label: "Education", ref: educationRef, href: "#education" },
          { label: "Contact", ref: contactRef, href: "#contact" },
        ].map((item, index) => (
          <li key={index}
            className="pl-8"
            >
            <a
              href={item.href}
              className="relative text-gray-200 transition-all duration-300 after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[2px] after:bg-white after:transition-all after:duration-300 hover:after:w-full"
              onClick={() => scrollToSection(item.ref)}
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
