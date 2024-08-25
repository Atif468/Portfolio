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
    <nav className="backdrop-blur-md rounded-lg w-[90%] max-w-screen mx-auto shadow-2xl shadow-black p-4 mb-6 flex justify-between items-center sticky top-4 z-50">
      <div className="text-white text-4xl font-bold font-qwitcher hover:scale-150 hover:text-opacity-100 duration-300">
        Atif
      </div>
      <button
        onClick={toggleMenu}
        className="md:hidden text-white"
        aria-label="Toggle navigation menu"
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
        className={`flex flex-col md:flex-row md:space-x-7 absolute md:relative bg-white text-black text-xl p-1 md:text-white rounded-2xl md:bg-transparent w-60 md:w-min top-16 md:top-0 right-0 md:left-auto transition-all duration-300 ease-in-out ${
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
          <li key={index} className="hover:scale-125 duration-300">
            <a
              href={item.href}
              className="relative transition-all duration-300 after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[2px] after:bg-white after:transition-all after:duration-300 hover:after:w-full"
              onClick={() => {
                scrollToSection(item.ref);
                setIsOpen(false); // Close menu on click
              }}
              aria-label={`Go to ${item.label} section`}
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
